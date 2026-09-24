import { motion as Motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { getSolutionExperience, solutionLinks } from "../../content/solutionExperience";
export default function SolutionsSection({ t }) {
  const reduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const content = getSolutionExperience(language);
  const ease = [0.22, 1, 0.36, 1];

  return (
    <Motion.section id="solucoes" className="tt2-section tt2-services-section" initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.6, ease }}>
      <div className="tt2-services-glow" aria-hidden="true" />
      <div className="tt2-container">
        <div className="tt2-services-intro">
          <div className="tt2-section-head"><span className="tt2-kicker">{t.solutions.eyebrow}</span><h2>{t.solutions.title}</h2></div>
          <div className="tt2-services-intro-copy">
            <p>{content.lead}</p><span>{content.proofLabel}</span>
            <div className="tt2-services-proof">{content.proof.map(([value, label]) => <div key={label}><strong>{value}</strong><small>{label}</small></div>)}</div>
          </div>
        </div>

        <div className="tt2-service-bento">
          {t.solutions.items.map((item, index) => {
            const detail = content.items[index];
            return (
              <Motion.article key={item.title} className={`tt2-service-story tt2-service-story-${index + 1}`} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: 0.035 * index, ease }}>
                <div className="tt2-service-story-top"><span className="tt2-service-number">{String(index + 1).padStart(2, "0")}</span><span className="tt2-service-signal">{detail.signal}</span></div>
                <h3><a href={solutionLinks[index]}>{item.title}</a></h3><p>{item.text}</p>
                <div className="tt2-service-outcome"><small>{content.outcomeLabel}</small><strong>{detail.outcome}</strong></div>
                <div className="tt2-service-chips">{detail.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
                <div className="tt2-service-story-foot"><span>{detail.evidence}</span><a href={solutionLinks[index]} aria-label={`${content.linkLabel}: ${item.title}`}>{content.linkLabel} <i aria-hidden="true">↗</i></a></div>
              </Motion.article>
            );
          })}
        </div>

        <div className="tt2-services-ecosystem">
          <div><span className="tt2-services-ecosystem-kicker">TIRONI TECH ECOSYSTEM</span><h3>{content.ecosystemTitle}</h3><p>{content.ecosystemText}</p></div>
          <div className="tt2-services-ecosystem-links">
            {content.ecosystemLinks.map(([name, description, href]) => <a key={name} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}><span><strong>{name}</strong><small>{description}</small></span><i aria-hidden="true">↗</i></a>)}
          </div>
        </div>
      </div>
    </Motion.section>
  );
}
