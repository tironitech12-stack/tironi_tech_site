import crypto from 'node:crypto';
import { Buffer } from 'node:buffer';
import process from 'node:process';

const COOKIE_NAME = 'tt_panel_session';
const SESSION_DURATION_SECONDS = 8 * 60 * 60;

function secret() {
  return process.env.PANEL_SESSION_SECRET || process.env.PANEL_PASSWORD || '';
}

function sign(value) {
  return crypto.createHmac('sha256', secret()).update(value).digest('base64url');
}

function safeEqual(left, right) {
  const a = Buffer.from(String(left));
  const b = Buffer.from(String(right));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function parseCookies(request) {
  return Object.fromEntries(String(request.headers.cookie || '').split(';').map((part) => {
    const index = part.indexOf('=');
    if (index < 0) return ['', ''];
    return [part.slice(0, index).trim(), decodeURIComponent(part.slice(index + 1).trim())];
  }).filter(([name]) => name));
}

export function panelIsConfigured() {
  return Boolean(process.env.PANEL_PASSWORD && secret());
}

export function passwordMatches(candidate) {
  return panelIsConfigured() && safeEqual(candidate, process.env.PANEL_PASSWORD);
}

export function createSessionCookie() {
  const payload = Buffer.from(JSON.stringify({ exp: Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS })).toString('base64url');
  const token = `${payload}.${sign(payload)}`;
  return `${COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${SESSION_DURATION_SECONDS}`;
}

export function clearSessionCookie() {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
}

export function isPanelAuthenticated(request) {
  if (!panelIsConfigured()) return false;
  const token = parseCookies(request)[COOKIE_NAME];
  if (!token) return false;
  const [payload, signature] = token.split('.');
  if (!payload || !signature || !safeEqual(signature, sign(payload))) return false;
  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    return Number(session.exp) > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export function sendJson(response, status, body) {
  response.setHeader('Cache-Control', 'private, no-store, max-age=0');
  response.setHeader('X-Robots-Tag', 'noindex, nofollow');
  return response.status(status).json(body);
}
