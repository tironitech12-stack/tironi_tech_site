import { Analytics } from '@vercel/analytics/react';
import { lazy, Suspense, useEffect, useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { COOKIE_CONSENT_UPDATED_EVENT, getStoredCookieConsent } from "./utils/cookieConsent";
import { getServiceLandingPage } from './content/serviceLandingPages';

const loadResponsiveHome = () => import('./responsive/ResponsiveHome');
const loadBlogIndexPage = () => import('./components/pages/BlogIndexPage');
const loadBlogArticlePage = () => import('./components/pages/BlogArticlePage');
const ResponsiveHome = lazy(loadResponsiveHome);
const LegalPolicyPage = lazy(() => import('./components/pages/LegalPolicyPage'));
const ClubPage = lazy(() => import('./components/pages/ClubPage'));
const BlogIndexPage = lazy(loadBlogIndexPage);
const BlogArticlePage = lazy(loadBlogArticlePage);
const BlogArchivePage = lazy(() => import('./components/pages/BlogArchivePage'));
const ContentMapPage = lazy(() => import('./components/pages/ContentMapPage'));
const ServiceLandingPage = lazy(() => import('./components/pages/ServiceLandingPage'));
const EditorialPolicyPage = lazy(() => import('./components/pages/EditorialPolicyPage'));
const LeadFormPage = lazy(() => import('./components/pages/LeadFormPage'));
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage'));

function getClientLocation() {
  if (typeof window === 'undefined') return '/';
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

function useClientLocation() {
  const [location, setLocation] = useState(getClientLocation);

  useEffect(() => {
    const syncLocation = () => setLocation(getClientLocation());
    const preloadInternalRoute = (event) => {
      const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!anchor) return;
      const nextUrl = new URL(anchor.href, window.location.href);
      if (nextUrl.origin === window.location.origin && /^\/(?:en\/|es\/)?blog(?:\/|$)/.test(nextUrl.pathname)) {
        const match = nextUrl.pathname.match(/^\/(?:(en|es)\/)?blog\/([^/]+)\/?$/);
        const isArchive = match?.[2] === 'arquivo' || match?.[2] === 'archive';
        if (match && !isArchive) {
          const locale = match[1] || 'pt';
          const slug = decodeURIComponent(match[2]);
          loadBlogArticlePage().catch(() => {});
          fetch(`/article-data/${locale}/${encodeURIComponent(slug)}.json`).catch(() => {});
        } else {
          loadBlogIndexPage().catch(() => {});
        }
      }
    };
    const handleClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return;
      const nextUrl = new URL(anchor.href, window.location.href);
      if (nextUrl.origin !== window.location.origin) return;
      const currentUrl = new URL(window.location.href);
      if (nextUrl.pathname === currentUrl.pathname && nextUrl.search === currentUrl.search && nextUrl.hash) return;
      event.preventDefault();
      if (currentUrl.pathname !== '/' && nextUrl.pathname === '/') {
        try { window.sessionStorage.setItem('tironi_intro_seen_v4', 'true'); } catch { /* Navigation remains available without storage. */ }
      }
      window.history.pushState({}, '', `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
      syncLocation();
    };

    window.addEventListener('popstate', syncLocation);
    document.addEventListener('click', handleClick);
    document.addEventListener('pointerover', preloadInternalRoute, { passive: true });
    return () => {
      window.removeEventListener('popstate', syncLocation);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('pointerover', preloadInternalRoute);
    };
  }, []);

  return location;
}

function RouteFallback() {
  return (
    <div className="tt-route-loading" role="status" aria-label="Carregando página">
      <span className="tt-route-loading-mark">T</span>
      <span>Carregando</span>
    </div>
  );
}

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

function AppContent({ pathname }) {
  const localizedBlog = pathname.match(/^\/(en|es)\/blog(?:\/(.*))?\/?$/);
  const servicePage = getServiceLandingPage(pathname.replace(/^\//, '').replace(/\/$/, ''));

  useEffect(() => {
    if (!(pathname.startsWith('/blog') || /^\/(en|es)\/blog/.test(pathname))) return undefined;
    const preload = loadResponsiveHome;
    const run = () => preload().catch(() => {});
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(run, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(run, 1200);
    return () => window.clearTimeout(id);
  }, [pathname]);

  if (localizedBlog) {
    const [, locale, slug] = localizedBlog;
    if (slug?.replace(/\/$/, '') === 'archive') return <BlogArchivePage locale={locale} />;
    return slug ? <BlogArticlePage slug={decodeURIComponent(slug.replace(/\/$/, ""))} locale={locale} /> : <BlogIndexPage locale={locale} />;
  }

  if (pathname === "/club" || pathname === "/club/") {
    return <ClubPage />;
  }

  if (pathname === "/blog" || pathname === "/blog/") {
    return <BlogIndexPage locale="pt" />;
  }

  if (pathname === "/blog/arquivo" || pathname === "/blog/arquivo/") {
    return <BlogArchivePage locale="pt" />;
  }

  if (pathname.startsWith("/blog/")) {
    return <BlogArticlePage slug={decodeURIComponent(pathname.replace(/^\/blog\//, "").replace(/\/$/, ""))} locale="pt" />;
  }

  if (pathname === "/mapa-do-site" || pathname === "/mapa-do-site/") {
    return <ContentMapPage />;
  }

  if (pathname === "/sobre/editorial" || pathname === "/sobre/editorial/") {
    return <EditorialPolicyPage />;
  }

  if (pathname === "/formulario" || pathname === "/formulario/") {
    return <LeadFormPage />;
  }

  if (pathname === "/politica-privacidade") {
    return <LegalPolicyPage policy="privacy" />;
  }

  if (pathname === "/politica-cookies") {
    return <LegalPolicyPage policy="cookies" />;
  }

  if (servicePage) return <ServiceLandingPage page={servicePage} />;

  if (pathname === '/') return <ResponsiveHome />;

  return <NotFoundPage />;
}

export default function App() {
  const location = useClientLocation();
  const pathname = location.split(/[?#]/, 1)[0] || '/';

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    let attempts = 0;
    let frameId;
    const revealTarget = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ block: 'start' });
        return;
      }
      attempts += 1;
      if (attempts < 30) frameId = window.requestAnimationFrame(revealTarget);
    };
    frameId = window.requestAnimationFrame(revealTarget);
    return () => window.cancelAnimationFrame(frameId);
  }, [location]);

  useEffect(() => {
    if (pathname !== '/') return;
    document.documentElement.lang = 'pt-BR';
    document.title = 'Tironi Tech | Software Sob Medida e Automação com IA';
    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = 'https://www.tironitech.com/';
  }, [pathname]);

  return (
    <LanguageProvider>
      <Suspense fallback={<RouteFallback />}><AppContent pathname={pathname} /></Suspense>
      <ConsentAwareAnalytics />
    </LanguageProvider>
  );
}
