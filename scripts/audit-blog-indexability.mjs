import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { blogArticles } from '../src/content/blogArticles.js';
import { getArticleLocales } from '../src/content/localizedBlogArticles.js';

const root = resolve('dist');
const origin = 'https://www.tironitech.com';
const read = (path) => readFile(resolve(root, path), 'utf8');
const locations = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
const sitemapIndex = await read('sitemap.xml');
const sitemapUrls = new Set();
for (const url of locations(sitemapIndex)) {
  for (const location of locations(await read(new URL(url).pathname.slice(1)))) {
    assert(!sitemapUrls.has(location), `Duplicate sitemap URL: ${location}`);
    sitemapUrls.add(location);
  }
}
let checked = 0;
for (const locale of ['pt', 'en', 'es']) {
  const prefix = locale === 'pt' ? '' : `${locale}/`;
  const archive = await read(`${prefix}blog/${locale === 'pt' ? 'arquivo' : 'archive'}/index.html`);
  for (const article of blogArticles) {
    const path = `${prefix}blog/${article.slug}`;
    const url = `${origin}/${path}`;
    if (!getArticleLocales(article).includes(locale)) {
      assert(!sitemapUrls.has(url), `Unpublished translation in sitemap: ${url}`);
      continue;
    }
    assert(sitemapUrls.has(url), `Missing from sitemap: ${url}`);
    assert(archive.includes(`href="/${path}"`), `Missing archive link: ${url}`);
    const html = await read(`${path}/index.html`);
    assert(!/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html), `Unexpected noindex: ${url}`);
    assert(html.includes('<meta name="robots" content="index, follow'), `Missing index rule: ${url}`);
    assert(html.includes(`<link rel="canonical" href="${url}">`), `Incorrect canonical: ${url}`);
    for (const target of ['pt', 'en', 'es']) {
      const hasAlternate = html.includes(`hreflang="${target}"`);
      assert.equal(hasAlternate, getArticleLocales(article).includes(target), `Incorrect alternate: ${url} -> ${target}`);
    }
    assert(html.includes('<h1>'), `Missing article heading: ${url}`);
    if (locale === 'pt') {
      assert(html.includes(`<h1>${escapeHtml(article.title)}</h1>`), `Wrong prerendered article: ${url}`);
      const firstParagraph = article.sections.flatMap((section) => section.paragraphs || [])[0];
      if (firstParagraph) assert(html.includes(escapeHtml(firstParagraph)), `Article body absent from HTML: ${url}`);
      if (article.editorialBatch === 'tutorials-1000') {
        for (const section of article.sections) {
          for (const text of [section.heading, ...section.paragraphs, ...(section.bullets || [])]) {
            assert(html.includes(escapeHtml(text)), `Tutorial content absent from HTML: ${url}`);
          }
        }
        assert(html.includes(escapeHtml(article.visual.title)), `Missing tutorial diagram: ${url}`);
        const schemaMatch = html.match(/<script id="tt-page-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/);
        assert(schemaMatch, `Missing structured data: ${url}`);
        const graph = JSON.parse(schemaMatch[1])['@graph'];
        const posting = graph.find((node) => node['@type'] === 'BlogPosting');
        assert.equal(posting?.headline, article.title, `Wrong schema title: ${url}`);
        assert.equal(posting?.datePublished, article.date, `Wrong publication date: ${url}`);
        const faq = graph.find((node) => node['@type'] === 'FAQPage');
        assert.equal(faq?.mainEntity?.length, article.faqs.length, `Missing FAQ schema: ${url}`);
        for (const item of article.faqs) {
          assert(html.includes(escapeHtml(item.question)) && html.includes(escapeHtml(item.answer)), `FAQ absent from visible HTML: ${url}`);
        }
        for (const source of article.sources) assert(html.includes(`href="${source.url}"`), `Missing source link: ${url}`);
      }
    }
    checked++;
  }
}
assert((await read('404.html')).includes('noindex, follow'), '404 must remain noindex');
assert(!sitemapUrls.has(`${origin}/404`), '404 must not be in the sitemap');
console.log(JSON.stringify({ checkedArticlePages: checked, sitemapUrls: sitemapUrls.size, status: 'passed' }, null, 2));
