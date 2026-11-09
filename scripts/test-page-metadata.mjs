// Runs without network: node scripts/test-page-metadata.mjs
import assert from 'node:assert/strict';
import { applyPageMeta } from '../src/utils/pageMeta.js';
import { createHomeSchema } from '../src/utils/homePageSeo.js';
import { createServiceSchema, getRelatedServicePages } from '../src/utils/servicePageSeo.js';
import { serviceLandingPages, searchConsolePriorityServiceSlugs } from '../src/content/serviceLandingPages.js';
import { HOME_SEO } from '../src/content/positioning.js';
import { founderProfile } from '../src/content/founderProfile.js';

// Model the relevant head APIs so navigation can be checked without providers or a browser.
const children = [];
function matches(element, selector) {
  const tag = selector.match(/^\w+/)?.[0];
  if (tag && element.tagName !== tag) return false;
  return [...selector.matchAll(/\[([^=^\]]+)(?:(\^?=)"([^"]*)")?\]/g)].every(([, attribute, operator, value]) => {
    const actual = element[attribute] ?? element.attributes[attribute];
    if (value === undefined) return actual !== undefined;
    return operator === '^=' ? actual?.startsWith(value) : actual === value;
  });
}
globalThis.document = {
  title: '',
  documentElement: { lang: '' },
  createElement(tagName) {
    return {
      tagName,
      attributes: {},
      setAttribute(name, value) { this.attributes[name] = value; },
      remove() { children.splice(children.indexOf(this), 1); },
    };
  },
  head: {
    appendChild(element) { children.push(element); },
    querySelector(selector) { return children.find((element) => matches(element, selector)); },
    querySelectorAll(selector) { return children.filter((element) => matches(element, selector)); },
  },
  getElementById(id) { return children.find((element) => element.id === id); },
};
const meta = (name, attribute = 'name') => document.head.querySelector(`meta[${attribute}="${name}"]`)?.attributes.content;
const graph = () => JSON.parse(document.getElementById('tt-page-schema').textContent)['@graph'];

// Starting with the development template must reuse its schema, not add a duplicate.
const initialSchema = document.createElement('script');
initialSchema.type = 'application/ld+json';
initialSchema.textContent = JSON.stringify(createHomeSchema());
document.head.appendChild(initialSchema);
applyPageMeta({ ...HOME_SEO, schema: createHomeSchema() });
assert.equal(document.head.querySelectorAll('script[type="application/ld+json"]').length, 1);
const hasType = (node, type) => {
  const value = node['@type'];
  return value === type || (Array.isArray(value) && value.includes(type));
};
assert.deepEqual(graph().map((node) => node['@type']), [['Organization', 'ProfessionalService'], 'Person', 'WebSite', 'WebPage']);
const organization = graph().find((node) => hasType(node, 'Organization'));
assert(hasType(organization, 'ProfessionalService'), 'Organization must also declare ProfessionalService for local business details');
assert.equal(organization.priceRange, '$$');
assert.equal(organization.image, 'https://www.tironitech.com/brand/tironi-symbol.png');
const founder = graph().find((node) => node['@id'] === organization.founder['@id']);
assert.equal(organization.foundingDate, founderProfile.foundingYear);
assert.equal(founder.name, founderProfile.name);
assert(founder.sameAs.includes(founderProfile.linkedinUrl));
assert(graph().find((node) => node['@type'] === 'WebPage').hasPart.length > 0);

// An article-to-service transition must discard inherited language alternate URLs.
const staleAlternate = document.createElement('link');
staleAlternate.rel = 'alternate';
staleAlternate.hreflang = 'en';
staleAlternate.href = 'https://www.tironitech.com/en/blog/old-article';
document.head.appendChild(staleAlternate);
const whatsapp = serviceLandingPages.find((page) => page.slug === 'agente-ia-whatsapp');
const consulting = serviceLandingPages.find((page) => page.slug === 'consultoria-ia-para-empresas');
function visitService(page) {
  applyPageMeta({ title: `${page.keyword} | Tironi Tech`, description: page.description, path: `/${page.slug}`, image: page.image, imageAlt: page.imageAlt, schema: createServiceSchema(page) });
}
visitService(whatsapp);
assert.equal(document.head.querySelectorAll('link[rel="alternate"][hreflang]').length, 0);
visitService(consulting);
assert.equal(document.title, `${consulting.keyword} | Tironi Tech`);
assert.equal(document.documentElement.lang, 'pt-BR');
assert.equal(document.head.querySelector('link[rel="canonical"]').href, `https://www.tironitech.com/${consulting.slug}`);
for (const [attribute, names] of [['property', ['og:title', 'og:description', 'og:url', 'og:image']], ['name', ['twitter:title', 'twitter:description', 'twitter:url', 'twitter:image']]]) {
  for (const name of names) assert(meta(name, attribute), `${name} must exist after navigation`);
}
assert.equal(meta('og:title', 'property'), `${consulting.keyword} | Tironi Tech`);
assert.equal(meta('twitter:description'), consulting.description);
assert.equal(meta('og:url', 'property'), `https://www.tironitech.com/${consulting.slug}`);
assert.equal(meta('twitter:image'), `https://www.tironitech.com${consulting.image}`);
assert.equal(graph().find((node) => node['@type'] === 'Service').url, `https://www.tironitech.com/${consulting.slug}`);
assert.equal(graph().find((node) => node['@type'] === 'FAQPage').mainEntity[0].name, consulting.faqs[0][0]);
assert(!document.getElementById('tt-page-schema').textContent.includes('agente-ia-whatsapp'));

// Service-to-article navigation must reset every social field, including the image.
applyPageMeta({
  title: 'Guia de WhatsApp | Tironi Tech',
  description: 'Como estruturar o atendimento.',
  path: '/blog/guia-whatsapp',
  ogType: 'article',
  publishedTime: '2026-01-15',
  modifiedTime: '2026-03-01',
  alternates: [{ hreflang: 'pt', href: '/blog/guia-whatsapp' }],
});
assert.equal(meta('og:type', 'property'), 'article');
assert.equal(meta('twitter:title'), 'Guia de WhatsApp | Tironi Tech');
assert.equal(meta('og:image', 'property'), 'https://www.tironitech.com/brand/tironi-symbol.png');
assert.equal(meta('twitter:url'), 'https://www.tironitech.com/blog/guia-whatsapp');
assert.equal(meta('article:published_time', 'property'), '2026-01-15');
assert.equal(meta('article:modified_time', 'property'), '2026-03-01');
assert.equal(meta('article:author', 'property'), 'Tironi Tech');
assert.equal(document.head.querySelector('link[rel="alternate"][hreflang]').href, 'https://www.tironitech.com/blog/guia-whatsapp');

// A missing publication record must not inherit the previous article's date.
applyPageMeta({
  title: 'Guia sem registro de publicação | Tironi Tech',
  description: 'Conteúdo com data de revisão conhecida.',
  path: '/blog/guia-sem-data-publicacao',
  ogType: 'article',
  publishedTime: null,
  modifiedTime: '2026-09-22',
});
assert.equal(meta('article:published_time', 'property'), undefined);
assert.equal(meta('article:modified_time', 'property'), '2026-09-22');
assert.equal(meta('article:author', 'property'), 'Tironi Tech');

// Going back home must replace service entities while retaining the business identity.
applyPageMeta({ ...HOME_SEO, schema: createHomeSchema() });
assert(!graph().some((node) => ['Service', 'FAQPage'].includes(node['@type'])));
assert(graph().some((node) => hasType(node, 'Organization')));
assert(graph().some((node) => node['@type'] === 'WebSite'));
assert.equal(meta('og:url', 'property'), 'https://www.tironitech.com/');
assert.equal(meta('og:type', 'property'), 'website');
assert.equal(document.head.querySelectorAll('meta[property^="article:"]').length, 0);

for (const slug of searchConsolePriorityServiceSlugs) {
  assert.deepEqual(getRelatedServicePages(slug).map((page) => page.slug), searchConsolePriorityServiceSlugs.filter((candidate) => candidate !== slug));
}
delete globalThis.document;
console.log('Page metadata: home identity, service navigation, social tags, unknown publication dates, stale alternates and related service destinations passed.');
