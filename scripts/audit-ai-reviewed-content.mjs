import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
import { blogArticles } from '../src/content/blogArticles.js';
import { guardedExpansionArticles, guardedExpansionBatch } from '../src/content/guardedExpansionArticles.js';
import { assertEditorialRevision } from './lib/assert-editorial-revision.mjs';

const EXPECTED = 150;
const MIN_WORDS = 2500;
const MIN_SECTIONS = 12;
const MIN_PARAGRAPHS = 24;
const MAX_INTENT_JACCARD = 0.35;
const MAX_BODY_JACCARD = 0.65;
const stopWords = new Set(['para', 'como', 'com', 'sem', 'uma', 'das', 'dos', 'que', 'por', 'entre', 'sobre', 'mais', 'cada']);

function normalize(value = '') {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').replace(/[^a-z0-9]+/g, ' ').trim();
}

function tokens(value) {
  return new Set(normalize(value).split(' ').filter((token) => token.length > 3 && !stopWords.has(token)));
}

function jaccard(left, right) {
  const intersection = [...left].filter((token) => right.has(token)).length;
  return intersection / (left.size + right.size - intersection || 1);
}

function shingles(article) {
  const words = normalize(article.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets || [])]).join(' ')).split(' ');
  return new Set(words.slice(0, -4).map((_, index) => words.slice(index, index + 5).join(' ')));
}

function wordCount(article) {
  return [
    article.title,
    article.description,
    article.intro,
    ...article.takeaways,
    ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets || [])]),
    ...article.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ].join(' ').trim().split(/\s+/).filter(Boolean).length;
}

assert.equal(guardedExpansionArticles.length, EXPECTED, `Expected ${EXPECTED} articles in the editorial batch`);
assert.equal(new Set(guardedExpansionArticles.map((article) => article.slug)).size, EXPECTED, 'Duplicate slug in editorial batch');
assert.equal(new Set(guardedExpansionArticles.map((article) => normalize(article.title))).size, EXPECTED, 'Duplicate title in editorial batch');

const publicBySlug = new Map(blogArticles.map((article) => [article.slug, article]));
const allSlugCounts = new Map();
for (const article of blogArticles) allSlugCounts.set(article.slug, (allSlugCounts.get(article.slug) || 0) + 1);
assert.equal([...allSlugCounts.values()].filter((count) => count > 1).length, 0, 'Duplicate public blog slugs');

let maximumIntentOverlap = { ratio: 0, slugs: [] };
let maximumBodyOverlap = { ratio: 0, slugs: [] };
const intentSets = guardedExpansionArticles.map((article) => tokens([
  article.title,
  article.editorialBrief.readerGoal,
  article.editorialBrief.problem,
  article.editorialBrief.uniqueContribution,
].join(' ')));
const publicBatch = guardedExpansionArticles.map((article) => publicBySlug.get(article.slug));
const bodySets = publicBatch.map(shingles);

for (let left = 0; left < guardedExpansionArticles.length; left += 1) {
  for (let right = left + 1; right < guardedExpansionArticles.length; right += 1) {
    const ratio = jaccard(intentSets[left], intentSets[right]);
    if (ratio > maximumIntentOverlap.ratio) maximumIntentOverlap = { ratio, slugs: [guardedExpansionArticles[left].slug, guardedExpansionArticles[right].slug] };
    const bodyRatio = jaccard(bodySets[left], bodySets[right]);
    if (bodyRatio > maximumBodyOverlap.ratio) maximumBodyOverlap = { ratio: bodyRatio, slugs: [guardedExpansionArticles[left].slug, guardedExpansionArticles[right].slug] };
  }
}
assert(maximumIntentOverlap.ratio < MAX_INTENT_JACCARD, `Possible intent overlap: ${maximumIntentOverlap.slugs.join(' / ')} (${maximumIntentOverlap.ratio})`);
assert(maximumBodyOverlap.ratio < MAX_BODY_JACCARD, `Excessive body overlap: ${maximumBodyOverlap.slugs.join(' / ')} (${maximumBodyOverlap.ratio})`);

const reports = guardedExpansionArticles.map((draft) => {
  const article = publicBySlug.get(draft.slug);
  assert(article, `Article not public: ${draft.slug}`);
  assert.equal(article.editorialBatch, guardedExpansionBatch, `Wrong batch: ${draft.slug}`);
  assert.equal(article.aiReview, null, `Generated approval must not be used as factual review: ${draft.slug}`);
  if (assertEditorialRevision(article)) {
    return {
      slug: article.slug, title: article.title, category: article.category,
      words: wordCount(article), sections: article.sections.length,
      paragraphs: article.sections.reduce((sum, section) => sum + section.paragraphs.length, 0),
      sources: article.sources.length, revision: 'practical-guide',
      structuralChecks: 'passed', factualReviewStatus: 'pending',
      uniqueContribution: article.editorialRevision.basis,
    };
  }
  assert(article.editorialBrief?.audience && article.editorialBrief?.readerGoal && article.editorialBrief?.uniqueContribution, `Incomplete editorial brief: ${draft.slug}`);
  assert(article.editorialBrief?.evidencePlan?.length >= 3, `Weak evidence plan: ${draft.slug}`);
  assert(article.sources?.length >= 3, `Insufficient sources: ${draft.slug}`);
  for (const source of article.sources) assert.equal(new URL(source.url).protocol, 'https:', `Non-HTTPS source: ${draft.slug}`);
  assert(article.sections.length >= MIN_SECTIONS, `Insufficient sections: ${draft.slug}`);
  const paragraphCount = article.sections.reduce((sum, section) => sum + section.paragraphs.length, 0);
  assert(paragraphCount >= MIN_PARAGRAPHS, `Insufficient retained paragraphs: ${draft.slug}`);
  const words = wordCount(article);
  assert(words >= MIN_WORDS, `Long-form requirement failed: ${draft.slug} (${words} words)`);
  assert(article.visual?.labels?.length >= 5, `Missing useful visual: ${draft.slug}`);
  assert(article.faqs?.length >= 4, `Insufficient FAQ: ${draft.slug}`);
  return {
    slug: article.slug,
    title: article.title,
    category: article.category,
    words,
    sections: article.sections.length,
    paragraphs: paragraphCount,
    sources: article.sources.length,
    structuralChecks: 'passed',
    factualReviewStatus: 'pending',
    uniqueContribution: article.editorialBrief.uniqueContribution,
  };
});

const wordCounts = reports.map((report) => report.words).sort((left, right) => left - right);
const categoryCounts = Object.fromEntries([...new Set(reports.map((report) => report.category))].sort().map((category) => [category, reports.filter((report) => report.category === category).length]));
const output = {
  generatedAt: new Date().toISOString(),
  batch: guardedExpansionBatch,
  checkType: 'automated-structural-validation',
  disclosure: 'Esta execução verifica estrutura, integridade e sobreposição textual. A revisão factual por pessoa identificada permanece pendente em cada artigo e exige conferência das afirmações nas fontes.',
  revisionPolicy: 'Os limites de extensão são critérios editoriais do lote original. Revisões práticas posteriores têm verificações de integridade próprias e preservam a URL.',
  thresholds: { expectedArticles: EXPECTED, minimumWords: MIN_WORDS, minimumSections: MIN_SECTIONS, minimumParagraphs: MIN_PARAGRAPHS, maximumIntentJaccard: MAX_INTENT_JACCARD, maximumBodyJaccard: MAX_BODY_JACCARD },
  result: {
    articles: reports.length,
    structurallyValidated: reports.filter((report) => report.structuralChecks === 'passed').length,
    revised: reports.filter((report) => report.revision === 'practical-guide').length,
    factualReviewPending: reports.filter((report) => report.factualReviewStatus === 'pending').length,
    categories: categoryCounts,
    words: { min: wordCounts[0], median: wordCounts[Math.floor(wordCounts.length / 2)], max: wordCounts.at(-1) },
    maximumIntentOverlap,
    maximumBodyOverlap,
    status: 'passed',
  },
  articles: reports,
};

await writeFile(new URL('../docs/ai-content-review-150.json', import.meta.url), `${JSON.stringify(output, null, 2)}\n`);
console.log(JSON.stringify({ report: 'docs/ai-content-review-150.json', ...output.result }, null, 2));
