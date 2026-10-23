// Only match specific intents; unrelated editorial content keeps its existing CTA.
const serviceRules = [
  [/automacao.*whatsapp|automatizar.*whatsapp|whatsapp.*automat/, 'automacao-whatsapp-com-ia', 'Automação de WhatsApp com IA', 'Automatize atendimento, qualificação e acompanhamento sem perder contexto nem controle humano.'],
  [/agentes?-de-ia|agente-ia-(?!whatsapp)|agentic|multiagente/, 'agentes-de-ia-para-empresas', 'Agentes de IA para empresas', 'Conecte conhecimento, ferramentas e sistemas com permissões, avaliação e supervisão humana.'],
  [/whatsapp|chatbot|chatbo|atendimento-multiequipe/, 'agente-ia-whatsapp', 'Agente de IA para WhatsApp', 'Organize triagem, contexto e transferência para a equipe no atendimento da sua empresa.'],
  [/software|integrac|api-|erp|saas|reconciliacao-dados|onboarding-cliente/, 'software-sob-medida', 'Software sob medida para empresas', 'Conecte sistemas e regras do seu processo em uma solução desenhada para a operação.'],
  [/consultoria|implementar-ia|implementacao-de-ia|avaliacao-fornecedor-ia/, 'consultoria-ia-para-empresas', 'Consultoria de IA para empresas', 'Avalie viabilidade, dados e critérios de aceite antes de escolher a primeira implantação.'],
  [/automacao|automatizar|automatizo/, 'automacao-processos-com-ia', 'Automação de processos com IA', 'Mapeie tarefas, exceções e integrações para automatizar um fluxo completo.'],
];

export function articleServiceFor(slug) {
  if (slug.startsWith('pesquisa-')) return null;
  const rule = serviceRules.find(([pattern]) => pattern.test(slug));
  return rule ? { href: `/${rule[1]}`, label: rule[2], description: rule[3] } : null;
}
