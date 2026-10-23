import assert from 'node:assert/strict';
import process from 'node:process';
import { GoogleAuth } from 'google-auth-library';
import { createSearchConsole } from '../api/_lib/search-console.js';
import handler from '../api/search-console.js';

const calls = [];
const original = GoogleAuth.prototype.getClient;
const originalToken = process.env.GSC_API_TOKEN;
GoogleAuth.prototype.getClient = async () => ({ request: async (request) => {
  calls.push(request);
  return { data: { ok: true } };
} });
function response() {
  return { headers: {}, setHeader(key, value) { this.headers[key] = value; },
    status(value) { this.statusCode = value; return this; }, json(value) { this.body = value; return this; } };
}
try {
  const gsc = createSearchConsole({ GSC_SITE_URL: 'sc-domain:example.com' });
  assert.deepEqual(await gsc.sites(), { ok: true });
  await gsc.performance({ startDate: '2026-09-01', endDate: '2026-09-28', dimensions: ['page', 'query'] });
  await gsc.performance({ startDate: '2026-09-01', endDate: '2026-09-28', startRow: 25000 });
  assert.match(calls[1].url, /sc-domain%3Aexample.com\/searchAnalytics\/query$/);
  assert.equal(calls[1].data.dataState, 'final');
  assert.throws(() => gsc.performance({ startDate: '2026-02-30', endDate: '2026-03-01' }));
  assert.throws(() => gsc.performance({ startDate: '2026-09-01', endDate: '2026-09-28', dimensions: ['invalid'] }));
  assert.throws(() => gsc.performance({ startDate: '2026-09-01', endDate: '2026-09-28', startRow: -1 }));
  assert.throws(() => gsc.performance({ startDate: '2026-09-01', endDate: '2026-09-28', dataState: 'hourly_all' }));
  assert.throws(() => gsc.inspect('file:///etc/passwd'));
  await gsc.inspect('https://example.com/page');
  assert.equal(calls[3].data.siteUrl, 'sc-domain:example.com');
  await gsc.sitemaps();
  assert.match(calls[4].url, /\/sitemaps$/);
  const count = calls.length;
  delete process.env.GSC_API_TOKEN;
  let res = response();
  await handler({ method: 'GET', headers: {} }, res);
  assert.equal(res.statusCode, 503);
  process.env.GSC_API_TOKEN = 'test-only-token';
  res = response();
  await handler({ method: 'GET', headers: { authorization: 'Bearer wrong' } }, res);
  assert.equal(res.statusCode, 401);
  assert.equal(res.headers['Cache-Control'], 'private, no-store');
  res = response();
  await handler({ method: 'POST', headers: { authorization: 'Bearer test-only-token' } }, res);
  assert.equal(res.statusCode, 405);
  res = response();
  await handler({ method: 'GET', headers: { authorization: 'Bearer test-only-token' }, query: { action: 'delete' } }, res);
  assert.equal(res.statusCode, 400);
  assert.equal(calls.length, count, 'Requisições inválidas não devem acessar o Google.');
  console.log('Search Console: validação, rotas e proteção do endpoint aprovadas (Google simulado).');
} finally {
  GoogleAuth.prototype.getClient = original;
  if (originalToken === undefined) delete process.env.GSC_API_TOKEN;
  else process.env.GSC_API_TOKEN = originalToken;
}
