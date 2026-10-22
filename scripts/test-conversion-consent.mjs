// Run with: node --experimental-vm-modules scripts/test-conversion-consent.mjs
// Isolate providers so this test never sends analytics to a real account.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const calls = [];
let consent = null;
const context = vm.createContext({
  window: { location: { pathname: '/blog/exemplo', search: '?email=private@example.com' }, gtag: (...args) => calls.push(['google', ...args]) },
});
const providers = {
  '@vercel/analytics': { track: (...args) => calls.push(['vercel', ...args]) },
  './cookieConsent': { getStoredCookieConsent: () => consent },
  './googleTag': { GOOGLE_ANALYTICS_ID: 'G-TEST' },
};
const source = await readFile(new URL('../src/utils/conversionTracking.js', import.meta.url), 'utf8');
const module = new vm.SourceTextModule(source, { context });
await module.link((specifier) => {
  const exports = providers[specifier];
  assert(exports, `Unexpected dependency: ${specifier}`);
  return new vm.SyntheticModule(Object.keys(exports), function () {
    for (const [name, value] of Object.entries(exports)) this.setExport(name, value);
  }, { context });
});
await module.evaluate();
const { trackFunnelEvent } = module.namespace;

trackFunnelEvent('diagnostic_link_click');
consent = { analytics: false, marketing: true };
trackFunnelEvent('diagnostic_link_click');
assert.equal(calls.length, 0, 'Missing analytics consent must block both providers');

consent = { analytics: true, marketing: false };
trackFunnelEvent('service_link_click', { service: 'agente-ia-whatsapp' });
assert.equal(calls.length, 2);
assert.equal(calls[0][2].page_path, '/blog/exemplo');
assert.equal(calls[1][3].service, 'agente-ia-whatsapp');
assert(!JSON.stringify(calls).includes('private@example.com'), 'Query parameters must not enter event context');

consent = { analytics: false };
trackFunnelEvent('diagnostic_submit');
assert.equal(calls.length, 2, 'Revoking consent must immediately stop events');

consent = { analytics: true };
context.window.gtag = () => { throw new Error('Provider unavailable'); };
assert.doesNotThrow(() => trackFunnelEvent('diagnostic_submit'), 'Provider failure must not break the visitor flow');
context.window = undefined;
assert.doesNotThrow(() => trackFunnelEvent('diagnostic_submit'));
console.log('Conversion consent: missing, denied, granted, revoked and provider failure passed.');
