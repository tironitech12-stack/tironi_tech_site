export const erpReadOnlyAgent = {
  slug: 'agente-ia-erp-consulta-sem-escrita',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Compare orçamentos de agentes de IA para consultar o ERP com acesso somente leitura, fontes autorizadas e testes por perfil.',
  keywords: ['agente de IA para consultar o ERP com acesso somente leitura', 'agente de IA para consultar o ERP', 'orçamento de integração de IA com ERP'],
  emphasis: 'agente de IA para consultar o ERP com acesso somente leitura',
  intro: 'Para orçar um agente de IA para consultar o ERP com acesso somente leitura, liste as perguntas de negócio, os campos necessários e quem tem autorização para vê-los. Compare propostas usando os mesmos pedidos e perfis, com evidência de que a consulta devolve a informação correta e não altera o processo no ERP.',
  takeaways: [
    'Defina consultas por pergunta, campo e perfil de acesso.',
    'Confira a origem, a unidade operacional e o horário dos dados.',
    'Compare integração, homologação e suporte usando o mesmo recorte.',
  ],
  sections: [
    {
      heading: 'Comece pelas consultas que tomam tempo da equipe',
      paragraphs: [
        'Um **agente de IA para consultar o ERP** pode ajudar a localizar a situação de um pedido, conferir saldo ou encontrar a referência de um documento. Escolha o primeiro grupo pelo trabalho que a equipe precisa concluir. Por exemplo, o comercial pode querer responder se os itens de um pedido já entraram em separação. Escreva o estado esperado, a unidade a que se refere e o que a pessoa pode compartilhar depois de consultar. Assim, o fornecedor consegue estimar o acesso necessário e demonstrar o resultado na própria rotina.',
        'Imagine uma distribuidora com dois depósitos. Uma vendedora pergunta quantas caixas pode oferecer no depósito que atende sua carteira. O ERP também guarda o saldo físico de outras unidades, reservas e mercadorias em trânsito. A área precisa dizer qual medida serve à pergunta e quais dados entram na resposta. Uma consulta de referência pode mostrar disponibilidade para venda por depósito e unidade comercial. Faça o teste com uma caixa que pode ser vendida em pacote para confirmar que a resposta preserva a unidade de medida.',
        'Delimite o ponto em que a automação termina. A primeira versão pode mostrar o saldo autorizado e explicar a referência. Reservar mercadoria ou alterar o pedido exige um fluxo separado, com as autorizações correspondentes. Registre quem recebe pedidos de ação e onde a operação pode confirmar a solicitação. Peça aos candidatos que usem as mesmas perguntas de consulta e de encaminhamento. Compare o que cada proposta precisa desenvolver para responder e que passos permanecem no procedimento atual.',
      ],
    },
    {
      heading: 'Especifique a fonte e os campos que cada perfil pode consultar',
      paragraphs: [
        'Monte uma matriz de pergunta, perfil, unidade, fonte e campo. Na consulta de pedido, a equipe de atendimento pode precisar de status e remessa, enquanto o financeiro trabalha com campos de cobrança e conciliação. Estabeleça que papel pode pedir cada informação e em qual contexto. A permissão de leitura deve cobrir apenas os recursos usados nas perguntas autorizadas. Em homologação, execute a mesma pergunta com perfis fictícios diferentes e compare o resultado com a matriz aprovada.',
        'Identifique quem define a unidade autorizada. O ERP pode usar empresa e filial, enquanto a carteira comercial está no CRM. Se a informação troca com o turno ou com a atribuição da conta, indique quem atualiza o vínculo e quando ele passa a valer. Peça que a proposta mostre como a consulta se comporta para uma pessoa que atende duas filiais e para outra que está em transição de carteira. Use exemplos fictícios que permitam conferir a origem da decisão e a diferença de escopo entre os papéis.',
        'Defina como explicar um resultado indisponível. Um pedido pode estar fora da unidade permitida, em outro sistema ou ainda não sincronizado. A equipe responsável deve aprovar o que pode ser comunicado em cada situação. Se a consulta exige um dado adicional, indique qual referência é apropriada e quando a pessoa precisa encaminhar ao responsável. Inclua a regra no roteiro de comparação para que os fornecedores demonstrem como alguém continua o atendimento sem receber dados que a empresa reservou a outro perfil.',
      ],
    },
    {
      heading: 'Compare leitura direta com uma fonte preparada para consulta',
      paragraphs: [
        'Peça que o orçamento de **integração de IA com ERP** indique de onde cada informação será lida. Uma API do ERP pode ser apropriada para consultar o estado atual de um pedido. Uma réplica destinada a relatórios pode atender perguntas sobre o mês anterior com menor impacto na operação. Também pode existir um serviço interno que já aplica regras de visibilidade e interpreta a unidade de medida. Peça que cada fornecedor aponte o que pretende reutilizar, os horários de atualização e os campos que dependem de outra integração.',
        'Compare duas perguntas com necessidades de atualização distintas. A primeira pede o saldo disponível para responder a uma cotação que está em andamento. A segunda busca a quantidade expedida na semana anterior. Na primeira, um atraso pode fazer a equipe oferecer uma quantidade que já foi comprometida. Na segunda, a data de fechamento da fonte pode ser suficiente. Para cada pergunta, defina o intervalo tolerável, o resultado do teste e a orientação a apresentar quando a posição estiver além do intervalo acordado.',
        'Inclua na estimativa as consultas que o agente precisa fazer para montar a resposta. Uma pergunta sobre todas as linhas de um pedido pode depender de informações de expedição, reservas e unidades. Verifique se a integração reúne esses campos numa consulta autorizada ou se precisa passar por mais de uma fonte. Se o orçamento usa volume por pergunta, peça também o número aproximado de operações que cada pergunta gera. Faça a mesma conta para perguntas que voltam por falta de informação e para situações de demora no destino.',
      ],
    },
    {
      heading: 'Exija evidência do acesso somente leitura no sistema de referência',
      paragraphs: [
        'Defina como a empresa vai confirmar o limite de leitura. O prestador deve mostrar os recursos disponibilizados ao agente e o perfil que o sistema de referência reconhece. Peça que a área responsável confira a configuração no ambiente previsto. A interface do agente pode limitar opções e o perfil do ERP continua sendo uma evidência importante sobre o que a conexão pode executar. Registre o responsável pela configuração e a condição em que ela precisará ser revisada.',
        'Use duas solicitações fictícias para demonstrar o limite. Na primeira, a pessoa pede a posição de estoque de um item da sua unidade. Na segunda, pede que esse saldo seja reservado. A primeira deve mostrar a posição autorizada e a segunda deve orientar a passagem pelo procedimento que pode tratar a ação. Confirme no ambiente de homologação que o pedido e a disponibilidade permanecem sem alteração. Quando a rotina permite registrar uma solicitação em outro sistema, separe esse registro do efeito comercial no ERP e valide o destino.',
        'Inclua uma troca de papel ou carteira. Uma pessoa pode perder o direito de consultar os pedidos de uma unidade enquanto continua com acesso a outra. Peça que o fornecedor use contas de teste para mostrar o comportamento após a alteração. Confirme quando a regra começa a valer e onde aparece uma pendência de sincronização. Verifique também a orientação esperada para uma conversa já aberta. A entrega deve mostrar quem pode conferir o resultado e como a equipe identifica a configuração aplicada.',
      ],
    },
    {
      heading: 'Apresente o significado do dado na linguagem da operação',
      paragraphs: [
        'Peça a resposta com unidade, referência e horário. Uma equipe pode usar a palavra “enviado” para dizer que um pedido saiu da separação e outra para dizer que a transportadora confirmou a coleta. Antes de homologar, combine quais estados do ERP sustentam cada termo. Use um pedido que esteja faturado, mas ainda não coletado, e outro com remessas em estágios diferentes. A resposta deve conservar a diferença entre o dado consultado e a interpretação que o comprador pretende usar.',
        'Inclua uma consulta com mais de uma correspondência. Um pedido de mesmo número pode existir em duas filiais. Um código pode identificar embalagem diferente conforme o depósito. Mostre como o agente pede a informação que define a resposta e evita escolher pelo primeiro resultado. Se o perfil só pode consultar uma dessas opções, aplique a regra da empresa sobre o que pode ser apresentado. O teste deve permitir que o operador confira de onde veio o número sem pesquisar novamente em todos os sistemas.',
      ],
    },
    {
      heading: 'Meça a carga sobre o ERP durante o horário de pico',
      paragraphs: [
        'Estime quantas perguntas chegam no mesmo intervalo e quantas operações de leitura cada uma provoca. Uma consulta de saldo pode exigir uma leitura, enquanto uma pergunta sobre todos os itens de um pedido pode consultar situação, separação e transporte. Peça que o fornecedor indique a média e os casos que mais consomem capacidade. Compare o cenário habitual com abertura de turno, fechamento de pedidos ou inventário. A equipe que administra o ERP deve confirmar o que pode ser observado no ambiente de homologação sem comprometer outros testes.',
        'Considere um exemplo fictício de 120 perguntas no período de maior movimento. Se 90 exigem uma operação e 30 exigem três, a estimativa inicial é de 180 leituras. Se 12 operações ainda precisam de nova tentativa, serão 192. A distribuição no tempo importa tanto quanto o total. Peça que os candidatos mostrem como limitar concorrência, agrupar consultas autorizadas e escolher quais dados podem usar outra fonte. Use as contagens reais antes de contratar capacidade ou projetar o efeito de incluir mais filiais.',
        'Meça o intervalo da pergunta até a resposta utilizável. Identifique quanto do tempo foi gasto reconhecendo a referência, consultando o ERP e interpretando o resultado. Se a integração demora justamente quando os operadores registram pedidos, confira a condição com o administrador e discuta uma janela ou fonte alternativa. Em uma comparação, mantenha o mesmo conjunto de perguntas e informe o que foi medido com carga semelhante. O orçamento deve explicitar o perfil de demanda que sustenta a estimativa.',
      ],
    },
    {
      heading: 'Trate a consulta incompleta sem misturar estados diferentes',
      paragraphs: [
        'Inclua três resultados distintos no roteiro: pedido não localizado na fonte autorizada, fonte temporariamente indisponível e consulta que devolve parte dos dados. No primeiro, a operação pode pedir uma referência adicional. No segundo, pode registrar a pendência para retomar. No terceiro, talvez consiga informar que dois itens foram separados e deixar o estado da outra linha em conferência. Defina o texto previsto e a ação seguinte com a equipe responsável. Evite que falta de confirmação apareça como saldo zero ou como pedido cancelado.',
        'Em um pedido com duas remessas, teste o retorno do ERP quando a primeira já tem confirmação e a segunda ainda depende de outro sistema. Registre o horário de cada fonte e confira se a resposta preserva a diferença. Se uma projeção depende da segunda remessa, a equipe deve poder encaminhar a dúvida sem perder a referência da primeira. Compare a saída com o que um operador autorizado vê e meça quanto trabalho foi necessário para completar o caso depois da resposta do agente.',
        'Peça uma prova de recuperação. Faça a integração deixar de responder em ambiente de homologação e retomar mais tarde. Confira se casos em espera ficam visíveis, se o responsável consegue distinguir as consultas antigas das novas e se a resposta posterior registra a posição atual. Se a organização quer usar uma cópia temporária, indique o limite em que ela pode ser apresentada e como sua data aparece. Use o mesmo cenário para comparar suporte e tempo de investigação antes de fechar o contrato.',
      ],
    },
    {
      heading: 'Calcule o custo por consulta que ajuda o operador a concluir a tarefa',
      paragraphs: [
        'Use o mesmo denominador para comparar os fornecedores. Uma pergunta respondida pode exigir que o operador entre no ERP para confirmar a unidade ou interpretar um estado. Defina como utilizável a resposta que traz a informação autorizada, na unidade correta e no prazo combinado. Conte à parte as solicitações encaminhadas, os casos em que a pessoa precisou reabrir a consulta e as respostas fora da janela. Assim, a área comercial consegue saber quanto paga pelo resultado que realmente substitui parte do trabalho.',
        'Em uma simulação, 800 consultas custam R$ 960 em processamento, integração e acompanhamento. Se 640 atendem ao critério de resposta utilizável, são R$ 1,50 por resposta útil no período. A conta por pergunta recebida seria R$ 1,20 e descreve outra medida. Volte aos 160 casos restantes e estime a carga de revisão ou a espera pelo destino. Use números observados na empresa para comparar cenários e indique que despesas fixas de implantação ainda não entraram no valor recorrente.',
        'Separe as economias do processo e da infraestrutura. Um agente pode reduzir o tempo que o vendedor passa procurando o pedido e aumentar o volume de consultas ao ERP. Peça a estimativa de gasto técnico e confronte com minutos ativos poupados. Considere também que um grupo de consultas históricas pode ser atendido por uma fonte de relatório. O cálculo comercial deve permitir trocar hipóteses de volume, taxa de acerto e custo de suporte sem exigir que a empresa refaça toda a análise.',
      ],
    },
    {
      heading: 'Compare propostas com os mesmos campos, perfis e cenários de carga',
      paragraphs: [
        'Envie a todos os candidatos uma matriz curta com perguntas, campos autorizados, unidades e perfis. Acrescente um caso de saldo atual, um de histórico e outro que costuma depender de duas fontes. Peça preço por descoberta, construção do conector, configuração de respostas e homologação. Se alguma proposta parte de uma API existente, confirme quem verificou sua cobertura. Se outra inclui preparar uma base de consulta, peça que indique o esforço de atualização e a condição para publicar dados no prazo esperado.',
        'Inclua o trabalho que ficará com a organização. Os responsáveis pelo ERP podem precisar preparar perfil e ambiente, enquanto atendimento ou comercial confirma a interpretação dos estados. Peça uma previsão de horas por função e dia de teste. Indique quais fases exigem participação do fornecedor atual do sistema. Quando um teste usa dados fictícios, combine como confirmar as mesmas condições em homologação. O custo interno ajuda a comparar uma proposta curta que pressupõe tudo pronto com uma que inclui a verificação das dependências.',
        'Solicite estimativas para uma equipe e para um segundo grupo que use regras diferentes. A adição pode exigir novos campos, outra empresa cadastrada no ERP ou uma fonte de histórico. Peça o custo para criar o perfil, homologar limites e preparar a equipe. Compare também o valor mensal com volume típico e de pico, registrando a unidade da cobrança e a data da estimativa. Use os resultados para escolher o primeiro recorte sem assumir que a implantação inteira terá o mesmo custo unitário.',
      ],
    },
    {
      heading: 'Especifique como a equipe vai investigar respostas divergentes',
      paragraphs: [
        'Peça que sejam registrados os elementos suficientes para reconstruir uma diferença: referência da consulta, perfil, fonte, horário e estado apresentado. O responsável pode usar esses dados para verificar o registro no ambiente autorizado. Defina quais informações ficam visíveis à operação e quais exigem acesso técnico. Se o ERP diz que uma linha foi separada e o agente informou que saiu para entrega, compare o significado de cada estado e a regra usada para explicar o dado. A correção pode estar na integração ou na descrição da resposta.',
        'Inclua no orçamento um exercício de suporte. Um operador informa uma diferença de saldo entre o agente e a tela que usa. Peça que cada candidato descreva quem recebe a ocorrência, o que compara e qual prazo usa para orientar a equipe. Verifique o estado do estoque, a unidade de medida e o horário de cada leitura. Depois de aplicar o ajuste autorizado, repita a consulta e verifique um item semelhante que não deveria mudar. Defina quem pode aprovar a retomada dos atendimentos que dependem daquela resposta.',
        'Combine como o time vai acompanhar atualizações do ERP e do conector. Uma mudança de nome de campo pode interromper a resposta. Uma alteração de regra pode manter a consulta funcionando e mudar o significado do resultado. Peça uma instrução para identificar a mudança, escolher os casos de verificação e comunicar a diferença às áreas que usam a solução. A proposta deve esclarecer se esse acompanhamento integra o suporte e quais atividades dependem de novo orçamento ou de aprovação interna.',
      ],
    },
    {
      heading: 'Homologue a resposta, o acesso e a carga no mesmo roteiro',
      paragraphs: [
        'Prepare uma lista de perguntas com resultados previamente confirmados. Para cada consulta, escreva a empresa, a filial, o papel da pessoa, a unidade de medida e a fonte que confirma a posição. Inclua um pedido parcial, um saldo comprometido e um registro cujo número existe em outra filial. A pessoa que homologa deve conseguir conferir os dados na tela que já usa, com seus próprios acessos. Registre diferenças de horário ou filtros antes de interpretar a resposta como erro do agente ou do conector.',
        'Na mesma rodada, confira a pesquisa de um registro permitido, a orientação quando ele está fora do perfil e o encaminhamento de uma ação que exigiria escrita. Em cada caso, observe a resposta e a situação no ERP. Se o agente pode abrir uma tarefa em outra ferramenta, verifique essa entrega separadamente. Solicite que a equipe responsável pelo ERP confira os recursos e permissões concedidos à integração e documente a configuração que sustenta o aceite. Isso permite repetir a verificação quando um grupo mudar de carteira ou um conector for atualizado.',
        'Peça uma prova de carga com um conjunto representativo de perguntas e uma janela acordada. Observe tempo de resposta, operações pendentes e efeito sobre os processos que compartilham o serviço. A documentação do Dynamics 365 Finance and Operations descreve limites de proteção da API que podem restringir solicitações. Confirme quais limites se aplicam ao produto e ao ambiente da sua empresa. Quando uma consulta precisa esperar, verifique a orientação apresentada ao operador e se o trabalho continua disponível para retomar.',
        'Defina os achados que impedem a liberação. Acesso fora da unidade prevista, alteração de dados por uma função de consulta ou posição incorreta usada como confirmação exigem correção e reteste. Uma diferença de apresentação pode ser tratada conforme seu efeito e o procedimento temporário aceito. Peça que a prova registre o caso, o resultado observado, o papel responsável e o ambiente. Se uma parte foi simulada, indique claramente o que será conferido em homologação antes de autorizar o uso.',
      ],
    },
    {
      heading: 'Escolha uma primeira unidade e confirme a manutenção após o piloto',
      paragraphs: [
        'Comece com um grupo de perguntas que tenha fontes conhecidas e pessoas disponíveis para conferir. Um time de atendimento pode consultar estados de entrega para uma filial enquanto o estoque mantém seu processo atual. Na primeira janela, acompanhe perguntas que ficaram sem resposta, consultas que levaram mais tempo do que o previsto e casos que o operador precisou pesquisar de novo. Compare esses resultados com a linha de base. Ajuste a previsão de capacidade e de suporte antes de incluir outras unidades.',
        'Defina quando limitar uma família de respostas. Se o saldo de uma fonte está atrasado, a empresa pode suspender aquela consulta e manter a orientação para outros assuntos conforme o procedimento aprovado. Combine quem decide, onde o operador vê a mudança e quando o suporte deve investigar. Na retomada, confira uma posição conhecida e uma consulta cujo resultado mudou durante a interrupção. Anote quem acompanhou as pendências e qual orientação recebeu o cliente ou colaborador enquanto a fonte estava indisponível.',
        'Peça que a equipe consiga repetir um teste depois que o fornecedor sai. Uma pessoa de operação deve localizar o horário e a fonte de uma resposta. A equipe que administra o ERP deve conseguir conferir o perfil e identificar que mudança afeta uma consulta. Entregue um mapa de campos, a matriz de acesso e um roteiro de suporte com responsáveis. Registre quem mantém os documentos quando houver alteração de filial, de cadastro ou de integração. Essa distribuição permite orçar a continuidade com as atividades do dia a dia visíveis.',
        'Antes de ampliar, compare as diferenças das unidades. Uma filial pode consultar o mesmo tipo de pedido em outra empresa do ERP. Outra pode usar uma fonte adicional de transporte ou tratar embalagem de forma diferente. Peça uma estimativa por nova regra e por integração, além da capacidade de atendimento necessária. Defina quais perguntas precisam ser reaplicadas e a evidência que confirma o acesso correto. Se o grupo usa uma informação mais sensível ao horário, revise também a janela aceitável para atualizar a fonte.',
      ],
    },
    {
      heading: 'Prepare o pedido de orçamento com uma amostra que possa ser repetida',
      paragraphs: [
        'Leve à reunião três perguntas reais sem dados pessoais, os perfis que devem receber as respostas, a fonte de cada campo e o volume aproximado por turno. Inclua um caso em que a pessoa quer alterar o pedido e explique qual processo autorizado recebe essa demanda. Solicite uma fase de descoberta quando a cobertura das fontes ainda precisa ser verificada. Defina a entrega dessa fase, como uma matriz de campos e uma prova de leitura em homologação, antes de comparar preços para toda a implantação.',
        'Na aprovação comercial, alinhe a unidade de resultado, o trabalho interno e o período de acompanhamento. A proposta deve indicar o que será medido para aceitar as consultas, quais falhas suspendem a expansão e quem pode publicar uma mudança depois. Reserve espaço para verificar o custo observado e as condições que mudam ao incluir outro grupo. Use os resultados da primeira unidade para negociar o próximo recorte de acordo com a qualidade das respostas, o esforço de revisão e a capacidade do ERP.',
      ],
    },
  ],
  faqs: [
    { question: 'Como comprovar que um agente tem acesso somente leitura?', answer: 'Confira as permissões da integração no ERP e valide em homologação as consultas permitidas e o encaminhamento de pedidos que exigem alteração.' },
    { question: 'Quando usar uma fonte sincronizada em vez de consulta direta?', answer: 'Compare a atualidade necessária, a carga e o tempo de resposta. Consultas históricas podem tolerar uma janela maior que uma posição usada em uma cotação.' },
    { question: 'O que incluir no orçamento de integração do agente com ERP?', answer: 'Inclua descoberta de campos, conector, configuração de acesso, homologação, suporte e custo por resposta utilizável.' },
  ],
  cta: {
    title: 'Quer orçar um agente de consulta ao ERP?',
    text: 'Apresente à Tironi Tech as perguntas, as fontes e os perfis de acesso da sua empresa. Podemos ajudar a delimitar a integração e definir os testes de leitura.',
    label: 'Conversar sobre meu agente de consulta ao ERP',
  },
  sources: [
    { label: 'Microsoft Learn — limites de proteção da API do Dynamics 365 Finance and Operations', url: 'https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/service-protection-api-limits' },
  ],
};
