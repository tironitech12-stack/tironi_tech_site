import { HOME_SEO } from '../content/positioning.js';
import { founderProfile, getFounderCopy } from '../content/founderProfile.js';

export const SITE_URL = 'https://www.tironitech.com';
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/brand/tironi-symbol.png`;
export const INDEXABLE_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

export function siteUrl(path = '/') {
  return new URL(path, `${SITE_URL}/`).href;
}

export function createSiteEntities() {
  return [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Tironi Tech',
      alternateName: 'TironiTech',
      description: HOME_SEO.description,
      url: `${SITE_URL}/`,
      logo: DEFAULT_SOCIAL_IMAGE,
      email: 'tironi@tironitech.com',
      telephone: '+55-43-99667-6633',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Prates, 194 - Bom Retiro',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      areaServed: { '@type': 'Country', name: 'Brasil' },
      knowsAbout: ['consultoria de IA para empresas', 'automação de processos empresariais', 'software sob medida', 'Tironi Tech Club'],
      sameAs: ['https://www.linkedin.com/company/tironi-tech'],
      foundingDate: founderProfile.foundingYear,
      founder: { '@id': `${SITE_URL}/#fundador` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#fundador`,
      name: founderProfile.name,
      url: `${SITE_URL}/#fundador`,
      jobTitle: getFounderCopy('pt').role,
      worksFor: { '@id': `${SITE_URL}/#organization` },
      sameAs: [founderProfile.linkedinUrl],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Tironi Tech',
      url: `${SITE_URL}/`,
      inLanguage: 'pt-BR',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ];
}

export function createPageSchema({ title, description, path = '/', breadcrumbs = [], language = 'pt-BR', pageType = 'WebPage', pageData = {}, entities = [] }) {
  const url = siteUrl(path);
  const graph = [
    ...createSiteEntities(),
    {
      '@type': pageType,
      '@id': `${url}#webpage`,
      name: title,
      description,
      url,
      inLanguage: language,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      ...pageData,
    },
    ...entities,
  ];

  if (breadcrumbs.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumbs`,
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: siteUrl(crumb.path),
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
