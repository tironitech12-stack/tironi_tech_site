import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getSiteText } from '../../content/siteContent';
import { serviceLandingWhatsApp } from '../../content/serviceLandingPages';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import CookieConsent from '../shared/CookieConsent';
import FloatingWhatsAppButton from '../ui/FloatingWhatsAppButton';
import '../../styles/theme.css';
import '../../styles/service-landing.css';

const SITE_URL = 'https://www.tironitech.com';

export default function ServiceLandingPage({ page }) {
  const { languageOptions } = useLanguage();
  const t = getSiteText('pt');

  useEffect(() => {
    const url = `${SITE_URL}/${page.slug}`;
    document.documentElement.lang = 'pt-BR';
    document.title = `${page.keyword} | Tironi Tech`;
    const description = document.head.querySelector('meta[name="description"]');
    if (description) description.content = page.description;
    const robots = document.head.querySelector('meta[name="robots"]');
    if (robots) robots.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = url;
    window.scrollTo(0, 0);
  }, [page]);

  return <div className="tt2-page tt-service-page"><div className="tt2-page-inner">
    <Navbar t={t} language="pt" setLanguage={() => {}} languageOptions={languageOptions} />
    <main className="tt2-site-main">
      <section className="tt-service-hero"><div className="tt2-container tt-service-hero-grid">
        <div><span className="tt-service-kicker">{page.keyword}</span><h1>{page.title}</h1><p>{page.description}</p><div className="tt-service-actions"><a href={serviceLandingWhatsApp} target="_blank" rel="noreferrer">Agendar diagnóstico</a><a href="#como-funciona">Ver como funciona</a></div></div>
        <figure><img src={page.image} alt={page.imageAlt} loading="eager" decoding="async" /><figcaption>Solução desenhada para o processo, os dados e a meta da sua empresa.</figcaption></figure>
      </div></section>
      <section className="tt-service-problem"><div className="tt2-container"><span>O GARGALO</span><h2>{page.problem}</h2><div className="tt-service-outcomes">{page.outcomes.map((item, index) => <article key={item}><small>0{index + 1}</small><p>{item}</p></article>)}</div></div></section>
      <section className="tt-service-solution"><div className="tt2-container tt-service-two-col"><div><span className="tt-service-kicker">APLICAÇÃO PRÁTICA</span><h2>Tecnologia ligada à operação, do primeiro dado ao próximo passo</h2></div><div><p>{page.solution}</p><p>{page.proof}</p></div></div></section>
      <section className="tt-service-process" id="como-funciona"><div className="tt2-container"><span className="tt-service-kicker">COMO FUNCIONA</span><h2>Da oportunidade à operação em quatro movimentos</h2><div className="tt-service-process-grid">{page.process.map(([title, text], index) => <article key={title}><small>{String(index + 1).padStart(2, '0')}</small><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="tt-service-evidence"><div className="tt2-container"><div><strong>23+</strong><span>anos de experiência acumulada</span></div><div><strong>150+</strong><span>projetos para empresas</span></div><div><strong>1</strong><span>parceiro do diagnóstico à evolução</span></div></div></section>
      <section className="tt-service-faq"><div className="tt2-container"><span className="tt-service-kicker">RESPOSTAS DIRETAS</span><h2>Perguntas antes de começar</h2>{page.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
      <section className="tt-service-final"><div className="tt2-container"><span className="tt-service-kicker">PRÓXIMO PASSO</span><h2>Comece pelo problema que mais custa tempo, vendas ou capacidade.</h2><p>Em uma conversa de diagnóstico, organizamos cenário, prioridade e o menor teste capaz de produzir evidência.</p><a href={serviceLandingWhatsApp} target="_blank" rel="noreferrer">Conversar com a Tironi Tech →</a></div></section>
    </main>
    <FloatingWhatsAppButton /><Footer t={t} contactEmail="tironi@tironitech.com" whatsappNumber="5543996676633" language="pt" setLanguage={() => {}} languageOptions={languageOptions} /><CookieConsent t={t} />
  </div></div>;
}
