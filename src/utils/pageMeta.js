import { createPageSchema, DEFAULT_SOCIAL_IMAGE, INDEXABLE_ROBOTS, siteUrl } from './siteSchema.js';

function setMeta(name, value, attribute = 'name') {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
}

export function applyPageMeta({ title, description, path = '/', breadcrumbs = [], language = 'pt-BR', image = DEFAULT_SOCIAL_IMAGE, imageAlt = 'Tironi Tech', ogType = 'website', robots = INDEXABLE_ROBOTS, schema, pageType = 'WebPage', pageData = {}, alternates = [] }) {
  const url = siteUrl(path);
  const imageUrl = siteUrl(image);
  document.documentElement.lang = language;
  document.title = title;
  setMeta('description', description);
  setMeta('robots', robots);
  for (const [name, value] of Object.entries({
    'og:type': ogType,
    'og:site_name': 'Tironi Tech',
    'og:locale': language.replace('-', '_'),
    'og:title': title,
    'og:description': description,
    'og:url': url,
    'og:image': imageUrl,
    'og:image:alt': imageAlt,
  })) setMeta(name, value, 'property');
  for (const [name, value] of Object.entries({
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:url': url,
    'twitter:image': imageUrl,
    'twitter:image:alt': imageAlt,
  })) setMeta(name, value);

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;

  // Article language alternates must not survive a client-side move to a service.
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((element) => element.remove());
  for (const { hreflang, href } of alternates) {
    const alternate = document.createElement('link');
    alternate.rel = 'alternate';
    alternate.hreflang = hreflang;
    alternate.href = siteUrl(href);
    document.head.appendChild(alternate);
  }

  let schemaElement = document.getElementById('tt-page-schema')
    || document.head.querySelector('script[type="application/ld+json"]');
  if (!schemaElement) {
    schemaElement = document.createElement('script');
    schemaElement.type = 'application/ld+json';
    document.head.appendChild(schemaElement);
  }
  schemaElement.id = 'tt-page-schema';
  schemaElement.textContent = JSON.stringify(schema || createPageSchema({ title, description, path, breadcrumbs, language, pageType, pageData }));
}
