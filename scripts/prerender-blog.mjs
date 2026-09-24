import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { blogArticles, coreBlogArticles, isCoreBlogArticle, getRelatedBlogArticles } from '../src/content/blogArticles.js';
import { getBlogArticlesForLocale, getRelatedArticlesForLocale, localizedPath } from '../src/content/localizedBlogArticles.js';
import { clubContent } from '../src/content/clubContent.js';
import { LEGAL_COPY } from '../src/content/legalPolicies.js';
import { serviceLandingPages, serviceLandingWhatsApp } from '../src/content/serviceLandingPages.js';
import { corporateOverrides } from '../src/content/corporateOverrides.js';

const root = resolve('dist');
const template = await readFile(resolve(root, 'index.html'), 'utf8');
const origin = 'https://www.tironitech.com';

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

function pageTemplate({ title, description, path, body, schema, locale = 'pt', alternates = [], robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }) {
  const url = `${origin}${path}`;
  const cleanTemplate = template
    .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, '')
    .replace(/\s*<meta\s+name="robots"[^>]*>/gi, '')
    .replace(/\s*<meta\s+property="og:(?:type|title|description|url|image)"[^>]*>/gi, '')
    .replace(/\s*<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');
  const tags = [
    `<link rel="canonical" href="${url}">`,
    `<meta name="robots" content="${robots}">`,
    `<meta property="og:title" content="${escapeHtml(title)}">`,
    `<meta property="og:description" content="${escapeHtml(description)}">`,
    `<meta property="og:type" content="${path === '/blog' ? 'website' : 'article'}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${origin}/brand/tironi-symbol.png">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(description)}">`,
    `<meta name="twitter:image" content="${origin}/brand/tironi-symbol.png">`,
    ...alternates.map(({ hreflang, href }) => `<link rel="alternate" hreflang="${hreflang}" href="${href}">`),
    `<script id="tt-page-schema" type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`
  ].join('\n    ');

  return cleanTemplate
    .replace(/<html\s+lang="[^"]*"/, `<html lang="${locale === 'pt' ? 'pt-BR' : locale}"`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace('</head>', `    ${tags}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

const blogGroups = [...new Set(coreBlogArticles.map((article) => article.category))].map((category) => ({ category, articles: coreBlogArticles.filter((article) => article.category === category) }));
const indexBody = `<main class="tt-blog-static"><header><p>INSIGHTS TIRONI TECH</p><h1>Decisões melhores começam com tecnologia bem explicada.</h1><p>Guias práticos sobre inteligência artificial, automação, atendimento e software personalizado.</p></header><nav><a href="/mapa-do-site">Mapa do núcleo editorial</a> · <a href="/blog/arquivo">Acervo completo com ${blogArticles.length} artigos</a></nav><section><h2>Guias mais recentes</h2>${coreBlogArticles.slice(0, 18).map((article) => `<article><p>${escapeHtml(article.category)} · ${escapeHtml(article.readTime)}</p><h3><a href="/blog/${article.slug}">${escapeHtml(article.title)}</a></h3><p>${escapeHtml(article.description)}</p></article>`).join('')}</section></main>`;
const indexSchema = { '@context': 'https://schema.org', '@type': 'Blog', name: 'Blog Tironi Tech', description: 'Guias sobre IA, automação, ChatBô e software personalizado.', url: `${origin}/blog`, publisher: { '@type': 'Organization', name: 'Tironi Tech', url: origin } };
await mkdir(resolve(root, 'blog'), { recursive: true });
const blogIndexAlternates = ['pt', 'en', 'es'].map((locale) => ({ hreflang: locale, href: `${origin}${locale === 'pt' ? '' : `/${locale}`}/blog` })).concat({ hreflang: 'x-default', href: `${origin}/blog` });
await writeFile(resolve(root, 'blog', 'index.html'), pageTemplate({ title: 'Blog Tironi Tech | IA, Automação, ChatBô e Software', description: 'Guias práticos e pesquisas sobre inteligência artificial, automação de processos, ChatBô, atendimento no WhatsApp e software personalizado.', path: '/blog', body: indexBody, schema: indexSchema, alternates: blogIndexAlternates }));
const archiveBody = `<main class="tt-blog-static"><header><p>ACERVO COMPLETO</p><h1>Todos os artigos da Tironi Tech</h1><p>O acervo reúne ${blogArticles.length} artigos. Os 120 conteúdos prioritários continuam destacados na biblioteca principal.</p></header><nav><a href="/blog">Voltar à seleção principal</a> · <a href="/sobre/editorial">Política editorial</a></nav>${[...new Set(blogArticles.map((article) => article.category))].map((category) => `<section><h2>${escapeHtml(category)}</h2><ul>${blogArticles.filter((article) => article.category === category).map((article) => `<li><a href="/blog/${article.slug}">${escapeHtml(article.title)}</a></li>`).join('')}</ul></section>`).join('')}</main>`;
await mkdir(resolve(root, 'blog', 'arquivo'), { recursive: true });
await writeFile(resolve(root, 'blog', 'arquivo', 'index.html'), pageTemplate({ title: 'Acervo completo do blog | Tironi Tech', description: `Consulte os ${blogArticles.length} artigos publicados pela Tironi Tech.`, path: '/blog/arquivo', body: archiveBody, schema: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Acervo completo do blog Tironi Tech', url: `${origin}/blog/arquivo`, mainEntity: { '@type': 'ItemList', numberOfItems: blogArticles.length } } }));

for (const article of blogArticles) {
  const path = `/blog/${article.slug}`;
  const faqBody = article.faqs?.length ? `<section><h2>Perguntas frequentes</h2>${article.faqs.map((faq) => `<h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p>`).join('')}</section>` : '';
  const relatedBody = `<section><h2>Artigos relacionados</h2><ul>${getRelatedBlogArticles(article).map((related) => `<li><a href="/blog/${related.slug}">${escapeHtml(related.title)}</a></li>`).join('')}</ul></section>`;
  const visualBody = article.visual ? `<figure><figcaption><strong>${escapeHtml(article.visual.title)}</strong></figcaption><ol>${article.visual.labels.map((label) => `<li>${escapeHtml(label)}</li>`).join('')}</ol><p>${escapeHtml(article.visual.caption)}</p></figure>` : '';
  const articleBody = `<main class="tt-article-static"><article><nav><a href="/">Início</a> / <a href="/blog">Blog</a> / ${escapeHtml(article.category)}</nav><header><p>${escapeHtml(article.category)} · ${escapeHtml(article.readTime)}</p><h1>${escapeHtml(article.title)}</h1><p>${escapeHtml(article.description)}</p><p>Por Tironi Tech · Publicado em <time datetime="${article.date}">${article.date}</time> · Atualizado em <time datetime="${article.updated}">${article.updated}</time></p></header><p>${escapeHtml(article.intro)}</p><section><h2>O que você vai levar deste guia</h2><ul>${article.takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>${visualBody}${article.sections.map((section) => `<section><h2>${escapeHtml(section.heading)}</h2>${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}${section.bullets ? `<ul>${section.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : ''}</section>`).join('')}${faqBody}<section><h2>${escapeHtml(article.cta.title)}</h2><p>${escapeHtml(article.cta.text)}</p><a href="${article.cta.href}">${escapeHtml(article.cta.label)}</a></section>${relatedBody}<section><h2>Fontes consultadas</h2><ul>${article.sources.map((source) => `<li><a href="${source.url}">${escapeHtml(source.label)}</a></li>`).join('')}</ul></section></article></main>`;
  const wordCount = [article.title, article.description, article.intro, ...article.takeaways, ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets || [])]), ...(article.faqs || []).flatMap((faq) => [faq.question, faq.answer])].join(' ').trim().split(/\s+/).length;
  const graph = [
    { '@type': 'BlogPosting', '@id': `${origin}${path}#article`, headline: article.title, description: article.description, image: `${origin}/brand/tironi-symbol.png`, datePublished: article.date, dateModified: article.updated, inLanguage: 'pt-BR', articleSection: article.category, wordCount, author: { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'Tironi Tech', url: `${origin}/sobre/editorial` }, publisher: { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'Tironi Tech', url: origin, logo: { '@type': 'ImageObject', url: `${origin}/brand/tironi-symbol.png` } }, mainEntityOfPage: { '@type': 'WebPage', '@id': `${origin}${path}` }, keywords: article.keywords.join(', '), citation: article.sources.map((source) => source.url) },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: `${origin}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${origin}/blog` },
      { '@type': 'ListItem', position: 3, name: article.title, item: `${origin}${path}` }
    ] }
  ];
  if (article.faqs?.length) graph.push({ '@type': 'FAQPage', mainEntity: article.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) });
  const schema = { '@context': 'https://schema.org', '@graph': graph };
  const directory = resolve(root, 'blog', article.slug);
  await mkdir(directory, { recursive: true });
  const alternates = ['pt', 'en', 'es'].map((locale) => ({ hreflang: locale, href: `${origin}${localizedPath(article.slug, locale)}` })).concat({ hreflang: 'x-default', href: `${origin}/blog/${article.slug}` });
  await writeFile(resolve(directory, 'index.html'), pageTemplate({ title: `${article.title} | Tironi Tech`, description: article.description, path, body: articleBody, schema, alternates, robots: isCoreBlogArticle(article) ? undefined : 'noindex, follow' }));
}

const localizedStaticCopy = {
  en: { title: 'Better decisions start with technology clearly explained.', deck: 'In-depth guides on artificial intelligence, automation, ChatBô and custom software.', home: 'Home', takeaway: 'What you will learn', faq: 'Frequently asked questions', related: 'Related articles', sources: 'Sources consulted', byline: 'By Tironi Tech · Published', updated: 'Updated' },
  es: { title: 'Las mejores decisiones comienzan con tecnología bien explicada.', deck: 'Guías profundas sobre inteligencia artificial, automatización, ChatBô y software a medida.', home: 'Inicio', takeaway: 'Qué aprenderás', faq: 'Preguntas frecuentes', related: 'Artículos relacionados', sources: 'Fuentes consultadas', byline: 'Por Tironi Tech · Publicado', updated: 'Actualizado' }
};

for (const locale of ['en', 'es']) {
  const localeArticles = getBlogArticlesForLocale(locale);
  const localeCopy = localizedStaticCopy[locale];
  const localeGroups = [...new Set(localeArticles.map((article) => article.category))].map((category) => ({ category, articles: localeArticles.filter((article) => article.category === category) }));
  const indexPath = `/${locale}/blog`;
  const localizedCoreArticles = localeArticles.filter((article) => isCoreBlogArticle(article));
  const localeIndexBody = `<main class="tt-blog-static"><header><p>INSIGHTS TIRONI TECH</p><h1>${escapeHtml(localeCopy.title)}</h1><p>${escapeHtml(localeCopy.deck)}</p></header><nav><a href="/${locale}/blog/archive">${locale === 'en' ? 'Complete archive' : 'Archivo completo'} (${localeArticles.length})</a></nav><section><h2>${escapeHtml(localeCopy.related)}</h2>${localizedCoreArticles.slice(0, 18).map((article) => `<article><p>${escapeHtml(article.category)} · ${escapeHtml(article.readTime)}</p><h3><a href="${localizedPath(article.slug, locale)}">${escapeHtml(article.title)}</a></h3><p>${escapeHtml(article.description)}</p></article>`).join('')}</section></main>`;
  const localeIndexSchema = { '@context': 'https://schema.org', '@type': 'Blog', name: `Tironi Tech Blog (${locale.toUpperCase()})`, description: localeCopy.deck, url: `${origin}${indexPath}`, inLanguage: locale, publisher: { '@type': 'Organization', name: 'Tironi Tech', url: origin } };
  const indexDirectory = resolve(root, locale, 'blog');
  await mkdir(indexDirectory, { recursive: true });
  await writeFile(resolve(indexDirectory, 'index.html'), pageTemplate({ title: `${localeCopy.title} | Tironi Tech`, description: localeCopy.deck, path: indexPath, body: localeIndexBody, schema: localeIndexSchema, locale, alternates: blogIndexAlternates }));
  const localeArchivePath = `/${locale}/blog/archive`;
  const localeArchiveBody = `<main class="tt-blog-static"><header><p>COMPLETE ARCHIVE</p><h1>${escapeHtml(locale === 'en' ? 'Every Tironi Tech article' : 'Todos los artículos de Tironi Tech')}</h1><p>${localeArticles.length} articles available. The 120 priority guides remain highlighted in the main library.</p></header><nav><a href="/${locale}/blog">Blog</a> · <a href="/sobre/editorial">Editorial policy</a></nav>${localeGroups.map((group) => `<section><h2>${escapeHtml(group.category)}</h2><ul>${group.articles.map((article) => `<li><a href="${localizedPath(article.slug, locale)}">${escapeHtml(article.title)}</a></li>`).join('')}</ul></section>`).join('')}</main>`;
  const archiveDirectory = resolve(root, locale, 'blog', 'archive');
  await mkdir(archiveDirectory, { recursive: true });
  await writeFile(resolve(archiveDirectory, 'index.html'), pageTemplate({ title: `${locale === 'en' ? 'Complete blog archive' : 'Archivo completo del blog'} | Tironi Tech`, description: `${localeArticles.length} Tironi Tech articles.`, path: localeArchivePath, body: localeArchiveBody, schema: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Tironi Tech complete blog archive', url: `${origin}${localeArchivePath}`, mainEntity: { '@type': 'ItemList', numberOfItems: localeArticles.length } }, locale }));

  for (const article of localeArticles) {
    const path = localizedPath(article.slug, locale);
    const faqBody = article.faqs?.length ? `<section><h2>${localeCopy.faq}</h2>${article.faqs.map((faq) => `<h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p>`).join('')}</section>` : '';
    const relatedBody = `<section><h2>${localeCopy.related}</h2><ul>${getRelatedArticlesForLocale(article, locale).map((related) => `<li><a href="${localizedPath(related.slug, locale)}">${escapeHtml(related.title)}</a></li>`).join('')}</ul></section>`;
    const visualBody = article.visual ? `<figure><figcaption><strong>${escapeHtml(article.visual.title)}</strong></figcaption><ol>${article.visual.labels.map((label) => `<li>${escapeHtml(label)}</li>`).join('')}</ol><p>${escapeHtml(article.visual.caption)}</p></figure>` : '';
    const articleBody = `<main class="tt-article-static"><article><nav><a href="/">${localeCopy.home}</a> / <a href="/${locale}/blog">Blog</a> / ${escapeHtml(article.category)}</nav><header><p>${escapeHtml(article.category)} · ${escapeHtml(article.readTime)}</p><h1>${escapeHtml(article.title)}</h1><p>${escapeHtml(article.description)}</p><p>${localeCopy.byline} <time datetime="${article.date}">${article.date}</time> · ${localeCopy.updated} <time datetime="${article.updated}">${article.updated}</time></p><nav><a href="/blog/${article.slug}">PT</a> · <a href="/en/blog/${article.slug}">EN</a> · <a href="/es/blog/${article.slug}">ES</a></nav></header><p>${escapeHtml(article.intro)}</p><section><h2>${localeCopy.takeaway}</h2><ul>${article.takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>${visualBody}${article.sections.map((section) => `<section><h2>${escapeHtml(section.heading)}</h2>${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}${section.bullets ? `<ul>${section.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : ''}</section>`).join('')}${faqBody}<section><h2>${escapeHtml(article.cta.title)}</h2><p>${escapeHtml(article.cta.text)}</p><a href="${article.cta.href}">${escapeHtml(article.cta.label)}</a></section>${relatedBody}<section><h2>${localeCopy.sources}</h2><ul>${article.sources.map((source) => `<li><a href="${source.url}">${escapeHtml(source.label)}</a></li>`).join('')}</ul></section></article></main>`;
    const wordCount = [article.title, article.description, article.intro, ...article.takeaways, ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs]), ...article.faqs.flatMap((faq) => [faq.question, faq.answer])].join(' ').trim().split(/\s+/).length;
    const schema = { '@context': 'https://schema.org', '@graph': [{ '@type': 'BlogPosting', headline: article.title, description: article.description, datePublished: article.date, dateModified: article.updated, inLanguage: locale, articleSection: article.category, wordCount, author: { '@type': 'Organization', name: 'Tironi Tech', url: `${origin}/sobre/editorial` }, publisher: { '@type': 'Organization', name: 'Tironi Tech', url: origin }, mainEntityOfPage: `${origin}${path}`, keywords: article.keywords.join(', '), citation: article.sources.map((source) => source.url) }, { '@type': 'FAQPage', mainEntity: article.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }] };
    const directory = resolve(root, locale, 'blog', article.slug);
    await mkdir(directory, { recursive: true });
    const alternates = ['pt', 'en', 'es'].map((language) => ({ hreflang: language, href: `${origin}${localizedPath(article.slug, language)}` })).concat({ hreflang: 'x-default', href: `${origin}/blog/${article.slug}` });
    await writeFile(resolve(directory, 'index.html'), pageTemplate({ title: `${article.title} | Tironi Tech`, description: article.description, path, body: articleBody, schema, locale, alternates, robots: isCoreBlogArticle(article) ? undefined : 'noindex, follow' }));
  }
}

const club = clubContent.pt;
const clubBody = `<main><article><header><p>${escapeHtml(club.eyebrow)}</p><h1>${club.title.map(escapeHtml).join(' ')}</h1><p>${escapeHtml(club.description)}</p></header><section><h2>O que os membros encontram</h2>${club.benefits.map(([title, text]) => `<article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join('')}</section><section><h2>${escapeHtml(club.connection)}</h2><p>${escapeHtml(club.note)}</p><a href="https://wa.me/5543996676633">${escapeHtml(club.cta)}</a></section></article></main>`;
const clubSchema = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Tironi Tech Club', description: club.description, url: `${origin}/club`, inLanguage: 'pt-BR', isPartOf: { '@type': 'WebSite', name: 'Tironi Tech', url: origin } };
await mkdir(resolve(root, 'club'), { recursive: true });
await writeFile(resolve(root, 'club', 'index.html'), pageTemplate({ title: 'Tironi Tech Club | Tecnologia, IA e conexões para empresas', description: club.description, path: '/club', body: clubBody, schema: clubSchema }));

const legalPages = [
  { path: '/politica-privacidade', document: LEGAL_COPY.pt.privacy, type: 'WebPage' },
  { path: '/politica-cookies', document: LEGAL_COPY.pt.cookies, type: 'WebPage' }
];
for (const legalPage of legalPages) {
  const legalBody = `<main><article><p>${escapeHtml(legalPage.document.updated)}</p><h1>${escapeHtml(legalPage.document.title)}</h1>${legalPage.document.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}</article></main>`;
  const legalSchema = { '@context': 'https://schema.org', '@type': legalPage.type, name: legalPage.document.title, url: `${origin}${legalPage.path}`, inLanguage: 'pt-BR', publisher: { '@type': 'Organization', name: 'Tironi Tech', url: origin } };
  const directory = resolve(root, legalPage.path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, 'index.html'), pageTemplate({ title: legalPage.document.pageTitle, description: legalPage.document.paragraphs[0], path: legalPage.path, body: legalBody, schema: legalSchema }));
}

for (const page of serviceLandingPages) {
  const path = `/${page.slug}`;
  const body = `<main><article><header><p>${escapeHtml(page.keyword)}</p><h1>${escapeHtml(page.title)}</h1><p>${escapeHtml(page.description)}</p><a href="${serviceLandingWhatsApp}">Agendar diagnóstico</a></header><section><h2>O gargalo</h2><p>${escapeHtml(page.problem)}</p><ul>${page.outcomes.map((outcome) => `<li>${escapeHtml(outcome)}</li>`).join('')}</ul></section><section><h2>Tecnologia ligada à operação</h2><p>${escapeHtml(page.solution)}</p><p>${escapeHtml(page.proof)}</p></section><section><h2>Como funciona</h2>${page.process.map(([title, text]) => `<article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join('')}</section><section><h2>O que precisa ficar claro antes de contratar</h2><p>Uma proposta responsável descreve processo atual, resultado esperado, dados, integrações, exceções e responsáveis por ações sensíveis.</p><p>A entrega deve incluir mapa do fluxo, arquitetura e permissões, critérios de aceite, plano de implantação, documentação e indicadores.</p></section><section><h2>Como comparar fornecedores e reduzir risco</h2><p>Valide o processo completo, incluindo informação incompleta, falhas de integração e transferência para uma pessoa. Compare custo total, propriedade dos dados, observabilidade e capacidade de evolução.</p><p>A Tironi Tech começa pelo menor fluxo completo capaz de gerar evidência e chegar ao sistema, à equipe e ao resultado do projeto.</p></section><section><h2>Perguntas frequentes</h2>${page.faqs.map(([question, answer]) => `<h3>${escapeHtml(question)}</h3><p>${escapeHtml(answer)}</p>`).join('')}</section><section><h2>Converse com a Tironi Tech</h2><p>Comece pelo problema que mais custa tempo, vendas ou capacidade.</p><a href="${serviceLandingWhatsApp}">Agendar diagnóstico</a></section></article></main>`;
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', name: page.keyword, description: page.description, url: `${origin}${path}`, provider: { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'Tironi Tech', url: origin }, areaServed: { '@type': 'Country', name: 'Brasil' } },
    { '@type': 'FAQPage', mainEntity: page.faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: `${origin}/` }, { '@type': 'ListItem', position: 2, name: page.keyword, item: `${origin}${path}` }] }
  ] };
  const directory = resolve(root, page.slug);
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, 'index.html'), pageTemplate({ title: `${page.keyword} | Tironi Tech`, description: page.description, path, body, schema }));
}

const homeDescription = 'A Tironi Tech é uma empresa brasileira especializada em software sob medida, automação de processos e soluções de inteligência artificial para empresas.';
const homeProjects = corporateOverrides.pt.featuredProjects.items;
const homeProjectUrls = { SignGuard: 'https://www.walletsignguard.com/', DeleteActPro: 'https://www.deleteactpro.com/', 'Sales Game': 'https://www.salesgame.com.br/', 'Sorteios xNaMai': 'https://www.sorteiosxnamai.com.br/', 'ProfitPilot Ads': 'https://www.profitpilotads.com/' };
const homeBody = `<main><header><p>SOFTWARE · AUTOMAÇÃO · IA</p><h1>Sua empresa está perdendo vendas e tempo em processos que a tecnologia já poderia resolver.</h1><p>${escapeHtml(homeDescription)} Eliminamos retrabalho, conectamos sistemas e estruturamos operações para vender mais e operar melhor.</p><a href="#contato">Solicitar diagnóstico</a><a href="#solucoes">Conhecer nossas soluções</a></header><section><h2>Soluções digitais para operação, vendas e crescimento</h2><article><h3>Software sob medida</h3><p>Sistemas personalizados para organizar dados, integrar processos e eliminar controles dispersos.</p></article><article><h3>Automação com IA</h3><p>Agentes e fluxos conectados às regras e ferramentas da empresa, com controle e acompanhamento.</p></article><article><h3>ChatBô</h3><p>Atendimento e qualificação de oportunidades no WhatsApp e em outros canais, trabalhando junto da equipe comercial.</p><a href="https://www.chatbo.com.br/">Conhecer o ChatBô</a></article><article><h3>Integrações e APIs</h3><p>Conexão entre CRM, ERP, plataformas, bancos de dados e serviços usados pela operação.</p></article></section><section><h2>Cases e produtos Tironi Tech</h2>${homeProjects.map((project) => `<article><p>${escapeHtml(project.tag)}</p><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.description)}</p><ul>${project.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>${homeProjectUrls[project.title] ? `<a href="${homeProjectUrls[project.title]}">${escapeHtml(project.cta)}</a>` : '<a href="#contato">Conversar sobre este projeto</a>'}</article>`).join('')}</section><section><h2>Conteúdo para decisões melhores</h2><p>Guias aprofundados sobre IA aplicada, automação, atendimento e software empresarial.</p><a href="/blog">Acessar o blog da Tironi Tech</a></section></main>`;
const homeSchema = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'Tironi Tech', alternateName: 'TironiTech', description: homeDescription, url: `${origin}/`, logo: `${origin}/brand/tironi-symbol.png`, email: 'tironi@tironitech.com', sameAs: ['https://www.linkedin.com/company/tironi-tech'] },
  { '@type': 'WebSite', '@id': `${origin}/#website`, name: 'Tironi Tech', url: `${origin}/`, inLanguage: 'pt-BR', publisher: { '@id': `${origin}/#organization` } },
  { '@type': 'WebPage', '@id': `${origin}/#webpage`, name: 'Tironi Tech | Software Sob Medida e Automação com IA', description: homeDescription, url: `${origin}/`, inLanguage: 'pt-BR', isPartOf: { '@id': `${origin}/#website` }, about: { '@id': `${origin}/#organization` }, hasPart: homeProjects.map((project) => ({ '@type': 'CreativeWork', name: project.title, description: project.description, url: homeProjectUrls[project.title] || `${origin}/#projetos`, creator: { '@id': `${origin}/#organization` } })) }
] };
await writeFile(resolve(root, 'index.html'), pageTemplate({ title: 'Tironi Tech | Software Sob Medida e Automação com IA', description: homeDescription, path: '/', body: homeBody, schema: homeSchema }));

const editorialPath = '/sobre/editorial';
const editorialDescription = 'Conheça os critérios de pesquisa, autoria, uso de tecnologia, fontes, revisão e correção dos conteúdos da Tironi Tech.';
const editorialBody = `<main><article><header><p>TRANSPARÊNCIA EDITORIAL</p><h1>Conteúdo verificável para decisões reais.</h1><p>${escapeHtml(editorialDescription)}</p></header><section><h2>Responsabilidade e autoria</h2><p>A Tironi Tech é a autora institucional e responsável editorial pelos artigos sobre inteligência artificial, automação e software.</p></section><section><h2>Pesquisa, tecnologia e revisão</h2><p>Usamos tecnologia e automação para apoiar pesquisa, estrutura e tradução. Fontes, datas e limites permanecem visíveis para verificação.</p></section><section><h2>Atualização e correções</h2><p>Conteúdos prioritários passam por ciclos de revisão. Correções podem ser enviadas para <a href="mailto:tironi@tironitech.com">tironi@tironitech.com</a>.</p></section><nav><a href="/blog">Biblioteca editorial</a> · <a href="/blog/arquivo">Acervo completo</a></nav></article></main>`;
const editorialSchema = { '@context': 'https://schema.org', '@type': 'AboutPage', name: 'Política editorial e autores da Tironi Tech', description: editorialDescription, url: `${origin}${editorialPath}`, inLanguage: 'pt-BR', about: { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'Tironi Tech' } };
await mkdir(resolve(root, 'sobre', 'editorial'), { recursive: true });
await writeFile(resolve(root, 'sobre', 'editorial', 'index.html'), pageTemplate({ title: 'Política editorial e autores | Tironi Tech', description: editorialDescription, path: editorialPath, body: editorialBody, schema: editorialSchema }));

const mapPath = '/mapa-do-site';
const mapBody = `<main><article><header><p>MAPA DE CONTEÚDO</p><h1>Conteúdo da Tironi Tech organizado por assunto</h1><p>Guias sobre IA para WhatsApp, automação, desenvolvimento de software, ChatBô, GeoAura, SEO e GEO.</p></header><nav><a href="/">Início</a> · <a href="/club">Tironi Tech Club</a> · <a href="/blog">Blog</a></nav><section><h2>Soluções para empresas</h2><ul>${serviceLandingPages.map((page) => `<li><a href="/${page.slug}">${escapeHtml(page.keyword)}</a></li>`).join('')}</ul></section>${blogGroups.map((group) => `<section><h2>${escapeHtml(group.category)}</h2><ul>${group.articles.map((article) => `<li><a href="/blog/${article.slug}">${escapeHtml(article.title)}</a></li>`).join('')}</ul></section>`).join('')}</article></main>`;
const mapSchema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Mapa de conteúdo Tironi Tech', description: 'Todos os guias da Tironi Tech organizados por assunto.', url: `${origin}${mapPath}`, inLanguage: 'pt-BR', isPartOf: { '@type': 'WebSite', name: 'Tironi Tech', url: origin } };
await mkdir(resolve(root, 'mapa-do-site'), { recursive: true });
await writeFile(resolve(root, 'mapa-do-site', 'index.html'), pageTemplate({ title: 'Mapa de conteúdo | Tironi Tech', description: 'Todos os guias da Tironi Tech sobre IA, WhatsApp, software, automação, SEO e GEO organizados por assunto.', path: mapPath, body: mapBody, schema: mapSchema }));

const staticUrls = [
  { path: '/', lastmod: '2026-09-23', priority: '1.0', frequency: 'weekly' },
  { path: '/club', lastmod: '2026-09-23', priority: '0.8', frequency: 'monthly' },
  { path: '/blog', lastmod: '2026-09-23', priority: '0.9', frequency: 'weekly' },
  { path: '/blog/arquivo', lastmod: '2026-09-23', priority: '0.7', frequency: 'weekly' },
  { path: '/en/blog', lastmod: '2026-09-23', priority: '0.9', frequency: 'weekly' },
  { path: '/en/blog/archive', lastmod: '2026-09-23', priority: '0.7', frequency: 'weekly' },
  { path: '/es/blog', lastmod: '2026-09-23', priority: '0.9', frequency: 'weekly' },
  { path: '/es/blog/archive', lastmod: '2026-09-23', priority: '0.7', frequency: 'weekly' },
  { path: '/mapa-do-site', lastmod: '2026-09-23', priority: '0.7', frequency: 'weekly' },
  { path: '/sobre/editorial', lastmod: '2026-09-23', priority: '0.6', frequency: 'monthly' },
  { path: '/politica-privacidade', lastmod: '2026-07-01', priority: '0.3', frequency: 'yearly' },
  { path: '/politica-cookies', lastmod: '2026-07-01', priority: '0.3', frequency: 'yearly' },
  ...serviceLandingPages.map((page) => ({ path: `/${page.slug}`, lastmod: '2026-09-23', priority: '0.9', frequency: 'monthly' })),
];
const categorySlug = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const sitemapDirectory = resolve(root, 'sitemaps');
await mkdir(sitemapDirectory, { recursive: true });
const renderUrlset = (items) => `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items.map((item) => `  <url><loc>${origin}${item.path}</loc>${item.lastmod ? `<lastmod>${item.lastmod}</lastmod>` : ''}<changefreq>${item.frequency}</changefreq><priority>${item.priority}</priority></url>`).join('\n')}\n</urlset>\n`;
const sitemapFiles = [{ path: '/sitemaps/pages.xml', items: staticUrls }];
for (const locale of ['pt', 'en', 'es']) {
  for (const category of [...new Set(coreBlogArticles.map((article) => article.category))]) {
    const categoryArticles = coreBlogArticles.filter((article) => article.category === category);
    if (!categoryArticles.length) continue;
    sitemapFiles.push({
      path: `/sitemaps/blog-${locale}-${categorySlug(category)}.xml`,
      items: categoryArticles.map((article) => ({ path: localizedPath(article.slug, locale), lastmod: article.updated, priority: article.featured ? '0.9' : '0.8', frequency: 'monthly' })),
    });
  }
}
for (const sitemapFile of sitemapFiles) {
  await writeFile(resolve(root, sitemapFile.path.slice(1)), renderUrlset(sitemapFile.items));
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapFiles.map((item) => `  <sitemap><loc>${origin}${item.path}</loc><lastmod>2026-09-23</lastmod></sitemap>`).join('\n')}\n</sitemapindex>\n`;
await writeFile(resolve(root, 'sitemap.xml'), sitemap);
await writeFile(resolve(root, 'robots.txt'), `User-agent: Googlebot\nAllow: /\n\nUser-agent: Bingbot\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: Claude-SearchBot\nAllow: /\n\nUser-agent: ClaudeBot\nAllow: /\n\nUser-agent: Claude-User\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: Perplexity-User\nAllow: /\n\nUser-agent: Google-Extended\nAllow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);

const notFoundBody = '<main><article><p>ERRO 404</p><h1>Esta página não existe.</h1><p>O endereço pode ter mudado ou sido digitado incorretamente.</p><a href="/">Página inicial</a> · <a href="/blog">Blog</a></article></main>';
await writeFile(resolve(root, '404.html'), pageTemplate({ title: 'Página não encontrada | Tironi Tech', description: 'A página solicitada não foi encontrada.', path: '/404', body: notFoundBody, schema: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Página não encontrada' }, robots: 'noindex, follow' }));

console.log(
  `Prerendered homepage, Club, ${serviceLandingPages.length} service pages, legal pages, content map, 3 blog indexes and ${blogArticles.length * 3} localized article pages (${blogArticles.length} per language).`,
);
