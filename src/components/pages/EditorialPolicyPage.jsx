import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getSiteText } from '../../content/siteContent';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import CookieConsent from '../shared/CookieConsent';
import FloatingWhatsAppButton from '../ui/FloatingWhatsAppButton';
import '../../styles/theme.css';
import '../../styles/blog.css';

export default function EditorialPolicyPage() {
  const { languageOptions } = useLanguage();
  const t = getSiteText('pt');

  useEffect(() => {
    document.documentElement.lang = 'pt-BR';
    document.title = 'Política editorial e autores | Tironi Tech';
    const description = document.head.querySelector('meta[name="description"]');
    if (description) description.content = 'Conheça os critérios de pesquisa, autoria, uso de tecnologia, fontes, revisão e correção dos conteúdos da Tironi Tech.';
    const robots = document.head.querySelector('meta[name="robots"]');
    if (robots) robots.content = 'index, follow, max-image-preview:large, max-snippet:-1';
    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = 'https://www.tironitech.com/sobre/editorial';
    window.scrollTo(0, 0);
  }, []);

  return <div className="tt2-page tt-blog-page"><div className="tt2-page-inner">
    <Navbar t={t} language="pt" setLanguage={() => {}} languageOptions={languageOptions} />
    <main className="tt2-site-main"><article className="tt-editorial-page">
      <header><span className="tt-blog-kicker">TRANSPARÊNCIA EDITORIAL</span><h1>Conteúdo verificável para decisões reais.</h1><p>O blog da Tironi Tech explica inteligência artificial, automação e software para empresas. Esta página identifica quem responde pelo conteúdo, como as fontes são usadas e como o acervo é revisado.</p></header>
      <section><h2>Responsabilidade e autoria</h2><p>A Tironi Tech é a autora institucional e responsável editorial pelos artigos. Os textos traduzem pesquisa técnica e experiência em desenvolvimento de software, integrações, automação e IA aplicada. Quando um conteúdo incorporar contribuição pessoal, estudo de caso ou dado de terceiro, a atribuição deve aparecer na própria página.</p></section>
      <section><h2>Pesquisa, tecnologia e revisão</h2><p>Usamos tecnologia e automação para apoiar pesquisa, estrutura e tradução. A publicação continua sob responsabilidade da Tironi Tech. O processo considera intenção da pergunta, fontes identificáveis, coerência técnica, aplicação prática e limites da recomendação. Conteúdo assistido por IA não é apresentado como experiência pessoal.</p></section>
      <section><h2>Fontes e evidências</h2><p>Priorizamos documentação oficial, normas, pesquisas originais e materiais dos fornecedores diretamente envolvidos. Relatórios comerciais são tratados como contexto, com autoria e limitações. Cada artigo mostra as fontes consultadas e a data de atualização para que o leitor possa verificar as afirmações.</p></section>
      <section><h2>Atualização e correções</h2><p>Artigos prioritários passam por ciclos de atualização conforme mudanças de produto, tecnologia, legislação e evidências. Conteúdos do acervo que ainda estão em revisão permanecem acessíveis ao leitor, mas só entram no núcleo de indexação após cumprir critérios de utilidade, diferenciação, fontes e consistência editorial.</p><p>Para indicar uma correção, envie a URL e a evidência para <a href="mailto:tironi@tironitech.com">tironi@tironitech.com</a>.</p></section>
      <section><h2>Interesse comercial</h2><p>Os artigos podem apresentar serviços da Tironi Tech e produtos como ChatBô e GeoAura quando forem pertinentes ao problema discutido. Essa relação comercial não altera a identificação das fontes nem transforma estimativas em resultados comprovados. Métricas de clientes só devem ser publicadas com contexto e autorização.</p></section>
      <nav className="tt-editorial-actions"><a href="/blog">Biblioteca editorial</a><a href="/blog/arquivo">Acervo completo</a></nav>
    </article></main>
    <FloatingWhatsAppButton /><Footer t={t} contactEmail="tironi@tironitech.com" whatsappNumber="5543996676633" language="pt" setLanguage={() => {}} languageOptions={languageOptions} /><CookieConsent t={t} />
  </div></div>;
}
