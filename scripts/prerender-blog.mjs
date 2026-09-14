import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { blogArticles } from '../src/content/blogArticles.js';

const root = resolve('dist');
const template = await readFile(resolve(root, 'index.html'), 'utf8');
const origin = 'https://tironitech.com';

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

function pageTemplate({ title, description, path, body, schema }) {
  const url = `${origin}${path}`;
  const tags = [
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:title" content="${escapeHtml(title)}">`,
    `<meta property="og:description" content="${escapeHtml(description)}">`,
    `<meta property="og:type" content="${path === '/blog' ? 'website' : 'article'}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta name="twitter:card" content="summary">`,
    `<meta name="twitter:title" content="${escapeHtml(title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(description)}">`,
    `<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`
  ].join('\n    ');

  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace('</head>', `    ${tags}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

const indexBody = `<main class="tt-blog-static"><header><p>INSIGHTS TIRONI TECH</p><h1>Decisões melhores começam com tecnologia bem explicada.</h1><p>Guias práticos sobre inteligência artificial, automação, atendimento e software personalizado.</p></header><section><h2>Artigos</h2>${blogArticles.map((article) => `<article><p>${escapeHtml(article.category)} · ${escapeHtml(article.readTime)}</p><h3><a href="/blog/${article.slug}">${escapeHtml(article.title)}</a></h3><p>${escapeHtml(article.description)}</p></article>`).join('')}</section></main>`;
const indexSchema = { '@context': 'https://schema.org', '@type': 'Blog', name: 'Blog Tironi Tech', description: 'Guias sobre IA, automação, ChatBô e software personalizado.', url: `${origin}/blog`, publisher: { '@type': 'Organization', name: 'Tironi Tech', url: origin } };
await mkdir(resolve(root, 'blog'), { recursive: true });
await writeFile(resolve(root, 'blog', 'index.html'), pageTemplate({ title: 'Blog Tironi Tech | IA, Automação, ChatBô e Software', description: 'Guias práticos e pesquisas sobre inteligência artificial, automação de processos, ChatBô, atendimento no WhatsApp e software personalizado.', path: '/blog', body: indexBody, schema: indexSchema }));

for (const article of blogArticles) {
  const path = `/blog/${article.slug}`;
  const articleBody = `<main class="tt-article-static"><article><nav><a href="/">Início</a> / <a href="/blog">Blog</a> / ${escapeHtml(article.category)}</nav><header><p>${escapeHtml(article.category)} · ${escapeHtml(article.readTime)}</p><h1>${escapeHtml(article.title)}</h1><p>${escapeHtml(article.description)}</p><p>Por Tironi Tech · Publicado em <time datetime="${article.date}">${article.date}</time></p></header><p>${escapeHtml(article.intro)}</p><section><h2>O que você vai levar deste guia</h2><ul>${article.takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>${article.sections.map((section) => `<section><h2>${escapeHtml(section.heading)}</h2>${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}${section.bullets ? `<ul>${section.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : ''}</section>`).join('')}<section><h2>${escapeHtml(article.cta.title)}</h2><p>${escapeHtml(article.cta.text)}</p><a href="${article.cta.href}">${escapeHtml(article.cta.label)}</a></section><section><h2>Fontes consultadas</h2><ul>${article.sources.map((source) => `<li><a href="${source.url}">${escapeHtml(source.label)}</a></li>`).join('')}</ul></section></article></main>`;
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: article.title, description: article.description, datePublished: article.date, dateModified: article.updated, author: { '@type': 'Organization', name: 'Tironi Tech', url: origin }, publisher: { '@type': 'Organization', name: 'Tironi Tech', url: origin, logo: { '@type': 'ImageObject', url: `${origin}/brand/tironi-symbol.png` } }, mainEntityOfPage: `${origin}${path}`, keywords: article.keywords.join(', ') };
  const directory = resolve(root, 'blog', article.slug);
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, 'index.html'), pageTemplate({ title: `${article.title} | Tironi Tech`, description: article.description, path, body: articleBody, schema }));
}

const urls = [
  { path: '/', priority: '1.0', frequency: 'weekly' },
  { path: '/club', priority: '0.8', frequency: 'monthly' },
  { path: '/blog', priority: '0.9', frequency: 'weekly' },
  ...blogArticles.map((article) => ({ path: `/blog/${article.slug}`, lastmod: article.updated, priority: article.featured ? '0.9' : '0.8', frequency: 'monthly' }))
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((item) => `  <url><loc>${origin}${item.path}</loc>${item.lastmod ? `<lastmod>${item.lastmod}</lastmod>` : ''}<changefreq>${item.frequency}</changefreq><priority>${item.priority}</priority></url>`).join('\n')}\n</urlset>\n`;
await writeFile(resolve(root, 'sitemap.xml'), sitemap);
await writeFile(resolve(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);

console.log(`Prerendered blog index and ${blogArticles.length} articles.`);
