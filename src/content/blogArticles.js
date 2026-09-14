const googleHelpful = { label: 'Google — conteúdo útil e confiável', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' };
const googleAI = { label: 'Google — otimização para recursos de busca com IA', url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide' };
const metaPlatform = { label: 'Meta — visão geral da WhatsApp Business Platform', url: 'https://developers.facebook.com/docs/whatsapp/overview/' };
const metaFlows = { label: 'Meta — mensagens interativas e WhatsApp Flows', url: 'https://developers.facebook.com/docs/whatsapp/guides/interactive-messages/' };
const cetic = { label: 'Cetic.br/NIC.br — TIC Empresas 2025', url: 'https://nic.br/publicacao/resumo-executivo-pesquisa-sobre-o-uso-das-tecnologias-de-informacao-e-comunicacao-nas-empresas-brasileiras-tic-empresas-2025/' };
const sebrae = { label: 'Sebrae — Inteligência Artificial para Pequenos Negócios', url: 'https://pa.loja.sebrae.com.br/inteligencia-artificial-para-pequenos-negocios' };
const geoPaper = { label: 'ACM KDD — GEO: Generative Engine Optimization', url: 'https://dl.acm.org/doi/10.1145/3637528.3671900' };

export const blogCategories = ['Todos', 'ChatBô e atendimento', 'Automação com IA', 'Software personalizado', 'SEO e GEO'];

const rawBlogArticles = [
  {
    slug: 'chatbot-com-ia-no-whatsapp-guia-completo',
    title: 'Chatbot com IA no WhatsApp: o guia completo para transformar conversas em vendas',
    description: 'Como estruturar atendimento, qualificação e acompanhamento de leads no canal mais presente na rotina do cliente brasileiro.',
    category: 'ChatBô e atendimento',
    date: '2026-09-14',
    updated: '2026-09-14',
    readTime: '14 min de leitura',
    featured: true,
    keywords: ['chatbot com IA', 'chatbot para WhatsApp', 'automação de atendimento', 'ChatBô'],
    intro: 'Muitas empresas não perdem vendas por falta de demanda. Elas perdem porque respondem tarde, fazem as mesmas perguntas manualmente e deixam o acompanhamento depender da memória da equipe. Um chatbot com IA bem implantado transforma esse gargalo em um processo comercial contínuo, mensurável e integrado.',
    takeaways: [
      'Comece pelo processo comercial, e não pela escolha da ferramenta.',
      'Automatize triagem, dúvidas recorrentes, coleta de dados e próximos passos.',
      'Defina claramente quando a conversa precisa chegar a uma pessoa.',
      'Meça tempo de resposta, avanço no funil, conversão e motivos de abandono.'
    ],
    sections: [
      { heading: 'O problema não é receber mensagens. É conduzir cada conversa.', paragraphs: [
        'O WhatsApp virou uma porta de entrada para orçamento, suporte, agendamento e compra. Quando todos esses pedidos chegam na mesma fila, o atendimento se torna reativo: a equipe procura informações, repete perguntas, transfere conversas sem contexto e responde primeiro a quem insistiu mais. O cliente sente demora; a gestão enxerga apenas uma quantidade de mensagens.',
        'Um chatbot com IA deve organizar essa jornada. Ele identifica a intenção, consulta o conhecimento autorizado da empresa, coleta os dados necessários e encaminha a próxima ação. A conversa deixa de ser um conjunto de respostas soltas e passa a operar como uma etapa do processo comercial.'
      ]},
      { heading: 'O que pode ser automatizado com segurança', paragraphs: [
        'As melhores primeiras automações são frequentes, previsíveis e fáceis de conferir. Isso inclui responder dúvidas sobre serviços, horários e políticas; apresentar opções; pedir cidade, necessidade e prazo; registrar o contato; encaminhar materiais; agendar uma conversa e informar o status de uma solicitação.',
        'A plataforma oficial do WhatsApp admite mensagens de texto, mídia e experiências interativas, além de integrações por API e webhooks. Na prática, isso permite conectar a conversa ao CRM, agenda, sistema interno ou banco de dados, respeitando as regras do canal e o consentimento do cliente.'
      ], bullets: ['Perguntas frequentes e orientação inicial', 'Qualificação de oportunidades', 'Agendamentos e confirmações', 'Registro e distribuição de leads', 'Lembretes e acompanhamento autorizado']},
      { heading: 'Menu rígido, chatbot e agente de IA não são a mesma coisa', paragraphs: [
        'Um menu tradicional funciona quando o cliente escolhe entre caminhos fixos. Um chatbot interpreta mensagens e mantém uma conversa dentro de regras definidas. Um agente de IA pode combinar linguagem natural, fontes de conhecimento e ações em sistemas. Quanto maior a autonomia, maior deve ser o cuidado com permissões, testes, registros e transferência para humanos.',
        'A escolha não precisa ser extrema. Muitas operações funcionam melhor em formato híbrido: botões para decisões críticas, IA para compreender a dúvida e integrações para executar tarefas. Esse desenho reduz ambiguidades sem obrigar o cliente a navegar por menus intermináveis.'
      ]},
      { heading: 'Como implantar sem automatizar a desorganização', paragraphs: [
        'Antes da tecnologia, mapeie de onde vem o contato, quais perguntas definem uma boa oportunidade, quem assume cada tipo de caso e qual informação precisa ser registrada. Revise as respostas oficiais e elimine contradições. Depois, construa um primeiro fluxo, teste com conversas reais anonimizadas e acompanhe falhas de entendimento.',
        'O ChatBô, produto da Tironi Tech, é indicado para empresas que querem transformar atendimento em processo: uma experiência conversacional alinhada ao negócio, com automações e evolução contínua. A implantação deve nascer das regras comerciais da empresa, e não de uma demonstração genérica.'
      ]},
      { heading: 'Indicadores que mostram se o projeto funciona', paragraphs: [
        'O número de mensagens não mede resultado. Acompanhe o tempo até a primeira resposta, a proporção de contatos qualificados, a taxa de conclusão do fluxo, o volume de transferências, os temas que a IA não resolveu e a conversão por origem. Compare períodos equivalentes e observe também a qualidade dos registros entregues à equipe.',
        'A meta é simples: responder melhor, preservar o contexto e liberar pessoas para negociações e situações que exigem julgamento. Quando o sistema aprende com as dúvidas reais e o processo é revisado, cada conversa ajuda a melhorar a próxima.'
      ]}
    ],
    cta: { title: 'Quer transformar seu WhatsApp em uma operação comercial?', text: 'Conheça o ChatBô e desenhe uma jornada de atendimento alinhada ao seu negócio.', label: 'Conhecer o ChatBô', href: 'https://www.chatbo.com.br/' },
    sources: [metaPlatform, metaFlows, cetic]
  },
  {
    slug: 'automacao-com-ia-por-onde-comecar',
    title: 'Automação com IA: por onde começar sem desperdiçar tempo e dinheiro',
    description: 'Um método prático para escolher processos, calcular prioridade e implantar automações que resolvem gargalos reais.',
    category: 'Automação com IA', date: '2026-09-12', updated: '2026-09-12', readTime: '12 min de leitura', featured: true,
    keywords: ['automação com IA', 'automação de processos', 'IA para empresas'],
    intro: 'A pergunta mais útil não é “onde podemos usar IA?”, mas “onde o trabalho está travando, repetindo ou perdendo informação?”. Essa mudança evita projetos vistosos que não alteram o resultado da empresa.',
    takeaways: ['Mapeie volume, repetição, tempo e impacto de cada processo.', 'Comece com uma automação pequena e mensurável.', 'Mantenha decisão humana nos casos de risco ou exceção.', 'Trate dados, integrações e responsáveis como parte do produto.'],
    sections: [
      { heading: 'Encontre a dor antes de escolher a tecnologia', paragraphs: ['Liste tarefas que consomem tempo toda semana: copiar informações, conferir documentos, responder perguntas, atualizar planilhas, montar relatórios ou perseguir aprovações. Para cada uma, registre frequência, duração, taxa de erro, pessoas envolvidas e consequência do atraso.', 'O melhor candidato costuma combinar alto volume, regras razoavelmente claras e impacto perceptível. Uma tarefa rara e complexa pode parecer interessante, mas normalmente exige mais exceções e oferece retorno mais lento.']},
      { heading: 'Use uma matriz simples de prioridade', paragraphs: ['Avalie cada oportunidade em quatro dimensões: ganho esperado, facilidade de integração, qualidade dos dados e risco de uma resposta errada. Processos com ganho alto, dados acessíveis e risco controlável formam a primeira onda. Os demais entram no plano conforme a empresa aprende.', 'A pesquisa TIC Empresas 2025 mostra que a automação de processos e fluxos de trabalho é o tipo de aplicação mais citado entre empresas brasileiras que já usam IA. Isso reforça uma direção prática: a adoção começa quando a tecnologia entra no trabalho cotidiano.'], bullets: ['Volume e horas consumidas', 'Erros, atrasos e retrabalho', 'Disponibilidade dos dados', 'Número de sistemas envolvidos', 'Risco financeiro, jurídico ou reputacional']},
      { heading: 'Desenhe o processo futuro', paragraphs: ['Automatizar exatamente o processo atual pode acelerar etapas desnecessárias. Remova aprovações duplicadas, defina um único registro confiável e determine o que deve acontecer em cada exceção. Só depois descreva o papel da IA: classificar, extrair, resumir, redigir, recomendar ou acionar outra ferramenta.', 'A automação precisa registrar o que fez, permitir revisão e informar quando não tem confiança suficiente. Em decisões relevantes, a IA prepara o contexto e uma pessoa confirma a ação.']},
      { heading: 'Faça um piloto com começo, fim e métrica', paragraphs: ['Escolha um fluxo, uma equipe e um período de comparação. Registre a situação anterior e defina um resultado observável, como reduzir o tempo de triagem, aumentar a completude dos cadastros ou eliminar etapas manuais. Um piloto sem linha de base vira apenas uma impressão.', 'A Tironi Tech desenvolve automações com IA conectadas aos sistemas e às regras de cada empresa. O trabalho combina diagnóstico, desenho de fluxo, integração e acompanhamento para que a solução continue útil depois da primeira entrega.']},
      { heading: 'Escale somente o que se provou confiável', paragraphs: ['Após o piloto, examine exceções, uso real e custo de manutenção. Documente quem responde pelo processo, quem atualiza fontes e como falhas serão tratadas. Escalar significa levar um padrão validado a mais volume ou novas áreas, preservando controle e qualidade.', 'A empresa não precisa automatizar tudo. Precisa automatizar aquilo que devolve tempo, melhora informação e torna a operação mais previsível.']}
    ],
    cta: { title: 'Existe um processo travando sua equipe?', text: 'Mapeamos o gargalo e construímos uma automação compatível com sua operação.', label: 'Conversar com a Tironi Tech', href: '/#contato' }, sources: [cetic, sebrae]
  },
  {
    slug: 'software-personalizado-ou-sistema-pronto',
    title: 'Software personalizado ou sistema pronto: qual escolha faz sentido para sua empresa?',
    description: 'Critérios objetivos para comparar velocidade, aderência, integração, custo total e vantagem competitiva.',
    category: 'Software personalizado', date: '2026-09-10', updated: '2026-09-10', readTime: '11 min de leitura', featured: true,
    keywords: ['software personalizado', 'software sob medida', 'sistema para empresas'],
    intro: 'Um sistema pronto resolve necessidades comuns com rapidez. Um software personalizado acompanha regras, integrações e diferenciais específicos. A decisão correta depende do processo que a empresa quer melhorar e do custo de continuar adaptando pessoas à ferramenta.',
    takeaways: ['Use software pronto para processos padronizados.', 'Considere software personalizado quando a regra do negócio é o diferencial.', 'Compare custo total, não apenas mensalidade ou desenvolvimento.', 'Planeje evolução, suporte, segurança e propriedade dos dados.'],
    sections: [
      { heading: 'Quando um sistema pronto é a melhor decisão', paragraphs: ['Ferramentas consolidadas funcionam bem para e-mail, documentos, finanças básicas, gestão de tarefas e outras rotinas compartilhadas por muitas empresas. Elas reduzem o tempo de implantação e distribuem o custo de evolução entre vários clientes.', 'Se o processo pode se adaptar sem perder eficiência ou diferenciação, comprar é mais racional do que construir. A equipe deve validar integrações, exportação de dados, permissões e suporte antes de contratar.']},
      { heading: 'Os sinais de que a empresa ultrapassou a ferramenta', paragraphs: ['O cenário muda quando a equipe mantém planilhas paralelas, copia dados entre sistemas, ignora campos que não representam a operação ou depende de tarefas manuais para fechar o fluxo. Também muda quando uma regra própria produz vantagem competitiva e não cabe no produto de mercado.', 'Nesse ponto, o custo invisível aparece em retrabalho, erros, espera e falta de visão gerencial. A mensalidade pode parecer baixa enquanto a operação paga diariamente pela falta de aderência.']},
      { heading: 'Como comparar o custo total', paragraphs: ['Some implantação, licenças, integrações, customizações, treinamento, horas manuais, retrabalho e custo de troca. Para software personalizado, inclua descoberta, desenvolvimento, infraestrutura, manutenção e evolução. Compare um horizonte de dois ou três anos, com hipóteses explícitas.', 'O objetivo não é provar que uma opção é sempre mais barata. É revelar qual delas sustenta o processo com menos atrito e risco ao longo do tempo.']},
      { heading: 'Uma terceira opção: integrar e complementar', paragraphs: ['Muitas empresas não precisam substituir todo o ambiente. Um software personalizado pode funcionar como camada entre CRM, ERP, atendimento e dados, automatizando apenas o trecho que falta. Essa abordagem preserva investimentos e entrega valor mais cedo.', 'A Tironi Tech trabalha com esse desenho progressivo: entender a operação, integrar o que já funciona e desenvolver os componentes que tornam o processo realmente próprio.']},
      { heading: 'Perguntas para tomar a decisão', paragraphs: ['O processo muda com frequência? Existem integrações críticas? A ferramenta pronta cobre a maior parte da necessidade sem planilhas paralelas? Os dados podem ser exportados? A experiência criada pelo sistema diferencia a empresa? Quem será responsável pela evolução?', 'Respostas claras transformam uma discussão abstrata em decisão de negócio. Software é infraestrutura para executar uma estratégia; sua qualidade deve ser medida pelo que permite fazer melhor.']}
    ], cta: { title: 'Seu processo não cabe nas ferramentas prontas?', text: 'Vamos desenhar uma solução que se adapte à empresa e possa evoluir com ela.', label: 'Iniciar um diagnóstico', href: '/#contato' }, sources: [cetic, sebrae]
  },
  {
    slug: 'como-automatizar-atendimento-sem-perder-humanidade',
    title: 'Como automatizar o atendimento sem perder humanidade',
    description: 'Princípios para usar IA com clareza, contexto e transferência humana nos momentos certos.',
    category: 'ChatBô e atendimento', date: '2026-09-08', updated: '2026-09-08', readTime: '10 min de leitura',
    keywords: ['automação de atendimento', 'atendimento humanizado', 'chatbot com IA'],
    intro: 'Atendimento humano não significa obrigar uma pessoa a responder toda pergunta. Significa reconhecer a necessidade do cliente, explicar o que está acontecendo e assumir responsabilidade quando o caso exige julgamento.',
    takeaways: ['Automatize a repetição e preserve o julgamento humano.', 'Informe claramente quando o cliente conversa com uma IA.', 'Transfira contexto completo, evitando que a pessoa repita tudo.', 'Use conversas reais para revisar linguagem e limites.'],
    sections: [
      { heading: 'O que faz um atendimento parecer frio', paragraphs: ['A frustração surge quando o sistema não compreende a intenção, bloqueia a saída, repete mensagens ou esconde como falar com alguém. O problema não é a automação em si; é uma jornada desenhada para reduzir esforço interno sem considerar o esforço do cliente.', 'Uma boa experiência confirma o pedido, usa linguagem simples, oferece escolhas úteis e mostra o próximo passo. Se não puder resolver, deve reconhecer o limite e encaminhar corretamente.']},
      { heading: 'Divida o trabalho pelo tipo de decisão', paragraphs: ['A IA pode localizar informações, resumir histórico, classificar pedidos, coletar dados e sugerir respostas. Pessoas devem assumir negociações sensíveis, exceções, conflitos, decisões financeiras relevantes e situações em que a confiança do modelo é baixa.', 'Essa divisão aumenta a disponibilidade sem retirar responsabilidade. A equipe recebe casos mais organizados e pode dedicar atenção ao que exige empatia e raciocínio.']},
      { heading: 'Contexto é parte do atendimento', paragraphs: ['Quando ocorre uma transferência, nome, intenção, respostas já fornecidas e documentos precisam acompanhar a conversa. Sem isso, o cliente repete a história e percebe a automação como barreira. Integrações com CRM e sistemas internos tornam o histórico acionável.', 'O ChatBô pode ser estruturado em torno dessa continuidade: entender, orientar, registrar e entregar o caso no ponto correto. O desenho deve respeitar as fontes aprovadas pela empresa e a identidade verbal da marca.']},
      { heading: 'Crie limites visíveis e rotas de saída', paragraphs: ['Defina assuntos proibidos, dados que não devem ser solicitados, frases de incerteza e condições de transferência. Mostre horários e expectativas quando o atendimento humano não estiver disponível. Uma resposta honesta é melhor do que uma certeza inventada.', 'Monitore conversas em que clientes reformulam várias vezes, abandonam o fluxo ou pedem uma pessoa. Esses sinais revelam onde o sistema está criando atrito.']},
      { heading: 'Humanidade também é resolver rápido', paragraphs: ['O cliente não deseja esperar por uma pessoa para receber horário de funcionamento ou confirmar um agendamento. Automatizar tarefas simples respeita o tempo dele e o da equipe. A experiência humana aparece na clareza, na consistência e no cuidado com exceções.', 'O resultado ideal combina disponibilidade da tecnologia com responsabilidade de pessoas que acompanham o processo e melhoram suas respostas.']}
    ], cta: { title: 'Atenda rápido sem tratar pessoas como protocolo.', text: 'Veja como o ChatBô combina inteligência, processo e continuidade no atendimento.', label: 'Conhecer o ChatBô', href: 'https://www.chatbo.com.br/' }, sources: [metaPlatform, metaFlows]
  },
  {
    slug: 'qualificacao-de-leads-no-whatsapp',
    title: 'Qualificação de leads no WhatsApp: perguntas, fluxo e automações que aumentam a eficiência comercial',
    description: 'Como coletar o contexto certo, priorizar oportunidades e entregar conversas prontas para o time de vendas.',
    category: 'ChatBô e atendimento', date: '2026-09-06', updated: '2026-09-06', readTime: '12 min de leitura',
    keywords: ['qualificação de leads', 'leads no WhatsApp', 'automação de vendas'],
    intro: 'Qualificar não é interrogar o contato nem decidir cedo demais quem merece atenção. É obter o contexto mínimo para oferecer o próximo passo adequado e permitir que o time comercial trabalhe com prioridade.',
    takeaways: ['Pergunte apenas o que muda a próxima ação.', 'Explique por que determinada informação é necessária.', 'Registre origem, necessidade, prazo e aderência.', 'Encaminhe o lead com resumo e histórico.'],
    sections: [
      { heading: 'Comece pelos critérios usados por bons vendedores', paragraphs: ['Converse com a equipe e identifique quais respostas alteram a abordagem: tipo de necessidade, porte, região, urgência, orçamento, sistema atual ou autoridade para decidir. Transforme esses critérios em poucas perguntas e mantenha espaço para o cliente explicar o problema com as próprias palavras.', 'Nem todo campo precisa ser obrigatório. Dados sensíveis ou prematuros aumentam abandono. A sequência deve gerar valor antes de pedir mais informações.']},
      { heading: 'Construa um fluxo curto e adaptativo', paragraphs: ['A primeira resposta deve reconhecer a intenção e oferecer um caminho. Conforme a pessoa responde, o fluxo elimina perguntas irrelevantes. Recursos interativos do WhatsApp podem organizar opções, formulários, agendamentos e coleta estruturada dentro da conversa.', 'A IA ajuda a compreender respostas abertas e resumir contexto. Regras determinísticas devem cuidar de decisões críticas, como distribuição por região ou bloqueio de uma ação sem consentimento.']},
      { heading: 'Pontuação não substitui leitura de contexto', paragraphs: ['Um score pode combinar aderência, urgência e comportamento, mas precisa ser transparente para a equipe. Evite fórmulas que descartam oportunidades silenciosamente. Use faixas para escolher a ação: atendimento imediato, nutrição, encaminhamento especializado ou pedido de mais informação.', 'Revise o modelo com vendas. Se oportunidades convertidas recebem pontuação baixa, os critérios estão errados ou faltam dados.']},
      { heading: 'Entregue uma conversa pronta para avançar', paragraphs: ['O vendedor deve receber um resumo com necessidade, dados confirmados, objeções e próximo passo esperado. Isso reduz a repetição e permite começar pelo que interessa. O ChatBô pode centralizar a triagem conversacional e conectar os dados ao fluxo comercial definido pela empresa.', 'O ganho aparece quando a equipe deixa de organizar mensagens e passa a conduzir decisões.']},
      { heading: 'Métricas para melhorar o funil', paragraphs: ['Acompanhe conclusão do fluxo, tempo até encaminhamento, leads aceitos por vendas, reuniões marcadas, conversão e motivos de desqualificação. Separe os resultados por canal e campanha para não atribuir à automação diferenças de público.', 'Analise perguntas que geram abandono e campos frequentemente corrigidos. A qualificação é um produto vivo: muda conforme oferta, mercado e processo comercial evoluem.']}
    ], cta: { title: 'Transforme conversas em oportunidades organizadas.', text: 'O ChatBô ajuda sua empresa a atender, qualificar e encaminhar cada contato.', label: 'Ver o ChatBô', href: 'https://www.chatbo.com.br/' }, sources: [metaPlatform, metaFlows]
  },
  {
    slug: 'roi-automacao-processos-como-calcular',
    title: 'ROI de automação de processos: como calcular o retorno antes de investir',
    description: 'Uma forma prática de estimar economia, capacidade, risco e prazo de retorno de uma automação.',
    category: 'Automação com IA', date: '2026-09-04', updated: '2026-09-04', readTime: '11 min de leitura',
    keywords: ['ROI de automação', 'retorno sobre investimento', 'automação de processos'],
    intro: 'Automação não deve ser aprovada porque parece moderna. Ela precisa resolver um custo, uma restrição de capacidade, um risco ou uma oportunidade que possa ser acompanhado.',
    takeaways: ['Meça o processo atual antes do projeto.', 'Inclua retrabalho, espera e erros no custo.', 'Separe economia, capacidade liberada e receita potencial.', 'Use cenários conservador, provável e otimista.'],
    sections: [
      { heading: 'Construa a linha de base', paragraphs: ['Registre quantas vezes a tarefa ocorre, minutos por execução, pessoas envolvidas, custo médio da hora, erros e tempo de espera. Observe um período representativo e evite depender apenas de estimativas. A linha de base é o ponto contra o qual o projeto será comparado.', 'Se o processo varia por tipo de caso, separe as categorias. Automatizar 80% dos casos simples pode ser mais valioso do que tentar cobrir 100% com enorme complexidade.']},
      { heading: 'Calcule benefícios diferentes separadamente', paragraphs: ['Horas poupadas não são automaticamente dinheiro no caixa. Elas podem virar capacidade para atender mais clientes, reduzir horas extras, acelerar entregas ou absorver crescimento. Nomeie o destino do tempo liberado para que o benefício seja real.', 'Some também redução de erros, multas, perdas de prazo e oportunidades abandonadas. Quando estimar receita adicional, aplique a margem e a probabilidade de conversão, evitando tratar faturamento bruto como retorno.']},
      { heading: 'Inclua o custo completo da solução', paragraphs: ['Considere diagnóstico, desenvolvimento, integrações, licenças, infraestrutura, treinamento, monitoramento e manutenção. Reserve esforço para atualização de regras e fontes. Uma automação conectada à operação precisa de responsável e rotina de melhoria.', 'O custo inicial pode ser maior em um software personalizado, mas a comparação deve considerar aderência, volume e custo das adaptações manuais ao longo do tempo.']},
      { heading: 'Trabalhe com cenários', paragraphs: ['No cenário conservador, use menor adoção, ganho de tempo moderado e custo de manutenção maior. No provável, use dados do piloto. No otimista, registre explicitamente o que precisaria acontecer. A decisão fica mais resistente a expectativas exageradas.', 'O prazo de retorno é o investimento total dividido pelo benefício líquido mensal, mas a decisão também deve considerar risco, impacto no cliente e importância estratégica.']},
      { heading: 'Valide após a implantação', paragraphs: ['Compare volume, tempo, qualidade e resultado com a linha de base. Se a equipe não usa o fluxo, investigue atrito, treinamento e aderência. Se o ganho ficou abaixo do previsto, corrija as hipóteses antes de expandir.', 'A Tironi Tech estrutura projetos de automação com objetivos observáveis, integração e acompanhamento. O valor está no processo melhor, não apenas no código executado.']}
    ], cta: { title: 'Quer saber se uma automação se paga?', text: 'Mapeamos o processo e estimamos impacto antes de construir.', label: 'Solicitar diagnóstico', href: '/#contato' }, sources: [sebrae, cetic]
  },
  {
    slug: 'integrar-ia-crm-erp-whatsapp',
    title: 'Como integrar IA, CRM, ERP e WhatsApp sem criar mais uma ilha de informação',
    description: 'Arquitetura, dados e governança para conectar atendimento e operação com segurança.',
    category: 'Automação com IA', date: '2026-09-02', updated: '2026-09-02', readTime: '13 min de leitura',
    keywords: ['integração de sistemas', 'IA e CRM', 'WhatsApp e ERP'],
    intro: 'Uma IA isolada responde perguntas. Uma IA integrada consulta contexto, registra ações e ajuda o processo a avançar. O benefício cresce, mas também crescem as exigências de dados, segurança e desenho operacional.',
    takeaways: ['Defina um sistema responsável por cada dado.', 'Integre pelo menor conjunto de informações necessário.', 'Use eventos e webhooks para manter estados sincronizados.', 'Registre ações e aplique permissões por função.'],
    sections: [
      { heading: 'Escolha a fonte de verdade', paragraphs: ['Cliente, pedido, estoque, atendimento e pagamento podem existir em sistemas diferentes. Para cada entidade, determine qual sistema é responsável pelo dado oficial. Sem essa decisão, integrações apenas multiplicam divergências.', 'A IA deve consultar fontes autorizadas e indicar quando a informação não está disponível. Evite copiar bancos inteiros quando uma consulta controlada resolve a necessidade.']},
      { heading: 'Mapeie eventos, não somente campos', paragraphs: ['Pergunte o que deve acontecer quando um lead é qualificado, um pedido muda de status ou um cliente pede atendimento humano. Eventos tornam o fluxo explícito e facilitam reprocessamento, auditoria e monitoramento.', 'Webhooks da WhatsApp Business Platform podem informar mensagens recebidas e mudanças de status. APIs internas completam a jornada com CRM, agenda, ERP ou software personalizado.']},
      { heading: 'Proteja dados e ações', paragraphs: ['Cada integração precisa de autenticação, permissões mínimas, tratamento de erro e registro. Diferencie a capacidade de consultar da capacidade de alterar ou enviar. Ações financeiras, exclusões e mudanças críticas devem exigir confirmação adequada.', 'Mascaramento, retenção e acesso precisam acompanhar a finalidade do processo. Mais contexto nem sempre produz uma resposta melhor; frequentemente apenas aumenta exposição.']},
      { heading: 'Projete para falhas', paragraphs: ['Sistemas ficam indisponíveis, respostas atrasam e formatos mudam. Defina filas, tentativas, idempotência e uma rota manual. O cliente deve receber uma expectativa honesta sem que a mesma ação seja executada duas vezes.', 'Monitoramento deve mostrar onde o fluxo parou e permitir correção. Uma integração confiável é aquela que falha de maneira controlada.']},
      { heading: 'Construa por jornada', paragraphs: ['Integre primeiro uma jornada completa, como receber, qualificar e registrar um lead. Isso entrega valor verificável e revela padrões reutilizáveis. Depois avance para agendamento, proposta, acompanhamento e suporte.', 'A Tironi Tech combina software personalizado, automações com IA e experiências como o ChatBô para conectar a conversa ao restante da empresa.']}
    ], cta: { title: 'Seus sistemas precisam conversar entre si?', text: 'Criamos integrações e automações desenhadas em torno da sua operação.', label: 'Falar com um especialista', href: '/#contato' }, sources: [metaPlatform, cetic]
  },
  {
    slug: 'ia-empresas-brasileiras-dados-aplicacoes',
    title: 'IA nas empresas brasileiras: o que os dados mostram e onde estão as oportunidades',
    description: 'Leitura prática da TIC Empresas 2025 para líderes que precisam escolher aplicações de inteligência artificial.',
    category: 'Automação com IA', date: '2026-08-31', updated: '2026-09-14', readTime: '12 min de leitura',
    keywords: ['IA nas empresas brasileiras', 'inteligência artificial para empresas', 'TIC Empresas 2025'],
    intro: 'A adoção de IA está crescendo, mas os dados mostram uma realidade menos cinematográfica e mais operacional: empresas procuram soluções prontas, automação de fluxos e apoio externo para adaptar tecnologia ao trabalho real.',
    takeaways: ['17% das empresas pesquisadas usaram alguma aplicação de IA em 2025.', 'Entre as pequenas, a proporção passou de 10% para 15%.', 'Automação de processos apareceu em 68% das adotantes.', '54% contrataram fornecedores externos para modificar ou desenvolver sistemas.'],
    sections: [
      { heading: 'O recorte da pesquisa', paragraphs: ['A TIC Empresas 2025, produzida pelo Cetic.br|NIC.br, ouviu 4.174 empresas brasileiras com dez ou mais pessoas ocupadas, entre fevereiro de 2025 e janeiro de 2026. O levantamento permite comparar porte, região e setor e deve ser lido dentro desse universo.', 'A proporção de empresas que declarou usar IA cresceu de 13% em 2024 para 17% em 2025. Entre pequenas empresas do recorte, passou de 10% para 15%; entre grandes, chegou a 50%.']},
      { heading: 'A automação domina o uso prático', paragraphs: ['Entre as empresas que usavam IA, 68% citaram automatização de processos e fluxos de trabalho. Mineração de texto e análise da linguagem escrita chegaram a 38%, enquanto geração de linguagem natural para texto ou fala alcançou 30%.', 'Esses números aproximam a IA de tarefas concretas: classificar solicitações, extrair informações, produzir rascunhos, conduzir atendimento e movimentar dados entre sistemas.']},
      { heading: 'Comprar pronto e adaptar', paragraphs: ['Oitenta por cento das adotantes escolheram soluções prontas, e 54% contrataram fornecedores externos para modificar ou desenvolver sistemas. A combinação sugere que empresas querem velocidade, mas precisam de adaptação e integração para obter valor.', 'Isso abre espaço para uma arquitetura híbrida: ferramentas consolidadas resolvem capacidades comuns; automações e software personalizado conectam regras específicas e diferenciais do negócio.']},
      { heading: 'Como transformar tendência em decisão', paragraphs: ['Evite começar por uma lista de ferramentas. Priorize processos com volume, atraso, erro ou perda de informação. Defina uma métrica, execute um piloto e registre exceções. A tecnologia deve produzir uma mudança observável na operação ou na experiência do cliente.', 'Atendimento é uma porta de entrada frequente. O ChatBô aplica IA a conversas e pode organizar orientação, qualificação e encaminhamento. Em processos internos, a Tironi Tech desenvolve automações e sistemas personalizados.']},
      { heading: 'A vantagem virá da aplicação', paragraphs: ['Ferramentas de IA tendem a se tornar mais acessíveis. A diferença estará nos dados organizados, no desenho de processo, na integração e na capacidade de revisar resultados. Empresas que aprendem com pilotos criam repertório para projetos maiores.', 'Adotar IA não é instalar um recurso. É decidir como pessoas e sistemas passam a trabalhar juntos, com responsabilidade e objetivos claros.']}
    ], cta: { title: 'Leve a IA para um processo real da empresa.', text: 'A Tironi Tech transforma oportunidades em automações, integrações e software.', label: 'Mapear uma oportunidade', href: '/#contato' }, sources: [cetic, sebrae]
  },
  {
    slug: 'o-que-e-geo-generative-engine-optimization',
    title: 'O que é GEO: como preparar sua marca para ser encontrada e citada por inteligências artificiais',
    description: 'Entenda a relação entre SEO e Generative Engine Optimization e o que muda na produção de conteúdo.',
    category: 'SEO e GEO', date: '2026-08-28', updated: '2026-09-14', readTime: '13 min de leitura',
    keywords: ['GEO', 'Generative Engine Optimization', 'SEO para IA'],
    intro: 'Quando uma pessoa pergunta a um mecanismo de IA, ela pode receber uma resposta sintetizada a partir de várias páginas. GEO é o trabalho de tornar uma fonte clara, confiável e útil o suficiente para participar dessa resposta, sem abandonar os fundamentos do SEO.',
    takeaways: ['GEO complementa o SEO; não substitui indexação e qualidade técnica.', 'Conteúdo precisa oferecer informação específica, verificável e bem estruturada.', 'Citações, dados e experiência própria aumentam a utilidade da fonte.', 'Visibilidade em IA exige monitoramento por tema e pergunta.'],
    sections: [
      { heading: 'De uma lista de links para uma resposta sintetizada', paragraphs: ['Mecanismos generativos recuperam documentos e produzem uma resposta com base neles. O estudo que formalizou GEO propôs métricas de visibilidade e um benchmark para testar estratégias em diferentes domínios.', 'No experimento, técnicas de otimização elevaram a visibilidade em até 40%, mas a eficácia variou conforme o tema. O número não é promessa comercial; é evidência de que formato, autoridade e contexto alteram como fontes aparecem em respostas geradas.']},
      { heading: 'O que continua igual', paragraphs: ['O Google afirma que as práticas fundamentais de SEO continuam relevantes para seus recursos generativos. A página precisa ser rastreável, indexável, rápida, clara e conectada ao restante do site. Conteúdo útil e original continua sendo o centro.', 'Não existe marcação especial que garanta citação em IA. Dados estruturados ajudam mecanismos a compreender autor, título, data e tipo de página, mas devem representar o conteúdo visível.']},
      { heading: 'O que passa a exigir mais atenção', paragraphs: ['Respostas diretas, definições precisas, comparações, evidências e fontes facilitam a extração de trechos úteis. Uma visão própria, experiência de implementação e dados internos agregados tornam o material menos substituível por resumos genéricos.', 'Organize cada artigo em torno de uma necessidade completa. Crie links para conceitos relacionados e mantenha páginas de produto claras sobre público, funcionamento e limites.']},
      { heading: 'SEO e GEO na prática', paragraphs: ['Mapeie perguntas de descoberta, comparação, implementação e decisão. Para cada grupo, produza a melhor resposta que a empresa pode sustentar com conhecimento real. Cite fontes primárias, mostre exemplos e identifique autoria e revisão.', 'Acompanhe posições orgânicas, cliques, conversões e menções em mecanismos de resposta. As ferramentas e resultados mudam; registre data, consulta e contexto para comparar períodos.']},
      { heading: 'Como a Tironi Tech aplica esse princípio', paragraphs: ['Este blog foi estruturado em clusters sobre atendimento com IA, automação e software personalizado. Os artigos se conectam a serviços e produtos apenas quando a solução é relevante para a dor discutida.', 'A mesma lógica deve orientar qualquer marca: construir uma biblioteca coerente de respostas, sustentada por experiência, e não páginas artificiais para cada variação de palavra-chave.']}
    ], cta: { title: 'Precisa estruturar tecnologia e conteúdo para a nova busca?', text: 'A Tironi Tech une estratégia digital, software e automação com IA.', label: 'Conversar sobre o projeto', href: '/#contato' }, sources: [geoPaper, googleAI, googleHelpful]
  },
  {
    slug: 'seo-para-ai-overviews-busca-generativa',
    title: 'SEO para AI Overviews e busca generativa: um plano prático para empresas',
    description: 'Fundamentos técnicos e editoriais para aumentar a descoberta do seu conteúdo no Google e em experiências com IA.',
    category: 'SEO e GEO', date: '2026-08-26', updated: '2026-09-14', readTime: '12 min de leitura',
    keywords: ['SEO para AI Overviews', 'busca generativa', 'SEO com IA'],
    intro: 'A busca generativa muda a forma de apresentar respostas, mas continua dependendo de conteúdo acessível, relevante e confiável. O plano mais sólido combina SEO técnico, autoridade temática e informação que não pode ser substituída por uma paráfrase genérica.',
    takeaways: ['Garanta rastreamento, indexação e links internos.', 'Produza conteúdo único baseado em experiência.', 'Use títulos e seções que respondam perguntas reais.', 'Meça conversões e presença temática, não só tráfego.'],
    sections: [
      { heading: 'Comece pela base técnica', paragraphs: ['Use URLs permanentes, títulos descritivos, meta descriptions úteis, canonical correto e sitemap atualizado. Artigos devem ser acessíveis por navegação e links internos, sem depender apenas de busca ou JavaScript para serem descobertos.', 'A marcação BlogPosting pode informar título, autor, datas e imagem. Ela melhora compreensão, mas não substitui o conteúdo nem garante uma apresentação especial.']},
      { heading: 'Crie conteúdo que mereça ser recuperado', paragraphs: ['O guia oficial do Google para recursos generativos recomenda material valioso, único e não comoditizado. Relatos de implementação, critérios de decisão, comparações honestas, dados e exemplos fornecem algo que um texto genérico não oferece.', 'Evite produzir páginas quase iguais para cada formulação de pergunta. Cubra o tema com profundidade e use subtítulos para tornar suas partes fáceis de localizar.']},
      { heading: 'Mostre quem responde e por quê', paragraphs: ['Inclua autoria, experiência, fontes e data de revisão. Quando houver participação de IA na produção, o conteúdo ainda precisa ser conferido e enriquecido por alguém responsável. Afirmações específicas devem apontar para fontes primárias.', 'Páginas institucionais e de produto precisam confirmar identidade, especialidade, contatos e proposta. A autoridade temática surge da coerência entre quem a empresa é e o que publica.']},
      { heading: 'Construa clusters e caminhos de decisão', paragraphs: ['Um artigo principal explica o tema; artigos complementares detalham aplicações, custos, riscos e comparações. Links internos ajudam leitores e mecanismos a perceber a relação. Cada página deve avançar a compreensão, evitando repetição.', 'Neste blog, atendimento com IA conecta chatbot, qualificação e WhatsApp; automação conecta diagnóstico, ROI e integrações; software personalizado cobre decisão e arquitetura.']},
      { heading: 'Meça o que aproxima o negócio do cliente', paragraphs: ['Acompanhe consultas, páginas de entrada, avanço entre artigos, cliques para produtos e contatos qualificados. Observe também citações e menções em respostas de IA, sempre registrando a pergunta e a data.', 'Atualize quando dados, produto ou mercado mudarem. Alterar apenas a data não torna um texto novo; a revisão precisa acrescentar valor real.']}
    ], cta: { title: 'Seu site precisa comunicar conhecimento e capacidade.', text: 'Planejamos experiências digitais e automações que conectam descoberta a resultado.', label: 'Falar com a Tironi Tech', href: '/#contato' }, sources: [googleAI, googleHelpful]
  },
  {
    slug: 'como-criar-conteudo-citado-por-ia',
    title: 'Como criar conteúdo que pode ser compreendido e citado por mecanismos de IA',
    description: 'Estrutura, evidência e clareza editorial para transformar conhecimento da empresa em uma fonte útil.',
    category: 'SEO e GEO', date: '2026-08-24', updated: '2026-09-14', readTime: '11 min de leitura',
    keywords: ['conteúdo citado por IA', 'GEO para empresas', 'conteúdo para ChatGPT'],
    intro: 'Não existe um comando capaz de obrigar uma IA a citar uma página. Existe um trabalho editorial consistente: publicar informação clara, verificável, original e tecnicamente acessível.',
    takeaways: ['Responda cedo e aprofunde depois.', 'Diferencie fatos, interpretação e experiência.', 'Cite a fonte original perto da afirmação.', 'Transforme experiência interna em exemplos verificáveis.'],
    sections: [
      { heading: 'Defina uma pergunta central', paragraphs: ['Cada página deve resolver uma necessidade identificável. Abra com uma resposta curta e depois explique critérios, processo, limites e exemplos. Isso atende quem precisa de rapidez e quem precisa decidir com profundidade.', 'Use linguagem do cliente sem repetir palavras-chave de forma mecânica. Variações naturais surgem quando o assunto é explicado por completo.']},
      { heading: 'Dê densidade factual ao texto', paragraphs: ['Inclua definições, números com contexto, etapas, condições e comparações. Informe universo, período e fonte dos dados. Evite estatísticas decorativas ou números sem metodologia.', 'O estudo de GEO observou que citações, trechos atribuídos e estatísticas podiam aumentar visibilidade no ambiente testado. A aplicação deve preservar rigor: evidência precisa ajudar o leitor, não apenas imitar um formato.']},
      { heading: 'Adicione informação que só sua empresa possui', paragraphs: ['Documente decisões de projeto, padrões recorrentes, erros evitados e critérios usados na prática. Dados internos podem ser agregados e anonimizados. Uma análise própria cria valor além de resumir a internet.', 'Para a Tironi Tech, exemplos podem mostrar como mapear uma automação, organizar um fluxo de atendimento ou decidir entre sistema pronto e software personalizado.']},
      { heading: 'Estruture para leitura e recuperação', paragraphs: ['Use um título descritivo, introdução, subtítulos específicos, listas quando realmente ajudam, conclusão operacional e fontes. Mantenha parágrafos focados em uma ideia. Links internos devem apontar para a continuação natural da dúvida.', 'Metadados, sitemap, canonical e dados estruturados ajudam a descoberta e a interpretação, desde que correspondam ao que está visível.']},
      { heading: 'Revise como especialista e como cliente', paragraphs: ['A revisão técnica procura erros, exageros e lacunas. A revisão do cliente pergunta se o texto permite agir ou decidir. Se a página apenas repete definições conhecidas, falta experiência, exemplo ou posição.', 'Conteúdo de autoridade é um ativo acumulativo. Cada artigo responde melhor a uma pergunta e fortalece o conjunto ao redor de uma especialidade real.']}
    ], cta: { title: 'Transforme conhecimento em presença digital.', text: 'A Tironi Tech constrói produtos, automações e experiências digitais com estratégia.', label: 'Conhecer nossas soluções', href: '/#solucoes' }, sources: [geoPaper, googleAI, googleHelpful]
  },
  {
    slug: 'agente-de-ia-ou-chatbot-diferencas',
    title: 'Agente de IA ou chatbot: diferenças, aplicações e como escolher',
    description: 'Compare menus, chatbots com linguagem natural e agentes capazes de executar ações em sistemas.',
    category: 'ChatBô e atendimento', date: '2026-08-22', updated: '2026-08-22', readTime: '10 min de leitura',
    keywords: ['agente de IA', 'chatbot', 'diferença entre chatbot e agente de IA'],
    intro: 'Os termos são usados como sinônimos, mas representam níveis diferentes de flexibilidade, integração e autonomia. A escolha deve seguir a tarefa, o risco e a qualidade dos dados disponíveis.',
    takeaways: ['Menus funcionam bem para escolhas fechadas.', 'Chatbots compreendem linguagem e orientam conversas.', 'Agentes combinam conhecimento, decisões e ferramentas.', 'Autonomia exige limites, avaliação e rastreabilidade.'],
    sections: [
      { heading: 'Menu ou fluxo determinístico', paragraphs: ['Botões e listas conduzem o usuário por opções conhecidas. São previsíveis, fáceis de testar e adequados para coleta estruturada, confirmação e tarefas com poucas variações. Seu limite aparece quando a pessoa descreve uma necessidade fora das opções.', 'WhatsApp Flows permite criar jornadas com telas, campos e ações dentro do canal, úteis para agendamento, descoberta de produtos, feedback e captação de leads.']},
      { heading: 'Chatbot com linguagem natural', paragraphs: ['O chatbot interpreta a mensagem, consulta informações e responde em formato conversacional. Ele pode lidar com várias formas de fazer a mesma pergunta e manter contexto. Precisa de fontes aprovadas, instruções e uma política clara para incerteza.', 'Esse modelo funciona bem em orientação, perguntas frequentes e triagem, especialmente quando combinado a caminhos estruturados.']},
      { heading: 'Agente de IA', paragraphs: ['Um agente recebe um objetivo e pode escolher ferramentas para consultar ou executar ações, como verificar pedido, reservar horário ou atualizar um registro. A autonomia aumenta o valor potencial e o risco de uma ação incorreta.', 'Permissões mínimas, confirmação, logs, limites de repetição e testes são essenciais. Nem toda conversa precisa de um agente; muitas são resolvidas por um fluxo simples e confiável.']},
      { heading: 'Como escolher a arquitetura', paragraphs: ['Classifique a tarefa pelo número de variações, necessidade de contexto, sistemas envolvidos e impacto de erro. Use o componente menos complexo capaz de resolver o problema. Combine abordagens quando cada etapa pede um nível diferente de flexibilidade.', 'O ChatBô pode ser desenhado para unir conversa, regras e integrações de acordo com a operação, sem obrigar a empresa a tratar todo atendimento do mesmo modo.']},
      { heading: 'Teste o resultado, não a demonstração', paragraphs: ['Crie um conjunto de conversas reais, incluindo erros de digitação, perguntas incompletas, tentativas de sair do escopo e solicitações de transferência. Avalie correção, clareza, segurança e ação executada.', 'Depois de publicar, monitore falhas e mudanças nas fontes. Um sistema conversacional é uma operação contínua, não uma configuração encerrada no lançamento.']}
    ], cta: { title: 'Descubra qual automação cabe no seu atendimento.', text: 'O ChatBô é estruturado a partir das regras e objetivos da sua empresa.', label: 'Conhecer o ChatBô', href: 'https://www.chatbo.com.br/' }, sources: [metaPlatform, metaFlows]
  },
  {
    slug: 'checklist-projeto-software-sob-medida',
    title: 'Checklist para planejar um projeto de software sob medida',
    description: 'As decisões que precisam estar claras antes de desenvolver um sistema importante para a operação.',
    category: 'Software personalizado', date: '2026-08-20', updated: '2026-08-20', readTime: '12 min de leitura',
    keywords: ['projeto de software sob medida', 'desenvolvimento de software personalizado', 'checklist de software'],
    intro: 'Um bom projeto começa com um problema delimitado, pessoas responsáveis e um primeiro resultado utilizável. Listas extensas de funcionalidades sem prioridade aumentam prazo e escondem o que realmente precisa ser validado.',
    takeaways: ['Defina problema, usuário e indicador de sucesso.', 'Mapeie dados, integrações, permissões e exceções.', 'Escolha uma primeira versão que percorra a jornada completa.', 'Planeje operação e evolução desde o início.'],
    sections: [
      { heading: 'Problema e resultado', paragraphs: ['Descreva a situação atual com exemplos: quem executa, quanto demora, onde erra e qual consequência. Depois defina o comportamento esperado e uma métrica. “Criar uma plataforma” não é objetivo; reduzir o prazo de uma etapa ou tornar um serviço possível é.', 'Nomeie a pessoa que decide prioridades e quem representa os usuários. Sem responsabilidade clara, cada reunião reabre decisões anteriores.']},
      { heading: 'Usuários e jornada', paragraphs: ['Liste perfis, necessidades, ambiente de uso e permissões. Desenhe a sequência principal do começo ao resultado e marque exceções. Um sistema interno usado no celular em campo pede decisões diferentes de um painel administrativo no escritório.', 'Valide o fluxo com pessoas que executarão o trabalho. Elas revelam atalhos, dependências e informações que não aparecem no procedimento oficial.']},
      { heading: 'Dados e integrações', paragraphs: ['Identifique origem, formato, qualidade, retenção e responsável por cada dado. Liste APIs disponíveis, limites e alternativas manuais. Decida qual sistema permanece como fonte de verdade.', 'Trate migração e limpeza como parte do projeto. Uma interface nova sobre dados inconsistentes apenas apresenta o problema com mais elegância.']},
      { heading: 'Primeira versão e critérios de aceite', paragraphs: ['A primeira versão deve concluir uma jornada relevante, mesmo com escopo reduzido. Defina exemplos de entrada, saída, erro e desempenho aceitável. Priorize o que testa a hipótese de negócio e as integrações mais incertas.', 'Demonstrações frequentes permitem corrigir entendimento enquanto a mudança ainda é barata. Feedback precisa resultar em prioridade, não em uma fila sem limite.']},
      { heading: 'Operação depois do lançamento', paragraphs: ['Planeje monitoramento, suporte, cópias de segurança, permissões, treinamento e processo de mudança. Registre decisões técnicas e regras de negócio. Determine como incidentes e solicitações serão classificados.', 'A Tironi Tech desenvolve software personalizado com visão de produto: descoberta, construção, integração e evolução orientadas pelo resultado da empresa.']}
    ], cta: { title: 'Tem um processo que merece um software próprio?', text: 'Estruturamos o projeto e construímos a primeira versão com foco no resultado.', label: 'Apresentar meu projeto', href: '/#contato' }, sources: [sebrae, cetic]
  }
];

function articleWordCount(article) {
  return [article.title, article.description, article.intro, ...article.takeaways, ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets || [])])]
    .join(' ')
    .trim()
    .split(/\s+/).length;
}

export const blogArticles = rawBlogArticles.map((article) => ({
  ...article,
  readTime: `${Math.max(3, Math.ceil(articleWordCount(article) / 180))} min de leitura`,
}));

export function getBlogArticle(slug) {
  return blogArticles.find((article) => article.slug === slug);
}

export function formatBlogDate(date) {
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`));
}
