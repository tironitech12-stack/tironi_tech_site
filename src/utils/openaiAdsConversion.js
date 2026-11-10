import { COOKIE_CONSENT_UPDATED_EVENT, getStoredCookieConsent } from './cookieConsent';

export const OPENAI_ADS_PIXEL_ID = 'QzffkApkFtwFMCpgsADApu';
let initialized = false;
let installed = false;

export function ensureOpenAIAdsPixel() {
  if (typeof window === 'undefined' || !getStoredCookieConsent()?.marketing) return false;
  try {
    if (!initialized) {
      if (!window.oaiq) {
        const queue = function (...args) { queue.q.push(args); };
        queue.q = [];
        window.oaiq = queue;
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://bzrcdn.openai.com/sdk/oaiq.min.js';
        document.head.appendChild(script);
      }
      window.oaiq('init', { pixelId: OPENAI_ADS_PIXEL_ID });
      initialized = true;
    }
    return true;
  } catch { return false; }
}

export function trackOpenAIWhatsAppClick() {
  try {
    if (ensureOpenAIAdsPixel()) window.oaiq('measure', 'lead_created', { type: 'customer_action' });
  } catch { /* Measurement must never block opening WhatsApp. */ }
}

export function installOpenAIAdsTracking() {
  if (typeof window === 'undefined' || installed) return;
  installed = true;
  ensureOpenAIAdsPixel();
  window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, ensureOpenAIAdsPixel);
  const onClick = (event) => {
    if (event.type === 'auxclick' ? event.button !== 1 : event.button !== 0) return;
    const anchor = event.target?.closest?.('a[href]');
    if (!anchor) return;
    try {
      const url = new URL(anchor.href);
      const phone = url.hostname === 'wa.me' ? url.pathname.slice(1) :
        ['api.whatsapp.com', 'web.whatsapp.com'].includes(url.hostname) && url.pathname === '/send' ? url.searchParams.get('phone') : null;
      if (url.protocol === 'https:' && phone === '5543996676633') trackOpenAIWhatsAppClick();
    } catch { /* Ignore unrelated or malformed links. */ }
  };
  // Capture includes the existing redirect handlers; one event per activation.
  document.addEventListener('click', onClick, true);
  document.addEventListener('auxclick', onClick, true);
}
