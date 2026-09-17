const stories = {
  pt: {
    labels: { challenge: "Desafio", solution: "Solução construída", result: "Resultado entregue" },
    SignGuard: {
      challenge: "Interações com carteiras cripto expõem usuários a permissões, assinaturas e transações difíceis de interpretar.",
      result: "Uma camada de decisão mais clara antes da confirmação, reforçando a percepção de segurança e a confiança no produto.",
    },
    DeleteActPro: {
      challenge: "Rotinas regulatórias de privacidade exigem volume, evidências e rastreabilidade sem depender de controles manuais frágeis.",
      result: "Um processo estruturado para ingestão, deleções encadeadas e registros auditáveis, preparado para evoluir com a operação.",
    },
    "Sorteios NewStore": {
      challenge: "Reservas, compradores, pagamentos e administração precisam funcionar juntos para evitar perda de controle durante os sorteios.",
      result: "Uma operação centralizada com visão administrativa, organização dos participantes e acompanhamento do fluxo em um único sistema.",
    },
  },
  en: {
    labels: { challenge: "Challenge", solution: "Solution built", result: "Outcome delivered" },
    SignGuard: {
      challenge: "Crypto wallet interactions expose users to permissions, signatures and transactions that are difficult to interpret.",
      result: "A clearer decision layer before confirmation, strengthening perceived security and trust in the product.",
    },
    DeleteActPro: {
      challenge: "Privacy regulation workflows require volume, evidence and traceability without relying on fragile manual controls.",
      result: "A structured process for ingestion, cascading deletions and auditable records, ready to evolve with the operation.",
    },
    "Sorteios NewStore": {
      challenge: "Reservations, buyers, payments and administration must work together to keep raffle operations under control.",
      result: "A centralized operation with administrative visibility, participant organization and flow tracking in one system.",
    },
  },
  es: {
    labels: { challenge: "Desafío", solution: "Solución construida", result: "Resultado entregado" },
    SignGuard: {
      challenge: "Las interacciones con billeteras cripto exponen a los usuarios a permisos, firmas y transacciones difíciles de interpretar.",
      result: "Una capa de decisión más clara antes de confirmar, fortaleciendo la percepción de seguridad y la confianza en el producto.",
    },
    DeleteActPro: {
      challenge: "Los flujos regulatorios de privacidad requieren volumen, evidencias y trazabilidad sin depender de controles manuales frágiles.",
      result: "Un proceso estructurado para ingestión, eliminaciones encadenadas y registros auditables, preparado para evolucionar con la operación.",
    },
    "Sorteios NewStore": {
      challenge: "Reservas, compradores, pagos y administración deben funcionar juntos para mantener el control de los sorteos.",
      result: "Una operación centralizada con visión administrativa, organización de participantes y seguimiento del flujo en un solo sistema.",
    },
  },
};

export function getProjectStory(language, title) {
  const localized = stories[language] || stories.pt;
  return { labels: localized.labels, ...(localized[title] || {}) };
}
