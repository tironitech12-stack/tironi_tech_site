import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { blogArticles, blogCategories, formatBlogDate } from '../../content/blogArticles';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import CookieConsent from '../shared/CookieConsent';
import FloatingWhatsAppButton from '../ui/FloatingWhatsAppButton';
import '../../styles/blog.css';

const SITE_URL = 'https://www.tironitech.com';

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
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(18);
  const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR');
  const articles = useMemo(() => blogArticles.filter((article) => {
    const categoryMatches = category === 'Todos' || article.category === category;
    const searchMatches = !normalizedQuery || [article.title, article.description, article.category, ...(article.keywords || [])]
      .join(' ').toLocaleLowerCase('pt-BR').includes(normalizedQuery);
    return categoryMatches && searchMatches;
  }), [category, normalizedQuery]);
  const categoryCounts = useMemo(() => Object.fromEntries(blogCategories.filter((item) => item !== 'Todos').map((item) => [item, blogArticles.filter((article) => article.category === item).length])), []);
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
                <p>{blogArticles.length} análises organizadas por intenção, para encontrar uma resposta e avançar para a próxima decisão.</p>
              </div>
              <div className="tt-blog-search-row">
                <label className="tt-blog-search">
                  <span className="sr-only">Buscar no blog</span>
                  <span aria-hidden="true">⌕</span>
                  <input value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(18); }} placeholder="Busque por IA para WhatsApp, automação, software, GEO..." />
                </label>
                <span className="tt-blog-result-count" aria-live="polite">{articles.length} {articles.length === 1 ? 'guia encontrado' : 'guias encontrados'}</span>
              </div>
              {!normalizedQuery && category === 'Todos' && (
                <div className="tt-blog-tracks" aria-label="Trilhas de conteúdo">
                  {blogCategories.filter((item) => item !== 'Todos').map((item) => (
                    <button type="button" key={item} onClick={() => { setCategory(item); setVisibleCount(18); }}>
                      <span>{String(categoryCounts[item] || 0).padStart(2, '0')} GUIAS</span>
                      <strong>{item}</strong>
                      <small>Explorar trilha <b aria-hidden="true">→</b></small>
                    </button>
                  ))}
                </div>
              )}
              <div className="tt-blog-filters" aria-label="Filtrar artigos por assunto">
                {blogCategories.map((item) => <button type="button" key={item} className={category === item ? 'is-active' : ''} aria-pressed={category === item} onClick={() => { setCategory(item); setVisibleCount(18); }}>{item}</button>)}
              </div>
              {category !== 'Todos' && <div className="tt-blog-active-trail"><span>TRILHA ATIVA</span><strong>{category}</strong><button type="button" onClick={() => { setCategory('Todos'); setVisibleCount(18); }}>Ver todas</button></div>}
              <div className="tt-blog-grid">
                {articles.slice(0, visibleCount).map((article, index) => (
                  <article className="tt-blog-card" key={article.slug}>
                    <div className="tt-blog-card-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
                    <div className="tt-blog-preview-meta"><span>{article.category}</span><span>{article.readTime}</span></div>
                    <h3><a href={`/blog/${article.slug}`}>{article.title}</a></h3>
                    <p>{article.description}</p>
                    <footer><time dateTime={article.date}>{formatBlogDate(article.date)}</time><a className="tt-blog-read" href={`/blog/${article.slug}`} aria-label={`Ler ${article.title}`}>Ler <span aria-hidden="true">↗</span></a></footer>
                  </article>
                ))}
              </div>
              {visibleCount < articles.length && <div className="tt-blog-more"><button type="button" onClick={() => setVisibleCount((count) => count + 18)}>Mostrar mais 18 guias</button><span>{Math.min(visibleCount, articles.length)} de {articles.length}</span></div>}
              {articles.length === 0 && <div className="tt-blog-empty"><strong>Nenhum guia encontrado.</strong><p>Tente outra expressão ou volte para todas as trilhas.</p><button type="button" onClick={() => { setQuery(''); setCategory('Todos'); }}>Limpar filtros</button></div>}
            </div>
          </section>
        </main>
        <FloatingWhatsAppButton />
        <Footer t={t} contactEmail="tironi@tironitech.com" whatsappNumber="5543996676633" language={language} setLanguage={setLanguage} languageOptions={languageOptions} />
        <CookieConsent t={t} />
      </div>
    </div>
  );
}
