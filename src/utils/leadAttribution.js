import { getStoredCookieConsent, COOKIE_CONSENT_UPDATED_EVENT } from './cookieConsent.js';

const storageKey = 'tironitech_lead_attribution';

function readEntry() {
  const url = new URL(window.location.href);
  const referrer = document.referrer ? new URL(document.referrer) : null;
  return {
    source: referrer && referrer.origin !== url.origin ? referrer.hostname : 'acesso direto',
    page: url.origin + url.pathname,
    utmSource: url.searchParams.get('utm_source') || '',
    utmMedium: url.searchParams.get('utm_medium') || '',
    utmCampaign: url.searchParams.get('utm_campaign') || '',
  };
}

export function installLeadAttribution() {
  const entry = readEntry();
  function sync() {
    try {
      if (!getStoredCookieConsent()?.analytics) {
        window.sessionStorage.removeItem(storageKey);
        return;
      }
      if (entry.utmSource || entry.source !== 'acesso direto' || !window.sessionStorage.getItem(storageKey)) {
        window.sessionStorage.setItem(storageKey, JSON.stringify(entry));
      }
    } catch {
      // Attribution is optional when browser storage is unavailable.
    }
  }

  sync();
  window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, sync);
}

export function getLeadAttribution() {
  if (getStoredCookieConsent()?.analytics) {
    try {
      return JSON.parse(window.sessionStorage.getItem(storageKey)) || readEntry();
    } catch {
      return readEntry();
    }
  }

  return { page: window.location.origin + window.location.pathname };
}
