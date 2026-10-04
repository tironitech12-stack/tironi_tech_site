import '../../styles/hero-pitch.css';
import '../../styles/positioning.css';
import { diagnosticHref } from '../../content/positioning';
import { trackFunnelEvent } from '../../utils/conversionTracking';

export default function HeroPitch({ copy, mobile = false, primaryHref = diagnosticHref('club', 'hero'), onPrimaryClick }) {
  const secondaryHref = copy.secondaryHref || '/como-funciona';
  return (
    <div className="tt-hero-pitch">
      <div className="tt-hero-fx" aria-hidden="true">
        <span className="tt-hero-ray tt-hero-ray-one" />
        <span className="tt-hero-ray tt-hero-ray-two" />
        <span className="tt-hero-ray tt-hero-ray-three" />
        <span className="tt-hero-orb tt-hero-orb-one" />
        <span className="tt-hero-orb tt-hero-orb-two" />
        <span className="tt-hero-spark tt-hero-spark-one" />
        <span className="tt-hero-spark tt-hero-spark-two" />
        <span className="tt-hero-spark tt-hero-spark-three" />
      </div>
      <div className="tt-hero-pitch-copy">
        <span className="tt-hero-pitch-badge"><i aria-hidden="true" />{copy.eyebrow}</span>
        <h1 className="tt-hero-pitch-title is-statement">
          <span>{copy.opening}</span>{' '}
          <strong>{copy.emphasis}</strong>
        </h1>
        <p className="tt-hero-pitch-promise">{copy.promise}</p>
        <div className="tt-hero-pitch-actions">
          <a
            className="tt-hero-pitch-primary"
            href={primaryHref}
            onClick={(event) => {
              trackFunnelEvent('hero_cta_click', { device: mobile ? 'mobile' : 'desktop', cta: 'primary' });
              trackFunnelEvent('hero_primary_cta_click', { device: mobile ? 'mobile' : 'desktop' });
              onPrimaryClick?.(event);
            }}
          >
            {copy.primaryCta}<span aria-hidden="true">↗</span>
          </a>
          <a
            className="tt-hero-pitch-secondary"
            href={secondaryHref}
            onClick={() => trackFunnelEvent('hero_solutions_click', { device: mobile ? 'mobile' : 'desktop' })}
          >
            {copy.secondaryCta}<span aria-hidden="true">→</span>
          </a>
        </div>
        <p className="tt-hero-pitch-reassurance">{copy.reassurance}</p>
        <div className="tt-hero-transformations" role="group" aria-label={copy.transformationLabel}>
          {copy.transformations.map(({ outcome }) => (
            <div className="tt-hero-transformation" key={outcome}>
              <span aria-hidden="true">✓</span>
              <strong>{outcome}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="tt-hero-console" aria-label={copy.demoTitle}>
        <div className="tt-hero-console-bar">
          <span className="tt-hero-console-dots" aria-hidden="true"><i /><i /><i /></span>
          <span>{copy.demoLabel}</span>
        </div>
        <div className="tt-hero-console-body">
          <div className="tt-hero-console-head">
            <div><small>{copy.demoKicker}</small><h2>{copy.demoTitle}</h2></div>
            <span className="tt-hero-console-status"><i aria-hidden="true" />{copy.demoStatus}</span>
          </div>
          <ol className="tt-hero-cycle">
            {(copy.cycle || ['ANALISAR', 'PRIORIZAR', 'IMPLEMENTAR', 'MEDIR', 'EVOLUIR']).map((step, index) => (
              <li key={step}><span>0{index + 1}</span><strong>{step}</strong></li>
            ))}
          </ol>
          <div className="tt-hero-console-footer">
            <span>{copy.demoFooter}</span>
            <strong>{copy.demoGain}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
