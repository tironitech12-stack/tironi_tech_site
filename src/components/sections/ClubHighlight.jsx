import { useLanguage } from '../../context/LanguageContext';
import { clubContent } from '../../content/clubContent';
import '../../styles/club.css';

const labels = {
  pt: ['A oferta principal: entrar, implementar e acompanhar.', 'Conhecer o Club', 'Prioridades, execução e indicadores todos os meses. Ferramentas entram quando aceleram a solução.'],
  en: ['The main offer: step in, implement and follow up.', 'Explore the Club', 'Priorities, execution and indicators every month. Tools join when they speed up the solution.'],
  es: ['La oferta principal: entrar, implementar y acompañar.', 'Conocer el Club', 'Prioridades, ejecución e indicadores todos los meses. Las herramientas entran cuando aceleran la solución.'],
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
