export const whatsappOrderSupport = {
  slug: 'whatsapp-ia-consulta-pedido-pos-venda',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Compare orçamentos para atendimento pelo WhatsApp com consulta ao ERP, identificação do comprador, status por remessa e encaminhamento humano.',
  keywords: ['atendimento de pós-venda no WhatsApp com consulta ao ERP', 'consultar pedido pelo WhatsApp', 'orçamento de integração WhatsApp ERP para pós-venda'],
  emphasis: 'atendimento de pós-venda no WhatsApp com consulta ao ERP',
  intro: 'Para orçar atendimento de pós-venda no WhatsApp com consulta ao ERP, defina quais pedidos podem ser consultados, como o contato comprova vínculo com a compra e quais estados podem ser comunicados. Compare fornecedores sobre os mesmos casos, incluindo entrega parcial, atualização atrasada e encaminhamento para uma pessoa.',
  takeaways: [
    'Orce consultas por tipo de pedido, fonte e condição de acesso.',
    'Teste a tradução dos estados do ERP em respostas úteis ao comprador.',
    'Meça resolução, esforço humano e custo com os mesmos critérios.',
  ],
  sections: [
    {
      heading: 'Defina quais dúvidas de pós-venda entram no orçamento',
      paragraphs: [
        'Comece pelas perguntas que ocupam a equipe. “Meu pedido já saiu?”, “Qual produto ainda falta?” e “Onde envio a correção do endereço?” exigem operações diferentes. A primeira pergunta pode depender de expedição, a segunda precisa relacionar itens e remessas, e a terceira pode exigir encaminhamento para uma pessoa autorizada a avaliar o pedido. Uma proposta comparável deve listar as perguntas que podem ser respondidas, as fontes necessárias e o resultado que encerra cada atendimento.',
        'Imagine um varejista que recebe contatos sobre compras enviadas por dois centros. A maior parte quer saber se os itens foram despachados. Alguns compradores tentam mudar o endereço depois de receber a confirmação do pedido. A empresa pode começar apenas com consulta a expedição e abrir uma pendência para o restante. Esse recorte muda o orçamento porque consultar eventos, registrar um pedido de alteração e modificar o endereço envolvem integrações e responsabilidades distintas.',
        'Escolha se a primeira fase precisa atender todos os canais de venda. Um pedido feito no balcão pode aparecer imediatamente no ERP. Uma venda de marketplace pode depender de sincronização e ter outra referência. Peça um inventário de origens, formatos de número, campos disponíveis e prazo de atualização. Se um canal ficar fora da primeira fase, escreva como o atendimento vai reconhecer a situação e encaminhar o comprador de forma útil. Inclua esse caso no roteiro que será enviado aos fornecedores.',
      ],
    },
    {
      heading: 'Identifique o pedido e confirme o vínculo do contato',
      paragraphs: [
        'Para **consultar pedido pelo WhatsApp**, defina que evidência a empresa usa para vincular a conversa à compra. O número do pedido permite localizar o registro, mas um contato pode ter sido atualizado ou pertencer a mais de uma conta empresarial. Peça que as áreas responsáveis definam quais informações podem ser exibidas em cada etapa, como resolver casos em que o vínculo não fica claro e quem pode tratar exceções. Teste a política num ambiente autorizado com cadastros fictícios que representem o processo.',
        'Inclua pedidos que compartilham um número externo ou que chegam com referência parcial. Um cliente pode informar o número do comprovante de pagamento, enquanto o ERP usa um identificador de venda. Primeiro, descreva quais referências o operador atual consegue consultar e em que sistema. Depois, peça aos candidatos que mostrem como a conversa solicita o complemento necessário e como evita escolher um pedido pelo primeiro resultado. Quando houver mais de uma opção autorizada, apresente uma forma de distinguir os pedidos com o mínimo de informação necessário.',
        'Escolha o que fazer com contato de terceiro, telefone compartilhado e comprador corporativo que acompanha várias remessas. Cada caso pode exigir uma definição da área de atendimento sobre quem recebe a informação e qual registro pode comprová-la. Inclua no orçamento a preparação dessas regras e a verificação das condições em teste. Descreva como a equipe humana recebe uma consulta pendente e que dados já coletados pode reutilizar, para evitar que o comprador tenha de repetir toda a conversa.',
      ],
    },
    {
      heading: 'Traduza os estados do ERP em explicações que o comprador consiga usar',
      paragraphs: [
        'Monte uma tabela com o estado registrado, sua origem, o significado para a equipe e a resposta aprovada para o comprador. “Faturado” pode indicar que o documento fiscal foi emitido, enquanto a coleta ainda depende de confirmação. “Em transporte” pode vir de uma fonte diferente ou representar apenas a passagem do volume à transportadora. Peça que o fornecedor use os eventos que a operação reconhece e indique como comunica a última atualização. Teste a resposta com pessoas de atendimento e expedição antes de apresentá-la ao cliente.',
        'Inclua um pedido com remessas em estágios distintos. Imagine três itens: dois enviados pelo centro A e um que será separado no centro B. O canal deve mostrar quais itens estão em cada remessa, quando houver vínculo disponível, e qual atualização ainda é esperada. Se o comprador pergunta pelo pedido inteiro, combine uma resposta que descreva a entrega parcial sem dizer que todos os itens saíram. Em homologação, confira a correspondência entre quantidades do pedido, volumes e eventos de cada origem.',
        'Uma previsão precisa mostrar qual evento e qual fonte a sustentam. Se a expedição prevê entrega entre quarta e quinta e a transportadora ainda não reportou coleta, decida que informação pode ser usada naquele estágio. Um prazo de separação pode ajudar o operador a orientar o cliente e ter significado diferente de uma data prevista de entrega. Inclua no orçamento a revisão dessas mensagens e o teste em que aparece uma atualização que contradiz a previsão anterior.',
        'Para ocorrências como devolução ao remetente ou tentativa de entrega frustrada, defina a próxima ação e sua pessoa responsável. O comprador pode precisar reunir informações para que outra área verifique o endereço. Peça que o fornecedor mostre onde surge a pendência, o que será dito e como a equipe confirma o estado com o registro autorizado. Algumas situações podem começar fora do escopo automatizado. O agente deve reconhecer quando encaminhar e transferir os dados que a equipe precisa para continuar.',
      ],
    },
    {
      heading: 'Verifique a atualidade da informação e a reação quando uma fonte falha',
      paragraphs: [
        'Peça um mapa das fontes e dos horários. A consulta pode acessar o ERP no momento da conversa e receber estados de transporte por sincronização. O registro pode ter data de ocorrência e data de entrada no sistema. Inclua ambas no roteiro sempre que essa diferença afetar o significado da resposta. Se a coleta ocorreu às 9h e chegou ao ERP às 13h, a empresa deve saber que horário mostra ao comprador e qual número usa para acompanhar atraso na integração.',
        'Crie um teste com atualização fora de ordem. Uma remessa pode registrar chegada à cidade de destino e depois receber um evento antigo de coleta. Confirme como a operação identifica o estado que deve prevalecer e qual evidência autoriza a decisão. Se fontes diferentes entram em conflito, indique quem resolve e como a dúvida é comunicada. O objetivo da prova é impedir que o comprador receba uma descrição incompatível com o estágio já confirmado, sem exigir que o agente resolva sozinho todos os conflitos.',
        'Simule duas situações em homologação: o pedido não aparece e o ERP temporariamente não responde. A primeira pode exigir revisar a referência ou aguardar a entrada de um canal de origem. A segunda precisa de uma resposta de contingência e de um fluxo para retomar a consulta. Peça uma prova em que o prazo de retorno seja acompanhado e a equipe receba uma pendência consultável. Registre como o fornecedor distingue os estados, evitando que uma interrupção técnica seja apresentada como ausência definitiva do pedido.',
        'Se houver uso de dados em cache, peça que o fornecedor informe a fonte, o horário de atualização, o limite aceitável e o comportamento após esse limite. Uma consulta antiga pode ser suficiente para orientar sobre o último estado conhecido e insuficiente para confirmar uma nova previsão. Compare essa opção com uma consulta direta usando a mesma carga e as condições de acesso previstas. Acrescente ao orçamento a configuração, o monitoramento e a investigação das diferenças de atualização que a operação precisa atender.',
      ],
    },
    {
      heading: 'Entregue o atendimento humano com contexto e responsabilidade',
      paragraphs: [
        'Descreva a passagem para uma pessoa como parte do **orçamento de integração WhatsApp ERP para pós-venda**. Determine quais dados chegam à fila: referência do pedido, situação do vínculo, motivo do encaminhamento, último estado confirmado e dúvida ainda aberta. Peça que os fornecedores demonstrem um caso em que o comprador solicita uma mudança e outro em que apenas a previsão não pode ser confirmada. A equipe deve conseguir continuar de onde a conversa parou, conforme os acessos que já usa.',
        'Escolha critérios de encaminhamento e horários. Um problema de entrega pode seguir para logística e uma contestação de cobrança para outra equipe. Se o atendimento está fora do expediente, combine que informação será apresentada e quando a fila será conferida. Defina o responsável em cada estado e o procedimento quando uma fila está indisponível. Em uma prova, peça que o fornecedor transfira uma ocorrência para a equipe prevista e mostre como o operador reconhece o prazo e o próximo passo.',
        'Conte como o atendimento volta ao canal depois de uma intervenção. Um operador pode resolver a dúvida e encerrar o chamado, ou solicitar acompanhamento no dia seguinte. Registre quando a automação pode retomar consultas e o que acontece se o comprador envia nova mensagem durante a análise. Teste uma conversa com duas dúvidas sobre o mesmo pedido e outra com pedidos diferentes. A operação precisa encontrar a pendência correta e preservar o contexto necessário, evitando respostas simultâneas que tratam o mesmo assunto de formas incompatíveis.',
      ],
    },
    {
      heading: 'Peça um orçamento que discrimine canal, integração e operação',
      paragraphs: [
        'Compare o valor de implantação pela lista de atividades que cada proposta cobre. A preparação do canal, a configuração da fila, a consulta ao ERP e a revisão de mensagens podem ser orçadas separadamente. Peça que o prestador indique se inclui o levantamento dos estados, a associação dos itens às remessas e a homologação com operação e logística. Uma estimativa para consultar um único estado pode ser suficiente para certa carteira. Se a empresa precisa acompanhar pedidos parciais de dois centros, o contrato deve tornar essa cobertura visível.',
        'Peça um orçamento recorrente com unidades de cobrança, data de referência e faixas estimadas. Inclua canal, processamento, infraestrutura, atendimento humano e sustentação da integração quando aplicáveis. Faça a conta para o volume típico e para a semana de maior demanda. Informe a composição das consultas, porque duas carteiras com o mesmo número de conversas podem gerar quantidades diferentes de pedidos, remessas e consultas repetidas. Solicite que os fornecedores usem o mesmo cenário e indiquem quais itens precisam ser confirmados antes da assinatura.',
        'Identifique os custos internos. Atendimento define mensagens e fluxos, logística confirma a interpretação dos eventos, e tecnologia libera ambientes e acompanha as consultas. Peça a cada fornecedor uma estimativa de horas e de reuniões por papel. Se o destino usa campos diferentes por origem, indique quem conhece as exceções e quando poderá participar do teste. Inclua a preparação de pedidos fictícios, a validação de exemplos e a conferência das filas após publicação no valor de comparação, mesmo quando parte dessas atividades fica com a empresa.',
        'Deixe explícito como serão aprovadas novas origens e dúvidas. A abertura de uma filial pode exigir configuração, outro conector ou apenas inclusão da unidade nas regras existentes. Pergunte como o fornecedor diagnosticaria a diferença e quais recursos já estão previstos no suporte. Peça também que descreva o que ocorre se a consulta ultrapassar a capacidade esperada. Essa informação ajuda a comparar custo de continuidade, necessidade de expansão e tempo de resposta quando a demanda muda.',
      ],
    },
    {
      heading: 'Meça o custo por dúvida resolvida junto com a qualidade da resposta',
      paragraphs: [
        'Antes de executar a prova, defina o que a empresa considera um **atendimento de pós-venda resolvido**. Para uma consulta de expedição, pode significar informar a situação confirmada de todos os itens sobre os quais o comprador perguntou. Para uma alteração de endereço, uma pendência encaminhada pode contar como triagem concluída enquanto a resolução fica com o operador. Mantenha os dois estados separados e pergunte como cada fornecedor consegue reconhecê-los nos relatórios. Use o mesmo critério para a operação atual e para o piloto.',
        'Considere um exemplo fictício com 1.000 dúvidas elegíveis por mês. O piloto resolve 650 automaticamente e as outras 350 passam pelo atendimento. Se a despesa da solução é R$ 780 e a etapa humana associada custa R$ 420, o total é R$ 1.200. Se a equipe confirma 950 resoluções válidas no mês, o custo é cerca de R$ 1,26 por resolução, considerando apenas os itens da simulação. Os 50 casos restantes devem aparecer como pendentes, encerrados sem resolução ou em outro estado definido pela empresa.',
        'Avalie o que acontece após a primeira resposta. Um comprador pode voltar a escrever porque a previsão era imprecisa ou porque faltava informação sobre uma segunda remessa. Defina um intervalo de observação e uma forma de vincular retornos ao mesmo assunto. Se a nova mensagem diz respeito à chegada de outro item ou a um problema diferente, trate o evento conforme a convenção acordada. Consulte uma amostra da fila para conferir como o histórico distingue resolução, esclarecimento e demanda nova.',
        'Compare tempo total e trabalho ativo. Uma resposta ao cliente pode sair rapidamente e deixar uma dúvida de logística que precisa ser analisada no dia seguinte. O operador pode ganhar tempo quando recebe a referência e o estado já confirmados. Meça esses efeitos separadamente e por tipo de caso. A proposta deve mostrar a estimativa de capacidade liberada, o trabalho que continua necessário e a forma de acompanhar a qualidade nos horários em que o volume de consultas aumenta.',
      ],
    },
    {
      heading: 'Calcule o efeito da sazonalidade e da indisponibilidade',
      paragraphs: [
        'Monte um cenário de volume habitual e outro de pico, como um período de promoções ou atraso de expedição. Um comprador pode consultar o mesmo pedido várias vezes em um dia quando a previsão muda. Peça que o fornecedor estime o número de consultas que cada conversa gera e identifique limites operacionais do ERP e do canal. Use registros da empresa para escolher horários e volume de teste. Se os dados ainda não existem, documente as premissas e diga que informação pode mudar a estimativa.',
        'Inclua um período em que os eventos de transporte demoram mais a chegar. Esse cenário pode aumentar tanto a quantidade de contatos quanto o tempo de investigação. Defina a mensagem que o comprador pode receber, o intervalo para uma nova conferência e a capacidade da equipe de acompanhar pendências. Compare o custo de manter toda dúvida em uma fila humana com o de apresentar o último estado confirmado e encaminhar somente situações que exigem decisão. Estime o trabalho de informar o comprador após a regularização.',
        'Peça o procedimento para um conector que volta a responder. A equipe precisa saber se vai consultar novamente todos os casos pendentes ou priorizar compras em um estado específico. Registre o horário em que a fonte recuperou e como confirmar que a informação voltou a ficar atualizada. Em um teste controlado, verifique dois casos que entraram durante a interrupção e um que só apareceu depois. Conte o esforço necessário e identifique atividades que podem ser retomadas por lote ou precisam de revisão individual.',
      ],
    },
    {
      heading: 'Homologue a consulta e a passagem para a equipe no mesmo roteiro',
      paragraphs: [
        'Prepare um conjunto de pedidos fictícios com os estados que aparecem no processo atual. Inclua um pedido recém-criado, um pagamento confirmado sem coleta, uma remessa em transporte e uma entrega parcial. Para cada caso, registre a informação autorizada, o texto esperado e o responsável pelo tratamento quando faltar algum dado. Rode o teste com o contato que pode consultar o pedido e, em uma rodada separada, com um perfil que deve seguir para verificação. Use o resultado para estimar quanto da operação poderá entrar no piloto.',
        'Inclua um caso com dois endereços de entrega cadastrados para a mesma empresa e outro com dois pedidos de valor parecido. Peça que a equipe confira como cada consulta chega à referência certa sem exibir informação além do necessário. Marque o resultado consultado no ERP e confira se a mensagem corresponde ao pedido pretendido. Se houver encaminhamento, verifique se a equipe recebe a referência, o motivo e o prazo. Deixe os operadores confirmar se conseguem continuar sem reiniciar a investigação.',
        'Faça uma rodada com atraso de fonte e recuperação. O comprador pergunta por um item ainda pendente e a atualização não chega na primeira consulta. Registre a resposta, o encaminhamento e o estado visível na fila. Quando o dado voltar, confirme quem pode consultar o ocorrido e retomar a conversa. Se o canal fornece eventos por webhook, documente quais eventos a integração usa e em qual sistema ficam disponíveis para conferência. A documentação da Meta explica a configuração de webhooks. A homologação precisa confirmar o comportamento da combinação contratada.',
        'Antes de liberar a primeira carteira, defina condições de aceite. Confira a proporção de respostas corretas por estado, a cobertura das remessas, o tempo para encaminhar e a capacidade de reconhecer dados indisponíveis. Trate como condição de liberação os erros que poderiam entregar informação de outro pedido ou comunicar uma entrega completa quando falta um item. Para falhas de interface, indique quem avalia impacto e retesta. Registre limitações de qualquer teste feito com uma fonte simulada e planeje a confirmação no ambiente previsto.',
      ],
    },
    {
      heading: 'Compare compromissos de suporte depois da implantação',
      paragraphs: [
        'Peça que a proposta defina a janela de acompanhamento inicial e o que muda quando ela termina. Na primeira semana, o fornecedor pode acompanhar integração, filas e diferenças de status junto da equipe. A rotina posterior precisa indicar quem monitora, quem atende solicitações e em que horário. Compare compromisso de responder a um chamado com o procedimento para verificar a causa e orientar o atendimento. Se uma falha ocorre durante a noite, confira quais ações estão autorizadas para a equipe disponível e quando o suporte especializado assumirá.',
        'Use um caso fictício de suporte para comparar candidatos. A operação vê 30 consultas não concluídas, mas o ERP está acessível para quem trabalha diretamente nele. Peça que cada fornecedor descreva quais registros permitem investigar se o problema surgiu no canal, na consulta ou em uma fila de atendimento. Confira como cada papel recebe informações suficientes para atuar e como o comprador é orientado enquanto o diagnóstico continua. Registre os limites entre as responsabilidades do prestador do canal, do integrador e da equipe que administra o ERP.',
        'Defina o que entra nos ajustes recorrentes. Uma mudança de texto para explicar o status de coleta pode exigir revisão comercial. Uma alteração nos valores enviados pelo ERP pode exigir atualização do mapeamento e teste de remessas. Se a proposta inclui horas de manutenção, esclareça como solicitações são classificadas e aprovadas. Para ambientes em que vários prestadores participam, confirme como é feito o encaminhamento técnico e quem continua responsável pela comunicação com a operação durante o atendimento.',
        'Solicite materiais de transferência que cubram versão, procedimento e responsáveis. A equipe deve poder localizar a tabela de estados, o roteiro de homologação e as instruções para encaminhar casos sem consulta confirmada. Peça que um atendente percorra um pedido parcial e que alguém do suporte localize a informação de atualização no ambiente autorizado. Compare a disponibilidade efetiva desses materiais com o que o contrato promete. Se a empresa quiser trocar de prestador, também importa saber que registros, configurações e documentos poderão ser usados no próximo escopo.',
      ],
    },
    {
      heading: 'Prepare o orçamento com exemplos que representem sua carteira',
      paragraphs: [
        'Leve para a primeira conversa cinco informações: origens de venda, volume de consultas, fontes de estado, regra de vínculo com o pedido e equipe que assume exceções. Acrescente um caso de entrega parcial, outro de atraso de atualização e um pedido que exige encaminhamento. Use exemplos fictícios ou material autorizado. Diga se a empresa precisa apenas responder dúvidas, abrir registros de atendimento ou acompanhar a demanda até a resolução. Isso permite comparar entregas sem misturar operações com custos diferentes.',
        'Se a maior incerteza está no ERP, peça uma fase curta de descoberta. A equipe pode verificar disponibilidade de campos, horários de atualização e diferenças entre centros de distribuição. Combine a saída dessa fase, como uma tabela de estados, uma amostra de consulta e a lista de cenários que ainda precisam ser testados. Defina quanto tempo a equipe dará para confirmar acessos e quem decidirá o recorte depois. Use o resultado para contratar a implantação com as dependências conhecidas.',
        'Planeje a expansão com base nos resultados por origem. A primeira carteira pode usar pedidos de um único depósito e resolver a maior parte das consultas de expedição. Incluir marketplace, remessas combinadas ou dúvidas sobre devolução pode exigir outras regras e telas. Peça que o fornecedor estime o custo por recorte e identifique quais testes serão reaplicados. Na reunião de aceite, registre o que foi validado, o que ficou em observação e quando a empresa pode decidir sobre novas origens ou tipos de atendimento.',
      ],
    },
  ],
  faqs: [
    { question: 'O que mais influencia o orçamento de pós-venda no WhatsApp com ERP?', answer: 'As fontes consultadas, a variedade de estados e origens, a regra para identificar o pedido, o volume de consultas e o encaminhamento quando a automação não resolve.' },
    { question: 'Como testar um pedido entregue em partes?', answer: 'Use um pedido com itens em remessas diferentes, confira o vínculo entre cada item e sua remessa e valide a mensagem contra os estados confirmados no ERP.' },
    { question: 'Como fazer o atendimento continuar quando o ERP está indisponível?', answer: 'Defina o que o comprador pode receber com base no último estado confirmado e como a equipe vai acompanhar e retomar as consultas em aberto.' },
  ],
  cta: {
    title: 'Quer orçar atendimento de pós-venda com consulta ao ERP?',
    text: 'Apresente à Tironi Tech as dúvidas que chegam pelo WhatsApp, as fontes de status e a equipe que atende exceções. Podemos ajudar a definir a integração, a prova de aceite e o escopo de atendimento.',
    label: 'Conversar sobre meu pós-venda no WhatsApp',
  },
  sources: [
    { label: 'Meta for Developers — introdução aos webhooks', url: 'https://developers.facebook.com/docs/graph-api/webhooks/getting-started/' },
  ],
};
