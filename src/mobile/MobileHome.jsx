import { useEffect, useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import ChatboSpotlight from "../components/sections/ChatboSpotlight";
import BlogHighlight from "../components/sections/BlogHighlight";
import LogoLoop from "../components/ui/LogoLoop";
import "../styles/client-showcase.css";
import ClubHighlight from "../components/sections/ClubHighlight";
import { PillarsSection, ToolsSection } from "../components/sections/PositioningHomeSections";
import HeroPitch from "../components/shared/HeroPitch";
import CookieConsent from "../components/shared/CookieConsent";
import CountUpStat from "../components/shared/CountUpStat";
import FloatingWhatsAppButton from "../components/ui/FloatingWhatsAppButton";
import Footer from "../components/layout/Footer";
import newstoreSorteiosLogo from "../assets/newstore-sorteios-logo.png";
import { diagnosticHref } from "../content/positioning";
import { trackFunnelEvent } from "../utils/conversionTracking";
import { getProjectStory } from "../content/projectStories";
import { getSolutionExperience, solutionLinks } from "../content/solutionExperience";
import BusinessResultsSection from "../components/sections/BusinessResultsSection";
import CommercialSolutionsLinks from "../components/sections/CommercialSolutionsLinks";
import FounderProfile from "../components/shared/FounderProfile";

const CONTACT_EMAIL = "tironi@tironitech.com";
const WHATSAPP_NUMBER = "5543996676633";

const MOBILE_CTA_LABELS = { pt: "Diagnóstico", en: "Diagnosis", es: "Diagnóstico" };

const mobileMarqueeLogos = [
  {
    name: "Casa do Treinamento",
    logo: "https://static.wixstatic.com/media/66390a_cf49547989da4c958d61781ae270cf89~mv2.png/v1/fill/w_152,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Casa-removebg-preview.png",
  },
  {
    name: "Multiplier",
    logo: "https://static.wixstatic.com/media/66390a_f590687d46c343baa3fd561a42e5abb4~mv2.png/v1/fill/w_136,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/multi-removebg-preview.png",
  },
  {
    name: "NewStore",
    logo: "https://static.wixstatic.com/media/66390a_f4171a1ecc954a2692725c5810dbd393~mv2.png/v1/fill/w_249,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/newstore_PNG.png",
  },
  {
    name: "Coopermais",
    logo: "https://static.wixstatic.com/media/66390a_8b6c94ee29fe4e57907cd67518d88c6c~mv2.png/v1/crop/x_25,y_0,w_212,h_73/fill/w_278,h_96,al_c,lg_1,q_85,enc_avif,quality_auto/coopermais_PNG.png",
  },
  { name: "EUTEC", logo: "/assets/clients/eutec.png" },
  { name: "Ziquita Agro-Paraná", logo: "/assets/clients/ziquita-agro-parana.png" },
  { name: "XNAMAI", logo: "/assets/clients/xnamai.png" },
  { name: "Instituto Potala", logo: "/assets/clients/instituto-potala.avif" },
];
const projectLinks = {
  SignGuard: "https://www.walletsignguard.com/",
  DeleteActPro: "https://www.deleteactpro.com/",
  "Sorteios NewStore": "#contato",
  "Sales Game": "https://www.salesgame.com.br/",
  "Sorteios xNaMai": "https://www.sorteiosxnamai.com.br/",
  "XNaMai Club": "#contato",
  MestreLead: "#contato",
  "BI Personalizado": "#contato",
  "ProfitPilot Ads": "https://www.profitpilotads.com/",
};
const projectLogos = {
  SignGuard: "/projects/sign-wallet-logo.png",
  DeleteActPro: "/projects/deleteactpro-logo.png",
  "Sorteios NewStore": newstoreSorteiosLogo,
  "Sales Game": "/projects/salesgame-logo.svg",
  "Sorteios xNaMai": "/assets/clients/xnamai.png",
  "XNaMai Club": "/assets/clients/xnamai.png",
  MestreLead: "/projects/mestrelead-logo.svg",
  "BI Personalizado": "/projects/bi-personalizado-logo.svg",
  "ProfitPilot Ads": "/projects/profitpilotads-logo.svg",
};

function useMobileStylesheet() {
  useEffect(() => {
    const id = "tironi-mobile-css";
    const href = new URL("../styles/mobile.css", import.meta.url).href;

    let link = document.getElementById(id);
    if (!link) {
      link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }

    return () => {
      const existing = document.getElementById(id);
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
    };
  }, []);
}

export default function MobileHome() {
  useMobileStylesheet();
  const { t, language, setLanguage, languageOptions } = useLanguage();
  const reduceMotion = useReducedMotion();
  const solutionExperience = getSolutionExperience(language);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const mobileProjects = t.featuredProjects.items;

  const handleProjectTabKeyDown = (event, index) => {
    const nextIndex = { ArrowRight: (index + 1) % mobileProjects.length, ArrowLeft: (index - 1 + mobileProjects.length) % mobileProjects.length, Home: 0, End: mobileProjects.length - 1 }[event.key];
    if (nextIndex === undefined) return;
    event.preventDefault();
    setActiveProjectIndex(nextIndex);
    event.currentTarget.parentElement.querySelectorAll('[role="tab"]')[nextIndex]?.focus();
  };

  return (
    <div className="mobile-site-shell">
      <header className="mobile-header">
        <a href="#inicio" className="mobile-brand">
          <div className="mobile-brand-mark">
            <img src="/brand/tironi-symbol-128.webp" alt="TironiTech" width="46" height="46" />
          </div>
          <div className="mobile-brand-copy">
            <strong>TironiTech</strong>
            <span>{t.brandTagline || "Tecnologia com clareza, estrutura e evolução"}</span>
          </div>
        </a>

        <div className="mobile-header-actions">
          <select className="tt2-language-select mobile-language-select" value={language} onChange={(e) => setLanguage(e.target.value)} aria-label={t.nav.languageLabel}>
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <a className="mobile-header-cta" href={diagnosticHref("club", "mobile-nav")}>
            {MOBILE_CTA_LABELS[language] || t.nav.cta}
          </a>
        </div>
      </header>

      <nav className="tt-club-mobile-nav" aria-label={t.footer.navTitle}>
        <a href="/club">{t.nav.club || "Club"}</a>
        <a href="/como-funciona">{t.nav.method || "Como funciona"}</a>
        <a href="/ferramentas">{t.nav.tools || "Ferramentas"}</a>
        <a href="/desenvolvimento">{t.nav.development || "Desenvolvimento"}</a>
        <a href="/resultados">{t.nav.results || "Resultados"}</a>
        <a href="/blog">{t.nav.insights || "Insights"}</a>
      </nav>

      <main className="mobile-main">
        <section className="mobile-hero tt-hero-impact" id="inicio">
          <HeroPitch copy={t.hero} mobile />
        </section>

        <PillarsSection />
        <CommercialSolutionsLinks />
        <ClubHighlight />
        <BusinessResultsSection compact />

        <section className="mobile-section mobile-trust-section tt2-clients-section tt-client-showcase" id="clientes">
          <div className="mobile-section-head">
            <span className="mobile-section-tag">{t.nav.clients}</span>
            <h2>{t.trustedBy.title}</h2>
            <p>{t.trustedBy.description}</p>
          </div>
          <div className="tt-client-showcase-loop">
            <LogoLoop
              logos={mobileMarqueeLogos.map((client) => ({ ...client, className: client.name === "Multiplier" ? "is-inverse" : client.name === "Ziquita Agro-Paraná" ? "is-ziquita" : client.name === "Instituto Potala" ? "is-potala" : "" }))}
              speed={50}
              hoverSpeed={15}
              logoHeight={44}
              gap={18}
              fadeOutColor="#071522"
              ariaLabel={t.trustedBy.title}
            />
          </div>
        </section>

        <section className="mobile-section mobile-proof-section" aria-label={t.experienceProof.title}>
          <div className="mobile-count-grid">
            {(t.experienceProof.metrics || t.hero.authority || []).map((item) => (
              <CountUpStat key={`${item.value}-${item.label}`} value={item.value} label={item.label} className="mobile-count-card" />
            ))}
          </div>
        </section>

        <section className="mobile-section" id="processo">
          <div className="mobile-section-head">
            <span className="mobile-section-tag">{t.process.eyebrow}</span>
            <h2>{t.process.title}</h2>
          </div>
          <div className="mobile-card-stack">
            {t.process.steps.map((step, index) => (
              <article key={step.title} className="mobile-info-card mobile-process-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mobile-section" id="servicos">
          <div className="mobile-section-head">
            <span className="mobile-section-tag">{t.solutions.eyebrow}</span>
            <h2>{t.solutions.title}</h2>
            <p>{solutionExperience.lead}</p>
          </div>
          <div className="mobile-services-proof">
            {solutionExperience.proof.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
          <div className="mobile-card-stack mobile-services-stack">
            {t.solutions.items.map((item, index) => (
              <article key={item.title} className="mobile-info-card mobile-service-story">
                <div className="mobile-service-story-top"><span>{String(index + 1).padStart(2, "0")}</span><small>{solutionExperience.items[index].signal}</small></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="mobile-service-outcome"><small>{solutionExperience.outcomeLabel}</small><strong>{solutionExperience.items[index].outcome}</strong></div>
                <div className="mobile-service-chips">{solutionExperience.items[index].chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
                <a href={solutionLinks[index]}>{solutionExperience.linkLabel}<span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="mobile-section" id="projetos">
          <div className="mobile-section-head">
            <span className="mobile-section-tag">{t.featuredProjects.eyebrow}</span>
            <h2>{t.featuredProjects.title}</h2>
            <p>{t.featuredProjects.description}</p>
          </div>
          <div className="mobile-project-showcase">
            <div className="mobile-project-tabs" role="tablist" aria-label={t.featuredProjects.eyebrow}>
              {mobileProjects.map((project, index) => (
                <button
                  key={project.title}
                  id={`mobile-project-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-controls={`mobile-project-panel-${index}`}
                  aria-selected={activeProjectIndex === index}
                  tabIndex={activeProjectIndex === index ? 0 : -1}
                  className={activeProjectIndex === index ? "is-active" : ""}
                  onClick={() => setActiveProjectIndex(index)}
                  onKeyDown={(event) => handleProjectTabKeyDown(event, index)}
                >
                  <img src={projectLogos[project.title]} alt="" />
                  <span>{project.title}</span>
                </button>
              ))}
            </div>
            {mobileProjects.map((project, index) => {
              const story = getProjectStory(language, project.title);
              const href = projectLinks[project.title] || "#contato";
              const isActive = activeProjectIndex === index;
              return (
              <Motion.article
                key={project.title}
                id={`mobile-project-panel-${index}`}
                role="tabpanel"
                aria-labelledby={`mobile-project-tab-${index}`}
                tabIndex={0}
                hidden={!isActive}
                className="mobile-project-feature"
                initial={false}
                animate={isActive || reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{ duration: reduceMotion ? 0 : 0.3 }}
              >
                <div className="mobile-project-feature-head">
                  <div>
                    <span className="mobile-project-number">{String(index + 1).padStart(2, "0")} / {String(mobileProjects.length).padStart(2, "0")}</span>
                    <span className="mobile-project-label">{project.tag}</span>
                  </div>
                  <div className="mobile-project-logo-wrap">
                    <img src={projectLogos[project.title]} alt={project.title} className="mobile-project-logo" />
                  </div>
                </div>
                <div className="mobile-project-copy">
                  <h3>{project.title}</h3>
                  <small className="mobile-project-case-label">{story.labels.challenge}</small>
                  <p>{story.challenge}</p>
                  <small className="mobile-project-case-label">{story.labels.solution}</small>
                  <p>{project.description}</p>
                  <small className="mobile-project-case-label">{story.labels.result}</small>
                  <p>{story.result}</p>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    onClick={() => trackFunnelEvent("project_case_click", { project: project.title, device: "mobile" })}
                  >
                    {project.cta}<span aria-hidden="true">↗</span>
                  </a>
                </div>
              </Motion.article>
              );
            })}
          </div>
        </section>

        <ToolsSection />
        <ChatboSpotlight t={t} />

        <section className="mobile-section" id="experiencia">
          <div className="mobile-section-head">
            <span className="mobile-section-tag">{t.about.eyebrow}</span>
            <h2>{t.about.title}</h2>
            <p>{t.about.description}</p>
          </div>
          <div className="mobile-highlight-grid">
            {t.about.items.map((item) => <div key={item.title} className="mobile-highlight-pill">{item.title}</div>)}
          </div>
          <FounderProfile language={language} />
        </section>

        <BlogHighlight />

        <section className="mobile-section mobile-cta-section" id="contato">
          <span className="mobile-section-tag">{t.nav.contact}</span>
          <h2>{t.finalCta.title}</h2>
          <p>{t.finalCta.description}</p>
          <div className="mobile-hero-actions">
            <a className="mobile-btn mobile-btn-primary" href={diagnosticHref("club", "mobile-final")}>
              {t.nav.cta}
            </a>
          </div>
        </section>
      </main>

      <Footer
        t={t}
        contactEmail={CONTACT_EMAIL}
        whatsappNumber={WHATSAPP_NUMBER}
        language={language}
        setLanguage={setLanguage}
        languageOptions={languageOptions}
      />

      <FloatingWhatsAppButton />
      <CookieConsent t={t} />
    </div>
  );
}
