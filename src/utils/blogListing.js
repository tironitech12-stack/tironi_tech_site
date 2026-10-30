import { BLOG_SEO } from '../content/positioning.js';

export const BLOG_PAGE_SIZE = 18;
const SITE_URL = 'https://www.tironitech.com';
const localeCopy = {
  pt: { page: 'Página', blog: 'Blog', home: 'Início', guides: 'guias práticos', intro: 'Explore os guias sobre', conclusion: 'com exemplos e critérios para aplicar na operação da empresa.' },
  en: { page: 'Page', blog: 'Blog', home: 'Home', guides: 'practical guides', intro: 'Explore guides on', conclusion: 'with examples and criteria for applying them to company operations.' },
  es: { page: 'Página', blog: 'Blog', home: 'Inicio', guides: 'guías prácticas', intro: 'Explora las guías sobre', conclusion: 'con ejemplos y criterios para aplicarlas en la operación de la empresa.' },
};

export function getBlogCategorySlug(category) {
  return category.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function getBlogListingPath({ locale = 'pt', categorySlug = '', page = 1 } = {}) {
  const base = `${locale === 'pt' ? '' : `/${locale}`}/blog`;
  return `${base}${categorySlug ? `/categoria/${categorySlug}` : ''}${page > 1 ? `/pagina/${page}` : ''}`;
}

// Page one has a single URL: /blog or its category root. Reject malformed
// pagination instead of rendering a duplicate or silently clamping the page.
export function parseBlogListingPath(pathname) {
  const match = pathname.match(/^\/(?:(en|es)\/)?blog(?:\/categoria\/([a-z0-9]+(?:-[a-z0-9]+)*))?(?:\/pagina\/([1-9]\d*))?\/?$/);
  if (!match || match[3] === '1') return null;
  const page = Number(match[3] || 1);
  if (!Number.isSafeInteger(page)) return null;
  return { locale: match[1] || 'pt', categorySlug: match[2] || '', page };
}

export function getBlogListing(articles, { locale = 'pt', categorySlug = '', page = 1 } = {}) {
  const copy = localeCopy[locale] || localeCopy.pt;
  const baseSeo = BLOG_SEO[locale] || BLOG_SEO.pt;
  const categories = [...new Set(articles.map((article) => article.category))].map((name) => ({
    name,
    slug: getBlogCategorySlug(name),
    count: articles.filter((article) => article.category === name).length,
  }));
  const category = categorySlug ? categories.find((item) => item.slug === categorySlug) : null;
  const matchingArticles = categorySlug ? articles.filter((article) => article.category === category?.name) : articles;
  const totalPages = Math.ceil(matchingArticles.length / BLOG_PAGE_SIZE);
  const valid = Number.isSafeInteger(page) && page >= 1 && page <= totalPages && (!categorySlug || Boolean(category));
  const path = getBlogListingPath({ locale, categorySlug, page });
  const suffix = page > 1 ? ` — ${copy.page} ${page}` : '';
  const title = category
    ? `${category.name}: ${copy.guides}${suffix} | Tironi Tech`
    : page > 1 ? `${copy.blog} Tironi Tech — ${copy.page} ${page}` : baseSeo.title;
  const description = category
    ? `${copy.intro} ${category.name}, ${copy.conclusion}${page > 1 ? ` ${copy.page} ${page} de ${totalPages}.` : ''}`
    : `${baseSeo.description}${page > 1 ? ` ${copy.page} ${page} de ${totalPages}.` : ''}`;
  const visibleArticles = valid ? matchingArticles.slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE) : [];
  const breadcrumbs = [{ name: copy.home, path: '/' }, { name: copy.blog, path: getBlogListingPath({ locale }) }];
  if (category) breadcrumbs.push({ name: category.name, path: getBlogListingPath({ locale, categorySlug }) });
  if (page > 1) breadcrumbs.push({ name: `${copy.page} ${page}`, path });
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': category ? 'CollectionPage' : 'Blog',
        '@id': `${SITE_URL}${path}#listing`,
        name: title,
        description,
        url: `${SITE_URL}${path}`,
        inLanguage: locale === 'pt' ? 'pt-BR' : locale,
        publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Tironi Tech', url: SITE_URL },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: visibleArticles.length,
          itemListElement: visibleArticles.map((article, index) => ({
            '@type': 'ListItem',
            position: (page - 1) * BLOG_PAGE_SIZE + index + 1,
            name: article.title,
            url: `${SITE_URL}${locale === 'pt' ? '' : `/${locale}`}/blog/${article.slug}`,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: `${SITE_URL}${crumb.path}` })),
      },
    ],
  };
  return {
    valid, path, title, description, heading: category?.name || null, category,
    categories, articles: matchingArticles, visibleArticles, totalPages, page, schema,
    previousPath: valid && page > 1 ? getBlogListingPath({ locale, categorySlug, page: page - 1 }) : null,
    nextPath: valid && page < totalPages ? getBlogListingPath({ locale, categorySlug, page: page + 1 }) : null,
  };
}

export function getBlogListingRoutes(articles, { locale = 'pt' } = {}) {
  const first = getBlogListing(articles, { locale });
  if (!first.valid) return [];
  return ['', ...first.categories.map(({ slug }) => slug)].flatMap((categorySlug) => {
    const listing = getBlogListing(articles, { locale, categorySlug });
    return Array.from({ length: listing.totalPages }, (_, index) => getBlogListing(articles, { locale, categorySlug, page: index + 1 }));
  });
}
