import assert from 'node:assert/strict';
import { blogArticles } from '../src/content/blogArticles.js';
import { seoGrowthArticleRevisions } from '../src/content/seoGrowthArticleRevisions.js';
import { assertEditorialRevision } from './lib/assert-editorial-revision.mjs';
import { serviceLandingPages } from '../src/content/serviceLandingPages.js';

for (const slug of Object.keys(seoGrowthArticleRevisions)) {
  const matches = blogArticles.filter((article) => article.slug === slug);
  assert.equal(matches.length, 1, `Revised URL missing or duplicated: ${slug}`);
  assertEditorialRevision(matches[0]);
  assert(serviceLandingPages.some((page) => `/${page.slug}` === matches[0].primaryGuide.href), `Broken commercial destination: ${slug}`);
}
console.log(`Validated ${Object.keys(seoGrowthArticleRevisions).length} revised URLs: retained answers, sources, dates and commercial destinations.`);
