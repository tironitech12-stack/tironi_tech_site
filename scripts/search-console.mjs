import process from 'node:process';
import { createSearchConsole } from '../api/_lib/search-console.js';

const [action, ...args] = process.argv.slice(2);
const help = 'Uso: npm run gsc -- sites | sitemaps | performance INICIO FIM [page,query] [startRow] | inspect URL';
try {
  const gsc = createSearchConsole();
  let result;
  switch (action) {
    case 'sites': result = await gsc.sites(); break;
    case 'sitemaps': result = await gsc.sitemaps(); break;
    case 'performance': result = await gsc.performance({
      startDate: args[0],
      endDate: args[1],
      dimensions: args[2] ? args[2].split(',') : ['date'],
      rowLimit: 25000,
      startRow: args[3] ? Number(args[3]) : 0,
    }); break;
    case 'inspect': result = await gsc.inspect(args[0]); break;
    default: throw new Error(help);
  }
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  // Não imprimir objetos de erro do cliente HTTP: podem conter credenciais.
  const status = error.response?.status;
  console.error(status ? `Google Search Console respondeu HTTP ${status}. Confira API habilitada e permissões da conta.` :
    ['sites', 'sitemaps', 'performance', 'inspect'].includes(action)
      ? 'Consulta falhou. Confira argumentos, credenciais e GSC_SITE_URL. Consulte docs/seo/search-console-connection.md.' : help);
  process.exitCode = 1;
}
