import { track } from "@vercel/analytics";
import { getStoredCookieConsent } from "./cookieConsent";
import { GOOGLE_ANALYTICS_ID } from "./googleTag";

export function trackFunnelEvent(name, properties = {}) {
  if (typeof window === "undefined") return;

  try {
    if (getStoredCookieConsent()?.analytics) {
      track(name, properties);
      if (typeof window.gtag === "function") {
        window.gtag("event", name, { ...properties, send_to: GOOGLE_ANALYTICS_ID });
      }
    }
  } catch {
    // Tracking must never interrupt the visitor's next step.
  }
}
