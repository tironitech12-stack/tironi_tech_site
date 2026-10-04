import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getPositioning } from '../../content/positioning';
import { getSiteText } from '../../content/siteContent';
import { applyPageMeta } from '../../utils/pageMeta';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import CookieConsent from '../shared/CookieConsent';
import FloatingWhatsAppButton from '../ui/FloatingWhatsAppButton';
import '../../styles/theme.css';
import '../../styles/positioning.css';

const PATHS = {
  method: '/como-funciona',
  tools: '/ferramentas',
  development: '/desenvolvimento',
  results: '/resultados',
};

const CRUMB_NAMES = {
  pt: { method: 'Como funciona', tools: 'Ferramentas', development: 'Desenvolvimento', results: 'Resultados', home: 'Início' },
  en: { method: 'How it works', tools: 'Tools', development: 'Development', results: 'Results', home: 'Home' },
  es: { method: 'Cómo funciona', tools: 'Herramientas', development: 'Desarrollo', results: 'Resultados', home: 'Inicio' },
};

export default function OfferPage({ pageKey }) {
  const { t, language, setLanguage, languageOptions } = useLanguage();
  const copy = getPositioning(language);
  const page = copy.pages[pageKey];
  const projects = page.showProjects ? getSiteText(language).featuredProjects.items : [];

  useEffect(() => {
    const labels = CRUMB_NAMES[language] || CRUMB_NAMES.pt;
    applyPageMeta({
      title: page.seoTitle,
      description: page.seoDescription,
      path: PATHS[pageKey],
      breadcrumbs: [
        { name: labels.home, path: '/' },
        { name: labels[pageKey], path: PATHS[pageKey] },
      ],
    });
    window.scrollTo(0, 0);
  }, [language, page.seoDescription, page.seoTitle, pageKey]);

  return (
    <div className="tt2-page tt-offer-page">
      <div className="tt2-page-inner">
        <Navbar t={t} language={language} setLanguage={setLanguage} languageOptions={languageOptions} />
        <main className="tt-offer">
          <header className="tt-offer-hero">
            <p>{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="tt-offer-lead">{page.lead}</p>
            <div className="tt-offer-actions">
              <a className="tt-offer-primary" href={page.primaryHref}>{page.primaryLabel}<span aria-hidden="true">↗</span></a>
              {page.secondaryLabel ? <a className="tt-offer-secondary" href={page.secondaryHref}>{page.secondaryLabel}<span aria-hidden="true">→</span></a> : null}
            </div>
          </header>

          {page.proof ? (
            <section className="tt-offer-proof" aria-label={page.title}>
              {page.proof.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </section>
          ) : null}

          {page.sections.map((section) => (
            <section key={section.title} className={`tt-offer-section tt-offer-${section.type}`}>
              <h2>{section.title}</h2>
              {section.type === 'prose' ? section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : null}
              {section.type === 'steps' ? (
                <ol>
                  {section.items.map(([title, text], index) => (
                    <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></li>
                  ))}
                </ol>
              ) : null}
              {section.type === 'cards' ? (
                <div className="tt-offer-cards">
                  {section.items.map(([title, text, href]) => (
                    <article key={title}>
                      <h3>{href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{title}</a> : title}</h3>
                      <p>{text}</p>
                    </article>
                  ))}
                </div>
              ) : null}
              {section.type === 'links' ? (
                <ul className="tt-offer-links">
                  {section.items.map(([label, href, text]) => (
                    <li key={href}><a href={href}><strong>{label}</strong><span>{text}</span></a></li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {projects.length ? (
            <section className="tt-offer-section">
              <h2>{t.featuredProjects.title}</h2>
              <div className="tt-offer-cards">
                {projects.map((project) => (
                  <article key={project.title}>
                    <p className="tt-offer-tag">{project.tag}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </main>
        <Footer t={t} contactEmail="tironi@tironitech.com" whatsappNumber="5543996676633" language={language} setLanguage={setLanguage} languageOptions={languageOptions} />
        <FloatingWhatsAppButton />
        <CookieConsent t={t} />
      </div>
    </div>
  );
}
