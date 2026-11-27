export const branchLegacyPilot = {
  slug: 'modernizar-legado-uma-filial-piloto',
  date: '2026-11-26',
  updated: '2026-11-26',
  description: 'Planeje a modernização de um sistema legado com uma filial piloto, critérios de seleção, dependências e evidências para expandir.',
  keywords: ['modernização de um sistema legado começando por uma filial', 'filial piloto para modernização de sistema legado', 'orçamento de modernização de software legado'],
  emphasis: 'modernização de um sistema legado começando por uma filial',
  intro: 'Para planejar a modernização de um sistema legado começando por uma filial, escolha uma unidade que represente o fluxo da rede, mas permita acompanhar as exceções e recuperar o trabalho se o piloto parar. Mapeie as dependências com a matriz e defina quais resultados precisam ser repetidos antes de expandir.',
  takeaways: [
    'Escolha a filial pela representatividade e pela capacidade de recuperar o processo.',
    'Teste o que depende de serviços e cadastros compartilhados.',
    'Use os resultados da filial para estimar os ajustes das próximas unidades.',
  ],
  sections: [
    {
      heading: 'Escolha uma filial que permita observar o fluxo da rede',
      paragraphs: [
        'Uma **filial piloto para modernização de sistema legado** precisa usar processos relevantes para a rede e ter condições de acompanhar a prova. Uma unidade pequena pode ser boa para testar cadastro e atendimento, mas insuficiente para validar integração de estoque se todas as suas entregas saem da matriz. Uma unidade de grande volume pode representar melhor a demanda, mas oferecer pouca margem para observar a primeira semana. Compare volume, composição dos casos e disponibilidade da equipe antes de recomendar o local.',
        'Imagine uma rede de materiais de construção que quer substituir o sistema de pedidos. Uma loja atende consumidores no balcão, vende para empreiteiras e solicita transferências do centro de distribuição. Outra tem volume parecido e trabalha quase sempre com retirada. Se a empresa precisa comprovar a validade das transferências, a primeira pode representar melhor a dependência da matriz. Confirme se a equipe consegue escolher uma família e um turno de teste sem expor toda a operação. Registre os processos que a unidade consegue comprovar e os que ficarão para outra prova.',
        'Defina a condição mínima para iniciar. A filial precisa de pessoas que conheçam o processo, acesso ao ambiente previsto e um caminho autorizado para retomar tarefas caso a implantação seja pausada. Consulte o calendário local e o da matriz. Inventário, promoção e virada de tabela podem alterar volume e disponibilidade de suporte. Peça que cada proposta mostre a janela usada na estimativa e como o trabalho muda se a unidade precisar adiar uma etapa.',
      ],
    },
    {
      heading: 'Mapeie as dependências entre filial, matriz e centros de distribuição',
      paragraphs: [
        'Liste os registros que pertencem à filial e os recursos mantidos pela rede. Um pedido pode ser criado localmente, usar preço da matriz e reservar estoque num depósito compartilhado. A proposta precisa dizer qual sistema confirma cada etapa durante o piloto. Monte um caso com uma venda que depende de outra unidade e confirme a passagem no destino. Compare com uma venda de retirada local. Isso ajuda a separar o trabalho de modernizar a rotina da filial do trabalho de adaptar serviços em uso por toda a rede.',
        'Inclua cadastros com atualização fora do horário da unidade. Um preço novo pode chegar antes da abertura e um ajuste de crédito ser publicado durante o turno. Peça que o fornecedor indique como a filial reconhece a versão vigente e o que acontece se o serviço central não responde. Teste uma consulta em que parte dos dados está disponível e outra em que falta uma condição para confirmar a venda. Defina quem verifica o incidente e qual parte da rotina pode continuar.',
        'Identifique quem consome as informações que saem da filial. O depósito pode organizar separação com base no pedido. Finanças pode conciliar cancelamentos e vendas no fechamento. A área de atendimento pode precisar consultar um histórico que antes estava no sistema local. Faça cada equipe conferir uma consequência do piloto. A modernização pode parecer pronta na tela da filial e ainda exigir mudanças para que a matriz consiga fechar as operações com os dados corretos.',
      ],
    },
    {
      heading: 'Teste transações que começam numa filial e terminam em outra',
      paragraphs: [
        'Prepare uma venda fictícia de 18 sacos de argamassa. A filial piloto tem oito para retirada e o centro de distribuição precisa enviar os outros dez. Peça aos fornecedores que mostrem qual sistema confirma cada quantidade, quem recebe a transferência e como o atendimento reconhece o que o cliente já retirou. Em seguida, faça o comprador reduzir o pedido em quatro sacos antes da saída do centro de distribuição. Confira em que unidade a redução libera estoque e como os dois sistemas conciliam o saldo sem duplicar a alteração.',
        'Inclua uma devolução numa filial que ainda usa o legado. Antes da prova, determine se essa unidade pode concluir o atendimento ou precisa encaminhar o caso à filial piloto. Verifique se a equipe consegue localizar a venda, identificar os itens elegíveis e confirmar o resultado no sistema autorizado. Se o piloto exige um procedimento temporário, estime o tempo de execução e atribua responsabilidade até o aceite. Use essa medida ao comparar propostas que cobrem redes com políticas de atendimento diferentes.',
        'Compare uma venda em que o centro de distribuição tem saldo suficiente com outra em que a quantidade exibida já está comprometida. O horário de consulta e a confirmação do destino podem alterar o que a loja pode prometer. Peça que a demonstração preserve a informação usada na venda e mostre como o operador trata a recusa de reserva. Quando a resposta do depósito fica pendente, a filial precisa distinguir a parte que continua em atendimento e a que exige confirmação da matriz.',
      ],
    },
    {
      heading: 'Concilie o primeiro fechamento com uma unidade comparável',
      paragraphs: [
        'Escolha os registros que finanças e estoque usam para fechar o dia. Uma venda pode aparecer no caixa, no faturamento e no relatório de retirada. Antes de somar, combine o período e o estado que cada fonte comprova. Inclua uma transação registrada no fim do turno cuja confirmação chegou depois. Peça que a equipe local e a matriz verifiquem a mesma referência. O teste deve mostrar se cada área consegue reproduzir o fechamento e explicar a diferença quando o horário de corte varia entre sistemas.',
        'Compare o piloto com a própria linha de base e, quando fizer sentido, com uma filial de perfil semelhante. Uma unidade com mais retiradas imediatas pode ter outro prazo para fechar pendências de expedição. Observe a composição do volume e o tempo ativo de conferência. Em vez de comparar apenas o total vendido, conte diferenças por pedido, estornos e ajustes que continuam manuais. Registre também se a matriz teve de preparar um relatório específico para entender a filial piloto e estime o trabalho de manter essa verificação.',
        'Combine quem pode aceitar uma diferença prevista e que achados exigem suspender a expansão. Um relatório pode apresentar uma venda em coluna diferente por decisão aprovada. Um estorno ausente no caixa ou um saldo liberado na unidade errada exige investigação e verificação antes de aumentar o volume. Documente os testes que serão repetidos na próxima filial e os casos cuja evidência depende do processo local. Isso evita extrapolar o aceite de um turno para uma rede onde outros tipos de venda ainda precisam ser testados.',
      ],
    },
    {
      heading: 'Prepare o saldo inicial com pedidos e transferências em andamento',
      paragraphs: [
        'Escolha a hora de referência e registre o que cada saldo representa. Para um produto, a filial pode ter 40 unidades físicas, 12 já reservadas e oito a caminho do centro de distribuição. A carga inicial precisa distinguir estoque presente, compromisso assumido e previsão de chegada. Peça que o ensaio mostre os números no sistema novo e na fonte que a matriz usa para conferir. Se a transferência chegar durante a carga, determine onde será confirmada e que registro comprovará sua inclusão sem contar as mesmas unidades duas vezes.',
        'Confira os cadastros compartilhados usados pelos pedidos em andamento. Uma unidade pode usar um código local equivalente ao da matriz e vender o produto em outra embalagem. Monte um caso em que a conversão afeta a quantidade disponível para retirada. Peça que a equipe compare o código, a unidade e o saldo nos dois sistemas antes de liberar a venda. Registre divergências que precisam de correção na fonte e aquelas que resultam de uma apresentação aprovada para a filial.',
        'Inclua créditos, entregas futuras e pedidos aceitos antes do corte. Para cada registro, defina o sistema responsável até sua conclusão. A filial pode precisar usar um crédito criado no legado enquanto o novo sistema já recebe a venda. Peça evidência de que o abatimento foi reconhecido pela área que concilia e de que o valor restante permanece consultável. Se alguma rotina não puder ser migrada na primeira etapa, descreva a operação temporária, seu prazo e quem acompanha os casos que dependem dela.',
      ],
    },
    {
      heading: 'Ensaie o retorno da filial sem interromper as outras unidades',
      paragraphs: [
        'Combine em que condições a coordenação pode interromper o piloto. Uma falha que afeta apenas a impressão local pode ter outro tratamento que a duplicação de uma transferência no depósito compartilhado. Antes da primeira janela, indique quem decide e que transações precisam parar. Em homologação, faça a filial retornar ao fluxo anterior após confirmar uma retirada e enviar uma transferência ainda sem resposta. Confira o estado no destino e indique qual equipe pode prosseguir com o pedido pendente.',
        'Verifique se a medida se restringe à unidade piloto. O centro de distribuição continua atendendo outras lojas e pode receber eventos dos dois sistemas. Em um ensaio, mantenha pedidos fictícios de uma segunda filial em andamento enquanto a primeira muda de procedimento. Confirme que o ajuste de rota e a conciliação atingem apenas os identificadores previstos. Se uma integração compartilhada exige outra intervenção, registre quem a autoriza e qual parte da rede precisa participar da decisão.',
        'Meça o tempo até o caixa, o atendimento e a matriz conseguirem voltar a operar. Peça que as equipes consultem registros já gravados e classifiquem o que ainda precisa de ação. Inclua uma alteração enviada por um cliente depois da pausa e confira que ela chegará ao responsável pelo pedido. Anote as etapas que dependeram do fornecedor e a disponibilidade exigida naquela janela. Use o ensaio para decidir se o orçamento precisa cobrir mais horas de acompanhamento ou uma forma diferente de preservar as pendências.',
      ],
    },
    {
      heading: 'Dimensione treinamento e suporte em torno do primeiro turno',
      paragraphs: [
        'Prepare o treinamento com situações que a unidade vai encontrar. Inclua venda para retirada, entrega parcial e cancelamento que depende do centro de distribuição. Peça que as pessoas executem o roteiro e indiquem onde conferem o resultado. Reserve também uma simulação de troca de turno. Uma pessoa registra a venda e outra assume a confirmação pendente. Conte as dúvidas que exigem ajuda e revise as instruções antes da janela real. O orçamento deve distinguir horas de preparação, presença na filial e atendimento remoto.',
        'Defina a primeira linha de suporte. Uma dúvida de tela pode ser resolvida pelo responsável local. Uma reserva ausente pode depender da matriz e do integrador. Faça a prova com um problema em que a causa ainda está aberta. A filial deve registrar o identificador, o horário e o estado observado sem precisar diagnosticar sozinha. Combine em quanto tempo alguém assume, que alternativa a loja tem enquanto aguarda e como a coordenação diferencia uma falha isolada de algo que afeta outras unidades.',
        'Use o volume do primeiro turno para estimar a carga. Em uma simulação, a filial registra 90 pedidos e 15 precisam de orientação adicional. Se cada orientação ocupa seis minutos, a equipe de apoio gasta 90 minutos ativos, além do tempo para investigar falhas. Se os pedidos chegam concentrados na abertura, distribua as pessoas para atender a demanda simultânea. Substitua as estimativas por dados do piloto e revise quais situações exigem alguém na loja ou podem ser acompanhadas remotamente. Leve esse cálculo ao orçamento de expansão.',
      ],
    },
    {
      heading: 'Compare o custo do piloto com o custo de cada nova unidade',
      paragraphs: [
        'Peça um **orçamento de modernização de software legado** dividido em itens de rede, itens da primeira filial e atividades que se repetem. A integração com o cadastro central pode servir a várias unidades. Preparar o estoque inicial, validar dispositivos e treinar operadores pode acontecer a cada abertura. Algumas regras, como a devolução em uma unidade sem depósito, talvez exijam adaptação. Solicite uma estimativa para uma filial semelhante e outra que use processo diferente. Registre também quais itens precisam ser estimados só depois da descoberta.',
        'Em um exemplo fictício, uma integração comum custa R$ 28.000 e a preparação da primeira loja, R$ 12.000. Uma segunda loja semelhante pode demandar R$ 8.000 de carga, treinamento e acompanhamento se a integração puder ser reutilizada. Outra que usa equipamento ou operação diferente pode exigir atividade adicional. Use esse exercício para perguntar quais premissas precisam ser verificadas. Some licenças, apoio da matriz e custo de manter o legado para as lojas que ainda operam nele. Evite dividir o primeiro projeto pelo número de filiais sem considerar as diferenças.',
        'Compare duas formas de contratar. Uma proposta pode cobrar um piloto e condicionar a expansão ao resultado. Outra pode estimar a rede e incluir preço por grupo de unidades. Peça que ambas mostrem o mesmo recorte, os testes obrigatórios e a capacidade interna prevista. Defina quem decide o avanço e como o orçamento muda se a filial revelar uma dependência compartilhada ainda desconhecida. A escolha fica mais clara quando cada parcela está ligada a uma entrega verificável e a empresa consegue calcular o custo de interromper, corrigir ou expandir.',
      ],
    },
    {
      heading: 'Escolha a segunda filial pelo que ainda precisa ser demonstrado',
      paragraphs: [
        'Antes de indicar a segunda loja, escreva o que o piloto demonstrou nas condições em que ocorreu. Uma operação com internet redundante, supervisão presencial e estoque abastecido diariamente demonstra que esse conjunto funcionou. Para uma unidade abastecida duas vezes por semana, simule uma venda feita durante o intervalo entre entregas e verifique o destino dos pedidos que dependem de reserva. Se a nova situação exige descobrir várias regras ao mesmo tempo, distribua essas diferenças por ondas e indique qual regra será provada primeiro.',
        'Organize as candidatas por dependências concretas. Para cada uma, registre o terminal usado no balcão, a versão de integração, o tipo de expedição e a equipe disponível para a mudança. Compare também o calendário. Uma filial semelhante que está em inventário pode exigir mais cuidado naquela semana do que outra que usa um equipamento diferente, mas dispõe de tempo para homologar. Atribua cada diferença a um responsável técnico ou operacional e vincule a escolha a uma janela em que seja possível executar os testes.',
        'Imagine uma rede com três candidatas. A loja A tem o mesmo depósito e equipe reduzida no fechamento. A loja B tem escala completa e aceita devoluções de vendas online. A loja C vende principalmente itens encomendados e depende de um fornecedor cujo retorno só chega no dia seguinte. Se a principal dúvida é a capacidade de treinar com equipe reduzida, a loja A é uma candidata desde que a gerência consiga liberar os operadores. Se a dúvida é como a devolução altera o estoque compartilhado, a loja B pode fornecer evidência mais direta. Para a loja C, inclua o retorno do fornecedor no calendário do ensaio.',
        'Peça que os candidatos à implantação preencham o mesmo roteiro de descoberta e apresente o resultado à operação. Anote quais perguntas foram respondidas por inspeção local e quais dependem de confirmação da matriz. Uma configuração encontrada em um terminal pode ter sido replicada por conveniência e ainda assim ser importante para a loja. Experimente o fluxo em homologação antes de decidir se essa configuração entra no padrão da rede ou passa a ser uma pré-condição específica da filial.',
      ],
    },
    {
      heading: 'Faça a homologação com evidências da própria filial',
      paragraphs: [
        'Atribua um identificador a cada cenário e registre a preparação, a execução, o resultado e os sistemas conferidos. Para uma devolução de venda feita em outra loja, anote o pedido de origem, a unidade que recebeu o item e o saldo resultante. Peça que a pessoa a cargo do estoque confirme a movimentação e que alguém do financeiro localize a baixa ou o ajuste aplicável. Guarde os resultados em um local acessível a quem autoriza a virada e use dados de teste apropriados.',
        'Confira os limites da amostra. Executar uma venda isolada ajuda a validar permissões e cadastro. Para verificar a convivência, faça duas unidades tentarem reservar o mesmo item com saldo limitado. Quando houver risco de repetir uma transmissão por falha de comunicação, simule o recebimento do mesmo evento duas vezes e confira a quantidade de efeitos no sistema que mantém o saldo oficial. Confirme também que as equipes conseguem identificar qual pedido recebeu uma reserva quando os dois aparecem juntos na fila.',
        'Reserve testes separados para relógio e sequência. Uma movimentação registrada no fim do expediente pode ser recebida pela matriz depois que a filial encerrou o turno. Compare as datas usadas para exibir o pedido, baixar o estoque e consolidar o relatório. Peça ao fornecedor que apresente o tratamento dos eventos tardios e a forma de reabrir uma conciliação autorizada. Se um extrato só estiver disponível no dia seguinte, o cronograma deve prever essa conferência antes de encerrar o acompanhamento intensivo.',
        'Programe uma nova execução quando mudar uma regra compartilhada. Se a implementação precisa passar a aceitar um novo motivo de devolução para a segunda filial, repita na primeira os cenários que consultam esse motivo e os que mantêm a regra anterior. Solicite a estimativa do custo dessa regressão e o prazo para executá-la. Quando o fornecedor propõe uma configuração por loja, peça que demonstre como o suporte consulta a versão ativa e identifica a configuração usada em uma transação histórica.',
      ],
    },
    {
      heading: 'Use critérios de avanço que a matriz e a filial possam conferir',
      paragraphs: [
        'Registre os critérios antes de anunciar a próxima data. Um conjunto pode exigir um fechamento completo conferido, saldo reconciliado para a amostra escolhida, incidentes críticos resolvidos e um teste de retorno dentro da janela. Defina quem atesta cada resultado. O gerente da loja pode confirmar o atendimento e a passagem de turno. O responsável por inventário confirma o saldo e a área financeira valida a conciliação. A coordenação de tecnologia consolida as condições e a pessoa designada formaliza a decisão.',
        'Associe cada tolerância a uma consequência operacional. Uma confirmação de retirada que demora alguns minutos pode ser administrada se houver uma fila visível e instruções de atendimento. Uma venda da qual não se consegue identificar o pagamento precisa ser localizada antes de liberar outra loja. Para incidentes tolerados, defina o volume máximo, o prazo para resolver e a forma de acompanhar. Em uma rede com turnos sucessivos, deixe explícito qual turno recebe a pendência e como verifica se ela está acumulando.',
        'Compare o comportamento antes e depois com recortes equivalentes. Em um exemplo fictício, 12 dos 240 pedidos elegíveis exigiam correção manual no legado, enquanto 8 de 160 exigiram correção no piloto. Ambos representam 5%, embora o total bruto tenha caído. Examine o tipo de tarefa manual e o tempo empregado. Se antes eram ajustes rápidos de código de item e agora são divergências em reservas que exigem duas equipes, o impacto pode ter aumentado. Use a medida para investigar a causa e dimensionar o suporte da próxima loja.',
        'Documente também a decisão de adiar. A ata deve conter o cenário que falhou, o que precisa mudar e quem repete o ensaio. Se a loja puder continuar operando com um procedimento temporário, inclua prazo, volume suportado e autorização. Uma autorização emitida para o piloto deve ser revista antes de replicar o procedimento em outras lojas. Divida o orçamento em etapas para que a empresa saiba quanto custa pausar e resolver uma dependência antes de contratar a próxima janela.',
      ],
    },
    {
      heading: 'Organize as ondas pela capacidade de virada e de conferência',
      paragraphs: [
        'A orientação de planejamento de ondas da AWS propõe agrupar a migração considerando dependências e prever ensaios, suporte após a virada e encerramento formal. Para a rede de lojas, use o princípio para desenhar grupos que a equipe consiga preparar, implantar e conferir no calendário real. Uma região pode compartilhar supervisão, mas depender de um único analista de estoque na matriz. Dimensione a onda pelo gargalo e registre que atividades podem acontecer em paralelo com segurança.',
        'Calcule a capacidade com o que foi observado no piloto. Imagine que cada nova loja exige duas horas de conferência pela matriz na noite da troca. Dois analistas com três horas disponíveis fornecem seis horas, antes de considerar incidentes e a coordenação. Se a empresa reservar duas horas para exceções, a capacidade planejada fica em quatro horas, equivalentes a duas lojas nesse exemplo. Verifique a simultaneidade. Se as duas precisam do mesmo analista na primeira meia hora, ajuste os horários ou escalone as lojas.',
        'Monte o cronograma para trás a partir da abertura. Inclua a hora em que a empresa precisa ter decidido sobre a continuidade, o período reservado para voltar, a checagem do primeiro pedido e a preparação de dispositivos. Compare com a jornada dos operadores. Uma abertura às oito com treinamento às sete deixa pouca margem para testar permissões de quem chega naquele turno. Peça que cada fornecedor indique quando os acessos devem estar aprovados e como identifica antecipadamente uma loja atrasada na preparação.',
        'Planeje a comunicação por papel. A gerência confirma horários e comunica o período de mudança. Expedição e centro de distribuição recebem o momento em que devem esperar pedidos pelo novo fluxo. A central de atendimento recebe instruções para localizar pedidos que atravessaram a janela. Durante a estabilização, mantenha um registro de incidentes por filial e por causa comum. Se duas lojas relatarem o mesmo atraso, a matriz pode verificar a integração compartilhada e decidir se a próxima janela deve prosseguir.',
      ],
    },
    {
      heading: 'Inclua a transferência para o suporte na proposta de implantação',
      paragraphs: [
        'A entrega de uma etapa deve permitir que a equipe que ficará com a operação reproduza as verificações. Solicite registros de configuração por loja, roteiro de abertura, consulta aos identificadores de venda e orientações para localizar uma falha entre o balcão e a matriz. Faça a passagem com casos de verdade em ambiente apropriado ou com reproduções equivalentes. Peça ao suporte que encontre uma reserva em trânsito e explique o próximo passo a alguém da loja. Registre o que ainda depende de acesso ou conhecimento exclusivo do fornecedor.',
        'Defina como a sustentação recebe uma alteração feita durante a onda. Por exemplo, a filial descobre que uma impressora só funciona com ajuste local. Alguém deve registrar onde esse ajuste está armazenado, publicar a versão aprovada do roteiro e indicar quais lojas precisam passar pela mesma prova. Para uma mudança de integração, especifique quem mantém a homologação disponível e como a empresa solicita uma nova rodada de testes. Inclua a estimativa desse trabalho no custo de expansão quando ele se repetir.',
        'Para pedir uma **proposta de modernização de sistema legado por filial**, reúna o mapa de dependências, a próxima janela possível e três casos que atravessam a loja e a matriz. Inclua as diferenças conhecidas entre as duas primeiras candidatas e um exemplo de incidente que justificaria interromper a mudança. Solicite entregas por etapa, custos de suporte no primeiro fechamento e condição comercial de uma eventual repetição. Use as respostas para avaliar a capacidade de comprovar a operação e a previsibilidade da expansão.',
      ],
    },
  ],
  faqs: [
    { question: 'Qual filial deve receber primeiro o novo sistema?', answer: 'Escolha uma unidade com fluxos representativos, dependências identificadas e uma equipe disponível para testar vendas, estoque, fechamento e retorno.' },
    { question: 'Quando posso expandir o piloto para uma segunda loja?', answer: 'Após o aceite de operação e fechamento, a conciliação prevista e o ensaio de retorno. Homologue também as diferenças específicas da segunda filial.' },
    { question: 'O que deve entrar no orçamento de modernização por filial?', answer: 'Separe integrações comuns, preparação por loja, treinamento, testes, suporte no primeiro fechamento e o custo de manter o legado durante a expansão.' },
  ],
  cta: {
    title: 'Quer planejar a modernização do legado começando por uma filial?',
    text: 'Compartilhe com a Tironi Tech os sistemas da rede, as dependências da matriz e a janela de operação. Podemos ajudar a estruturar o piloto e estimar a expansão.',
    label: 'Conversar sobre o piloto de modernização',
  },
  sources: [
    { label: 'AWS Prescriptive Guidance — planejamento de ondas de migração', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/wave-planning.html' },
  ],
};
