import { useEffect } from 'react';
import '../../styles/theme.css';
import { useLanguage } from '../../context/LanguageContext';
import { clubContent } from '../../content/clubContent';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import CookieConsent from '../shared/CookieConsent';
import ClubSection from '../sections/ClubSection';
import { reportWhatsAppConversionAndRedirect } from '../../utils/googleAdsConversion';

export default function ClubPage() {
  const { t, language, setLanguage, languageOptions } = useLanguage();
  const copy = clubContent[language] || clubContent.pt;
  const href = `https://wa.me/558599498149?text=${encodeURIComponent(copy.message)}`;
  const back = { pt: 'Voltar para a TironiTech', en: 'Back to TironiTech', es: 'Volver a TironiTech' }[language] || 'TironiTech';

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Tironi Tech Club | ${copy.title.join(' ')}`;
    return () => { document.title = previousTitle; };
  }, [copy]);

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
            <a className="tt-club-cta" href={href} onClick={(event) => {
              if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
              event.preventDefault();
              reportWhatsAppConversionAndRedirect(href);
            }}>{copy.cta}<span aria-hidden="true">↗</span></a>
            <a className="tt-club-back" href="/">← {back}</a>
          </section>
        </main>
        <Footer t={t} contactEmail="tironi@tironitech.com" whatsappNumber="558599498149" language={language} setLanguage={setLanguage} languageOptions={languageOptions} />
        <CookieConsent t={t} />
      </div>
    </div>
  );
}
