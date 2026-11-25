export function splitArticleIntro(intro, phrase) {
  if (!phrase) return [intro, '', ''];

  const index = intro.toLocaleLowerCase('pt-BR').indexOf(phrase.toLocaleLowerCase('pt-BR'));
  if (index < 0) return [intro, '', ''];

  const end = index + phrase.length;
  return [intro.slice(0, index), intro.slice(index, end), intro.slice(end)];
}
