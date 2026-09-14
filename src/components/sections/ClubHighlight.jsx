import { useLanguage } from '../../context/LanguageContext';
import { clubContent } from '../../content/clubContent';
import '../../styles/club.css';

const labels = {
  pt: ['Sua empresa mais inteligente, a cada mês.', 'Conhecer o Club', 'IA, automação, ferramentas e uma comunidade para crescer com você.'],
  en: ['Your business gets smarter every month.', 'Explore the Club', 'AI, automation, tools and a community to grow with you.'],
  es: ['Tu empresa más inteligente, cada mes.', 'Conocer el Club', 'IA, automatización, herramientas y una comunidad para crecer contigo.'],
};

export default function ClubHighlight() {
  const { language } = useLanguage();
  const [title, cta, description] = labels[language] || labels.pt;
  const copy = clubContent[language] || clubContent.pt;

  return (
    <section id="club" className="tt-club-highlight" aria-labelledby="club-highlight-title">
      <div className="tt-club-highlight-inner">
        <div className="tt-club-highlight-mark" aria-hidden="true"><img src="/brand/tironi-symbol.png" alt="" width="64" height="64" /><span>TECH CLUB</span></div>
        <div className="tt-club-highlight-copy">
          <span className="tt-club-label">TIRONI TECH <b>CLUB</b></span>
          <h2 id="club-highlight-title">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="tt-club-highlight-action"><a className="tt-club-cta" href="/club">{cta}<span aria-hidden="true">↗</span></a><small>{copy.connection}</small></div>
      </div>
    </section>
  );
}
