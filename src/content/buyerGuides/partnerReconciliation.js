export const partnerReconciliation = {
  slug: 'sistema-interno-conciliacao-repasses-parceiros',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Compare propostas de sistemas para conciliar repasses a parceiros, com regras de cálculo, extratos, exceções, estornos e fechamento.',
  keywords: ['sistema de conciliação de repasses a parceiros', 'conciliação de comissões e repasses', 'software para conferência de repasses', 'conciliação de repasses no ERP'],
  emphasis: 'sistema de conciliação de repasses a parceiros',
  intro: 'Para contratar um sistema de conciliação de repasses a parceiros, entregue exemplos de transações, regras de cálculo, extratos e ajustes de períodos anteriores. Peça que o fornecedor compare o valor esperado com o valor pago, explique as diferenças sem apagar o histórico e mostre como o fechamento chega ao ERP. O primeiro escopo pode conferir e preparar as decisões de pagamento, mantendo a execução com o financeiro.',
  takeaways: [
    'Compare o direito ao repasse, a instrução de pagamento e a liquidação confirmada.',
    'Teste ajustes retroativos, estornos parciais, diferenças de data e referências ausentes.',
    'Exija um fechamento reproduzível e trilha para aprovar exceções.',
  ],
  visual: {
    title: 'Do evento elegível ao fechamento do parceiro',
    labels: ['Venda ou serviço identificado', 'Valor esperado calculado pela regra vigente', 'Pagamento ou lote conferido na fonte', 'Diferenças justificadas e resultado fechado'],
    caption: 'O sistema consegue explicar uma diferença quando conserva a regra, a fonte e a decisão usadas em cada etapa.',
  },
  sections: [
    {
      heading: 'Decida o que a conciliação precisa provar',
      paragraphs: [
        'Comece mostrando o processo que a área financeira executa para responder quanto cada parceiro tem a receber e o que já foi pago. Reúna um fechamento simples e outro com exceções. Identifique quem exporta os dados, que critérios usa para juntar arquivos e o que explica aos parceiros quando os valores divergem. A proposta precisa substituir ou melhorar passos observáveis. Pedir apenas um painel de repasses deixa indefinidos o cálculo e a conferência que sustentam esse painel.',
        'Separe a apuração do direito ao repasse da emissão e da liquidação. Um parceiro pode ter direito a uma parcela da receita quando um serviço é aceito, enquanto o pagamento só é programado depois de o cliente pagar. A instrução pode ter sido enviada ao banco e ainda aguardar confirmação. No briefing, faça uma coluna para cada momento, sua fonte e o estado que o sistema deve exibir. Essa distinção protege o fechamento de confundir obrigação, programação e dinheiro recebido.',
        'Defina se a primeira fase vai apenas reconstruir e conferir os repasses existentes ou se também vai preparar arquivos ou ordens para pagamento. Em um piloto de conferência, o financeiro pode comparar resultados em paralelo sem mudar a execução vigente. Preparar pagamento acrescenta permissões, validação de dados bancários e tratamento de falhas. Uma proposta pode fazer as duas coisas, mas é preciso saber qual evidência será usada para aceitar cada etapa e quando o risco financeiro muda.',
        'Registre quem consome os resultados. A gestão pode precisar do total por operação, o financeiro precisa saber quais conciliações ficaram abertas e o parceiro quer entender seu saldo. Um erro na visualização pode parecer simples e ainda causar disputa se esconder de onde veio um desconto. Escolha primeiro um público e uma decisão a suportar bem. Depois, organize o detalhe necessário para que cada destinatário consiga conferir aquilo que lhe cabe.',
      ],
    },
    {
      heading: 'Organize as fontes antes de definir a integração',
      paragraphs: [
        'Faça uma lista dos sistemas e relatórios que explicam cada parcela: contrato, pedido, faturamento, pagamento recebido, instrução enviada, extrato do provedor e lançamento do ERP. Indique o responsável por cada fonte e a frequência de atualização. Um relatório do provedor pode mostrar taxas e ajustes, enquanto o extrato bancário confirma a entrada ou saída consolidada. A conciliação deve marcar em que documento ou consulta cada informação apareceu.',
        'Peça exemplos de exportação com cabeçalhos, identificadores, datas e casos corrigidos. Retire dados desnecessários antes da conversa, mas preserve as chaves fictícias consistentes para que o fornecedor consiga relacionar eventos. Uma especificação baseada em colunas enumeradas ajuda pouco quando o mesmo campo muda de formato entre períodos. Inclua dois meses, um arquivo retificado e um lote sem movimento. Isso revela quais controles de importação precisam entrar no orçamento.',
        'Decida como identificar a operação que deu origem ao repasse. Uma venda pode gerar várias parcelas, e uma parcela pode ser dividida entre dois parceiros. O valor e a data ajudam a resolver exceções, mas são insuficientes quando há várias transações iguais. O ideal é ter referências de venda, parcela, parceiro, cálculo e pagamento que permaneçam durante o fluxo. Confirme se as fontes preservam essas relações ou se precisará de uma rotina para construir e revisar associações.',
        'Escreva como cada fonte será consumida. Uma API pode permitir acesso frequente e paginação. Um arquivo recebido mensalmente pode ter controles melhores de fechamento. Se o sistema trabalhar com os dois, teste diferença de competência e atualização tardia. Defina como detectar ingestão repetida, documentos incompletos e registros que chegam fora de ordem. O fornecedor deve mostrar como o operador sabe que o período está completo o suficiente para revisar.',
      ],
    },
    {
      heading: 'Modele a regra de repasse e suas versões',
      paragraphs: [
        'Identifique o valor que serve de base para o repasse. O contrato pode usar valor bruto, valor efetivamente recebido, preço de determinadas linhas ou base após descontos e tarifas especificadas. Registre como a regra trata frete, cancelamento, desconto concedido depois da venda e arredondamento por parcela. Se dois contratos usam a mesma porcentagem sobre bases diferentes, precisam de resultados distintos. Leve operações que revelem essa diferença antes de escolher a solução.',
        'Inclua vigência e critérios de elegibilidade. Um parceiro pode passar de 8% para 10% a partir de certa data. Defina se a data relevante é venda, entrega, confirmação ou outra prevista na regra comercial. Se um serviço iniciado num mês termina no seguinte, a escolha afeta o valor. Documente quem publica a regra, como testa e como recupera a versão aplicada. O fornecedor deve mostrar um cálculo antigo que permanece explicável após atualização.',
        'Trate tetos, faixas e mínimos. Um programa pode pagar uma taxa sobre toda a operação ao atingir determinado valor, ou pagar somente sobre a parcela que ultrapassa o limite. Outro pode agrupar vendas por parceiro e aplicar um mínimo para enviar o pagamento, mantendo o saldo acumulado. Teste valores perto de cada fronteira. Uma solução que usa parcelas isoladas pode não reproduzir uma regra que depende do volume acumulado do período.',
        'Se houver regra manual excepcional, peça que ela tenha responsável, evidência, motivo e vigência. Uma bonificação aprovada para uma ativação pode valer uma única vez. Quando servir a várias vendas, defina o conjunto elegível. Um campo genérico de ajuste cobre casos com flexibilidade, mas precisa de classificação que permita auditar o motivo depois. Num piloto, compare como os fornecedores tratam um ajuste autorizado e uma edição feita por uma pessoa sem permissão.',
      ],
    },
    {
      heading: 'Use um exemplo de fechamento com diferença explicável',
      paragraphs: [
        'Imagine uma operação hipotética que vende um serviço por R$ 1.000 e remunera dois parceiros em atividades diferentes. A regra de A prevê 10% após a aceitação do serviço, e a de B prevê R$ 40 quando o cliente paga a primeira parcela. Em um mês, o financeiro registra o aceite e o pagamento do cliente, calcula R$ 100 e R$ 40 e prepara as duas instruções. A conciliação precisa mostrar que chegaram ao mesmo período por eventos distintos.',
        'Suponha que o extrato indique transferência de R$ 100 para A e ausência de pagamento para B. Investigue se B ficou abaixo de um mínimo acumulado, se a instrução ainda está em fila ou se a operação foi rejeitada. Cada causa exige resposta diferente. O sistema deve conservar o valor esperado e exibir a situação observada. A ausência de liquidação não muda retroativamente a regra que determinou os R$ 40.',
        'Agora inclua uma devolução parcial de R$ 200 após o fechamento. Para A, a regra hipotética reduz a base e gera um ajuste de R$ 20. Para B, a remuneração fixa pode permanecer integral se a atividade foi concluída, conforme o contrato. A proposta deve reproduzir os dois resultados e ligar o ajuste à venda original. No fechamento seguinte, o operador precisa explicar por que o valor foi compensado ou por que a empresa seguirá outra forma de recuperação.',
        'Complete o caso exibindo o demonstrativo do parceiro e o extrato conferido internamente. O parceiro A deve localizar o valor original, o ajuste, o período e as referências permitidas. A gestão pode precisar de evidência mais detalhada para revisar. A empresa deve identificar o que é apresentado a cada papel. Esse exercício, feito com dados ilustrativos e condições acordadas, revela se o sistema resolve a rotina além da soma de pagamentos.',
      ],
    },
    {
      heading: 'Planeje correspondência de eventos e revisão de divergências',
      paragraphs: [
        'Comece por correspondência direta com chave exata. Se o provedor devolve uma referência do pagamento, vincule-a à instrução e mantenha suas parcelas. Quando uma única saída liquida várias transações, use uma relação de grupo ou o detalhamento do provedor para identificar a composição. O relatório de conciliação de pagamentos da Stripe exemplifica a ligação entre um repasse e um lote de transações. Confirme quais referências aparecem nos provedores usados pela sua empresa.',
        'Trate itens sem referência com regras aprováveis. A solução pode sugerir correspondência por parceiro, valor, moeda e proximidade de data. Defina quando a sugestão exige revisão e quando há evidência suficiente para associação automática. Em um dia com dez repasses do mesmo valor, a proximidade não resolve qual registro pertence a qual operação. A fila deve manter candidatos e permitir confirmar ou desfazer a relação com justificativa.',
        'Classifique divergências de valor, data, parceiro, duplicação e situação. Uma taxa retida pode explicar uma diferença numérica, enquanto uma transferência pendente explica a ausência no extrato. Se o recebimento chegou depois do corte, tenha um caminho de acompanhamento. O operador precisa enxergar a pendência e o impacto, sem tratar todos os casos como diferença genérica. A gestão consegue usar os motivos para descobrir problemas de cadastro, regra ou transmissão.',
        'Use tolerância só quando a política a definir. Uma diferença de centavo pode ser esperada por arredondamento, mas a soma sistemática de centavos pode indicar erro de fórmula. Peça relatório que conserve diferenças normalizadas e a razão da aceitação. Quando o sistema fechar um lote automaticamente, informe quantos registros usaram tolerância e quais ainda exigem atenção. A equipe financeira precisa ajustar critérios com base nessas evidências.',
      ],
    },
    {
      heading: 'Especifique estorno, cancelamento e ajustes tardios',
      paragraphs: [
        'Escreva situações em que o cliente recebe devolução, o parceiro perde elegibilidade ou um pagamento é revertido. Esses eventos podem ter efeitos distintos. Um reembolso ao cliente muda a receita conforme a regra definida, enquanto uma reversão de transferência afeta o valor efetivamente repassado. Em alguns arranjos, os dois movimentos ocorrem separadamente. A documentação da Stripe para cobranças e transferências separadas exemplifica essa separação em um provedor específico. Verifique o fluxo contratado.',
        'Teste estorno parcial antes e depois de pagar. Antes, o sistema pode recalcular o saldo devido se a política permitir. Depois, pode registrar um ajuste que será compensado no futuro, encaminhar recuperação ou manter saldo negativo para revisão. Não presuma que a transferência pode ser revertida automaticamente. O contrato de operação precisa dizer quem autoriza e quais retornos o sistema deve aguardar. Peça que o fornecedor demonstre os estados e preserve cada movimento.',
        'Inclua um chargeback ou disputa que começa num mês e termina em outro, se esse tipo de transação existe. A operação pode manter um valor em análise até saber o resultado. A conciliação deve mostrar lançamento provisório, ajuste definitivo e eventual reversão, com referências a período e parceiro. Defina o efeito sobre pagamento disponível. Uma regra de fechamento clara impede que um evento de disputa pareça simples devolução aprovada antes de a equipe decidir.',
        'Se uma alteração chega depois do fechamento, registre competência original e período de ajuste. Determine quem pode reabrir um período e quando essa abertura exige revisão. Em muitos processos, preservar o fechamento anterior e gerar um ajuste rastreável é suficiente. Quando a equipe precisar reprocessar com uma regra corrigida, peça uma comparação de diferenças e aprovação antes de substituir a visão usada internamente. O fornecedor deve mostrar como o resultado anterior permanece recuperável.',
      ],
    },
    {
      heading: 'Considere data de corte, lotes e parcelas',
      paragraphs: [
        'Documente o horário de fechamento e o fuso usado pela operação. Um pagamento iniciado antes do corte pode aparecer no extrato no dia útil seguinte. O fechamento deve informar quais registros estão confirmados e quais serão verificados em janela futura. Se contratos e extratos usam datas diferentes, mantenha data do evento, data de processamento e data de liquidação. Compare as mesmas definições durante a homologação para não criar divergências só por mudança de calendário.',
        'Defina como agrupar parcelas. Um lote bancário pode conter pagamentos para vários parceiros e transferências de finalidades distintas. Um mesmo parceiro pode receber por mais de uma conta autorizada, se essa condição fizer parte do processo. Escolha a unidade de conciliação e prove que o total do lote pode ser explicado por linhas. Se algumas linhas estiverem pendentes, a gestão precisa saber se fechou o lote, somente parte dele ou um demonstrativo específico.',
        'Registre cancelamento e reenvio de pagamentos. Quando uma instrução dá erro, a próxima pode ter outro identificador técnico, mas continuar referindo-se à mesma obrigação original. O sistema precisa mostrar a sequência e evitar somar instruções rejeitadas como pagamentos. Na hora de fechar, a equipe confere o resultado na fonte apropriada. Peça um teste com retorno perdido depois de envio e outro com retorno explícito de rejeição.',
        'Considere feriados, fim de semana e adiantamentos na operação. Um valor pode ser devido na competência corrente e liquidado adiantado por decisão específica. Peça que a proposta diferencie saldo devido, movimento financeiro e ajustes de calendário. Um gráfico mensal pode mostrar valor acima ou abaixo do esperado porque agrupou por data de banco. Armazene as datas necessárias e indique qual delas governa cada relatório, consulta e exportação.',
      ],
    },
    {
      heading: 'Defina permissões, aprovação e prestação de contas',
      paragraphs: [
        'Separe quem importa documentos, quem altera uma regra, quem aprova uma diferença e quem autoriza a execução de pagamento. Uma pessoa pode exercer mais de um papel conforme a estrutura da empresa, mas o sistema precisa aplicar as combinações autorizadas. Mostre no briefing situações em que revisão independente é necessária. No aceite, teste importação duplicada, associação manual e ajuste de valor com perfis diferentes. A evidência deve mostrar quem fez e quem conferiu.',
        'Se houver um portal de parceiros, exiba somente informações vinculadas à conta correta. Considere quem vê total e quem vê composição, inclusive quando um grupo administra mais de uma empresa. Verifique relatórios, exportações e links enviados por notificação. Uma troca de carteira ou desligamento deve revogar o acesso nos prazos definidos. Durante a demonstração, peça a consulta ao mesmo período por dois parceiros com transações distintas.',
        'Defina o que aparece num demonstrativo de fechamento. Pode incluir saldo anterior, créditos, ajustes, pagamentos confirmados e saldo a conferir, com referências de origem e período. Decida como esclarecer uma divergência sem expor dados de outros parceiros ou informações comerciais desnecessárias. A equipe precisa localizar o histórico da consulta e registrar a resposta. Um extrato reproduzível ajuda tanto quem recebe quanto quem investiga uma dúvida.',
        'Planeje a exportação para supervisão e auditoria, com filtros e papéis definidos. Um pacote de fechamento pode conter dados usados, versão das regras, lista de divergências, decisões tomadas e identificadores de pagamentos. Peça que o fornecedor demonstre a exportação e como obtém evidência de registros que foram corrigidos depois. Se uma divergência foi revisada manualmente, preserve o motivo e evite deixar apenas o valor final.',
      ],
    },
    {
      heading: 'Especifique a integração com ERP e provedor de pagamentos',
      paragraphs: [
        'Mapeie qual sistema mantém parceiro, contrato, pedido, obrigação e estado de liquidação. O ERP pode concentrar pagamentos e contabilidade, enquanto uma plataforma de venda registra eventos e o provedor confirma transferências. Se valores são calculados fora do ERP, defina como são enviados e como a atualização retorna. Reserve uma referência para cada evento que precisa de rastreio. A equipe deve conseguir localizar a mesma obrigação a partir de qualquer sistema relevante.',
        'Antes de estimar, teste acesso, paginação e diferenças de formato nas interfaces. Um relatório pode usar unidades monetárias mínimas e outro mostrar número decimal. Defina como preservar precisão, moeda e arredondamento. Confira como o ERP recebe centro de custo ou conta contábil sem misturar a decisão comercial com o lançamento. A proposta deve explicitar quais regras são fornecidas pelo cliente e quais validações serão construídas.',
        'Teste o reprocessamento com os mesmos dados. Uma carga repetida deve conservar os itens já identificados e sinalizar o que mudou, em vez de dobrar valores. Se um extrato for revisado, determine como o operador distingue substituição de nova competência. Se um sistema estiver indisponível, indique em qual etapa a execução fica suspensa. A recuperação precisa demonstrar que a mesma obrigação não foi enviada duas vezes e que registros confirmados permanecem associados.',
        'Defina onde a equipe acompanha erros de integração. Um registro com parceiro inativo ou conta bancária pendente deve ficar disponível para tratamento por um responsável. Uma falha de rede pode ser resolvida sem edição de dados. Peça que a descrição diferencie os casos e informe como ver o que já saiu da fila. Se a empresa precisar de procedimento manual, ele deve indicar como atualizar a conciliação depois para evitar lançamento duplicado.',
      ],
    },
    {
      heading: 'Compare o orçamento e homologue com um período fechado',
      paragraphs: [
        'Envie aos fornecedores o mesmo volume de parceiros, transações, fontes e exceções. Separe descoberta, integração, regras, demonstrativos, migração e sustentação. Pergunte quais mudanças comerciais estarão disponíveis por configuração e quais exigem desenvolvimento. Uma proposta que inclui apenas a leitura do extrato pode custar menos porque deixa cálculo e decisões com o financeiro. Mostre a diferença usando os mesmos resultados que a área precisa obter no fechamento.',
        'Escolha um período já fechado para rodar em paralelo. Preserve a evidência original e registre quais resultados devem bater, quais divergências são conhecidas e quais dependem de checagem. Entregue exemplos de transferência em lote, estorno tardio e alteração de regra. Compare resultado por parceiro e por evento, além do total. Uma diferença positiva que compensa outra negativa pode esconder erro relevante se o teste só olhar o saldo geral.',
        'Teste ações de revisão ao longo de um turno. Peça ao usuário que encontre uma transação não conciliada, leia as fontes, associe ao evento correto e exporte a evidência. Solicite a outra pessoa que confira a decisão sem usar contexto externo. Se precisar perguntar para a equipe técnica como encontrar um registro, inclua essa dificuldade na avaliação. O aceite deve revelar o esforço real de usar o sistema quando a conciliação não é automática.',
        'No piloto, meça tempo até fechar o período, casos revisados manualmente, montante sem explicação e quantidade de ajustes posteriores. Num cenário hipotético, automatizar 80% das correspondências pode liberar tempo, mas validar apenas casos fáceis não explica o custo dos 20% restantes. Registre quanto o financeiro investe em cada tipo de exceção. Decida a próxima fase pelo efeito na rotina e pelo risco dos erros, inclusive se vale adiar a execução de pagamentos.',
      ],
      bullets: [
        'Repasse esperado, instruído e confirmado com referências distintas.',
        'Lote com múltiplos parceiros e diferença de data de liquidação.',
        'Ajuste parcial após fechamento ligado ao evento de origem.',
        'Retorno perdido e recuperação sem repetir execução.',
        'Demonstrativo rastreável com acesso restrito ao parceiro certo.',
      ],
    },
    {
      heading: 'Leve à reunião o material que permite definir o primeiro escopo',
      paragraphs: [
        'Prepare um exemplo de contrato, um fechamento saneado e uma diferença que o financeiro já resolveu. Mostre onde o direito ao repasse nasce, quando o pagamento é programado e como o estado final chega ao ERP. Informe se existem parcelas, limites de valor, retenções ou regras por período. Aponte quais referências estão presentes nos relatórios. Esses dados permitem ao fornecedor avaliar o trabalho de reconstruir o saldo e indicar o que ainda deve ser confirmado com a operação.',
        'Combine o que a etapa inicial precisa devolver. Pode ser um mapa de fontes, um cálculo auditável e uma execução em paralelo com resultado comparável ao fechamento atual. Deixe claro se o escopo inclui integração a fontes, geração de demonstrativo ou preparação de arquivo para pagamento. Para uma proposta de desenvolvimento, peça entregáveis verificáveis que permitam seguir ou rever a prioridade sem comprometer etapas ainda desconhecidas.',
        'Inclua o custo de manter as regras depois que a solução estiver rodando. Uma carteira pode ganhar novos acordos, provedores podem mudar formatos e o financeiro pode alterar a janela de fechamento. Solicite uma demonstração de publicação de regra futura e um exemplo de mudança que exige alteração técnica. Assim a empresa consegue estimar custos recorrentes e saber quem deve responder quando um parceiro abre uma dúvida sobre um movimento antigo.',
      ],
    },
  ],
  faqs: [
    { question: 'O sistema precisa fazer o pagamento para conciliar os repasses?', answer: 'Pode começar conferindo valores esperados e liquidados em paralelo. A execução de pagamentos acrescenta autorizações e controles próprios, que podem entrar numa fase posterior.' },
    { question: 'Como conciliar um estorno em outro mês?', answer: 'Ligue o ajuste ao evento de origem e preserve o período anterior. A regra da operação define em que competência o ajuste entra e se pode ser compensado, revertido ou analisado separadamente.' },
    { question: 'O que enviar para pedir orçamento?', answer: 'Prepare contratos, extratos saneados, volumes e exemplos de fechamento, estorno e divergência. Mostre onde ficam as chaves e quais sistemas precisam receber os resultados.' },
  ],
  cta: {
    title: 'Quer estruturar a conciliação dos seus repasses?',
    text: 'Conte como sua equipe calcula valores, confere extratos e registra as exceções. A Tironi Tech pode ajudar a delimitar um piloto com as fontes e os critérios de fechamento da sua operação.',
    label: 'Apresentar meu fluxo de repasses',
  },
  sources: [
    { label: 'Stripe — relatório de conciliação de repasses', url: 'https://docs.stripe.com/reports/payout-reconciliation' },
    { label: 'Stripe Connect — cobranças e transferências separadas', url: 'https://docs.stripe.com/connect/separate-charges-and-transfers' },
  ],
};
