export const settlementOrderReconciliation = {
  slug: 'integracao-extrato-liquidacao-pedidos',
  date: '2026-11-26',
  updated: '2026-11-26',
  description: 'Compare propostas de conciliação de liquidações com pedidos e recebíveis, com testes de tarifas, prazos e ajustes.',
  keywords: ['conciliação de liquidações com pedidos e recebíveis', 'orçamento para conciliação de liquidações', 'integração de extrato de liquidação com pedidos'],
  emphasis: 'conciliação de liquidações com pedidos e recebíveis',
  intro: 'Para orçar a conciliação de liquidações com pedidos e recebíveis, defina como o pedido se relaciona com o pagamento e como a liquidação informa o valor recebido. Peça uma prova com vários pedidos no mesmo repasse, um recebimento parcial e um ajuste que entra em outro período.',
  takeaways: [
    'Separe valor previsto, valor liquidado e confirmação do crédito.',
    'Teste vínculos de um para muitos e movimentos em datas distintas.',
    'Orce a análise de diferenças e a comprovação dos ajustes.',
  ],
  sections: [
    {
      heading: 'Comece pelo percurso do pedido até o crédito',
      paragraphs: [
        'Escolha uma venda e registre as referências que aparecem em cada etapa. O comércio pode usar o número do pedido, o provedor de pagamento pode atribuir um código à transação e o financeiro pode acompanhar a parcela no ERP. A liquidação pode trazer um identificador de repasse que reúne várias transações. Peça que cada proposta mostre como percorre o vínculo e quando consulta um extrato bancário para verificar o crédito, se ele fizer parte do escopo.',
        'Defina a posição que cada fonte confirma. O pedido mostra a venda aceita conforme o canal. O registro do provedor mostra o pagamento e suas alterações. O extrato de liquidação indica como os movimentos foram agrupados. Um crédito bancário comprova o depósito no nível em que o banco identifica o repasse. Registre quais fontes a empresa consegue fornecer e quais vínculos ainda precisam ser confirmados antes de estimar a implantação.',
        'Inclua um pedido com parte cancelada antes da liquidação. Compare a quantidade e o valor registrados no comércio, a confirmação do pagamento e o movimento enviado ao financeiro. Defina se o indicador mostra o valor originalmente previsto ou o valor revisado que deveria chegar. Peça aos fornecedores que apresentem as duas referências e indiquem qual delas sustenta a conciliação na data escolhida.',
      ],
    },
    {
      heading: 'Teste um repasse com vários pedidos e descontos identificados',
      paragraphs: [
        'Na **integração de extrato de liquidação com pedidos**, peça a composição do lote antes de comparar o valor no banco. Em um exemplo fictício, um repasse reúne três pedidos de R$ 300, R$ 250 e R$ 150. O provedor informa R$ 14 de tarifas e R$ 20 de ajuste ligado a uma venda anterior. O saldo líquido é de R$ 666 se ambos forem descontos. Solicite que o fornecedor reconstrua esse total e localize a referência do ajuste sem atribuí-lo a um dos três pedidos por conveniência.',
        'Inclua um caso de dois repasses que têm o mesmo valor líquido. A data e o total podem sugerir uma relação, mas a empresa precisa de evidência suficiente para distinguir os depósitos. Compare número do repasse, conta de destino e referência do crédito, quando disponíveis. Se o extrato não traz a chave completa, defina que dados podem sugerir correspondência e o que exige confirmação humana. Faça o teste com um candidato para cada repasse e mostre como a análise evita usar o mesmo crédito duas vezes.',
        'Peça a investigação no sentido inverso. Comece por um crédito no banco, localize o lote no registro do provedor e percorra os pedidos e ajustes vinculados. Registre o que pode ser confirmado diretamente e o que depende da memória de cálculo de uma tarifa. Inclua um movimento com referência parcial e confirme se ele aparece como inconclusivo. Compare fornecedores pelo tempo necessário para reproduzir a explicação sem reconstruir toda a apuração manualmente.',
      ],
    },
    {
      heading: 'Acompanhe parcelas e recebimentos parciais separadamente',
      paragraphs: [
        'Modele um pedido fictício de R$ 900 pago em três parcelas de R$ 300. No primeiro corte, apenas uma parcela aparece no extrato do provedor. A ferramenta deve ligar o movimento à parcela correta e deixar as demais com suas datas previstas. Se o crédito bancário do primeiro repasse chegar depois, o estado da parcela precisa indicar o que já foi confirmado pelo provedor e o que ainda depende do banco. Peça que o fornecedor demonstre esses estados e como eles mudam com a chegada do crédito.',
        'Inclua dois meios de pagamento no mesmo pedido. Por exemplo, R$ 180 no cartão e R$ 120 em outro meio. Confira quais referências foram produzidas e como a ferramenta evita baixar todo o pedido quando apenas um pagamento é conciliado. Em seguida, simule o cancelamento autorizado de uma parte e peça que o fornecedor explique qual recebível foi reduzido. A área financeira deve conseguir localizar o registro usado na decisão sem depender de uma associação manual fora do sistema.',
        'Teste também o caso em que um único recebível aparece em mais de um movimento. Se o provedor repassa uma parte e complementa depois, a ferramenta precisa conservar os identificadores das duas parcelas do repasse e o saldo remanescente. Dê ao analista apenas o código do pedido e peça que reconstrua o valor. Inclua uma repetição do mesmo arquivo para verificar se o movimento original é reconhecido sem somar novamente o crédito.',
      ],
    },
    {
      heading: 'Defina a data de referência conforme a pergunta financeira',
      paragraphs: [
        'Registre a data do pedido, a confirmação do pagamento, a previsão de liquidação, o repasse informado e a entrada na conta. Uma venda no último dia do mês pode gerar liquidação no período seguinte. Defina como responder perguntas diferentes, como o valor a receber na data de fechamento e os repasses efetivamente creditados durante o mês. Mostre na proposta quais campos sustentam cada visão e como o usuário confere o corte.',
        'Inclua um arquivo retificado depois do fechamento. A primeira versão pode indicar repasse previsto para o dia 30 e a segunda registrar a mudança para o dia 2. Peça que a ferramenta preserve a posição apurada na data original e destaque a diferença na visão revisada. Registre quem decide se deve revisar o fechamento ou acompanhar a diferença no período seguinte, conforme o processo da empresa. Teste o que aparece num relatório já distribuído e como é comunicada a atualização aprovada.',
      ],
    },
    {
      heading: 'Reproduza devoluções, estornos e ajustes fora do repasse original',
      paragraphs: [
        'Escolha uma venda que teve devolução parcial após o crédito. Localize o pedido original, o movimento de devolução e o repasse em que o desconto apareceu. Se o provedor agrupa o ajuste com outras vendas, confira como o sistema preserva a ligação com o pedido antigo sem atribuir o desconto às vendas do lote atual. Registre as datas e os estados que a equipe usa para distinguir ajustes previstos dos que já foram aplicados.',
        'Inclua uma devolução que foi informada duas vezes por fontes distintas. A área pode receber um evento do canal e outro do provedor referentes à mesma operação. Peça ao fornecedor que mostre a evidência que sustenta a associação e o que ocorre quando os valores divergem. Se um valor representa o solicitado e o outro o confirmado, a rotina pode precisar mostrar os dois antes de encerrar o caso. Defina quem interpreta as diferenças e onde registra uma decisão.',
        'Peça uma prova com um ajuste sem referência direta ao pedido. Um desconto pode aparecer apenas no lote, com uma descrição genérica. Registre o valor, a origem e o contato responsável por completar a informação. Se a política prevê aceitar o lote com o ajuste em investigação, demonstre como o caso permanece aberto e reaparece no prazo de revisão. A solução deve permitir conferir o total do repasse sem inventar um vínculo com uma venda.',
      ],
    },
    {
      heading: 'Confira as tarifas com as condições vigentes na venda',
      paragraphs: [
        'Defina quais tarifas a empresa pretende reproduzir e quais virão discriminadas no extrato. Peça a tabela contratada com data de vigência, identificação do estabelecimento, meio de pagamento e condição de parcelamento. A mesma taxa pode valer para uma loja e mudar em outra. Use duas vendas com o mesmo valor bruto para verificar se a solução escolhe a condição correta. Quando a taxa depender de informação que só o provedor possui, registre qual documento comprova o valor e quem pode solicitá-lo.',
        'Em um exemplo fictício, uma venda de R$ 200 tem tarifa percentual de 2,5% e tarifa fixa de R$ 0,50. Se as duas incidem nessa transação e a taxa percentual usa o valor bruto, a dedução esperada é de R$ 5,50. Se o extrato informa R$ 6,50, localize a vigência, a base de cálculo e o componente que explica a diferença. Peça aos fornecedores que mostrem as etapas do cálculo e como registram a evidência quando o valor permanece pendente de confirmação.',
        'Verifique onde ocorre o arredondamento. A soma calculada para cada parcela pode diferir do cálculo sobre o valor agregado. Use um lote com transações pequenas e peça que o fornecedor compare as abordagens com a regra confirmada pelo financeiro. Uma tolerância aprovada por movimento deve ser examinada também no total do mês. Defina a condição em que pequenas diferenças passam a exigir revisão por canal ou por estabelecimento.',
      ],
    },
    {
      heading: 'Preserve a trilha quando uma diferença gera ajuste no ERP',
      paragraphs: [
        'Defina quais ações terminam apenas numa análise e quais podem gerar baixa ou ajuste no ERP. Um recebível com crédito confirmado pode estar pronto para uma baixa autorizada, enquanto uma tarifa contestada pode precisar de investigação. Para cada opção, indique o responsável, a referência do documento e o estado após a ação. Peça uma prova em que o ERP rejeita o primeiro envio e a fila continua mostrando o motivo até a confirmação.',
        'Teste uma baixa parcial e uma correção posterior. Se R$ 250 foram confirmados de um recebível de R$ 300, confira o saldo restante e a referência usada. Depois, receba uma atualização que atribui parte do valor a outro recebível e refaça a conferência pelo procedimento acordado. O responsável precisa localizar o resultado anterior, a evidência que motivou a correção e o registro aprovado. Inclua no preço a integração de retorno que confirma que o ERP aplicou o efeito.',
        'Simule o recebimento repetido da mesma confirmação e uma versão corrigida do arquivo. Use a identidade do movimento, a versão da origem e o estado no ERP para explicar por que uma mensagem confirma o que já aconteceu e outra precisa de revisão. Peça que a empresa consiga refazer a apuração sem repetir baixas. Quando permanecer dúvida sobre o que já foi aplicado, indique como a operação consulta o ERP antes de escolher outra ação.',
      ],
    },
    {
      heading: 'Compare propostas pelo mesmo recorte de conciliação',
      paragraphs: [
        'No **orçamento para conciliação de liquidações**, informe os provedores, as contas, a quantidade de transações e o número de arquivos no primeiro fechamento. Entregue a mesma amostra a todos, com repasse de vários pedidos, crédito parcial e ajuste de outro período. Peça preços separados para descobrir os vínculos, implementar a leitura, validar as tarifas, operar exceções e integrar a confirmação com o ERP. Indique quem prepara as fontes e quem valida o saldo do teste.',
        'Compare propostas pela etapa em que a evidência termina. Uma solução pode provar que o provedor informou o repasse e depender de outra equipe para verificar o crédito bancário. Outra pode conferir o crédito e deixar a baixa no ERP sob responsabilidade do cliente. Use o mesmo repasse para ver quais referências serão entregues em cada caso. Registre as horas internas para completar a prova e o custo de contratar uma etapa adicional se ela for necessária.',
      ],
    },
    {
      heading: 'Comprove a cobertura antes de interpretar uma diferença',
      paragraphs: [
        'Monte uma relação de arquivos esperados por provedor, conta e período. Registre quais foram recebidos e compare as contagens com a referência do emissor, quando disponível. Um período sem repasses pode produzir um arquivo vazio. Uma falha de entrega pode deixar o mesmo total aparente. Peça uma prova em que apenas uma conta fica sem dados e confirme que as demais podem ser revisadas sem apresentar a posição incompleta como encerrada.',
        'Inclua um arquivo substituído depois do primeiro processamento. A revisão pode mudar o valor de um ajuste ou acrescentar transações que ficaram de fora. Registre a versão, os movimentos alterados e a posição anterior. A documentação do AWS DMS distingue registros comparados, divergentes e registros que não puderam ser validados em certas condições. Use essa distinção para apresentar o alcance da conferência e mostrar separadamente o que ainda está pendente de evidência.',
        'Faça uma amostra que inclua também repasses sem divergência. Se a equipe valida apenas os itens em alerta, pode deixar passar correspondências feitas com a data ou a conta incorreta. Comece pelo crédito original, siga até o lote e confira os componentes do líquido. Escolha exemplos com valores repetidos em contas distintas. Registre quantos vínculos foram verificados e quais informações o fornecedor usou em cada decisão.',
      ],
    },
    {
      heading: 'Estime a mão de obra que vai permanecer após a implantação',
      paragraphs: [
        'Meça exceções por causa e tempo de análise. Um erro de mapeamento de conta pode afetar muitas transações e exigir uma correção única. Já repasses sem referência podem precisar de conferência individual. Num exemplo fictício, uma carga gera 250 alertas, dos quais 190 se resolvem com uma regra de cadastro e 60 exigem oito minutos por caso. As revisões individuais ocupam oito horas, sem incluir espera pelo provedor. Use a carga de ensaio para atualizar a projeção e separar esforço interno e contratado.',
        'Defina o que pode ser resolvido antes da data de fechamento. Algumas divergências precisam de documento complementar cujo prazo depende de outra equipe. Registre quem solicita, como acompanha e em que situação a empresa aprova a posição com ressalva. Peça que o fornecedor mostre as horas estimadas para investigar a causa e o prazo até a decisão. Compare também o custo de exportar evidências para uma análise que continue no próximo período.',
        'Compare dois níveis de automação para o mesmo conjunto. Uma proposta pode sugerir correspondências e deixar a confirmação com a área financeira. Outra pode aplicar vínculos automaticamente nas condições autorizadas e encaminhar dúvidas. Solicite uma prova com dois candidatos igualmente plausíveis, uma diferença pequena dentro da tolerância e um repasse cujo valor líquido coincide por acaso. Meça os casos que a equipe consegue confirmar e a possibilidade de desfazer uma associação aplicada por engano.',
      ],
    },
    {
      heading: 'Teste repasses divididos entre contas e estabelecimentos',
      paragraphs: [
        'Inclua na amostra um provedor que agrega vendas de duas lojas e deposita em contas diferentes. Defina qual referência permite atribuir cada crédito ao destino previsto. Peça que a ferramenta mostre separadamente o total informado pelo provedor e a parcela confirmada em cada conta. Se apenas uma conta está disponível na primeira integração, registre a parte do lote ainda sem evidência. A equipe precisa distinguir cobertura incompleta de um repasse que realmente chegou com valor menor.',
        'Ensaie uma troca de conta ao longo do mês. A loja pode mudar o destino dos próximos créditos enquanto ainda recebe liquidações de vendas anteriores na conta antiga. Peça que o fornecedor identifique a data efetiva da mudança e mostre a conta esperada para cada repasse. Faça uma conferência que atravesse essa data. Se um crédito aparece no destino anterior por uma exceção aprovada, a evidência deve explicar a autorização e preservar a ligação com o lote.',
        'Teste o caso em que o provedor paga um lote em duas transferências. Em um exemplo fictício, um repasse de R$ 1.200 aparece no banco como créditos de R$ 800 e R$ 400. Entre as duas confirmações, a posição deve mostrar R$ 800 identificados e R$ 400 pendentes. Confira se o relatório encontra o saldo ao pesquisar pelo lote ou pela conta. O valor agregado precisa continuar reproduzível mesmo quando a confirmação final chega em outro dia.',
      ],
    },
    {
      heading: 'Separe mudanças de prazo de diferenças no valor',
      paragraphs: [
        'Peça uma prova com um recebível cuja previsão foi antecipada. Identifique o calendário original, o novo movimento e os componentes de valor informados pelo provedor. A conciliação precisa distinguir a troca da data de um desconto ou crédito adicional associado à operação. Se o ERP mantém a previsão anterior até receber uma atualização, confira como o resultado relaciona as duas visões. Registre quem confirma a nova posição e qual documento a sustenta.',
        'Use um caso em que a previsão é substituída por vários repasses menores. Por exemplo, uma previsão de R$ 1.000 é atendida por dois lotes de R$ 450 e outro de R$ 100. Peça que o fornecedor mostre a sequência completa e verifique em que momento o saldo fica zerado. Inclua um crédito com valor igual ao do último lote em outra conta. A equipe deve conseguir demonstrar a identificação correta sem usar o valor isolado como prova.',
        'Defina a responsabilidade quando um repasse passa da data prevista. A rotina deve apontar se falta confirmação da origem, se a data foi revista ou se existe um crédito ainda sem vínculo. Mostre o que o analista consulta e quando deve acionar o provedor. Se a empresa usa prazo diferente por canal, configure a regra com vigência e repita a conferência perto de uma mudança de calendário. Inclua no orçamento a atualização e a homologação desses critérios.',
      ],
    },
    {
      heading: 'Prepare um fechamento piloto sem aplicar baixas automáticas',
      paragraphs: [
        'Escolha um provedor e uma conta cuja equipe consiga acompanhar a apuração completa. Use dados de uma competência encerrada para identificar a posição de referência e em seguida simule uma janela com chegadas parciais. Separe os resultados de teste do processo que aplica baixas. Peça que a demonstração confirme quais registros podem ser lidos, quais estão em análise e como o financeiro aprova o efeito. Anote as lacunas para estimar o trabalho restante.',
        'Monte uma amostra com repasses regulares e exceções. Inclua uma transação parcelada, um crédito dividido, uma tarifa fora da expectativa e um ajuste sem referência direta. Para cada caso, registre o valor esperado, a conta, as datas e o documento disponível. Se o caso depende de uma confirmação externa, verifique se a ferramenta consegue carregar a pendência para outro período com seu histórico. Peça que a pessoa que opera o fechamento explique o resultado sem ajuda de quem configurou o sistema.',
        'Cronometre a jornada em etapas. Registre a espera pelas fontes, o tempo de importação, a produção da lista de exceções, a revisão e a aprovação. Em um exemplo fictício, o processamento ocupa vinte minutos e a revisão leva duas horas porque o financeiro consulta extratos em outro ambiente. Mostre esse efeito ao comparar propostas. Uma melhoria de dez minutos no processamento pode ter impacto menor que uma ligação verificável que elimina consultas repetidas.',
        'Defina a condição para interromper o piloto. Se um arquivo vem sem referências num formato diferente, o processamento pode seguir apenas para as fontes verificadas. A controladoria deve saber que a posição é parcial. Se uma configuração propõe baixas incorretas, suspenda a publicação do recorte até repetir o teste. Peça uma demonstração em que a solução identifica o grupo afetado, registra a decisão e preserva o resultado anterior para conferência.',
      ],
    },
    {
      heading: 'Formalize o aceite por fonte, efeito e prazo de revisão',
      paragraphs: [
        'Monte uma ficha com os arquivos recebidos, as versões, os totais por conta e as associações confirmadas. Para cada cenário obrigatório, inclua as referências de origem, o resultado financeiro esperado e a pessoa que decide. O time de integração pode confirmar a leitura e os vínculos. O financeiro valida os valores e os estados. Quem administra o ERP comprova o efeito da baixa quando estiver no escopo. Corrija as divergências críticas ou registre a autorização antes de publicar.',
        'Teste a recuperação depois de uma associação equivocada. Escolha um crédito vinculado à parcela errada em homologação e siga o procedimento aprovado para revisar o vínculo. Compare a posição antiga com a nova, verifique os valores que continuam pendentes e confira se o ERP recebeu apenas o efeito autorizado. Se a análise termina sem uma baixa automática, peça que a ferramenta produza uma evidência que a equipe consiga usar para aplicar e depois confirmar a correção.',
        'Combine quais pendências podem permanecer registradas no fechamento. Um ajuste sem referência pode exigir resposta do provedor e ter prazo conhecido. Um crédito ausente numa conta que deveria estar coberta pode exigir adiar a aprovação do recorte. Defina o nível em que a decisão vale e como a área acompanha o caso na competência seguinte. Peça uma prova em que a lacuna é resolvida depois e a versão aprovada inicialmente continua consultável.',
        'Inclua critérios para a passagem à operação. Uma pessoa autorizada deve conseguir refazer o cruzamento, confirmar se o arquivo foi processado e localizar a origem de uma diferença. Outra deve conseguir acompanhar um ajuste que depende do provedor. Faça a prova usando apenas as instruções entregues. Se a rotina precisa de acesso adicional ou de conhecimento que ficou com o projeto, inclua a regularização na entrega e estime o prazo para repetir o teste.',
      ],
    },
    {
      heading: 'Use o primeiro fechamento para rever a expansão e a sustentação',
      paragraphs: [
        'Depois do primeiro fechamento, compare o volume previsto com o volume real, as horas de revisão e o prazo para o financeiro receber a posição. Identifique o que mudou por conta de arquivos tardios, diferenças de cadastro ou volume fora da faixa. Se a maior parte das horas foi dedicada a poucas lojas, estime o custo de melhorar esse recorte antes de acrescentar novos provedores. Use os resultados para atualizar as condições de suporte.',
        'Peça uma estimativa de expansão que considere formatos e prazos diferentes. Uma segunda integração pode usar chaves equivalentes e exigir apenas mapeamento. Outra pode entregar repasses e ajustes em arquivos separados e pedir novas regras de cobertura. Solicite preço e prova por etapa. Leve à reunião comercial dois extratos, um exemplo de ajuste e o prazo do próximo fechamento. Compare o que cada fornecedor consegue comprovar até esse ponto e o trabalho que ficará com sua equipe.',
      ],
    },
  ],
  faqs: [
    { question: 'O que incluir no orçamento de conciliação de liquidações?', answer: 'Inclua leitura de fontes, vínculo com pedidos e parcelas, tratamento de tarifas e ajustes, revisão de exceções e integração com o ERP quando necessária.' },
    { question: 'Como conciliar um repasse com vários pedidos?', answer: 'Use a composição do lote e confira as referências, os valores brutos, as deduções e o crédito recebido.' },
    { question: 'Quando aprovar a primeira conciliação?', answer: 'Depois de verificar a cobertura, testar as exceções e comprovar a posição aprovada e os efeitos autorizados no ERP.' },
  ],
  cta: {
    title: 'Quer orçar a conciliação de liquidações com pedidos e recebíveis?',
    text: 'Leve à Tironi Tech uma amostra de repasses, recebíveis e ajustes. Podemos ajudar a delimitar a integração e os testes do primeiro fechamento.',
    label: 'Conversar sobre conciliação de liquidações',
  },
  sources: [
    { label: 'AWS Database Migration Service — estados e cobertura de validação', url: 'https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Validating.html' },
  ],
};
