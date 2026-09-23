import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { blogArticles, getRelatedBlogArticles } from '../src/content/blogArticles.js';
import { clubContent } from '../src/content/clubContent.js';
import { LEGAL_COPY } from '../src/content/legalPolicies.js';

const root = resolve('dist');
const template = await readFile(resolve(root, 'index.html'), 'utf8');
const origin = 'https://www.tironitech.com';

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

function pageTemplate({ title, description, path, body, schema }) {
  const url = `${origin}${path}`;
  const cleanTemplate = template
    .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, '')
    .replace(/\s*<meta\s+name="robots"[^>]*>/gi, '')
    .replace(/\s*<meta\s+property="og:(?:type|title|description|url|image)"[^>]*>/gi, '')
    .replace(/\s*<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');
  const tags = [
    `<link rel="canonical" href="${url}">`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`,
    `<meta property="og:title" content="${escapeHtml(title)}">`,
    `<meta property="og:description" content="${escapeHtml(description)}">`,
    `<meta property="og:type" content="${path === '/blog' ? 'website' : 'article'}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${origin}/brand/tironi-symbol.png">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeHtml(title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(description)}">`,
    `<meta name="twitter:image" content="${origin}/brand/tironi-symbol.png">`,
    `<script id="tt-page-schema" type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`
  ].join('\n    ');

  return cleanTemplate
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace('</head>', `    ${tags}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

const blogGroups = [...new Set(blogArticles.map((article) => article.category))].map((category) => ({ category, articles: blogArticles.filter((article) => article.category === category) }));
const indexBody = `<main class="tt-blog-static"><header><p>INSIGHTS TIRONI TECH</p><h1>Decisões melhores começam com tecnologia bem explicada.</h1><p>Guias práticos sobre inteligência artificial, automação, atendimento e software personalizado.</p></header><nav><a href="/mapa-do-site">Mapa completo de conteúdo</a></nav>${blogGroups.map((group) => `<section><h2>${escapeHtml(group.category)}</h2>${group.articles.map((article) => `<article><p>${escapeHtml(article.readTime)}</p><h3><a href="/blog/${article.slug}">${escapeHtml(article.title)}</a></h3><p>${escapeHtml(article.description)}</p></article>`).join('')}</section>`).join('')}</main>`;
const indexSchema = { '@context': 'https://schema.org', '@type': 'Blog', name: 'Blog Tironi Tech', description: 'Guias sobre IA, automação, ChatBô e software personalizado.', url: `${origin}/blog`, publisher: { '@type': 'Organization', name: 'Tironi Tech', url: origin } };
await mkdir(resolve(root, 'blog'), { recursive: true });
await writeFile(resolve(root, 'blog', 'index.html'), pageTemplate({ title: 'Blog Tironi Tech | IA, Automação, ChatBô e Software', description: 'Guias práticos e pesquisas sobre inteligência artificial, automação de processos, ChatBô, atendimento no WhatsApp e software personalizado.', path: '/blog', body: indexBody, schema: indexSchema }));

for (const article of blogArticles) {
  const path = `/blog/${article.slug}`;
  const faqBody = article.faqs?.length ? `<section><h2>Perguntas frequentes</h2>${article.faqs.map((faq) => `<h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p>`).join('')}</section>` : '';
  const relatedBody = `<section><h2>Artigos relacionados</h2><ul>${getRelatedBlogArticles(article).map((related) => `<li><a href="/blog/${related.slug}">${escapeHtml(related.title)}</a></li>`).join('')}</ul></section>`;
  const visualBody = article.visual ? `<figure><figcaption><strong>${escapeHtml(article.visual.title)}</strong></figcaption><ol>${article.visual.labels.map((label) => `<li>${escapeHtml(label)}</li>`).join('')}</ol><p>${escapeHtml(article.visual.caption)}</p></figure>` : '';
  const articleBody = `<main class="tt-article-static"><article><nav><a href="/">Início</a> / <a href="/blog">Blog</a> / ${escapeHtml(article.category)}</nav><header><p>${escapeHtml(article.category)} · ${escapeHtml(article.readTime)}</p><h1>${escapeHtml(article.title)}</h1><p>${escapeHtml(article.description)}</p><p>Por Tironi Tech · Publicado em <time datetime="${article.date}">${article.date}</time> · Atualizado em <time datetime="${article.updated}">${article.updated}</time></p></header><p>${escapeHtml(article.intro)}</p><section><h2>O que você vai levar deste guia</h2><ul>${article.takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>${visualBody}${article.sections.map((section) => `<section><h2>${escapeHtml(section.heading)}</h2>${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}${section.bullets ? `<ul>${section.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : ''}</section>`).join('')}${faqBody}<section><h2>${escapeHtml(article.cta.title)}</h2><p>${escapeHtml(article.cta.text)}</p><a href="${article.cta.href}">${escapeHtml(article.cta.label)}</a></section>${relatedBody}<section><h2>Fontes consultadas</h2><ul>${article.sources.map((source) => `<li><a href="${source.url}">${escapeHtml(source.label)}</a></li>`).join('')}</ul></section></article></main>`;
  const wordCount = [article.title, article.description, article.intro, ...article.takeaways, ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets || [])]), ...(article.faqs || []).flatMap((faq) => [faq.question, faq.answer])].join(' ').trim().split(/\s+/).length;
  const graph = [
    { '@type': 'BlogPosting', '@id': `${origin}${path}#article`, headline: article.title, description: article.description, image: `${origin}/brand/tironi-symbol.png`, datePublished: article.date, dateModified: article.updated, inLanguage: 'pt-BR', articleSection: article.category, wordCount, author: { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'Tironi Tech', url: origin }, publisher: { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'Tironi Tech', url: origin, logo: { '@type': 'ImageObject', url: `${origin}/brand/tironi-symbol.png` } }, mainEntityOfPage: { '@type': 'WebPage', '@id': `${origin}${path}` }, keywords: article.keywords.join(', '), citation: article.sources.map((source) => source.url) },
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
  await writeFile(resolve(directory, 'index.html'), pageTemplate({ title: `${article.title} | Tironi Tech`, description: article.description, path, body: articleBody, schema }));
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

const homeDescription = 'A Tironi Tech é uma empresa brasileira especializada em software sob medida, automação de processos e soluções de inteligência artificial para empresas.';
const homeBody = `<main><header><p>SOFTWARE · AUTOMAÇÃO · IA</p><h1>Sua empresa está perdendo vendas e tempo em processos que a tecnologia já poderia resolver.</h1><p>${escapeHtml(homeDescription)} Eliminamos retrabalho, conectamos sistemas e estruturamos operações para vender mais e operar melhor.</p><a href="#contato">Solicitar diagnóstico</a><a href="#solucoes">Conhecer nossas soluções</a></header><section><h2>Soluções digitais para operação, vendas e crescimento</h2><article><h3>Software sob medida</h3><p>Sistemas personalizados para organizar dados, integrar processos e eliminar controles dispersos.</p></article><article><h3>Automação com IA</h3><p>Agentes e fluxos conectados às regras e ferramentas da empresa, com controle e acompanhamento.</p></article><article><h3>ChatBô</h3><p>Atendimento e qualificação de oportunidades no WhatsApp e em outros canais, trabalhando junto da equipe comercial.</p><a href="https://www.chatbo.com.br/">Conhecer o ChatBô</a></article><article><h3>Integrações e APIs</h3><p>Conexão entre CRM, ERP, plataformas, bancos de dados e serviços usados pela operação.</p></article></section><section><h2>Conteúdo para decisões melhores</h2><p>Guias aprofundados sobre IA aplicada, automação, atendimento e software empresarial.</p><a href="/blog">Acessar o blog da Tironi Tech</a></section></main>`;
const homeSchema = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'Tironi Tech', alternateName: 'TironiTech', description: homeDescription, url: `${origin}/`, logo: `${origin}/brand/tironi-symbol.png`, email: 'tironi@tironitech.com', sameAs: ['https://www.linkedin.com/company/tironi-tech'] },
  { '@type': 'WebSite', '@id': `${origin}/#website`, name: 'Tironi Tech', url: `${origin}/`, inLanguage: 'pt-BR', publisher: { '@id': `${origin}/#organization` } },
  { '@type': 'WebPage', '@id': `${origin}/#webpage`, name: 'Tironi Tech | Software Sob Medida e Automação com IA', description: homeDescription, url: `${origin}/`, inLanguage: 'pt-BR', isPartOf: { '@id': `${origin}/#website` }, about: { '@id': `${origin}/#organization` } }
] };
await writeFile(resolve(root, 'index.html'), pageTemplate({ title: 'Tironi Tech | Software Sob Medida e Automação com IA', description: homeDescription, path: '/', body: homeBody, schema: homeSchema }));

const mapPath = '/mapa-do-site';
const mapBody = `<main><article><header><p>MAPA DE CONTEÚDO</p><h1>Conteúdo da Tironi Tech organizado por assunto</h1><p>Guias sobre IA para WhatsApp, automação, desenvolvimento de software, ChatBô, GeoAura, SEO e GEO.</p></header><nav><a href="/">Início</a> · <a href="/club">Tironi Tech Club</a> · <a href="/blog">Blog</a></nav>${blogGroups.map((group) => `<section><h2>${escapeHtml(group.category)}</h2><ul>${group.articles.map((article) => `<li><a href="/blog/${article.slug}">${escapeHtml(article.title)}</a></li>`).join('')}</ul></section>`).join('')}</article></main>`;
const mapSchema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Mapa de conteúdo Tironi Tech', description: 'Todos os guias da Tironi Tech organizados por assunto.', url: `${origin}${mapPath}`, inLanguage: 'pt-BR', isPartOf: { '@type': 'WebSite', name: 'Tironi Tech', url: origin } };
await mkdir(resolve(root, 'mapa-do-site'), { recursive: true });
await writeFile(resolve(root, 'mapa-do-site', 'index.html'), pageTemplate({ title: 'Mapa de conteúdo | Tironi Tech', description: 'Todos os guias da Tironi Tech sobre IA, WhatsApp, software, automação, SEO e GEO organizados por assunto.', path: mapPath, body: mapBody, schema: mapSchema }));

const urls = [
  { path: '/', lastmod: '2026-09-22', priority: '1.0', frequency: 'weekly' },
  { path: '/club', lastmod: '2026-09-22', priority: '0.8', frequency: 'monthly' },
  { path: '/blog', lastmod: '2026-09-22', priority: '0.9', frequency: 'weekly' },
  { path: '/mapa-do-site', lastmod: '2026-09-22', priority: '0.7', frequency: 'weekly' },
  { path: '/politica-privacidade', lastmod: '2026-07-01', priority: '0.3', frequency: 'yearly' },
  { path: '/politica-cookies', lastmod: '2026-07-01', priority: '0.3', frequency: 'yearly' },
  ...blogArticles.map((article) => ({ path: `/blog/${article.slug}`, lastmod: article.updated, priority: article.featured ? '0.9' : '0.8', frequency: 'monthly' }))
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((item) => `  <url><loc>${origin}${item.path}</loc>${item.lastmod ? `<lastmod>${item.lastmod}</lastmod>` : ''}<changefreq>${item.frequency}</changefreq><priority>${item.priority}</priority></url>`).join('\n')}\n</urlset>\n`;
await writeFile(resolve(root, 'sitemap.xml'), sitemap);
await writeFile(resolve(root, 'robots.txt'), `User-agent: Googlebot\nAllow: /\n\nUser-agent: Bingbot\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: Claude-SearchBot\nAllow: /\n\nUser-agent: ClaudeBot\nAllow: /\n\nUser-agent: Claude-User\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: Perplexity-User\nAllow: /\n\nUser-agent: Google-Extended\nAllow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);

console.log(`Prerendered homepage, Club, legal pages, content map, blog index and ${blogArticles.length} articles.`);
