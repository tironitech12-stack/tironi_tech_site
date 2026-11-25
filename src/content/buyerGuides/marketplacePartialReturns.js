export const marketplacePartialReturns = {
  slug: 'integrar-marketplace-erp-devolucoes-parciais',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Saiba como contratar uma integração de devoluções parciais do marketplace ao ERP com conferência de itens, reembolso e ajuste de estoque.',
  keywords: ['integração de devoluções parciais do marketplace ao ERP', 'devolução parcial no ERP', 'conciliação de devoluções de marketplace', 'estoque em devoluções de marketplace'],
  emphasis: 'integração de devoluções parciais do marketplace ao ERP',
  intro: 'Para contratar uma integração de devoluções parciais do marketplace ao ERP, escolha uma venda com vários itens e acompanhe o que o comprador pediu para devolver, o que a operação recebeu e o que o canal reembolsou. Peça que o fornecedor prove os vínculos por item e quantidade, inclusive quando o dinheiro volta antes de o produto chegar. O roteiro de aceite deve conferir estoque, valores e histórico separadamente.',
  takeaways: [
    'Vincule devoluções ao item vendido e preserve as quantidades que ficaram com o comprador.',
    'Separe estado do transporte, conferência da mercadoria e reembolso.',
    'Teste reentregas, ajustes posteriores e lançamentos distintos no ERP.',
  ],
  visual: {
    title: 'Da solicitação parcial à conferência do item',
    labels: ['Marketplace registra a solicitação', 'Integração identifica linhas e quantidades', 'Operação recebe e classifica o que voltou', 'ERP e financeiro conferem os efeitos'],
    caption: 'A mercadoria pode chegar antes ou depois do reembolso. Os registros precisam mostrar o que foi confirmado em cada fonte.',
  },
  sections: [
    {
      heading: 'Identifique em que ponto a devolução parcial dá trabalho',
      paragraphs: [
        'Escolha os últimos casos em que a pessoa devolveu parte de uma compra. Abra o pedido original, a solicitação do marketplace, o registro de recebimento e os lançamentos usados no fechamento. Peça a quem executou o processo que explique onde precisou interpretar uma descrição, procurar uma política ou corrigir uma quantidade. Os fornecedores precisam entender o problema antes de automatizar o caminho que o ERP já oferece.',
        'Um pedido pode ter três itens de produtos diferentes ou três unidades de uma mesma linha. A devolução de duas unidades da segunda situação exige manter a terceira como vendida. No primeiro cenário, basta relacionar a linha certa quando a referência for confiável. Anote se a empresa confunde quantidade original, quantidade solicitada e quantidade aprovada. Uma integração que só carrega o estado do pedido inteiro dificilmente resolve esses casos.',
        'Separe o que a primeira versão vai automatizar. Algumas operações precisam acompanhar solicitações abertas e gerar tarefas para o depósito. Outras já recebem as peças e querem conferir o crédito e a reentrada no ERP. Se o fornecedor propuser mexer em todo o processo, peça entregas independentes com evidências e dependências. Isso permite testar o benefício com uma conta do marketplace e preservar o processo atual nos casos que ainda não foram homologados.',
        'Defina quem usará o resultado. Atendimento precisa explicar ao comprador qual parte do pedido está em análise. O depósito precisa conferir o pacote. Financeiro usa os montantes confirmados e as diferenças. A gestão talvez queira saber por que certas categorias voltam com frequência. Cada área precisa de níveis diferentes de detalhe. Escolha um indicador para o piloto, como tempo para localizar a linha certa ou quantidade de ajustes manuais depois do recebimento.',
      ],
    },
    {
      heading: 'Modele pedido, pacote, reclamação e devolução por linha',
      paragraphs: [
        'Um pedido pode ser separado em pacotes ou expedido de locais distintos. O marketplace pode atribuir uma referência à venda, outra à expedição e outra à reclamação. Coloque as referências em uma tabela que mostre o sistema dono e a relação com o SKU e a linha do ERP. Em vez de depender de descrição de produto, procure identificadores que persistem durante a jornada. Quando uma chave não estiver disponível, descreva como o operador valida o vínculo.',
        'Na documentação do Mercado Livre, a devolução tem uma referência própria e pode estar associada a reclamações. Esse arranjo mostra por que convém provar a relação com os identificadores que a conta da empresa recebe. Uma integração não deve presumir que reclamação e devolução são a mesma entidade. Peça um exemplo autorizado com os dados que sua modalidade retorna e indique se a confirmação de item ou quantidade precisa de outra consulta.',
        'Teste mais de uma devolução para a mesma linha. Imagine uma compra de quatro unidades. O cliente abre um pedido para devolver uma unidade e, depois, outro para devolver duas. O sistema deve conhecer cada solicitação e indicar quanto ainda pode ser tratado. Se uma for cancelada, revise o saldo de quantidade pendente sem apagar o fato de que ela existiu. O operador precisa identificar qual objeto recebe atualização e onde ler o estado da linha original.',
        'Entre os campos mínimos, inclua canal, conta, pedido, linha, SKU, unidade, quantidade, pacote e referência da devolução. A lista muda quando existe lote, serial ou kit. Um mesmo SKU pode representar uma unidade no marketplace e uma caixa no ERP. Peça a demonstração do caso em que o comprador devolve um componente de kit. O sistema deve mostrar qual item foi comercializado, como a operação reconhece a peça recebida e que política permite tratar o componente isolado.',
      ],
    },
    {
      heading: 'Acompanhe separadamente declaração, trânsito, recebimento e inspeção',
      paragraphs: [
        'Modele os estados liberados pela política comercial e aqueles que representam fatos do transporte. Uma solicitação pode estar aberta sem etiqueta, enquanto outra já está em trânsito. O depósito pode receber o pacote e ainda aguardar inspeção. Em determinados arranjos, o canal pode reembolsar antes de a mercadoria chegar. A equipe precisa enxergar o que aconteceu em cada fonte, sem inferir estoque disponível só porque um evento de reembolso apareceu.',
        'Peça um teste com etiqueta criada e pacote enviado depois do prazo usual do piloto. Confirme se o estado acompanha a fonte e como o operador é avisado quando a informação fica antiga. Outra devolução pode não chegar e exigir confirmação com o marketplace. Defina quanto tempo é aceitável aguardar e quem decide encaminhamento. Use a política da empresa e do canal que será integrado, pois os eventos e permissões podem variar por serviço e modalidade.',
        'Receber e inspecionar são momentos distintos. No recebimento, preserve a referência do pacote, horário e quantidade física observada. Na inspeção, registre condição, possíveis peças faltantes e destino autorizado. Um item intacto pode voltar ao saldo vendável depois da conferência. Um item avariado pode ficar em quarentena, virar reparo ou seguir tratamento definido pela empresa. Mostre ao fornecedor como o ERP representa cada destino e quando publica a disponibilidade.',
        'Inclua um retorno de mercadoria diferente da esperada. No cenário de teste, a etiqueta corresponde ao pedido certo, mas o conteúdo tem um SKU ou serial divergente. A equipe deve conservar a expectativa, registrar o observado e encaminhar a revisão sem repor automaticamente o SKU original. Decida quem pode enviar informação ao marketplace e como manter as evidências. A documentação oficial do canal pode prever ações diferentes de acordo com o estado da devolução e o papel da conta.',
      ],
    },
    {
      heading: 'Defina um roteiro para devolução de quantidade, variante e kit',
      paragraphs: [
        'Imagine uma venda hipotética com duas unidades de um item e uma unidade de outra variante. O comprador devolve uma unidade do primeiro item e mantém os outros. Peça aos fornecedores que recebam a solicitação e mostrem onde o ERP localiza a linha, qual quantidade entra em conferência e como o pedido conserva a informação das unidades mantidas. Se chegam ocorrências sem identificação da linha, o sistema deve encaminhar ao operador e registrar a decisão de associação.',
        'Na segunda situação, o comprador informa a devolução de um acessório de um kit. Se a política exigir retorno do conjunto, a solução precisa representar o que foi recebido e qual item ainda falta, sem liberar saldo do kit. Se permite ajuste por componente, defina quais valores e movimentações serão registrados. O ERP pode controlar estoque de componentes separadamente da linha comercial. Peça que o integrador mostre a relação nos relatórios e na triagem.',
        'Adicione uma troca de variante como caso separado. Uma pessoa pode devolver um tamanho e receber outro, com referência de transporte própria. A equipe precisa saber se o canal registra devolução e nova compra ou um fluxo específico de troca. Defina como comunicar o vínculo ao ERP sem tratar o segundo envio como reversão da primeira entrada. Na homologação, compare as quantidades em trânsito, recebidas e expedidas e confirme os identificadores que atendimento consegue consultar.',
        'Inclua duas contas com o mesmo código interno em operações diferentes. Se a empresa vende em lojas ou canais distintos, a integração precisa conhecer o contexto antes de aplicar regra ou vincular o retorno. Teste um arquivo enviado à conta errada e escolha se o sistema rejeita ou dificulta aprovação até resolver. Esse cenário revela se o projeto confere a origem antes de criar uma movimentação de estoque que depois precisará ser desfeita.',
      ],
    },
    {
      heading: 'Projete a rotina do depósito para casos incompletos',
      paragraphs: [
        'A equipe pode abrir uma fila pelo código da etiqueta, receber pacote, conferir quantidades e registrar evidências. Defina quais dados já são conhecidos e quais o operador precisa preencher. Uma unidade pode começar pela leitura da etiqueta e outra pelo número do pedido. A proposta deve demonstrar a busca que funciona na rotina e o que permite fazer quando o código não é legível. Indique também como o operador volta a um rascunho depois de ser interrompido.',
        'Considere remessas que chegam em mais de um pacote. Uma parte pode ser conferida e o restante continuar aguardando. Evite que o operador tenha de fechar o caso inteiro para liberar uma etapa já concluída. Em vez disso, preserve a condição de cada linha e o estado geral. Defina o que acontece se chegar uma quantidade maior que a prevista ou se o pacote tiver item sem autorização. O sistema precisa apontar divergência e encaminhar para quem decide.',
        'Se a inspeção precisar de foto, indique motivo, momento e perfis autorizados. Uma foto de etiqueta ajuda a identificar o item, enquanto outra pode documentar avaria. O aceite deve conferir se cada arquivo fica vinculado à devolução certa, inclusive depois de uma correção de referência. Quando enviar evidência ao marketplace, confirme que quem autoriza o envio pode ver a versão que será usada e que os anexos não incluem informação desnecessária da operação.',
        'Determine como corrigir uma leitura equivocada. Um item pode ser confirmado com o código de outra variante e gerar uma intenção de reentrada. O responsável precisa desfazer ou compensar o efeito conforme o estado do ERP, registrando o motivo. Mostre a diferença entre corrigir um rascunho e revisar movimento já confirmado. O sistema deve permitir recuperar o caso certo sem apagar como o erro aconteceu. Essa rotina influencia custo de suporte e treinamento.',
      ],
    },
    {
      heading: 'Concilie reembolso sem antecipar a entrada de estoque',
      paragraphs: [
        'Trate o registro de reembolso como um fato financeiro vindo de uma fonte identificada. Ele pode ocorrer antes de chegar o material, depois da inspeção ou sem devolução física, conforme o caso. Relacione o evento à compra e à devolução quando as referências estiverem disponíveis. Se uma consulta mostrar apenas autorização, continue indicando que o pagamento ainda requer confirmação. A equipe precisa distinguir valor estimado, aprovado e efetivamente refletido no relatório do canal.',
        'Em um exemplo hipotético, um pedido de R$ 300 contém um produto de R$ 120, outro de R$ 100 e um terceiro de R$ 80. A venda recebeu desconto de R$ 30, e a operação quer conferir a devolução do item de R$ 120. Se o canal distribuiu desconto na proporção do preço nesse exemplo, a base do item seria R$ 108 após o abatimento de R$ 12. Use o relatório real para conferir qual critério foi empregado, especialmente quando há frete, cupons ou subsídios de origem diferente.',
        'Diferencie o valor devolvido ao comprador e o efeito no repasse ao vendedor. Podem existir cobranças, créditos e ajustes com datas distintas. Na mesma venda, uma taxa referente ao pedido original pode ser revisada depois, sem alterar a quantidade recebida no depósito. Peça que o fornecedor mostre que eventos do relatório sustentam o fechamento e onde a equipe vê uma diferença pendente. Esse desenho é útil tanto quando o ERP recebe uma baixa quanto quando a operação apenas confere.',
        'Inclua uma atualização posterior de valor. Um canal pode registrar uma devolução parcial, confirmar crédito e depois publicar um ajuste em outro fechamento. Guarde as referências e o período de cada movimento. Evite reescrever a linha anterior como se nunca tivesse existido. Na comparação de propostas, peça à área financeira que localize o valor original, o ajuste e o diagnóstico da diferença sem depender de comentários enviados separadamente.',
      ],
    },
    {
      heading: 'Descreva a movimentação que o ERP deve receber',
      paragraphs: [
        'Escreva os diferentes resultados possíveis da inspeção: retorno ao saldo vendável, quarentena, reparo, encaminhamento para análise ou outro destino usado pela operação. Para cada resultado, indique que local e tipo de movimento o ERP espera e quem pode autorizar. Se a integração só registra uma intenção de movimento, diferencie essa etapa da gravação confirmada. A tela precisa explicar por que o item ainda não apareceu disponível na loja.',
        'Num pedido com três unidades e devolução de uma, peça que o fornecedor prove a quantidade que será enviada à entrada. O ERP deve conservar a venda das duas unidades restantes. Faça um segundo teste com uma devolução posterior da mesma linha e uma correção de quantidade depois de inspeção. Confira quais operações foram acumuladas e quais foram anuladas por decisão autorizada. Um ajuste parcial não deve transformar uma venda em cancelamento integral.',
        'Se o processo exige registro fiscal ou contábil, confirme com a área responsável quais documentos e relações já são tratados pelo ERP e o que o integrador deve entregar. Inclua identificação da venda, item, quantidade, local e momento do recebimento. Teste uma devolução do mesmo produto em duas filiais. A proposta deve indicar quem verifica o fluxo da empresa e como o sistema rejeita uma situação em que a informação necessária não está presente.',
        'Escolha como mostrar disponibilidade ao canal. A mercadoria pode voltar ao estoque físico e ainda aguardar liberação de qualidade. Compare a posição no ERP com o que a loja virtual exibe e indique qual evento permite reofertar. Um equipamento usado com peça faltante pode ficar em local diferente do item novo, mesmo que ambos compartilhem o código comercial. A configuração inicial precisa respeitar a política e não apenas somar cada recebimento ao total publicado.',
      ],
    },
    {
      heading: 'Planeje reentrega de eventos, conciliação e recuperação',
      paragraphs: [
        'Eventos podem chegar duplicados ou fora de ordem, e a empresa pode importar relatórios do mesmo período para conferência. Defina como guardar origem, identificação, versão e ocorrência. Um evento repetido pode ser descartado como efeito novo, mantendo evidência de que houve reentrega. Uma retificação precisa criar a diferença relevante. Peça a execução do mesmo lote duas vezes e compare devoluções, quantidades movimentadas e valores depois de cada rodada.',
        'Teste uma resposta perdida depois de gravar no ERP. O conector pode criar uma entrada de estoque sem devolver confirmação. Se houver referência externa, use-a para recuperar o movimento antes de tentar novamente. Se o ERP não permite confirmar, encaminhe para revisão com os dados necessários. Peça que a proposta mostre onde a operação vê a incerteza e como fecha a pendência. Esse cenário tem impacto direto no saldo que a empresa pode vender.',
        'Compare uma falha temporária com cadastro inválido e condição ainda não suportada. Indisponibilidade pode aceitar nova tentativa no intervalo previsto. SKU sem vínculo deve ser encaminhado para correção. Um tipo de devolução fora da política do piloto pode exigir fluxo manual. Em todos os casos, a equipe deve saber o que ficou registrado e o que foi executado. Um estado genérico de erro dificulta distinguir a ocorrência que precisa de análise da que se recupera automaticamente.',
        'Planeje um procedimento de conciliação por conta e período. Compare solicitações, itens recebidos, entradas confirmadas e efeitos financeiros. Se houver diferenças, mantenha a última posição conhecida e indique em que fonte falta confirmação. Uma chegada tardia pode ser legítima. A revisão não deve corrigir automaticamente toda diferença se o depósito ainda estiver inspecionando. Defina responsáveis, tolerâncias e uma trilha para registrar o que foi conferido.',
      ],
    },
    {
      heading: 'Teste a integração com um pedido que passa por mais de uma devolução',
      paragraphs: [
        'Prepare um pedido de teste com duas unidades da mesma linha e um acessório vendido separadamente. No primeiro dia, o comprador solicita devolver uma unidade e o canal inicia o reembolso antes de o pacote chegar. Peça que o ERP mantenha as outras peças como vendidas, que o depósito veja o material esperado e que o painel financeiro indique apenas a confirmação disponível. Em cada sistema, registre a referência original e a nova.',
        'Depois registre o recebimento da unidade com avaria. A entrada precisa ir ao destino definido pela política, sem restaurar saldo vendável. Em seguida chega uma segunda solicitação para o acessório. Faça o integrador demonstrar como cada pacote, inspeção e reembolso fica vinculado à própria referência. Depois escolha uma devolução que ainda está em análise e peça a um usuário de atendimento que explique o caso olhando apenas os dados disponíveis no seu perfil.',
        'Adicione uma correção de quantidade. Uma segunda mensagem pode repetir o valor já conhecido ou informar que uma peça adicional foi recebida. Peça que o fornecedor demonstre como reconhece a revisão sem criar novo caso ou movimento indevido. Inclua também alteração no histórico quando uma ação for executada manualmente em contingência. O projeto deve provar que consegue reconstruir a sequência com os estados que foram observados na prática.',
        'Encerre comparando o total movimentado e os itens que o comprador manteve. Confira valores, documentos e quantidades, incluindo a avaria. Solicite evidência no marketplace, no ERP e, se aplicável, na visão financeira. Determine quem aceita cada etapa do teste. A comparação deve verificar o que aconteceu no sistema responsável, em vez de encerrar quando a integração mostra que enviou uma chamada com sucesso.',
      ],
    },
    {
      heading: 'Defina responsabilidades para atender o comprador e revisar exceções',
      paragraphs: [
        'Mostre o que atendimento precisa consultar: devolução aberta, pacote a caminho, mercadoria analisada, reembolso pendente ou confirmado. A comunicação deve indicar o fato relevante sem prever aprovação que o canal ainda não confirmou. Se o comprador pedir esclarecimento, a equipe deve saber qual área acompanha a pendência e que dados pode compartilhar. Separe mensagens enviadas automaticamente de observações internas que ajudam a investigar.',
        'Escolha quem autoriza enviar uma revisão ao marketplace. Uma foto de avaria pode precisar de validação antes de sair do depósito. Uma decisão sobre reembolso pode pertencer integralmente ao canal. No orçamento, o fornecedor deve indicar o que a integração apenas consulta, o que pode enviar e como verifica se a conta está habilitada a agir naquele estado. Teste a tentativa com um perfil que não pode aprovar nem transmitir dados.',
        'Inclua a operação com um prestador de armazenagem. O prestador talvez só precise receber, identificar o item e marcar a condição. A loja mantém a regra comercial e a gestão de reembolso. Peça que o fornecedor mostre como limitar acesso àquelas devoluções e como devolver o resultado sem expor todo o histórico do comprador. Decida se a inspeção volta por integração, portal ou arquivo com evidências. Essa interface pode ter custo próprio.',
        'Quando surgir contestação, preserve o que foi observado e as decisões que seguiram. Uma devolução pode chegar danificada, mas o canal aceitar o reembolso por regra de operação. A equipe deve conseguir tratar os registros sem confundir condição física, decisão comercial e valores. Inclua um relatório com motivos de divergência e responsáveis. Ele serve para identificar padrões e propor melhoria no catálogo ou embalagem, além de resolver o caso individual.',
      ],
    },
    {
      heading: 'Use o mesmo volume e as mesmas interfaces na comparação de orçamentos',
      paragraphs: [
        'Informe marketplace, quantidade de contas, ERP e volume por mês. Separe devoluções totais, parciais, trocas e exceções trabalhadas manualmente. Registre onde a mercadoria é recebida e quantas pessoas conferem os dados. Peça orçamento de descoberta, desenvolvimento, integração, migração, homologação, treinamento e suporte. Uma oferta pode cobrir apenas consulta de solicitações. Outra pode incluir recebimento, documentos, conciliação e recuperação. Compare suas entregas no cenário que importa.',
        'Peça uma prova de identificação por linha usando registros da conta e modalidade envolvidas. A documentação do canal ajuda a estimar, mas a interface disponível pode variar conforme permissões e tipo de devolução. No lado do ERP, teste gravação da entrada num ambiente próprio e veja que dados retorna. Se faltar campo para identificar a mesma operação, o integrador deve apresentar alternativas e custos de suporte. Isso reduz incerteza antes de fechar prazo de implantação.',
        'Considere custos de acompanhar mudanças. O marketplace pode alterar formato de notificação ou fluxo de revisão. A operação pode adicionar outra conta, um operador de estoque ou novo esquema de kits. Pergunte o que pode ser configurado pela empresa e o que exige nova entrega. Inclua manutenção do mapeamento, alertas e possibilidade de exportar vínculos e histórico. A empresa deve conseguir revisar devoluções anteriores mesmo se trocar de integrador.',
        'Escolha o que fica para outra fase. Importar casos históricos, processar logística reversa de todos os canais ou emitir documentos automaticamente amplia as dependências. Um piloto pode começar com uma conta, um depósito e um conjunto de compras comuns, mantendo tratamento assistido das exceções mais raras. Peça o esforço residual explícito. Essa definição ajuda a comparar fornecedores que oferecem coberturas diferentes sem esconder o trabalho que continuará com a operação.',
      ],
    },
    {
      heading: 'Homologue com estoque, atendimento e financeiro na mesma revisão',
      paragraphs: [
        'Antes da demonstração, defina o resultado esperado por evento. O depósito verifica a mercadoria recebida. Atendimento localiza explicação para as diferenças de estado. Financeiro confere efeito por item e período. A equipe de integração verifica repetição, consultas, identificadores e recuperação. Prepare uma tabela de evidências e marque quais falhas impedem liberar o piloto. Isso evita que cada área aprove uma parte sem que a jornada completa tenha sido testada.',
        'Comece com uma conta e compare com um período anterior. Meça devoluções associadas sem intervenção, tempo até entrada após inspeção, valores não explicados e retrabalho por erro de quantidade. Um cenário ilustrativo com 100 devoluções, das quais 20 exigem associação manual, pode orientar o teste, mas a taxa deve ser avaliada por tipo de pedido, conta e canal. Compare também o tempo necessário nas exceções que continuam manuais.',
        'Teste uma falha em que a operação precisa voltar temporariamente ao procedimento anterior. Indique quem segura a fila, como o depósito registra recebimentos e em que momento o ERP passa a receber dados novamente. Ao retomar, reconcilie o que aconteceu durante a interrupção. Se uma parte já chegou ao ERP por procedimento manual, o novo fluxo deve evitar repetição. Solicite evidência da transição e registre o que pode ser reprocessado com segurança operacional.',
        'Leve à reunião de aceite um caso típico, um caso de ajuste financeiro e uma exceção física. Mostre o que a integração conseguiu preservar em cada exemplo e quais dúvidas ainda dependem do canal. Peça que a equipe explique por que determinado item voltou ou não ao estoque, e em que relatório aparece o valor. Com essa evidência, a empresa pode decidir se amplia a cobertura, investe no tratamento de um tipo de exceção ou ajusta o recorte do projeto.',
      ],
      bullets: [
        'Uma unidade devolvida de uma linha que continua parcialmente vendida.',
        'Crédito confirmado antes da chegada do material.',
        'Inspeção que encaminha item para quarentena sem reoferta.',
        'Repetição de evento e retorno perdido sem nova entrada.',
        'Estorno ou ajuste posterior ligado ao evento e ao período corretos.',
      ],
    },
    {
      heading: 'Prepare a primeira conversa com o integrador',
      paragraphs: [
        'Leve um pedido com várias linhas, uma devolução parcial e a evidência de recebimento, sem dados pessoais desnecessários. Acrescente como o ERP identifica o item, como o depósito decide o destino e em que relatório o financeiro confere o reembolso. Indique onde já existe interface e quem precisa liberar a prova. Esse recorte ajuda o integrador a identificar a relação entre pedido, item e devolução antes de prometer automação para toda a operação.',
        'Peça uma proposta que possa ser verificada em um ciclo completo. Ela deve indicar conta, usuários, tipos de devolução, estados, sistema de destino e responsáveis por corrigir exceções. Se a fase inicial não automatiza reembolso ou documento, descreva como a equipe ainda realiza essas tarefas e como confirma o resultado. Delimitar o que será testado permite comparar custos e decidir o que ampliar depois da primeira conciliação.',
      ],
    },
  ],
  faqs: [
    { question: 'Como registrar uma devolução parcial sem cancelar a venda inteira?', answer: 'Vincule a solicitação à linha original, preserve o identificador da devolução e registre a quantidade envolvida. Confirme no ERP que o movimento afeta só a unidade recebida e que o restante continua vendido.' },
    { question: 'Reembolso confirmado deve devolver o saldo ao estoque?', answer: 'A reposição depende de recebimento e inspeção, conforme a política. Registre o reembolso como fato financeiro separado e publique saldo só quando a operação autorizar a disponibilidade.' },
    { question: 'O que levar para pedir orçamento?', answer: 'Leve ERP, contas do marketplace, volumes e exemplos de devolução parcial, kit, avaria e ajuste. Inclua relatórios saneados de pedido, armazém e reembolso.' },
  ],
  cta: {
    title: 'Quer integrar as devoluções do marketplace ao seu ERP?',
    text: 'Conte como sua equipe identifica a linha devolvida, confere a mercadoria e acompanha o reembolso. A Tironi Tech pode ajudar a delimitar o primeiro fluxo e os critérios de aceite.',
    label: 'Apresentar minha operação de devoluções',
  },
  sources: [
    { label: 'Mercado Livre Developers — gestão de devoluções e revisão pelo vendedor', url: 'https://developers.mercadolivre.com.br/pt_br/gerenciar-devolucoes' },
  ],
};
