export const distributorPricing = {
  slug: 'orcamento-portal-distribuidor-precos-contrato',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Monte um orçamento para um portal de distribuidores que aplica preços por contrato, respeita filiais e integra os pedidos ao ERP.',
  keywords: ['portal para distribuidores com preços por contrato', 'orçamento de portal B2B', 'tabela de preços por distribuidor', 'integração de portal B2B ao ERP'],
  emphasis: 'portal para distribuidores com preços por contrato',
  intro: 'Para orçar um portal para distribuidores com preços por contrato, entregue aos fornecedores exemplos de clientes, filiais, unidades de venda e condições negociadas que mudam o preço. Peça uma demonstração do catálogo até o pedido confirmado no ERP, incluindo vencimento do acordo e acesso de outra conta. Assim você compara o que cada proposta cobre, o que precisa ser integrado e quais regras ainda precisam de validação.',
  takeaways: [
    'Mostre a ordem de aplicação das condições negociadas e as exceções que precisam de análise comercial.',
    'Defina se o valor exibido é estimativa, cotação válida ou compromisso para emissão do pedido.',
    'Homologue contas diferentes, mudanças de vigência, unidades de medida e retornos do ERP.',
  ],
  visual: {
    title: 'Do catálogo negociado ao pedido confirmado',
    labels: ['Conta e filial autenticadas', 'Produtos e condições elegíveis', 'Preço verificado no ponto de confirmação', 'Pedido processado e associado no ERP'],
    caption: 'Catálogo, cotação e pedido podem usar verificações em momentos distintos. A proposta precisa explicar quando cada valor passa a valer.',
  },
  sections: [
    {
      heading: 'Que tipo de venda o portal deve assumir primeiro?',
      paragraphs: [
        'Escolha compras recentes feitas por distribuidores recorrentes e siga o caminho desde a consulta de catálogo até a confirmação da ordem. Marque o ponto em que alguém abre uma tabela, confirma condição com outro time ou corrige uma unidade de venda. Em uma carteira com reposição previsível, o maior ganho pode estar no autoatendimento das compras que já têm regras claras. Pedidos de projeto, com equipamentos especiais e montagem de oferta, podem continuar passando por análise comercial.',
        'Separe as decisões que o comprador consegue tomar sozinho das que dependem de alguém com autoridade. Um cliente pode consultar o preço contratual e enviar um pedido dentro de sua faixa de volume. A mesma conta pode pedir uma condição extra para um lote excepcional, trocar a planta de entrega ou solicitar um item sem preço acordado. A proposta precisa cobrir a transição entre essas situações, para que a equipe comercial receba o contexto em vez de exigir que o cliente comece de novo.',
        'Defina o objetivo comercial da primeira fase com uma medida que a equipe consiga observar. Se a intenção é reduzir pedidos digitados pela equipe, conte quantos pedidos nascem no portal e chegam ao ERP sem redigitação. Se deseja reduzir divergências, compare o valor confirmado e o valor registrado, indicando qual divergência exige intervenção. Num portal com adoção inicial pequena, uma análise por carteira ajuda a separar qualidade do fluxo e adesão dos compradores.',
        'Descreva o canal que continua ativo durante a implantação. Distribuidores podem enviar compras pelo portal, por integração eletrônica ou por vendedor, de acordo com volume e maturidade. Defina como identificar a origem e reconhecer reenvios entre canais. Se o cliente solicitar por telefone e depois experimentar o portal, o atendente precisa localizar a mesma necessidade antes de registrar uma segunda compra. Esse custo de transição pertence ao orçamento do piloto.',
      ],
    },
    {
      heading: 'Monte a matriz de preços com exemplos antes de pedir estimativa',
      paragraphs: [
        'Liste as condições que determinam um preço: empresa compradora, filial de faturamento, produto, unidade, quantidade, data, moeda e regra de desconto. Inclua canal, região ou grupo somente quando eles mudarem o resultado. Uma linha do briefing deve mostrar os dados de entrada e o valor esperado, bem como a origem da evidência. A política real pode estar distribuída no ERP, em tabelas de exceção e nos procedimentos da equipe. Use o exercício para revelar as diferenças.',
        'Imagine um distribuidor com valor acordado de R$ 92 por caixa de um insumo. A tabela geral mostra R$ 100, enquanto uma campanha reduz para R$ 95 em certas compras. A unidade responsável precisa dizer se a campanha pode acumular com o contrato, substitui o desconto ou fica fora dessa conta. Sem essa decisão, dois fornecedores podem implementar cálculos defensáveis com resultados distintos. Peça o mesmo teste às propostas e confirme o total com a equipe de preços.',
        'Em plataformas como o Dynamics 365, um acordo comercial pode ter precedência sobre o preço-base na estrutura configurada. Isso ilustra a importância de explicitar prioridades. Seu ERP pode usar outra ordem, ou a empresa pode ter negociações que não estão modeladas nele. Peça que o fornecedor mostre como consulta a regra vigente e registra a versão que determinou a cotação. Um print de catálogo ajuda a revisar a interface, enquanto o log de cálculo ajuda a entender o preço.',
        'Inclua condições negativas. Por exemplo, item fora do acordo, preço indisponível para uma filial ou condição permitida apenas acima de uma quantidade mínima. Decida se cada caso mostra tabela geral, pede cotação ou impede a compra. A política de fallback precisa ser aprovada pela área comercial. Usar automaticamente um valor de outro contrato para preencher uma lacuna pode causar exposição de preço e criar uma expectativa que a empresa não consegue cumprir.',
      ],
      bullets: [
        'Uma compra dentro da faixa normal do contrato e outra exatamente no limite de volume.',
        'Um item coberto por acordo e campanha com regra de acumulação conhecida.',
        'Uma conta com duas filiais sujeitas a condições diferentes.',
        'Um contrato vencido, suspenso ou ainda fora da data inicial.',
      ],
    },
    {
      heading: 'Resolva unidades de venda, embalagem e volume com a operação',
      paragraphs: [
        'Os dados da embalagem devem estar alinhados entre catálogo e ERP. Uma caixa de 12 unidades e um fardo podem compartilhar uma descrição próxima, mas têm códigos, multiplicadores ou restrições diferentes. Um contrato pode fixar valor unitário enquanto o portal vende apenas caixas. Peça um exemplo em que o usuário informa três caixas e veja se a proposta demonstra quantidade de venda, quantidade de estoque, valor unitário apresentado e total confirmado.',
        'Combine critérios para preço por quantidade. Uma negociação pode aplicar desconto sobre todas as unidades ao chegar a certo nível. Outra pode aplicar o desconto apenas à parcela que supera o limite. A faixa pode ser calculada por item, família ou total do contrato. Faça casos logo abaixo, no ponto da transição e acima dele. Se a empresa usar conversão de caixa para unidade, o fornecedor deve mostrar qual quantidade entra nessa conta.',
        'Considere o carrinho com itens de unidades distintas. A empresa pode exigir compra mínima em valor para expedir, mas não aplicar a mesma condição a itens faturados por um fornecedor diferente. Em pedidos divididos, decida se o desconto continua elegível quando somente parte do volume poderá ser atendida. A regra precisa ser conhecida antes de o cliente confirmar, ou o portal deve registrar uma solicitação de revisão em vez de prometer uma condição indefinida.',
        'Teste também arredondamentos. Um item convertido pode gerar preço por unidade com mais casas do que o total exibido. Peça ao ERP a regra efetiva e defina onde arredondar, por linha ou por total. Faça uma comparação de vários itens de valores baixos, nos quais a diferença se acumula. A proposta deve prever como explicar ajustes entre o carrinho e o pedido, e quando uma diferença passa a exigir reconfirmação do comprador.',
      ],
    },
    {
      heading: 'Defina a fonte oficial do preço e o momento de verificá-lo',
      paragraphs: [
        'Escolha o sistema que pode confirmar o preço para cada etapa. Em uma integração direta, o portal pode consultar o ERP para obter condições de um carrinho. Isso reduz a duplicação de regra, mas a consulta precisa atender o volume e o prazo que o cliente espera. Se o fornecedor sugerir uma cópia de tabela, peça como atualiza a cópia, como indica sua idade e em que ponto valida alterações antes de aceitar o pedido.',
        'Uma arquitetura híbrida pode exibir preços sincronizados para navegação e consultar o ERP na confirmação. Defina a experiência quando a consulta final devolver outro valor. A tela deve destacar itens alterados, informar se a condição anterior expirou e registrar a nova decisão. Se o ERP estiver indisponível, decida se o canal pode salvar uma solicitação, apresentar um valor indicativo ou adiar a compra. Comunique o estado com palavras que o distribuidor compreende.',
        'Se o portal calcular condições próprias, peça a lista de regras duplicadas e a rotina para comparar resultados com o ERP. Um comprador pode usar uma cotação preparada pelo vendedor e esperar as mesmas condições no portal. Confirme como o teste avalia desconto, substituição de item, frete e janela de validade. Se as equipes usarem calculadoras diferentes, a proposta precisa explicar o que governa o pedido e como encontra divergências em tempo de corrigir a política.',
        'Inclua um indicador de atraso de sincronização que a operação consiga ver. Se um acordo recém-atualizado demora a aparecer, a equipe precisa saber se aguarda, reinicia a carga da conta ou abre uma ocorrência. Diferencie uma tabela antiga de um contrato sem dado aplicável. Peça como o suporte verifica a versão exibida para um cliente específico e preserva essa informação junto da decisão de compra, especialmente se a divergência só for percebida depois da emissão.',
      ],
    },
    {
      heading: 'Proteja as condições comerciais entre contas e filiais',
      paragraphs: [
        'Associe a pessoa autenticada às organizações em que pode comprar ou consultar. Um comprador de grupo pode acessar duas empresas, enquanto alguém de uma filial deve ver apenas o próprio catálogo. Peça que a troca de conta fique visível no carrinho e em documentos. Se não for possível confirmar a filial de faturamento, o portal deve pedir resolução antes de exibir a condição vinculada ao contrato. Esse cuidado evita expor uma tabela e reduz pedidos em nome da empresa errada.',
        'Separe as funções de visualizar preço, preparar carrinho, aprovar compra e administrar usuários. Um colaborador pode selecionar itens e encaminhar para um comprador autorizado. Outro pode ter poder de compra apenas até certo valor. A equipe comercial do fabricante pode prestar suporte representando uma conta, conforme regras internas. Documente quando essa atuação é permitida, como a pessoa é identificada no histórico e que condições ela pode alterar.',
        'No aceite de segurança, simule duas contas com preço diferente para o mesmo SKU. Compare a página de produto, busca, exportação, impressão e atualização depois de alternar a conta. Também verifique endereços diretos e pedidos antigos. Uma interface pode esconder o valor visualmente e ainda entregar a informação em uma resposta ou usar um catálogo armazenado no navegador com dados da sessão anterior. Peça que o teste cubra as consultas e os documentos que o portal realmente oferece.',
        'Ao suspender um contrato ou retirar um usuário de uma filial, indique quando a alteração tem efeito e o que acontece com sessões existentes. Se a pessoa montou um carrinho autorizado antes da suspensão, a confirmação precisa verificar as condições vigentes. Se já havia ordem confirmada, o atendimento consulta a versão de compra segundo as permissões atuais. Essas transições são parte do projeto. Um teste com apenas cadastros novos não mostra o comportamento sob mudança.',
      ],
    },
    {
      heading: 'Diferencie preço de vitrine, cotação e pedido faturável',
      paragraphs: [
        'O preço da vitrine pode orientar o comprador antes de escolher destino ou quantidade. Uma cotação pode fixar condições durante um prazo se a política comercial permitir. Um pedido faturável precisa atender a regras de estoque, entrega e aprovação aplicáveis. No orçamento, diga qual desses artefatos a primeira fase produz. Se o portal apenas encaminha solicitação, a resposta deve deixar claro que a empresa ainda vai confirmar condições e disponibilidade.',
        'Escolha a regra para carrinhos salvos. Um contrato pode vencer entre a seleção e a confirmação, ou a condição de frete pode depender do destino registrado mais tarde. Peça que o fornecedor simule uma mudança no carrinho salvo e mostre os valores antigo e atual quando fizer sentido ao comprador. Se houver validade explícita da cotação, use a versão do documento para decidir se o valor permanece. A tela e a integração precisam concordar sobre essa data.',
        'Inclua aprovação de condição excepcional quando ela existir. Um vendedor pode conceder um valor para uma compra específica, com quantidade máxima e prazo. Documente quem pode autorizar, como associar a oferta à conta e quando a exceção deixa de valer. Uma promoção genérica no cadastro não representa bem uma autorização individual. O portal deve exibir a condição à pessoa certa, manter a evidência e usar a versão aprovada ao enviar a ordem.',
        'Se a indústria cobra frete, serviço ou outros encargos, descreva quando entram no cálculo e como aparecem ao comprador. Use cenários de retirada, entrega agrupada e destino especial, com as definições fornecidas pela operação. O escopo precisa tratar quando algum valor só pode ser confirmado no ERP. Evite exigir que o comprador procure a equipe apenas para descobrir por que o total mudou. A tela que apresenta a atualização deve indicar o item e a condição que mudou.',
      ],
    },
    {
      heading: 'Planeje a passagem do carrinho para o ERP',
      paragraphs: [
        'Defina o evento que cria uma solicitação de compra. Na confirmação, armazene conta, filial, identificação dos itens, unidade, preço ou referência de cotação e versão aplicável. Dê à solicitação uma chave que permaneça quando o envio é repetido. Depois, o ERP devolve sua própria referência. O comprador precisa distinguir protocolo de envio de pedido confirmado. Essa distinção dá à central de vendas um caminho para localizar pendências e explicar o que já aconteceu.',
        'Peça um teste em que o ERP grava a ordem e a conexão cai antes da resposta. O portal deve recuperar ou conferir a referência antes de enviar outra criação. Uma segunda compra legítima com o mesmo carrinho precisa continuar possível quando autorizada. O número da ordem de compra do distribuidor pode ajudar no controle, mas confirme se é único no contexto esperado. Alguns compradores repetem a referência entre filiais ou usam uma sequência por departamento.',
        'Inclua rejeição parcial. Um item pode estar inativo no ERP enquanto o restante pode ser comercializado. Se a venda for aceita parcialmente, decida como o comprador é avisado, se o compromisso de volume muda e quais preços precisam ser reconfirmados. Se o pedido inteiro ficar em análise, explique o próximo passo e quem pode corrigir. O portal não deve apenas conservar um estado de erro técnico que a equipe comercial não consegue interpretar.',
        'Especifique o que fazer quando o pedido muda no ERP após a emissão. Uma separação parcial pode alterar prazo ou quantidade. O portal deve mostrar informação confirmada sem confundir o pedido original e sua execução. Para corrigir preço após confirmação, a área comercial precisa de um fluxo distinto com autorização e trilha. Inclua no escopo a sincronização desses eventos e a forma como o operador resolve divergências entre os sistemas.',
      ],
    },
    {
      heading: 'Use um cenário completo para fazer as propostas competirem na mesma base',
      paragraphs: [
        'Considere uma indústria que vende lubrificantes a dois revendedores. No exemplo hipotético, o Revendedor A compra caixas de 12 e tem acordo de R$ 96 por caixa a partir de dez caixas. O Revendedor B compra a R$ 104 com outra data de validade. A empresa deseja que o comprador de A monte uma reposição de nove caixas, veja o valor aplicável e possa acrescentar uma décima caixa para o portal recalcular de acordo com a regra definida.',
        'Em seguida, o mesmo comprador muda a filial de entrega e o ERP informa que o novo destino pertence a outra política. A proposta deve indicar em qual tela a mudança fica visível e qual condição prevalece após a verificação. Se um usuário de B abrir um endereço copiado da sessão de A, ele pode ver o item quando seu catálogo permite, com o próprio preço. Documentos de A precisam continuar vinculados à conta e aos usuários autorizados a consultá-los.',
        'No último passo, deixe o contrato vencer entre salvar e concluir o pedido. Se a empresa oferecer cotação protegida, teste a validade desse documento e a referência preservada. Se a política exigir recálculo, confirme que o cliente vê a diferença e pode rever a decisão. Simule um retorno perdido do ERP depois da gravação. A recuperação deve apresentar a mesma ordem e não criar estoque reservado para outra compra inexistente.',
        'Complete o cenário com uma exceção comercial. O Revendedor B quer comprar um lote que exige autorização extra para preço e disponibilidade. O portal pode encaminhar uma solicitação com dados já preenchidos e registrar a cotação resultante, dependendo do escopo. Na comparação, observe o esforço que continua com o vendedor e como se encontra a versão aprovada. Esses detalhes indicam quanto trabalho existe além de integrar uma lista de preços.',
      ],
    },
    {
      heading: 'O que comparar no orçamento de implantação e sustentação',
      paragraphs: [
        'Envie o mesmo cenário, número de contas, filiais, itens, tabelas, volume de consultas e ERP para todas as propostas. Peça que cada fornecedor indique quais regras já suporta, quais serão configuradas e quais exigem desenvolvimento. Separe design do portal, cadastro inicial, integração comercial, homologação e migração de usuários. Para itens ainda incertos, solicite uma descoberta com evidências de interface e comparação dos valores calculados.',
        'Exija premissas de desempenho. Um distribuidor pode carregar rapidamente dezenas de itens ou reenviar compras repetidas no fechamento da janela. Se cada produto gera consulta independente ao ERP, a experiência pode mudar à medida que a carteira cresce. Peça teste com um carrinho representativo e simultaneidade esperada. O fornecedor também deve explicar como impede que uma consulta de catálogo concorra em excesso com a emissão de ordens de outros canais.',
        'Calcule sustentação com o volume de mudanças e a responsabilidade de cada equipe. Uma nova filial pode requerer cadastro, autorização e testes de acesso. Uma mudança de política comercial pode exigir apenas configuração ou demandar implantação de versão. Pergunte se o contrato inclui atendimento quando dois preços divergem, monitoramento da integração e correções por mudança de versão do ERP. Compare o custo dado o modo como a empresa administra condições hoje.',
        'Avalie como recuperar dados se a empresa trocar de plataforma ou integrar distribuidores por outro canal. Peça exportação de contas, vínculos, referências de contrato, cotações e pedidos. Defina qual histórico deve preservar a decisão comercial com precisão e quais dados vêm de sistemas externos. Uma proposta com custos claros distingue o serviço de preparar esses arquivos, a obrigação de manter os dados acessíveis e a responsabilidade pela próxima migração.',
      ],
    },
    {
      heading: 'Defina a homologação e o que será medido no piloto',
      paragraphs: [
        'Monte casos esperados antes da demonstração e peça participação de vendas, precificação, logística e TI. Em cada caso, registre conta, unidade, data, carrinho, preço esperado e comportamento ao confirmar. Valide os mesmos valores em catálogo, cotação e ordem. Um item que não deveria aparecer também é um resultado testável. Peça evidência de que a condição exibida e a confirmação comercial vêm da fonte acordada.',
        'Comece por um grupo de distribuidores que tenha regras bem documentadas e volume suficiente para observar a rotina. Preserve o procedimento anterior durante o piloto e mantenha a identificação do canal. Se um cliente se recusar a fazer uma compra porque o preço parece divergente, registre tempo de resolução e motivo. O objetivo é descobrir onde o comprador consegue avançar e que condições ainda impedem o uso.',
        'Acompanhe a taxa de pedidos que chegam completos ao ERP, a incidência de divergências de preço, o tempo de correção e a adoção por conta ativa. Num cenário ilustrativo de 300 pedidos mensais, comparar 30 divergências nos dois canais exige conferir se os pedidos têm perfis semelhantes. Separe negociações excepcionais, reposições repetidas e pedidos de grandes volumes para não atribuir diferenças de carteira ao portal.',
        'Use a reunião de revisão para decidir se amplia clientes, categorias ou regras. Leve pelo menos uma venda concluída, uma mudança de preço recuperada e um erro de integração. Se a operação depende de emitir ordens manuais em muitos cenários, dimensione esse esforço antes de ampliar. A próxima fase pode se concentrar em corrigir tabelas e permissões ou em novas funções, conforme a evidência do primeiro grupo.',
      ],
    },
    {
      heading: 'Prepare o primeiro encontro com os fornecedores',
      paragraphs: [
        'Leve uma amostra saneada com produtos, contratos e filiais. Mostre pelo menos uma diferença de unidade e um exemplo de condição que muda com o prazo. Descreva se o ERP é capaz de calcular preço por conta, registrar referência externa e devolver um identificador de pedido. Se a documentação ainda não estiver disponível, diga quem pode liberar um ambiente de teste e o que a empresa precisa mostrar na prova de integração.',
        'Identifique o dono comercial dos acordos e quem pode responder a exceções. Defina quais decisões o vendedor mantém durante a implantação e onde o comprador encontra acompanhamento. Uma conversa produtiva pode começar desenhando um pedido típico e marcando as duas situações que mais exigem retorno ao cliente. Com esse mapa, o fornecedor consegue propor uma primeira entrega que faça sentido para o distribuidor e para a equipe que mantém o ERP.',
        'Peça que o retorno da reunião registre hipóteses em aberto, responsáveis e forma de verificar cada uma. Para preços que dependem de cálculo externo, indique o teste que confirma valor e capacidade de resposta. Para permissões, mostre as contas que serão usadas na homologação. A estimativa ganha consistência quando a equipe sabe de onde virá a prova, inclusive nos casos em que vale limitar a primeira versão ou reaproveitar funções do ERP.',
      ],
    },
  ],
  faqs: [
    { question: 'O portal precisa copiar todas as regras de preço do ERP?', answer: 'Pode consultar o ERP diretamente ou usar um catálogo sincronizado com verificação no momento de confirmar. Escolha pelo volume, capacidade da interface e política de vigência. Documente como divergências chegam à equipe.' },
    { question: 'Como testar se um distribuidor enxerga apenas seu preço?', answer: 'Crie duas contas com condições distintas e verifique produto, exportação, carrinho, documentos e endereços diretos. Confirme também o comportamento ao alternar filial ou retirar uma autorização.' },
    { question: 'Que dados ajudam a estimar o projeto?', answer: 'Informe ERP, quantidade de contas, filiais, produtos, tabelas, regras especiais e volume esperado. Leve um pedido recorrente, uma condição vencida e um cenário de erro para a demonstração.' },
  ],
  cta: {
    title: 'Quer estimar um portal para a sua rede de distribuidores?',
    text: 'Conte quais condições mudam por conta, onde o preço é definido e como o ERP recebe pedidos. A Tironi Tech pode ajudar a desenhar o primeiro fluxo e os critérios para cotá-lo.',
    label: 'Apresentar minha operação de distribuição',
  },
  sources: [
    { label: 'Microsoft Dynamics 365 — estrutura de preços e acordos comerciais', url: 'https://learn.microsoft.com/en-us/dynamics365/supply-chain/unified-pricing-management/upm-price-structure-overview' },
  ],
};
