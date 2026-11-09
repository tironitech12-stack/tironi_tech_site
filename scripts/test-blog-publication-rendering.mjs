import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';
import { blogArticles } from '../src/content/blogArticles.js';
import { getBlogCategorySlug } from '../src/utils/blogListing.js';

// Render the actual components, including related cards. Metadata-only tests
// cannot catch an Intl.DateTimeFormat exception that blanks the entire article.
const unknown = blogArticles.find(({ slug }) => slug === 'pesquisa-500-build-vs-buy-ai-software-for-startups-guia-aplicacao');
const known = blogArticles.find(({ date }) => Boolean(date));
assert.equal(unknown?.date, null);
assert(known?.date);
const entries = Array.from({ length: 37 }, (_, index) => ({ ...unknown, slug: `date-test-${index}` }));
const server = await createServer({
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
  optimizeDeps: { noDiscovery: true, include: [] },
});

let checked = 0;
try {
  const { default: BlogIndexPage } = await server.ssrLoadModule('/src/components/pages/BlogIndexPage.jsx');
  const { default: BlogArticlePage } = await server.ssrLoadModule('/src/components/pages/BlogArticlePage.jsx');
  const { LanguageProvider } = await server.ssrLoadModule('/src/context/LanguageContext.jsx');
  const render = (Component, props) => renderToStaticMarkup(createElement(LanguageProvider, null, createElement(Component, props)));
  for (const locale of ['pt', 'en', 'es']) {
    const updatedLabel = { pt: 'Atualizado em', en: 'Updated', es: 'Actualizado' }[locale];
    const publishedLabel = { pt: 'Publicado em', en: 'Published', es: 'Publicado' }[locale];
    for (const listing of [{}, { pageNumber: 2 }, { categorySlug: getBlogCategorySlug(unknown.category), pageNumber: 2 }, { archiveMode: true }]) {
      const html = render(BlogIndexPage, { locale, articlesOverride: entries, ...listing });
      assert(html.includes(`<time dateTime="${unknown.updated}">${updatedLabel} `), `Missing update date in ${locale} listing`);
      assert(!/Invalid Date|dateTime="(?:null|undefined|1970-01-01)"/.test(html));
      checked++;
    }
    for (const article of [unknown, known]) {
      const related = [{ ...unknown, slug: 'related-without-publication' }, { ...known, slug: 'related-with-publication' }];
      const payload = JSON.stringify({ locale, article, related });
      globalThis.document = { getElementById: (id) => id === 'tt-article-data' ? { textContent: payload } : null };
      const html = render(BlogArticlePage, { locale, slug: article.slug });
      const byline = html.match(/class="tt-article-byline"[\s\S]*?<\/small>/)?.[0];
      assert(byline?.includes(updatedLabel), `Missing update label in ${locale} byline`);
      assert.equal(byline.includes(publishedLabel), Boolean(article.date), `Wrong publication label in ${locale} byline`);
      const relatedHtml = html.match(/class="tt-blog-related"[\s\S]*?<\/section>/)?.[0];
      assert(relatedHtml?.includes('related-without-publication'), 'Related fixtures must actually render');
      assert(relatedHtml.includes(`<time dateTime="${unknown.updated}">${updatedLabel} `), `Missing related fallback in ${locale}`);
      assert(relatedHtml.includes(`<time dateTime="${known.date}">`), `Known related publication changed in ${locale}`);
      assert(!/Invalid Date|dateTime="(?:null|undefined|1970-01-01)"/.test(html));
      delete globalThis.document;
      checked++;
    }
  }
} finally {
  delete globalThis.document;
  await server.close();
}
console.log(`Blog date rendering: ${checked} PT/EN/ES article, related-card, listing, pagination, category and archive scenarios passed.`);
