export const unbilledOrderDiagnosis = {
  slug: 'orcamento-auditoria-pedidos-sem-faturamento',
  date: '2026-11-26',
  updated: '2026-11-26',
  description: 'Compare propostas de diagnóstico de pedidos sem faturamento e teste como localizar pendências, rejeições e documentos já emitidos.',
  keywords: ['diagnóstico de pedidos que não viraram faturamento', 'auditoria de pedidos sem faturamento', 'orçamento para diagnóstico de pedidos não faturados'],
  emphasis: 'diagnóstico de pedidos que não viraram faturamento',
  intro: 'Para contratar um diagnóstico de pedidos que não viraram faturamento, defina quais pedidos já poderiam ter sido faturados e siga suas referências até o ERP. Peça evidências para distinguir espera prevista, bloqueio, rejeição e faturamento concluído sem atualização no canal de origem.',
  takeaways: [
    'Defina quando cada pedido passa a ser elegível para faturamento.',
    'Cruze itens e documentos para reconhecer faturamentos parciais.',
    'Separe o diagnóstico da autorização para corrigir ou reenviar.',
  ],
  sections: [
    {
      heading: 'Defina a população antes de procurar perdas',
      paragraphs: [
        'Escolha uma unidade, um canal e um período com volume conhecido. Um pedido recebido no último dia pode ainda estar no prazo de separação, enquanto outro da semana anterior já deveria ter sido faturado. Registre o evento que inicia o prazo para cada tipo de pedido e quais bloqueios suspendem essa contagem conforme a rotina. Peça uma lista com todos os pedidos do recorte e suas condições. Use essa base para comparar propostas que poderiam contar grupos diferentes como pendentes.',
        'Inclua os casos que devem sair do indicador com uma justificativa registrada. Um pedido cancelado antes da expedição, uma reserva temporária e uma solicitação sem aprovação podem seguir caminhos distintos. Em cada situação, confira qual sistema confirma o estado e como uma alteração tardia entra no relatório. Escolha pelo menos um caso que parecia elegível no início do dia e foi cancelado antes do corte. O fornecedor deve explicar se o resultado mostra a posição inicial ou a posição revisada.',
        'Defina o que significa faturar no seu diagnóstico. A operação pode usar um registro confirmado no ERP, enquanto o atendimento verifica o retorno no canal. Um pedido pode ter documento disponível e continuar aberto na tela por atraso na sincronização. Preserve os dois eventos e aplique o indicador ao marco correto. Se o objetivo é medir pedidos sem documento, separe também os que têm documento confirmado e estão apenas com a atualização externa pendente.',
      ],
    },
    {
      heading: 'Siga o pedido pelos identificadores usados em cada etapa',
      paragraphs: [
        'Na **auditoria de pedidos sem faturamento**, parta de uma referência que a operação reconhece. O número informado pelo cliente pode ser do canal, enquanto o ERP usa uma chave própria e a expedição acompanha uma remessa. Monte a cadeia com origem, unidade, identificador e horário de cada evento. Escolha um pedido que compartilha a numeração com outra loja e confirme como o fornecedor distingue os dois. Registre também a relação usada quando o sistema de integração altera o formato do código.',
        'Faça o caminho inverso a partir de um documento do ERP. Identifique os itens faturados, o pedido de origem e a confirmação que deveria voltar ao canal. Se um pedido gerou mais de um documento, mostre o vínculo com quantidades e remessas. O valor total pode variar devido a cancelamentos, descontos ou envio parcial. Defina como a verificação reconhece essas situações e peça que o relatório destaque apenas o saldo de itens ainda em análise.',
        'Teste uma referência sem correspondência. Um pedido pode ter sido aceito pelo canal e rejeitado na integração antes de receber código no ERP. Guarde a comprovação da aceitação e a resposta da etapa que falhou. Se estiver faltando registro, identifique onde termina a evidência e em que ponto começa a investigação. Peça que a demonstração mostre como uma pessoa do suporte confirma o limite com o identificador que recebe na rotina.',
      ],
    },
    {
      heading: 'Distinga faturamento parcial de pedido totalmente pendente',
      paragraphs: [
        'Use um pedido de dez peças com seis faturadas e quatro aguardando reposição. A consulta deve exibir o documento das seis e indicar se as quatro ainda estão no prazo acordado. Em seguida, cancele duas das quatro e confira como o indicador muda. Peça que cada proposta mostre a posição por linha e o estado do pedido inteiro, com data de referência. Use quantidades e unidades aprovadas para evitar que uma conversão entre caixa e peça pareça uma pendência de faturamento.',
        'Inclua um item dividido em duas remessas e um documento cancelado após a primeira emissão. Confirme quais efeitos permanecem válidos no corte e como a equipe identifica a necessidade de nova emissão. Peça que o diagnóstico indique o registro que confirma a emissão e a referência do cancelamento. A equipe deve conseguir explicar o resultado sem confiar apenas no status mais recente do pedido, que pode esconder as alterações ocorridas durante a janela.',
      ],
    },
    {
      heading: 'Localize o primeiro evento que faltou na sequência',
      paragraphs: [
        'Desenhe as etapas desde o aceite comercial até a emissão e a atualização do canal. Para cada etapa, anote a confirmação esperada e a referência que pode ser consultada. Se um pedido foi aceito, mas a reserva ainda não foi concluída, a falta de documento pode ser apenas a consequência. Identifique o primeiro estado que saiu do fluxo e teste se a área consegue repetir a investigação com um identificador realista. Use essa evidência para encaminhar o caso ao responsável certo.',
        'Separe ausência de envio, envio rejeitado e envio confirmado sem retorno. Se a integração não recebeu o pedido, confira a confirmação disponível na origem. Se o ERP rejeitou, localize o motivo e verifique se ele continua válido. Se a resposta se perdeu, procure no destino usando a referência de origem. Uma lista baseada apenas em estados pendentes pode misturar os três casos. Na demonstração, entregue um pedido de cada tipo e peça que a empresa receba uma recomendação diferente para cada ocorrência.',
        'Inclua um bloqueio que foi resolvido depois do primeiro registro. Um pedido pode ter falhado por falta de cadastro e ter sido aceito após a correção. A investigação deverá mostrar a tentativa anterior e a confirmação posterior. Se a primeira fotografia do dia ainda mostra a falha, indique a data e como a equipe encontra a posição atual. Confirme também se o suporte consegue localizar pedidos que continuam com a mesma causa, em vez de abrir o caso já recuperado.',
      ],
    },
    {
      heading: 'Diferencie prazo de espera e impacto de negócio',
      paragraphs: [
        'Meça a idade desde o instante em que o pedido ficou elegível. Dois pedidos feitos há três dias podem ter expectativas distintas se um já foi separado e o outro aguarda reposição dentro do prazo. Use a hora do evento correto e indique a regra de prazo de cada canal. Se uma mudança de estado suspende ou reinicia a espera, registre quando ocorre e confirme com a operação. Compare os resultados numa amostra com bloqueios temporários e com pedidos que deveriam avançar imediatamente.',
        'Meça pedidos, itens e valores separadamente. Em um exemplo fictício, quinze pedidos elegíveis somam R$ 18 mil. Nove, no valor de R$ 11 mil, já têm documentos confirmados e aguardam apenas atualização no canal. Os seis restantes somam R$ 7 mil em itens ainda sem documento. Dentro desse grupo, dois podem ter faturamento parcial. Use o saldo das linhas elegíveis e informe a base de valor adotada. Antes de projetar impacto, confira quais pedidos podem avançar e quais dependem de outra decisão.',
        'Monte uma fila que considere urgência e possibilidade de resolver. Um erro de referência pode afetar muitos pedidos e exigir corrigir uma origem comum. Um pedido de valor menor pode precisar de ação imediata se a janela de despacho terminar naquela manhã. Defina os campos que a pessoa usa para priorizar, incluindo a hora limite e o próximo responsável. Meça quanto tempo passa entre identificar a causa e obter a autorização necessária. Inclua essa espera no custo da rotina.',
      ],
    },
    {
      heading: 'Confirme o destino antes de autorizar um reenvio',
      paragraphs: [
        'Faça um ensaio em que o ERP confirma um documento e a integração perde a resposta. A origem pode marcar o pedido como pendente. Antes de reenviar, peça que a equipe localize o documento pela referência que cruza os dois sistemas. Registre o que permite concluir que houve emissão e como atualizar o canal. Se o destino aceita a repetição, confirme a proteção contra efeito duplicado com o mesmo pedido e as mesmas linhas. Documente o procedimento para quando a confirmação permanece inconclusiva.',
        'Teste uma recuperação de apenas parte do pedido. A primeira remessa já tem documento confirmado e a segunda falhou antes da emissão. Defina como a equipe seleciona o conjunto ainda pendente e qual consulta comprova a quantidade remanescente. Depois da tentativa autorizada, some as quantidades confirmadas e compare com o pedido vigente. Inclua um cancelamento ocorrido no intervalo. Peça que o fornecedor indique se a recuperação precisa rever a elegibilidade antes de aplicar qualquer efeito.',
        'Defina quem encerra a ocorrência após a recuperação. A integração pode voltar a enviar, o ERP pode confirmar e o atendimento ainda precisar atualizar a situação para o cliente. Atribua um responsável para conferir cada etapa e anote o horário da próxima verificação. Quando o caso depender de outro time, peça que a fila mantenha a referência e a evidência já coletada. Assim, a pessoa que assume consegue continuar a investigação sem repetir consultas de origem.',
      ],
    },
    {
      heading: 'Compare propostas com a mesma amostra e o mesmo prazo',
      paragraphs: [
        'No pedido de **orçamento para diagnóstico de pedidos não faturados**, informe os canais, as unidades, os sistemas envolvidos e a janela de dados disponível. Entregue a todos os fornecedores a mesma amostra, com um bloqueio conhecido, um pedido parcialmente faturado e um documento confirmado cujo retorno ainda não chegou ao canal. Peça que indiquem quais fontes conseguem consultar diretamente e quais precisam ser extraídas pela empresa. Registre quem autoriza e entrega cada acesso.',
        'Separe o preço de montar a população, cruzar referências, investigar causas e apresentar o plano de tratamento. Um fornecedor pode entregar um relatório reproduzível para todo o período e investigar em profundidade apenas uma amostra. Outro pode examinar manualmente cada ocorrência de uma unidade. Compare o que será verificado por pedido, o que será estimado para o conjunto e quais evidências permitirão testar a conclusão. Solicite preços para acrescentar outro canal com numeração e status diferentes.',
        'Peça que as propostas indiquem a condição de concluir a investigação quando faltam dados. Se o histórico de integração guarda apenas algumas semanas, uma análise de três meses pode depender de documentos do ERP ou de registros produzidos pelo atendimento. Defina o recorte recuperável e a prova alternativa de cada etapa. Se parte das causas permanecer inconclusiva, exija que a entrega mostre o volume atingido e explique o que a empresa precisaria coletar numa nova janela.',
        'Compare o prazo até uma decisão utilizável. Uma entrega pode trazer a lista em três dias, mas depender de outra semana para confirmar por que os pedidos ficaram abertos. Outra pode começar por uma causa comum e mostrar cedo quais pedidos exigem revisão. Peça os dois marcos, o de disponibilizar a população e o de confirmar causas com as áreas. Inclua a participação do faturamento e do comércio em cada marco para comparar o compromisso de datas.',
      ],
    },
    {
      heading: 'Negocie a correção como etapa com escopo próprio',
      paragraphs: [
        'Depois de confirmar uma causa, peça duas estimativas. Uma deve cobrir o tratamento do estoque de pedidos já afetados. A outra deve cobrir a mudança necessária para evitar recorrência. Por exemplo, corrigir registros com código de unidade ausente exige localizar os pedidos, confirmar o destino e acompanhar cada recuperação. Prevenir novos casos pode exigir validar o campo no canal ou atualizar a integração. Defina as provas de cada etapa e quem decide quando a empresa pode publicar a mudança.',
        'Inclua um cenário em que a equipe consegue recuperar alguns pedidos e outros ainda dependem do cliente. Uma solicitação pode precisar confirmar a quantidade antes de prosseguir, enquanto outra já tem evidência suficiente. Peça que o plano indique o que cada grupo exige e como a retomada será verificada. Se o fornecedor propõe aplicar correções em lote, solicite primeiro uma lista dos candidatos e o resultado esperado por linha. Compare o custo de preparar essa revisão com o de executar o tratamento manualmente.',
        'Peça o custo de verificar a recorrência no período posterior à correção. Um campo obrigatório pode reduzir rejeições da integração e aumentar a quantidade de pedidos que precisam de revisão antes do envio. Compare as duas etapas pelo volume elegível e pelo tempo de resolução. Se o erro apenas passou a ser detectado mais cedo, descreva o efeito sobre o prazo e o trabalho. Inclua a prova na estimativa de acompanhamento e determine quando ela pode ser conferida.',
      ],
    },
    {
      heading: 'Valide a cobertura antes de confiar nos totais',
      paragraphs: [
        'Reconcilie a população do diagnóstico com as origens. Compare a quantidade de pedidos recebidos por canal e unidade, o número de linhas e os períodos acessíveis. Registre as exclusões e os pedidos que não podem ser cruzados. Uma diferença de chaves pode impedir o vínculo com o ERP sem impedir que o pedido apareça na população. Peça ao fornecedor que mostre o relatório de cobertura e identifique onde será necessário buscar uma referência adicional.',
        'Selecione casos de controle fora da fila principal. Inclua um pedido faturado no prazo, um cancelado e outro cuja espera é prevista. Compare como o diagnóstico classifica cada um e confira a fonte que justifica o resultado. Essa seleção ajuda a descobrir se a fila apresenta falsos atrasos ou deixa de reconhecer um grupo inteiro. Use exemplos de períodos e unidades diferentes para verificar se as regras dependem de uma fonte que só está presente em parte da operação.',
        'Compare recortes no mesmo instante. Uma extração do canal feita pela manhã e outra do ERP após o almoço podem refletir estados de momentos distintos. Registre as horas de coleta e os movimentos confirmados entre elas. Se for possível reproduzir a posição, peça que o fornecedor use a mesma referência temporal. A documentação de validação do AWS DMS descreve a comparação entre origem e destino e os limites quando os registros continuam mudando. Aplique esse cuidado ao interpretar as diferenças entre pedidos.',
        'Peça um resultado reproduzível de um período já encerrado. A equipe precisa repetir o recorte usando as versões recebidas e encontrar os mesmos casos ou explicar mudanças conhecidas. Teste uma linha cuja quantidade foi alterada após a primeira apuração. Se a versão original mostra a quantidade anterior, o relatório revisado deve identificar a mudança e a origem. Defina quais evidências ficam guardadas e quem consegue executar a comparação depois da entrega.',
      ],
    },
    {
      heading: 'Valide a causa com a área que pode agir sobre ela',
      paragraphs: [
        'Defina um fluxo de revisão para cada causa relevante. Quando a integração rejeita uma unidade desconhecida, a equipe de cadastro confirma se a unidade é válida e quem pode corrigi-la. Se um pedido não passou na aprovação comercial, o dono da regra explica por que ele não estava elegível. Vincule a classificação à evidência e ao responsável. Solicite uma amostra em que o fornecedor apresente o efeito observado e a área confirme se ele explica a pendência.',
        'Registre quando o diagnóstico encontra mais de uma condição. Um pedido pode ter sido enviado com cadastro incorreto e continuar sem faturamento após corrigir o cadastro porque o estoque acabou. Mostre a primeira causa, a correção feita e o novo impedimento. Se o relatório trata tudo como uma causa única, a equipe pode considerar recuperáveis pedidos que ainda precisam de outra ação. Peça um ensaio que acompanhe a situação ao longo de duas tentativas.',
        'Combine o nível de evidência para extrapolar um padrão. Se vinte pedidos apresentam a mesma mensagem e a amostra confirma que cinco vieram de um cadastro incompatível, verifique quais atributos os demais têm em comum. Em vez de dar a todos o mesmo estado definitivo, registre a hipótese e o recorte ainda pendente. Estime quanto custará ampliar a conferência. Isso permite comprar investigação adicional apenas onde a decisão depende de confirmação.',
      ],
    },
    {
      heading: 'Meça a capacidade de tratar o estoque de pedidos pendentes',
      paragraphs: [
        'Estime a recuperação por grupos que podem receber a mesma ação. Um conjunto pode depender de corrigir um cadastro comum. Outro pode exigir verificar a disponibilidade de cada item com a expedição. Faça a estimativa a partir das linhas elegíveis e dos responsáveis que confirmam o tratamento. Se os grupos dividem o mesmo analista, indique a ordem em que serão atendidos e que prazo está em risco. Peça aos fornecedores que informem as premissas sobre aprovações e o tempo reservado para repetir a conferência.',
        'Em um exemplo fictício, existem noventa pedidos confirmados como pendentes. Sessenta podem ser tratados em lotes de dez, com quinze minutos por lote. Os outros trinta exigem seis minutos de revisão individual. O esforço chega a quatro horas e meia antes de contar a espera por autorizações ou as verificações posteriores. Use a amostra para estimar a variação. Se os casos individuais dependem de contato com o cliente, registre quanto trabalho pode ser executado na mesma janela e quanto fica para outro turno.',
        'Verifique o efeito de recuperar um volume concentrado. Se a operação costuma faturar cem pedidos por hora e libera outros oitenta de uma vez, expedição e atendimento podem receber confirmações fora do ritmo previsto. Combine um teste com volumes autorizados e confira tanto o resultado no ERP quanto a continuidade no canal. Defina quem reduz o ritmo quando as confirmações começam a atrasar. Inclua no orçamento o tempo da primeira janela e o trabalho de verificar o resultado por lote.',
        'Diferencie progresso e conclusão. Se a correção remove o bloqueio, o pedido pode continuar aguardando a próxima execução ou uma confirmação de estoque. Conte separadamente pedidos revisados, autorizados, reprocessados e faturados. Acompanhe também os que deixaram de ser elegíveis durante a recuperação. Peça um relatório do saldo após a janela com os identificadores e estados que o responsável usará no turno seguinte. A medida de sucesso deve comprovar o efeito esperado em cada sistema.',
      ],
    },
    {
      heading: 'Defina a prova de aceite da investigação',
      paragraphs: [
        'Prepare uma lista de cenários obrigatórios com o resultado esperado. Inclua uma rejeição conhecida, uma espera dentro do prazo, um pedido com duas emissões e outro com documento disponível no ERP mas sem retorno ao canal. Para cada caso, registre o identificador e o horário de referência. A área de faturamento confere os documentos. O canal confirma o estado apresentado ao cliente. A equipe de integração verifica os envios e as respostas. Identifique quem reúne o conjunto e aprova a entrega.',
        'Exija que cada causa confirmada possa ser verificada por outra pessoa. O relatório deve permitir começar pelo pedido, localizar a etapa que falhou e chegar à evidência do bloqueio, da rejeição ou da espera. Se um dado só pode ser consultado pela equipe dona da fonte, registre quem validou, quando e qual referência permite pedir nova verificação. Separe então os casos cujo motivo está confirmado dos casos em que há indicação de causa e falta acesso ou registro.',
        'Aprovar o diagnóstico e autorizar a correção são decisões com evidências diferentes. No diagnóstico, a empresa verifica se a população está completa e as causas relevantes foram demonstradas. Na correção, confirma que a ação aplicada recuperou apenas os pedidos autorizados e que o canal apresenta os resultados vigentes. Faça uma reexecução em ambiente adequado antes de liberar intervenções de maior alcance. Compare a quantidade, a situação e o documento de cada linha tratada.',
        'Defina o que acontece se o fornecedor não alcançar a cobertura combinada. Uma unidade pode entregar arquivos incompletos ou um canal pode alterar o identificador no período. Peça a lista de lacunas e estime o que seria necessário para resolvê-las. Se a empresa aprovar a entrega do recorte verificado, registre as condições para os demais grupos. Inclua os acessos ou amostras que precisam ser preparados e o custo para repetir a investigação no período que ficou pendente.',
      ],
    },
    {
      heading: 'Decida quando transformar a investigação em uma rotina',
      paragraphs: [
        'Se a mesma pendência aparece em ciclos sucessivos, compare renovar diagnósticos pontuais com manter uma verificação regular. Defina a frequência pelo prazo em que a equipe ainda pode agir. Um pedido que sai no turno seguinte pode pedir conferência mais cedo que uma carteira de entrega programada. Use as janelas observadas para verificar quando as fontes estão completas e quanto tempo sobra até o tratamento. Peça preços para preparar os dados, manter as regras e atender os casos.',
        'Escolha indicadores que levem a decisões concretas. Acompanhe o número de itens elegíveis pendentes, o tempo desde a última confirmação e os grupos que precisam da mesma área. Defina o que o atendimento deve fazer se a fila crescer e quando o faturamento precisa rever a prioridade. Teste um caso em que uma origem realmente ficou vazia durante um turno e outro em que o arquivo não chegou. O resultado precisa indicar se a posição foi confirmada ou ainda depende de dados.',
        'Na passagem para a operação, peça que um analista use o material entregue para investigar um pedido que não fazia parte da amostra. Ele deve localizar o último estado confirmado, explicar a situação e indicar quem assume a próxima ação. Anote se faltou uma chave, uma consulta ou uma instrução para verificar o ERP. Use a prova para decidir quais tarefas cabem à empresa e quais ficam na sustentação. Combine a revisão dos critérios quando um canal alterar o fluxo.',
        'Para a primeira reunião comercial, reúna uma lista curta de pedidos, o horário a partir do qual deveriam avançar e as referências vistas no canal, na expedição e no ERP. Inclua um caso parcial e outro cuja causa ainda é desconhecida. Peça uma proposta com o recorte investigado, a prova de cobertura e preços separados para diagnóstico, recuperação e prevenção. Compare as ofertas pelo trabalho necessário até que o responsável consiga tomar uma decisão fundamentada.',
      ],
    },
  ],
  faqs: [
    { question: 'Como identificar os pedidos que deveriam estar faturados?', answer: 'Defina o evento que inicia o prazo e confira os documentos e as quantidades elegíveis por linha na data de referência.' },
    { question: 'O que pedir na proposta de auditoria de pedidos?', answer: 'Peça cobertura por canal, vínculo entre identificadores, prova das causas e orçamento separado para correção e prevenção.' },
    { question: 'Como avaliar um pedido para reenvio?', answer: 'Confirme se já existe um documento no ERP e confira a quantidade pendente antes de autorizar uma nova tentativa.' },
  ],
  cta: {
    title: 'Precisa investigar pedidos que ainda não foram faturados?',
    text: 'Leve à Tironi Tech alguns pedidos, seus prazos e os sistemas envolvidos. Podemos ajudar a delimitar o diagnóstico e os testes.',
    label: 'Conversar sobre pedidos sem faturamento',
  },
  sources: [
    { label: 'AWS Database Migration Service — validação de dados entre origem e destino', url: 'https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Validating.html' },
  ],
};
