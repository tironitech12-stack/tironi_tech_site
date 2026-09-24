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
    "Sales Game": {
      challenge: "Transformar decisões de gestão comercial em uma experiência prática, competitiva e acessível em diferentes dispositivos.",
      result: "Um simulador lançado na web e no Android, com partidas locais e online para desenvolver análise, liderança e tomada de decisão comercial.",
    },
    "Sorteios xNaMai": {
      challenge: "Criar uma jornada de sorteio integrada ao e-commerce, com escolha de números, regras transparentes e acompanhamento pela conta do cliente.",
      result: "Uma plataforma responsiva que organiza participações, números e créditos, conectando campanha promocional e experiência de compra.",
    },
    MestreLead: {
      challenge: "Centralizar prospecção por e-mail, dados de leads, campanhas e acompanhamento comercial sem depender de ferramentas e controles dispersos.",
      result: "Um produto de outreach com campanhas, CRM, fila de envio, relatórios e ingestão de dados em uma operação centralizada.",
    },
    "BI Personalizado": {
      challenge: "Transformar dados de pedidos, produtos, clientes, vendedores, estoque e logística de diferentes operações em decisões confiáveis.",
      result: "Painéis sob medida com indicadores comerciais, retenção, LTV, qualidade dos dados e sincronização, adaptados às fontes e prioridades de cada cliente.",
    },
    "ProfitPilot Ads": {
      challenge: "Ajudar operações Shopify a conectar mídia paga, proteger orçamento e interpretar desempenho por lucro em vez de métricas isoladas.",
      result: "Um copiloto de anúncios com integração a Meta, Google e TikTok, checklist pré-publicação, guardrails de orçamento e painel orientado a conversão.",
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
    "Sales Game": { challenge: "Turn commercial management decisions into a practical, competitive experience available across devices.", result: "A web and Android simulator with local and online matches for developing analysis, leadership and commercial decision-making." },
    "Sorteios xNaMai": { challenge: "Create a raffle journey integrated with e-commerce, including number selection, transparent rules and account tracking.", result: "A responsive platform that organizes entries, numbers and credits while connecting the promotion to the shopping experience." },
    MestreLead: { challenge: "Centralize email outreach, lead data, campaigns and commercial follow-up without scattered tools and controls.", result: "An outreach product with campaigns, CRM, send queue, reports and data ingestion in one operation." },
    "BI Personalizado": { challenge: "Turn order, product, customer, sales, inventory and logistics data from different operations into reliable decisions.", result: "Custom dashboards covering commercial indicators, retention, LTV, data quality and synchronization, adapted to each client's sources and priorities." },
    "ProfitPilot Ads": { challenge: "Help Shopify operations connect paid media, protect budgets and read performance through profit rather than isolated metrics.", result: "An ads copilot integrating Meta, Google and TikTok with a preflight checklist, budget guardrails and a conversion-focused dashboard." },
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
    "Sales Game": { challenge: "Convertir decisiones de gestión comercial en una experiencia práctica, competitiva y disponible en diferentes dispositivos.", result: "Un simulador web y Android con partidas locales y online para desarrollar análisis, liderazgo y toma de decisiones comerciales." },
    "Sorteios xNaMai": { challenge: "Crear una experiencia de sorteo integrada al e-commerce, con selección de números, reglas claras y seguimiento desde la cuenta.", result: "Una plataforma responsiva que organiza participaciones, números y créditos, conectando la campaña con la experiencia de compra." },
    MestreLead: { challenge: "Centralizar prospección por correo, datos de leads, campañas y seguimiento comercial sin herramientas dispersas.", result: "Un producto de outreach con campañas, CRM, cola de envío, informes e ingestión de datos en una sola operación." },
    "BI Personalizado": { challenge: "Convertir datos de pedidos, productos, clientes, vendedores, inventario y logística en decisiones confiables.", result: "Paneles a medida con indicadores comerciales, retención, LTV, calidad de datos y sincronización, adaptados a cada cliente." },
    "ProfitPilot Ads": { challenge: "Ayudar a operaciones Shopify a conectar medios pagos, proteger presupuesto e interpretar el desempeño por rentabilidad.", result: "Un copiloto de anuncios integrado con Meta, Google y TikTok, checklist previo, guardrails de presupuesto y panel orientado a conversión." },
  },
};

export function getProjectStory(language, title) {
  const localized = stories[language] || stories.pt;
  return { labels: localized.labels, ...(localized[title] || {}) };
}
