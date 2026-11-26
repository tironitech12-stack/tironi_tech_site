export const agentOperationalPermissions = {
  slug: 'consultoria-ia-matriz-permissoes-operacionais',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Compare propostas para desenhar permissões de agentes de IA, com regras por ação, aprovação humana e testes no sistema de destino.',
  keywords: ['permissões para agentes de IA na operação', 'matriz de permissões para agentes de IA', 'aprovação humana em agentes de IA', 'contratar desenho de permissões de IA'],
  emphasis: 'permissões para agentes de IA na operação',
  intro: 'Ao contratar o desenho de permissões para agentes de IA na operação, peça uma matriz que diga o que o agente pode consultar, sugerir e executar. Para cada ação, identifique o sistema responsável, as condições de aprovação e o teste que comprova o controle. Inclua o procedimento para revogar acesso e revisar ações em andamento.',
  takeaways: [
    'Descreva permissões por ação, recurso e condição operacional.',
    'Vincule cada aprovação ao conteúdo que a pessoa revisou.',
    'Teste concessão, recusa e revogação no sistema que aplica o controle.',
  ],
  sections: [
    {
      heading: 'Descreva cada ação pelo efeito que ela tem na operação',
      paragraphs: [
        'A **matriz de permissões para agentes de IA** começa com tarefas que as equipes reconhecem. Em uma distribuidora, o agente pode consultar o saldo, preparar um pedido de transferência e, após aprovação, solicitar seu registro. Cada verbo muda a relação com o sistema. A consulta pode mostrar informações de uma filial. A preparação pode gerar um rascunho com origem e destino. O registro pode reservar saldo e alterar o trabalho do armazém. Liste as ações individualmente antes de decidir que identidade e aprovação serão usadas.',
        'Para cada ação, identifique o recurso e a condição de negócio. Consultar estoque da filial A é diferente de receber dados de toda a rede. Criar uma solicitação para revisão é uma autorização distinta de liberar sua execução. Um limite de quantidade pode depender do produto, da unidade ou do papel da pessoa que aprova. Peça que a proposta mostre como esses limites serão definidos e mantidos, incluindo uma pessoa responsável pelas regras quando a organização muda sua estrutura.',
        'Descreva o resultado esperado no sistema de destino. Um agente que pretende reservar saldo pode receber uma confirmação, um aviso de que a reserva já existe ou uma recusa porque o saldo mudou. A política deve indicar quais resultados exigem nova autorização, correção ou supervisão. Peça uma representação que ligue a solicitação ao destino e permita reconhecer o que já aconteceu. Isso evita tratar uma mensagem de sucesso na interface como prova suficiente de que a ação foi concluída.',
      ],
    },
    {
      heading: 'Identifique em nome de quem o agente atua',
      paragraphs: [
        'Registre a pessoa que iniciou a solicitação, a identidade usada na execução e o papel que autoriza o efeito no destino. A pessoa pode atuar em uma filial, enquanto a aplicação consulta uma fonte autorizada por meio de uma identidade de serviço. O desenho deve explicar como as regras da empresa permanecem aplicáveis quando essa identidade é usada. Uma conexão com alcance técnico maior exige que o escopo documente o controle que limita ações à unidade e ao contexto permitidos.',
        'Inclua atividades iniciadas por horário ou evento. Uma rotina pode criar rascunhos de transferências toda manhã a partir de limites definidos pelo planejamento. Nesse caso, registre quem responde pela política, qual identidade prepara os rascunhos e quem aprova a etapa seguinte. Combine o tratamento para uma filial que entra ou sai do recorte. O teste deve mostrar que o agente começa a operar somente dentro da configuração autorizada e que o responsável consegue conferir os resultados produzidos naquele intervalo.',
        'Verifique também a troca de função. Uma pessoa que revisava transferências de uma região pode passar a trabalhar em outra. Peça que o fornecedor descreva onde a mudança de papel é registrada e o que acontece a solicitações pendentes. Algumas autorizações são válidas até uma data definida. Em outros casos, o estado deve voltar para revisão. A empresa precisa decidir o comportamento antes de aprovar piloto e nomear quem poderá confirmar a revogação nas ferramentas que participam do fluxo.',
      ],
    },
    {
      heading: 'Vincule a aprovação humana à ação específica',
      paragraphs: [
        'Uma **aprovação humana em agentes de IA** precisa mostrar o que será executado. No exemplo de transferência, a pessoa deve conseguir rever produto, quantidade, origem, destino e condições relevantes. Apresente também a fonte usada quando ela for importante para julgar a recomendação. Se a quantidade mudar entre revisão e execução, o procedimento deve dizer se é necessário retornar para aprovação. Defina esse comportamento no escopo para que o fornecedor consiga demonstrar qual versão a pessoa realmente aprovou.',
        'Liste as situações que exigem outra pessoa ou uma etapa adicional. Um supervisor pode aprovar até um limite e encaminhar volumes maiores à área de planejamento. A regra pode exigir que a pessoa que pediu a transferência seja diferente de quem a autoriza. Inclua substituições, ausências e horário de atendimento. Peça uma prova com uma decisão dentro do limite e outra que precisa de escalonamento. Confira como as pendências continuam visíveis para os operadores durante a espera.',
        'Especifique também validade e encerramento. A aprovação de um rascunho pode expirar se a demanda mudar, se o saldo ficar indisponível ou se a janela de execução terminar. Registre que dados serão conferidos no momento do envio ao destino. Um saldo exibido na tela de revisão pode não continuar disponível no momento da reserva. Se o destino recusa a ação, confirme como a pessoa recebe o retorno, quais registros são preservados e quem pode preparar a próxima tentativa.',
      ],
    },
    {
      heading: 'Transforme a política em verificações em cada sistema',
      paragraphs: [
        'Para cada permissão, indique onde a decisão será aplicada e de onde vêm os dados necessários. A tela pode oferecer ações diferentes por papel e a integração pode exigir uma autorização própria para aplicar a transferência. Peça que a consultoria mostre como esses controles se relacionam. O sistema que registra a ação deve receber somente operações admitidas pelo desenho. Quando o destino possui regras de negócio próprias, documente como sua confirmação e suas recusas chegam à aplicação que apresenta os casos à equipe.',
        'Peça um cenário em que o agente identifica a ação certa, mas falta uma condição. Pode existir saldo suficiente e ainda faltar aprovação da unidade de origem. Execute a prova em homologação com registros fictícios e confira se a solicitação permanece em revisão, se o saldo continua igual e se a pessoa responsável vê o motivo. A evidência deve vir da aplicação e, quando possível, do sistema que guarda o recurso. Compare também um caso autorizado com os mesmos campos para confirmar que a restrição não impede o trabalho esperado.',
        'Registre o comportamento quando a política ou a fonte de identidade está temporariamente indisponível. Decida com a empresa quais ações podem esperar, como mostrar a pendência e quem pode orientar a operação enquanto o serviço volta. Um supervisor pode continuar consultando informações disponíveis em seu sistema de trabalho, conforme sua autorização. Para a ação automatizada, estabeleça a condição que precisa voltar a ser verificada antes da execução. Inclua no escopo a forma de comunicar esse estado ao solicitante.',
        'Defina quais mudanças de regra exigem nova rodada de teste. Adicionar uma unidade pode envolver grupos de usuários, fontes de saldo e um responsável por aprovar. Alterar somente o limite de quantidade pode afetar o caminho de escalonamento. Peça que o fornecedor entregue referências para localizar as configurações e os casos de aceite correspondentes. A equipe deve conseguir prever que processos serão afetados e decidir a data adequada para publicar a alteração.',
      ],
    },
    {
      heading: 'Teste revogação com trabalho pendente e confirme o resultado no destino',
      paragraphs: [
        'A revogação ganha significado quando há tarefas em curso. Simule a saída de uma pessoa que podia aprovar transferências. Prepare um rascunho ainda sem revisão, outro já aprovado e um terceiro enviado ao destino. A empresa precisa decidir o efeito da mudança sobre cada estado. Pode encaminhar o primeiro a uma nova pessoa, solicitar confirmação adicional para o segundo e manter o terceiro em conciliação. Especifique o comportamento esperado antes de pedir que a consultoria demonstre a revogação em ambiente autorizado.',
        'Verifique os intervalos em que a mudança se propaga. A identidade pode ser atualizada antes de a fila receber a nova atribuição. Uma notificação já enviada pode apontar para uma tarefa que mudou de responsável. Peça que o teste registre quando a alteração começa a valer, o que cada papel consegue fazer depois dela e em qual momento o suporte deve agir. Se algum componente segue um intervalo de sincronização próprio, inclua esse tempo na condição de aceite e documente como a operação identifica um atraso.',
        'Confira as tarefas com resultado ainda incerto. Um pedido pode ter sido enviado antes da revogação e o destino ainda não confirmar se houve reserva. Combine quem pode consultar o estado para reconciliar o caso e quem poderá autorizar o passo seguinte. Para evitar duplicação, vincule a verificação ao identificador usado no registro inicial. Use uma situação com confirmação e outra sem confirmação no roteiro comercial. O prestador deve demonstrar onde a equipe encontra a evidência e como reconhece uma solicitação pronta para nova análise.',
        'Inclua um cenário de suspensão de um fluxo inteiro, como uma unidade que deixa de usar a automação durante inventário. Estabeleça o destino das novas solicitações, o tratamento dos rascunhos e a pessoa que autoriza retomar. Faça uma conferência em ambiente de teste para confirmar que o restante da operação continua nas condições acordadas. Registre o tempo necessário para suspender e restabelecer o trabalho, os casos que pediram intervenção e os pontos que permanecem sob dependência de outra equipe.',
      ],
    },
    {
      heading: 'Registre somente a evidência que permite conferir a decisão',
      paragraphs: [
        'Para um registro de auditoria, comece pelo que a empresa precisa responder. Quem iniciou a solicitação? Qual regra e qual versão estavam vigentes? Quem aprovou a ação? Qual resultado o destino confirmou? Combine identificadores, horários e estados que possam ser correlacionados no caminho autorizado. Uma recusa precisa ter motivo suficiente para orientar a área. Um diagnóstico pode apontar para o documento original quando houver necessidade de consultar detalhes por meio do acesso apropriado.',
        'Escolha quem acompanha cada tipo de evidência. Uma supervisora pode consultar a lista de pedidos pendentes e os motivos de encaminhamento. A equipe que administra integrações pode verificar confirmações e recusas do serviço. A gestão pode precisar apenas de contagens por unidade. Defina que informações aparecem para cada público e como o registro de auditoria será usado em incidentes ou revisões. Inclua a exportação e o acesso a registros históricos no roteiro se forem parte do trabalho contratado.',
        'Peça uma verificação de rastreabilidade com uma ação autorizada e uma recusada. Para a primeira, confirme a correspondência entre o rascunho revisado, o envio e a resposta do destino. Para a segunda, verifique que a ação permanece sem efeito e que o operador tem um encaminhamento previsto. Determine onde a evidência será guardada, por quanto tempo ficará disponível segundo as definições internas e quem poderá reexecutar o teste após uma mudança de papel ou de integração.',
      ],
    },
    {
      heading: 'Monte um roteiro de homologação a partir da matriz de permissões',
      paragraphs: [
        'Converta cada condição importante em um caso que a empresa consiga repetir. Para uma transferência, indique a filial, o produto, a quantidade, quem solicita, quem aprova e o resultado esperado. Descreva também o que precisa ser conferido depois no sistema de estoque. Um caso aprovado só demonstra a regra por inteiro quando a equipe consegue vincular a aprovação ao efeito correto. A mesma verificação deve mostrar que um caso recusado não gerou reserva nem deixou uma tarefa invisível para quem precisa atendê-la.',
        'Escolha pares de exemplos que alteram uma única condição. Em uma rodada, a mesma pessoa consegue revisar uma transferência dentro do limite e precisa encaminhar outra de valor superior. Em outra, dois supervisores com atribuições diferentes recebem solicitações equivalentes. Registre a expectativa antes do teste e peça que o avaliador explique onde obteve a referência. Essa estrutura deixa claro se a diferença veio do papel, da unidade, do valor ou de outro requisito de negócio.',
        'Reserve uma rodada para casos com estado intermediário. Uma aprovação pode chegar quando a solicitação foi atualizada, quando o saldo mudou ou quando a janela expirou. Registre quem toma a próxima decisão, que estado aparece na fila e qual evidência permanece disponível. Combine se o teste precisará de participação da equipe responsável pelo destino. Quando o ambiente usa um simulador, documente o comportamento representado e enumere as decisões que ainda precisam de uma verificação em homologação.',
        'Defina o aceite por cobertura das regras e consequência dos erros. Uma divergência de apresentação pode exigir correção de interface. Uma ação executada sem a condição prevista deve ter tratamento compatível com o seu efeito e novo teste antes do avanço. Identifique quem decide, em que ambiente a correção será verificada e quais casos próximos serão repetidos. Ao receber o roteiro, confirme se outra pessoa da empresa consegue executar os casos com os acessos previstos.',
      ],
    },
    {
      heading: 'Compare propostas pelo que será instalado, testado e entregue',
      paragraphs: [
        'Ao **contratar o desenho de permissões de IA**, envie o mesmo conjunto de ações aos fornecedores. Inclua consulta, criação de rascunho, aprovação e execução no destino. Diga quais sistemas já controlam papéis, quem mantém a política e em que ambiente cada atividade pode ser examinada. Peça que discriminem descoberta, organização da matriz, integração e testes. Se uma proposta termina na documentação, identifique quem colocará as decisões em funcionamento e quem verificará a aplicação dos controles.',
        'Solicite uma demonstração com material fictício. Apresente um pedido dentro do limite e outro que exige autorização adicional. Peça que o fornecedor explique onde o segundo ficará, quem receberá a pendência e como a operação reconhecerá o resultado quando a ação for liberada. Inclua uma alteração no pedido depois da revisão. Compare se cada candidato consegue mostrar a ligação entre a condição acordada e a evidência, inclusive quando o fluxo depende de outro sistema.',
        'Confronte valores com as dependências do trabalho. A proposta pode pressupor que o cliente já tem papéis definidos e um ambiente de teste com regras equivalentes às de produção. Se as filiais mantêm cadastros próprios ou se os limites são administrados fora do ERP, o esforço pode aumentar. Peça que cada candidato identifique a premissa, o responsável por confirmá-la e a atividade necessária quando ela não se sustenta. Inclua as horas das equipes internas que participarão das homologações.',
        'Peça entregáveis utilizáveis no dia seguinte ao projeto. A matriz precisa ter versão, responsáveis e referências ao sistema que aplica cada regra. O roteiro de testes precisa permitir executar, conferir e repetir a prova. A operação precisa ter instrução para encaminhar recusas, suspender o fluxo quando autorizado e reconciliar uma execução pendente. Indique quem manterá cada material e solicite uma sessão em que uma pessoa da empresa localize uma regra e repita um teste sem depender de memória da equipe do fornecedor.',
      ],
    },
    {
      heading: 'Calcule o custo da implantação e o esforço de manter as regras',
      paragraphs: [
        'Peça uma estimativa baseada em ações e sistemas, com as regras incluídas na proposta. Quatro ações num único ERP com catálogo de papéis definido podem exigir menos trabalho do que duas ações distribuídas por unidades com integrações distintas. Informe as variações que mudam o desenho, como filiais que aprovam por faixa, produtos administrados pelo planejamento central e consultas que dependem de outra identidade. Solicite a estimativa da etapa comum e do trabalho adicional por variação confirmada. Isso evita comparar preços que partem de coberturas diferentes.',
        'Inclua o custo de estabelecer o ambiente, preparar exemplos e reservar pessoas para homologar. Se a prova exige um responsável pelo estoque e outro pela identidade, confirme quantas sessões cada equipe precisará acompanhar. Conte também o tempo de verificar a escrita no destino e de resolver dados que diferem entre ambientes. Um fornecedor pode orçar apenas o conector, enquanto outro inclui a matriz, a aprovação e a verificação operacional. Calcule a diferença em atividades e horas que sua própria equipe assumirá.',
        'Faça uma previsão simples do esforço de revisão. Imagine 500 solicitações mensais no primeiro recorte. Se todas exigirem dois minutos de aprovação, serão cerca de 16 horas e 40 minutos de revisão ativa. Se um quarto precisar de uma segunda conferência de três minutos, acrescente seis horas e 15 minutos. A estimativa não inclui espera, ajustes nem períodos de maior volume. Use dados da empresa para verificar se o departamento consegue absorver essa carga e medir a fila nos horários em que a aprovação precisa acontecer.',
        'Separe investimento de implantação e atividades mensais. A manutenção pode incluir trocas de papel, atualização dos limites, conferência de acessos temporários e retestes depois de uma mudança de ERP. Defina a frequência esperada, quem executa com os acessos da empresa e como solicitar apoio. Peça ao fornecedor que indique quais alterações entram no suporte e quais exigem orçamento. A proposta deve permitir estimar o que acontece com o custo quando o agente passa de uma unidade piloto a várias unidades.',
      ],
    },
    {
      heading: 'Planeje a entrada gradual e a transferência para os responsáveis',
      paragraphs: [
        'Combine a primeira etapa em torno de unidades, papéis e ações específicas. A distribuidora pode começar com consultas e rascunhos em duas filiais, mantendo a publicação na rotina já conhecida. Quando os responsáveis verificarem visibilidade, aprovação e confirmação no destino, a empresa pode autorizar a próxima ação dentro de um intervalo acompanhado. Declare quais condições liberam a mudança, qual pessoa decide e como os operadores reconhecem que uma função está disponível. Registre o intervalo para observar o primeiro volume real.',
        'Durante a janela, acompanhe pedidos recebidos, rascunhos, aprovações, recusas e confirmações. Compare as contagens com o trabalho que aparece no destino. Se há tarefas pendentes de revisão, confirme que o volume cabe nas escalas previstas e que supervisores sabem localizar o caso. Inclua uma conferência após mudança de turno porque o acesso de uma equipe pode ser diferente do da anterior. Para o aceite, preserve evidência dos casos que exigiram tratamento adicional e do procedimento usado.',
        'Treine a equipe com um exemplo de alteração de limite e outro de troca de responsável. Dê acesso à documentação e peça que a pessoa localize a regra, identifique quem autoriza a alteração e explique que casos serão testados. O material também deve orientar como reconhecer que uma operação foi concluída e como tratar respostas pendentes. A referência do NIST para gestão de riscos de IA oferece um ponto de partida para discutir responsabilidades e acompanhamento. A transferência deve traduzir essas responsabilidades em tarefas que a empresa consegue executar.',
        'Formalize a continuidade depois de a consultoria sair. Indique o responsável pela matriz e quem aceita mudanças nas condições ligadas ao sistema de destino. Defina o endereço dos registros de teste, a forma de notificar a operação e o canal de suporte para casos que exigem análise técnica. Depois de uma alteração, registre quando passou a valer e o que aconteceu com solicitações que já estavam aguardando decisão. Uma equipe que pode rever esse histórico consegue avaliar o efeito de uma regra durante incidentes e auditorias internas.',
      ],
    },
    {
      heading: 'Prepare a contratação com um caso comum e uma exceção relevante',
      paragraphs: [
        'Leve à primeira reunião o fluxo de negócio, os sistemas envolvidos e a lista de ações que a organização considera delegar. Escolha uma tarefa de consulta e outra que possa alterar um registro. Descreva quem pode executá-las no procedimento atual e quando uma aprovação se torna necessária. Use exemplos fictícios. Peça que o fornecedor descreva a investigação inicial, o que poderá entregar antes de ter acesso a um ambiente e como vai verificar as regras que pertencem à área de negócio.',
        'Apresente também uma exceção cujo tratamento é conhecido e uma dúvida ainda em aberto. Por exemplo, a empresa pode saber que uma transferência acima do limite depende de planejamento, mas ainda precisar decidir o efeito de uma autorização expirada sobre um pedido aguardando confirmação. Peça que a consultoria dê opções para tratar essa dúvida e indique quem deve decidir. Uma definição explícita ajuda a estimar implantação e deixa claro como a empresa participará antes do teste.',
        'Ao aprovar o escopo, confirme quais ações terão controles demonstrados, que ambientes participarão e quem verificará os resultados. A matriz final precisa permitir identificar os limites de cada papel e encontrar as evidências das verificações ligadas à regra. Marque a data em que a operação poderá aceitar a transferência e declare os critérios para ampliar o grupo. Esse conjunto dá à direção uma base comercial para contratar e ao time técnico um roteiro para verificar o efeito das permissões.',
      ],
    },
  ],
  faqs: [
    { question: 'O que deve constar na matriz de permissões de um agente de IA?', answer: 'Registre ação, recurso, identidade, limites, aprovação, sistema que aplica a regra e teste de aceite. Inclua tratamento de recusa, revogação e tarefas em andamento.' },
    { question: 'O que fazer quando o pedido muda depois da aprovação?', answer: 'Compare a nova versão com a aprovada e aplique a regra definida para o processo. Mudanças que afetam o efeito autorizado podem exigir nova aprovação.' },
    { question: 'Como verificar as permissões antes da produção?', answer: 'Teste ações autorizadas e recusadas em homologação, confira o resultado no destino e simule a revogação com registros pendentes.' },
  ],
  cta: {
    title: 'Quer escopar as permissões de um agente de IA?',
    text: 'Apresente à Tironi Tech as ações que o agente deve executar, os sistemas envolvidos e quem hoje aprova cada etapa. Podemos ajudar a definir a matriz, os testes e o escopo de implantação.',
    label: 'Conversar sobre permissões para agentes de IA',
  },
  sources: [
    { label: 'NIST — estrutura de gestão de riscos de IA', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
  ],
};
