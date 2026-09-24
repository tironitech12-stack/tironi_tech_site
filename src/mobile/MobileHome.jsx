import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import ChatboSpotlight from "../components/sections/ChatboSpotlight";
import BlogHighlight from "../components/sections/BlogHighlight";
import LogoLoop from "../components/ui/LogoLoop";
import "../styles/client-showcase.css";
import ClubHighlight from "../components/sections/ClubHighlight";
import HeroPitch from "../components/shared/HeroPitch";
import CookieConsent from "../components/shared/CookieConsent";
import CountUpStat from "../components/shared/CountUpStat";
import FloatingWhatsAppButton from "../components/ui/FloatingWhatsAppButton";
import Footer from "../components/layout/Footer";
import newstoreSorteiosLogo from "../assets/newstore-sorteios-logo.png";
import {
  DEFAULT_WHATSAPP_URL,
  reportWhatsAppConversionAndRedirect,
} from "../utils/googleAdsConversion";
import { trackFunnelEvent } from "../utils/conversionTracking";
import { getProjectStory } from "../content/projectStories";
import { getSolutionExperience, solutionLinks } from "../content/solutionExperience";
import BusinessResultsSection from "../components/sections/BusinessResultsSection";

const CONTACT_EMAIL = "tironi@tironitech.com";
const WHATSAPP_NUMBER = "5543996676633";

const CONTACT_WHATSAPP_HREF = DEFAULT_WHATSAPP_URL;
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
  const activeMobileProject = mobileProjects[activeProjectIndex] || mobileProjects[0];
  const activeMobileStory = getProjectStory(language, activeMobileProject.title);
  const activeMobileHref = projectLinks[activeMobileProject.title] || "#contato";

  return (
    <div className="mobile-site-shell">
      <header className="mobile-header">
        <a href="#inicio" className="mobile-brand">
          <div className="mobile-brand-mark">
            <img src="/brand/tironi-symbol.png" alt="TironiTech" />
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
          <a
            className="mobile-header-cta"
            href={CONTACT_WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => {
              event.preventDefault();
              reportWhatsAppConversionAndRedirect(CONTACT_WHATSAPP_HREF);
            }}
          >
            {MOBILE_CTA_LABELS[language] || t.nav.cta}
          </a>
        </div>
      </header>

      <nav className="tt-club-mobile-nav" aria-label={t.footer.navTitle}>
        <a href="#contato">{t.nav.contact}</a>
        <a href="/club">Club <span aria-hidden="true">↗</span></a>
      </nav>

      <main className="mobile-main">
        <section className="mobile-hero tt-hero-impact" id="inicio">
          <HeroPitch
            copy={t.hero}
            mobile
            primaryHref={CONTACT_WHATSAPP_HREF}
            onPrimaryClick={(event) => {
              event.preventDefault();
              reportWhatsAppConversionAndRedirect(CONTACT_WHATSAPP_HREF);
            }}
          />
        </section>

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
                  type="button"
                  role="tab"
                  aria-selected={activeProjectIndex === index}
                  className={activeProjectIndex === index ? "is-active" : ""}
                  onClick={() => setActiveProjectIndex(index)}
                >
                  <img src={projectLogos[project.title]} alt="" />
                  <span>{project.title}</span>
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <Motion.article
                key={activeMobileProject.title}
                className="mobile-project-feature"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: reduceMotion ? 0 : 0.3 }}
              >
                <div className="mobile-project-feature-head">
                  <div>
                    <span className="mobile-project-number">{String(activeProjectIndex + 1).padStart(2, "0")} / {String(mobileProjects.length).padStart(2, "0")}</span>
                    <span className="mobile-project-label">{activeMobileProject.tag}</span>
                  </div>
                  <div className="mobile-project-logo-wrap">
                    <img src={projectLogos[activeMobileProject.title]} alt={activeMobileProject.title} className="mobile-project-logo" />
                  </div>
                </div>
                <div className="mobile-project-copy">
                  <h3>{activeMobileProject.title}</h3>
                  <small className="mobile-project-case-label">{activeMobileStory.labels.challenge}</small>
                  <p>{activeMobileStory.challenge}</p>
                  <small className="mobile-project-case-label">{activeMobileStory.labels.solution}</small>
                  <p>{activeMobileProject.description}</p>
                  <small className="mobile-project-case-label">{activeMobileStory.labels.result}</small>
                  <p>{activeMobileStory.result}</p>
                  <a
                    href={activeMobileHref}
                    target={activeMobileHref.startsWith("http") ? "_blank" : undefined}
                    rel={activeMobileHref.startsWith("http") ? "noreferrer" : undefined}
                    onClick={() => trackFunnelEvent("project_case_click", { project: activeMobileProject.title, device: "mobile" })}
                  >
                    {activeMobileProject.cta}<span aria-hidden="true">↗</span>
                  </a>
                </div>
              </Motion.article>
            </AnimatePresence>
          </div>
        </section>

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

        <ClubHighlight />
        <BlogHighlight />

        <section className="mobile-section mobile-cta-section" id="contato">
          <span className="mobile-section-tag">{t.nav.contact}</span>
          <h2>{t.finalCta.title}</h2>
          <p>{t.finalCta.description}</p>
          <div className="mobile-hero-actions">
            <a
              className="mobile-btn mobile-btn-primary"
              href={CONTACT_WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => {
                event.preventDefault();
                reportWhatsAppConversionAndRedirect(CONTACT_WHATSAPP_HREF);
              }}
            >
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
