export const editorialSources = {
  googleHelpful: { label: 'Google Search Central — conteúdo útil, confiável e feito para pessoas', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
  googleAI: { label: 'Google Search Central — otimização para recursos de busca com IA', url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide' },
  googleAIContent: { label: 'Google Search Central — orientação sobre conteúdo criado com IA', url: 'https://developers.google.com/search/docs/fundamentals/using-gen-ai-content' },
  dora: { label: 'DORA — State of AI-assisted Software Development 2025', url: 'https://dora.dev/research/2025/dora-report/' },
  github: { label: 'GitHub Research — impacto da IA na experiência de desenvolvimento', url: 'https://github.blog/news-insights/research/survey-reveals-ais-impact-on-the-developer-experience/' },
  nist: { label: 'NIST — AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
  owasp: { label: 'OWASP — Top 10 for Large Language Model Applications', url: 'https://genai.owasp.org/llm-top-10/' },
  anpd: { label: 'ANPD — materiais educativos e orientações sobre proteção de dados', url: 'https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes' },
  meta: { label: 'Meta — visão geral da WhatsApp Business Platform', url: 'https://developers.facebook.com/docs/whatsapp/overview/' },
  metaCloud: { label: 'Meta — documentação da WhatsApp Cloud API', url: 'https://developers.facebook.com/docs/whatsapp/cloud-api/' },
  geoPaper: { label: 'ACM KDD — Generative Engine Optimization', url: 'https://dl.acm.org/doi/10.1145/3637528.3671900' },
  geoAura: { label: 'GeoAura — hub de recursos sobre Generative Engine Optimization', url: 'https://geoaura.world/' },
  cetic: { label: 'Cetic.br/NIC.br — TIC Empresas 2025', url: 'https://nic.br/publicacao/resumo-executivo-pesquisa-sobre-o-uso-das-tecnologias-de-informacao-e-comunicacao-nas-empresas-brasileiras-tic-empresas-2025/' },
  sebrae: { label: 'Sebrae — Inteligência Artificial para Pequenos Negócios', url: 'https://pa.loja.sebrae.com.br/inteligencia-artificial-para-pequenos-negocios' },
  sebraePracticalAI: { label: 'Sebrae — IA para Pequenos Negócios: exemplos práticos', url: 'https://sebrae.com.br/file_source/Sebrae/Portal%20Sebrae/UFs/MS/Anexos/2026/IA%20para%20Pequenos%20Nego%CC%81cios.pdf' },
  salesforceSales: { label: 'Salesforce Research — State of Sales 2026', url: 'https://www.salesforce.com/sales/state-of-sales/' },
  openAIBots: { label: 'OpenAI — documentação oficial dos crawlers', url: 'https://developers.openai.com/api/docs/bots' },
  anthropicBots: { label: 'Anthropic — documentação oficial dos crawlers', url: 'https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler' },
  perplexityBots: { label: 'Perplexity — documentação oficial dos crawlers', url: 'https://docs.perplexity.ai/docs/resources/perplexity-crawlers' },
};

const TODAY = '2026-09-22';

function list(values) {
  return values.filter(Boolean).join(', ');
}

export function createEditorialArticle(spec) {
  const metrics = list(spec.metrics);
  const risks = list(spec.risks);
  const decisions = list(spec.decisions);
  const integrations = list(spec.integrations);
  const deliverables = list(spec.deliverables);
  const audience = spec.audience || 'líderes e equipes responsáveis pela operação';
  const topicLabel = `${spec.topic.charAt(0).toLocaleUpperCase('pt-BR')}${spec.topic.slice(1)}`;
  const productContext = spec.productContext || 'A Tironi Tech pode transformar esse desenho em software, automação e integrações adequadas ao processo real da empresa.';

  return {
    slug: spec.slug,
    title: spec.title,
    description: spec.description,
    category: spec.category,
    date: TODAY,
    updated: TODAY,
    featured: Boolean(spec.featured),
    keywords: spec.keywords,
    intro: `${topicLabel} deixou de ser uma discussão abstrata para ${audience}. O ponto central não é adotar uma ferramenta porque ela está em evidência, mas entender como ${spec.problem.toLowerCase()} pode ser convertido em uma jornada mensurável, segura e sustentável. Este guia organiza conceitos, decisões, arquitetura, implantação e critérios de retorno para sair da intenção e chegar a uma operação que funciona.`,
    takeaways: [
      `Entender onde ${spec.topic.toLowerCase()} gera valor e onde apenas adiciona complexidade.`,
      `Transformar ${spec.problem.toLowerCase()} em um processo com início, responsável e resultado verificável.`,
      `Escolher tecnologia a partir de ${decisions.toLowerCase()}, e não de uma lista de tendências.`,
      `Medir ${metrics.toLowerCase()} para decidir o que manter, corrigir ou ampliar.`,
      `Controlar ${risks.toLowerCase()} desde o desenho, sem deixar governança para o final.`
    ],
    sections: [
      {
        heading: `${topicLabel}: resposta direta para quem precisa decidir`,
        paragraphs: [
          `${spec.definition} Na prática, isso significa ligar uma necessidade concreta a dados, regras, pessoas e sistemas. Uma solução só merece o nome de produto quando continua útil depois da demonstração, consegue lidar com exceções e deixa claro quem responde pelo resultado.`,
          `Para ${audience}, a primeira decisão é delimitar o trabalho. ${spec.problem} não deve ser tratado como uma única tarefa ampla. Ele precisa ser dividido em momentos observáveis, entradas confiáveis, decisões autorizadas e uma saída que outra pessoa ou sistema consiga usar.`,
          `${spec.uniqueInsight} Essa perspectiva evita dois extremos: continuar executando manualmente um fluxo que já pode ser organizado ou investir em uma automação ampla demais, que parece avançada mas não resolve a etapa que concentra espera, erro ou perda de oportunidade.`
        ]
      },
      {
        heading: 'Por que esse tema ganhou urgência nos tempos de IA',
        paragraphs: [
          `A inteligência artificial reduziu o custo de interpretar linguagem, resumir documentos, classificar solicitações e preparar respostas. Ao mesmo tempo, aumentou a quantidade de opções e a velocidade com que soluções incompletas chegam ao mercado. A vantagem competitiva não vem de usar IA primeiro; vem de integrá-la a um processo que a empresa consegue governar.`,
          `${spec.marketContext} Esse cenário muda a pergunta de “qual ferramenta comprar?” para “qual capacidade precisamos construir?”. Capacidade inclui processo, dados, integração, conhecimento, segurança, acompanhamento e habilidade da equipe para corrigir a solução quando a realidade mudar.`,
          `A pesquisa DORA sobre desenvolvimento assistido por IA descreve a tecnologia como amplificadora das forças e fraquezas já existentes. O mesmo princípio vale aqui: se propriedade, feedback e qualidade estão claros, a IA acelera; se o processo é confuso, ela produz mais saídas para uma fila que já não funcionava.`
        ]
      },
      {
        heading: 'Diagnóstico: transforme a dor em um caso de uso verificável',
        paragraphs: [
          `Comece registrando volume, tempo, espera, retrabalho, erros, pessoas envolvidas e consequência do atraso. ${spec.diagnosis} Evite descrições genéricas como “melhorar eficiência”. Descreva o evento que inicia o fluxo, a condição que encerra e a mudança que o usuário deve perceber.`,
          `Mapeie pelo menos vinte casos recentes, incluindo situações simples, incompletas e excepcionais. O objetivo não é desenhar uma jornada idealizada, e sim descobrir onde a informação chega, por que ela para e como a equipe contorna o problema hoje. Esses atalhos revelam requisitos que raramente aparecem em uma reunião inicial.`,
          `Defina uma linha de base antes de alterar o processo. Se o objetivo é ${spec.outcome.toLowerCase()}, registre o desempenho atual com a mesma regra que será usada no piloto. Sem comparação, qualquer melhora vira opinião e qualquer falha pode ser atribuída à ferramenta sem evidência.`
        ]
      },
      {
        heading: 'Estratégia: escolha o menor sistema capaz de entregar o resultado',
        paragraphs: [
          `Nem toda etapa precisa de um modelo generativo. Use regras para decisões estáveis, busca para localizar informação, IA para interpretação e redação, integrações para executar e pessoas para julgamentos de maior impacto. O desenho mais confiável combina componentes com responsabilidades explícitas.`,
          `${spec.strategy} A arquitetura deve preservar a possibilidade de trocar um componente sem reconstruir toda a operação. Isso reduz dependência, facilita comparação de custo e permite evoluir conforme volume, risco e qualidade realmente observados.`,
          `Registre premissas: quantidade de usuários, frequência, fontes, idiomas, sistemas, tempo esperado e nível de revisão. Uma proposta responsável mostra o que já é conhecido, o que precisa de prova técnica e quais decisões serão tomadas depois do piloto.`
        ]
      },
      {
        heading: 'Arquitetura e componentes da solução',
        paragraphs: [
          `${spec.architecture} Organize o caminho dos dados do evento de entrada até o registro final. Cada fronteira precisa indicar formato, autenticação, validação, timeout e tratamento de erro. Quando a arquitetura cabe apenas em um desenho bonito, mas ninguém consegue descrever uma falha, ela ainda está incompleta.`,
          `As integrações mais relevantes neste cenário são ${integrations}. Defina qual sistema é a fonte oficial de cada informação. Copiar dados sem autoridade definida cria versões concorrentes; consultar o sistema correto no momento certo preserva atualidade e reduz conciliação manual.`,
          `Use identificadores, estados e operações idempotentes. O mesmo evento pode chegar duas vezes, uma API pode responder tarde e um usuário pode retomar depois. O software precisa reconhecer repetição, preservar contexto e continuar sem criar cadastros ou ações duplicadas.`
        ]
      },
      {
        heading: 'Dados, conhecimento e qualidade da informação',
        paragraphs: [
          `${spec.dataApproach} Faça inventário de origem, proprietário, validade, permissão e frequência de atualização. Uma base extensa e contraditória produz respostas piores do que uma coleção menor, revisada e conectada ao domínio correto.`,
          `Separe fatos, políticas, preferências e hipóteses. Fatos operacionais devem vir de sistemas atualizados; políticas precisam de versão e dono; preferências exigem consentimento e possibilidade de correção; hipóteses geradas pela IA não podem ser gravadas como verdade sem validação.`,
          `Crie um conjunto de exemplos representativos antes do lançamento. Inclua perguntas diferentes para o mesmo objetivo, dados ausentes, conflito, falta de permissão e situação sem resposta. Esse conjunto permite comparar versões e impede que uma melhoria aparente esconda regressões em casos importantes.`
        ]
      },
      {
        heading: 'Experiência do usuário e linguagem que ajuda a concluir',
        paragraphs: [
          `${spec.userExperience} O usuário precisa saber o que está acontecendo, qual informação é necessária e qual será o próximo passo. Clareza reduz abandono e também melhora a qualidade dos dados que alimentam o processo.`,
          `Prefira mensagens curtas quando existe uma ação imediata e explicações completas quando a decisão exige contexto. Ofereça saída, revisão e atendimento humano. Uma experiência eficiente não aprisiona a pessoa em um roteiro; ela organiza opções e reconhece quando o caso saiu do escopo.`,
          `Teste em dispositivos reais, diferentes velocidades de rede e com pessoas que não participaram do projeto. A equipe que desenhou o fluxo conhece atalhos invisíveis para novos usuários. Observação de uso revela rótulos, etapas e expectativas que precisam ser corrigidos.`
        ]
      },
      {
        heading: 'Segurança, privacidade e limites de autonomia',
        paragraphs: [
          `Os riscos centrais são ${risks}. Trate cada um como cenário de projeto, não como aviso genérico. Defina prevenção, detecção, resposta e responsável. Credenciais ficam fora de prompts e documentos; permissões seguem o menor privilégio; ações relevantes exigem validação proporcional ao impacto.`,
          `A LGPD exige atenção à finalidade, necessidade, transparência, segurança e direitos dos titulares quando há dados pessoais. Mapeie fornecedores, retenção, compartilhamento e acesso. Ambientes de teste não devem receber dados reais por conveniência quando amostras anonimizadas ou sintéticas atendem ao objetivo.`,
          `Em aplicações com modelos de linguagem, entradas e fontes externas são conteúdo não confiável. Controles de autorização devem existir fora do modelo. Registre decisões e permita interromper integrações rapidamente. Segurança efetiva limita o que uma falha consegue causar.`
        ]
      },
      {
        heading: 'Pessoas, papéis e governança operacional',
        paragraphs: [
          `Nomeie responsáveis por processo, conteúdo, tecnologia, segurança e resultado. Uma única pessoa pode acumular papéis em empresas menores, mas as responsabilidades ainda precisam estar claras. Sem dono, fontes envelhecem, exceções viram improviso e ninguém decide se uma métrica exige ação.`,
          `${spec.people} Treinamento precisa explicar o que o sistema faz, onde erra, como corrigir e quando assumir. A equipe não deve competir com a automação; ela deve receber contexto melhor e concentrar energia nas decisões que exigem experiência, negociação ou empatia.`,
          `Crie uma rotina de revisão com produto e operação. Analise dúvidas sem resposta, intervenções humanas, falhas, custo e resultados. A melhoria mais importante pode ser uma regra, um documento, uma integração ou a retirada de uma etapa — nem sempre um novo prompt.`
        ]
      },
      {
        heading: 'Plano de implantação em ciclos curtos',
        paragraphs: [
          `Na primeira fase, valide o problema, a linha de base e as fontes. Na segunda, construa uma jornada completa com os componentes mínimos. Na terceira, teste cenários reais e riscos. Na quarta, pilote com volume controlado. Só depois amplie usuários, canais ou autonomia.`,
          `${spec.implementation} Cada ciclo deve terminar com uma demonstração baseada em dados reais permitidos, lista de falhas e decisão objetiva. Entregas visíveis reduzem incerteza e permitem ajustar antes que a complexidade se espalhe para novas áreas.`,
          `Os entregáveis esperados são ${deliverables}. Documentação deve ajudar quem opera, não apenas quem desenvolve. Inclua dependências, credenciais por papel, rotinas, alertas, contingência e como atualizar conhecimento ou regras.`
        ]
      },
      {
        heading: 'Métricas, ROI e critérios de continuidade',
        paragraphs: [
          `Acompanhe ${metrics}. Defina fórmula, fonte, frequência e responsável por cada indicador. Volume isolado raramente prova resultado: mais mensagens podem significar adoção ou confusão; mais código pode significar entrega ou estoque de revisão.`,
          `Calcule retorno com benefícios e custos completos. Considere implantação, licenças, consumo, infraestrutura, suporte, revisão e manutenção. Compare com tempo economizado, capacidade adicional, conversão, erros evitados ou redução de espera. Explicite hipóteses e faça análise de sensibilidade.`,
          `${spec.measurement} O projeto continua quando melhora o indicador sem ultrapassar limites de qualidade, risco e custo. Se o piloto não prova a hipótese, use o aprendizado para reduzir escopo ou escolher outra abordagem. Interromper cedo uma ideia ruim também é retorno.`
        ]
      },
      {
        heading: 'Erros comuns que enfraquecem o projeto',
        paragraphs: [
          `O primeiro erro é começar pela ferramenta e procurar um problema depois. O segundo é automatizar um fluxo que ninguém consegue explicar. O terceiro é avaliar apenas exemplos fáceis. O quarto é não preparar transferência, contingência e manutenção. Esses erros criam uma boa apresentação e uma operação frágil.`,
          `${spec.commonMistake} Outro risco é tentar resolver todas as variações na primeira versão. Concentre o piloto no caminho que entrega maior aprendizagem e valor. Exceções críticas precisam de tratamento; possibilidades remotas podem permanecer com a equipe até existir volume que justifique automação.`,
          `Evite também palavras-chave e promessas artificiais na comunicação. Explique capacidade, limite e evidência. Confiança comercial duradoura nasce quando o visitante entende o problema melhor depois de ler e consegue tomar uma decisão, não quando encontra a mesma expressão repetida dezenas de vezes.`
        ]
      },
      {
        heading: 'Exemplo prático aplicado a uma empresa',
        paragraphs: [
          `${spec.example} O caso começa com um evento claro, consulta as fontes necessárias e termina com registro e próxima ação. Antes da mudança, a equipe depende de memória e troca manual; depois, recebe informação estruturada e consegue intervir nos pontos de maior valor.`,
          `O piloto usa um grupo, período e conjunto de casos definidos. A equipe compara o novo fluxo com a linha de base, observa exceções e registra correções. A solução não é declarada bem-sucedida porque respondeu a uma pergunta; ela precisa concluir a jornada com qualidade repetível.`,
          `Quando o caso se prova, componentes reutilizáveis podem atender outros fluxos: autenticação, conectores, observabilidade, base de conhecimento e gestão de permissões. A expansão preserva o núcleo validado e evita criar uma plataforma genérica antes de existir demanda.`
        ]
      },
      {
        heading: 'Como escolher uma empresa para desenvolver e operar a solução',
        paragraphs: [
          `Entregue o mesmo cenário aos fornecedores e compare entendimento, arquitetura, riscos, etapas, critérios de aceite e custo total. Peça exemplos de falhas reais e como foram corrigidas. Uma estimativa precisa demais antes da descoberta costuma esconder premissas que reaparecem como aditivo ou atraso.`,
          `Avalie capacidade de produto, software, dados, integrações, segurança e experiência. Pergunte quem participará da entrega, como conhecimento será transferido e quais ativos ficam acessíveis. A melhor parceira não promete que IA resolve tudo; ela mostra onde regras, integração e decisão humana são indispensáveis.`,
          `${productContext} A combinação entre diagnóstico e execução reduz o espaço entre uma recomendação estratégica e o sistema que precisa funcionar na rotina. O contrato deve prever evolução orientada por métricas, não apenas uma entrega congelada.`
        ]
      },
      {
        heading: 'Plano de ação para os próximos 90 dias',
        paragraphs: [
          `Nos primeiros trinta dias, escolha uma jornada, reúna casos, defina linha de base, inventarie fontes e confirme responsáveis. Entre os dias 31 e 60, construa o fluxo mínimo, conecte sistemas essenciais e execute testes de função, segurança e experiência. Entre os dias 61 e 90, pilote, meça e corrija antes de ampliar.`,
          `${spec.firstStep} Não espere ter todos os documentos perfeitos para começar, mas não use velocidade como desculpa para ignorar autoridade, privacidade ou critério de aceite. Um recorte pequeno e completo ensina mais do que uma plataforma grande com dados frágeis.`,
          `Ao final do ciclo, produza uma decisão executiva: expandir, ajustar, manter ou encerrar. Registre evidências, custos e próximos riscos. Esse hábito transforma inovação em gestão de portfólio e impede que pilotos se acumulem sem impacto ou responsabilidade.`
        ]
      },
      {
        heading: 'Checklist final antes de investir',
        paragraphs: [
          `Confirme se existe problema mensurável, dono, usuário, fonte, integração, limite e resultado. Verifique se ${decisions.toLowerCase()} estão documentados. Teste os riscos prioritários e a maneira como a equipe assume uma exceção.`,
          `Peça uma visão do custo completo, dos componentes substituíveis e do plano de suporte. Exija exemplos reais no teste, acesso à documentação e indicadores. Confira se a experiência explica automação, consentimento e próximo passo de forma compatível com o contexto.`,
          `${spec.conclusion} O objetivo não é acumular tecnologia; é criar uma capacidade que melhora a operação e pode evoluir com segurança. Quando problema, arquitetura, pessoas e métricas estão conectados, ${spec.topic.toLowerCase()} deixa de ser promessa e passa a ser parte verificável da estratégia.`
        ],
        bullets: spec.checklist
      }
    ],
    faqs: [
      {
        question: `O que é ${spec.topic.toLowerCase()}?`,
        answer: `${spec.definition} ${spec.uniqueInsight} O desenho correto combina processo, dados, tecnologia e responsabilidade para que a solução continue útil depois do piloto.`
      },
      {
        question: `Quanto custa um projeto relacionado a ${spec.topic.toLowerCase()}?`,
        answer: `O investimento depende do volume, das integrações, da qualidade das fontes, do nível de autonomia, dos riscos e do suporte necessário. Uma estimativa responsável começa por diagnóstico e escopo, separando implantação, licenças, consumo, infraestrutura e evolução.`
      },
      {
        question: `Como começar um projeto relacionado a ${spec.topic.toLowerCase()}?`,
        answer: `${spec.firstStep} Depois, construa uma jornada mínima completa, teste casos reais, pilote com volume controlado e compare ${metrics.toLowerCase()} com a linha de base antes de ampliar.`
      },
      {
        question: 'Como escolher uma parceira para este tipo de projeto?',
        answer: `Compare diagnóstico, arquitetura, equipe, integrações, segurança, critérios de aceite e custo total. Peça que cada fornecedora explique o mesmo cenário, as principais incertezas, como trata falhas e quais ativos, dados e documentos ficam acessíveis à contratante.`
      },
      {
        question: `Como medir o retorno de um projeto de ${spec.topic.toLowerCase()}?`,
        answer: `Registre a situação atual e acompanhe ${metrics.toLowerCase()}. Relacione benefícios a implantação, consumo, suporte e manutenção. O projeto deve melhorar o resultado sem ultrapassar limites de qualidade, risco ou custo definidos pela empresa.`
      }
    ],
    cta: spec.cta,
    sources: spec.sources
  };
}
