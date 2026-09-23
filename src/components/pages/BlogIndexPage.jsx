import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { blogIndexArticles } from '../../content/blogIndexArticles.generated';
import { getSiteText } from '../../content/siteContent';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import CookieConsent from '../shared/CookieConsent';
import FloatingWhatsAppButton from '../ui/FloatingWhatsAppButton';
import '../../styles/theme.css';
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

const labels = {
  pt: { all: 'Todos', title: 'Decisões melhores começam com tecnologia bem explicada.', deck: 'Guias práticos sobre inteligência artificial, automação, atendimento e software para transformar desafios reais em operações mais inteligentes.', library: 'Conhecimento para aplicar', archiveTitle: 'Acervo completo', archiveDeck: 'Todos os artigos publicados pela Tironi Tech, inclusive conteúdos em revisão editorial.', archiveLink: 'Ver acervo completo com 1.683 artigos', coreLink: 'Voltar aos 120 artigos prioritários', search: 'Busque por IA para WhatsApp, automação, software, GEO...', found: 'guias encontrados', read: 'Ler', updated: 'Atualizado em', track: 'Explorar trilha', active: 'TRILHA ATIVA', allButton: 'Ver todas', previous: 'Anterior', next: 'Próxima', topic: 'Filtrar por assunto' },
  en: { all: 'All', title: 'Better decisions start with technology clearly explained.', deck: 'Practical guides on artificial intelligence, automation, customer service and software for smarter business operations.', library: 'Knowledge to apply', archiveTitle: 'Complete archive', archiveDeck: 'Every article published by Tironi Tech, including content under editorial review.', archiveLink: 'View the complete archive with 1,683 articles', coreLink: 'Return to the 120 priority articles', search: 'Search AI, WhatsApp, automation, software, GEO...', found: 'guides found', read: 'Read', updated: 'Updated', track: 'Explore track', active: 'ACTIVE TRACK', allButton: 'View all', previous: 'Previous', next: 'Next', topic: 'Filter by topic' },
  es: { all: 'Todos', title: 'Las mejores decisiones comienzan con tecnología bien explicada.', deck: 'Guías prácticas sobre inteligencia artificial, automatización, atención y software para crear operaciones más inteligentes.', library: 'Conocimiento para aplicar', archiveTitle: 'Archivo completo', archiveDeck: 'Todos los artículos publicados por Tironi Tech, incluido el contenido en revisión editorial.', archiveLink: 'Ver el archivo completo con 1.683 artículos', coreLink: 'Volver a los 120 artículos prioritarios', search: 'Busca IA, WhatsApp, automatización, software, GEO...', found: 'guías encontradas', read: 'Leer', updated: 'Actualizado', track: 'Explorar tema', active: 'TEMA ACTIVO', allButton: 'Ver todos', previous: 'Anterior', next: 'Siguiente', topic: 'Filtrar por tema' }
};

const PAGE_SIZE = 18;
const localizedPath = (slug, locale) => `${locale === 'pt' ? '' : `/${locale}`}/blog/${slug}`;
const formatLocalizedDate = (date, locale) => new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : locale, { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export default function BlogIndexPage({ locale = 'pt', articlesOverride = null, archiveMode = false }) {
  const { languageOptions } = useLanguage();
  const t = getSiteText(locale);
  const copy = labels[locale] || labels.pt;
  const blogArticles = useMemo(() => articlesOverride || blogIndexArticles[locale] || blogIndexArticles.pt, [articlesOverride, locale]);
  const blogCategories = useMemo(() => [copy.all, ...new Set(blogArticles.map((article) => article.category))], [blogArticles, copy.all]);
  const [category, setCategory] = useState(copy.all);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR');
  const articles = useMemo(() => blogArticles.filter((article) => {
    const categoryMatches = category === copy.all || article.category === category;
    const searchMatches = !normalizedQuery || [article.title, article.description, article.category, ...(article.keywords || [])]
      .join(' ').toLocaleLowerCase('pt-BR').includes(normalizedQuery);
    return categoryMatches && searchMatches;
  }), [blogArticles, category, copy.all, normalizedQuery]);
  const categoryCounts = useMemo(() => Object.fromEntries(blogCategories.filter((item) => item !== copy.all).map((item) => [item, blogArticles.filter((article) => article.category === item).length])), [blogArticles, blogCategories, copy.all]);
  const highlightedCategories = useMemo(() => blogCategories.filter((item) => item !== copy.all).sort((left, right) => categoryCounts[right] - categoryCounts[left]).slice(0, 8), [blogCategories, categoryCounts, copy.all]);
  const totalPages = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleArticles = articles.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const featured = blogArticles[0];

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale;
    document.title = `${archiveMode ? copy.archiveTitle : copy.title} | Tironi Tech`;
    setMeta('description', archiveMode ? copy.archiveDeck : copy.deck);
    setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('og:title', document.title, true);
    setMeta('og:description', 'Tecnologia explicada para empresas que querem vender mais e operar melhor.', true);
    setMeta('og:type', 'website', true);
    const path = archiveMode
      ? `${locale === 'pt' ? '' : `/${locale}`}/blog/${locale === 'pt' ? 'arquivo' : 'archive'}`
      : `${locale === 'pt' ? '' : `/${locale}`}/blog`;
    setMeta('og:url', `${SITE_URL}${path}`, true);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = `${SITE_URL}${path}`;
    window.scrollTo(0, 0);
  }, [archiveMode, copy.archiveDeck, copy.archiveTitle, copy.deck, copy.title, locale]);

  const changeLanguage = (nextLocale) => { window.location.assign(`${nextLocale === 'pt' ? '' : `/${nextLocale}`}/blog`); };

  return (
    <div className="tt2-page tt-blog-page">
      <div className="tt2-page-inner">
        <Navbar t={t} language={locale} setLanguage={changeLanguage} languageOptions={languageOptions} />
        <main className="tt2-site-main">
          <section className="tt-blog-hero">
            <div className="tt-blog-orb tt-blog-orb-one" aria-hidden="true" />
            <div className="tt-blog-orb tt-blog-orb-two" aria-hidden="true" />
            <div className="tt2-container tt-blog-hero-inner">
              <span className="tt-blog-kicker">INSIGHTS TIRONI TECH</span>
              <h1>{copy.title}</h1><p>{copy.deck}</p>
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
                  <h2><a href={localizedPath(featured.slug, locale)}>{featured.title}</a></h2>
                  <p>{featured.description}</p>
                  <div className="tt-blog-feature-foot">
                    <span>{copy.updated} {formatLocalizedDate(featured.updated, locale)}</span>
                    <a className="tt-blog-primary-link" href={localizedPath(featured.slug, locale)}>{copy.read} <span aria-hidden="true">→</span></a>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="tt-blog-library" aria-labelledby="blog-library-title">
            <div className="tt2-container">
              <div className="tt-blog-library-head">
                <div><span className="tt-blog-kicker">{archiveMode ? 'ARQUIVO' : 'BIBLIOTECA'}</span><h2 id="blog-library-title">{archiveMode ? copy.archiveTitle : copy.library}</h2></div>
                <p>{archiveMode ? copy.archiveDeck : `${blogArticles.length} análises organizadas por intenção, para encontrar uma resposta e avançar para a próxima decisão.`}</p>
              </div>
              <div className="tt-blog-archive-access"><a href={archiveMode ? `${locale === 'pt' ? '' : `/${locale}`}/blog` : `${locale === 'pt' ? '/blog/arquivo' : `/${locale}/blog/archive`}`}>{archiveMode ? copy.coreLink : copy.archiveLink} <span aria-hidden="true">→</span></a></div>
              <div className="tt-blog-search-row">
                <label className="tt-blog-search">
                  <span className="sr-only">Buscar no blog</span>
                  <span aria-hidden="true">⌕</span>
                  <input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder={copy.search} />
                </label>
                <span className="tt-blog-result-count" aria-live="polite">{articles.length} {copy.found}</span>
              </div>
              {!normalizedQuery && category === copy.all && (
                <div className="tt-blog-tracks" aria-label="Trilhas de conteúdo">
                  {highlightedCategories.map((item) => (
                    <button type="button" key={item} onClick={() => { setCategory(item); setPage(1); }}>
                      <span>{String(categoryCounts[item] || 0).padStart(2, '0')} GUIAS</span>
                      <strong>{item}</strong>
                      <small>{copy.track} <b aria-hidden="true">→</b></small>
                    </button>
                  ))}
                </div>
              )}
              <div className="tt-blog-filters" aria-label="Filtrar artigos por assunto">
                <label><span>{copy.topic}</span><select value={category} onChange={(event) => { setCategory(event.target.value); setPage(1); }}>{blogCategories.map((item) => <option key={item} value={item}>{item} ({item === copy.all ? blogArticles.length : categoryCounts[item]})</option>)}</select></label>
              </div>
              {category !== copy.all && <div className="tt-blog-active-trail"><span>{copy.active}</span><strong>{category}</strong><button type="button" onClick={() => { setCategory(copy.all); setPage(1); }}>{copy.allButton}</button></div>}
              <div className="tt-blog-grid">
                {visibleArticles.map((article, index) => (
                  <article className="tt-blog-card" key={article.slug}>
                    <div className="tt-blog-card-number" aria-hidden="true">{String((currentPage - 1) * PAGE_SIZE + index + 1).padStart(2, '0')}</div>
                    <div className="tt-blog-preview-meta"><span>{article.category}</span><span>{article.readTime}</span></div>
                    <h3><a href={localizedPath(article.slug, locale)}>{article.title}</a></h3>
                    <p>{article.description}</p>
                    <footer><time dateTime={article.date}>{formatLocalizedDate(article.date, locale)}</time><a className="tt-blog-read" href={localizedPath(article.slug, locale)}>{copy.read} <span aria-hidden="true">↗</span></a></footer>
                  </article>
                ))}
              </div>
              {articles.length > PAGE_SIZE && <nav className="tt-blog-more" aria-label="Paginação do blog"><button type="button" disabled={currentPage === 1} onClick={() => setPage((value) => Math.max(1, value - 1))}>← {copy.previous}</button><span>{currentPage} / {totalPages}</span><button type="button" disabled={currentPage === totalPages} onClick={() => setPage((value) => Math.min(totalPages, value + 1))}>{copy.next} →</button></nav>}
              {articles.length === 0 && <div className="tt-blog-empty"><strong>0</strong><p>{copy.search}</p><button type="button" onClick={() => { setQuery(''); setCategory(copy.all); }}>{copy.allButton}</button></div>}
              {archiveMode && !normalizedQuery && category === copy.all && <section className="tt-blog-full-directory" aria-labelledby="full-directory-title">
                <span className="tt-blog-kicker">ÍNDICE COMPLETO</span><h2 id="full-directory-title">Todos os artigos por assunto</h2>
                <p>Abra uma trilha para consultar cada conteúdo publicado. Artigos em revisão continuam acessíveis enquanto recebem exemplos, evidências e atualização editorial.</p>
                {blogCategories.filter((item) => item !== copy.all).map((item) => <details key={item}><summary>{item} <small>{categoryCounts[item]} artigos</small></summary><ul>{blogArticles.filter((article) => article.category === item).map((article) => <li key={article.slug}><a href={localizedPath(article.slug, locale)}>{article.title}</a></li>)}</ul></details>)}
              </section>}
            </div>
          </section>
        </main>
        <FloatingWhatsAppButton />
        <Footer t={t} contactEmail="tironi@tironitech.com" whatsappNumber="5543996676633" language={locale} setLanguage={changeLanguage} languageOptions={languageOptions} />
        <CookieConsent t={t} />
      </div>
    </div>
  );
}
