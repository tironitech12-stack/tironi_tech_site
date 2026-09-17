import { useLanguage } from '../../context/LanguageContext';
import { clubContent } from '../../content/clubContent';
import { reportWhatsAppConversionAndRedirect } from '../../utils/googleAdsConversion';
import '../../styles/club.css';

const icons = [
  <path d="M4 20V13h4v7m2 0V9h4v11m2 0V4h4v16M3 20h18" />,
  <><path d="M9 4a3 3 0 0 0-5 3 4 4 0 0 0-1 7 4 4 0 0 0 6 5V4Zm6 0a3 3 0 0 1 5 3 4 4 0 0 1 1 7 4 4 0 0 1-6 5V4Z" /><path d="M6 9h3m6 6h3M9 14H6m9-5h3" /></>,
  <><path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z" /></>,
  <><path d="m12 3 9 5v9l-9 5-9-5V8l9-5Zm0 10v9M3 8l9 5 9-5" /></>,
  <><circle cx="9" cy="8" r="3" /><path d="M3 21v-4a6 6 0 0 1 12 0v4H3Zm13-16a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5v2h-3" /></>,
  <path d="m3 8 4-5h10l4 5-9 13L3 8Zm0 0h18M7 3l5 18 5-18" />,
];

export default function ClubSection() {
  const { language } = useLanguage();
  const copy = clubContent[language] || clubContent.pt;
  const href = `https://wa.me/5543996676633?text=${encodeURIComponent(copy.message)}`;

  return (
    <section id="club" className="tt-club" aria-labelledby="club-title">
      <div className="tt-club-inner">
        <div className="tt-club-heading"><span className="tt-club-label">TIRONI TECH <b>CLUB</b></span><span className="tt-club-eyebrow">{copy.eyebrow}</span></div>
        <div className="tt-club-hero">
          <div className="tt-club-copy">
            <h1 id="club-title">{copy.title.map((line, index) => <span key={line} className={index === 1 ? 'tt-club-accent' : undefined}>{line}</span>)}</h1>
            <p>{copy.description}</p>
            <a className="tt-club-cta" href={href} onClick={(event) => {
              if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
              event.preventDefault();
              reportWhatsAppConversionAndRedirect(href);
            }}>{copy.cta}<span aria-hidden="true">↗</span></a>
            <small>{copy.note}</small>
          </div>
          <div className="tt-club-visual">
            <div className="tt-club-orbit" aria-hidden="true" />
            <div className="tt-club-card">
              <div className="tt-club-card-top"><span>TIRONI TECH</span><img src="/brand/tironi-symbol.png" alt="" width="72" height="72" loading="lazy" /></div>
              <div className="tt-club-card-name">Tironi<br /><span>Tech Club</span></div>
              <div className="tt-club-card-bottom"><span>{copy.card}</span><span>{copy.member}</span></div>
            </div>
            <p className="tt-club-connection">{copy.connection}</p>
          </div>
        </div>
        <div className="tt-club-benefits">{copy.benefits.map(([title, description], index) => (
          <article className="tt-club-benefit" key={title}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[index]}</svg>
            <h3>{title}</h3><p>{description}</p>
          </article>
        ))}</div>
        <ul className="tt-club-outcomes">{copy.outcomes.map((item) => <li key={item}><span aria-hidden="true">+</span> {item}</li>)}</ul>
      </div>
    </section>
  );
}
