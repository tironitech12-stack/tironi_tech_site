import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { formatBlogDate, getBlogArticle, getRelatedBlogArticles } from '../../content/blogArticles';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import CookieConsent from '../shared/CookieConsent';
import FloatingWhatsAppButton from '../ui/FloatingWhatsAppButton';
import '../../styles/theme.css';
import '../../styles/blog.css';

const SITE_URL = 'https://www.tironitech.com';

function updateMeta(selector, attribute, value) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement('meta');
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
    if (match) node.setAttribute(match[1], match[2]);
    document.head.appendChild(node);
  }
  node.setAttribute(attribute, value);
}

export default function BlogArticlePage({ slug }) {
  const { t, language, setLanguage, languageOptions } = useLanguage();
  const article = getBlogArticle(slug);

  useEffect(() => {
    if (!article) { document.title = 'Artigo não encontrado | Tironi Tech'; return; }
    const url = `${SITE_URL}/blog/${article.slug}`;
    document.title = `${article.title} | Tironi Tech`;
    updateMeta('meta[name="description"]', 'content', article.description);
    updateMeta('meta[property="og:title"]', 'content', article.title);
    updateMeta('meta[property="og:description"]', 'content', article.description);
    updateMeta('meta[property="og:type"]', 'content', 'article');
    updateMeta('meta[property="og:url"]', 'content', url);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = url;
    let schema = document.head.querySelector('#tt-page-schema');
    const createdSchema = !schema;
    if (!schema) { schema = document.createElement('script'); schema.id = 'tt-page-schema'; schema.type = 'application/ld+json'; document.head.appendChild(schema); }
    const wordCount = [article.title, article.description, article.intro, ...article.takeaways, ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets || [])]), ...(article.faqs || []).flatMap((faq) => [faq.question, faq.answer])].join(' ').trim().split(/\s+/).length;
    const graph = [{ '@type': 'BlogPosting', headline: article.title, description: article.description, image: `${SITE_URL}/brand/tironi-symbol.png`, datePublished: article.date, dateModified: article.updated, inLanguage: 'pt-BR', articleSection: article.category, wordCount, author: { '@type': 'Organization', name: 'Tironi Tech', url: SITE_URL }, publisher: { '@type': 'Organization', name: 'Tironi Tech', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/brand/tironi-symbol.png` } }, mainEntityOfPage: url, keywords: article.keywords.join(', '), citation: article.sources.map((source) => source.url) }, { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` }, { '@type': 'ListItem', position: 3, name: article.title, item: url }] }];
    if (article.faqs?.length) graph.push({ '@type': 'FAQPage', mainEntity: article.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) });
    schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    window.scrollTo(0, 0);
    return () => { if (createdSchema) schema.remove(); };
  }, [article]);

  if (!article) {
    return <div className="tt2-page tt-blog-page"><Navbar t={t} language={language} setLanguage={setLanguage} languageOptions={languageOptions} /><main className="tt-blog-not-found"><span className="tt-blog-kicker">ERRO 404</span><h1>Este artigo não foi encontrado.</h1><a className="tt-blog-primary-link" href="/blog">Voltar para o blog →</a></main></div>;
  }

  const related = getRelatedBlogArticles(article);

  return (
    <div className="tt2-page tt-blog-page">
      <div className="tt2-page-inner">
        <Navbar t={t} language={language} setLanguage={setLanguage} languageOptions={languageOptions} />
        <main className="tt2-site-main">
          <article className="tt-article">
            <header className="tt-article-hero">
              <div className="tt-article-grid" aria-hidden="true" />
              <div className="tt2-container tt-article-hero-inner">
                <nav className="tt-article-breadcrumb" aria-label="Navegação estrutural"><a href="/">Início</a><span>/</span><a href="/blog">Blog</a><span>/</span><span>{article.category}</span></nav>
                <div className="tt-blog-preview-meta"><span>{article.category}</span><span>{article.readTime}</span></div>
                <h1>{article.title}</h1>
                <p className="tt-article-deck">{article.description}</p>
                <div className="tt-article-byline"><span className="tt-article-author-mark">TT</span><span><strong>Tironi Tech</strong><small>Publicado em {formatBlogDate(article.date)} · Atualizado em {formatBlogDate(article.updated)}</small></span></div>
              </div>
            </header>

            <div className="tt2-container tt-article-layout">
              <aside className="tt-article-aside">
                <span>NESTE GUIA</span>
                <ol>{article.sections.map((section, index) => <li key={section.heading}><a href={`#secao-${index + 1}`}>{section.heading}</a></li>)}</ol>
              </aside>
              <div className="tt-article-body">
                <p className="tt-article-lead">{article.intro}</p>
                <section className="tt-article-summary" aria-labelledby="article-summary-title"><span className="tt-blog-kicker">LEITURA RÁPIDA</span><h2 id="article-summary-title">O que você vai levar deste guia</h2><ul>{article.takeaways.map((item) => <li key={item}>{item}</li>)}</ul></section>
                {article.sections.map((section, index) => (
                  <section className="tt-article-section" id={`secao-${index + 1}`} key={section.heading}>
                    <span className="tt-article-section-number">{String(index + 1).padStart(2, '0')}</span>
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.bullets ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                  </section>
                ))}
                {article.faqs?.length ? <section className="tt-article-faq" aria-labelledby="article-faq-title"><span className="tt-blog-kicker">RESPOSTAS DIRETAS</span><h2 id="article-faq-title">Perguntas frequentes</h2>{article.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section> : null}
                <section className="tt-article-cta">
                  <span className="tt-blog-kicker">PRÓXIMO PASSO</span><h2>{article.cta.title}</h2><p>{article.cta.text}</p><a href={article.cta.href} target={article.cta.href.startsWith('http') ? '_blank' : undefined} rel={article.cta.href.startsWith('http') ? 'noreferrer' : undefined}>{article.cta.label} <span aria-hidden="true">→</span></a>
                </section>
                <section className="tt-article-sources" aria-labelledby="article-sources-title"><h2 id="article-sources-title">Fontes consultadas</h2><ul>{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} <span aria-hidden="true">↗</span></a></li>)}</ul></section>
              </div>
            </div>
          </article>

          {related.length ? <section className="tt-blog-related"><div className="tt2-container"><div className="tt-blog-library-head"><div><span className="tt-blog-kicker">CONTINUE EXPLORANDO</span><h2>Artigos relacionados</h2></div><a className="tt-blog-text-link" href="/blog">Ver biblioteca completa →</a></div><div className="tt-blog-grid">{related.map((item, index) => <article className="tt-blog-card" key={item.slug}><div className="tt-blog-card-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div><div className="tt-blog-preview-meta"><span>{item.category}</span><span>{item.readTime}</span></div><h3><a href={`/blog/${item.slug}`}>{item.title}</a></h3><p>{item.description}</p><footer><time dateTime={item.date}>{formatBlogDate(item.date)}</time><a className="tt-blog-read" href={`/blog/${item.slug}`}>Ler <span aria-hidden="true">↗</span></a></footer></article>)}</div></div></section> : null}
        </main>
        <FloatingWhatsAppButton />
        <Footer t={t} contactEmail="tironi@tironitech.com" whatsappNumber="5543996676633" language={language} setLanguage={setLanguage} languageOptions={languageOptions} />
        <CookieConsent t={t} />
      </div>
    </div>
  );
}
