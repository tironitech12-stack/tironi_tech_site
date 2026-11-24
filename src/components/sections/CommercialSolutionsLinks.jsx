import { useLanguage } from '../../context/LanguageContext';
import { homeServicePaths, homeServices, homeServicesContact } from '../../content/homeServices';
import { searchConsolePriorityServiceSlugs, getServiceLandingPage } from '../../content/serviceLandingPages';
import '../../styles/positioning.css';

export default function CommercialSolutionsLinks() {
  const { language } = useLanguage();
  const copy = homeServices[language] || homeServices.pt;

  return (
    <section id="onde-atuamos" className="tt-priority-services" aria-labelledby="priority-services-title">
      <div className="tt-pillars-inner">
        <div className="tt-pillars-intro">
          <h2 id="priority-services-title">{copy.title}</h2>
          <p>{copy.lead}</p>
        </div>
        <div className="tt-priority-services-grid">
          {copy.cards.map(([title, description, link], index) => (
            <article key={homeServicePaths[index]}>
              <h3>{title}</h3>
              <p>{description}</p>
              <a className="tt-priority-service-link" href={homeServicePaths[index]}>{link}<span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <div className="tt-home-service-actions">
          <p>{copy.question}</p>
          <a className="tt-priority-service-link" href={homeServicesContact}>{copy.contact}</a>
          <a className="tt-priority-service-link" href="/como-a-tironi-tech-atua">{copy.guide}</a>
        </div>
        <nav className="tt-home-service-actions" aria-label={copy.title}>
          {searchConsolePriorityServiceSlugs.map((slug) => (
            <a key={slug} className="tt-priority-service-link" href={`/${slug}`}>{getServiceLandingPage(slug).keyword}</a>
          ))}
        </nav>
      </div>
    </section>
  );
}
