import assert from 'node:assert/strict';
import { seoGrowthArticleRevisions } from '../../src/content/seoGrowthArticleRevisions.js';

// Targeted rewrites are checked for preserved answers and evidence, rather than
// padded to satisfy the historical word-count contract of their original batch.
export function assertEditorialRevision(article) {
  const revision = seoGrowthArticleRevisions[article.slug];
  if (!revision) return false;
  assert.equal(article.editorialRevision?.kind, 'practical-guide', `Missing revision record: ${article.slug}`);
  assert.equal(article.editorialRevision.date, revision.updated, `Stale revision record: ${article.slug}`);
  assert.equal(article.aiReview, null, `Outdated AI score reused after rewrite: ${article.slug}`);
  assert(article.updated >= revision.updated, `Revision date lost: ${article.slug}`);
  assert(article.intro && article.takeaways.length >= 3, `Missing answer or takeaways: ${article.slug}`);
  assert(article.sections.length >= 4 && article.faqs.length >= 2, `Incomplete practical guide: ${article.slug}`);
  assert.equal(article.sections.length, revision.sections.length, `Revised sections lost: ${article.slug}`);
  for (const [index, section] of revision.sections.entries()) {
    assert.equal(article.sections[index].heading, section.heading, `Wrong section order: ${article.slug}`);
    assert.deepEqual(article.sections[index].paragraphs, section.paragraphs, `Revised answer filtered out: ${article.slug}`);
    assert(section.paragraphs.length && section.paragraphs.every((text) => text.trim()), `Empty answer: ${article.slug}`);
  }
  assert.deepEqual(article.sources, revision.sources, `Irrelevant inherited bibliography: ${article.slug}`);
  for (const source of article.sources) {
    assert(source.label && new URL(source.url).protocol === 'https:', `Invalid source: ${article.slug}`);
  }
  assert(article.primaryGuide?.href.startsWith('/'), `Missing path to the related service: ${article.slug}`);
  return true;
}
