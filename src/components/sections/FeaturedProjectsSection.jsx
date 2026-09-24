import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import newstoreSorteiosLogo from "../../assets/newstore-sorteios-logo.png";
import { trackFunnelEvent } from "../../utils/conversionTracking";
import { getProjectStory } from "../../content/projectStories";

const SIGNGUARD_URL = "https://www.walletsignguard.com/";
const DELETEACTPRO_URL = "https://www.deleteactpro.com/";
const PROJECT_URLS = {
  SignGuard: SIGNGUARD_URL,
  DeleteActPro: DELETEACTPRO_URL,
  "Sales Game": "https://www.salesgame.com.br/",
  "Sorteios xNaMai": "https://www.sorteiosxnamai.com.br/",
  "XNaMai Club": "#contato",
  "ProfitPilot Ads": "https://www.profitpilotads.com/",
};

function ProjectLogo({ title }) {
  const [error, setError] = useState(false);

  const src = useMemo(() => {
    const t = String(title || "").toLowerCase();
    if (t.includes("sales game")) return "/projects/salesgame-logo.svg";
    if (t.includes("xnamai")) return "/assets/clients/xnamai.png";
    if (t.includes("mestrelead")) return "/projects/mestrelead-logo.svg";
    if (t.includes("bi personalizado")) return "/projects/bi-personalizado-logo.svg";
    if (t.includes("profitpilot")) return "/projects/profitpilotads-logo.svg";
    if (t.includes("newstore") || t.includes("sorteios")) return newstoreSorteiosLogo;
    if (t.includes("deleteactpro")) return "/projects/deleteactpro-logo.png";
    if (t.includes("sign") || t.includes("wallet")) return "/projects/sign-wallet-logo.png";
    return "";
  }, [title]);

  const fallback = useMemo(() => {
    const t = String(title || "").toLowerCase();
    if (t.includes("sales game")) return "SG";
    if (t.includes("xnamai")) return "XN";
    if (t.includes("mestrelead")) return "ML";
    if (t.includes("bi personalizado")) return "BI";
    if (t.includes("profitpilot")) return "PP";
    if (t.includes("newstore") || t.includes("sorteios")) return "NS";
    if (t.includes("deleteactpro")) return "DA";
    if (t.includes("sign") || t.includes("wallet")) return "SW";
    return "•";
  }, [title]);

  if (!src || error) {
    return <div className="tt2-project-logo-fallback">{fallback}</div>;
  }

  return (
    <img
      className="tt2-project-logo"
      src={src}
      alt={title}
      loading="lazy"
      decoding="async"
      onError={() => setError(true)}
    />
  );
}

export default function FeaturedProjectsSection({ t, language = "pt" }) {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const ease = [0.22, 1, 0.36, 1];
  const projects = t.featuredProjects.items;
  const activeProject = projects[activeIndex] || projects[0];
  const activeStory = getProjectStory(language, activeProject.title);
  const activeHref = PROJECT_URLS[activeProject.title] || "#contato";
  const activeIsExternal = activeHref.startsWith("http");

  return (
    <Motion.section
      id="projetos"
      className="tt2-featured-projects"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease }}
    >
      <div className="tt2-container">
        <div className="tt2-section-head">
          <span className="tt2-kicker">{t.featuredProjects.eyebrow}</span>
          <h2>{t.featuredProjects.title}</h2>
          <p>{t.featuredProjects.description}</p>
        </div>

        <div className="tt2-project-showcase">
          <div className="tt2-project-stage" aria-live="polite">
            <div className="tt2-project-stage-orb" aria-hidden="true" />
            <AnimatePresence mode="wait" initial={false}>
              <Motion.article
                key={activeProject.title}
                className="tt2-project-feature"
                initial={reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: reduceMotion ? 0 : 0.38, ease }}
              >
                <div className="tt2-project-feature-head">
                  <div>
                    <span className="tt2-project-count">{String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
                    <span className="tt2-featured-tag">{activeProject.tag}</span>
                  </div>
                  <div className="tt2-project-logo-stage"><ProjectLogo title={activeProject.title} /></div>
                </div>
                <h3>{activeProject.title}</h3>
                <div className="tt2-project-feature-grid">
                  <div className="tt2-featured-case-block tt2-project-challenge">
                    <span>{activeStory.labels.challenge}</span>
                    <p>{activeStory.challenge}</p>
                  </div>
                  <div className="tt2-featured-case-block">
                    <span>{activeStory.labels.solution}</span>
                    <p>{activeProject.description}</p>
                  </div>
                  <div className="tt2-featured-case-block">
                    <span>{activeStory.labels.result}</span>
                    <p>{activeStory.result}</p>
                  </div>
                </div>
                <div className="tt2-project-feature-footer">
                  {activeProject.bullets?.length ? (
                    <div className="tt2-featured-bullets" aria-label={t.featuredProjects.caseLabels?.impact}>
                      {activeProject.bullets.map((bullet) => <span key={bullet}>{bullet}</span>)}
                    </div>
                  ) : null}
                  <a
                    className="tt2-featured-cta"
                    href={activeHref}
                    target={activeIsExternal ? "_blank" : undefined}
                    rel={activeIsExternal ? "noreferrer" : undefined}
                    onClick={() => trackFunnelEvent("project_case_click", { project: activeProject.title })}
                  >
                    {activeProject.cta}<span aria-hidden="true">↗</span>
                  </a>
                </div>
              </Motion.article>
            </AnimatePresence>
          </div>

          <div className="tt2-project-picker" role="tablist" aria-label={t.featuredProjects.eyebrow}>
            {projects.map((item, index) => (
              <Motion.button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                className={`tt2-project-tile${activeIndex === index ? " is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <span className="tt2-project-tile-index">{String(index + 1).padStart(2, "0")}</span>
                <ProjectLogo title={item.title} />
                <span className="tt2-project-tile-copy">
                  <strong>{item.title}</strong>
                  <small>{item.tag}</small>
                </span>
                <span className="tt2-project-tile-arrow" aria-hidden="true">→</span>
              </Motion.button>
            ))}
          </div>
        </div>
      </div>
    </Motion.section>
  );
}
