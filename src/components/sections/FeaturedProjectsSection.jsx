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
  const ease = [0.22, 1, 0.36, 1];

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

        <div className="tt2-featured-grid">
          {t.featuredProjects.items.map((item, index) => {
            const href = PROJECT_URLS[item.title] || "#contato";
            const isExternal = href.startsWith("http");
            const story = getProjectStory(language, item.title);

            return (
              <Motion.article
                key={item.title}
                className="tt2-featured-card"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: 0.05 * index, ease }}
              >
                <div className="tt2-featured-top">
                  <span className="tt2-featured-tag">{item.tag}</span>
                  <ProjectLogo title={item.title} />
                </div>
                <h3>{item.title}</h3>
                <div className="tt2-featured-case-block">
                  <span>{story.labels.challenge}</span>
                  <p>{story.challenge}</p>
                </div>
                <div className="tt2-featured-case-block">
                  <span>{story.labels.solution}</span>
                  <p>{item.description}</p>
                </div>

                <div className="tt2-featured-case-block">
                  <span>{story.labels.result}</span>
                  <p>{story.result}</p>
                </div>
                {item.bullets?.length ? <div className="tt2-featured-bullets" aria-label={t.featuredProjects.caseLabels?.impact}>{item.bullets.map((bullet) => <span key={bullet}>{bullet}</span>)}</div> : null}

                <a
                  className="tt2-featured-cta"
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  onClick={() => trackFunnelEvent("project_case_click", { project: item.title })}
                >
                  {item.cta}
                </a>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </Motion.section>
  );
}
