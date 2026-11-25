export const makeToOrder = {
  slug: 'sistema-producao-sob-encomenda-escopo',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Defina o escopo de um sistema de produção sob encomenda com revisão técnica, lista de materiais, capacidade, custos e integração ao ERP.',
  keywords: ['sistema de produção sob encomenda', 'software para produção sob pedido', 'orçamento de sistema industrial', 'integração de ordens de produção ao ERP'],
  emphasis: 'sistema de produção sob encomenda',
  intro: 'O escopo de um sistema de produção sob encomenda deve ligar o que o cliente aprovou aos materiais, à capacidade e às instruções que a fábrica pode executar. Para pedir orçamento, leve um pedido típico, uma alteração de desenho e uma falta de componente. Exija que a proposta mostre quem autoriza a fabricação, como protege as revisões e como registra o que de fato foi produzido.',
  takeaways: [
    'Separe configuração de catálogo, engenharia por pedido e execução de fábrica.',
    'Controle quais revisões de materiais e instruções estão autorizadas em cada ordem.',
    'Teste prazo, falta de material, retrabalho e integração antes de liberar uma família inteira.',
  ],
  visual: {
    title: 'Da encomenda aprovada à entrega',
    labels: ['Requisitos confirmados no pedido', 'Materiais e roteiro de fabricação liberados', 'Capacidade, compras e execução acompanhadas', 'Qualidade e expedição confirmam a entrega'],
    caption: 'Cada passagem exige dados próprios. Um pedido vendido pode aguardar engenharia, material ou aprovação antes de entrar em produção.',
  },
  sections: [
    {
      heading: 'Defina o que significa produzir sob encomenda na sua fábrica',
      paragraphs: [
        'Na primeira reunião, leve um pedido do tipo mais frequente e outro que tenha exigido trabalho de engenharia. Faça a equipe indicar o que já estava definido quando o orçamento foi emitido e o que só foi conhecido depois. Uma janela industrial pode usar dimensões variáveis e ferragens de catálogo. Um dispositivo especial para uma linha de montagem pode depender de desenho, aprovação do cliente e fabricação de um componente novo. Esses fluxos podem coexistir, com custos de sistema diferentes.',
        'Uma configuração de catálogo usa opções e combinações conhecidas. A proposta pode incluir regras de escolha, validação de compatibilidade e geração de lista de materiais. Quando o produto é projetado para um cliente, o sistema precisa acomodar especificações em construção e liberar partes da engenharia em momentos distintos. A documentação de produção do Dynamics 365 descreve a engenharia sob encomenda como um processo que costuma começar por uma fase de projeto. Use a distinção para nomear o fluxo na sua operação.',
        'Escolha o que precisa ser resolvido primeiro. Algumas fábricas perdem prazo porque vendas promete uma data antes de comprar um item demorado. Outras têm material, mas começam com desenho desatualizado. Há também operações que corrigem todos os problemas e continuam sem saber quanto custou cada encomenda. Reúna evidências dessas situações, identifique o responsável e marque onde acontece a decisão. Uma cotação fica mais precisa quando o fornecedor investiga o problema no ponto certo.',
        'Defina o que permanecerá no ERP, em ferramentas de engenharia ou num controle já usado na produção. Um sistema novo pode complementar a gestão de arquivos e autorizações sem substituir estoque ou faturamento. Peça propostas que usem o mesmo conjunto de fronteiras para comparar integração e desenvolvimento. Se alguém sugerir substituir uma ferramenta, examine qual etapa passa a funcionar melhor, o que precisa migrar e como a empresa recupera informação do processo antigo.',
      ],
    },
    {
      heading: 'Transforme o pedido comercial em requisitos verificáveis',
      paragraphs: [
        'Uma encomenda começa com o que foi vendido. Registre modelo, dimensões, quantidade, material, acessórios, acabamento, local de entrega e condições especiais que afetam fabricação. Evite que um comentário livre seja a única evidência de uma característica essencial. Se a especificação foi aprovada em desenho ou proposta, guarde a referência da versão. A equipe precisa conferir os dados que sustentam a ordem sem procurar anexos com nomes semelhantes na caixa de entrada.',
        'Defina quais campos podem ser completados pela engenharia depois da venda. Uma espessura pode depender do cálculo técnico, enquanto a cor já foi acordada com o cliente. Separe requisitos fixos e decisões em aberto. Quando uma escolha alterar custo, prazo ou compromisso, a proposta precisa prever uma revisão antes de avançar. Se o cliente decidir mais tarde, siga com as atividades que podem ocorrer sem essa informação e mostre claramente o que ficará pendente.',
        'Inclua a aprovação de desenho e condições de entrega se fizerem parte do processo. Registre quem enviou, quem aprovou e qual versão estava em discussão. Uma mensagem pode aceitar a geometria e pedir mudança no acabamento. A engenharia precisa identificar o que ficou decidido e o que ainda impede liberar. Pense também em aprovações parciais por conjunto, quando algumas partes podem seguir para compras ou fabricação antes de o produto completo estar liberado.',
        'Combine como tratar pedidos com várias linhas. Um cliente pode comprar equipamentos repetidos com acessórios diferentes. A estrutura deve permitir identificar quais unidades compartilham a revisão do produto e quais seguem uma adaptação própria. No aceite, peça que o operador localize uma linha pelo desenho, encontre o material aprovado e mostre o estado sem confundir as demais unidades. Isso define o nível de rastreabilidade que o desenvolvimento precisa entregar.',
      ],
    },
    {
      heading: 'Modele materiais e etapas sem perder as revisões',
      paragraphs: [
        'A lista de materiais deve indicar itens, unidades, quantidades e regra de perda ou sobra quando aplicável. O roteiro de fabricação indica etapas, recursos, ordem de execução e verificações esperadas. Em produção sob encomenda, uma estrutura de referência pode servir como ponto de partida. A ordem precisa apontar para a versão ou os dados que foram realmente liberados. Sem isso, atualizar o catálogo pode alterar a instrução de uma máquina que já entrou em fabricação.',
        'Peça um exemplo de material comum e outro de material específico daquela encomenda. Uma fábrica pode reutilizar parafusos e perfis, mas comprar um sensor apenas para um projeto. O sistema deve mostrar se o item está disponível, reservado ou pendente. Para componentes sem código definitivo, escolha quando nasce o cadastro e quem valida sua classificação. Compras precisa receber informação suficiente para cotar sem registrar como definitivo um item que a engenharia ainda não liberou.',
        'Quando o desenho mudar, a equipe deve enxergar o impacto sobre materiais, ordens e operações iniciadas. Defina quais mudanças podem seguir por revisão simples e quais exigem autorização formal. Em um exemplo, alterar o furo de uma chapa antes do corte permite atualizar a instrução. Depois do corte, pode exigir retrabalho ou descarte. A proposta deve explicitar onde fica a decisão, como é comunicada e quais valores serão registrados no custo.',
        'Teste também uma peça substituta. Se um componente ficar indisponível, o sistema pode sugerir um item aprovado ou encaminhar a engenharia para revisar a equivalência. O estoque não deve decidir por similaridade de nome. Especifique quem aprova a substituição, se o cliente precisa ser consultado e qual evidência fica ligada ao número de série. Depois da entrega, essa informação pode ser necessária para orientar assistência e reposição.',
      ],
    },
    {
      heading: 'Conte com material, capacidade e engenharia ao prometer a data',
      paragraphs: [
        'Um prazo depende de mais de um recurso. Uma encomenda pode exigir desenho aprovado, um componente com prazo de fornecedor e uma máquina ocupada em outras ordens. Defina quais dessas datas entram na previsão e quem pode assumir o compromisso com o cliente. Uma estimativa inicial pode usar condições explícitas. A confirmação precisa indicar se material e capacidade foram verificados ou se a data ainda depende de aprovação técnica.',
        'Mapeie a capacidade no nível que a empresa consegue manter. Para alguns processos, basta saber quantas horas por turno o recurso tem disponível e quais pedidos estão planejados. Para outros, máquina, ferramenta e habilidade do operador precisam coincidir. Acrescente preparação, paradas previstas e serviços externos. Peça um exemplo em que a mesma encomenda tenha prazo diferente conforme o recurso escolhido. A proposta deve explicar de onde vêm as disponibilidades.',
        'Fixe uma regra de prioridade. Um cliente urgente pode entrar antes de uma ordem de menor prazo ou usar outra linha, desde que a fábrica saiba quais entregas serão afetadas. O software deve ajudar a enxergar consequência e publicar a nova programação. Evite que o rearranjo fique só na tela do planejador se operadores já baixaram instruções ou compras já confirmou entrega. O teste precisa mostrar quais partes da programação mudam e como a equipe toma conhecimento.',
        'Inclua capacidade de terceiros. Tratamento térmico, pintura externa ou usinagem terceirizada podem depender de lote mínimo e disponibilidade do fornecedor. Defina o momento de enviar, confirmar retorno e inspecionar o lote. Se o prazo externo atrasar, o sistema precisa localizar as encomendas afetadas. Algumas fases internas podem avançar enquanto o componente está fora. O planejamento deve permitir identificar essas possibilidades sem prometer que todo pedido ficará pronto.',
      ],
    },
    {
      heading: 'Trate falta de material, reserva e compra vinculada ao pedido',
      paragraphs: [
        'Uma posição de estoque informa o que está no sistema. A quantidade que a fábrica pode usar depende também de reservas, estado de qualidade e local. No briefing, peça que o fornecedor mostre como lida com um item que existe em outro depósito ou está reservado para uma ordem diferente. Se a indústria faz transferência, a promessa de fabricação deve considerar o tempo e a confirmação dessa movimentação, além da quantidade que aparece na tela.',
        'Defina quando uma ordem reserva materiais. Em uma encomenda de desenho ainda aberto, pode ser cedo para separar todos os componentes. Já uma peça de entrega longa pode exigir compra após a autorização preliminar. Vincule a compra e a reserva a um requisito ou ordem identificável. Quando a revisão mudar, indique quais compromissos permanecem e quais precisam de cancelamento ou realocação. Essa regra deve ser testada com a área de suprimentos.',
        'Para falta parcial, escolha se a fábrica começa a produzir um conjunto ou aguarda o lote completo. Um chassis pode ser preparado antes da chegada de um motor, desde que medidas e interfaces estejam confirmadas. O sistema deve mostrar ganhos e limites dessa separação. Se uma etapa usar material crítico, preserve o critério de liberação e a informação de quanto foi comprometido. Isso reduz o risco de deixar componentes em processo sem uma previsão de conclusão.',
        'Preveja sobra e devolução. Uma barra comprada para um pedido pode deixar um trecho aproveitável, conforme a regra da fábrica. Descreva como apontar consumo real, recuperar sobra e indicar qualidade para outro uso. Em caso de componente danificado durante a produção, o sistema precisa registrar substituição e custo. No orçamento, trate essas rotinas separadamente da reserva inicial, porque envolvem pessoas e lançamentos distintos.',
      ],
    },
    {
      heading: 'Use um caso de montagem para confrontar as propostas',
      paragraphs: [
        'Imagine uma fábrica que recebe uma encomenda para seis conjuntos filtrantes. Quatro usam o conjunto padrão com acabamento especial. Dois exigem um suporte com furação diferente e aprovação de desenho. O pedido tem uma data de entrega única, mas a empresa pode expedir parte com autorização. Para o teste, peça que o fornecedor mostre como identifica os dois grupos, quais materiais compartilham e que etapa depende de aceite técnico.',
        'Quando o desenho dos dois conjuntos especiais for revisado, altere uma medida depois de comprar os suportes. A solução deve proteger as quatro unidades que continuam no padrão e identificar o impacto sobre a compra já emitida. Mostre onde a engenharia decide usar, reprocessar ou substituir a peça. Se houver efeito em prazo ou custo, a equipe comercial precisa ver as condições que devem ser discutidas antes de confirmar a mudança para o cliente.',
        'Agora introduza uma ocupação não planejada no equipamento de pintura. A equipe pode mover as quatro unidades padrão para outro turno ou manter a data e mudar a ordem de fabricação. Peça que a proposta mostre uma alternativa e explique que informação precisa ser atualizada no controle de produção. A programação final deve preservar o conjunto de materiais liberados e deixar claro quais ordens mudaram de data. Esse cenário é ilustrativo e serve para avaliar o fluxo, sem pressupor ganho financeiro.',
        'Termine com uma unidade que falha na inspeção dimensional. O supervisor precisa reter a unidade, registrar o retrabalho e autorizar nova avaliação. Se o cliente aceitar cinco unidades no prazo, o pedido passa a mostrar a diferença entre produção, qualidade e expedição. A proposta deve demonstrar quais registros ficam no ERP e como o time de atendimento encontra a versão final quando o sexto conjunto é liberado.',
      ],
    },
    {
      heading: 'Defina o que o chão de fábrica precisa apontar',
      paragraphs: [
        'Escolha os apontamentos necessários para acompanhar execução. Início de operação, quantidade concluída e material consumido podem bastar num primeiro recorte. Para certos produtos, vale registrar operador, recurso, lote e medições. Indique quem lança, com que frequência e por qual dispositivo. Se a equipe usa luvas, trabalha em área sem rede ou divide um terminal, inclua essas condições na demonstração para não aceitar uma tela que só funciona no escritório.',
        'Decida quando registrar tempo manual ou automaticamente. Tempo de máquina pode incluir preparação e execução sem representar horas dedicadas do operador. Uma pessoa também pode cuidar de duas máquinas simultaneamente. Para custos, indique que tipo de tempo é registrado e que uso o financeiro fará. Peça uma amostra de relatório e simule um intervalo perdido ou corrigido. A edição precisa deixar evidência e identificar quem aprovou o ajuste.',
        'Na qualidade, associe medição, tolerância e versão da instrução. Um resultado fora do parâmetro pode exigir retenção, aprovação de desvio ou retrabalho. O sistema deve indicar se a ordem pode seguir e quem decide. Teste uma ordem com duas unidades liberadas e uma retida. Uma caixa de seleção geral de qualidade pode liberar o lote inteiro antes que o responsável perceba qual parte precisa ser medida novamente.',
        'Defina como tratar apontamentos todos de uma vez no fim do turno. Eles podem ser suficientes para histórico, mas talvez não sirvam para reagir a atraso imediato. Se a empresa precisa acompanhar mudanças durante o dia, estabeleça eventos e quem deve registrá-los. O projeto pode começar com poucas operações representativas, comparar a adesão e só então incluir mais etapas. A cobrança por quantidade de telas deve considerar como esses registros serão usados.',
      ],
    },
    {
      heading: 'Ligue custos previstos a custos observados',
      paragraphs: [
        'Antes de estimar o software, mostre como o orçamento comercial é montado. Materiais, horas internas, despesas de terceiros e preparação podem usar dados de referência de outras ordens. Uma revisão de engenharia pode mudar parte do custo antes de começar a fabricar. Registre a versão da estimativa aceita, para que custos posteriores não pareçam melhorar apenas porque a base foi atualizada. A área responsável deve conseguir comparar previsão e realizado.',
        'Num exemplo hipotético, um conjunto usa R$ 1.800 de material e 12 horas previstas. Depois de uma revisão, a operação consome R$ 2.050 e aponta 16 horas, parte delas por retrabalho. O sistema precisa distinguir alteração do escopo, desperdício e desvio de execução. O valor por hora e a forma de distribuir custos indiretos pertencem às regras da empresa. Peça que o fornecedor mostre os dados necessários para cálculo, sem presumir a política contábil.',
        'Examine o custo das compras e serviços externos. Se um pedido ao fornecedor atende várias encomendas, a empresa precisa de critério de rateio verificável. Uma nota pode chegar depois que parte das unidades foi entregue. A área financeira deve saber quando consulta custo provisório e quando o processo está fechado. Em um piloto, use uma compra compartilhada para verificar se relatórios diferenciam compromisso do que foi recebido e contabilizado.',
        'Use a diferença de custo para selecionar próximos testes. Se o maior desvio vem de matéria-prima descartada, talvez o primeiro investimento seja registrar consumo e perdas com precisão. Se vem de horas de engenharia que nunca chegam ao orçamento, o controle pré-venda pode ser mais importante. Mantenha recortes por família e tipo de encomenda. Comparar uma série de repetições de catálogo com um primeiro projeto técnico pode levar a uma conclusão enganosa.',
      ],
    },
    {
      heading: 'Especifique o contrato de integração entre vendas, engenharia e ERP',
      paragraphs: [
        'Crie uma tabela por entidade e ação. Vendas registra pedido e condição comercial. Engenharia governa desenho, estrutura e revisão liberada. A produção aponta execução, enquanto o ERP pode controlar estoque, compras e custos. Se a ordem de fabricação nasce em outro sistema, defina a referência que permite relacioná-la ao pedido e à revisão. Indique quais campos são sincronizados e quais só podem ser editados no sistema responsável.',
        'Teste uma criação, uma atualização e uma falha de retorno. A fábrica pode liberar uma ordem e o ERP persistir o registro sem devolver confirmação por causa de uma interrupção. A integração precisa consultar a referência antes de gravar outra. Se uma etapa foi confirmada e outra falhou, como reserva aceita e material alternativo rejeitado, identifique o que fica pendente e quem está autorizado a corrigir. Os sistemas devem preservar o trabalho já registrado.',
        'Planeje como tratar revisão no meio do fluxo. Uma integração pode atualizar pedidos ainda planejados, mas rejeitar alterações na ordem já iniciada. Defina quais informações voltam ao planejador, como registra a exceção e quando precisa de intervenção na fábrica. Se for necessário suspender uma ordem, indique que marcações permanecem visíveis para compras, qualidade e expedição. A proposta deve incluir a trilha de decisões e não apenas o envio de dados.',
        'Peça estimativa para dados de partida. Uma família de produto pode ter cadastro limpo, enquanto outra protege versões em arquivos locais. Defina quais pedidos abertos entram no piloto e quais continuam no processo anterior. Teste compatibilidade de unidades e códigos antes de migrar grandes volumes. Se houver inconsistências, registre quem resolve, como reconcilia e quais dados serão mantidos apenas para consulta durante a transição.',
      ],
    },
    {
      heading: 'Compare os orçamentos com entregáveis e critérios de aceite',
      paragraphs: [
        'Envie a mesma família de produto, quantidade de usuários, sequência de operações e lista de interfaces a todos os fornecedores. Peça orçamento separado para descoberta, configuração ou desenvolvimento, integração, implantação e suporte. Uma proposta pode incluir dados mestres e outra tratá-los como responsabilidade do cliente. Mostre a diferença ao comparar preços, prazos e disponibilidade de pessoas da fábrica para testar.',
        'Exija evidência ao final de cada fase. Na descoberta, espere mapa de fronteiras, exemplos de revisão e leitura do ERP em ambiente de teste. Na primeira entrega, valide um pedido completo com lista de materiais, capacidade, apontamento e qualidade. Na operação assistida, registre erros e o procedimento para resolvê-los. Os critérios de passagem devem esclarecer quais defeitos impedem a linha de usar o sistema e quais ficam para evolução.',
        'Avalie o suporte numa janela que reflita a fábrica. Se há turnos de madrugada, defina como a equipe registra uma ocorrência sem depender de atendimento imediato e quando precisa de plantão. Peça um procedimento de contingência para perda de acesso, falha da integração e revisão liberada indevidamente. O custo de continuar o trabalho enquanto um problema é corrigido pode ser mais relevante que a mensalidade de uma ferramenta.',
        'Escolha um piloto de tamanho suficiente para avaliar alterações e faltas sem expor todos os pedidos. Compare data prometida e realizada, quantidade de ordens que iniciam com revisão liberada, retrabalho e discrepâncias de materiais. Revise casos individuais com quem participou. Se a fábrica ainda tiver que procurar desenhos ou reconciliar o mesmo dado em duas ferramentas, investigue antes de adicionar outra família de produtos.',
      ],
      bullets: [
        'Pedido comum e pedido com desenho especial em uma mesma carga.',
        'Mudança de revisão depois de compra ou início da produção.',
        'Componente com atraso, reserva parcial e substituição aprovada.',
        'Unidade retida pela qualidade com expedição parcial autorizada.',
        'Perda de retorno da integração com recuperação da mesma ordem.',
      ],
    },
    {
      heading: 'O que levar para a primeira conversa de projeto',
      paragraphs: [
        'Prepare três registros saneados: um pedido padrão, outro que exigiu revisão e um caso com atraso ou retrabalho. Inclua versão do desenho, estrutura de materiais e caminho de produção se estiverem disponíveis. Mostre quem decide o prazo, quem libera para fabricar e que informação é registrada antes de faturar. Diga quais dados foram confirmados e quais precisam de investigação. Isso permite ao fornecedor propor um recorte sem assumir que toda encomenda segue o mesmo padrão.',
        'Combine que a proposta declare quais decisões o sistema autoriza e quais ele só informa. Um painel pode mostrar componente pendente, enquanto compras continua decidindo o fornecedor. Uma rotina pode sugerir nova data, enquanto o responsável comercial confirma com o cliente. Quando essa divisão está explícita, é mais fácil comparar escopo e medir o trabalho que permanece com a equipe. Reúna representantes de cada etapa para validar o desenho antes de aprovar o orçamento.',
        'Pergunte onde a operação documentará decisões futuras, como incluir nova família ou alterar política de revisão. Peça um exemplo de mudança administrável pela própria empresa e outro que exige desenvolvimento, com teste e plano de retorno. A fábrica vai continuar mudando depois da implantação. Vale entender desde a cotação como o fornecedor demonstrará que uma nova regra serve à nova encomenda e preserva as ordens que já foram liberadas.',
      ],
    },
  ],
  faqs: [
    { question: 'O sistema de produção sob encomenda deve substituir o ERP?', answer: 'Depende das funções ausentes. O novo sistema pode organizar especificação e execução, com estoque, compras e faturamento no ERP. Compare alternativas usando uma ordem completa com alterações e confirmação.' },
    { question: 'O que precisa ser definido antes de estimar o prazo de entrega?', answer: 'Identifique requisitos aprovados, tempo de engenharia, disponibilidade de componentes, capacidade e serviços externos. Declare o que foi confirmado e qual condição ainda pode mudar a data.' },
    { question: 'Como controlar a revisão do desenho durante a produção?', answer: 'Vincule cada ordem à revisão liberada, registre operações iniciadas e apresente o impacto quando houver mudança. Exija autorização e trilha para retrabalho, cancelamento ou troca de material.' },
  ],
  cta: {
    title: 'Quer cotar um sistema para a sua produção sob encomenda?',
    text: 'Conte como o pedido chega à engenharia, onde a fábrica consulta a revisão e como os dados voltam ao ERP. A Tironi Tech pode ajudar a delimitar a primeira entrega e os critérios para testar o projeto.',
    label: 'Apresentar meu processo de fabricação',
  },
  sources: [
    { label: 'Microsoft Dynamics 365 — tipos e ciclo de produção', url: 'https://learn.microsoft.com/en-us/dynamics365/supply-chain/production-control/production-process-overview' },
  ],
};
