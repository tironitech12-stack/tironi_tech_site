const SITE_URL = 'https://www.tironitech.com';

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector);
  if (element && value) element.setAttribute(attribute, value);
}

export function applyPageMeta({ title, description, path = '/', breadcrumbs = [] }) {
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  document.title = title;
  setMeta('meta[name="description"]', 'content', description);
  setMeta('meta[property="og:title"]', 'content', title);
  setMeta('meta[property="og:description"]', 'content', description);
  setMeta('meta[property="og:url"]', 'content', url);
  setMeta('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  const canonical = document.head.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = url;

  const graph = [
    {
      '@type': 'WebPage',
      name: title,
      description,
      url,
      inLanguage: 'pt-BR',
      isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: 'Tironi Tech', url: `${SITE_URL}/` },
    },
  ];

  if (breadcrumbs.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${crumb.path}`,
      })),
    });
  }

  let schema = document.getElementById('tt-page-schema');
  if (!schema) {
    schema = document.createElement('script');
    schema.id = 'tt-page-schema';
    schema.type = 'application/ld+json';
    document.head.appendChild(schema);
  }
  schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}
