import { blogArticles } from './blogArticles.js';

const categoryTranslations = {
  'Estratégia, adoção e transformação com IA': ['AI strategy, adoption and transformation', 'Estrategia, adopción y transformación con IA'],
  'Agentes de IA e Agentic AI': ['AI agents and agentic AI', 'Agentes de IA e IA agéntica'],
  'Chat IA, atendimento e Customer Experience': ['AI chat, service and customer experience', 'Chat con IA, atención y experiencia del cliente'],
  'IA para vendas, CRM e geração de leads': ['AI for sales, CRM and lead generation', 'IA para ventas, CRM y generación de leads'],
  'WhatsApp, IA e conversational commerce': ['WhatsApp, AI and conversational commerce', 'WhatsApp, IA y comercio conversacional'],
  'RAG, conhecimento corporativo e context engineering': ['RAG, enterprise knowledge and context engineering', 'RAG, conocimiento corporativo e ingeniería de contexto'],
  'IA no desenvolvimento de software': ['AI in software development', 'IA en el desarrollo de software'],
  'Automação de processos e operações': ['Process and operations automation', 'Automatización de procesos y operaciones'],
  'IA em marketing, aquisição e personalização': ['AI in marketing, acquisition and personalization', 'IA en marketing, adquisición y personalización'],
  'Governança, segurança e confiabilidade': ['Governance, security and reliability', 'Gobernanza, seguridad y confiabilidad'],
  'SaaS, produto e AI-native software': ['SaaS, product and AI-native software', 'SaaS, producto y software nativo de IA'],
  'Integrações com CRM, ERP e APIs': ['CRM, ERP and API integrations', 'Integraciones con CRM, ERP y APIs'],
  'IA no e-commerce e varejo': ['AI in ecommerce and retail', 'IA en comercio electrónico y retail'],
  'IA nas empresas brasileiras e PMEs': ['AI in Brazilian companies and SMBs', 'IA en empresas brasileñas y pymes'],
  'GEO, AEO e aparecer nas respostas das IAs': ['GEO, AEO and visibility in AI answers', 'GEO, AEO y visibilidad en respuestas de IA'],
  'MCP, tool use e interoperabilidade': ['MCP, tool use and interoperability', 'MCP, uso de herramientas e interoperabilidad'],
  'Voice AI e agentes de voz': ['Voice AI and voice agents', 'IA de voz y agentes de voz'],
  'ROI, custo e business case para IA': ['AI ROI, cost and business cases', 'ROI, costo y caso de negocio para IA'],
  'Vendas e crescimento': ['Sales and growth', 'Ventas y crecimiento'],
  'Prospecção e CRM': ['Prospecting and CRM', 'Prospección y CRM'],
  'Serviços de IA': ['AI services', 'Servicios de IA'],
  'IA para WhatsApp': ['AI for WhatsApp', 'IA para WhatsApp'],
  'ChatBô e atendimento': ['ChatBô and customer service', 'ChatBô y atención al cliente'],
  'Desenvolvimento com IA': ['AI-assisted development', 'Desarrollo con IA'],
  'Tecnologia para empresas': ['Business technology', 'Tecnología para empresas'],
  'Automação com IA': ['AI automation', 'Automatización con IA'],
  'Software personalizado': ['Custom software', 'Software a medida'],
  'GeoAura e GEO': ['GeoAura and GEO', 'GeoAura y GEO'],
  'SEO e GEO': ['SEO and GEO', 'SEO y GEO']
};

const phraseRules = {
  en: [
    ['quanto custa', 'how much does it cost'], ['como conseguir', 'how to acquire'], ['como aumentar', 'how to increase'], ['como reduzir', 'how to reduce'], ['como melhorar', 'how to improve'], ['como automatizar', 'how to automate'], ['como implementar', 'how to implement'], ['como escolher', 'how to choose'], ['como criar', 'how to build'], ['como vender', 'how to sell'], ['como gerar', 'how to generate'], ['como encontrar', 'how to find'], ['como integrar', 'how to integrate'], ['como estruturar', 'how to structure'], ['como montar', 'how to build'], ['como fazer', 'how to run'], ['inteligência artificial', 'artificial intelligence'], ['automação de processos', 'process automation'], ['automação comercial', 'sales automation'], ['software sob medida', 'custom software'], ['desenvolvimento de software', 'software development'], ['agente de ia', 'AI agent'], ['agentes de ia', 'AI agents'], ['atendimento ao cliente', 'customer service'], ['vendas pelo whatsapp', 'sales through WhatsApp'], ['para empresas', 'for companies'], ['empresa de', 'company for'], ['guia prático', 'practical guide'], ['estratégia', 'strategy'], ['implantação', 'implementation'], ['implementação', 'implementation'], ['custos', 'costs'], ['métricas', 'metrics'], ['retorno sobre investimento', 'return on investment'], ['comparativo', 'comparison'], ['erros comuns', 'common mistakes'], ['clientes', 'customers'], ['vendas', 'sales'], ['processos', 'processes'], ['atendimento', 'service'], ['produtividade', 'productivity'], ['faturamento', 'revenue'], ['lucro', 'profit'], ['empresa', 'company']
  ],
  es: [
    ['quanto custa', 'cuánto cuesta'], ['como conseguir', 'cómo conseguir'], ['como aumentar', 'cómo aumentar'], ['como reduzir', 'cómo reducir'], ['como melhorar', 'cómo mejorar'], ['como automatizar', 'cómo automatizar'], ['como implementar', 'cómo implementar'], ['como escolher', 'cómo elegir'], ['como criar', 'cómo crear'], ['como vender', 'cómo vender'], ['como gerar', 'cómo generar'], ['como encontrar', 'cómo encontrar'], ['como integrar', 'cómo integrar'], ['como estruturar', 'cómo estructurar'], ['como montar', 'cómo construir'], ['como fazer', 'cómo realizar'], ['inteligência artificial', 'inteligencia artificial'], ['automação de processos', 'automatización de procesos'], ['automação comercial', 'automatización comercial'], ['software sob medida', 'software a medida'], ['desenvolvimento de software', 'desarrollo de software'], ['agente de ia', 'agente de IA'], ['agentes de ia', 'agentes de IA'], ['atendimento ao cliente', 'atención al cliente'], ['vendas pelo whatsapp', 'ventas por WhatsApp'], ['para empresas', 'para empresas'], ['empresa de', 'empresa de'], ['guia prático', 'guía práctica'], ['estratégia', 'estrategia'], ['implantação', 'implementación'], ['implementação', 'implementación'], ['custos', 'costos'], ['métricas', 'métricas'], ['retorno sobre investimento', 'retorno de la inversión'], ['comparativo', 'comparación'], ['erros comuns', 'errores comunes'], ['clientes', 'clientes'], ['vendas', 'ventas'], ['processos', 'procesos'], ['atendimento', 'atención'], ['produtividade', 'productividad'], ['faturamento', 'facturación'], ['lucro', 'beneficio'], ['empresa', 'empresa']
  ]
};

const copy = {
  en: {
    locale: 'en', language: 'en', published: 'Published', updated: 'Updated', readTime: 'min read',
    category: (value) => categoryTranslations[value]?.[0] || `Business technology: ${value}`,
    referenceAnalysis: (a) => `What “${a.referenceTitle}” teaches companies about ${categoryTranslations[a.referenceCategory]?.[0] || a.referenceCategory}`,
    referenceGuide: (a) => `How to apply the ideas from “${a.referenceTitle}” in a company`,
    titlePrefix: 'Business guide',
    description: (topic) => `A clear, in-depth Tironi Tech guide to ${topic}, with strategy, architecture, implementation, risks, metrics and practical decisions.`,
    intro: (topic, category) => `${topic} is useful when leaders can connect it to a real decision in ${category}. This edition explains the subject in clear English and turns concepts into a measurable journey involving people, data, software and operating responsibility.`,
    takeaways: (topic) => [`Define the business problem behind ${topic}.`, 'Separate evidence, assumptions and recommendations.', 'Choose architecture according to data, risk and integration.', 'Run a complete pilot before expanding scope.', 'Measure business outcomes together with quality and cost.'],
    headings: ['Direct answer and decision context', 'Why the topic matters now', 'Evidence and source quality', 'Business diagnosis', 'Use-case selection', 'Data and knowledge foundations', 'Architecture and integrations', 'Security, privacy and governance', 'User experience and human oversight', 'Implementation roadmap', 'Testing and evaluation', 'Metrics, cost and return', 'Common mistakes', 'Tironi Tech application model'],
    sentences: [
      '{topic} should begin with a concrete event, a responsible owner and an observable outcome.', 'A tool is valuable only when it changes the full journey rather than producing an isolated answer.', 'Leaders should record the current baseline before changing process or technology.', 'The reference provides a starting point, while company data determines whether the idea applies.', 'Evidence must be read according to author, method, sample, date and declared limitations.', 'Commercial reports can reveal practices, but their claims should be checked against primary documentation.', 'A useful hypothesis states what will change, for whom, under which conditions and how it will be measured.', 'The smallest complete pilot includes input, decision, action, exception handling and a final record.', 'Rules handle stable decisions, AI interprets variable information and integrations execute approved actions.', 'CRM, ERP, WhatsApp, documents and APIs need explicit ownership and permission boundaries.', 'Every source needs provenance, validity, access control and a process for correcting conflicts.', 'Sensitive actions require stronger identity, confirmation, audit and human review.', 'Users should understand what the system did and how to correct or escalate a result.', 'Automation should preserve context when work moves from software to a person.', 'Implementation moves through discovery, technical proof, controlled pilot and production operation.', 'Each phase should end with evidence and a decision to continue, revise or stop.', 'Evaluation must include normal, incomplete, adversarial and failure cases.', 'Average quality can hide critical failures, so tests need segments and risk levels.', 'Return combines revenue, capacity, time and avoided loss with implementation and operating cost.', 'Volume is an activity metric; conversion, resolution, margin and cycle time are outcome metrics.', 'Tironi Tech designs software, ChatBô, agents and automations around the company process.', 'ChatBô connects conversations, qualification, CRM and human service without losing history.', 'GeoAura supports the visibility and structured knowledge needed for search and AI discovery.', 'A custom solution is justified when differentiation, integration or governance cannot fit a generic platform.', 'The team needs clear ownership for process, content, security, technology and business results.', 'Monitoring should show failures, interventions, cost, latency and the outcome of each journey.', 'A reliable architecture makes models and vendors replaceable instead of locking the process to one component.', 'The final decision should compare total cost, operational fit, risk and capacity to evolve.'
    ],
    faq: (topic) => [`What does ${topic} mean in practice?`, `How should a company start with ${topic}?`, `What data does ${topic} require?`, `How can the return of ${topic} be measured?`, 'How can Tironi Tech support the project?'],
    cta: { title: 'Turn the idea into an operating capability', text: 'Tironi Tech connects diagnosis, ChatBô, AI agents, automation and custom software to real processes and measurable outcomes.', label: 'Schedule a diagnosis' },
    visual: ['Problem', 'Evidence', 'System', 'Outcome']
  },
  es: {
    locale: 'es', language: 'es', published: 'Publicado', updated: 'Actualizado', readTime: 'min de lectura',
    category: (value) => categoryTranslations[value]?.[1] || `Tecnología empresarial: ${value}`,
    referenceAnalysis: (a) => `Qué enseña “${a.referenceTitle}” a las empresas sobre ${categoryTranslations[a.referenceCategory]?.[1] || a.referenceCategory}`,
    referenceGuide: (a) => `Cómo aplicar las ideas de “${a.referenceTitle}” en una empresa`,
    titlePrefix: 'Guía empresarial',
    description: (topic) => `Una guía clara y profunda de Tironi Tech sobre ${topic}, con estrategia, arquitectura, implementación, riesgos, métricas y decisiones prácticas.`,
    intro: (topic, category) => `${topic} resulta útil cuando los líderes pueden conectarlo con una decisión real en ${category}. Esta edición explica el tema en español claro y convierte los conceptos en un recorrido medible que integra personas, datos, software y responsabilidad operativa.`,
    takeaways: (topic) => [`Definir el problema empresarial detrás de ${topic}.`, 'Separar evidencia, hipótesis y recomendaciones.', 'Elegir la arquitectura según datos, riesgo e integración.', 'Ejecutar un piloto completo antes de ampliar el alcance.', 'Medir resultados de negocio junto con calidad y costo.'],
    headings: ['Respuesta directa y contexto de decisión', 'Por qué el tema importa ahora', 'Evidencia y calidad de las fuentes', 'Diagnóstico empresarial', 'Selección del caso de uso', 'Bases de datos y conocimiento', 'Arquitectura e integraciones', 'Seguridad, privacidad y gobernanza', 'Experiencia y supervisión humana', 'Hoja de ruta de implementación', 'Pruebas y evaluación', 'Métricas, costo y retorno', 'Errores comunes', 'Modelo de aplicación de Tironi Tech'],
    sentences: [
      '{topic} debe comenzar con un evento concreto, un responsable y un resultado observable.', 'Una herramienta solo crea valor cuando cambia el recorrido completo y no cuando produce una respuesta aislada.', 'Los líderes deben registrar la línea base antes de modificar el proceso o la tecnología.', 'La referencia ofrece un punto de partida, mientras que los datos de la empresa determinan si la idea se aplica.', 'La evidencia debe leerse considerando autor, método, muestra, fecha y limitaciones declaradas.', 'Los informes comerciales pueden mostrar prácticas, pero sus afirmaciones deben contrastarse con documentación primaria.', 'Una hipótesis útil indica qué cambiará, para quién, bajo qué condiciones y cómo se medirá.', 'El menor piloto completo incluye entrada, decisión, acción, tratamiento de excepciones y registro final.', 'Las reglas resuelven decisiones estables, la IA interpreta información variable y las integraciones ejecutan acciones autorizadas.', 'CRM, ERP, WhatsApp, documentos y APIs necesitan propietarios y límites de permiso explícitos.', 'Cada fuente requiere procedencia, vigencia, control de acceso y un proceso para corregir conflictos.', 'Las acciones sensibles requieren mayor identidad, confirmación, auditoría y revisión humana.', 'El usuario debe entender qué hizo el sistema y cómo corregir o escalar un resultado.', 'La automatización debe preservar el contexto cuando el trabajo pasa del software a una persona.', 'La implementación avanza por descubrimiento, prueba técnica, piloto controlado y operación productiva.', 'Cada fase debe terminar con evidencia y una decisión de continuar, revisar o detener.', 'La evaluación debe incluir casos normales, incompletos, adversariales y fallos de sistemas.', 'La calidad promedio puede ocultar fallos críticos, por lo que las pruebas necesitan segmentos y niveles de riesgo.', 'El retorno combina ingresos, capacidad, tiempo y pérdidas evitadas con costos de implantación y operación.', 'El volumen mide actividad; conversión, resolución, margen y ciclo miden resultados.', 'Tironi Tech diseña software, ChatBô, agentes y automatizaciones alrededor del proceso de la empresa.', 'ChatBô conecta conversaciones, calificación, CRM y atención humana sin perder el historial.', 'GeoAura apoya la visibilidad y el conocimiento estructurado necesarios para búsquedas y respuestas de IA.', 'Una solución a medida se justifica cuando la diferenciación, integración o gobernanza no cabe en una plataforma genérica.', 'El equipo necesita responsables claros de proceso, contenido, seguridad, tecnología y resultado empresarial.', 'El monitoreo debe mostrar fallos, intervenciones, costo, latencia y resultado de cada recorrido.', 'Una arquitectura confiable permite sustituir modelos y proveedores sin atar el proceso a un componente.', 'La decisión final debe comparar costo total, ajuste operativo, riesgo y capacidad de evolución.'
    ],
    faq: (topic) => [`¿Qué significa ${topic} en la práctica?`, `¿Cómo debe comenzar una empresa con ${topic}?`, `¿Qué datos requiere ${topic}?`, `¿Cómo se mide el retorno de ${topic}?`, '¿Cómo puede Tironi Tech apoyar el proyecto?'],
    cta: { title: 'Convierte la idea en una capacidad operativa', text: 'Tironi Tech conecta diagnóstico, ChatBô, agentes de IA, automatización y software a medida con procesos reales y resultados medibles.', label: 'Agendar un diagnóstico' },
    visual: ['Problema', 'Evidencia', 'Sistema', 'Resultado']
  }
};

function translatePhrase(value, locale) {
  let result = value.toLocaleLowerCase('pt-BR');
  for (const [from, to] of phraseRules[locale]) result = result.replaceAll(from, to);
  return `${result.charAt(0).toLocaleUpperCase(locale)}${result.slice(1)}`;
}

function fill(template, values) {
  return template.replaceAll('{topic}', values.topic).replaceAll('{category}', values.category);
}

function localizedParagraphs(languageCopy, topic, category, sectionIndex) {
  const bank = languageCopy.sentences;
  return Array.from({ length: 3 }, (_, paragraphIndex) => {
    const start = (sectionIndex * 7 + paragraphIndex * 5) % bank.length;
    return Array.from({ length: 5 }, (_, sentenceIndex) => fill(bank[(start + sentenceIndex) % bank.length], { topic, category })).join(' ');
  });
}

function localizeArticle(article, locale) {
  const languageCopy = copy[locale];
  const translatedSubject = article.referenceTitle || translatePhrase(article.keywords?.[0] || article.title, locale);
  const category = languageCopy.category(article.category);
  const title = article.referenceTitle
    ? (article.angleKey === 'analise-executiva' ? languageCopy.referenceAnalysis(article) : languageCopy.referenceGuide(article))
    : `${languageCopy.titlePrefix}: ${translatePhrase(article.title, locale)}`;
  const sections = languageCopy.headings.map((heading, index) => ({ heading, paragraphs: localizedParagraphs(languageCopy, translatedSubject, category, index) }));
  const faqQuestions = languageCopy.faq(translatedSubject);
  const genericAnswers = sections.slice(-5).map((section) => section.paragraphs[0]);
  return {
    ...article,
    locale,
    title,
    description: languageCopy.description(translatedSubject),
    category,
    intro: languageCopy.intro(translatedSubject, category),
    takeaways: languageCopy.takeaways(translatedSubject),
    sections,
    faqs: faqQuestions.map((question, index) => ({ question, answer: genericAnswers[index] })),
    keywords: [translatedSubject, category, 'Tironi Tech', 'ChatBô', locale === 'en' ? 'business AI' : 'IA para empresas'],
    cta: { ...languageCopy.cta, href: '/#contato' },
    visual: { type: article.visual?.type || 'flow', eyebrow: locale === 'en' ? 'TIRONI TECH VISUAL MAP' : 'MAPA VISUAL TIRONI TECH', title: translatedSubject, caption: languageCopy.description(translatedSubject), labels: languageCopy.visual },
    readTime: `${Math.max(8, Math.ceil([title, ...sections.flatMap((section) => section.paragraphs)].join(' ').split(/\s+/).length / 180))} ${languageCopy.readTime}`,
    translationKey: article.slug
  };
}

const localeCache = { pt: blogArticles };

export function getBlogArticlesForLocale(locale = 'pt') {
  if (locale === 'pt') return blogArticles;
  if (!localeCache[locale]) localeCache[locale] = blogArticles.map((article) => localizeArticle(article, locale));
  return localeCache[locale];
}

export function getBlogArticleForLocale(slug, locale = 'pt') {
  return getBlogArticlesForLocale(locale).find((article) => article.slug === slug);
}

export function getRelatedArticlesForLocale(article, locale = 'pt', limit = 3) {
  if (!article) return [];
  const articles = getBlogArticlesForLocale(locale);
  const terms = new Set([article.category, ...(article.keywords || [])].join(' ').toLocaleLowerCase(locale).split(/[^a-záàâãéêíóôõúçñ0-9]+/).filter((term) => term.length > 3));
  return articles.filter((candidate) => candidate.slug !== article.slug).map((candidate) => ({ candidate, score: [candidate.category, ...(candidate.keywords || [])].join(' ').toLocaleLowerCase(locale).split(/[^a-záàâãéêíóôõúçñ0-9]+/).reduce((score, term) => score + (terms.has(term) ? 1 : 0), 0) })).sort((a, b) => b.score - a.score).slice(0, limit).map(({ candidate }) => candidate);
}

export function formatLocalizedDate(date, locale = 'pt') {
  const localeName = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' }[locale] || 'pt-BR';
  return new Intl.DateTimeFormat(localeName, { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
}

export function localizedPath(slug, locale = 'pt') {
  return `${locale === 'pt' ? '' : `/${locale}`}/blog/${slug}`;
}
