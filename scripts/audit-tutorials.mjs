import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
import { blogArticles } from '../src/content/blogArticles.js';
import { tutorialArticles } from '../src/content/tutorialArticles.js';

const normalize = (text) => text.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const paragraphs = new Map();
const shinglesBySlug = new Map();
const rows = tutorialArticles.map((draft) => {
  const matches = blogArticles.filter((article) => article.slug === draft.slug);
  assert.equal(matches.length, 1, `Slug missing or duplicated: ${draft.slug}`);
  const article = matches[0];
  const body = article.sections.flatMap((section) => [...section.paragraphs, ...(section.bullets || [])]).join('\n\n');
  assert(body.length > 10000, `Body too short: ${article.slug}: ${body.length}`);
  assert(article.sections.length >= 8, `Insufficient sections: ${article.slug}`);
  assert(article.faqs.length >= 3 && article.sources.length > 0, `Missing FAQ or sources: ${article.slug}`);
  assert.equal(blogArticles.filter((candidate) => normalize(candidate.title) === normalize(article.title)).length, 1, `Duplicate title: ${article.slug}`);
  assert.equal(new Set(article.sections.map((section) => normalize(section.heading))).size, article.sections.length, `Repeated heading: ${article.slug}`);
  assert(article.visual?.labels?.length >= 3, `Missing flow diagram: ${article.slug}`);
  for (const source of article.sources) assert.equal(new URL(source.url).protocol, 'https:', `Invalid source URL: ${article.slug}`);
  const words = normalize(body).split(' ');
  shinglesBySlug.set(article.slug, new Set(words.slice(0, -4).map((_, index) => words.slice(index, index + 5).join(' '))));
  for (const section of article.sections) {
    assert(section.heading && section.paragraphs.length, `Empty section: ${article.slug}`);
    for (const paragraph of section.paragraphs) {
      assert(!/\[[^\]]+\]\(https?:/.test(paragraph), `Unrendered Markdown link: ${article.slug}`);
      const key = normalize(paragraph);
      assert(!paragraphs.has(key), `Repeated paragraph: ${article.slug} / ${paragraphs.get(key)}`);
      paragraphs.set(key, article.slug);
    }
  }
  return { slug: article.slug, title: article.title, category: article.category, bodyCharacters: body.length, sections: article.sections.length, languages: article.availableLocales, editorialRequest: article.editorialRequest || null };
});
let maximumOverlap = { ratio: 0, slugs: [] };
const entries = [...shinglesBySlug];
for (let i = 0; i < entries.length; i++) {
  for (let j = i + 1; j < entries.length; j++) {
    const [leftSlug, left] = entries[i];
    const [rightSlug, right] = entries[j];
    const intersection = [...left].filter((phrase) => right.has(phrase)).length;
    const ratio = intersection / (left.size + right.size - intersection);
    assert(ratio < 0.5, `High lexical overlap: ${leftSlug} / ${rightSlug}`);
    if (ratio > maximumOverlap.ratio) maximumOverlap = { ratio, slugs: [leftSlug, rightSlug] };
  }
}
const requestArticles = rows.filter((article) => article.editorialRequest === 'additional-100-20260924');
const requestedBatch = {
  id: 'additional-100-20260924', target: 100, authored: requestArticles.length,
  remaining: Math.max(0, 100 - requestArticles.length),
  bodyCharacters: requestArticles.length ? { min: Math.min(...requestArticles.map((article) => article.bodyCharacters)), max: Math.max(...requestArticles.map((article) => article.bodyCharacters)) } : null,
  categories: Object.fromEntries([...new Set(requestArticles.map((article) => article.category))].sort().map((category) => [category, requestArticles.filter((article) => article.category === category).length])),
};
const report = { target: 1000, authored: rows.length, remaining: 1000 - rows.length, requestedBatch, validation: 'Structure, body length after content processing, exact paragraph uniqueness and pairwise five-word Jaccard overlap within the tutorial batch. Does not certify semantic uniqueness, source accuracy or ranking.', maximumLexicalOverlap: maximumOverlap, articles: rows };
await writeFile(new URL('../docs/tutorial-production-progress.json', import.meta.url), `${JSON.stringify(report, null, 2)}\n`);
const reviewTable = [
  '# Lote adicional de 100 tutoriais',
  '',
  `Textos completos validados: **${requestedBatch.authored}/100**. Restantes: **${requestedBatch.remaining}**.`,
  '',
  'Inventário de conteúdo local; este relatório não confirma publicação ou indexação no Google. Os caracteres abaixo correspondem ao corpo após o processamento do site, sem título, introdução, FAQ e CTA.',
  '',
  '| Nº | Artigo | Categoria | Caracteres de corpo |',
  '| ---: | --- | --- | ---: |',
  ...requestArticles.map((article, index) => `| ${index + 1} | ${article.title.replaceAll('|', '\\|')} | ${article.category.replaceAll('|', '\\|')} | ${article.bodyCharacters} |`),
  '',
  'Todos os textos deste inventário estão em português. Os novos tutoriais não possuem traduções publicadas em inglês ou espanhol.',
  '',
].join('\n');
await writeFile(new URL('../docs/lote-100-artigos.md', import.meta.url), reviewTable);
console.log(JSON.stringify({ authored: report.authored, remaining: report.remaining, requestedBatch, maximumLexicalOverlap: maximumOverlap, report: 'docs/tutorial-production-progress.json' }, null, 2));
if (process.argv.includes('--require-request-complete')) assert(requestedBatch.authored >= requestedBatch.target, `Current request incomplete: ${requestedBatch.authored}/100 articles`);
