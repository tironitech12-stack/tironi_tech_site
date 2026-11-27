export const legacyPricingParity = {
  slug: 'migrar-software-regras-precos-paridade',
  date: '2026-11-26',
  updated: '2026-11-26',
  description: 'Teste a migração de regras de preço com pedidos de referência, limites de desconto, vigências e critérios de aceite.',
  keywords: ['migração de regras de preço de um software legado', 'teste de paridade de preços entre sistemas', 'orçamento para migrar regras de preço'],
  emphasis: 'migração de regras de preço de um software legado',
  intro: 'Para testar a migração de regras de preço de um software legado, reproduza pedidos com os mesmos dados e a mesma vigência em ambos os sistemas. Compare o valor por item, a regra aplicada e o total. Separe as diferenças introduzidas pela migração das mudanças comerciais aprovadas e defina quem pode liberar cada grupo de pedidos.',
  takeaways: [
    'Guarde entradas e regras vigentes para que a comparação possa ser repetida.',
    'Teste precedência, limites e arredondamento com pedidos concretos.',
    'Vincule o aceite às diferenças que a área comercial consegue explicar.',
  ],
  sections: [
    {
      heading: 'Defina o que o preço precisa preservar',
      paragraphs: [
        'Reúna compras, comercial e faturamento para definir onde o preço é usado. Um distribuidor pode calcular uma cotação no portal, receber aprovação para um desconto no atendimento e confirmar o pedido no ERP. Identifique o momento em que cada valor se torna válido e o componente que o calcula. Se a cotação permanece válida por dez dias, descubra como o faturamento reconhece o compromisso depois que a tabela geral muda. Esse exemplo deve constar tanto na proposta quanto no teste.',
        'Escolha o nível de comparação de cada etapa. Uma cotação precisa mostrar os valores que o comercial promete, enquanto o faturamento pode exigir valores por linha associados à referência usada para confirmar o pedido. Se a empresa usa apenas o total geral na conferência, verifique se dois erros podem se cancelar. Uma linha que recebe desconto excessivo e outra com desconto abaixo do correto podem produzir o mesmo total. Compare valores unitários, descontos, quantidades e totais para localizar a diferença.',
        'Escreva quais resultados devem permanecer equivalentes e quais regras a empresa decidiu mudar durante o projeto. A substituição de uma tabela por uma política de desconto por faixa pode mudar o preço de determinados clientes. Identifique o recorte que recebe a nova política, a data de aplicação e quem a aprovou. Preserve pedidos de exemplo com cálculo esperado separado para cada grupo. Na demonstração, peça que o fornecedor explique qual versão da regra foi usada em cada caso.',
      ],
    },
    {
      heading: 'Monte pedidos de referência com entradas que possam ser repetidas',
      paragraphs: [
        'Para um **teste de paridade de preços entre sistemas**, guarde os dados que existiam no momento da cotação. O código do cliente pode continuar igual, mesmo que ele tenha mudado de faixa comercial. O código do produto pode apontar hoje para outra unidade de venda. Registre o canal, a filial, o prazo de pagamento, a quantidade e as versões das tabelas relacionadas. Quando faltar alguma entrada, marque a lacuna e use um caso em que a equipe consiga reproduzir as condições ou calcular o resultado esperado.',
        'Inclua casos frequentes e casos com impacto relevante. Uma carteira pode ter muitos pedidos de uma caixa e poucos de um palete. Se uma diferença no preço por caixa é pequena, ela pode se tornar relevante num pedido de centenas de caixas. Escolha ainda clientes com contrato específico, pedidos com duas famílias de produtos e operações em que um desconto precisa de aprovação. Associe cada pedido ao motivo de sua escolha para que a amostra possa ser ampliada quando outra unidade entrar.',
        'Para cada caso, registre a entrada original, a saída esperada e a evidência em que a área confia. A evidência pode ser a cotação emitida, uma tabela aprovada ou um cálculo conferido. Se o pedido histórico diverge do contrato, descubra se houve exceção autorizada, falha antiga ou dado faltante. Use a decisão da área responsável como referência para a migração e preserve a explicação no roteiro. Isso evita que o fornecedor trate toda diferença como defeito do sistema novo.',
      ],
    },
    {
      heading: 'Teste a ordem das regras quando mais de uma condição se aplica',
      paragraphs: [
        'Peça uma tabela de precedência com exemplos. Uma conta pode ter contrato de R$ 92 por item, a campanha pode oferecer R$ 90 e o desconto de volume pode reduzir em 5% o valor da tabela de R$ 100. O resultado será diferente conforme a empresa aplique o contrato primeiro, permita acumular descontos ou selecione o menor entre valores elegíveis. Defina qual política vale para aquele canal e teste a mesma conta fora da campanha para confirmar como o cálculo retorna à regra regular.',
        'Compare regras que mudam em torno do limite. Se um desconto começa em vinte caixas, teste dezenove, vinte e vinte e uma. Verifique se a quantidade deve ser calculada por linha ou somada entre produtos elegíveis. Inclua um pedido alterado de vinte para dezenove antes da confirmação e observe se o sistema recalcula e pede nova aprovação. Pergunte como o resultado é apresentado ao operador quando uma regra válida deixa de ser aplicada após a mudança.',
      ],
    },
    {
      heading: 'Reproduza a vigência sem depender da data do teste',
      paragraphs: [
        'Determine qual evento fixa a vigência em cada etapa. O portal pode selecionar a tabela na criação da cotação, enquanto uma condição de frete só é estabelecida na confirmação. Use os horários registrados para montar um caso anterior à troca de tabela e compará-lo com outro feito depois. Se o fornecedor precisar ajustar a data do ambiente para reproduzir uma cotação, peça que mostre como essa condição fica registrada e como a equipe repetirá o teste posteriormente.',
        'Teste o intervalo em torno da publicação. Em um exemplo fictício, uma campanha termina às 18h e a tabela regular entra em vigor no mesmo instante. Compare cotações às 17h59 e às 18h, com o mesmo produto e cliente. Depois, confirme um pedido criado antes do limite. Se as unidades usam horários locais diferentes, registre em qual horário a regra foi definida. A demonstração deve mostrar o ponto de inclusão ou exclusão e a referência de tempo usada pelo cálculo.',
        'Inclua uma tabela com vigência futura que tenha sido corrigida antes de entrar em uso. Uma atualização de preço pode ser preparada pela manhã e revisada durante a tarde após a descoberta de um produto com código incorreto. Teste qual versão entra em vigor e como o suporte identifica a versão substituída. Quando a empresa permite exceções com data retroativa, defina se as cotações emitidas devem ser preservadas ou submetidas a uma revisão autorizada.',
        'Confirme que as fontes chegam em tempo. Se um catálogo recebe a nova tabela pelo ERP, um canal pode começar a usá-la enquanto outro ainda mostra o valor anterior. Use um ensaio com atraso controlado. Defina se o canal pode preparar a cotação, se precisa informar a condição ao usuário e como o atendimento identifica qual preço pode confirmar. Compare o momento de publicação com o momento em que todos os componentes esperados passaram a usar a versão correta.',
      ],
    },
    {
      heading: 'Calcule os centavos no mesmo nível usado pelo pedido',
      paragraphs: [
        'Peça que o fornecedor mostre em que etapa cada valor é arredondado. Em um exemplo com três itens de R$ 9,99 e desconto de 15%, o valor unitário com desconto é R$ 8,4915. Se cada unidade for arredondada para R$ 8,49, o total será R$ 25,47. Se o arredondamento ocorrer depois de multiplicar R$ 8,4915 por três, o total será R$ 25,47 nesse caso. Aumentando a quantidade para dez, surgem R$ 84,90 pelo primeiro caminho e R$ 84,92 pelo segundo, assumindo arredondamento ao centavo mais próximo. Use os dois pedidos para demonstrar por que uma única amostra pode não revelar a diferença.',
        'Teste a distribuição de um desconto total. Um abatimento de R$ 10 dividido entre três linhas de mesmo valor pode ser distribuído em R$ 3,33, R$ 3,33 e R$ 3,34. A proposta deve descrever o critério de alocação do centavo residual. Depois, cancele uma das linhas e peça que o sistema explique quanto deve ser devolvido conforme a política comercial. Compare o valor por linha antes e depois, usando os mesmos documentos como referência.',
        'Inclua quantidades fracionadas e vendas em unidades diferentes. Se o cadastro usa um preço por litro e a cotação vende uma embalagem de 750 mililitros, confirme a precisão mantida na conversão e a etapa em que o resultado é arredondado. Compare a compra de quatro embalagens com a compra da quantidade equivalente numa apresentação maior, quando as regras permitirem essa comparação. Peça que a diferença esperada apareça no roteiro, seja ela decorrente de embalagem, preço-base ou cálculo.',
      ],
    },
    {
      heading: 'Decida quando alterações exigem recalcular ou renovar a aprovação',
      paragraphs: [
        'Mapeie as alterações permitidas depois de calcular uma cotação. Trocar o endereço pode afetar o frete e a unidade que atende o pedido. Alterar o prazo de pagamento pode mudar o desconto permitido. Combine quais valores mantêm a referência inicial e quais são calculados novamente. Peça que o fornecedor mostre o resultado antes e depois e indique como o operador sabe que a cotação passou a exigir outro aceite.',
        'Ensaie um pedido aceito no sistema antigo e aberto no novo. Preserve a tabela, o desconto e a referência do compromisso feito ao cliente. Em seguida, solicite a inclusão de uma linha nova após uma troca de tabela. A área comercial deve decidir se a linha adicional usa a vigência atual e como isso aparece no documento. Verifique se os sistemas de faturamento distinguem as duas condições quando o pedido possui linhas com origens diferentes.',
        'Teste a relação entre aprovação manual e regra automática. Um supervisor pode autorizar 12% de desconto para uma quantidade específica. Se o operador editar o pedido, determine quando essa aprovação perde o efeito. No ensaio, compare a retirada de uma unidade com a substituição do produto por outro de margem diferente. Registre o que o sistema recalculou e a etapa que informa a necessidade de nova revisão. Inclua um caso que retorna à condição original para verificar se a autorização precisa ser renovada.',
      ],
    },
    {
      heading: 'Meça quantos pedidos e quais valores cada divergência afeta',
      paragraphs: [
        'Use os resultados para produzir uma lista por regra, canal e família de produto. Inclua a quantidade de pedidos comparáveis e a quantidade que apresentou diferença. Uma carteira de dez mil pedidos e outra de cem podem ter a mesma quantidade de erros, mas exigem diagnósticos diferentes. Mostre também os casos excluídos por falta de dados históricos. Peça ao fornecedor que explique como o recorte foi escolhido e em quais grupos ainda falta amostra para tomar uma decisão.',
        'Some as diferenças em valor absoluto e mantenha o saldo líquido em outra coluna. Em um lote fictício, nove pedidos ficaram R$ 2 mais caros e outros seis ficaram R$ 3 mais baratos. A alteração líquida é zero, mas quinze clientes poderiam receber um valor diferente. A diferença absoluta total é R$ 36. Apresente os dois números junto da quantidade afetada e identifique pedidos acima da tolerância. Use o mesmo cálculo para avaliar a correção após o próximo ensaio.',
        'Meça o efeito na etapa em que é possível agir. Uma diferença vista durante a prévia de uma cotação pode permitir substituição ou revisão antes de comunicar o valor. Um preço aceito pelo cliente pode exigir que a empresa preserve o compromisso e trate a diferença em outra etapa. Classifique os resultados pelo que já aconteceu com o pedido. Registre os grupos que exigem análise comercial antes de qualquer recálculo e dê à equipe a referência que comprova o valor acordado.',
        'Compare também valores acumulados por cliente. Uma regra de centavos pode afetar poucas linhas num pedido, mas repetir-se por meses numa conta de grande volume. Escolha uma amostra de pedidos dessa conta e estime a magnitude com as quantidades reais do recorte. Identifique se a diferença se concentra numa apresentação de produto, num tipo de desconto ou numa etapa de cálculo. Peça a revisão do teste depois de corrigir a causa para verificar o restante da carteira.',
      ],
    },
    {
      heading: 'Distinga erro de migração, mudança aprovada e caso sem evidência',
      paragraphs: [
        'Registre para cada diferença a entrada, a versão da regra, o resultado em cada sistema e a referência usada pela área comercial. Um contrato pode prever desconto sobre a tabela da filial enquanto o novo sistema usa a tabela da matriz. Se a configuração diverge do contrato confirmado, dê à equipe um caso para testar a correção. Se a alteração da referência foi aprovada para pedidos novos, registre a aprovação e verifique se pedidos aceitos antes da mudança conservam o tratamento definido.',
        'Quando houver uma diferença no legado, peça que a área decida qual valor deve valer após a migração. Uma tabela antiga pode ter uma condição de exceção que já não é aplicada pela política atual, embora apareça em pedidos históricos. A decisão pode variar conforme a data, o compromisso com o cliente e o canal. Incorpore essa decisão à amostra e registre o que acontece se ainda faltar uma autorização. Assim, o teste tem uma expectativa explícita para cada caso.',
        'Trate ausência de evidência como pendência com responsável. Se faltam os parâmetros do cálculo antigo, a empresa pode reconstruir um caso com o contrato e a cotação emitida, ou excluir aquele grupo da primeira liberação até confirmar a referência. Registre quantos pedidos ficaram nessa condição e onde buscar informação. A retirada do caso de um relatório não pode reduzir silenciosamente a cobertura exigida. Peça que a proposta inclua tempo para investigar o grupo que permaneceu inconclusivo.',
      ],
    },
    {
      heading: 'Valide como os canais recebem o preço durante a transição',
      paragraphs: [
        'Escolha um pedido que começa num canal e termina em outro. O representante pode gravar a cotação enquanto está em visita e sincronizá-la mais tarde. O atendimento pode completar dados do cliente no portal e o ERP pode confirmar o pedido. Defina quais valores e referências precisam atravessar essas transferências. No teste, introduza uma mudança de tabela durante a sincronização e confira como as etapas seguintes reconhecem a cotação original.',
        'Faça a comparação do novo cálculo em ambiente sem efeito comercial. Use as mesmas entradas e mantenha o resultado identificado como ensaio. Peça que a equipe localize as linhas divergentes sem substituir a condição já enviada ao cliente. Se o portal e o ERP leem versões diferentes do cadastro, registre o momento em que cada cópia foi obtida. Antes de atribuir uma divergência ao cálculo, repita com versões alinhadas e compare o resultado.',
        'Prepare a reação quando uma filial descobrir um erro após a virada. Registre quais pedidos foram cotados, quais tiveram aceite e quais foram faturados. Peça que o fornecedor demonstre como limitar novas cotações no recorte afetado e como identificar os compromissos já assumidos. Se a equipe decidir usar o cálculo anterior temporariamente, determine como o sistema referenciará a regra que vale para cada pedido. Confirme quem autoriza e comunica a mudança aos canais.',
      ],
    },
    {
      heading: 'Compare propostas a partir de pedidos que revelem o esforço',
      paragraphs: [
        'Para solicitar um **orçamento para migrar regras de preço**, entregue a cada fornecedor a mesma amostra de pedidos, o mapa dos canais e as condições comerciais conhecidas. Identifique regras que estão em tabelas, regras que dependem de código e exceções registradas por outros meios. Informe também quais pedidos permanecem abertos durante a mudança. Peça estimativas separadas para descoberta, implementação, automação dos testes, ensaio de virada e verificação após a liberação.',
        'Use um pedido para comparar as demonstrações. Crie uma cotação com contrato de cliente, condição por quantidade e desconto manual. Em seguida, altere o número de unidades e confirme o pedido depois de uma troca de vigência. Peça que o fornecedor explique o resultado por linha, mostre a referência da regra e identifique a aprovação que continua válida. Se a demonstração exigir um cálculo fora da ferramenta, quantifique quem fará esse trabalho no dia a dia e como a área auditará o resultado.',
        'Peça duas estimativas para incorporar outro canal. Na primeira, ele usa as mesmas regras, mas informa os produtos em outra unidade de venda. Na segunda, usa preço e aprovação definidos em tabela própria. Compare quais atividades são reaproveitadas e quais exigem dados, implementação ou homologação adicional. Defina a condição para revisar a proposta quando o diagnóstico encontrar regras que só aparecem em pedidos específicos. Solicite também o preço de manter o cálculo antigo disponível durante a transição.',
        'Considere o custo da participação interna. Num cenário fictício, 120 casos precisam de conferência comercial e cada análise leva oito minutos. São 16 horas antes de contar dúvidas, reuniões e novos testes. Se a área consegue dedicar quatro horas por semana, a revisão inicial ocupa quatro semanas de capacidade. Peça que a proposta indique como a equipe recebe os casos e quais diferenças podem ser agrupadas pela mesma causa. Atualize a previsão depois de medir o tempo de uma amostra.',
      ],
    },
    {
      heading: 'Transforme diferenças aceitáveis em critérios explícitos',
      paragraphs: [
        'Defina quais valores exigem equivalência exata e quais podem seguir uma tolerância confirmada pela área comercial. Um valor prometido num pedido já aceito pode exigir preservação integral. Um relatório de simulação pode aceitar uma diferença de apresentação se a regra oficial e o valor cobrado permanecerem corretos. Registre o nível da verificação, como unidade, linha ou pedido. A tolerância deve explicar o que é considerado diferença e quem pode aprová-la.',
        'Proponha critérios independentes para cobertura e resultado. Uma taxa de aprovação alta pode esconder que todos os pedidos de um contrato ficaram fora do teste. Faça uma lista de regras e canais que precisam de pelo menos um caso válido e inclua exemplos perto de limites relevantes. A orientação do AWS Database Migration Service sobre validação distingue registros comparados, divergentes e casos sem verificação em certas condições. Adote essa distinção no relatório de preços e inclua o motivo das lacunas.',
        'Antes de autorizar o avanço, peça a relação de defeitos que ainda afetam o preço e dos pedidos associados. Para cada exceção autorizada, registre validade, recorte e responsável. Uma condição comercial pode ser aprovada para uma campanha específica e ficar proibida em outro canal. Mostre como a equipe encontra as decisões antes de liberar uma nova versão. Quando um problema for corrigido, repita os casos afetados e uma amostra das regras vizinhas.',
        'Peça a validação de quem vai operar o processo. Uma pessoa do comercial deve conseguir explicar de onde saiu uma condição e localizar a política que autoriza a exceção. Uma pessoa do faturamento deve conferir como a condição aparece no documento usado para concluir o pedido. Se essas provas dependem de acesso aos detalhes de cálculo, inclua os perfis adequados e a capacitação no escopo. Guarde a evidência de que ambas as pessoas conseguiram repetir a tarefa.',
      ],
    },
    {
      heading: 'Planeje a primeira publicação e a conferência dos pedidos reais',
      paragraphs: [
        'Defina o grupo inicial por canal, carteira ou família de produtos. Durante as primeiras horas, acompanhe pedidos recebidos, cotações emitidas e confirmações do faturamento. Escolha quem verifica casos novos e em qual horário a operação decide manter, ampliar ou suspender a liberação. Para clientes com preço negociado em contrato, inclua uma conferência antes que a condição seja comunicada, conforme a capacidade que a empresa consegue reservar.',
        'Confirme como agir se a divergência aparecer depois que uma cotação saiu. A equipe deve localizar a versão da regra, o grupo atingido e os pedidos em cada estado. Se houver necessidade de corrigir ou interromper a publicação, estime o alcance antes de alterar tabelas. Peça que o fornecedor mostre quanto tempo leva para encontrar outros pedidos com a mesma combinação. Registre a decisão sobre os valores que já foram aceitos e quem comunicará os envolvidos.',
        'Inclua uma conferência no primeiro ciclo de devoluções. Uma peça vendida antes da mudança pode retornar após a virada. A conta precisa usar a referência do pedido original quando essa for a política acordada. Peça um caso em que a tabela vigente agora é diferente e verifique o motivo da diferença. Trocas parciais e créditos associados ao preço original devem ser incluídos se fizerem parte do fluxo da empresa. Use o resultado para revisar a forma de buscar pedidos antigos.',
        'Na reunião posterior, compare o que foi medido no ensaio com o que ocorreu. Revise os casos por canal, a quantidade de atendimentos que exigiram revisão e o tempo até corrigir as diferenças. Se aparecer um grupo sem exemplos de referência, amplie a amostra e determine se o grupo pode avançar. Leve ao fornecedor a lista de contratos, cotações e regras que precisam de prova. Isso permite estimar a migração por recorte e vincular a expansão ao aceite comercial.',
      ],
    },
    {
      heading: 'Entregue a suíte de testes com a regra que cada caso comprova',
      paragraphs: [
        'Inclua um pedido de controle em que nenhuma exceção se aplica. Ele ajuda a detectar mudanças na tabela-base quando o fornecedor corrige uma campanha ou um contrato. Verifique também o pedido equivalente no canal que usa outra tabela para evitar que a correção seja aplicada fora do recorte.',
        'Defina quem recebe os casos de teste após a migração. Cada caso deve informar a versão da tabela usada, o resultado esperado e o motivo de existir. Se a empresa trocar a política de volume, o responsável precisa saber quais linhas devem ter sua expectativa atualizada e quais continuam protegendo um contrato antigo. Peça uma demonstração em que uma pessoa da empresa altera apenas um cenário com autorização e executa a conferência das demais condições.',
        'Guarde os artefatos que permitem repetir os testes com segurança. A amostra pode usar códigos substituídos, desde que mantenha as relações que influenciam o preço. Registre como obter os valores previstos sem depender de uma planilha pessoal. Para canais que só podem ser avaliados em janelas programadas, defina a frequência e o responsável por reunir os resultados. Inclua isso na precificação da sustentação se a empresa pretende manter o fornecedor após a migração.',
      ],
    },
  ],
  faqs: [
    { question: 'Como testar a paridade de preços entre dois sistemas?', answer: 'Reproduza pedidos com as mesmas entradas e vigências. Compare valores por linha, totais, regras aplicadas e aprovações.' },
    { question: 'O que fazer quando uma diferença é intencional?', answer: 'Registre a política aprovada, a vigência e o grupo afetado. Teste a regra nova e confira o tratamento dos pedidos anteriores.' },
    { question: 'Quando aprovar a migração de preços?', answer: 'Quando os cenários obrigatórios estiverem cobertos, os desvios críticos forem resolvidos e as exceções tiverem aprovação e evidência.' },
  ],
  cta: {
    title: 'Quer migrar as regras de preço do seu software?',
    text: 'Leve à Tironi Tech uma amostra de pedidos, tabelas e exceções. Podemos ajudar a definir os testes de paridade e a estimar o trabalho por etapa.',
    label: 'Conversar sobre a migração de preços',
  },
  sources: [
    { label: 'AWS Database Migration Service — validação de dados e registros divergentes', url: 'https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Validating.html' },
  ],
};
