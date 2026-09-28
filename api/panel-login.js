import { createSessionCookie, panelIsConfigured, passwordMatches, sendJson } from './_lib/panel-auth.js';

const attempts = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 8;

function clientKey(request) {
  return String(request.headers['x-forwarded-for'] || request.socket?.remoteAddress || 'unknown').split(',')[0].trim();
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return sendJson(response, 405, { message: 'Método não permitido.' });
  }
  if (!panelIsConfigured()) return sendJson(response, 503, { code: 'PANEL_NOT_CONFIGURED', message: 'O acesso ao painel ainda precisa ser configurado.' });

  const key = clientKey(request);
  const now = Date.now();
  const current = attempts.get(key);
  const state = !current || now - current.startedAt > WINDOW_MS ? { startedAt: now, count: 0 } : current;
  if (state.count >= MAX_ATTEMPTS) return sendJson(response, 429, { message: 'Muitas tentativas. Aguarde alguns minutos.' });

  let body = request.body || {};
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { return sendJson(response, 400, { message: 'Dados inválidos.' }); }
  }
  if (!passwordMatches(String(body.password || ''))) {
    state.count += 1;
    attempts.set(key, state);
    return sendJson(response, 401, { message: 'Senha incorreta.' });
  }

  attempts.delete(key);
  response.setHeader('Set-Cookie', createSessionCookie());
  return sendJson(response, 200, { ok: true });
}
