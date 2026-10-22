import { track } from "@vercel/analytics";
import { getStoredCookieConsent } from "./cookieConsent";
import { GOOGLE_ANALYTICS_ID } from "./googleTag";

export function trackFunnelEvent(name, properties = {}) {
  if (typeof window === "undefined") return;

  try {
    if (getStoredCookieConsent()?.analytics) {
      const context = { page_path: window.location.pathname, ...properties };
      track(name, context);
      if (typeof window.gtag === "function") {
        window.gtag("event", name, { ...context, send_to: GOOGLE_ANALYTICS_ID });
      }
    }
  } catch {
    // Tracking must never interrupt the visitor's next step.
  }
}
