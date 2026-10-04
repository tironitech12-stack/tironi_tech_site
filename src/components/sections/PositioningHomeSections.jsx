import { getPositioning, diagnosticHref } from '../../content/positioning';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/positioning.css';

const TOOLS = [
  ['ChatBô', 'Atendimento e qualificação com IA. Organiza conversas, identifica oportunidades e conecta o atendimento ao processo comercial.', 'https://www.chatbo.com.br/'],
  ['MestreLead', 'Inteligência para prospecção e geração de oportunidades. Ajuda a encontrar, organizar e priorizar leads com mais contexto comercial.', '/resultados'],
  ['TironiControl', 'Gestão e decisão em um só lugar. Centraliza indicadores, financeiro, propostas, projetos e informações executivas.', diagnosticHref('ferramentas', 'home-tironicontrol')],
  ['CRM Tironi', 'Pipeline e relacionamento sem oportunidade esquecida. Centraliza histórico, etapas, follow-ups e próximas ações comerciais.', diagnosticHref('ferramentas', 'home-crm')],
];

export function PillarsSection() {
  const { language } = useLanguage();
  const copy = getPositioning(language);

  return (
    <section className="tt-pillars" aria-labelledby="pillars-title">
      <div className="tt-pillars-inner">
        <div className="tt-pillars-intro">
          <span>{copy.pillarsEyebrow}</span>
          <h2 id="pillars-title">{copy.pillarsTitle}</h2>
        </div>
        <div className="tt-pillars-grid">
          {copy.pillars.map(([title, text]) => (
            <article key={title}><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ToolsSection() {
  const { language } = useLanguage();
  const copy = getPositioning(language);
  const tools = copy.pages.tools.sections[0].items.length ? copy.pages.tools.sections[0].items : TOOLS;

  return (
    <section className="tt-home-tools" id="ferramentas" aria-labelledby="home-tools-title">
      <div className="tt-pillars-inner">
        <div className="tt-pillars-intro">
          <span>{copy.toolsEyebrow}</span>
          <h2 id="home-tools-title">{copy.toolsTitle}</h2>
          <p>{copy.toolsLead}</p>
        </div>
        <div className="tt-home-tools-grid">
          {tools.map(([name, text, href]) => (
            <article key={name}>
              <h3><a href={href} target={String(href).startsWith('http') ? '_blank' : undefined} rel={String(href).startsWith('http') ? 'noreferrer' : undefined}>{name}</a></h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <a className="tt-offer-primary" href={diagnosticHref('ferramentas', 'home-ferramentas')}>{copy.toolsCta}<span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
