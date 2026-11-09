import { motion as Motion, useReducedMotion } from "framer-motion";
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

  const handleTabKeyDown = (event, index) => {
    const nextIndex = { ArrowRight: (index + 1) % projects.length, ArrowLeft: (index - 1 + projects.length) % projects.length, Home: 0, End: projects.length - 1 }[event.key];
    if (nextIndex === undefined) return;
    event.preventDefault();
    setActiveIndex(nextIndex);
    event.currentTarget.parentElement.querySelectorAll('[role="tab"]')[nextIndex]?.focus();
  };

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
            {projects.map((project, index) => {
              const story = getProjectStory(language, project.title);
              const href = PROJECT_URLS[project.title] || "#contato";
              const isExternal = href.startsWith("http");
              const isActive = activeIndex === index;
              return (
              <Motion.article
                key={project.title}
                id={`desktop-project-panel-${index}`}
                role="tabpanel"
                aria-labelledby={`desktop-project-tab-${index}`}
                tabIndex={0}
                hidden={!isActive}
                className="tt2-project-feature"
                initial={false}
                animate={isActive || reduceMotion ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 18, filter: "blur(8px)" }}
                transition={{ duration: reduceMotion ? 0 : 0.38, ease }}
              >
                <div className="tt2-project-feature-head">
                  <div>
                    <span className="tt2-project-count">{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
                    <span className="tt2-featured-tag">{project.tag}</span>
                  </div>
                  <div className="tt2-project-logo-stage"><ProjectLogo title={project.title} /></div>
                </div>
                <h3>{project.title}</h3>
                <div className="tt2-project-feature-grid">
                  <div className="tt2-featured-case-block tt2-project-challenge">
                    <span>{story.labels.challenge}</span>
                    <p>{story.challenge}</p>
                  </div>
                  <div className="tt2-featured-case-block">
                    <span>{story.labels.solution}</span>
                    <p>{project.description}</p>
                  </div>
                  <div className="tt2-featured-case-block">
                    <span>{story.labels.result}</span>
                    <p>{story.result}</p>
                  </div>
                </div>
                <div className="tt2-project-feature-footer">
                  {project.bullets?.length ? (
                    <div className="tt2-featured-bullets" aria-label={t.featuredProjects.caseLabels?.impact}>
                      {project.bullets.map((bullet) => <span key={bullet}>{bullet}</span>)}
                    </div>
                  ) : null}
                  <a
                    className="tt2-featured-cta"
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    onClick={() => trackFunnelEvent("project_case_click", { project: project.title })}
                  >
                    {project.cta}<span aria-hidden="true">↗</span>
                  </a>
                </div>
              </Motion.article>
              );
            })}
          </div>

          <div className="tt2-project-picker" role="tablist" aria-label={t.featuredProjects.eyebrow}>
            {projects.map((item, index) => (
              <Motion.button
                key={item.title}
                id={`desktop-project-tab-${index}`}
                type="button"
                role="tab"
                aria-controls={`desktop-project-panel-${index}`}
                aria-selected={activeIndex === index}
                tabIndex={activeIndex === index ? 0 : -1}
                className={`tt2-project-tile${activeIndex === index ? " is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
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
