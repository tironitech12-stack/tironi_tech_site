import { clearSessionCookie, sendJson } from './_lib/panel-auth.js';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return sendJson(response, 405, { message: 'Método não permitido.' });
  }
  response.setHeader('Set-Cookie', clearSessionCookie());
  return sendJson(response, 200, { ok: true });
}
