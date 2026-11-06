/**
 * Builds a rel attribute for outbound links per Google's qualify-outbound-links guidance.
 * Editorial citations stay followable by default; mark sponsored/ugc when the relationship requires it.
 */
export function externalRel({ sponsored = false, ugc = false, follow = true } = {}) {
  const parts = ['noopener', 'noreferrer'];
  if (!follow) parts.push('nofollow');
  if (sponsored) parts.push('sponsored');
  if (ugc) parts.push('ugc');
  return parts.join(' ');
}
