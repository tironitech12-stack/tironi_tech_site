import { Analytics } from '@vercel/analytics/react';
import { lazy, Suspense, useEffect, useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { COOKIE_CONSENT_UPDATED_EVENT, getStoredCookieConsent } from "./utils/cookieConsent";

const ResponsiveHome = lazy(() => import('./responsive/ResponsiveHome'));
const LegalPolicyPage = lazy(() => import('./components/pages/LegalPolicyPage'));
const ClubPage = lazy(() => import('./components/pages/ClubPage'));
const BlogIndexPage = lazy(() => import('./components/pages/BlogIndexPage'));
const BlogArticlePage = lazy(() => import('./components/pages/BlogArticlePage'));

function ConsentAwareAnalytics() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(() => Boolean(getStoredCookieConsent()?.analytics));

  useEffect(() => {
    function syncAnalyticsConsent(event) {
      const consent = event.detail || getStoredCookieConsent();
      setAnalyticsAllowed(Boolean(consent?.analytics));
    }

    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, syncAnalyticsConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, syncAnalyticsConsent);
  }, []);

  return analyticsAllowed ? <Analytics /> : null;
}

function AppContent() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";

  if (pathname === "/club" || pathname === "/club/") {
    return <ClubPage />;
  }

  if (pathname === "/blog" || pathname === "/blog/") {
    return <BlogIndexPage />;
  }

  if (pathname.startsWith("/blog/")) {
    return <BlogArticlePage slug={decodeURIComponent(pathname.replace(/^\/blog\//, "").replace(/\/$/, ""))} />;
  }

  if (pathname === "/politica-privacidade") {
    return <LegalPolicyPage policy="privacy" />;
  }

  if (pathname === "/politica-cookies") {
    return <LegalPolicyPage policy="cookies" />;
  }

  return <ResponsiveHome />;
}

export default function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={null}><AppContent /></Suspense>
      <ConsentAwareAnalytics />
    </LanguageProvider>
  );
}
