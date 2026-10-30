import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getSiteText } from '../../content/siteContent';
import { serviceDiagnosticPath } from '../../content/serviceLandingPages';
import { applyPageMeta } from '../../utils/pageMeta';
import { createServiceSchema, getRelatedServicePages } from '../../utils/servicePageSeo';
import { getOptimizedImageAttributes } from '../../utils/optimizedImages';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import CookieConsent from '../shared/CookieConsent';
import FloatingWhatsAppButton from '../ui/FloatingWhatsAppButton';
import '../../styles/theme.css';
import '../../styles/service-landing.css';

export default function ServiceLandingPage({ page }) {
  const { languageOptions } = useLanguage();
  const t = getSiteText('pt');
  const diagnosticHref = serviceDiagnosticPath(page.slug);
  const relatedServices = getRelatedServicePages(page.slug);

  useEffect(() => {
    applyPageMeta({
      title: `${page.keyword} | Tironi Tech`,
      description: page.description,
      path: `/${page.slug}`,
      image: page.image,
      imageAlt: page.imageAlt,
      schema: createServiceSchema(page),
    });
    window.scrollTo(0, 0);
  }, [page]);

  return <div className="tt2-page tt-service-page"><div className="tt2-page-inner">
    <Navbar t={t} language="pt" setLanguage={() => {}} languageOptions={languageOptions} />
    <main className="tt2-site-main">
      <section className="tt-service-hero"><div className="tt2-container tt-service-hero-grid">
        <div><nav className="tt-article-breadcrumb" aria-label="Breadcrumb"><a href="/">Início</a><span> / </span><span>{page.keyword}</span></nav><span className="tt-service-kicker">{page.keyword}</span><h1>{page.title}</h1><p>{page.description}</p><div className="tt-service-actions"><a href={diagnosticHref}>Agendar diagnóstico</a><a href="#como-funciona">Ver como funciona</a></div><nav className="tt-service-hubs" aria-label="Páginas principais"><a href="/consultoria-ia-para-empresas">Consultoria de IA</a><a href="/automacao-processos-com-ia">Automação de processos</a><a href="/software-sob-medida">Software sob medida</a><a href="/club">Tironi Tech Club</a></nav></div>
        <figure><img {...getOptimizedImageAttributes(page.image, { sizes: '(max-width: 900px) 100vw, 46vw' })} alt={page.imageAlt} loading="eager" decoding="async" /><figcaption>Solução desenhada para o processo, os dados e a meta da sua empresa.</figcaption></figure>
      </div></section>
      <section className="tt-service-problem"><div className="tt2-container"><span>O GARGALO</span><h2>{page.problem}</h2><div className="tt-service-outcomes">{page.outcomes.map((item, index) => <article key={item}><small>0{index + 1}</small><p>{item}</p></article>)}</div></div></section>
      <section className="tt-service-solution"><div className="tt2-container tt-service-two-col"><div><span className="tt-service-kicker">APLICAÇÃO PRÁTICA</span><h2>Tecnologia ligada à operação, do primeiro dado ao próximo passo</h2></div><div><p>{page.solution}</p><p>{page.proof}</p>{page.proofLink && <p><a href={page.proofLink.href}>{page.proofLink.label} →</a></p>}</div></div></section>
      <section className="tt-service-process" id="como-funciona"><div className="tt2-container"><span className="tt-service-kicker">COMO FUNCIONA</span><h2>Da oportunidade à operação em quatro movimentos</h2><div className="tt-service-process-grid">{page.process.map(([title, text], index) => <article key={title}><small>{String(index + 1).padStart(2, '0')}</small><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="tt-service-solution"><div className="tt2-container"><span className="tt-service-kicker">SOLUÇÕES PARA SUA OPERAÇÃO</span><h2>Soluções relacionadas</h2><nav className="tt-service-hubs" aria-label="Soluções relacionadas">{relatedServices.map((candidate) => <article key={candidate.slug}><h3><a href={`/${candidate.slug}`}>{candidate.keyword}</a></h3><p>{candidate.description}</p></article>)}</nav></div></section>
      <section className="tt-service-solution"><div className="tt2-container tt-service-two-col"><div><span className="tt-service-kicker">ESCOPO VERIFICÁVEL</span><h2>O que precisa ficar claro antes de contratar</h2></div><div><p>Uma proposta responsável descreve o processo atual, o resultado esperado, os dados necessários, as integrações, as exceções e quem aprova ações sensíveis. Para este cenário, o ponto de partida é: {page.problem}</p><p>A entrega deve incluir mapa do fluxo, arquitetura e permissões, critérios de aceite, plano de implantação, documentação e indicadores. A solução é avaliada pelo processo que melhora, e não pela quantidade de recursos ou pela promessa genérica de usar IA.</p>{page.deliverables?.length > 0 && <h3>Entregáveis para validar na proposta</h3>}<ul>{(page.deliverables || page.outcomes).map((item) => <li key={item}>{item}</li>)}</ul>{page.limits?.length > 0 && <><h3>Limites e dependências do projeto</h3><ul>{page.limits.map((item) => <li key={item}>{item}</li>)}</ul></>}</div></div></section>
      <section className="tt-service-evidence"><div className="tt2-container"><div><strong>23+</strong><span>anos de experiência acumulada</span></div><div><strong>150+</strong><span>projetos para empresas</span></div><div><strong>1</strong><span>parceiro do diagnóstico à evolução</span></div></div></section>
      <section className="tt-service-solution"><div className="tt2-container tt-service-two-col"><div><span className="tt-service-kicker">DECISÃO</span><h2>Como comparar fornecedores e reduzir risco</h2></div><div><p>Peça uma demonstração ligada ao seu processo e valide como a solução trata informação incompleta, falhas de integração e transferência para uma pessoa. Compare custo total, tempo de implantação, propriedade dos dados, observabilidade e capacidade de evolução.</p><p>A Tironi Tech começa pelo menor fluxo completo capaz de gerar evidência. Esse recorte evita uma prova isolada que parece funcionar, mas não chega ao sistema, à equipe ou ao resultado que motivou o projeto.</p>{page.costFactors?.length > 0 && <><h3>O que determina o investimento</h3><ul>{page.costFactors.map((item) => <li key={item}>{item}</li>)}</ul></>}</div></div></section>
      <section className="tt-service-faq"><div className="tt2-container"><span className="tt-service-kicker">RESPOSTAS DIRETAS</span><h2>Perguntas antes de começar</h2>{page.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
      <section className="tt-service-final"><div className="tt2-container"><span className="tt-service-kicker">PRÓXIMO PASSO</span><h2>Comece pelo problema que mais custa tempo, vendas ou capacidade.</h2><p>Em uma conversa de diagnóstico, organizamos cenário, prioridade e o menor teste capaz de produzir evidência.</p><a href={diagnosticHref}>Agendar diagnóstico estratégico →</a></div></section>
    </main>
    <FloatingWhatsAppButton /><Footer t={t} contactEmail="tironi@tironitech.com" whatsappNumber="5543996676633" language="pt" setLanguage={() => {}} languageOptions={languageOptions} /><CookieConsent t={t} />
  </div></div>;
}
