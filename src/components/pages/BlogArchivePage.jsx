import { useMemo } from 'react';
import { getBlogArticlesForLocale } from '../../content/localizedBlogArticles';
import BlogIndexPage from './BlogIndexPage';

export default function BlogArchivePage({ locale = 'pt' }) {
  const articles = useMemo(() => getBlogArticlesForLocale(locale), [locale]);
  return <BlogIndexPage locale={locale} articlesOverride={articles} archiveMode />;
}
