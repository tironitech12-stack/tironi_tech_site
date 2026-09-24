// Individually authored tutorials. The parser only maps text to the article schema;
// it never expands text, rotates synonyms or generates topic variants.
export function tutorial(spec, body) {
  const sections = body.trim().split(/^## /m).filter(Boolean).map((block) => {
    const [heading, ...lines] = block.trim().split('\n');
    const blocks = lines.join('\n').trim().split(/\n\s*\n/);
    return {
      heading: heading.replace(/^\d+\.\s+/, ''),
      paragraphs: blocks.filter((item) => !item.startsWith('- ')),
      bullets: blocks.filter((item) => item.startsWith('- ')).flatMap((item) => item.split('\n').map((line) => line.replace(/^- /, ''))),
    };
  });
  return { ...spec, sections, date: '2026-09-24', updated: '2026-09-24', availableLocales: ['pt'], editorialBatch: 'tutorials-1000', featured: true };
}
