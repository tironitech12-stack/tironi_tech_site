import process from 'node:process';

const VERCEL_API = 'https://api.vercel.com/v1/query/web-analytics';
const ALLOWED_DAYS = new Set([7, 30, 90]);

function sendJson(response, status, body) {
  response.setHeader('Cache-Control', 'private, no-store, max-age=0');
  response.setHeader('X-Robots-Tag', 'noindex, nofollow');
  return response.status(status).json(body);
}

async function queryAnalytics(dataset, mode, parameters) {
  const search = new URLSearchParams({
    projectId: process.env.VERCEL_ANALYTICS_PROJECT_ID,
    since: parameters.since,
    until: parameters.until,
  });
  if (process.env.VERCEL_ANALYTICS_TEAM_ID) search.set('teamId', process.env.VERCEL_ANALYTICS_TEAM_ID);
  if (parameters.by) search.set('by', parameters.by);
  if (parameters.limit) search.set('limit', String(parameters.limit));
  if (parameters.filter) search.set('filter', parameters.filter);
  const result = await fetch(`${VERCEL_API}/${dataset}/${mode}?${search}`, {
    headers: { Authorization: `Bearer ${process.env.VERCEL_TOKEN}`, Accept: 'application/json' },
  });
  const body = await result.json().catch(() => ({}));
  if (!result.ok) {
    const error = new Error(body.error?.message || body.message || `Vercel Analytics respondeu com ${result.status}`);
    error.status = result.status;
    throw error;
  }
  return body;
}

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return sendJson(response, 405, { message: 'Método não permitido.' });
  }
  const missing = ['VERCEL_TOKEN', 'VERCEL_ANALYTICS_PROJECT_ID'].filter((name) => !process.env[name]);
  if (missing.length) return sendJson(response, 503, { code: 'ANALYTICS_NOT_CONFIGURED', missing, message: 'A fonte de dados do painel ainda precisa ser conectada.' });

  const requestedDays = Number(request.query?.days || 30);
  const days = ALLOWED_DAYS.has(requestedDays) ? requestedDays : 30;
  const until = new Date();
  const since = new Date(until.getTime() - days * 24 * 60 * 60 * 1000);
  const range = { since: since.toISOString(), until: until.toISOString() };

  try {
    const [summary, daily, pages, referrers, devices] = await Promise.all([
      queryAnalytics('visits', 'count', range),
      queryAnalytics('visits', 'aggregate', { ...range, by: 'day', limit: days }),
      queryAnalytics('visits', 'aggregate', { ...range, by: 'requestPath', limit: 30 }),
      queryAnalytics('visits', 'aggregate', { ...range, by: 'referrer', limit: 12 }),
      queryAnalytics('visits', 'aggregate', { ...range, by: 'deviceType', limit: 8 }),
    ]);
    return sendJson(response, 200, {
      generatedAt: new Date().toISOString(), days, summary, daily, pages, referrers, devices,
      recordingsUrl: process.env.CLARITY_PROJECT_ID ? `https://clarity.microsoft.com/projects/view/${encodeURIComponent(process.env.CLARITY_PROJECT_ID)}/impressions` : null,
    });
  } catch (error) {
    console.error('Panel analytics error:', error.message);
    return sendJson(response, 502, { code: 'ANALYTICS_UNAVAILABLE', message: 'Não foi possível consultar os dados da Vercel agora.' });
  }
}
