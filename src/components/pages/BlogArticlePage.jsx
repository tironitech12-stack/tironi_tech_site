import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getSiteText } from '../../content/siteContent';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import CookieConsent from '../shared/CookieConsent';
import FloatingWhatsAppButton from '../ui/FloatingWhatsAppButton';
import ArticleVisual from '../blog/ArticleVisual';
import '../../styles/theme.css';
import '../../styles/blog.css';

const SITE_URL = 'https://www.tironitech.com';
const localizedPath = (slug, locale = 'pt') => `${locale === 'pt' ? '' : `/${locale}`}/blog/${slug}`;
const formatLocalizedDate = (date, locale = 'pt') => new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : locale, { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
const getArticleLocales = (article) => article?.availableLocales || ['pt', 'en', 'es'];

function readEmbeddedArticle(slug, locale) {
  const node = document.getElementById('tt-article-data');
  if (!node) return null;
  try {
    const payload = JSON.parse(node.textContent);
    return payload?.article?.slug === slug && payload.locale === locale ? payload : null;
  } catch {
    return null;
  }
}

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

const pageCopy = {
  pt: { home: 'Início', guide: 'NESTE GUIA', quick: 'LEITURA RÁPIDA', takeaway: 'O que você vai levar deste guia', answers: 'RESPOSTAS DIRETAS', faq: 'Perguntas frequentes', next: 'PRÓXIMO PASSO', sources: 'Fontes consultadas', related: 'Artigos relacionados', all: 'Ver biblioteca completa', read: 'Ler', published: 'Publicado em', updated: 'Atualizado em', editorial: 'Como produzimos este conteúdo', editorialText: 'Conteúdo estruturado com apoio de tecnologia e publicado sob responsabilidade editorial da Tironi Tech. As fontes, a data de revisão e os limites da análise ficam visíveis para facilitar a verificação.', loading: 'Carregando artigo…', notFound: 'Este artigo não foi encontrado.' },
  en: { home: 'Home', guide: 'IN THIS GUIDE', quick: 'QUICK READ', takeaway: 'What you will learn', answers: 'DIRECT ANSWERS', faq: 'Frequently asked questions', next: 'NEXT STEP', sources: 'Sources consulted', related: 'Related articles', all: 'View the full library', read: 'Read', published: 'Published', updated: 'Updated', editorial: 'How this content is produced', editorialText: 'Content is structured with technology support and published under Tironi Tech editorial responsibility. Sources, review date and analysis limits remain visible for verification.', loading: 'Loading article…', notFound: 'This article was not found.' },
  es: { home: 'Inicio', guide: 'EN ESTA GUÍA', quick: 'LECTURA RÁPIDA', takeaway: 'Qué aprenderás en esta guía', answers: 'RESPUESTAS DIRECTAS', faq: 'Preguntas frecuentes', next: 'PRÓXIMO PASO', sources: 'Fuentes consultadas', related: 'Artículos relacionados', all: 'Ver la biblioteca completa', read: 'Leer', published: 'Publicado', updated: 'Actualizado', editorial: 'Cómo producimos este contenido', editorialText: 'El contenido se estructura con apoyo tecnológico y se publica bajo la responsabilidad editorial de Tironi Tech. Las fuentes, la fecha de revisión y los límites quedan visibles para verificación.', loading: 'Cargando artículo…', notFound: 'No se encontró este artículo.' }
};

export default function BlogArticlePage({ slug, locale = 'pt' }) {
  const { languageOptions } = useLanguage();
  const t = getSiteText(locale);
  const copy = pageCopy[locale] || pageCopy.pt;
  const [payload, setPayload] = useState(() => readEmbeddedArticle(slug, locale));
  const [missingKey, setMissingKey] = useState(null);
  const requestKey = `${locale}/${slug}`;
  const activePayload = payload?.article?.slug === slug && payload.locale === locale ? payload : null;
  const loadState = activePayload ? 'ready' : missingKey === requestKey ? 'missing' : 'loading';
  const article = activePayload?.article;

  useEffect(() => {
    const embedded = readEmbeddedArticle(slug, locale);
    if (embedded) return undefined;
    const controller = new AbortController();
    fetch(`/article-data/${locale}/${encodeURIComponent(slug)}.json`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Article request failed: ${response.status}`);
        return response.json();
      })
      .then((nextPayload) => setPayload(nextPayload))
      .catch((error) => { if (error.name !== 'AbortError') setMissingKey(requestKey); });
    return () => controller.abort();
  }, [locale, requestKey, slug]);

  useEffect(() => {
    if (!article) {
      if (loadState === 'missing') document.title = `${copy.notFound} | Tironi Tech`;
      return;
    }
    const url = `${SITE_URL}${localizedPath(article.slug, locale)}`;
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale;
    document.title = `${article.title} | Tironi Tech`;
    updateMeta('meta[name="description"]', 'content', article.description);
    updateMeta('meta[property="og:title"]', 'content', article.title);
    updateMeta('meta[property="og:description"]', 'content', article.description);
    updateMeta('meta[property="og:type"]', 'content', 'article');
    updateMeta('meta[property="og:url"]', 'content', url);
    updateMeta('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = url;
    let schema = document.head.querySelector('#tt-page-schema');
    const createdSchema = !schema;
    if (!schema) { schema = document.createElement('script'); schema.id = 'tt-page-schema'; schema.type = 'application/ld+json'; document.head.appendChild(schema); }
    const wordCount = [article.title, article.description, article.intro, ...article.takeaways, ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets || [])]), ...(article.faqs || []).flatMap((faq) => [faq.question, faq.answer])].join(' ').trim().split(/\s+/).length;
    const languageUrls = Object.fromEntries(getArticleLocales(article).map((lang) => [lang, `${SITE_URL}${localizedPath(article.slug, lang)}`]));
    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => node.remove());
    Object.entries({ ...languageUrls, 'x-default': languageUrls.pt }).forEach(([lang, href]) => { const link = document.createElement('link'); link.rel = 'alternate'; link.hreflang = lang; link.href = href; link.dataset.ttHreflang = 'true'; document.head.appendChild(link); });
    const graph = [{ '@type': 'BlogPosting', headline: article.title, description: article.description, image: `${SITE_URL}/brand/tironi-symbol.png`, datePublished: article.date, dateModified: article.updated, inLanguage: locale === 'pt' ? 'pt-BR' : locale, articleSection: article.category, wordCount, author: { '@type': 'Organization', name: 'Tironi Tech', url: `${SITE_URL}/sobre/editorial` }, publisher: { '@type': 'Organization', name: 'Tironi Tech', url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/brand/tironi-symbol.png` } }, mainEntityOfPage: url, keywords: article.keywords.join(', '), citation: article.sources.map((source) => source.url) }, { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: copy.home, item: `${SITE_URL}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}${locale === 'pt' ? '' : `/${locale}`}/blog` }, { '@type': 'ListItem', position: 3, name: article.title, item: url }] }];
    if (article.faqs?.length) graph.push({ '@type': 'FAQPage', mainEntity: article.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) });
    schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    window.scrollTo(0, 0);
    return () => { if (createdSchema) schema.remove(); };
  }, [article, copy.home, copy.notFound, loadState, locale]);

  if (loadState === 'loading') {
    return <div className="tt2-page tt-blog-page"><Navbar t={t} language={locale} setLanguage={() => {}} languageOptions={languageOptions} /><main className="tt-blog-not-found"><span className="tt-blog-kicker">TIRONI TECH</span><h1>{copy.loading}</h1></main></div>;
  }

  if (!article) {
    return <div className="tt2-page tt-blog-page"><Navbar t={t} language={locale} setLanguage={() => {}} languageOptions={languageOptions} /><main className="tt-blog-not-found"><span className="tt-blog-kicker">404</span><h1>{copy.notFound}</h1><a className="tt-blog-primary-link" href={`${locale === 'pt' ? '' : `/${locale}`}/blog`}>Blog →</a></main></div>;
  }

  const related = activePayload.related || [];
  const availableLanguages = getArticleLocales(article);
  const articleLanguageOptions = languageOptions.filter((option) => availableLanguages.includes(option.value));
  const changeLanguage = (nextLocale) => { if (availableLanguages.includes(nextLocale)) window.location.assign(localizedPath(article.slug, nextLocale)); };

  return (
    <div className="tt2-page tt-blog-page">
      <div className="tt2-page-inner">
        <Navbar t={t} language={locale} setLanguage={changeLanguage} languageOptions={articleLanguageOptions} />
        <main className="tt2-site-main">
          <article className="tt-article">
            <header className="tt-article-hero">
              <div className="tt-article-grid" aria-hidden="true" />
              <div className="tt2-container tt-article-hero-inner">
                <nav className="tt-article-breadcrumb" aria-label="Breadcrumb"><a href="/">{copy.home}</a><span>/</span><a href={`${locale === 'pt' ? '' : `/${locale}`}/blog`}>Blog</a><span>/</span><span>{article.category}</span></nav>
                <div className="tt-blog-preview-meta"><span>{article.category}</span><span>{article.readTime}</span></div>
                <h1>{article.title}</h1>
                <p className="tt-article-deck">{article.description}</p>
                <div className="tt-article-byline"><span className="tt-article-author-mark">TT</span><span><strong><a href="/sobre/editorial">Tironi Tech</a></strong><small>{copy.published} {formatLocalizedDate(article.date, locale)} · {copy.updated} {formatLocalizedDate(article.updated, locale)}</small></span></div>
                <nav className="tt-article-languages" aria-label="Language versions">{availableLanguages.map((lang) => <a key={lang} href={localizedPath(article.slug, lang)}>{lang.toUpperCase()}</a>)}</nav>
              </div>
            </header>

            <div className="tt2-container tt-article-layout">
              <aside className="tt-article-aside">
                <span>{copy.guide}</span>
                <ol>{article.sections.map((section, index) => <li key={section.heading}><a href={`#secao-${index + 1}`}>{section.heading}</a></li>)}</ol>
              </aside>
              <div className="tt-article-body">
                <p className="tt-article-lead">{article.intro}</p>
                <section className="tt-article-summary" aria-labelledby="article-summary-title"><span className="tt-blog-kicker">{copy.quick}</span><h2 id="article-summary-title">{copy.takeaway}</h2><ul>{article.takeaways.map((item) => <li key={item}>{item}</li>)}</ul></section>
                <ArticleVisual visual={article.visual} />
                <aside className="tt-article-editorial"><strong>{copy.editorial}</strong><p>{copy.editorialText}</p><a href="/sobre/editorial">Tironi Tech →</a></aside>
                {article.sections.map((section, index) => (
                  <section className="tt-article-section" id={`secao-${index + 1}`} key={section.heading}>
                    <span className="tt-article-section-number">{String(index + 1).padStart(2, '0')}</span>
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.bullets ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                  </section>
                ))}
                {article.faqs?.length ? <section className="tt-article-faq" aria-labelledby="article-faq-title"><span className="tt-blog-kicker">{copy.answers}</span><h2 id="article-faq-title">{copy.faq}</h2>{article.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section> : null}
                <section className="tt-article-cta">
                  <span className="tt-blog-kicker">{copy.next}</span><h2>{article.cta.title}</h2><p>{article.cta.text}</p><a href={article.cta.href} target={article.cta.href.startsWith('http') ? '_blank' : undefined} rel={article.cta.href.startsWith('http') ? 'noreferrer' : undefined}>{article.cta.label} <span aria-hidden="true">→</span></a>
                </section>
                <section className="tt-article-sources" aria-labelledby="article-sources-title"><h2 id="article-sources-title">{copy.sources}</h2><ul>{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} <span aria-hidden="true">↗</span></a></li>)}</ul></section>
              </div>
            </div>
          </article>

          {related.length ? <section className="tt-blog-related"><div className="tt2-container"><div className="tt-blog-library-head"><div><span className="tt-blog-kicker">TIRONI TECH</span><h2>{copy.related}</h2></div><a className="tt-blog-text-link" href={`${locale === 'pt' ? '' : `/${locale}`}/blog`}>{copy.all} →</a></div><div className="tt-blog-grid">{related.map((item, index) => <article className="tt-blog-card" key={item.slug}><div className="tt-blog-card-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div><div className="tt-blog-preview-meta"><span>{item.category}</span><span>{item.readTime}</span></div><h3><a href={localizedPath(item.slug, locale)}>{item.title}</a></h3><p>{item.description}</p><footer><time dateTime={item.date}>{formatLocalizedDate(item.date, locale)}</time><a className="tt-blog-read" href={localizedPath(item.slug, locale)}>{copy.read} <span aria-hidden="true">↗</span></a></footer></article>)}</div></div></section> : null}
        </main>
        <FloatingWhatsAppButton />
        <Footer t={t} contactEmail="tironi@tironitech.com" whatsappNumber="5543996676633" language={locale} setLanguage={changeLanguage} languageOptions={articleLanguageOptions} />
        <CookieConsent t={t} />
      </div>
    </div>
  );
}
