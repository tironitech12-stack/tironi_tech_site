export const whatsappUrgentRouting = {
  slug: 'whatsapp-ia-desviar-atendimento-urgente',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Teste se a IA no WhatsApp identifica ocorrências prioritárias, entrega o caso à equipe responsável e escala quando a fila não confirma.',
  keywords: ['IA no WhatsApp encaminha casos urgentes', 'roteamento de casos urgentes pelo WhatsApp', 'teste de escalonamento no WhatsApp'],
  emphasis: 'IA no WhatsApp encaminha casos urgentes',
  intro: 'Para testar se a IA no WhatsApp encaminha casos urgentes à equipe certa, simule ocorrências com impacto conhecido e confira o destino, o prazo e o aceite por uma pessoa responsável. Inclua mensagens ambíguas e situações em que a primeira equipe está indisponível.',
  takeaways: [
    'Defina os sinais operacionais que justificam prioridade.',
    'Verifique a atribuição e o aceite na fila de destino.',
    'Meça separadamente prioridades não reconhecidas e acionamentos indevidos.',
  ],
  sections: [
    {
      heading: 'Comece pela consequência de esperar na fila comum',
      paragraphs: [
        'No **roteamento de casos urgentes pelo WhatsApp**, escreva qual consequência justifica tirar uma ocorrência da fila comum. Uma unidade pode ter perdido a capacidade de registrar todos os pedidos, enquanto outra relata um erro em uma única linha e dispõe de procedimento manual. Os relatos podem mencionar o mesmo sistema. Use impacto, extensão e possibilidade de continuidade como informações de triagem, conforme as regras que a empresa aprova. Indique quem decide quando as evidências ainda são insuficientes.',
        'Imagine uma empresa que mantém sistemas de expedição para distribuidores. Uma mensagem diz que o leitor da doca parou, mas não explica se outras docas continuam funcionando. Outro cliente diz que a expedição inteira travou e que nenhum volume pode sair. O agente deve coletar a informação que distingue essas situações ou encaminhar o relato incompleto para verificação. Peça ao fornecedor que mostre a diferença no destino e no prazo, mesmo quando os dois clientes usam a palavra “urgente”.',
        'Escreva uma regra por tipo de ocorrência com um exemplo dentro e outro fora da prioridade. Inclua prazo em curso, quantidade de operações afetadas, local e alternativa disponível, conforme o processo. Para situações com procedimento especial, use apenas as orientações aprovadas pelos responsáveis e direcione a demanda ao canal correspondente. Na primeira reunião, compare fornecedores com a mesma descrição de impacto e reveja com a operação qualquer termo que possa ser interpretado de maneiras diferentes.',
      ],
    },
    {
      heading: 'Teste as informações que mudam a rota mesmo quando o sintoma é igual',
      paragraphs: [
        'Prepare duas mensagens que descrevem a mesma parada. Em uma, o contrato e o local permitem atendimento direto pela equipe especializada. Na outra, a central precisa confirmar a unidade e a abrangência antes de chamar a equipe. Registre de antemão qual é a resposta esperada, a informação mínima para continuar e quem mantém a responsabilidade enquanto ela falta. Na demonstração, peça que o fornecedor mostre as duas filas e a informação usada para escolher cada uma.',
        'Inclua um contato que volta com informação sobre aumento de impacto. Uma dificuldade inicialmente restrita a uma estação passa a afetar o setor inteiro. O teste deve mostrar se a prioridade muda, qual prazo começa a ser acompanhado e onde a decisão aparece no histórico. Use a mesma referência no canal e no sistema de atendimento. Se o cliente havia recebido uma orientação anterior, verifique como a equipe atualiza a expectativa sem criar vários chamados para a mesma ocorrência.',
        'Faça a prova também no sentido inverso. Uma mensagem relata que nenhuma nota pode ser emitida, mas a verificação esclarece que o problema ficou restrito a um documento já separado para revisão. Defina quem pode reduzir a prioridade e que evidência precisa aparecer. O destinatário deve reconhecer a decisão anterior e o motivo da mudança. Isso permite medir a capacidade de liberar a equipe especializada sem interromper o atendimento que continua necessário.',
      ],
    },
    {
      heading: 'Defina o ponto em que a equipe assume o caso',
      paragraphs: [
        'O **teste de escalonamento no WhatsApp** precisa distinguir aviso enviado, ocorrência criada e responsabilidade confirmada. Uma notificação pode sair sem que alguém esteja disponível para atender. No roteiro, escolha o evento que comprova o aceite e a janela máxima para observá-lo. Em uma simulação, faça o destinatário reconhecer o caso e mostrar onde encontrará o relato e o prazo. Em outra, deixe a confirmação pendente e confira quem continua responsável e quando a fila alternativa recebe a ocorrência.',
        'Peça um caso em que a equipe de destino está disponível, mas trata apenas outra região ou família de produto. O recebimento por alguém não basta quando essa pessoa não pode agir sobre o caso. Documente o procedimento de recusa, o motivo e a passagem para quem pode assumir. Mantenha o relógio original visível à coordenação. O cliente precisa receber uma expectativa que corresponda ao estado confirmado pela operação, inclusive durante as transferências.',
      ],
    },
    {
      heading: 'Use mensagens ambíguas que representem o trabalho real',
      paragraphs: [
        'Monte um conjunto que inclua relatos curtos, correções na mensagem seguinte e descrições com termos usados apenas em uma unidade. No exemplo da expedição, “a doca caiu” pode se referir a um equipamento, a um setor ou ao sistema que controla a fila de veículos. Defina com a operação que pergunta distingue esses sentidos. Na prova, verifique se o agente pede a informação que muda a decisão e mantém o que já foi confirmado. Uma pergunta genérica pode acrescentar tempo sem ajudar a equipe a escolher o destino.',
        'Inclua um relato que traz duas necessidades. A primeira pode informar que os volumes prontos não podem sair; a segunda pode tratar de uma etiqueta incorreta em uma remessa futura. Decida se a equipe registra dois casos, acompanha as duas ações no mesmo registro ou transfere apenas a parte urgente. Use o roteiro para verificar que a parte de menor prioridade fica visível. Se a classificação inicial muda, a coordenação deve conseguir localizar a mensagem que motivou a revisão e o estado de cada ação.',
        'Teste mensagens com pouco contexto e alto impacto possível. A empresa pode exigir passagem a uma pessoa antes de concluir a classificação quando certos dados ainda não foram obtidos. Defina quais informações são indispensáveis para acionar a equipe especializada e quais podem ser completadas depois. Peça uma prova em que o cliente não responde à pergunta inicial. Confira o destino, o prazo e o que aparece na fila. Inclua também uma resposta tardia que muda a decisão sem abrir outra ocorrência.',
      ],
    },
    {
      heading: 'Verifique o encaminhamento com a primeira equipe indisponível',
      paragraphs: [
        'Escreva uma regra de cobertura por horário, região e função. Imagine que a equipe de expedição recebe ocorrências de segunda a sexta, mas no sábado a central verifica quais clientes têm plantão e quais problemas podem ser tratados por outra unidade. Use o mesmo relato em dois horários. Confira que a empresa consegue explicar o destino escolhido e o compromisso comunicado. Para o fornecedor, essa prova esclarece se a implantação precisa consultar uma escala ou aderir a um calendário simples.',
        'Defina como a equipe reconhece que a primeira tentativa falhou. Pode haver rejeição explícita, ausência de confirmação ou confirmação de uma pessoa sem atribuição para decidir. Em homologação, faça o destino receber o aviso sem assumir o caso. Verifique quando o prazo começa, quem acompanha e o que precisa acontecer para iniciar a passagem seguinte. A prova deve preservar a responsabilidade ao longo do intervalo. O operador precisa saber se ainda está cuidando do chamado ou se outra equipe já assumiu.',
        'Inclua um cenário em que a equipe alternativa também não pode atuar. A operação deve escolher o procedimento de contingência e a informação que pode apresentar. Documente que pessoa pode decidir sobre capacidade adicional e onde o estado mais recente fica visível. Quando o atendimento volta ao fluxo habitual, confira ocorrências que ainda esperam análise e aquelas já assumidas por outro grupo. Teste a reconciliação antes de publicar a regra e atribua o trabalho previsto a um papel que estará disponível.',
      ],
    },
    {
      heading: 'Meça o tempo até haver uma pessoa responsável',
      paragraphs: [
        'Marque quatro momentos: primeira mensagem, informação suficiente para triagem, entrada na fila e aceite da equipe. O intervalo total mostra o tempo que o cliente esperou até alguém assumir. Os intervalos intermediários revelam se a espera veio de coleta, processamento ou capacidade. Peça que as propostas usem o mesmo início e fim, inclusive quando o caso passa para outra fila. Se a conversa começa sem dados suficientes, indique como o tempo de espera por complemento será registrado.',
        'Em uma simulação de 80 casos que a operação considera prioritários, 76 chegam à equipe correta e 70 são assumidos dentro da janela acordada. A taxa de destino correto é 95% e a de aceite no prazo, 87,5% do total. Analise os seis que chegaram corretamente e ficaram fora do prazo e os quatro com destino divergente. O primeiro grupo pode revelar problema de cobertura; o segundo pode exigir revisar a regra. Use dados da empresa e distribua os resultados por horário e origem.',
        'Conte também o impacto sobre a equipe especializada. Uma classificação que aciona o plantão para muitas ocorrências comuns pode ocupar o tempo disponível para as prioritárias. Revise uma amostra das chamadas e registre quantas foram aceitas, reclassificadas e devolvidas. Observe o tempo gasto para resolver dúvidas de enquadramento. A área de operações deve definir a combinação de medidas que sustenta o aceite e as condições que exigem supervisão adicional na primeira semana.',
      ],
    },
    {
      heading: 'Simule ocorrências simultâneas sem perder os casos individuais',
      paragraphs: [
        'Prepare uma sequência em que cinco unidades reportam atraso de expedição no mesmo intervalo. Três dependem de um serviço compartilhado, uma aguarda liberação de carga e a última ainda descreveu apenas um erro no leitor. Antes do teste, defina o que caracteriza uma ocorrência comum e quem pode confirmar o vínculo. Na homologação, observe se a coordenação consegue acompanhar o evento compartilhado e, ao mesmo tempo, localizar casos que precisam de providência própria. A proximidade no horário justifica conferência, mas não determina a causa.',
        'Se a empresa agrupa relatos, preserve a origem, a hora de entrada e os compromissos de cada cliente. Uma equipe pode atualizar a ocorrência geral enquanto outra acompanha um caso sujeito a prazo contratual. Inclua um contato que retorna com informação nova depois do agrupamento. Confira como a equipe consegue retirar o caso do grupo quando descobre uma causa diferente, sem apagar a responsabilidade assumida antes. O fornecedor deve mostrar quem pode ajustar a associação e onde o histórico permite conferir a decisão.',
        'Calcule capacidade em termos do trabalho que o destino pode assumir. Em um exemplo hipotético, oito ocorrências precisam de cinco minutos de triagem cada, totalizando 40 minutos ativos. Se duas pessoas podem atuar durante os próximos dez minutos, há 20 minutos disponíveis nesse intervalo, antes de considerar outras tarefas. A comparação deve explicar quais casos entram primeiro e as condições para chamar apoio. Use volumes reais e observe o tempo até o aceite quando demandas comuns e prioritárias chegam juntas.',
        'Teste a fila depois que o volume diminui. Se o contingente extra assumiu parte da demanda, confira quais casos retornam à equipe habitual e quais continuam com quem já investiga. Registre a hora de atribuição, o prazo em curso e o último retorno comunicado. Compare o esforço da coordenação antes, durante e depois do pico. Um fornecedor pode controlar bem a entrada e ainda deixar reconciliação manual no fim do turno. Inclua esse trabalho no orçamento e verifique se existe uma pessoa disponível para executá-lo.',
      ],
    },
    {
      heading: 'Use um roteiro de homologação com resultado definido pela operação',
      paragraphs: [
        'Escolha os casos e registre o resultado esperado antes de mostrar qualquer demonstração. Para cada linha, especifique o impacto observado, as informações disponíveis, a equipe habilitada e a janela para assumir. Acrescente a mensagem que o cliente pode receber e a evidência que a coordenação deve encontrar. Quando duas pessoas da empresa discordam sobre a prioridade, resolva a regra com o responsável pelo processo e registre a decisão. Assim, a comparação entre candidatos mede a aplicação de um procedimento conhecido.',
        'Inclua ocorrências que podem elevar o risco se ficarem invisíveis e outras que testam o excesso de acionamentos. Um bloqueio de expedição pode exigir aceite imediato. Uma solicitação de previsão pode vir escrita como urgente, mas seguir na fila normal conforme o procedimento. Peça aos fornecedores que demonstrem ambos e mostrem os estados no destino. Verifique também uma urgência confirmada que fica mais grave após a primeira passagem. A nova evidência precisa alcançar quem já assumiu e quem coordena a cobertura.',
        'Atribua critérios de aceite por consequência. Um caso prioritário encaminhado a uma fila sem atribuição pode bloquear a liberação daquela regra. Uma informação de interface incompleta pode exigir ajuste e nova sessão se o supervisor ainda consegue agir conforme o procedimento. Defina quem pode classificar o achado, quais casos próximos serão repetidos e como arquivar a evidência. Se um teste só foi possível num simulador, registre o que falta demonstrar na integração real antes de liberar o fluxo.',
        'Solicite uma segunda rodada sem orientação do vendedor. Peça que a equipe interna percorra um caso regular, um urgente e uma recusa, usando a documentação entregue. Cronometre o tempo necessário para localizar prazo e responsabilidade na fila. Verifique se o operador sabe acionar a cobertura e onde corrigir uma prioridade aplicada incorretamente. A prova de autonomia ajuda a estimar treinamento, sustentação e trabalho restante, principalmente em turnos que não participaram da implantação.',
      ],
    },
    {
      heading: 'Compare propostas pelo trabalho antes e depois do encaminhamento',
      paragraphs: [
        'Ao orçar o encaminhamento de urgências pelo WhatsApp, envie aos candidatos a mesma matriz de impacto e o mesmo calendário. Informe quem mantém a escala, que ferramenta guarda a ocorrência e em qual ponto a equipe confirma que assumiu. Peça preço separado para definição de regras, configuração do canal, integração e homologação. Se a proposta termina ao enviar um aviso, a empresa ainda terá de atribuir o acompanhamento e confirmar o recebimento. Inclua no comparativo o esforço necessário para completar essas etapas.',
        'Mostre dois destinos com autonomias diferentes. Uma central pode confirmar a referência e a abrangência da ocorrência, enquanto o especialista pode assumir somente quando há dados suficientes para iniciar a análise. Se o projeto exige que o caso acompanhe uma mudança de equipe, peça uma estimativa para preservar contexto, prazo e histórico. Confirme se ambas as filas usam a mesma ferramenta. Quando os destinos são diferentes, identifique quem verifica cada sistema e se o orçamento inclui a conciliação das referências.',
        'Solicite cenários de custo com ocorrências isoladas e com um pico que atinja várias unidades. Compare consumo do canal, horários de suporte e trabalho de coordenação. Se a capacidade é contratada por equipe, peça o efeito de um feriado regional ou da inclusão de outra carteira. Se a cobrança depende de mensagens, mostre quantos retornos a operação espera durante uma ocorrência prolongada. Identifique a data e as premissas do orçamento para que a equipe possa trocar as estimativas por medidas durante o piloto.',
        'Inclua manutenção do procedimento no preço. Uma mudança de escala pode ser feita pelo supervisor ou depender do integrador. Uma nova categoria pode exigir definir um destino, organizar um fluxo de recusa e repetir testes de autorização. Peça que cada candidato descreva como recebe, avalia e publica essas mudanças. Verifique o que a empresa consegue alterar com segurança e o que exige intervenção externa. Use um cenário de troca de plantão para observar o esforço e o tempo necessários.',
      ],
    },
    {
      heading: 'Acompanhe a primeira janela com relatórios que mostrem responsabilidade',
      paragraphs: [
        'Comece com um horário em que a coordenação consiga comparar a rota sugerida com o procedimento já conhecido. Escolha quais assuntos podem acionar a fila e quais devem seguir para observação. Acompanhe transferências, recusas e aceites junto do prazo original. Se uma pessoa intervém para completar informação, registre essa etapa para avaliar quanto trabalho seguirá existindo ao ampliar. Defina o instante em que o teste termina e quem responde pelas ocorrências ainda em tratamento.',
        'Prepare uma lista diária com os casos urgentes reconhecidos, as prioridades revistas e as passagens sem confirmação. A equipe deve poder abrir uma amostra, verificar a origem do estado e identificar o próximo responsável. Em vez de medir apenas o volume total que entrou, acompanhe os períodos em que a equipe de destino estava disponível. Esse recorte ajuda a decidir se o gargalo está na interpretação da mensagem, na entrega da ocorrência ou na cobertura ofertada depois que ela chega.',
        'Determine quando interromper uma regra. Um erro de destino, atraso acima do limite combinado ou indisponibilidade da escala pode exigir encaminhar a um fluxo alternativo. Indique quem aciona a mudança e como a coordenação identifica os registros anteriores. Durante a retomada, confira uma ocorrência conhecida e compare a fila atual com as pendências que estavam no caminho anterior. Se o suporte técnico precisa participar, inclua a disponibilidade acordada e a instrução de como encaminhar enquanto aguarda.',
      ],
    },
    {
      heading: 'Entregue a regra de prioridade a quem atualiza a escala',
      paragraphs: [
        'Peça que a documentação vincule cada regra ao seu dono, às fontes consultadas e ao teste que confirma a aplicação. Uma tabela pode reunir assunto, impacto, horário, equipe principal e cobertura. A coordenação também precisa localizar a confirmação no sistema de destino. A documentação do Dynamics 365 apresenta classificação e atribuição como etapas do roteamento unificado. Use essa distinção para que a transferência cubra tanto os critérios que definem urgência quanto as rotas que permitem encontrar alguém disponível e habilitado.',
        'Ensaie a atualização de escala com quem cuidará dela depois da implantação. Em um cenário fictício, a unidade que normalmente atende os sábados perde um especialista e outra equipe assume parte da cobertura. Peça a um supervisor que localize o registro autorizado, indique quem pode aprovar a mudança e encontre os testes associados. Em seguida, compare o resultado antes e depois do horário em que a escala passa a valer. Revise também uma ocorrência aberta no momento de troca, pois ela pode seguir sob responsabilidade de quem já a aceitou.',
        'Formalize o que a operação pode fazer quando o conteúdo ou a integração pede correção. Um supervisor pode ajustar a escala autorizada, enquanto a publicação de um novo caminho até o destino talvez dependa de tecnologia. Defina o canal e o prazo para pedir a mudança, como acompanhar a publicação e que evidência precisa aparecer antes de validar. Inclua uma instrução para suspender a rota se a ordem de cobertura estiver incorreta. Se houver trabalho pendente, nomeie quem o verifica e como encontra a última confirmação antes de encaminhar de novo.',
        'Estabeleça uma revisão periódica dos acionamentos. Escolha alguns casos aceitos, outros recusados e um conjunto de demandas comuns que poderiam ter sido urgentes. Compare o que a ferramenta fez com a regra vigente e verifique se os relatos mudaram desde a última atualização. Uma nova unidade pode usar nomes diferentes para equipamentos e processos. Se o comportamento mudou depois de atualizar a regra, levante o efeito nos horários e grupos pertinentes. Registre a condição a ser retestada antes de ampliar o ajuste.',
      ],
    },
    {
      heading: 'Prepare a contratação com exemplos e evidências de aceite',
      paragraphs: [
        'Leve à primeira reunião três relatos fictícios sobre a mesma operação: um urgente, um regular e um ambíguo. Informe o que justifica a diferença, quais equipes podem atuar e onde confirmam que assumiram. Acrescente um calendário com uma exceção e uma janela em que a primeira equipe fica indisponível. Peça que cada candidato use a mesma sequência e mostre o estado no canal, a entrada na fila e o resultado quando a cobertura precisa ser acionada. Solicite que o orçamento indique o esforço de cada etapa.',
        'Explique o que sua empresa quer provar na primeira rodada. Se precisa validar classificação, mantenha as ações em observação e compare a decisão com a coordenação. Se precisa verificar tempo até o aceite, inclua uma fila habilitada em homologação e pessoas que representam os papéis previstos. Registre o nível de evidência de cada cenário, como uma confirmação do sistema ou uma execução simulada. Essa informação permite contratar a etapa seguinte com clareza sobre o trabalho que ainda depende de acesso ou de verificação em produção.',
        'Inclua na proposta um relatório de aceite com a matriz de casos, os resultados no destino, as diferenças encontradas, os responsáveis e o procedimento de reteste. Combine também a entrega da escala, do histórico necessário para acompanhar um caso e das instruções de contingência. Para decidir a expansão, compare o custo de operar a cobertura com o tempo de espera e as falhas evitadas no recorte observado. As próximas regiões podem exigir outra escala, equipes com especialidades diferentes ou critérios locais. Estime o trabalho de verificar essas variações antes de ampliar.',
      ],
    },
  ],
  faqs: [
    { question: 'Como saber se uma urgência chegou à equipe certa?', answer: 'Confira o registro no destino, a atribuição a uma pessoa habilitada e o horário em que ela assumiu o caso.' },
    { question: 'O que testar quando o primeiro destino não confirma?', answer: 'Verifique quem conserva a responsabilidade, quando começa o escalonamento e se o destino alternativo recebe o prazo e o contexto.' },
    { question: 'Que medidas usar para comparar fornecedores?', answer: 'Compare destino correto, aceite no prazo, urgências não reconhecidas, acionamentos indevidos e trabalho de supervisão.' },
  ],
  cta: {
    title: 'Quer testar o encaminhamento de urgências no WhatsApp?',
    text: 'Apresente à Tironi Tech suas regras de prioridade, destinos e horários de cobertura. Podemos ajudar a definir a prova, as métricas e o escopo da integração.',
    label: 'Conversar sobre meu encaminhamento de urgências',
  },
  sources: [
    { label: 'Microsoft Learn — classificação e atribuição no roteamento unificado', url: 'https://learn.microsoft.com/en-us/dynamics365/customer-service/overview-unified-routing' },
  ],
};
