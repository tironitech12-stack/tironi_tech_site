import { track } from "@vercel/analytics";
import { getStoredCookieConsent } from "./cookieConsent";

export function trackFunnelEvent(name, properties = {}) {
  if (typeof window === "undefined") return;

  try {
    if (getStoredCookieConsent()?.analytics) {
      track(name, properties);
    }
  } catch {
    // Tracking must never interrupt the visitor's next step.
  }
}
