import { blogArticles, coreBlogArticles } from '../src/content/blogArticles.js';

const normalize = (value = '') => value.trim().replace(/\s+/g, ' ');
const words = (article) => [
  article.title,
  article.description,
  article.intro,
  ...(article.takeaways || []),
  ...article.sections.flatMap((section) => [section.heading, ...(section.paragraphs || []), ...(section.bullets || [])]),
  ...(article.faqs || []).flatMap((faq) => [faq.question, faq.answer]),
].join(' ').trim().split(/\s+/).filter(Boolean).length;

const paragraphUses = new Map();
for (const article of blogArticles) {
  for (const paragraph of article.sections.flatMap((section) => section.paragraphs || [])) {
    const key = normalize(paragraph);
    if (!paragraphUses.has(key)) paragraphUses.set(key, new Set());
    paragraphUses.get(key).add(article.slug);
  }
}

const repeated = [...paragraphUses.entries()]
  .filter(([, slugs]) => slugs.size >= 5)
  .sort((left, right) => right[1].size - left[1].size);
const coreCounts = coreBlogArticles.map(words).sort((a, b) => a - b);
const allCounts = blogArticles.map(words).sort((a, b) => a - b);
const report = {
  generatedAt: new Date().toISOString(),
  publicArticles: blogArticles.length,
  indexableCore: coreBlogArticles.length,
  categoriesInCore: new Set(coreBlogArticles.map((article) => article.category)).size,
  sourcesInCore: coreBlogArticles.reduce((sum, article) => sum + (article.sources?.length || 0), 0),
  coreWords: { min: coreCounts[0], median: coreCounts[Math.floor(coreCounts.length / 2)], max: coreCounts.at(-1) },
  allWords: { min: allCounts[0], median: allCounts[Math.floor(allCounts.length / 2)], max: allCounts.at(-1) },
  paragraphsRepeatedAcrossFiveOrMoreArticles: repeated.length,
};

console.log(JSON.stringify(report, null, 2));
if (repeated.length) {
  console.error(`Quality gate failed: ${repeated.length} paragraph(s) still occur in five or more articles.`);
  process.exitCode = 1;
}
