import assert from 'node:assert/strict';
import { blogIndexArticles } from '../src/content/blogIndexArticles.generated.js';
import { BLOG_PAGE_SIZE, getBlogCategorySlug, getBlogListing, getBlogListingPath, getBlogListingRoutes, parseBlogListingPath } from '../src/utils/blogListing.js';

const articles = blogIndexArticles.pt;
const routes = getBlogListingRoutes(articles);
const rootPages = routes.filter(({ category }) => !category);
assert.equal(rootPages.length, Math.ceil(articles.length / BLOG_PAGE_SIZE));
assert.deepEqual(rootPages.flatMap(({ visibleArticles }) => visibleArticles.map(({ slug }) => slug)), articles.map(({ slug }) => slug), 'Paginated root must expose every selected article exactly once, preserving editorial order');
assert.equal(new Set(routes.map(({ path }) => path)).size, routes.length, 'Listing URLs must be unique');
assert.equal(new Set(routes[0].categories.map(({ slug }) => slug)).size, routes[0].categories.length, 'Category slugs must not collide');

const routesByPath = new Map(routes.map((listing) => [listing.path, listing]));
for (const listing of routes) {
  assert.ok(listing.valid && listing.visibleArticles.length > 0, `No empty or invalid generated route: ${listing.path}`);
  assert.ok(listing.visibleArticles.length <= BLOG_PAGE_SIZE);
  const parsed = parseBlogListingPath(listing.path);
  assert.ok(parsed, `Generated URL must be accepted by the router: ${listing.path}`);
  assert.equal(getBlogListingPath(parsed), listing.path);
  assert.deepEqual(getBlogListing(articles, parsed).visibleArticles, listing.visibleArticles, 'Client and prerender must expose the same articles');
  if (listing.category) assert.ok(listing.visibleArticles.every(({ category }) => category === listing.category.name));
  if (listing.nextPath) assert.equal(routesByPath.get(listing.nextPath)?.previousPath, listing.path, 'Next/previous links must form a connected route chain');
  if (listing.previousPath) assert.equal(routesByPath.get(listing.previousPath)?.nextPath, listing.path);
  assert.equal(listing.schema['@graph'][0].url, `https://www.tironitech.com${listing.path}`, 'Each listing must identify its own canonical URL');
}

assert.equal(getBlogCategorySlug('ChatBô e atendimento'), 'chatbo-e-atendimento');
for (const path of ['/blog/pagina/0', '/blog/pagina/1', '/blog/pagina/02', '/blog/pagina/-1', '/blog/pagina/abc', '/blog/pagina/99999999999999999999', '/blog/categoria/ia/pagina/1', '/blog/artigo-publicado', '/blog/arquivo']) {
  assert.equal(parseBlogListingPath(path), null, `Malformed listing or existing route must not become a duplicate listing: ${path}`);
}
assert.equal(getBlogListing(articles, { page: rootPages.length + 1 }).valid, false, 'Beyond-last page must not silently clamp to the last page');
assert.equal(getBlogListing(articles, { categorySlug: 'categoria-inexistente' }).valid, false);
assert.deepEqual(getBlogListingRoutes([]), [], 'Do not generate empty listings');
console.log(`Blog listings verified: ${routes.length} routes, ${articles.length} selected articles, ${routes[0].categories.length} categories.`);
