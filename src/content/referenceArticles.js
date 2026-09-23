import { createEditorialArticle, editorialSources as s } from './articleFactory.js';
import { referenceLibrary } from './referenceLibrary.js';

const slugify = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 72);
const dateFromIndex = (index) => {
  const date = new Date(Date.UTC(2026, 8, 20));
  date.setUTCDate(date.getUTCDate() - Math.floor(index / 2));
  return date.toISOString().slice(0, 10);
};

const unavailableReferenceUrls = new Set([
  'https://keebai.com/en/blog/conversational-commerce-whatsapp-en',
  'https://kai-waehner.de/landscapes/process-intelligence-landscape-2026-kai-waehner.pdf',
  'https://www.cratorlabs.ai/blog/building-ai-agents-on-top-of-erpnext',
  'https://crmsolid.com/mcp',
  'https://callease.ai/industries/insurance/',
  'https://botphonic.ai/ai-call-center-statistics-and-insights/',
  'https://www.omrglobal.com/press-release/total-cost-of-ownership-tco-for-ai'
]);

const shared = {
  audience: 'líderes, gestores e equipes que precisam avaliar tendências de IA sem separar tecnologia de resultado empresarial',
  decisions: ['relevância da evidência', 'aderência ao processo', 'dados', 'arquitetura', 'risco', 'adoção e retorno'],
  integrations: ['CRM', 'ERP', 'WhatsApp', 'bases de conhecimento', 'APIs e ferramentas operacionais'],
  risks: ['generalização indevida', 'fonte comercial tratada como consenso', 'piloto sem métrica', 'integração incompleta e dependência'],
  metrics: ['tempo até valor', 'adoção', 'qualidade', 'custo total', 'resultado operacional e retorno'],
  deliverables: ['síntese crítica', 'mapa de oportunidade', 'arquitetura', 'piloto', 'avaliações', 'indicadores e plano de evolução'],
  strategy: 'Separe observação, hipótese e recomendação; depois teste a ideia no processo real com uma linha de base e critérios de continuidade.',
  architecture: 'A solução deve separar experiência, regras, dados, modelos, integrações e observabilidade para que cada componente possa ser validado e substituído.',
  dataApproach: 'Toda fonte precisa de origem, proprietário, permissão, validade e tratamento de conflito antes de orientar uma decisão ou ação.',
  userExperience: 'Usuários precisam entender o que a solução fez, revisar quando necessário e chegar a uma pessoa sem perder o contexto.',
  people: 'Negócio, operação, tecnologia, segurança e usuários compartilham hipóteses e revisam evidências do piloto.',
  implementation: 'Descoberta, prova técnica, piloto e produção são fases distintas, cada uma com perguntas e critérios próprios.',
  measurement: 'O resultado é comparado com a situação anterior e acompanhado por contramétricas de qualidade, custo, risco e experiência.',
  commonMistake: 'Repetir uma tendência sem verificar fonte, universo, método e aderência ao contexto brasileiro transforma pesquisa em argumento de venda.',
  firstStep: 'Leia a referência original, identifique o tipo de evidência e escolha uma hipótese pequena que possa ser testada com dados reais.',
  productContext: 'A Tironi Tech transforma conhecimento em ChatBô, agentes, automações, integrações e software sob medida, sempre ligados a uma operação mensurável.',
  checklist: ['Fonte original consultada', 'Tipo de evidência identificado', 'Hipótese e linha de base definidas', 'Dados e riscos revisados', 'Piloto completo delimitado', 'Critérios de continuidade documentados'],
  cta: { title: 'Quer transformar pesquisa em uma aplicação real de IA?', text: 'A Tironi Tech conecta diagnóstico, ChatBô, agentes, automação e software sob medida ao processo e às métricas da sua empresa.', label: 'Agendar diagnóstico', href: '/#contato' }
};

const angles = [
  {
    key: 'analise-executiva',
    title: (reference) => `O que “${reference.title}” ensina sobre ${reference.category}`,
    problem: (reference) => `interpretar a referência “${reference.title}” com senso crítico e relacioná-la às decisões de ${reference.category.toLowerCase()}`,
    insight: 'Uma referência relevante abre perguntas e oferece evidências; ela não substitui diagnóstico, contexto nem teste dentro da empresa.',
    outcome: 'extrair decisões úteis da pesquisa sem copiar conclusões fora de contexto',
    visual: 'matrix'
  },
  {
    key: 'guia-aplicacao',
    title: (reference) => `Como aplicar as ideias de “${reference.title}” em uma empresa`,
    problem: (reference) => `converter os conceitos de “${reference.title}” em uma hipótese, um piloto e uma rotina operacional`,
    insight: 'Aplicação responsável começa pela menor jornada completa capaz de provar valor, qualidade e viabilidade ao mesmo tempo.',
    outcome: 'levar uma ideia da referência até um piloto empresarial controlado',
    visual: 'architecture'
  }
];

export const referenceCategories = [...new Set(referenceLibrary.map((reference) => reference.category))];

export const referenceArticles = referenceLibrary.flatMap((reference, referenceIndex) => angles.map((angle, angleIndex) => {
  const globalIndex = referenceIndex * angles.length + angleIndex;
  const previousOccurrences = referenceLibrary.slice(0, referenceIndex).filter((candidate) => candidate.title === reference.title).length;
  const referenceUnavailable = unavailableReferenceUrls.has(reference.url);
  const referenceEdition = previousOccurrences ? { ...reference, title: `${reference.title} — leitura complementar da referência ${referenceIndex + 1}` } : reference;
  const title = angle.title(referenceEdition);
  return {
    ...createEditorialArticle({
      ...shared,
      category: reference.category,
      slug: `pesquisa-${String(referenceIndex + 1).padStart(3, '0')}-${slugify(reference.title)}-${angle.key}`,
      title,
      topic: reference.title,
      problem: angle.problem(referenceEdition),
      definition: `“${referenceEdition.title}” é uma referência associada ao campo de ${reference.category.toLowerCase()} e deve ser lida considerando autoria, método, data, escopo e interesse institucional.${previousOccurrences ? ' A lista de origem contém outra entrada com o mesmo título; esta leitura verifica a fonte específica e evita repetir a análise anterior.' : ''}${referenceUnavailable ? ' O endereço informado na bibliografia retornou indisponível durante a revisão editorial; por isso, ele orienta o tema, mas não é usado como evidência ou citação.' : ''}`,
      uniqueInsight: angle.insight,
      marketContext: `A produção sobre ${reference.category.toLowerCase()} cresceu com a adoção empresarial de IA, reunindo pesquisa acadêmica, documentação técnica, relatórios, estudos de fornecedores e análises comerciais.`,
      diagnosis: `Verifique qual pergunta a referência responde, que evidência apresenta, quais limites declara e o que ainda precisa ser validado no contexto da empresa.`,
      outcome: angle.outcome,
      description: `${title}. Análise crítica em português, com implicações empresariais, arquitetura, riscos, métricas e um caminho de aplicação pela Tironi Tech.`,
      keywords: [referenceEdition.title, reference.category, 'pesquisa inteligência artificial', 'Tironi Tech', 'IA para empresas'],
      featured: referenceIndex < 9 && angleIndex === 0,
      date: dateFromIndex(globalIndex),
      updated: '2026-09-22',
      example: `Uma empresa lê “${referenceEdition.title}”, separa evidência de recomendação e escolhe um processo ligado a ${reference.category.toLowerCase()} para testar uma hipótese com usuários, integração e métrica de negócio.`,
      conclusion: `A contribuição de “${referenceEdition.title}” aumenta quando a empresa a transforma em perguntas verificáveis. A Tironi Tech pode converter esse aprendizado em diagnóstico, software, ChatBô, agentes e automações que funcionam na operação.`,
      sources: [...(referenceUnavailable ? [] : [{ label: reference.title, url: reference.url }]), s.nist, s.owasp, s.anpd, s.googleHelpful],
      visual: { type: angle.visual, eyebrow: `REFERÊNCIA ${String(referenceIndex + 1).padStart(3, '0')} · TIRONI TECH`, title: angleIndex === 0 ? 'Da referência à decisão' : 'Da ideia ao piloto', caption: `Leitura aplicada de “${referenceEdition.title}” para empresas.`, labels: angleIndex === 0 ? ['Fonte', 'Evidência', 'Contexto', 'Decisão'] : ['Hipótese', 'Piloto', 'Métrica', 'Evolução'] }
    }),
    referenceTitle: referenceEdition.title,
    referenceCategory: reference.category,
    referenceUrl: reference.url,
    angleKey: angle.key
  };
}));
