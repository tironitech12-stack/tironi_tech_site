import { corporateOverrides } from '../content/corporateOverrides.js';
import { HOME_SEO } from '../content/positioning.js';
import { createPageSchema, SITE_URL } from './siteSchema.js';

export const homeProjectUrls = {
  SignGuard: 'https://www.walletsignguard.com/',
  DeleteActPro: 'https://www.deleteactpro.com/',
  'Sales Game': 'https://www.salesgame.com.br/',
  'Sorteios xNaMai': 'https://www.sorteiosxnamai.com.br/',
  'ProfitPilot Ads': 'https://www.profitpilotads.com/',
};

export function createHomeSchema() {
  return createPageSchema({
    ...HOME_SEO,
    path: '/',
    pageData: {
      hasPart: corporateOverrides.pt.featuredProjects.items.map((project) => ({
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        url: homeProjectUrls[project.title] || `${SITE_URL}/#projetos`,
        creator: { '@id': `${SITE_URL}/#organization` },
      })),
    },
  });
}
