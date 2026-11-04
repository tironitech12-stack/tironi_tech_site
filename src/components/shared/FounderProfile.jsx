import { founderProfile, getFounderCopy } from "../../content/founderProfile.js";
import "../../styles/founder-profile.css";

export default function FounderProfile({ language = "pt" }) {
  const copy = getFounderCopy(language);

  return (
    <article className="tt-founder-profile" id="fundador" aria-labelledby="fundador-nome">
      <header className="tt-founder-profile-header">
        <p className="tt-founder-profile-eyebrow">{copy.eyebrow}</p>
        <h3 id="fundador-nome">{founderProfile.name}</h3>
        <p className="tt-founder-profile-role">{copy.role}</p>
      </header>
      <p className="tt-founder-profile-summary">{copy.summary}</p>
      <ol className="tt-founder-profile-timeline" aria-label={copy.timelineLabel}>
        {copy.milestones.map(({ period, description }) => (
          <li key={period}>
            <span className="tt-founder-profile-period">{period}</span>
            <span>{description}</span>
          </li>
        ))}
      </ol>
      <p className="tt-founder-profile-disclaimer">{copy.disclaimer}</p>
      <div className="tt-founder-profile-links">
        <a className="tt-founder-profile-link" href={founderProfile.linkedinUrl}>
          {copy.profileLinkLabel}
        </a>
        <a className="tt-founder-profile-link" href={founderProfile.businessHistoryUrl}>
          {copy.businessHistoryLinkLabel}
        </a>
      </div>
    </article>
  );
}
