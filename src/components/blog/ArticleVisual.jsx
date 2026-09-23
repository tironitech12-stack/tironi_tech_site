export default function ArticleVisual({ visual }) {
  if (!visual) return null;
  return (
    <figure className={`tt-article-visual tt-article-visual--${visual.type}`}>
      <figcaption>
        <span>{visual.eyebrow}</span>
        <strong>{visual.title}</strong>
      </figcaption>
      <div className="tt-article-visual-canvas" role="img" aria-label={`${visual.title}. ${visual.labels.join(', ')}`}>
        {visual.labels.map((label, index) => (
          <div className="tt-article-visual-node" key={label} style={{ '--visual-index': index }}>
            <small>{String(index + 1).padStart(2, '0')}</small>
            <b>{label}</b>
          </div>
        ))}
      </div>
      <p>{visual.caption}</p>
    </figure>
  );
}
