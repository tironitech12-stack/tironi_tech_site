import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createSearchConsole } from '../api/_lib/search-console.js';

const gsc = createSearchConsole();
const siteUrl = process.env.GSC_SITE_URL;
const endDate = process.env.GSC_END_DATE || new Date(Date.now() - (3 * 86400000)).toISOString().slice(0, 10);

function shift(date, days) {
  const value = new Date(`${date}T12:00:00Z`);
  value.setUTCDate(value.getUTCDate() + days);
  return value.toISOString().slice(0, 10);
}

const startDate = process.env.GSC_START_DATE || shift(endDate, -487);
const outputDir = path.resolve('artifacts/search-console', endDate);
await fs.mkdir(outputDir, { recursive: true });

async function fetchAll(dimensions, from = startDate, to = endDate) {
  const rows = [];
  const rowLimit = 25000;
  for (let startRow = 0; startRow < 100000; startRow += rowLimit) {
    const response = await gsc.performance({
      startDate: from, endDate: to, dimensions, rowLimit, startRow,
    });
    const page = response.rows || [];
    rows.push(...page);
    if (page.length < rowLimit) break;
  }
  return rows;
}

function totals(rows) {
  return rows.reduce((acc, row) => ({
    clicks: acc.clicks + (row.clicks || 0),
    impressions: acc.impressions + (row.impressions || 0),
  }), { clicks: 0, impressions: 0 });
}

function aggregateMetrics(rows) {
  const base = totals(rows);
  return {
    ...base,
    ctr: base.impressions ? base.clicks / base.impressions : 0,
    position: rows.length === 1 ? (rows[0].position || 0) : null,
  };
}

function period(days, offset = 0) {
  const to = shift(endDate, -offset);
  return { startDate: shift(to, -(days - 1)), endDate: to };
}

const ranges = {
  full: { startDate, endDate },
  last28: period(28),
  previous28: period(28, 28),
  last90: period(90),
  previous90: period(90, 90),
};

const [sitemaps, fullAggregate, dates, queries, pages, countries, devices, appearances, pageQueries] = await Promise.all([
  gsc.sitemaps(),
  fetchAll([]),
  fetchAll(['date']),
  fetchAll(['query']),
  fetchAll(['page']),
  fetchAll(['country']),
  fetchAll(['device']),
  fetchAll(['searchAppearance']),
  fetchAll(['page', 'query']),
]);

const comparisons = {};
for (const [name, range] of Object.entries(ranges)) {
  const rows = await fetchAll([], range.startDate, range.endDate);
  comparisons[name] = { ...range, ...aggregateMetrics(rows) };
}

let sitemapUrls = [];
let sitemapFetchError = null;
try {
  const sitemapResponse = await fetch('https://www.tironitech.com/sitemap.xml');
  if (!sitemapResponse.ok) throw new Error(`HTTP ${sitemapResponse.status}`);
  const xml = await sitemapResponse.text();
  sitemapUrls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
} catch (error) {
  sitemapFetchError = error.message;
}

const fixedPriorityUrls = [
  'https://www.tironitech.com/',
  'https://www.tironitech.com/software-sob-medida',
  'https://www.tironitech.com/agente-ia-whatsapp',
  'https://www.tironitech.com/agentes-de-ia-para-empresas',
  'https://www.tironitech.com/automacao-whatsapp-com-ia',
];
const inspectionUrls = [...new Set([...fixedPriorityUrls, ...pages.slice(0, 15).map((row) => row.keys?.[0]).filter(Boolean)])].slice(0, 20);
const inspections = [];
for (const url of inspectionUrls) {
  try {
    const response = await gsc.inspect(url);
    inspections.push({ url, result: response.inspectionResult || response });
  } catch (error) {
    inspections.push({ url, error: error.response?.status ? `HTTP ${error.response.status}` : error.message });
  }
}

const raw = {
  generatedAt: new Date().toISOString(),
  siteUrl,
  ranges,
  comparisons,
  sitemaps,
  sitemap: { urlCount: sitemapUrls.length, fetchError: sitemapFetchError, urls: sitemapUrls },
  searchAnalytics: {
    aggregate: fullAggregate,
    dates,
    queries,
    pages,
    countries,
    devices,
    searchAppearances: appearances,
    pageQueries,
  },
  inspections,
};

await fs.writeFile(path.join(outputDir, 'search-console-data.json'), `${JSON.stringify(raw, null, 2)}\n`);

function csv(rows, dimensions) {
  const header = [...dimensions, 'clicks', 'impressions', 'ctr', 'position'];
  const escape = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
  return [header, ...rows.map((row) => [...(row.keys || []), row.clicks, row.impressions, row.ctr, row.position])]
    .map((row) => row.map(escape).join(','))
    .join('\n');
}

for (const [name, rows, dimensions] of [
  ['dates', dates, ['date']], ['queries', queries, ['query']], ['pages', pages, ['page']],
  ['countries', countries, ['country']], ['devices', devices, ['device']],
  ['search-appearances', appearances, ['searchAppearance']], ['page-queries', pageQueries, ['page', 'query']],
]) {
  await fs.writeFile(path.join(outputDir, `${name}.csv`), `${csv(rows, dimensions)}\n`);
}

function pct(value) { return `${(100 * (value || 0)).toFixed(2)}%`; }
function number(value) { return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(value || 0); }
function delta(current, previous) {
  if (!previous) return current ? 'novo' : '0%';
  return pct((current - previous) / previous);
}
function tableRows(rows, label, limit = 20) {
  return rows.slice(0, limit).map((row) => `| ${String(row.keys?.[0] || '').replaceAll('|', '\\|')} | ${number(row.clicks)} | ${number(row.impressions)} | ${pct(row.ctr)} | ${number(row.position)} |`).join('\n');
}

const last28 = comparisons.last28;
const previous28 = comparisons.previous28;
const zeroClickOpportunities = queries.filter((row) => row.clicks === 0 && row.impressions >= 3 && row.position <= 30)
  .sort((a, b) => b.impressions - a.impressions);
const lowCtrPages = pages.filter((row) => row.impressions >= 10 && row.ctr < 0.02)
  .sort((a, b) => b.impressions - a.impressions);
const indexedCounts = inspections.reduce((acc, item) => {
  const verdict = item.result?.indexStatusResult?.verdict || item.error || 'UNKNOWN';
  acc[verdict] = (acc[verdict] || 0) + 1;
  return acc;
}, {});

const report = `# Diagnóstico do Google Search Console — ${endDate}

Dados finais consultados por API para \`${siteUrl}\`, de ${startDate} a ${endDate}. Os CSVs e o JSON integral desta coleta estão em \`${path.relative(process.cwd(), outputDir).replaceAll('\\', '/')}\`.

## Resumo executivo

- Últimos 28 dias: **${number(last28.clicks)} cliques**, **${number(last28.impressions)} impressões**, CTR de **${pct(last28.ctr)}** e posição média de **${number(last28.position)}**.
- Variação contra os 28 dias anteriores: cliques **${delta(last28.clicks, previous28.clicks)}** e impressões **${delta(last28.impressions, previous28.impressions)}**.
- Período completo disponível: **${number(comparisons.full.clicks)} cliques** e **${number(comparisons.full.impressions)} impressões**.
- Sitemap público: **${number(sitemapUrls.length)} URLs**; relatório da API: ${JSON.stringify(sitemaps.sitemap?.map((item) => ({ path: item.path, submitted: item.contents?.[0]?.submitted, indexed: item.contents?.[0]?.indexed, errors: item.errors, warnings: item.warnings })) || [])}.
- Inspeção de ${inspections.length} URLs prioritárias: ${JSON.stringify(indexedCounts)}.

## Consultas com oportunidade

Consultas com pelo menos três impressões, zero clique e posição média até 30.

| Consulta | Cliques | Impressões | CTR | Posição |
|---|---:|---:|---:|---:|
${tableRows(zeroClickOpportunities, 'query') || '| Nenhuma no recorte | 0 | 0 | 0% | 0 |'}

## Páginas com CTR abaixo de 2%

| Página | Cliques | Impressões | CTR | Posição |
|---|---:|---:|---:|---:|
${tableRows(lowCtrPages, 'page') || '| Nenhuma no recorte | 0 | 0 | 0% | 0 |'}

## Páginas com maior visibilidade

| Página | Cliques | Impressões | CTR | Posição |
|---|---:|---:|---:|---:|
${tableRows(pages, 'page') || '| Sem dados | 0 | 0 | 0% | 0 |'}

## Próxima leitura

O relatório da API de Search Analytics entrega as linhas principais, não uma enumeração garantida de todas as linhas anônimas ou de baixa frequência. O relatório de cobertura de indexação não existe nessa API; os totais e motivos atuais devem ser registrados pela interface do Search Console e cruzados com as inspeções e o sitemap desta coleta.
`;

await fs.writeFile(path.join(outputDir, 'diagnostico.md'), report);
console.log(JSON.stringify({
  outputDir,
  comparisons,
  rowCounts: { dates: dates.length, queries: queries.length, pages: pages.length, countries: countries.length, devices: devices.length, appearances: appearances.length, pageQueries: pageQueries.length },
  sitemapUrls: sitemapUrls.length,
  inspections: indexedCounts,
  zeroClickOpportunities: zeroClickOpportunities.length,
  lowCtrPages: lowCtrPages.length,
}, null, 2));
