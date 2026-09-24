import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
import { blogArticles } from '../src/content/blogArticles.js';
import { tutorialArticles } from '../src/content/tutorialArticles.js';

const normalize = (text) => text.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const paragraphs = new Map();
const rows = tutorialArticles.map((draft) => {
  const matches = blogArticles.filter((article) => article.slug === draft.slug);
  assert.equal(matches.length, 1, `Slug missing or duplicated: ${draft.slug}`);
  const article = matches[0];
  const body = article.sections.flatMap((section) => [...section.paragraphs, ...(section.bullets || [])]).join('\n\n');
  assert(body.length > 10000, `Body too short: ${article.slug}: ${body.length}`);
  assert(article.sections.length >= 8, `Insufficient sections: ${article.slug}`);
  assert(article.faqs.length >= 3 && article.sources.length > 0, `Missing FAQ or sources: ${article.slug}`);
  for (const section of article.sections) {
    assert(section.heading && section.paragraphs.length, `Empty section: ${article.slug}`);
    for (const paragraph of section.paragraphs) {
      const key = normalize(paragraph);
      assert(!paragraphs.has(key), `Repeated paragraph: ${article.slug} / ${paragraphs.get(key)}`);
      paragraphs.set(key, article.slug);
    }
  }
  return { slug: article.slug, title: article.title, bodyCharacters: body.length, sections: article.sections.length, languages: article.availableLocales };
});
const report = { target: 1000, authored: rows.length, remaining: 1000 - rows.length, validation: 'Structure, body length after content processing and exact paragraph uniqueness. Does not certify semantic uniqueness, source accuracy or ranking.', articles: rows };
await writeFile(new URL('../docs/tutorial-production-progress.json', import.meta.url), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
