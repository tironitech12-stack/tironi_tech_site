import { useLanguage } from '../../context/LanguageContext';
import { serviceLandingPages, searchConsolePriorityServiceSlugs } from '../../content/serviceLandingPages';
import '../../styles/positioning.css';

const copyByLanguage = {
  pt: {
    eyebrow: 'SOLUÇÕES CONECTADAS À OPERAÇÃO',
    title: 'Escolha a frente que precisa avançar agora',
    lead: 'Atendimento, agentes e automação usam a mesma base: contexto, integrações, limites claros e transferência para a equipe.',
    link: 'Conhecer solução',
  },
  en: {
    eyebrow: 'SOLUTIONS CONNECTED TO OPERATIONS',
    title: 'Choose the front that needs to move now',
    lead: 'Service, agents and automation share the same foundation: context, integrations, clear limits and handoff to the team.',
    link: 'Explore solution',
  },
  es: {
    eyebrow: 'SOLUCIONES CONECTADAS A LA OPERACIÓN',
    title: 'Elige el frente que necesita avanzar ahora',
    lead: 'Atención, agentes y automatización comparten la misma base: contexto, integraciones, límites claros y transferencia al equipo.',
    link: 'Conocer solución',
  },
};

const priorityServices = searchConsolePriorityServiceSlugs
  .map((slug) => serviceLandingPages.find((page) => page.slug === slug))
  .filter(Boolean);

export default function CommercialSolutionsLinks() {
  const { language } = useLanguage();
  const copy = copyByLanguage[language] || copyByLanguage.pt;

  return (
    <section className="tt-priority-services" aria-labelledby="priority-services-title">
      <div className="tt-pillars-inner">
        <div className="tt-pillars-intro">
          <span>{copy.eyebrow}</span>
          <h2 id="priority-services-title">{copy.title}</h2>
          <p>{copy.lead}</p>
        </div>
        <div className="tt-priority-services-grid">
          {priorityServices.map((page) => (
            <article key={page.slug}>
              <h3><a href={`/${page.slug}`}>{page.keyword}</a></h3>
              <p>{page.description}</p>
              <a className="tt-priority-service-link" href={`/${page.slug}`}>{copy.link}<span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
