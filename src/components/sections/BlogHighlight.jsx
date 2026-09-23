import { homeBlogHighlights } from '../../content/homeBlogHighlights';
import '../../styles/blog.css';

export default function BlogHighlight() {
  return (
    <section className="tt-blog-home" aria-labelledby="blog-home-title">
      <div className="tt2-container">
        <header className="tt-blog-home-head">
          <div>
            <span className="tt-blog-kicker">INSIGHTS TIRONI TECH</span>
            <h2 id="blog-home-title">Tecnologia explicada para quem precisa decidir.</h2>
          </div>
          <a className="tt-blog-text-link" href="/blog">Ver todos os artigos <span aria-hidden="true">↗</span></a>
        </header>
        <div className="tt-blog-home-grid">
          {homeBlogHighlights.map((article, index) => (
            <article className={`tt-blog-preview${index === 0 ? ' tt-blog-preview-featured' : ''}`} key={article.slug}>
              <div className="tt-blog-preview-meta"><span>{article.category}</span><span>{article.readTime}</span></div>
              <h3><a href={`/blog/${article.slug}`}>{article.title}</a></h3>
              <p>{article.description}</p>
              <a className="tt-blog-read" href={`/blog/${article.slug}`}>Ler artigo <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
