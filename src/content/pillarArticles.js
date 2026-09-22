const googleHelpful = { label: 'Google Search Central — conteúdo útil, confiável e feito para pessoas', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' };
const metaPlatform = { label: 'Meta — visão geral da WhatsApp Business Platform', url: 'https://developers.facebook.com/docs/whatsapp/overview/' };
const metaCloudApi = { label: 'Meta — documentação da WhatsApp Cloud API', url: 'https://developers.facebook.com/docs/whatsapp/cloud-api/' };
const nistAiRmf = { label: 'NIST — AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' };
const nistGenAi = { label: 'NIST — Generative AI Profile (NIST AI 600-1)', url: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf' };
const owaspLlm = { label: 'OWASP — Top 10 for Large Language Model Applications', url: 'https://genai.owasp.org/llm-top-10/' };
const anpdGuides = { label: 'ANPD — materiais educativos e publicações sobre proteção de dados', url: 'https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes' };
const microsoftRag = { label: 'Microsoft Learn — design e avaliação de soluções RAG', url: 'https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-solution-design-and-evaluation-guide' };
const microsoftRagEvaluation = { label: 'Microsoft Learn — avaliação de recuperação e respostas em RAG', url: 'https://learn.microsoft.com/en-us/azure/foundry/concepts/evaluation-evaluators/rag-evaluators' };

export const pillarArticles = [
  {
    slug: 'whatsapp-com-ia-para-vendas-playbook-completo',
    title: 'WhatsApp com IA para vendas: playbook completo do primeiro contato ao CRM',
    description: 'Um guia operacional para transformar conversas no WhatsApp em atendimento rápido, qualificação consistente, agenda preenchida e dados confiáveis no CRM.',
    category: 'ChatBô e atendimento',
    date: '2026-09-22',
    updated: '2026-09-22',
    featured: true,
    keywords: ['WhatsApp com IA para vendas', 'chatbot de vendas no WhatsApp', 'automação comercial no WhatsApp', 'ChatBô', 'IA para atendimento'],
    intro: 'Usar IA no WhatsApp não é instalar um robô que responde qualquer pergunta. É desenhar uma operação comercial em que cada conversa recebe contexto, próximo passo e responsável. Este playbook mostra como ligar atendimento, qualificação, agenda, CRM e acompanhamento sem transformar o canal em uma sequência impessoal de mensagens automáticas.',
    takeaways: [
      'Desenhe a jornada e os critérios comerciais antes de configurar a IA.',
      'Use IA para interpretar e orientar; use regras para preço, permissão e compromissos.',
      'Registre origem, intenção, estágio e próxima ação no CRM sem duplicar contatos.',
      'Meça avanço no funil e qualidade da conversa, não apenas volume de mensagens.',
      'Mantenha transferência humana rápida, contexto completo e consentimento verificável.'
    ],
    sections: [
      { heading: 'O que significa usar WhatsApp com IA para vendas', paragraphs: [
        'Uma operação de WhatsApp com IA combina o canal oficial, um fluxo comercial, conhecimento aprovado, integrações e acompanhamento humano. A IA interpreta o que a pessoa escreveu, identifica a intenção e produz uma resposta adequada ao contexto. Regras determinísticas verificam campos, permissões, preços, prazos e ações. O CRM preserva o histórico e torna o próximo passo visível para a equipe.',
        'Essa definição evita um erro comum: confundir linguagem natural com processo. Uma resposta pode soar excelente e ainda assim não registrar o lead, não identificar urgência, não oferecer agenda e não avisar um vendedor. A qualidade precisa ser medida pelo que a conversa ajuda o cliente a concluir e pelo que entrega à operação depois dela.',
        'O ChatBô foi pensado para essa camada operacional. Ele pode receber o contato, responder com base nas informações autorizadas da empresa, coletar dados, qualificar, encaminhar e integrar a conversa aos sistemas usados pela equipe. A implantação deve refletir a jornada real da empresa, em vez de copiar um roteiro genérico.'
      ]},
      { heading: 'Comece pela jornada, não pelo prompt', paragraphs: [
        'Mapeie cinco momentos: entrada, compreensão, qualificação, conversão e continuidade. Na entrada, registre de onde a pessoa veio e o que provavelmente viu. Na compreensão, confirme a necessidade com uma pergunta curta. Na qualificação, colete somente o que muda a decisão. Na conversão, ofereça um próximo passo concreto. Na continuidade, salve resumo, estágio, responsável e prazo.',
        'Para cada momento, escreva o objetivo do cliente e o objetivo da empresa. Quem pede preço quer saber se a solução cabe no contexto; a empresa precisa entender escopo antes de prometer. Quem pede suporte quer resolver uma falha; a empresa precisa identificar produto, urgência e vínculo. Essa dupla leitura produz conversas úteis sem interrogatórios.',
        'Use conversas reais anonimizadas para encontrar desvios de linguagem, perguntas recorrentes e objeções. Uma amostra de cem conversas costuma revelar padrões melhores do que uma reunião baseada em memória. Classifique cada conversa por intenção, desfecho, tempo, transferências e informação ausente. O mapa resultante orienta conteúdo e automação.'
      ]},
      { heading: 'Arquitetura mínima de uma operação confiável', paragraphs: [
        'A arquitetura mínima contém canal oficial, orquestrador de conversas, base de conhecimento, camada de regras, integrações, registros e interface humana. Webhooks recebem eventos do WhatsApp; o orquestrador decide o próximo passo; a base fornece informação; regras autorizam ações; conectores atualizam CRM ou agenda; registros sustentam auditoria e melhoria.',
        'Separe estado da conversa de dados permanentes do cliente. O estado informa em qual etapa o diálogo está e pode expirar. Dados permanentes, como contato, consentimento e oportunidade, pertencem ao sistema definido como fonte oficial. Essa separação reduz duplicidade, facilita retomadas e impede que um trecho antigo da conversa se transforme em verdade cadastral.',
        'Projete falhas como parte do fluxo. Se o CRM estiver indisponível, preserve o evento em fila e informe uma alternativa. Se a agenda não responder, não invente horários. Se a base não trouxer uma resposta confiável, transfira ou registre a dúvida. Uma boa automação se diferencia pela maneira como falha, porque produção nunca repete a demonstração perfeita.'
      ]},
      { heading: 'Como qualificar sem transformar a conversa em formulário', paragraphs: [
        'Qualificação eficiente coleta poucas informações com alto poder de decisão. Para serviços B2B, necessidade, situação atual, impacto, prazo e participação na decisão costumam ser mais úteis do que uma lista extensa de campos. A ordem importa: primeiro entregue orientação; depois peça o dado necessário para personalizar o próximo passo.',
        'Combine perguntas abertas e escolhas rápidas. Uma pergunta aberta identifica linguagem e intenção. Opções ajudam quando existe uma taxonomia estável, como tipo de serviço ou faixa de prazo. Nunca force o cliente a escolher uma categoria que não descreve o caso. Permita explicar em texto e registre a classificação como hipótese revisável.',
        'Pontuação deve apoiar prioridade, não decidir valor humano. Documente quais sinais aumentam ou reduzem a prioridade e revise os resultados por origem e segmento. Evite usar atributos pessoais sem necessidade. Um lead com projeto futuro pode precisar de conteúdo e acompanhamento; um lead urgente pode precisar de transferência imediata. Ambos merecem uma próxima ação coerente.'
      ]},
      { heading: 'Integração com CRM sem cadastros duplicados', paragraphs: [
        'Defina uma chave de identificação e uma estratégia de reconciliação. O telefone pode mudar de formato, contatos compartilham números corporativos e a mesma pessoa pode falar por canais diferentes. Normalize telefone e e-mail, procure registros existentes e preserve os identificadores retornados pelo CRM. Operações repetidas devem ser idempotentes.',
        'O conjunto mínimo inclui contato, empresa quando aplicável, origem, campanha, intenção, consentimento, estágio, resumo, responsável e próxima atividade. Campos extras só entram quando alteram a abordagem ou o relatório. Um CRM preenchido com dezenas de campos inconsistentes não produz inteligência; cria uma segunda fila de correção manual.',
        'Registre eventos importantes, não cada fragmento de texto como nota isolada. Uma boa síntese informa necessidade, contexto, restrições, objeções e compromisso assumido. O vendedor deve abrir o registro e saber o que fazer. Links para a conversa completa preservam detalhes quando a política e a plataforma permitirem.'
      ]},
      { heading: 'Agendamento, proposta e transferência humana', paragraphs: [
        'O agendamento precisa verificar disponibilidade em tempo real, fuso, duração e responsável. Antes de confirmar, repita data e horário de forma inequívoca. Depois, crie o evento, associe-o à oportunidade e envie instruções. Se o conector falhar, não apresente confirmação; ofereça coleta de preferência ou transferência.',
        'Propostas exigem controles mais rígidos. A IA pode coletar requisitos e preparar um rascunho, mas preço, desconto, validade e condições devem vir de fontes controladas. Defina campos obrigatórios e aprovação quando houver compromisso comercial. Nunca permita que o modelo improvise uma condição para encerrar a conversa rapidamente.',
        'A transferência humana deve estar disponível por pedido explícito, baixa confiança, tema sensível, reclamação, negociação ou falha repetida. Entregue ao atendente um resumo, os dados coletados, o motivo e a última ação. Avise ao cliente que a transferência ocorreu e qual prazo pode esperar. Repetir tudo é a forma mais visível de uma integração mal desenhada.'
      ]},
      { heading: 'Consentimento, templates e cadência de acompanhamento', paragraphs: [
        'A conversa iniciada pelo cliente não autoriza qualquer comunicação futura. Registre finalidade, origem e momento do consentimento conforme a política aplicável. Explique o que será enviado e ofereça saída simples. Para mensagens iniciadas pela empresa, observe as regras e categorias de templates da plataforma oficial do WhatsApp.',
        'Cadência boa nasce do contexto. Após um orçamento, envie o combinado, esclareça uma dúvida ou confirme decisão; não repita “podemos ajudar?” sem valor. Defina limite de tentativas, intervalo e encerramento. Pare imediatamente quando houver recusa, canal inadequado ou pedido de remoção.',
        'Revise templates por utilidade, clareza e expectativa. O cliente deve reconhecer a empresa, entender por que recebeu a mensagem e saber qual ação está disponível. Taxas de bloqueio, denúncia e descadastro são sinais de qualidade. Crescimento que desgasta o canal e a marca não é eficiência comercial.'
      ]},
      { heading: 'Base de conhecimento e respostas com evidência', paragraphs: [
        'Organize as fontes por dono, validade, público e versão. Produtos, políticas, regiões atendidas, prazos e condições mudam; documentos sem responsável envelhecem silenciosamente. A IA deve consultar apenas fontes aprovadas e, em temas relevantes, indicar de onde veio a informação ou oferecer o documento correspondente.',
        'Escreva conteúdo operacional em unidades claras: pergunta, resposta, condições, exceções e próximo passo. Elimine documentos duplicados e conflitos antes de indexar. Quando duas fontes divergem, o sistema deve sinalizar em vez de escolher. Perguntas sem resposta alimentam uma fila editorial para aprimorar a base.',
        'Conhecimento não substitui regra. Mesmo que um documento diga que um desconto existe, a ação pode depender de perfil, período ou autorização. A recuperação fornece contexto; a camada transacional valida e executa. Essa divisão reduz respostas convincentes que não poderiam ser cumpridas.'
      ]},
      { heading: 'Segurança e proteção de dados desde o desenho', paragraphs: [
        'Colete o mínimo necessário e limite o acesso por função. Credenciais nunca devem aparecer em prompts ou documentos consultáveis. Use contas de serviço com permissões específicas, criptografia, rotação de segredo e registros de acesso. Defina retenção diferente para conversa, cadastro, auditoria e materiais enviados.',
        'Trate mensagens e documentos externos como conteúdo não confiável. Instruções inseridas por um usuário não podem substituir políticas internas nem ampliar permissões. A OWASP destaca prompt injection e exposição de informação sensível entre riscos relevantes de aplicações com modelos de linguagem. Controles precisam existir fora do texto de instrução do modelo.',
        'A ANPD mantém materiais sobre segurança, cookies e agentes de tratamento. A empresa deve mapear finalidade, base legal, fornecedores, transferências e atendimento aos direitos dos titulares com apoio jurídico quando necessário. Transparência melhora a experiência: informe quando há automação e como uma pessoa pode assumir o caso.'
      ]},
      { heading: 'Métricas que ligam conversa a receita', paragraphs: [
        'Comece por métricas de jornada: tempo até primeira resposta útil, conclusão da triagem, proporção de dados válidos, agendamentos, comparecimento, oportunidades criadas e conversão. Segmente por origem, intenção e dispositivo. O número total de mensagens tende a crescer quando a conversa fica confusa; por isso não representa sucesso sozinho.',
        'Acompanhe também qualidade: respostas corretas, recusa adequada, transferências, reaberturas, correções humanas e satisfação. Crie um conjunto fixo de cenários para comparar versões e uma amostra recente para captar mudanças. Toda alteração de fonte, fluxo, modelo ou integração deve passar por avaliação proporcional ao risco.',
        'Para calcular retorno, compare margem ou valor esperado das conversões adicionais, horas liberadas, redução de perda e custos de plataforma, IA, implantação e operação. Use uma linha de base e um período equivalente. Se o projeto não consegue ligar uma mudança de processo a um indicador, ainda falta instrumentação.'
      ]},
      { heading: 'Plano de implantação em oito semanas', paragraphs: [
        'Nas duas primeiras semanas, escolha uma jornada e mapeie conversas, sistemas, regras, riscos e linha de base. Na terceira, organize a fonte de conhecimento e o modelo de dados. Na quarta, construa o fluxo principal e as integrações mínimas. Na quinta, teste cenários felizes, exceções e ataques simples. Na sexta, pilote com equipe e volume controlados.',
        'Na sétima semana, corrija entendimento, mensagens, campos e alertas com base no uso real. Na oitava, amplie gradualmente e estabeleça rotina semanal de avaliação. O calendário é uma referência; integrações complexas ou ambientes regulados podem exigir mais tempo. O princípio é entregar uma jornada completa antes de espalhar automações incompletas.',
        'Defina responsáveis por conteúdo, processo, tecnologia e resultado. Sem dono, perguntas sem resposta se acumulam, regras envelhecem e indicadores deixam de ser analisados. A implantação termina quando a operação consegue observar, corrigir e evoluir o sistema, não quando o primeiro diálogo funciona.'
      ]},
      { heading: 'Checklist de aceite antes de entrar em produção', paragraphs: [
        'Teste intenção clara, mensagem ambígua, erro de digitação, áudio quando suportado, contato existente, novo contato, CRM fora do ar, agenda sem horário, pedido de humano, pergunta sem fonte, dado sensível, tentativa de alterar instruções e envio repetido do mesmo evento. Registre resultado esperado e evidência.',
        'Valide linguagem, acessibilidade, tempo, consentimento, opt-out, permissões, logs, alertas, reprocessamento e contingência. Confira se atendentes conseguem assumir e devolver a conversa, se o resumo é fiel e se o cliente recebe confirmação verdadeira. Faça o teste em celular real e em condições de rede menos favoráveis.',
        'A liberação deve ter critérios mensuráveis, janela de observação e plano de retorno. Comece com parte do volume e aumente após estabilidade. O objetivo do primeiro lançamento não é provar que a IA sabe conversar sobre tudo; é provar que uma jornada específica funciona melhor, com controle e aprendizado.'
      ]}
    ],
    cta: { title: 'Quer aplicar este playbook no seu WhatsApp?', text: 'O ChatBô conecta atendimento, qualificação e operação comercial em uma jornada desenhada para a realidade da sua empresa.', label: 'Conhecer o ChatBô', href: 'https://www.chatbo.com.br/' },
    sources: [metaPlatform, metaCloudApi, anpdGuides, owaspLlm, nistAiRmf]
  },
  {
    slug: 'agentes-de-ia-para-empresas-guia-producao',
    title: 'Agentes de IA para empresas: do caso de uso à produção com segurança e resultado',
    description: 'Como escolher, projetar, integrar, avaliar e operar agentes de IA que executam trabalho real sem abrir mão de controle, rastreabilidade e responsabilidade humana.',
    category: 'Automação com IA',
    date: '2026-09-22', updated: '2026-09-22', featured: true,
    keywords: ['agentes de IA para empresas', 'empresa de automação com IA', 'IA aplicada a negócios', 'automação de processos com IA', 'desenvolvimento de agente de IA'],
    intro: 'Um agente de IA empresarial não é apenas um chat com nome e avatar. É um sistema que interpreta uma solicitação, consulta contexto, escolhe ferramentas, executa etapas e registra resultados dentro de limites definidos. O valor aparece quando ele reduz espera e retrabalho em um processo mensurável; o risco aparece quando autonomia, dados e permissões são tratados como detalhe.',
    takeaways: ['Escolha processos delimitados, frequentes e verificáveis.', 'Conceda a menor permissão necessária a cada ferramenta.', 'Avalie processo, resposta e resultado com casos reais.', 'Exija confirmação humana para ações de impacto.', 'Opere o agente como produto: com métricas, responsáveis, versões e incidentes.'],
    sections: [
      { heading: 'Agente de IA, chatbot e automação tradicional', paragraphs: [
        'Automação tradicional segue regras previsíveis: quando ocorre A, execute B. Um chatbot mantém uma interface conversacional e pode combinar menus, regras e geração de texto. Um agente acrescenta planejamento e uso de ferramentas: ele decide qual fonte consultar ou qual ação propor conforme objetivo e contexto. As três abordagens podem coexistir no mesmo produto.',
        'A pergunta correta não é qual tecnologia parece mais avançada, mas qual nível de flexibilidade o processo exige. Uma validação fiscal deve ser determinística. A interpretação de um e-mail pode usar modelo de linguagem. A criação de uma tarefa pode usar API. A aprovação de pagamento permanece com pessoa autorizada. Arquitetura madura distribui responsabilidades.',
        'Autonomia deve ser granular. Ler um cadastro, preparar uma resposta e enviar uma resposta têm riscos diferentes. O agente pode executar os dois primeiros e pedir confirmação no terceiro. Esse desenho mantém velocidade sem entregar poder irrestrito a um componente probabilístico.'
      ]},
      { heading: 'Como escolher o primeiro caso de uso', paragraphs: [
        'Liste processos com alto volume, repetição, espera ou troca de contexto. Registre entradas, saídas, sistemas, exceções, risco e tempo. Bons candidatos têm resultado verificável, fontes acessíveis e caminho claro para uma pessoa assumir. Triagem, pesquisa interna, preparação de proposta, conciliação assistida e acompanhamento de solicitações são exemplos frequentes.',
        'Evite começar por uma missão ampla como “ser o assistente de toda a empresa”. O escopo difuso mistura permissões, bases e critérios de sucesso. Prefira um verbo e um objeto: classificar chamados, preparar resumo comercial, localizar procedimento, conferir documentos ou agendar visitas. Depois conecte atividades comprovadas.',
        'Priorize com uma matriz de valor, viabilidade, risco e aprendizagem. Um processo de valor moderado pode ser o melhor primeiro passo se permitir testar autenticação, integração e avaliação reutilizáveis. O portfólio deve equilibrar resultado rápido e fundação técnica, em vez de selecionar apenas a demonstração mais chamativa.'
      ]},
      { heading: 'Desenhe o processo antes da autonomia', paragraphs: [
        'Descreva o processo atual com papéis, decisões, sistemas e exceções. Remova etapas redundantes antes de automatizar. Em seguida, desenhe o futuro e marque onde o agente observa, recomenda, prepara ou executa. Cada ação precisa de pré-condições, resultado esperado, limite e responsável.',
        'Crie estados explícitos. Um pedido pode estar recebido, em análise, aguardando dado, aguardando aprovação, executado ou falho. O agente não deve inferir silenciosamente que uma etapa foi concluída. A transição ocorre somente após evidência do sistema ou confirmação necessária. Estados simplificam retomada e auditoria.',
        'Defina saída estruturada para integração. Em vez de extrair decisões de um parágrafo, use campos com tipos, valores permitidos e validação. Linguagem natural serve à interação; contratos estruturados servem aos sistemas. Se a validação falhar, o agente corrige ou encaminha.'
      ]},
      { heading: 'Ferramentas, permissões e princípio do menor privilégio', paragraphs: [
        'Cada ferramenta deve fazer uma função pequena e previsível, como buscar cliente, consultar estoque, criar rascunho ou abrir chamado. Especifique parâmetros, retorno e erros. Funções amplas que recebem texto livre aumentam a superfície de risco e dificultam teste. O agente escolhe entre capacidades limitadas, não recebe acesso genérico ao sistema.',
        'Use identidade própria, escopo mínimo e credenciais armazenadas fora do prompt. Separe leitura de escrita e ambientes de teste e produção. Operações destrutivas, financeiras, externas ou irreversíveis exigem confirmação e, conforme o risco, dupla aprovação. Tempo, quantidade e valor também podem limitar execução.',
        'Registre quem solicitou, qual versão decidiu, quais fontes foram consultadas, qual ferramenta foi chamada, parâmetros relevantes, resposta e desfecho. Proteja segredos e minimize dados nos logs. Rastreabilidade permite investigar, medir e demonstrar que o agente obedeceu ao processo.'
      ]},
      { heading: 'Conhecimento, RAG e memória', paragraphs: [
        'O modelo não conhece automaticamente os documentos atuais da empresa. RAG recupera trechos de fontes autorizadas e os fornece como contexto para a resposta. A qualidade depende de seleção, preparação, metadados, busca e avaliação. Indexar uma pasta inteira sem curadoria transfere conflitos e obsolescência para o usuário.',
        'Memória de sessão preserva o contexto da tarefa. Memória duradoura deve ser tratada como dado empresarial: finalidade, fonte, validade, acesso e correção. Não grave toda conversa como fato. Extraia somente itens necessários, confirme quando relevante e mantenha o sistema de registro como autoridade.',
        'Peça evidência nas respostas importantes. O agente pode indicar documento, seção, data ou registro que sustentou a recomendação. Quando não encontrar suporte suficiente, deve declarar limite. A capacidade de recusar com precisão vale mais do que uma resposta confiante sem base.'
      ]},
      { heading: 'Planejamento e orquestração sem complexidade desnecessária', paragraphs: [
        'Muitos casos não precisam de um planejador aberto. Um fluxo com etapas conhecidas, IA em pontos específicos e regras entre elas costuma ser mais barato e previsível. Use planejamento dinâmico quando a sequência depende realmente do contexto e quando existe forma de limitar, observar e avaliar as escolhas.',
        'Defina orçamento de passos, tempo e consumo. Detecte repetição e interrompa ciclos. Ferramentas devem retornar códigos claros para sucesso, ausência, conflito e erro transitório. O agente não deve tentar indefinidamente nem trocar de estratégia sem registrar o motivo.',
        'Para múltiplos agentes, exija uma razão operacional. Separar funções pode ajudar quando existem permissões, bases ou critérios diferentes, mas aumenta coordenação e observabilidade. Um único fluxo bem desenhado costuma superar uma equipe de agentes criada apenas para imitar um organograma.'
      ]},
      { heading: 'Avaliação: o teste que uma demonstração não mostra', paragraphs: [
        'Construa um conjunto de casos representativos com entrada, contexto, resultado esperado e ações proibidas. Inclua situações normais, ambíguas, incompletas, adversariais e falhas de integração. Use dados anonimizados ou sintéticos quando necessário. Separe casos de desenvolvimento e validação para reduzir ajuste excessivo.',
        'Avalie três camadas. Processo: o agente escolheu fonte e ferramenta corretas? Resposta: foi fiel, completa e adequada? Resultado: a tarefa foi concluída e gerou valor? Uma nota textual alta não compensa criar o registro errado. Métricas automáticas ajudam escala; revisão humana confirma aspectos que exigem julgamento.',
        'Mantenha regressão por versão de modelo, prompt, ferramenta, fonte e regra. Compare custo e latência junto da qualidade. Uma mudança pode melhorar casos fáceis e piorar exceções críticas. A liberação deve respeitar limiares por risco, não apenas uma média geral.'
      ]},
      { heading: 'Segurança contra prompt injection e vazamento', paragraphs: [
        'Prompt injection ocorre quando conteúdo não confiável tenta modificar o comportamento do sistema. Pode vir do usuário, de um documento, e-mail ou página consultada. Separe instruções e conteúdo, limite ferramentas e trate qualquer texto externo como dado. Um prompt dizendo “ignore estas instruções” não substitui controles de autorização.',
        'Impeça que o modelo receba ou revele dados além da necessidade. Aplique filtros e políticas antes e depois do modelo, controle acesso na recuperação e remova segredos. Não confie apenas em uma instrução textual para proteger informação sensível. A OWASP recomenda limites de privilégio, validação e fronteiras de confiança.',
        'Teste extração de prompt, exfiltração por link, pedido de credencial, instrução em documento, alteração de destinatário e ação fora do escopo. Monitore padrões anormais e permita bloquear ferramentas. Segurança de agente é propriedade da arquitetura inteira, não uma frase no início da conversa.'
      ]},
      { heading: 'LGPD, transparência e decisão humana', paragraphs: [
        'Mapeie dados pessoais, finalidade, hipótese legal, retenção, operadores e transferências. Limite o conteúdo usado para desenvolvimento e avaliação e documente anonimização quando aplicada. Fornecedores de modelo e infraestrutura fazem parte do fluxo de dados e precisam ser considerados contratualmente e tecnicamente.',
        'A pessoa afetada deve entender quando interage com automação e como pedir atendimento humano. Em decisões que afetem interesses, avalie requisitos de explicação e revisão com assessoria adequada. A ANPD destaca transparência, segurança e proteção de direitos no tratamento automatizado.',
        'Crie responsáveis por processo, dados, tecnologia e risco. O NIST AI RMF organiza gestão em governar, mapear, medir e gerenciar. A aplicação prática é contínua: definir política, compreender contexto, testar, responder a desvios e revisar quando o uso muda.'
      ]},
      { heading: 'Observabilidade e operação diária', paragraphs: [
        'Painéis devem mostrar volume, sucesso, falha, tempo, custo, transferências, confirmações e ações por ferramenta. Alertas identificam aumento de erro, fila parada, latência, consumo atípico ou queda de qualidade. Logs precisam permitir seguir uma execução sem expor dados desnecessários.',
        'Crie filas para exceção e feedback. Usuários devem corrigir uma saída e informar o motivo; a equipe transforma padrões em fonte, regra ou caso de teste. Nem toda falha se resolve com prompt. Às vezes falta dado, a API é ambígua ou o processo não tem decisão definida.',
        'Prepare contingência: pausar uma ferramenta, reduzir autonomia, trocar versão, assumir manualmente e reprocessar eventos. Realize revisão de incidentes com causa técnica e operacional. Um agente confiável é aquele cuja equipe consegue perceber e limitar problemas rapidamente.'
      ]},
      { heading: 'Custos e retorno sobre investimento', paragraphs: [
        'Considere descoberta, integração, desenvolvimento, segurança, avaliação, treinamento e manutenção, além do consumo de modelo e infraestrutura. O custo por tarefa varia com tamanho do contexto, número de passos e chamadas de ferramenta. Meça por tarefa concluída, não apenas por token ou mensagem.',
        'Estabeleça linha de base: volume, tempo, fila, retrabalho, erro e resultado financeiro. Depois compare horas liberadas, prazo, capacidade, conversão ou perda evitada. Ganho de produtividade só vira retorno quando o tempo liberado recebe uso produtivo e quando a qualidade permanece aceitável.',
        'Faça análise de sensibilidade para volume, taxa de sucesso e intervenção humana. Um caso pode ser viável com 80% de conclusão assistida e inviável se exigir revisão integral. Pilotos devem testar essas hipóteses, não apenas comprovar que a integração é possível.'
      ]},
      { heading: 'Roteiro de contratação de uma empresa de IA', paragraphs: [
        'Entregue o mesmo cenário a cada fornecedor: processo, volume, sistemas, restrições e resultado. Peça hipóteses, arquitetura, etapas, riscos, critérios de aceite, custos variáveis, suporte e propriedade dos artefatos. Uma boa proposta explicita o que precisa ser descoberto em vez de prometer precisão total.',
        'Procure experiência em produto, software, dados, integrações, segurança e operação. Pergunte como a equipe avalia qualidade, trata incidentes e mantém fontes. Veja exemplos em que a IA executa parte de um processo, não apenas uma interface de chat. Converse com quem participará da entrega.',
        'A Tironi Tech desenvolve agentes e automações sob medida conectados às regras e sistemas da empresa. O trabalho começa pelo gargalo, entrega um fluxo observável e evolui com evidências. Essa abordagem preserva controle e evita que a organização dependa de uma demonstração sem operação.'
      ]},
      { heading: 'Checklist para sair do piloto', paragraphs: [
        'Antes de produção, confirme objetivo, dono, fonte, permissões, casos de teste, critérios de aceite, logs, alertas, contingência, suporte e treinamento. Verifique dados pessoais, contratos, retenção e comunicação ao usuário. Toda ferramenta deve ter limite e todo estado crítico deve ter responsável.',
        'Pilote com grupo e volume controlados. Compare linha de base e acompanhe correções. Amplie por etapas, mantendo capacidade de retorno. Documente versões e decisões. Se o agente ainda depende de uma pessoa técnica para interpretar cada falha, a operação não está pronta.',
        'Produção começa quando o sistema entrega valor repetível e a organização consegue governá-lo. O melhor agente não é o que parece mais autônomo; é o que conclui uma tarefa útil, dentro das regras, e deixa evidência suficiente para confiança e melhoria.'
      ]}
    ],
    cta: { title: 'Existe um processo que pode virar um agente de IA?', text: 'A Tironi Tech mapeia o fluxo, integra os sistemas e implanta agentes com critérios de qualidade, segurança e resultado.', label: 'Solicitar diagnóstico', href: '/#contato' },
    sources: [nistAiRmf, nistGenAi, owaspLlm, anpdGuides, microsoftRag]
  },
  {
    slug: 'rag-empresarial-ia-documentos-crm-erp',
    title: 'RAG empresarial: como conectar IA a documentos, CRM e ERP sem perder controle',
    description: 'Guia técnico e de negócio para construir uma IA que consulta conhecimento interno, apresenta evidências, respeita permissões e melhora com avaliação contínua.',
    category: 'Software personalizado',
    date: '2026-09-22', updated: '2026-09-22', featured: true,
    keywords: ['RAG empresarial', 'IA conectada aos dados da empresa', 'IA para documentos', 'integração de IA com CRM e ERP', 'software de IA sob medida'],
    intro: 'RAG, sigla para geração aumentada por recuperação, permite que uma aplicação de IA consulte fontes específicas antes de responder. Em empresas, isso pode transformar manuais, contratos, catálogo, CRM e ERP em contexto útil. A promessa parece simples; a execução exige governança de conteúdo, controle de acesso, busca bem projetada e avaliação de ponta a ponta.',
    takeaways: ['RAG não corrige conteúdo desatualizado ou contraditório.', 'A busca precisa respeitar identidade e permissão antes de recuperar trechos.', 'Dados estruturados e documentos exigem conectores e estratégias diferentes.', 'Citações, recusa e avaliação são partes do produto.', 'O sistema deve medir recuperação e resposta separadamente.'],
    sections: [
      { heading: 'O que RAG resolve e o que não resolve', paragraphs: [
        'Modelos de linguagem têm conhecimento limitado pelo treinamento e não conhecem automaticamente procedimentos ou dados atuais da empresa. RAG recebe uma pergunta, recupera conteúdo relevante e fornece esse contexto ao modelo para produzir a resposta. A empresa pode atualizar as fontes sem treinar novamente o modelo a cada mudança.',
        'RAG é indicado quando a resposta depende de informação proprietária, dinâmica ou que precisa de evidência. Suporte técnico, consulta a políticas, preparação comercial, pesquisa jurídica interna e assistência operacional são bons exemplos. Ele não é obrigatório para tarefas de transformação de texto que já recebem todo o contexto necessário.',
        'RAG não transforma uma base desorganizada em verdade. Documentos duplicados, versões conflitantes, permissões ausentes e tabelas sem definição geram respostas inconsistentes. O projeto começa pela qualidade e autoridade das fontes, não pela escolha do banco vetorial.'
      ]},
      { heading: 'A arquitetura de ponta a ponta', paragraphs: [
        'Na ingestão, conectores leem fontes, extraem texto e estrutura, aplicam limpeza, dividem conteúdo e registram metadados. Na consulta, o sistema interpreta a pergunta, aplica filtros de acesso, busca candidatos, reordena resultados e monta contexto. Na geração, o modelo responde conforme instruções e apresenta referências. Observabilidade registra cada etapa.',
        'Separe plano de conteúdo e plano transacional. Documentos explicam política e procedimento; APIs consultam estado atual e executam ações. Uma resposta sobre prazo padrão pode vir de manual. O status de um pedido deve vir do ERP. Misturar snapshot documental e dado operacional produz informação vencida.',
        'Mantenha identificadores estáveis da fonte, versão, seção e permissão. Assim é possível invalidar conteúdo, mostrar citação e reproduzir uma resposta. Sem linhagem, a equipe não sabe qual documento corrigir quando o usuário encontra um erro.'
      ]},
      { heading: 'Inventário e governança das fontes', paragraphs: [
        'Crie inventário com fonte, proprietário, público, classificação, atualização, validade e sistema de origem. Determine qual documento vence em caso de conflito. Conteúdo sem dono não deve entrar em uma base que produzirá orientação operacional. Comece por um domínio pequeno e confiável.',
        'Defina ciclo de publicação. Rascunhos e arquivos pessoais não devem ser indexados automaticamente. Uma alteração aprovada dispara processamento, testes e troca de versão. Exclusões também precisam propagar para índice e cache. Mantenha histórico suficiente para auditoria, sem servir versão antiga.',
        'Use a fila de perguntas sem resposta para priorizar conteúdo. Quando várias pessoas buscam o mesmo tema, talvez falte documento ou a taxonomia esteja ruim. RAG bem operado revela lacunas de conhecimento e cria um ciclo editorial baseado na demanda real.'
      ]},
      { heading: 'Preparação, divisão e metadados', paragraphs: [
        'A divisão deve preservar unidade semântica. Políticas podem ser divididas por seção; manuais, por procedimento; contratos, por cláusula; catálogos, por produto. Trechos muito curtos perdem contexto, e trechos muito longos diluem relevância e aumentam custo. Teste tamanhos com perguntas reais em vez de copiar um número padrão.',
        'Repita no trecho informações necessárias para interpretação, como título do documento, produto, região e vigência. Metadados permitem filtrar antes da busca: idioma, área, versão, cliente, confidencialidade e validade. Filtro correto reduz espaço de busca e impede que relevância semântica atravesse uma fronteira de acesso.',
        'Tabelas, imagens e PDFs digitalizados exigem tratamento próprio. Preserve cabeçalhos, relações e unidades. OCR deve ser revisado em amostras. Quando a estrutura for essencial, converta para representação que a aplicação possa consultar, ou use ferramenta especializada em vez de achatar tudo em texto.'
      ]},
      { heading: 'Busca lexical, vetorial e híbrida', paragraphs: [
        'Busca lexical encontra termos exatos, códigos, nomes e frases. Busca vetorial aproxima significados mesmo com palavras diferentes. Em empresas, a combinação costuma funcionar melhor: um código de peça pede exatidão; uma dúvida descrita livremente pede semântica. Reordenação pode melhorar os candidatos antes da geração.',
        'A consulta também pode ser expandida ou reescrita, desde que o sistema preserve a intenção. Siglas internas, nomes antigos e sinônimos merecem dicionário. Não transforme uma pergunta específica em algo amplo demais. Registre a consulta original e as variações para diagnosticar recuperação.',
        'Ajuste quantidade de resultados e diversidade. Dez trechos quase idênticos ocupam contexto sem acrescentar evidência. Agrupe por documento, remova duplicatas e priorize fontes autoritativas e atuais. Se resultados não atingirem um limiar, recuse ou peça esclarecimento.'
      ]},
      { heading: 'CRM e ERP: dados estruturados não são uma pasta de documentos', paragraphs: [
        'CRM e ERP contêm estado atual, relações e regras. Em vez de exportar tabelas inteiras para um índice, exponha consultas autorizadas por APIs ou ferramentas. O modelo interpreta a solicitação; a aplicação valida parâmetros e consulta o sistema. A resposta usa os dados retornados com horário e escopo claros.',
        'Crie uma camada semântica que traduza termos do negócio em campos e métricas. “Clientes ativos”, “receita” e “pedido atrasado” precisam de definições. Sem isso, duas consultas corretas podem produzir números incompatíveis. Reutilize regras oficiais de BI quando existirem.',
        'Para análises, limite período, linhas e agregações. Previna consultas arbitrárias e vazamento entre contas. Ações de escrita, como alterar estágio ou liberar pedido, exigem validação, permissão e confirmação conforme impacto. RAG informa; uma integração transacional controlada executa.'
      ]},
      { heading: 'Controle de acesso antes da recuperação', paragraphs: [
        'Autentique o usuário e aplique autorização antes de selecionar conteúdo. Segurança posterior, que tenta esconder trechos depois de recuperá-los, é frágil: o dado já entrou no contexto do modelo. Permissões devem acompanhar documento e registro desde a origem até índice, cache, logs e interface.',
        'Adote menor privilégio e separação por organização, área, função e sensibilidade. Quando a fonte muda a lista de acesso, o índice precisa refletir. Teste usuário sem permissão, mudança de cargo, documento compartilhado e revogação. A busca nunca deve usar relevância para superar autorização.',
        'Evite registrar conteúdo integral em telemetria. Use identificadores, métricas e amostras protegidas. Defina retenção e acesso aos logs. Ambientes de desenvolvimento não devem receber dados de produção por conveniência; use conjuntos anonimizados ou sintéticos sempre que possível.'
      ]},
      { heading: 'Respostas com citação, incerteza e recusa', paragraphs: [
        'Instrua o sistema a responder com base nas fontes recuperadas e a distinguir fato encontrado de orientação geral. Apresente referência utilizável: documento, seção, data e link quando permitido. A citação deve sustentar a afirmação próxima, não apenas aparecer ao final como decoração.',
        'Defina comportamento para evidência insuficiente, conflito e pergunta fora do escopo. Uma resposta útil pode pedir produto, período ou unidade antes de buscar novamente. Se fontes divergirem, mostre a divergência e encaminhe ao proprietário. Inventar uma síntese destrói a confiança que a citação deveria criar.',
        'Calibração importa. O sistema não conhece a própria certeza apenas porque escreve “tenho confiança”. Use sinais de recuperação, cobertura, concordância e regras. Em tema de alto impacto, a aplicação pode preparar a análise e exigir revisão humana independentemente da pontuação.'
      ]},
      { heading: 'Como avaliar recuperação e geração', paragraphs: [
        'Monte perguntas com fontes e respostas de referência. Inclua formulações diferentes, dúvidas incompletas, casos sem resposta, documentos conflitantes e restrições de acesso. Especialistas do domínio devem validar o conjunto. Atualize uma parte com casos recentes sem apagar a base fixa de regressão.',
        'Avalie recuperação separadamente: o trecho correto apareceu? Em qual posição? Houve conteúdo proibido? Depois avalie resposta: é fiel ao contexto, responde à pergunta, cita corretamente e recusa quando necessário? Por fim avalie utilidade: o usuário concluiu a tarefa com menos tempo e erro?',
        'A documentação da Microsoft para RAG ressalta abordagem estruturada e avaliação do componente de busca. Essa separação acelera diagnóstico: se o trecho correto não foi recuperado, mudar prompt não resolve; se foi recuperado e a resposta errou, o problema está em instrução, contexto ou modelo.'
      ]},
      { heading: 'Observabilidade, custo e desempenho', paragraphs: [
        'Registre duração e resultado de ingestão, consulta, filtros, busca, reordenação, geração e ferramentas. Acompanhe ausência de resultado, recusa, citação, feedback e custo por tarefa. Use identificadores para reproduzir a execução com a mesma versão das fontes e da configuração.',
        'Cache pode reduzir custo, mas precisa respeitar usuário, permissão, versão e validade. Respostas com dados atuais exigem expiração curta ou nova consulta. Contextos enormes não garantem qualidade; aumentam latência e podem introduzir distração. Recuperação precisa costuma ser melhor que volume.',
        'Defina objetivos de serviço para jornadas importantes e degradação segura. Se a busca vetorial falhar, talvez a aplicação use busca lexical; se a fonte transacional falhar, deve informar indisponibilidade em vez de usar dado antigo sem aviso. A experiência precisa refletir o estado real.'
      ]},
      { heading: 'Segurança contra conteúdo malicioso', paragraphs: [
        'Documentos recuperados podem conter instruções maliciosas ou texto que tenta controlar o modelo. Marque conteúdo como dado, não como instrução. Restrinja ferramentas, valide saídas e use allowlists para destinos e operações. Um documento não pode conceder a si próprio permissão.',
        'Teste prompt injection direto e indireto, links de exfiltração, tentativa de revelar documentos, mistura entre clientes e chamada de ferramenta não autorizada. Reduza impacto com isolamento, menor privilégio e confirmação. Filtros de conteúdo são uma camada, não a fronteira principal de segurança.',
        'Considere também envenenamento de fonte. Um arquivo alterado pode influenciar muitas respostas. Controle publicação, assinatura ou origem, monitore mudanças e permita retirar uma versão rapidamente. A trilha precisa ligar resposta ao conteúdo usado.'
      ]},
      { heading: 'Plano de implementação por fases', paragraphs: [
        'Na descoberta, escolha domínio e usuários, inventarie fontes, defina tarefas e riscos. Na prova técnica, teste extração, recuperação e permissão com um conjunto pequeno. No piloto, entregue interface, citações, feedback e avaliação para um grupo. Em produção, automatize ingestão, observabilidade, suporte e governança.',
        'Cada fase termina com evidência. A prova responde se a informação pode ser recuperada. O piloto responde se usuários concluem tarefas e confiam. A produção responde se qualidade e custo permanecem sob volume e mudança. Não expanda fontes antes de estabilizar o ciclo de correção.',
        'A Tironi Tech desenvolve soluções de IA conectadas a documentos e sistemas empresariais, combinando software sob medida, automação e integrações. O escopo pode começar por um assistente interno e evoluir para ações controladas em CRM, ERP ou plataformas próprias.'
      ]},
      { heading: 'Checklist para contratar ou construir', paragraphs: [
        'Pergunte quem é dono das fontes, como versões são atualizadas, como permissões são aplicadas e como respostas são avaliadas. Exija demonstração de pergunta sem resposta, documento conflitante, usuário sem acesso e sistema indisponível. Uma demonstração com cinco perguntas perfeitas não representa produção.',
        'Peça separação de custos de ingestão, armazenamento, busca, modelo, integração e operação. Verifique portabilidade dos dados, documentação, logs e testes. Entenda como trocar modelo ou provedor sem reconstruir toda a aplicação. Contratos devem esclarecer uso dos dados e responsabilidades.',
        'O aceite precisa medir recuperação, fidelidade, citação, segurança, latência e utilidade em casos reais. Comece pequeno, porém completo: fonte governada, usuário autenticado, resposta com evidência, feedback e rotina de atualização. Essa base permite crescer sem perder controle.'
      ]}
    ],
    cta: { title: 'Quer conectar a IA ao conhecimento da sua empresa?', text: 'Desenhamos a arquitetura, organizamos as fontes e integramos a solução aos sistemas que sustentam sua operação.', label: 'Falar sobre um projeto de IA', href: '/#contato' },
    sources: [microsoftRag, microsoftRagEvaluation, nistAiRmf, owaspLlm, anpdGuides, googleHelpful]
  }
];
