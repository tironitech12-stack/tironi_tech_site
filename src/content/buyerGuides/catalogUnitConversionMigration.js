export const catalogUnitConversionMigration = {
  slug: 'contratar-migracao-catalogo-unidades-medida',
  date: '2026-11-26',
  updated: '2026-11-26',
  description: 'Compare propostas de migração de catálogo com conversão de unidades, testes de estoque e preservação de pedidos em aberto.',
  keywords: ['migração de catálogo com conversão de unidades de medida', 'orçamento para migração de catálogo de produtos', 'conversão de unidades de medida no ERP'],
  emphasis: 'migração de catálogo com conversão de unidades de medida',
  intro: 'Para orçar uma migração de catálogo com conversão de unidades de medida, identifique como cada produto é comprado, estocado e vendido. Peça uma prova com embalagens diferentes, valores fracionados e pedidos que atravessam a troca de sistema.',
  takeaways: [
    'Defina unidades e fatores por produto e apresentação.',
    'Reconcilie saldos e pedidos usando quantidades físicas equivalentes.',
    'Teste as conversões na compra, no estoque e na venda.',
  ],
  sections: [
    {
      heading: 'Identifique a unidade em que cada área trabalha',
      paragraphs: [
        'Escolha um produto e siga a entrada até a saída. Uma distribuidora pode comprar caixas de doze peças, guardar peças avulsas e vender conjuntos de três. Registre o que a nota de recebimento identifica, qual unidade o estoque movimenta e como o canal apresenta a oferta. Peça ao fornecedor que mostre a quantidade depois de cada transformação. A prova precisa indicar se existe código próprio para a embalagem e qual dado permite distinguir o que foi vendido.',
        'Inclua um produto comprado em uma unidade e vendido por peso ou volume, quando isso fizer parte da operação. Se a relação depende do peso real do lote, uma conversão fixa pode não representar a entrada. Identifique qual medida é registrada na balança e qual quantidade entra no pedido. Peça que a proposta explique onde precisa guardar as duas medidas e quais relatórios precisam delas. Registre também quais transações só podem ser executadas depois da pesagem.',
        'Diferencie mudança de rótulo de mudança na base de cálculo. Um cadastro pode trocar a abreviação de peça sem afetar a quantidade. Outro pode passar de caixa para peça e exigir migrar saldo, condições de venda e pedidos. Peça aos fornecedores que classifiquem exemplos de ambos os tipos. Use a distinção para estimar a quantidade de regras, os testes necessários e o preço de aplicar o novo padrão por grupo.',
      ],
    },
    {
      heading: 'Mapeie fatores por apresentação e vigência',
      paragraphs: [
        'Na **conversão de unidades de medida no ERP**, explique a direção do fator com exemplos. Se uma caixa contém doze peças, dez caixas equivalem a 120 peças. Na direção inversa, dez peças não completam uma caixa. Defina se o sistema mostra um saldo fracionário, mantém as peças restantes ou bloqueia uma venda em caixa. Peça uma prova nas duas direções e confirme que o operador consegue identificar qual unidade está usando.',
        'Registre os fatores por produto, embalagem e vigência. Uma caixa pode ter contido seis peças até maio e passar a conter oito a partir de junho. Se as duas apresentações ainda estão no depósito, use os próprios identificadores e confira as quantidades por recorte. Peça que os fornecedores demonstrem o recebimento de uma compra antiga e a separação de uma compra nova. O resultado deve preservar a condição em que cada transação foi negociada.',
        'Verifique o que acontece quando falta um fator. Uma linha pode ter sido cadastrada como caixa sem identificar a apresentação. A migração deve encaminhar o caso para a pessoa que consegue conferir pedido, cadastro ou embalagem. Antes de autorizar a carga, peça um relatório com o número de registros nessa condição e o efeito sobre estoque e vendas. Use a amostra para estimar o trabalho de completar as informações e revisar os itens que ainda não podem avançar.',
      ],
    },
    {
      heading: 'Reconcilie o saldo por lote e localização',
      paragraphs: [
        'Prepare uma posição de referência no mesmo instante para todos os depósitos. Em um exemplo fictício, um lote contém cinco caixas fechadas de doze peças e sete peças avulsas. O saldo físico equivale a 67 peças. Se o destino registra 67 peças, ainda é preciso confirmar se a operação pode atender uma venda de cinco caixas fechadas. Preserve a identificação das embalagens quando a promessa comercial depende dela. Inclua também uma localização com peças suficientes no total, mas distribuídas entre lotes que não podem compor a mesma caixa.',
        'Separe estoque disponível, reservado e em inspeção antes de converter. Uma reserva de duas caixas pode comprometer 24 peças e depender de uma apresentação específica. Faça a conferência de um grupo com estoque em dois locais e compare as posições depois da troca. O fornecedor deve mostrar como vincula a reserva ao pedido original e por que o saldo disponível mudou. Se apenas a forma de medir mudou, confira a equivalência física antes e depois.',
        'Inclua material em trânsito. Uma transferência pode sair em caixas e ser confirmada em peças. Se o destino recebeu parte da carga antes do corte, mostre o que já entrou e o que ainda está a caminho. Use o documento da transferência para ligar os números e registre a apresentação ainda pendente. Compare por produto, lote e local. O total da rede pode coincidir mesmo quando parte da quantidade foi atribuída ao depósito errado.',
      ],
    },
    {
      heading: 'Preserve as condições dos pedidos que atravessam a virada',
      paragraphs: [
        'Escolha um pedido de compra emitido no sistema antigo e recebido após a troca. Registre o código impresso, a unidade acordada e a quantidade entregue. Peça que a demonstração receba apenas parte da compra e indique quanto falta na unidade original e na unidade usada pelo estoque. Depois, simule uma entrega complementar. O resultado deve manter o vínculo com a linha inicial e permitir à área conferir o compromisso sem recalcular de memória a composição da embalagem.',
        'Teste um pedido de venda confirmado por caixa antes da troca. Quando o estoque passa a usar peças, a separação deve continuar respeitando a apresentação vendida. Confira como a reserva é migrada e como o depósito localiza as caixas. Inclua um cancelamento parcial e verifique quanto volta ao saldo disponível. Se a caixa foi aberta para atender o pedido, a operação precisa distinguir peças avulsas de embalagens fechadas. Peça ao fornecedor que indique quando essa mudança física deve ser registrada.',
        'Inclua uma devolução depois da implantação. O cliente pode apresentar um comprovante antigo com código e unidade que deixaram de ser usados em novas vendas. A equipe deve localizar a linha original e registrar o retorno conforme o procedimento aprovado. Confira o item, a quantidade física e a localização de destino. Se o produto retornado exige inspeção antes de voltar ao saldo, mantenha esse estado separado na prova e na estimativa dos testes.',
      ],
    },
    {
      heading: 'Conserve a precisão necessária para quantidades e preços',
      paragraphs: [
        'Documente a quantidade de casas decimais que cada sistema recebe e guarda. Uma medição pode chegar como 1.375 gramas e precisar aparecer como 1,375 quilograma. Se o destino grava apenas duas casas, determine onde o arredondamento é permitido e quais relatórios ainda precisam da medida original. Faça a prova com uma compra e uma devolução. Compare o saldo depois das duas operações e registre a precisão usada para cada resultado.',
        'Teste o arredondamento por linha e por total. Três entradas de 0,335 quilograma somam 1,005 quilograma antes de arredondar. Com arredondamento usual para duas casas, cada entrada vira 0,34 e a soma chega a 1,02. Se a regra arredonda apenas o total, o valor fica em 1,01. Confirme a política aplicável, inclusive para correções e retornos. Peça ao fornecedor que demonstre se o destino guarda a quantidade original ou se a perda de precisão precisa aparecer em um relatório de conciliação.',
        'Separe a conversão de quantidade da conversão do preço. Uma caixa de doze peças vendida por R$ 120 pode corresponder a R$ 10 por peça para a comparação, mas o preço de venda avulsa pode seguir outra política aprovada. Leve um pedido de cada apresentação e verifique qual preço o canal mostra e qual valor ele confirma. Se o contrato preserva o preço da embalagem antiga para um pedido aberto, inclua a referência e a vigência na homologação.',
      ],
    },
    {
      heading: 'Compare orçamentos pela variedade de conversões e de fluxos',
      paragraphs: [
        'No **orçamento para migração de catálogo de produtos**, informe o volume de itens, locais, apresentações e operações em aberto. Separe as famílias que usam medidas fixas das que dependem de pesagem ou leitura no recebimento. Entregue uma amostra com uma unidade simples, uma embalagem cuja composição mudou e um produto fracionado. Peça preços separados para diagnóstico, preparação das regras, carga, homologação e suporte na virada. Solicite também a estimativa de correção dos registros sem fator.',
        'Compare até onde cada fornecedor verifica a integração. Uma proposta pode converter os dados do cadastro e deixar a atualização dos pedidos para outro projeto. Outra pode acompanhar o recebimento no ERP e a separação no depósito. Use a mesma transação para mostrar as diferenças de alcance. Registre o que a equipe precisa validar por conta própria e quanto custa acrescentar outro canal que recebe unidades em um formato diferente.',
        'Meça a participação interna. Num cenário fictício, 450 dos 9.000 itens ficam sem fator confirmado. Se cento e cinquenta podem ser resolvidos pela mesma regra aprovada e trezentos exigem quatro minutos de revisão individual, essa revisão leva vinte horas antes de contar consultas aos fornecedores. Peça que as propostas descrevam a fila, as evidências usadas e o tempo para repetir a carga. Use a amostra real para ajustar o cálculo e reservar a disponibilidade dos responsáveis por cada família.',
      ],
    },
    {
      heading: 'Teste a carga com uma tabela de correspondências aprovada',
      paragraphs: [
        'Peça uma tabela que relacione código de origem, apresentação, unidade original, unidade de destino, fator e data de vigência. Escolha uma linha que usa fator fixo e outra cuja conversão depende da medida registrada no recebimento. A equipe precisa saber por que as duas seguem cálculos diferentes. Mostre ainda como a carga trata um código que aparece em dois catálogos de origem. O fornecedor deve identificar a fonte e a variante antes de propor uma correspondência.',
        'Faça uma primeira execução sem atualizar os sistemas de operação. Peça um relatório com itens convertidos, registros que permaneceram na mesma unidade, casos rejeitados e fatores que aguardam confirmação. O total de itens lidos deve ser reconciliável com os grupos de saída. Compare os saldos por produto, lote e depósito no mesmo instante. Uma diferença geral de zero pode esconder dez peças acrescentadas num lote e dez retiradas de outro.',
        'Teste uma revisão de fator depois da primeira rodada. Uma família pode ter sido mapeada para doze peças por caixa quando a ficha do fornecedor confirma dez. Identifique os registros afetados e prepare uma nova carga. Confira se a mudança chega apenas a esse grupo. Se parte do catálogo foi aprovada na rodada anterior, preserve a versão validada e documente quais verificações precisam ser repetidas. Combine quem confirma a revisão e qual prova permite autorizar a próxima execução.',
        'Peça que uma pessoa que não participou da preparação reconstrua uma conversão a partir do relatório. Entregue apenas o código antigo e a referência de um recebimento. Ela deve localizar a linha de correspondência, comprovar a vigência e reproduzir o resultado. Se precisar consultar a embalagem física, registre onde está essa evidência e de quem depende. Use a dificuldade observada para estimar o esforço de sustentação de novas conversões depois da migração.',
      ],
    },
    {
      heading: 'Confirme os movimentos feitos entre a extração e a virada',
      paragraphs: [
        'Defina em que momento o saldo de referência será extraído e que movimentos ainda poderão ser feitos até o corte final. Durante esse intervalo, uma unidade pode receber mercadoria, registrar ajuste de inventário e separar pedidos. Peça que o fornecedor indique como identifica inclusões, correções e cancelamentos. Teste um movimento lançado no intervalo e uma revisão feita sobre um documento antigo. Um filtro pela data de criação pode encontrar o primeiro caso e deixar o segundo de fora.',
        'Em um exemplo fictício, o saldo de referência contém 100 peças. Até a virada entram duas caixas de doze peças e saem nove peças. O saldo esperado passa a 115 peças. Preserve as referências da entrada e da saída e compare o estado de cada uma no destino. Faça outra execução com o mesmo conjunto para confirmar que as 24 peças recebidas aparecem apenas uma vez. Inclua uma correção do recebimento e verifique como o destino reflete o valor autorizado.',
        'Inclua movimentos que dependem de confirmação posterior. Uma transferência pode sair do depósito A na janela antiga e ser recebida no depósito B depois da carga. Registre a quantidade em trânsito, a unidade de cada lado e o identificador que os conecta. Quando parte chegar, confira o que entrou e o que permanece em trânsito. Peça que a proposta explique quem revisa a posição de abertura e como a evidência poderá ser consultada na primeira conciliação.',
      ],
    },
    {
      heading: 'Dimensione a janela de homologação pelo trabalho de conferência',
      paragraphs: [
        'Meça o tempo de preparar arquivos, executar a carga, revisar exceções e obter a confirmação de estoque. Num cenário fictício, importar leva uma hora e conferir os itens de maior risco leva noventa minutos. A operação também precisa de trinta minutos para decidir sobre a liberação. Só a duração da importação pode subestimar a janela em duas horas. Use os tempos de um ensaio e reserve margem para repetir os casos que falharam.',
        'Ensaie um cadastro rejeitado perto do fim da janela. Determine se a família pode ficar fora do primeiro recorte e como a operação identifica os produtos que ainda usam o caminho anterior. Se um pedido mistura itens dos dois recortes, peça que o fornecedor mostre quais etapas conseguem continuar. Registre a autoridade para adiar ou reduzir a virada e quanto tempo sobra para preparar o procedimento escolhido.',
      ],
    },
    {
      heading: 'Verifique os efeitos da unidade de medida sobre reposição e separação',
      paragraphs: [
        'Liste as regras que leem quantidade no cadastro. Um produto pode exigir pedido mínimo de três caixas, ter ponto de reposição de 120 peças e ocupar uma posição calculada pelo número de volumes. Peça ao fornecedor que converta cada regra conforme sua finalidade. Teste uma sugestão de reposição e uma separação realista. Se o sistema passa a exibir tudo em peças, a sugestão ainda precisa respeitar o múltiplo de compra previsto no contrato com o fornecedor.',
        'Em um exemplo fictício, faltam 25 peças para atingir o estoque desejado e o fornecedor vende caixas de doze. Uma regra que só permite caixas completas pode sugerir três caixas, equivalentes a 36 peças, conforme a política de reposição. Peça que a operação explique quando prefere outra quantidade. A regra de compra precisa aparecer no pedido e a entrada precisa gerar a quantidade física correta. Confira também se o saldo projetado distingue o que já está em trânsito.',
        'Teste o espaço e a manuseabilidade da unidade física. Um depósito pode comportar cinco caixas fechadas em uma posição e guardar peças avulsas em outro local. O fato de as duas posições serem comparáveis em quantidade de peças ajuda a conciliar o total, enquanto a disponibilidade para separação pode depender da embalagem. Peça que o ensaio confirme onde a equipe encontra as caixas, como registra a abertura de uma delas e de onde sai a reserva restante.',
        'Inclua uma alteração de fator enquanto a equipe tem tarefas de separação abertas. A versão nova pode passar a valer para novas reservas e deixar as anteriores vinculadas à apresentação inicial. Confira se o coletor mostra a quantidade, o código e a embalagem para cada tarefa. Se a mudança exige refazer uma tarefa em aberto, defina a autorização e o efeito sobre o saldo reservado. O teste deve permitir à área comparar o estado antes e depois sem recorrer a anotação paralela.',
      ],
    },
    {
      heading: 'Confira rótulos, códigos e mensagens nos sistemas consumidores',
      paragraphs: [
        'Escolha um produto vendido em caixa e em unidade e teste os dois identificadores na leitura do depósito. A GS1 descreve a atribuição de novos identificadores para mudanças na quantidade de itens de uma caixa quando o padrão de GTIN se aplica. Use essa referência para conversar com o fornecedor sobre as apresentações controladas pela empresa. Registre quais códigos aparecem no rótulo, na oferta e no pedido. Confirme se a leitura de uma apresentação leva à quantidade e à localização corretas.',
        'Confira a informação que o canal exibe antes da compra. Um catálogo pode receber o preço da caixa e exibir o rótulo de unidade. Peça uma compra de teste e compare o que aparece ao cliente, o registro do pedido e a separação no depósito. Inclua uma variante com apresentação diferente para verificar se a transformação usa a combinação correta. Se a origem precisa enviar códigos específicos para cada canal, acrescente a validação desse mapa à estimativa.',
        'Exercite um consumidor que rejeita uma unidade desconhecida. Um sistema pode aceitar apenas códigos previstos e outro pode armazenar a descrição recebida. Defina quem mantém a correspondência e como a integração lida com códigos ainda não aprovados. Faça a correção na fonte autorizada, envie de novo e verifique as quantidades recebidas. Se a primeira tentativa aceitou parte do lote, confirme que a repetição não cria outro cadastro para os itens já aplicados.',
        'Peça um relatório que permita reconhecer estruturas antigas e novas. Em uma transação migrada, a equipe pode precisar ver que o pedido foi lançado em caixa e que o movimento corresponde a 24 peças. Para vendas novas, o caminho pode partir de peças desde a origem. Escolha um pedido de cada cenário e verifique se os relatórios por período e produto preservam o significado dos valores. A prova ajuda a prever ajustes nas integrações que usam relatórios para tomar decisões.',
      ],
    },
    {
      heading: 'Prepare uma recuperação que preserve os movimentos após a carga',
      paragraphs: [
        'Defina a condição em que o piloto pode ser suspenso. Uma apresentação que não pode ser localizada no depósito pode impedir a separação do recorte. Uma divergência histórica já documentada pode ser investigada sem interromper as vendas atuais. Registre quem toma a decisão, os dados que sustentam a análise e o último horário em que é possível mudar o caminho. Peça que o fornecedor estime a recuperação contando o tempo de conciliar operações já confirmadas.',
        'Teste a volta após receber ou separar mercadoria no destino. Em um exemplo fictício, a operação confirma a entrada de duas caixas no ambiente novo e separa cinco peças antes de decidir voltar. Anote a referência da entrada, a composição das caixas e o efeito da separação. Identifique o procedimento que permite preservar esses movimentos e confira o saldo disponível no ambiente que volta a operar. A recuperação deve cobrir o trabalho executado durante a janela.',
        'Compare a recuperação de um item isolado com a de uma família. Se o fator está incorreto apenas em uma apresentação, a correção pode depender de refazer o saldo e revisar pedidos que usaram aquele código. Se a regra foi aplicada a toda uma família, identifique o volume, os depósitos e os relatórios afetados. Solicite que a proposta liste os passos para montar cada recorte e estime a participação de estoque, compras e vendas antes da liberação.',
      ],
    },
    {
      heading: 'Formalize o aceite e o acompanhamento da primeira operação',
      paragraphs: [
        'Inclua uma contagem física de controle antes da liberação. Escolha um lote que contenha caixas fechadas e peças avulsas. Peça que o depósito conte cada apresentação e compare o resultado com o saldo convertido. Registre a evidência da abertura de uma caixa se o estoque mudou entre a contagem e a consulta.',
        'Monte uma ficha com unidade original, fator, vigência, quantidade esperada e situação de cada cenário. Compras confirma o compromisso da linha e a apresentação recebida. Estoque valida os saldos e as reservas por lote e local. Vendas comprova o que foi apresentado e confirmado no pedido. Tecnologia explica os resultados da carga e das integrações. Registre quem assina cada prova e o que precisa ser corrigido antes de avançar.',
        'Use casos cuja diferença exige uma decisão. Um saldo de 67 peças pode estar correto fisicamente e ainda depender de conferência sobre quantas caixas permanecem fechadas. Um item de peso variável pode ter um resultado dentro da tolerância para estoque e exigir que a área preserve a medição original no histórico. Para cada caso, registre o limite autorizado e quem valida. Evite aplicar uma tolerância geral que oculte uma divergência em unidades inteiras ou numa apresentação comercial.',
        'Inclua no aceite a capacidade de repetir as provas. Dê a uma pessoa de suporte o código anterior, o número do pedido e a data. Ela deve localizar o fator usado, conferir o resultado e identificar como encaminhar uma correção. Depois, peça a uma pessoa de estoque que confirme a quantidade disponível sem ajuda de quem preparou a carga. Registre as lacunas de documentação e acesso. Use esse resultado para definir o ponto de transferência para a equipe que manterá o catálogo.',
        'Acompanhe o primeiro ciclo completo de compra, recebimento e venda. Separe problemas de cadastro, fatores incompletos, rejeições de integração e dúvidas de operação. Compare a quantidade de correções e as horas dedicadas por família. Se a maioria dos casos se concentra em itens cujo peso muda por lote, revise o escopo antes de expandir o projeto. Use os tempos observados para estimar se o próximo grupo exige mais suporte na virada ou uma etapa adicional de preparação.',
        'Para a primeira reunião comercial, reúna um produto com apresentações diferentes, um pedido em aberto e um exemplo de diferença de saldo. Informe as unidades usadas pelos sistemas e onde a operação comprova o fator. Peça preços para revisar a correspondência, executar a carga, testar os pedidos e acompanhar a primeira conciliação. Compare as ofertas pelo esforço até comprovar a quantidade física, o atendimento da apresentação vendida e a continuidade dos movimentos entre sistemas.',
      ],
    },
  ],
  faqs: [
    { question: 'O que incluir no orçamento de migração com conversão de unidades?', answer: 'Inclua o inventário de apresentações, fatores e vigências, a conversão de saldos e pedidos, os testes de integração e o acompanhamento da virada.' },
    { question: 'Como verificar se o saldo permaneceu correto?', answer: 'Compare quantidades físicas no mesmo corte por produto, lote, local e estado. Confira também a disponibilidade por embalagem.' },
    { question: 'Quando liberar a migração do catálogo?', answer: 'Depois de verificar as conversões críticas, preservar os pedidos em aberto e comprovar a recuperação dos movimentos que atravessaram a virada.' },
  ],
  cta: {
    title: 'Quer orçar a migração do seu catálogo com conversão de unidades?',
    text: 'Leve à Tironi Tech exemplos de produtos, embalagens e pedidos. Podemos ajudar a delimitar a conversão, a homologação e a virada.',
    label: 'Conversar sobre migração de catálogo',
  },
  sources: [
    { label: 'GS1 — padrão de gestão de GTIN e quantidade por embalagem', url: 'https://www.gs1.org/sites/default/files/docs/barcodes/GS1_GTIN_Management_Standard.pdf' },
  ],
};
