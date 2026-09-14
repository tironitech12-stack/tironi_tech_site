import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { blogArticles, blogCategories, formatBlogDate } from '../../content/blogArticles';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import CookieConsent from '../shared/CookieConsent';
import FloatingWhatsAppButton from '../ui/FloatingWhatsAppButton';
import '../../styles/blog.css';

const SITE_URL = 'https://tironitech.com';

function setMeta(name, content, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement('meta');
    node.setAttribute(property ? 'property' : 'name', name);
    document.head.appendChild(node);
  }
  node.setAttribute('content', content);
}

export default function BlogIndexPage() {
  const { t, language, setLanguage, languageOptions } = useLanguage();
  const [category, setCategory] = useState('Todos');
  const articles = useMemo(() => category === 'Todos' ? blogArticles : blogArticles.filter((article) => article.category === category), [category]);
  const featured = blogArticles[0];

  useEffect(() => {
    document.title = 'Blog Tironi Tech | IA, Automação, ChatBô e Software';
    setMeta('description', 'Guias práticos e pesquisas sobre inteligência artificial, automação de processos, ChatBô, atendimento no WhatsApp e software personalizado.');
    setMeta('og:title', document.title, true);
    setMeta('og:description', 'Tecnologia explicada para empresas que querem vender mais e operar melhor.', true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', `${SITE_URL}/blog`, true);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = `${SITE_URL}/blog`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tt2-page tt-blog-page">
      <div className="tt2-page-inner">
        <Navbar t={t} language={language} setLanguage={setLanguage} languageOptions={languageOptions} />
        <main className="tt2-site-main">
          <section className="tt-blog-hero">
            <div className="tt-blog-orb tt-blog-orb-one" aria-hidden="true" />
            <div className="tt-blog-orb tt-blog-orb-two" aria-hidden="true" />
            <div className="tt2-container tt-blog-hero-inner">
              <span className="tt-blog-kicker">INSIGHTS TIRONI TECH</span>
              <h1>Decisões melhores começam com tecnologia bem explicada.</h1>
              <p>Guias práticos sobre inteligência artificial, automação, atendimento e software para transformar desafios reais em operações mais inteligentes.</p>
            </div>
          </section>

          <section className="tt-blog-feature-wrap" aria-label="Artigo em destaque">
            <div className="tt2-container">
              <article className="tt-blog-feature">
                <div className="tt-blog-feature-visual" aria-hidden="true">
                  <span className="tt-blog-feature-signal">01</span>
                  <div className="tt-blog-feature-rings" />
                  <strong>CONVERSAS<br />QUE MOVEM<br />NEGÓCIOS</strong>
                </div>
                <div className="tt-blog-feature-copy">
                  <div className="tt-blog-preview-meta"><span>{featured.category}</span><span>{featured.readTime}</span></div>
                  <h2><a href={`/blog/${featured.slug}`}>{featured.title}</a></h2>
                  <p>{featured.description}</p>
                  <div className="tt-blog-feature-foot">
                    <span>Atualizado em {formatBlogDate(featured.updated)}</span>
                    <a className="tt-blog-primary-link" href={`/blog/${featured.slug}`}>Ler guia completo <span aria-hidden="true">→</span></a>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="tt-blog-library" aria-labelledby="blog-library-title">
            <div className="tt2-container">
              <div className="tt-blog-library-head">
                <div><span className="tt-blog-kicker">BIBLIOTECA</span><h2 id="blog-library-title">Conhecimento para aplicar</h2></div>
                <p>{blogArticles.length} análises e guias para líderes, equipes comerciais e operações.</p>
              </div>
              <div className="tt-blog-filters" aria-label="Filtrar artigos por assunto">
                {blogCategories.map((item) => <button type="button" key={item} className={category === item ? 'is-active' : ''} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
              </div>
              <div className="tt-blog-grid">
                {articles.map((article, index) => (
                  <article className="tt-blog-card" key={article.slug}>
                    <div className="tt-blog-card-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
                    <div className="tt-blog-preview-meta"><span>{article.category}</span><span>{article.readTime}</span></div>
                    <h3><a href={`/blog/${article.slug}`}>{article.title}</a></h3>
                    <p>{article.description}</p>
                    <footer><time dateTime={article.date}>{formatBlogDate(article.date)}</time><a className="tt-blog-read" href={`/blog/${article.slug}`} aria-label={`Ler ${article.title}`}>Ler <span aria-hidden="true">↗</span></a></footer>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
        <FloatingWhatsAppButton />
        <Footer t={t} contactEmail="tironi@tironitech.com" whatsappNumber="558599498149" language={language} setLanguage={setLanguage} languageOptions={languageOptions} />
        <CookieConsent t={t} />
      </div>
    </div>
  );
}
