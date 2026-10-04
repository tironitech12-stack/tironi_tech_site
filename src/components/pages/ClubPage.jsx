import { useEffect } from 'react';
import '../../styles/theme.css';
import { useLanguage } from '../../context/LanguageContext';
import { clubContent } from '../../content/clubContent';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import CookieConsent from '../shared/CookieConsent';
import ClubSection from '../sections/ClubSection';
import { diagnosticHref } from '../../content/positioning';
import { applyPageMeta } from '../../utils/pageMeta';
import { trackFunnelEvent } from '../../utils/conversionTracking';

export default function ClubPage() {
  const { t, language, setLanguage, languageOptions } = useLanguage();
  const copy = clubContent[language] || clubContent.pt;
  const href = diagnosticHref('club', 'club-final');
  const back = { pt: 'Voltar para a TironiTech', en: 'Back to TironiTech', es: 'Volver a TironiTech' }[language] || 'TironiTech';

  useEffect(() => {
    applyPageMeta({
      title: 'Tironi Tech Club | Transformação contínua com execução',
      description: copy.description,
      path: '/club',
      breadcrumbs: [
        { name: 'Início', path: '/' },
        { name: 'Tironi Tech Club', path: '/club' },
      ],
    });
    trackFunnelEvent('club_view', { language });
    window.scrollTo(0, 0);
  }, [copy.description, language]);

  return (
    <div className="tt2-page tt-club-page">
      <div className="tt2-page-inner">
        <Navbar t={t} language={language} setLanguage={setLanguage} languageOptions={languageOptions} />
        <main className="tt2-site-main">
          <ClubSection />
          <section className="tt-club-join" aria-labelledby="club-join-title">
            <span className="tt-club-label">TIRONI TECH <b>CLUB</b></span>
            <h2 id="club-join-title">{copy.connection}</h2>
            <p>{copy.note}</p>
            <a className="tt-club-cta" href={href}>{copy.cta}<span aria-hidden="true">↗</span></a>
            <a className="tt-club-back" href="/">← {back}</a>
          </section>
        </main>
        <Footer t={t} contactEmail="tironi@tironitech.com" whatsappNumber="5543996676633" language={language} setLanguage={setLanguage} languageOptions={languageOptions} />
        <CookieConsent t={t} />
      </div>
    </div>
  );
}
