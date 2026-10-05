export const HOME_SEO = {
  title: 'Tironi Tech | Transformação Empresarial, IA e Automação',
  description: 'A Tironi Tech entra na sua operação, analisa processos e dados, implementa melhorias com IA, automação e software e acompanha os resultados continuamente.',
};

export const CLUB_SEO = {
  title: 'Tironi Tech Club | Diagnóstico, execução e acompanhamento mensal',
  description: 'O Tironi Tech Club entra na operação, encontra o que trava o crescimento, implementa a melhoria e acompanha o indicador todo mês.',
};

export const BLOG_SEO = {
  pt: {
    title: 'Insights Tironi Tech | IA, automação e processos empresariais',
    description: 'Guias de inteligência artificial, automação de processos e atendimento. Quando o gargalo pede execução, o caminho é o Tironi Tech Club.',
  },
  en: {
    title: 'Tironi Tech Insights | AI, automation and business processes',
    description: 'Practical guides on artificial intelligence, process automation and customer service. Tironi Tech Club is the path when the bottleneck needs execution.',
  },
  es: {
    title: 'Insights Tironi Tech | IA, automatización y procesos empresariales',
    description: 'Guías de inteligencia artificial, automatización de procesos y atención. Cuando el cuello de botella pide ejecución, el camino es Tironi Tech Club.',
  },
};

export const HERO_OPTIONS = {
  pt: {
    headlines: [
      'Entramos no seu negócio para encontrar o que trava o crescimento — e fazer a mudança acontecer.',
      'Da análise à execução: evolução contínua para sua empresa, todos os meses.',
      'Entendemos sua operação, implementamos as melhorias e acompanhamos até virar resultado.',
    ],
    subheads: [
      'A Tironi Tech analisa processos e dados, define prioridades e implementa melhorias com automação, IA, software e acompanhamento contínuo.',
      'Nosso time entra na operação, organiza o que importa, constrói o que falta e acompanha os indicadores mês a mês.',
      'O Tironi Tech Club combina negócio, dados, processos e tecnologia para transformar gargalos em melhorias mensuráveis.',
    ],
  },
  en: {
    headlines: [
      'We step into your business to find what is holding growth back — and make the change happen.',
      'From analysis to execution: continuous evolution for your company, every month.',
      'We understand your operation, implement the improvements and stay until they become results.',
    ],
    subheads: [
      'Tironi Tech analyzes processes and data, sets priorities and implements improvements with automation, AI, software and ongoing follow-up.',
      'Our team steps into the operation, organizes what matters, builds what is missing and follows the indicators month after month.',
      'Tironi Tech Club combines business, data, processes and technology to turn bottlenecks into measurable improvements.',
    ],
  },
  es: {
    headlines: [
      'Entramos en tu negocio para encontrar lo que frena el crecimiento — y hacer que el cambio ocurra.',
      'Del análisis a la ejecución: evolución continua para tu empresa, todos los meses.',
      'Entendemos tu operación, implementamos las mejoras y acompañamos hasta que se vuelven resultado.',
    ],
    subheads: [
      'Tironi Tech analiza procesos y datos, define prioridades e implementa mejoras con automatización, IA, software y seguimiento continuo.',
      'Nuestro equipo entra en la operación, organiza lo que importa, construye lo que falta y acompaña los indicadores mes a mes.',
      'Tironi Tech Club combina negocio, datos, procesos y tecnología para convertir cuellos de botella en mejoras medibles.',
    ],
  },
};

export function diagnosticHref(interest = 'club', origin = 'site') {
  const params = new URLSearchParams({ interesse: interest, origem: origin });
  return `/formulario?${params.toString()}`;
}

const serviceLinks = {
  pt: [
    ['Software sob medida para empresas', '/software-sob-medida', 'Sistemas desenhados para o processo real, quando uma ferramenta pronta não acompanha a operação.'],
    ['Desenvolvimento de software sob medida', '/desenvolvimento-software-sob-medida', 'Projeto específico, com escopo próprio, quando a entrega pede dedicação além da rotina do Club.'],
    ['Automação de processos empresariais', '/automacao-processos-com-ia', 'Fluxos, integrações e rotinas que tiram retrabalho da operação.'],
    ['Inteligência artificial para empresas', '/empresa-inteligencia-artificial', 'IA aplicada a atendimento, análise e decisão, com limite e indicador.'],
    ['Consultoria de tecnologia para empresas', '/consultoria-ia-para-empresas', 'Priorização e plano executável, com quem também implementa.'],
    ['Empresa de automação com IA', '/empresa-automacao-com-ia', 'Automação conectada aos sistemas e às regras que a empresa já usa.'],
  ],
  en: [
    ['Custom software for companies', '/software-sob-medida', 'Systems shaped around the real process, when an off-the-shelf tool no longer fits.'],
    ['Custom software development', '/desenvolvimento-software-sob-medida', 'A dedicated project when the delivery needs scope beyond the Club routine.'],
    ['Business process automation', '/automacao-processos-com-ia', 'Flows, integrations and routines that remove repetitive work.'],
    ['Artificial intelligence for companies', '/empresa-inteligencia-artificial', 'AI applied to service, analysis and decisions, with limits and a metric.'],
    ['Technology consulting for companies', '/consultoria-ia-para-empresas', 'Prioritization and an executable plan, from a team that also implements.'],
    ['AI automation company', '/empresa-automacao-com-ia', 'Automation connected to the systems and rules the company already uses.'],
  ],
  es: [
    ['Software a medida para empresas', '/software-sob-medida', 'Sistemas diseñados para el proceso real, cuando una herramienta lista ya no alcanza.'],
    ['Desarrollo de software a medida', '/desenvolvimento-software-sob-medida', 'Un proyecto específico cuando la entrega pide alcance más allá de la rutina del Club.'],
    ['Automatización de procesos empresariales', '/automacao-processos-com-ia', 'Flujos, integraciones y rutinas que sacan el retrabajo de la operación.'],
    ['Inteligencia artificial para empresas', '/empresa-inteligencia-artificial', 'IA aplicada a atención, análisis y decisión, con límite e indicador.'],
    ['Consultoría de tecnología para empresas', '/consultoria-ia-para-empresas', 'Priorización y un plan ejecutable, con quien también implementa.'],
    ['Empresa de automatización con IA', '/empresa-automacao-com-ia', 'Automatización conectada a los sistemas y reglas que la empresa ya usa.'],
  ],
};

function pagesFor(language) {
  const links = serviceLinks[language];
  const copy = {
    pt: {
      method: {
        eyebrow: 'COMO FUNCIONA',
        title: 'Analisar, priorizar, implementar, medir e evoluir.',
        lead: 'O Tironi Tech Club é uma rotina mensal. Cada ciclo escolhe o que mais trava o crescimento, executa a mudança e confere se o indicador se moveu.',
        primaryLabel: 'Ver se o Club faz sentido',
        primaryHref: '/club',
        secondaryLabel: 'Agendar diagnóstico estratégico',
        secondaryHref: diagnosticHref('club', 'como-funciona'),
        seoTitle: 'Como funciona o Tironi Tech Club | Transformação contínua',
        seoDescription: 'O método da Tironi Tech: analisar a operação, priorizar, implementar melhorias com IA, automação e software, medir e evoluir todos os meses.',
        sections: [
          {
            type: 'steps',
            title: 'O ciclo que a empresa contrata',
            items: [
              ['Analisar', 'Entramos na operação e nos dados para ver onde se perde tempo, dinheiro ou controle.'],
              ['Priorizar', 'Escolhemos a frente que mais trava o crescimento, em vez de abrir várias frentes ao mesmo tempo.'],
              ['Implementar', 'Ajudamos a fazer a mudança: processo, automação, integração, ferramenta ou software.'],
              ['Medir', 'Acompanhamos o indicador combinado, não só a entrega da tarefa.'],
              ['Evoluir', 'O mês seguinte parte do que funcionou e do que ainda trava.'],
            ],
          },
          {
            type: 'cards',
            title: 'O que orienta cada decisão',
            items: [
              ['Negócio antes da tecnologia', 'Primeiro entendemos onde a operação perde tempo, dinheiro ou controle.'],
              ['Da análise à execução', 'Não entregamos um relatório e vamos embora. Ajudamos a implementar.'],
              ['Evolução contínua', 'Priorizar. Executar. Medir. Evoluir.'],
              ['Tecnologia como meio', 'Usamos IA, automação e software quando aceleram o resultado.'],
              ['Menos fragmentação', 'Estratégia, dados e execução na mesma direção.'],
            ],
          },
        ],
      },
      tools: {
        eyebrow: 'FERRAMENTAS',
        title: 'Tecnologia própria para acelerar a transformação.',
        lead: 'O Club não começa escolhendo software. Primeiro entendemos o problema. Quando uma ferramenta Tironi acelera a solução, ela entra no plano. O cliente compra evolução, não um pacote de sistemas.',
        primaryLabel: 'Descobrir quais ferramentas se aplicam',
        primaryHref: diagnosticHref('ferramentas', 'ferramentas'),
        secondaryLabel: 'Conhecer o Club',
        secondaryHref: '/club',
        seoTitle: 'Ferramentas Tironi | ChatBô, MestreLead, TironiControl e CRM',
        seoDescription: 'ChatBô, MestreLead, TironiControl e CRM Tironi aceleram a transformação. Entram no plano depois do diagnóstico, quando resolvem o problema certo.',
        sections: [
          {
            type: 'cards',
            title: 'Entram conforme o diagnóstico',
            items: [
              ['ChatBô', 'Atendimento e qualificação com IA. Organiza conversas, identifica oportunidades e conecta o atendimento ao processo comercial.', 'https://www.chatbo.com.br/'],
              ['MestreLead', 'Inteligência para prospecção e geração de oportunidades. Ajuda a encontrar, organizar e priorizar leads com mais contexto comercial.', '/resultados'],
              ['TironiControl', 'Gestão e decisão em um só lugar. Centraliza indicadores, financeiro, propostas, projetos e informações executivas.', diagnosticHref('ferramentas', 'tironicontrol')],
              ['CRM Tironi', 'Pipeline e relacionamento sem oportunidade esquecida. Centraliza histórico, etapas, follow-ups e próximas ações comerciais.', diagnosticHref('ferramentas', 'crm')],
            ],
          },
        ],
      },
      development: {
        eyebrow: 'DESENVOLVIMENTO',
        title: 'Software sob medida, como capacidade — não como a identidade inteira.',
        lead: 'Desenvolvimento continua forte: dentro do Club, quando a melhoria do mês pede sistema, e como projeto específico, quando o escopo é maior. Consultoria de transformação digital, automação de processos empresariais e inteligência artificial para empresas seguem no mesmo time.',
        primaryLabel: 'Falar sobre um projeto específico',
        primaryHref: diagnosticHref('desenvolvimento', 'desenvolvimento'),
        secondaryLabel: 'Ver o Club',
        secondaryHref: '/club',
        seoTitle: 'Desenvolvimento de software sob medida | Tironi Tech',
        seoDescription: 'Software sob medida para empresas, automação e inteligência artificial como capacidade de execução da Tironi Tech. Projetos específicos seguem com escopo próprio.',
        sections: [
          {
            type: 'prose',
            title: 'Quando o projeto sai da rotina do Club',
            paragraphs: [
              'Grandes integrações, dedicação exclusiva e construções extraordinárias seguem como projetos especiais, com escopo próprio. Isso protege a margem e evita vender hora como se hora fosse o produto.',
              'Se a necessidade é contínua — priorizar, executar e acompanhar — o caminho é o Club. Se a necessidade é um sistema delimitado, o caminho é um projeto de desenvolvimento.',
            ],
          },
          {
            type: 'links',
            title: 'Páginas já existentes desta vertical',
            items: links,
          },
        ],
      },
      results: {
        eyebrow: 'RESULTADOS',
        title: 'Execução que já virou operação.',
        lead: 'Cases, produtos e a experiência aplicada em vendas, processos e operação. Os números abaixo são os que o site já publica: experiência acumulada, projetos e soluções próprias.',
        primaryLabel: 'Agendar diagnóstico estratégico',
        primaryHref: diagnosticHref('club', 'resultados'),
        secondaryLabel: 'Ler os Insights',
        secondaryHref: '/blog',
        seoTitle: 'Resultados e cases | Tironi Tech',
        seoDescription: 'Cases e produtos da Tironi Tech: plataformas, automação, IA e operações digitais entregues para empresas.',
        showProjects: true,
        proof: [
          ['23+', 'anos de experiência acumulada'],
          ['150+', 'projetos para empresas'],
          ['50+', 'soluções e projetos próprios'],
        ],
        sections: [],
      },
    },
    en: {
      method: {
        eyebrow: 'HOW IT WORKS',
        title: 'Analyze, prioritize, implement, measure and evolve.',
        lead: 'Tironi Tech Club is a monthly routine. Each cycle chooses what is holding growth back, makes the change and checks whether the indicator moved.',
        primaryLabel: 'See if the Club fits',
        primaryHref: '/club',
        secondaryLabel: 'Schedule a strategic diagnosis',
        secondaryHref: diagnosticHref('club', 'como-funciona'),
        seoTitle: 'How Tironi Tech Club works | Continuous transformation',
        seoDescription: 'The Tironi Tech method: analyze the operation, prioritize, implement improvements with AI, automation and software, then measure and evolve every month.',
        sections: [
          {
            type: 'steps',
            title: 'The cycle you hire',
            items: [
              ['Analyze', 'We enter the operation and the data to see where time, money or control is lost.'],
              ['Prioritize', 'We choose the front that most holds growth back, instead of opening several at once.'],
              ['Implement', 'We help make the change: process, automation, integration, tool or software.'],
              ['Measure', 'We follow the agreed indicator, not only whether the task was delivered.'],
              ['Evolve', 'The next month starts from what worked and what still blocks progress.'],
            ],
          },
          {
            type: 'cards',
            title: 'What guides each decision',
            items: [
              ['Business before technology', 'First we understand where the operation loses time, money or control.'],
              ['From analysis to execution', 'We do not deliver a report and leave. We help implement.'],
              ['Continuous evolution', 'Prioritize. Execute. Measure. Evolve.'],
              ['Technology as a means', 'We use AI, automation and software when they speed up the result.'],
              ['Less fragmentation', 'Strategy, data and execution in the same direction.'],
            ],
          },
        ],
      },
      tools: {
        eyebrow: 'TOOLS',
        title: 'Proprietary technology that speeds up the transformation.',
        lead: 'The Club does not start by choosing software. We understand the problem first. When a Tironi tool speeds up the solution, it joins the plan. You buy evolution, not a bundle of systems.',
        primaryLabel: 'Find which tools apply',
        primaryHref: diagnosticHref('ferramentas', 'ferramentas'),
        secondaryLabel: 'Explore the Club',
        secondaryHref: '/club',
        seoTitle: 'Tironi tools | ChatBô, MestreLead, TironiControl and CRM',
        seoDescription: 'ChatBô, MestreLead, TironiControl and CRM Tironi speed up the transformation. They join the plan after diagnosis, when they solve the right problem.',
        sections: [
          {
            type: 'cards',
            title: 'They join after the diagnosis',
            items: [
              ['ChatBô', 'AI service and qualification. It organizes conversations, spots opportunities and connects service to the sales process.', 'https://www.chatbo.com.br/'],
              ['MestreLead', 'Intelligence for prospecting and opportunity generation. It helps find, organize and prioritize leads with more commercial context.', '/resultados'],
              ['TironiControl', 'Management and decisions in one place. It centralizes indicators, finance, proposals, projects and executive information.', diagnosticHref('ferramentas', 'tironicontrol')],
              ['CRM Tironi', 'Pipeline and relationships with no forgotten opportunity. It centralizes history, stages, follow-ups and next commercial actions.', diagnosticHref('ferramentas', 'crm')],
            ],
          },
        ],
      },
      development: {
        eyebrow: 'DEVELOPMENT',
        title: 'Custom software as a capability — not the whole identity.',
        lead: 'Development stays strong: inside the Club, when the month’s improvement needs a system, and as a specific project when the scope is larger. Digital transformation consulting, business process automation and artificial intelligence for companies stay with the same team.',
        primaryLabel: 'Talk about a specific project',
        primaryHref: diagnosticHref('desenvolvimento', 'desenvolvimento'),
        secondaryLabel: 'See the Club',
        secondaryHref: '/club',
        seoTitle: 'Custom software development | Tironi Tech',
        seoDescription: 'Custom software, automation and artificial intelligence as an execution capability of Tironi Tech. Specific projects keep their own scope.',
        sections: [
          {
            type: 'prose',
            title: 'When a project leaves the Club routine',
            paragraphs: [
              'Large integrations, dedicated capacity and extraordinary builds stay as special projects, with their own scope. That protects delivery and avoids selling hours as if hours were the product.',
              'If the need is continuous — prioritize, execute and follow up — the path is the Club. If the need is a bounded system, the path is a development project.',
            ],
          },
          {
            type: 'links',
            title: 'Existing pages in this vertical',
            items: links,
          },
        ],
      },
      results: {
        eyebrow: 'RESULTS',
        title: 'Execution that already became an operation.',
        lead: 'Cases, products and applied experience in sales, processes and operations. The figures below are the ones already published on the site.',
        primaryLabel: 'Schedule a strategic diagnosis',
        primaryHref: diagnosticHref('club', 'resultados'),
        secondaryLabel: 'Read Insights',
        secondaryHref: '/blog',
        seoTitle: 'Results and case studies | Tironi Tech',
        seoDescription: 'Tironi Tech cases and products: platforms, automation, AI and digital operations delivered for companies.',
        showProjects: true,
        proof: [
          ['23+', 'years of combined experience'],
          ['150+', 'business projects'],
          ['50+', 'proprietary solutions and products'],
        ],
        sections: [],
      },
    },
    es: {
      method: {
        eyebrow: 'CÓMO FUNCIONA',
        title: 'Analizar, priorizar, implementar, medir y evolucionar.',
        lead: 'Tironi Tech Club es una rutina mensual. Cada ciclo elige lo que más frena el crecimiento, ejecuta el cambio y comprueba si el indicador se movió.',
        primaryLabel: 'Ver si el Club tiene sentido',
        primaryHref: '/club',
        secondaryLabel: 'Agendar diagnóstico estratégico',
        secondaryHref: diagnosticHref('club', 'como-funciona'),
        seoTitle: 'Cómo funciona Tironi Tech Club | Transformación continua',
        seoDescription: 'El método de Tironi Tech: analizar la operación, priorizar, implementar mejoras con IA, automatización y software, medir y evolucionar cada mes.',
        sections: [
          {
            type: 'steps',
            title: 'El ciclo que la empresa contrata',
            items: [
              ['Analizar', 'Entramos en la operación y en los datos para ver dónde se pierde tiempo, dinero o control.'],
              ['Priorizar', 'Elegimos el frente que más frena el crecimiento, en lugar de abrir varios a la vez.'],
              ['Implementar', 'Ayudamos a hacer el cambio: proceso, automatización, integración, herramienta o software.'],
              ['Medir', 'Acompañamos el indicador acordado, no solo si la tarea se entregó.'],
              ['Evolucionar', 'El mes siguiente parte de lo que funcionó y de lo que todavía traba.'],
            ],
          },
          {
            type: 'cards',
            title: 'Qué orienta cada decisión',
            items: [
              ['Negocio antes que tecnología', 'Primero entendemos dónde la operación pierde tiempo, dinero o control.'],
              ['Del análisis a la ejecución', 'No entregamos un informe y nos vamos. Ayudamos a implementar.'],
              ['Evolución continua', 'Priorizar. Ejecutar. Medir. Evolucionar.'],
              ['Tecnología como medio', 'Usamos IA, automatización y software cuando aceleran el resultado.'],
              ['Menos fragmentación', 'Estrategia, datos y ejecución en la misma dirección.'],
            ],
          },
        ],
      },
      tools: {
        eyebrow: 'HERRAMIENTAS',
        title: 'Tecnología propia para acelerar la transformación.',
        lead: 'El Club no empieza eligiendo software. Primero entendemos el problema. Cuando una herramienta Tironi acelera la solución, entra en el plan. El cliente compra evolución, no un paquete de sistemas.',
        primaryLabel: 'Descubrir qué herramientas aplican',
        primaryHref: diagnosticHref('ferramentas', 'ferramentas'),
        secondaryLabel: 'Conocer el Club',
        secondaryHref: '/club',
        seoTitle: 'Herramientas Tironi | ChatBô, MestreLead, TironiControl y CRM',
        seoDescription: 'ChatBô, MestreLead, TironiControl y CRM Tironi aceleran la transformación. Entran en el plan después del diagnóstico, cuando resuelven el problema correcto.',
        sections: [
          {
            type: 'cards',
            title: 'Entran según el diagnóstico',
            items: [
              ['ChatBô', 'Atención y calificación con IA. Organiza conversaciones, identifica oportunidades y conecta la atención al proceso comercial.', 'https://www.chatbo.com.br/'],
              ['MestreLead', 'Inteligencia para prospección y generación de oportunidades. Ayuda a encontrar, organizar y priorizar leads con más contexto comercial.', '/resultados'],
              ['TironiControl', 'Gestión y decisión en un solo lugar. Centraliza indicadores, finanzas, propuestas, proyectos e información ejecutiva.', diagnosticHref('ferramentas', 'tironicontrol')],
              ['CRM Tironi', 'Pipeline y relación sin oportunidad olvidada. Centraliza historial, etapas, seguimientos y próximas acciones comerciales.', diagnosticHref('ferramentas', 'crm')],
            ],
          },
        ],
      },
      development: {
        eyebrow: 'DESARROLLO',
        title: 'Software a medida, como capacidad — no como toda la identidad.',
        lead: 'El desarrollo sigue siendo fuerte: dentro del Club, cuando la mejora del mes pide un sistema, y como proyecto específico cuando el alcance es mayor. Consultoría de transformación digital, automatización de procesos e inteligencia artificial para empresas siguen en el mismo equipo.',
        primaryLabel: 'Hablar de un proyecto específico',
        primaryHref: diagnosticHref('desenvolvimento', 'desenvolvimento'),
        secondaryLabel: 'Ver el Club',
        secondaryHref: '/club',
        seoTitle: 'Desarrollo de software a medida | Tironi Tech',
        seoDescription: 'Software a medida, automatización e inteligencia artificial como capacidad de ejecución de Tironi Tech. Los proyectos específicos mantienen su propio alcance.',
        sections: [
          {
            type: 'prose',
            title: 'Cuándo el proyecto sale de la rutina del Club',
            paragraphs: [
              'Las grandes integraciones, la dedicación exclusiva y las construcciones extraordinarias siguen como proyectos especiales, con alcance propio.',
              'Si la necesidad es continua — priorizar, ejecutar y acompañar — el camino es el Club. Si la necesidad es un sistema delimitado, el camino es un proyecto de desarrollo.',
            ],
          },
          {
            type: 'links',
            title: 'Páginas ya existentes de esta vertical',
            items: links,
          },
        ],
      },
      results: {
        eyebrow: 'RESULTADOS',
        title: 'Ejecución que ya se volvió operación.',
        lead: 'Casos, productos y experiencia aplicada en ventas, procesos y operación. Las cifras de abajo son las que el sitio ya publica.',
        primaryLabel: 'Agendar diagnóstico estratégico',
        primaryHref: diagnosticHref('club', 'resultados'),
        secondaryLabel: 'Leer Insights',
        secondaryHref: '/blog',
        seoTitle: 'Resultados y casos | Tironi Tech',
        seoDescription: 'Casos y productos de Tironi Tech: plataformas, automatización, IA y operaciones digitales entregadas a empresas.',
        showProjects: true,
        proof: [
          ['23+', 'años de experiencia acumulada'],
          ['150+', 'proyectos para empresas'],
          ['50+', 'soluciones y proyectos propios'],
        ],
        sections: [],
      },
    },
  }[language];

  return copy;
}

const sharedHome = {
  pt: {
    pillarsEyebrow: 'O QUE A EMPRESA CONTRATA',
    pillarsTitle: 'Analisa, implementa e acompanha.',
    pillars: [
      ['Negócio antes da tecnologia', 'Primeiro entendemos onde sua operação perde tempo, dinheiro ou controle.'],
      ['Da análise à execução', 'Não entregamos um relatório e vamos embora. Ajudamos a implementar.'],
      ['Evolução contínua', 'Priorizar. Executar. Medir. Evoluir. Todos os meses.'],
      ['Tecnologia como meio', 'Usamos IA, automação e software quando aceleram o resultado.'],
      ['Menos fragmentação', 'Estratégia, dados e execução na mesma direção.'],
    ],
    toolsEyebrow: 'TECNOLOGIA PRÓPRIA',
    toolsTitle: 'Ferramentas que aceleram a transformação.',
    toolsLead: 'Elas entram depois do diagnóstico, quando resolvem a frente prioritária. O produto principal continua sendo o Club.',
    toolsCta: 'Descobrir quais ferramentas se aplicam',
    cycleLabel: 'Ciclo mensal',
  },
  en: {
    pillarsEyebrow: 'WHAT YOU HIRE',
    pillarsTitle: 'We analyze, implement and stay.',
    pillars: [
      ['Business before technology', 'First we understand where your operation loses time, money or control.'],
      ['From analysis to execution', 'We do not deliver a report and leave. We help implement.'],
      ['Continuous evolution', 'Prioritize. Execute. Measure. Evolve. Every month.'],
      ['Technology as a means', 'We use AI, automation and software when they speed up the result.'],
      ['Less fragmentation', 'Strategy, data and execution in the same direction.'],
    ],
    toolsEyebrow: 'PROPRIETARY TECHNOLOGY',
    toolsTitle: 'Tools that speed up the transformation.',
    toolsLead: 'They join after the diagnosis, when they solve the priority front. The main offer remains the Club.',
    toolsCta: 'Find which tools apply',
    cycleLabel: 'Monthly cycle',
  },
  es: {
    pillarsEyebrow: 'LO QUE LA EMPRESA CONTRATA',
    pillarsTitle: 'Analiza, implementa y acompaña.',
    pillars: [
      ['Negocio antes que tecnología', 'Primero entendemos dónde tu operación pierde tiempo, dinero o control.'],
      ['Del análisis a la ejecución', 'No entregamos un informe y nos vamos. Ayudamos a implementar.'],
      ['Evolución continua', 'Priorizar. Ejecutar. Medir. Evolucionar. Todos los meses.'],
      ['Tecnología como medio', 'Usamos IA, automatización y software cuando aceleran el resultado.'],
      ['Menos fragmentación', 'Estrategia, datos y ejecución en la misma dirección.'],
    ],
    toolsEyebrow: 'TECNOLOGÍA PROPIA',
    toolsTitle: 'Herramientas que aceleran la transformación.',
    toolsLead: 'Entran después del diagnóstico, cuando resuelven el frente prioritario. La oferta principal sigue siendo el Club.',
    toolsCta: 'Descubrir qué herramientas aplican',
    cycleLabel: 'Ciclo mensual',
  },
};

export const OFFER_PAGE_KEYS = ['method', 'tools', 'development', 'results'];

export const positioningContent = {
  pt: { ...sharedHome.pt, pages: pagesFor('pt') },
  en: { ...sharedHome.en, pages: pagesFor('en') },
  es: { ...sharedHome.es, pages: pagesFor('es') },
};

export function getPositioning(language = 'pt') {
  return positioningContent[language] || positioningContent.pt;
}

export function getOfferPageKey(pathname = '/') {
  const clean = pathname.replace(/\/$/, '') || '/';
  const match = {
    '/como-funciona': 'method',
    '/ferramentas': 'tools',
    '/desenvolvimento': 'development',
    '/resultados': 'results',
  };
  return match[clean] || null;
}

export const INTEREST_OPTIONS = [
  ['club', 'Tironi Tech Club'],
  ['desenvolvimento', 'Desenvolvimento de um projeto específico'],
  ['ferramentas', 'Ferramentas da Tironi'],
  ['automacao', 'Automação de processos empresariais'],
  ['ia', 'Inteligência artificial para empresas'],
  ['outro', 'Outro assunto'],
];

export function interestLabel(key) {
  return INTEREST_OPTIONS.find(([optionKey]) => optionKey === key)?.[1] || '';
}
