import { blogArticles, coreBlogArticles } from '../src/content/blogArticles.js';
import { buyerGuides } from '../src/content/buyerGuides/index.js';
import { buyerGuideTracks } from '../src/content/buyerGuides/plan.js';
import { splitArticleIntro } from '../src/utils/articleEmphasis.js';
import assert from 'node:assert/strict';

const plannedSlugs = buyerGuideTracks.flatMap(({ topics }) => topics.map(([slug]) => slug));
assert.equal(plannedSlugs.length, 100);
assert.equal(new Set(plannedSlugs).size, plannedSlugs.length, 'Buyer guide topics must have distinct URLs');

for (const guide of buyerGuides) {
  const published = blogArticles.filter(({ slug }) => slug === guide.slug);
  assert.equal(published.length, 1, `Expected one article at ${guide.slug}`);
  const [article] = published;
  const body = article.sections.flatMap(({ paragraphs, bullets = [] }) => [...paragraphs, ...bullets]);
  const characterCount = [...[article.intro, ...body].join(' ')].length;
  assert(characterCount >= 20_000, `${article.slug}: only ${characterCount} editorial characters`);
  assert(splitArticleIntro(article.intro, article.emphasis)[1], `${article.slug}: missing keyword in lead`);
}

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
const titles = new Map();
for (const article of blogArticles) {
  const title = normalize(article.title).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  if (!titles.has(title)) titles.set(title, []);
  titles.get(title).push(article.slug);
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
  indexableArticles: blogArticles.length,
  featuredSelection: coreBlogArticles.length,
  categoriesInCore: new Set(coreBlogArticles.map((article) => article.category)).size,
  sourcesInCore: coreBlogArticles.reduce((sum, article) => sum + (article.sources?.length || 0), 0),
  coreWords: { min: coreCounts[0], median: coreCounts[Math.floor(coreCounts.length / 2)], max: coreCounts.at(-1) },
  allWords: { min: allCounts[0], median: allCounts[Math.floor(allCounts.length / 2)], max: allCounts.at(-1) },
  paragraphsRepeatedAcrossFiveOrMoreArticles: repeated.length,
  duplicateTitles: [...titles.values()].filter((slugs) => slugs.length > 1),
};

console.log(JSON.stringify(report, null, 2));
if (repeated.length) {
  console.error(`Quality gate failed: ${repeated.length} paragraph(s) still occur in five or more articles.`);
  process.exitCode = 1;
}
if (report.duplicateTitles.length) {
  console.error('Quality gate failed: articles with the same title need an editorial review.');
  process.exitCode = 1;
}
