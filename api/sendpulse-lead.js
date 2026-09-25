import process from 'node:process';

const SENDPULSE_API = 'https://api.sendpulse.com';
const ALLOWED_ORIGINS = new Set(['https://www.tironitech.com', 'https://tironitech.com']);
let cachedToken = null;
let tokenExpiresAt = 0;

function clean(value, maxLength) {
  const printable = Array.from(String(value || ''), (character) => {
    const codePoint = character.codePointAt(0);
    return codePoint >= 32 && codePoint !== 127 ? character : ' ';
  }).join('');
  return printable.replace(/\s+/g, ' ').trim().slice(0, maxLength);
}

function json(response, status, payload) {
  response.setHeader('Cache-Control', 'no-store');
  return response.status(status).json(payload);
}

async function getAccessToken() {
  if (process.env.SENDPULSE_API_KEY) return process.env.SENDPULSE_API_KEY;
  if (cachedToken && Date.now() < tokenExpiresAt) return cachedToken;
  const clientId = process.env.SENDPULSE_CLIENT_ID;
  const clientSecret = process.env.SENDPULSE_CLIENT_SECRET;
  if (!clientId || !clientSecret) throw new Error('SendPulse credentials are not configured');
  const tokenResponse = await fetch(`${SENDPULSE_API}/oauth/access_token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ grant_type: 'client_credentials', client_id: clientId, client_secret: clientSecret }),
  });
  const tokenData = await tokenResponse.json().catch(() => ({}));
  if (!tokenResponse.ok || !tokenData.access_token) throw new Error('SendPulse authentication failed');
  cachedToken = tokenData.access_token;
  tokenExpiresAt = Date.now() + Math.max(60, Number(tokenData.expires_in || 3600) - 120) * 1000;
  return cachedToken;
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return json(response, 405, { message: 'Método não permitido.' });
  }

  const origin = request.headers.origin;
  const isLocal = origin && /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
  if (origin && !ALLOWED_ORIGINS.has(origin) && !isLocal) return json(response, 403, { message: 'Origem não permitida.' });

  let body;
  try {
    body = typeof request.body === 'string' ? JSON.parse(request.body || '{}') : (request.body || {});
  } catch {
    return json(response, 400, { message: 'Dados inválidos.' });
  }
  if (body.website) return json(response, 200, { ok: true });

  const lead = {
    name: clean(body.name, 100),
    email: clean(body.email, 160).toLowerCase(),
    phone: clean(body.phone, 24),
    company: clean(body.company, 120),
    interest: clean(body.interest, 120),
    source: clean(body.source, 255),
    page: clean(body.page, 255),
    utmSource: clean(body.utmSource, 120),
    utmMedium: clean(body.utmMedium, 120),
    utmCampaign: clean(body.utmCampaign, 120),
  };

  if (!body.consent || lead.name.length < 2 || lead.company.length < 2 || lead.interest.length < 2) return json(response, 400, { message: 'Preencha os campos obrigatórios e autorize o contato.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return json(response, 400, { message: 'Informe um e-mail válido.' });
  let phoneDigits = lead.phone.replace(/\D/g, '');
  if (!lead.phone.startsWith('+') && (phoneDigits.length === 10 || phoneDigits.length === 11)) phoneDigits = `55${phoneDigits}`;
  if (phoneDigits.length < 10 || phoneDigits.length > 15) return json(response, 400, { message: 'Informe um telefone válido, com DDD.' });

  const addressBookId = clean(process.env.SENDPULSE_ADDRESSBOOK_ID, 32);
  if (!addressBookId) return json(response, 503, { message: 'O formulário está sendo configurado. Fale conosco pelo WhatsApp.' });

  try {
    const token = await getAccessToken();
    const sendpulseResponse = await fetch(`${SENDPULSE_API}/addressbooks/${encodeURIComponent(addressBookId)}/emails`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        emails: [{
          email: lead.email,
          variables: {
            Name: lead.name,
            Phone: `+${phoneDigits}`,
            Empresa: lead.company,
            Interesse: lead.interest,
            Origem: lead.source,
            Pagina: lead.page,
            UTM_Source: lead.utmSource,
            UTM_Medium: lead.utmMedium,
            UTM_Campaign: lead.utmCampaign,
            Consentimento: new Date().toISOString(),
          },
        }],
      }),
    });
    const sendpulseData = await sendpulseResponse.json().catch(() => ({}));
    if (!sendpulseResponse.ok || sendpulseData.result !== true) throw new Error('SendPulse rejected lead');
    return json(response, 200, { ok: true });
  } catch (error) {
    console.error('SendPulse lead error:', error.message);
    return json(response, 502, { message: 'Não foi possível registrar seus dados agora. Tente novamente ou fale pelo WhatsApp.' });
  }
}
