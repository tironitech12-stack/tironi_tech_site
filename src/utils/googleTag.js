export const GOOGLE_ANALYTICS_ID = "G-58SQM6BLN1";
export const GOOGLE_ADS_ID = "AW-18295268277";

const GOOGLE_TAG_SCRIPT_ID = "tt-google-tag";
const configuredTargets = new Set();
let queueInitialized = false;

function initializeQueue() {
  if (typeof window === "undefined") return null;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  if (!queueInitialized) {
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });
    window.gtag("js", new Date());
    queueInitialized = true;
  }

  return window.gtag;
}

export function updateGoogleConsent({ analytics = false, marketing = false } = {}) {
  if (typeof window === "undefined" || (typeof window.gtag !== "function" && !analytics && !marketing)) return;

  const gtag = initializeQueue();
  gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
  });
}

export function ensureGoogleTag({ analytics = false, marketing = false } = {}) {
  if (typeof window === "undefined" || (!analytics && !marketing)) return false;

  const gtag = initializeQueue();
  updateGoogleConsent({ analytics, marketing });

  if (!document.getElementById(GOOGLE_TAG_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = GOOGLE_TAG_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analytics ? GOOGLE_ANALYTICS_ID : GOOGLE_ADS_ID}`;
    document.head.appendChild(script);
  }

  if (analytics && !configuredTargets.has(GOOGLE_ANALYTICS_ID)) {
    gtag("config", GOOGLE_ANALYTICS_ID, { send_page_view: false });
    configuredTargets.add(GOOGLE_ANALYTICS_ID);
  }

  if (marketing && !configuredTargets.has(GOOGLE_ADS_ID)) {
    gtag("config", GOOGLE_ADS_ID);
    configuredTargets.add(GOOGLE_ADS_ID);
  }

  return true;
}

export function trackGooglePageView() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    send_to: GOOGLE_ANALYTICS_ID,
    page_title: document.title,
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.search}`,
  });
}
