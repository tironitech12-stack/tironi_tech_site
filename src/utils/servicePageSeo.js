import { searchConsolePriorityServiceSlugs, serviceLandingPages } from '../content/serviceLandingPages.js';
import { createPageSchema, SITE_URL, siteUrl } from './siteSchema.js';

export function getRelatedServicePages(slug) {
  return searchConsolePriorityServiceSlugs
    .filter((candidate) => candidate !== slug)
    .map((candidate) => serviceLandingPages.find((page) => page.slug === candidate))
    .filter(Boolean);
}

export function createServiceSchema(page) {
  const path = `/${page.slug}`;
  const url = siteUrl(path);
  const entities = [{
    '@type': 'Service',
    '@id': `${url}#service`,
    name: page.keyword,
    description: page.description,
    url,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'Brasil' },
  }];
  if (page.faqs?.length) {
    entities.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: page.faqs.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    });
  }
  return createPageSchema({
    title: `${page.keyword} | Tironi Tech`,
    description: page.description,
    path,
    pageData: { mainEntity: { '@id': `${url}#service` } },
    entities,
    breadcrumbs: [{ name: 'Início', path: '/' }, { name: page.keyword, path }],
  });
}
