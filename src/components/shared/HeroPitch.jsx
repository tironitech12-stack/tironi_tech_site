import '../../styles/hero-pitch.css';

export default function HeroPitch({ copy, mobile = false }) {
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
      <span className="tt-hero-pitch-badge"><i aria-hidden="true" />{copy.eyebrow}</span>
      <h1 className="tt-hero-pitch-title">
        <span>{copy.opening}</span>{' '}
        <strong>{copy.emphasis}</strong>
      </h1>
      <p className="tt-hero-pitch-promise">{copy.promise}</p>
      <div className="tt-hero-pitch-actions">
        <a className="tt-hero-pitch-primary" href="#contato">{copy.primaryCta}<span aria-hidden="true">↗</span></a>
        <a className="tt-hero-pitch-secondary" href={mobile ? '#servicos' : '#solucoes'}>{copy.secondaryCta}<span aria-hidden="true">↓</span></a>
      </div>
      <div className="tt-hero-transformations" role="group" aria-label={copy.transformationLabel}>
        {copy.transformations.map(({ outcome }) => (
          <div className="tt-hero-transformation" key={outcome}>
            <span aria-hidden="true">✓</span>
            <strong>{outcome}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
