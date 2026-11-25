import { blogArchiveArticles } from '../../content/blogArchiveArticles.generated';
import BlogIndexPage from './BlogIndexPage';

export default function BlogArchivePage({ locale = 'pt' }) {
  const articles = blogArchiveArticles[locale] || [];
  return <BlogIndexPage locale={locale} articlesOverride={articles} archiveMode />;
}
