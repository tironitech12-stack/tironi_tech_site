import process from 'node:process';
import { Buffer } from 'node:buffer';
import { timingSafeEqual } from 'node:crypto';
import { createSearchConsole } from './_lib/search-console.js';

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'private, no-store');
  response.setHeader('X-Robots-Tag', 'noindex, nofollow');
  const token = process.env.GSC_API_TOKEN;
  if (!token) return response.status(503).json({ code: 'GSC_NOT_CONFIGURED' });
  const actual = Buffer.from(request.headers?.authorization || '');
  const expected = Buffer.from(`Bearer ${token}`);
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) {
    return response.status(401).json({ code: 'UNAUTHORIZED' });
  }
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ code: 'METHOD_NOT_ALLOWED' });
  }
  const { action = 'sites', startDate, endDate, dimensions = 'date', url } = request.query || {};
  if (!['sites', 'performance', 'sitemaps', 'inspect'].includes(action)) {
    return response.status(400).json({ code: 'INVALID_ACTION' });
  }
  try {
    const gsc = createSearchConsole();
    const data = action === 'performance'
      ? await gsc.performance({ startDate, endDate, dimensions: String(dimensions).split(',') })
      : action === 'inspect' ? await gsc.inspect(url) : await gsc[action]();
    return response.status(200).json(data);
  } catch {
    return response.status(502).json({ code: 'GSC_QUERY_FAILED', message: 'Confira parâmetros, credenciais e acesso à propriedade.' });
  }
}
