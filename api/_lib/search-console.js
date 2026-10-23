import process from 'node:process';
import { GoogleAuth } from 'google-auth-library';

const scope = 'https://www.googleapis.com/auth/webmasters.readonly';

export function createSearchConsole(env = process.env) {
  const credentialJson = env.GSC_CREDENTIALS_JSON || env.GSC_SERVICE_ACCOUNT_JSON;
  const credentials = credentialJson ? JSON.parse(credentialJson) : undefined;
  const auth = new GoogleAuth({
    credentials,
    keyFilename: credentials ? undefined : env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: [scope],
  });
  async function request(url, data) {
    const client = await auth.getClient();
    const response = await client.request({ url, method: data ? 'POST' : 'GET', data, timeout: 20000 });
    return response.data;
  }
  function sitePath() {
    if (!env.GSC_SITE_URL) throw new Error('Configure GSC_SITE_URL com a propriedade exata do Search Console.');
    return `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(env.GSC_SITE_URL)}`;
  }
  return {
    sites: () => request('https://www.googleapis.com/webmasters/v3/sites'),
    sitemaps: () => request(`${sitePath()}/sitemaps`),
    performance: ({ startDate, endDate, dimensions = ['date'], rowLimit = 1000, startRow = 0, dataState = 'final' }) => {
      const validDate = (value) => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)
        && Number.isFinite(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
      if (!validDate(startDate) || !validDate(endDate) || startDate > endDate) {
        throw new Error('Informe datas válidas YYYY-MM-DD, com início anterior ou igual ao fim.');
      }
      const allowed = new Set(['date', 'page', 'query', 'country', 'device', 'searchAppearance']);
      if (!Array.isArray(dimensions) || dimensions.some((d) => !allowed.has(d))
        || new Set(dimensions).size !== dimensions.length) throw new Error('Dimensões inválidas.');
      if (!Number.isInteger(rowLimit) || rowLimit < 1 || rowLimit > 25000) throw new Error('rowLimit deve estar entre 1 e 25000.');
      if (!Number.isInteger(startRow) || startRow < 0) throw new Error('startRow deve ser um inteiro maior ou igual a zero.');
      if (!['final', 'all'].includes(dataState)) throw new Error('dataState deve ser final ou all.');
      return request(`${sitePath()}/searchAnalytics/query`, {
        startDate, endDate, dimensions, rowLimit, startRow, dataState,
      });
    },
    inspect: (inspectionUrl) => {
      sitePath();
      const url = new URL(inspectionUrl);
      if (!['https:', 'http:'].includes(url.protocol)) throw new Error('URL inválida.');
      return request('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
        inspectionUrl: url.href, siteUrl: env.GSC_SITE_URL, languageCode: 'pt-BR',
      });
    },
  };
}
