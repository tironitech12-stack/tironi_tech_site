export const whatsappCatalogFreshness = {
  slug: 'teste-ia-whatsapp-catalogo-preco-atualizado',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Teste se o agente de WhatsApp usa catálogo e preço vigentes, respeita a tabela do cliente e reage a atualizações atrasadas.',
  keywords: ['agente de WhatsApp com preço e catálogo atualizados', 'testar preço no WhatsApp', 'sincronização de catálogo e preço com WhatsApp'],
  emphasis: 'agente de WhatsApp com preço e catálogo atualizados',
  intro: 'Para testar um agente de WhatsApp com preço e catálogo atualizados, publique mudanças controladas em homologação e acompanhe quando cada uma aparece na conversa. Verifique se o preço corresponde ao produto, à embalagem, ao grupo de cliente e à vigência. Se a fonte atrasar, confira se o agente informa o limite ou encaminha a consulta.',
  takeaways: [
    'Use a fonte comercial autorizada como referência do teste.',
    'Meça o intervalo entre publicação, sincronização e resposta.',
    'Inclua produto descontinuado, mudança de tabela e conversas abertas.',
  ],
  sections: [
    {
      heading: 'Estabeleça a referência que determina o resultado correto',
      paragraphs: [
        'Antes de testar preço no WhatsApp, escolha qual fonte tem autoridade para cada campo. Uma plataforma de catálogo pode manter descrições e imagens, enquanto o ERP calcula o valor para o cliente. Uma tabela promocional pode ter vigência aprovada em outro sistema. Peça ao fornecedor que indique onde consulta cada campo e como sabe qual versão está autorizada. Guarde como referência a regra comercial e o resultado esperado para a data da consulta. Assim, a verificação avalia o dado usado e seu significado para a compra.',
        'Imagine uma loja que vende um filtro por unidade e por caixa com seis peças. O catálogo tem duas referências, e uma delas foi substituída há pouco. Se o comprador pergunta pelo preço da caixa, a resposta precisa identificar a embalagem vigente antes de consultar o valor. Na homologação, inclua o nome abreviado e a referência antiga. Decida se a referência antiga deve resultar em sugestão de substituição ou encaminhamento. Registre o que pode ser comunicado sem atribuir ao item antigo o valor do novo.',
        'Defina o recorte por conta, canal e local quando as condições mudam. Um preço para consumidor final pode diferir do preço para uma revenda identificada. Uma promoção pode valer em uma unidade e aparecer no catálogo geral como informação de campanha. Peça que os candidatos usem os mesmos casos fictícios de cada grupo. A resposta deve mostrar o valor adequado ao contexto autorizado ou solicitar o dado que falta. Confira o preço exibido e a unidade de venda no sistema de referência.',
      ],
    },
    {
      heading: 'Meça o atraso em cada etapa da atualização',
      paragraphs: [
        'Registre quando a mudança foi aprovada, quando entrou em vigor, quando o canal a recebeu e quando a primeira consulta devolveu o valor novo. Essas datas podem ser diferentes, inclusive quando o fornecedor diz que a consulta é em tempo real. Uma mudança com vigência às 14h pode aparecer na plataforma antes e só se tornar válida naquele horário. Uma alteração imediata pode depender de sincronização. Teste as duas situações e confirme com a área comercial que a resposta respeita a data prevista.',
        'Faça perguntas na mesma conversa e em uma conversa nova. O agente pode carregar a descrição no começo e consultar o preço só quando o cliente pede a confirmação. Se o preço muda durante o atendimento, verifique quando ele usa a condição anterior e quando precisa consultar de novo. Defina o tratamento conforme as regras aprovadas, como a validade de uma proposta já enviada. Compare o valor anunciado antes da revisão com o valor que o sistema aplicaria numa compra nova.',
        'Inclua uma atualização que demora mais do que o limite acordado. Estabeleça o que a equipe pode apresentar com base na última versão conhecida, quando precisa interromper respostas de preço e quem recebe a pendência. Peça que o fornecedor mostre a origem, o horário e o aviso de atraso disponíveis para o suporte. Se o catálogo volta a sincronizar, repita a consulta e confira se o agente retoma pelo valor autorizado sem deixar pedidos anteriores em estado indefinido.',
      ],
    },
    {
      heading: 'Teste o início, o fim e a precedência de uma promoção',
      paragraphs: [
        'Configure uma promoção fictícia que começa às 14h e termina às 18h no horário da unidade. Deixe a regra cadastrada antes da abertura da janela. Consulte o mesmo item às 13h59, às 14h e às 18h e compare as respostas com a fonte comercial. Registre o relógio de referência e o instante em que a consulta foi processada. Se um pedido enviado antes das 18h só chega ao sistema de vendas depois desse horário, peça à área comercial que defina que momento determina o valor. Inclua esse caso no teste, pois a resposta do agente e o cálculo do carrinho precisam seguir a regra aprovada.',
        'Teste condições de promoção que dependem de quantidade. Suponha que um item fictício custe R$ 40 por unidade e passe a R$ 36 a partir de seis unidades. Consulte cinco, seis e sete unidades e repita com uma caixa cadastrada como produto distinto. Confira o valor unitário, a quantidade usada na regra e o total. Depois, faça o comprador reduzir de seis para cinco unidades na mesma conversa. Observe se o agente recalcula o valor, informa a mudança e mantém a descrição correta do produto. Se o fornecedor apresentar o preço promocional sem conhecer a quantidade, peça que documente o contexto em que isso é permitido.',
        'Inclua duas condições que coincidem. Uma revenda pode ter tabela contratual e uma campanha pode aplicar desconto ao catálogo geral. Antes de repetir a consulta, registre se o contrato prevalece, se a campanha pode ser aplicada à revenda ou se o caso depende da equipe comercial. Teste um cliente de tabela pública, outro da tabela contratual e um contato ainda sem vínculo confirmado. Confira também o que fica visível em cada resposta. A prova deve permitir identificar a regra escolhida e demonstrar que uma condição de acesso restrito só aparece no contexto apropriado.',
      ],
    },
    {
      heading: 'Verifique se preço e descrição pertencem à mesma versão do item',
      paragraphs: [
        'Na **sincronização de catálogo e preço com WhatsApp**, uma alteração pode chegar em etapas. Imagine que um produto passa de caixa com seis unidades para um novo código com oito. Se a descrição nova chega primeiro e a tabela ainda aponta para o código antigo, a conversa pode associar o preço errado à embalagem. Em homologação, publique cada alteração numa janela controlada e consulte nos estados intermediários. Documente como a operação identifica combinações incompletas e o que o agente pode apresentar enquanto aguarda a segunda atualização.',
        'Repita com uma informação que não altera preço, como uma correção de fotografia, e outra que muda o valor total, como trocar a unidade de venda. Defina quando a equipe pode continuar respondendo e quando deve interromper a cotação daquele item. Um atraso na imagem pode ter pouco efeito para um comprador que informou o código. Uma descrição de embalagem desatualizada pode mudar o significado da compra. Classifique o impacto pela decisão que o cliente vai tomar e indique quem autoriza a retomada.',
        'Inclua uma lista de três itens em que apenas um está com dados incompletos. O agente pode apresentar os outros dois com a fonte confirmada e encaminhar a linha pendente, conforme a regra comercial. Confira como o cliente distingue um total parcial de um orçamento completo. Depois que a sincronização terminar, repita a consulta e verifique se o preço recuperado aparece associado à linha certa. Registre quanto tempo o suporte gastou para localizar a diferença e se precisou envolver a equipe que mantém o catálogo.',
      ],
    },
    {
      heading: 'Teste descontinuação, remoção e produto substituto',
      paragraphs: [
        'Selecione um item descontinuado com saldo residual, outro removido de venda e um substituto aprovado pela equipe comercial. Eles podem produzir respostas diferentes. Se o comprador usa uma referência antiga, confira como o agente chega ao estado atual e que informação pode comunicar. Um substituto pode servir a algumas aplicações e exigir especialidade em outras. A prova precisa mostrar a diferença entre informar que existe outra referência e garantir que ela atende à necessidade do comprador.',
        'Repita a consulta antes e depois da retirada de catálogo. Inclua o nome comercial, o código e uma frase retirada de uma conversa de teste anterior para verificar se o agente usa uma referência desatualizada. Confira a consulta na fonte oficial e a saída em uma conversa já aberta. Se a organização admite manter uma cotação vigente para um item com saldo, descreva quais condições ainda precisam ser conferidas antes de concluir. Registre o estado da oferta e o da venda separadamente.',
        'Peça um procedimento para reintroduzir um item. O produto pode voltar com o mesmo código, outra embalagem ou um fornecedor diferente. Defina quais campos precisam ser validados para retomar a resposta e quem autoriza a publicação. Faça o teste com uma referência semelhante que permanece inativa para conferir se a atualização atingiu apenas o item previsto. Preserve os horários e o resultado esperado, pois a equipe pode usar a sequência para investigar outra alteração depois de contratar o suporte.',
      ],
    },
    {
      heading: 'Confira o valor da conversa no último passo antes da compra',
      paragraphs: [
        'Separe consulta de preço, cotação com validade e pedido registrado. Na consulta, a operação pode informar uma condição disponível naquele momento. Na cotação, pode existir uma regra que mantém a condição até uma data ou até a alteração da quantidade. No pedido, o sistema de venda confirma os valores aceitos e grava o compromisso. Antes de contratar a automação, escreva em qual etapa a conversa pode avançar sozinha e qual confirmação é necessária para o cliente reconhecer que a compra foi registrada.',
        'Prepare dois casos com o mesmo produto. No primeiro, o agente informou um preço às 10h e o cliente retorna à tarde, depois de o valor mudar. No segundo, existe uma cotação identificada e a regra comercial preserva o valor durante um prazo definido. Compare o que o agente diz em cada caso, o que o sistema de destino calcula e quando uma pessoa precisa conferir. Peça que o fornecedor mostre o valor anterior, o atual e a regra aplicada no momento do pedido. Essa diferença evita confundir histórico de conversa com compromisso de preço.',
        'Inclua uma mudança que afeta o total sem alterar o preço unitário, como trocar a região de entrega ou a embalagem de uma linha. Em seguida, retire um item que participava de um desconto conjunto. Confira o cálculo no sistema autorizado e veja se a conversa identifica os campos que foram recalculados. Se a compra ainda depende de frete ou análise comercial, a resposta deve indicar a condição correspondente. Um total parcial tem utilidade quando o comprador consegue entender o que ele inclui e qual valor ainda depende de confirmação.',
        'Exija uma prova de divergência no fechamento. Simule um cenário em que o canal apresenta um total, mas o sistema comercial devolve outro. Defina se a proposta precisa retornar à revisão ou mostrar ao comprador a alteração e pedir nova confirmação. Verifique o estado que fica registrado em cada sistema e como o vendedor localiza o caso. Quando a integração ainda não consegue explicar a diferença, combine um procedimento de encaminhamento que preserve a referência da consulta e a situação da compra.',
      ],
    },
    {
      heading: 'Ensaie a recuperação quando o catálogo volta a sincronizar',
      paragraphs: [
        'Planeje uma interrupção controlada em homologação. Prepare uma atualização de preço, outra de embalagem e outra de descontinuação. Primeiro, confira a situação anterior no catálogo e na conversa. Depois, interrompa a atualização conforme o procedimento autorizado para o ambiente e registre quais itens ficam afetados. Mostre como a equipe reconhece o atraso e quais respostas continuam previstas pela operação. Inclua uma referência cuja informação já estava completa para distinguir o problema localizado de uma indisponibilidade geral.',
        'Na retomada, aplique primeiro a alteração que chegou à fonte e confirme a sequência de versões. Uma mensagem mais antiga pode chegar depois de outra mais recente por atraso de integração. Peça que a prova mostre qual versão permanece vigente e como o suporte reconhece uma atualização fora de ordem. Verifique o resultado na fonte de consulta e no canal. Se o conector faz uma conferência em lote, registre quando terminou e o que foi feito com itens que ainda ficaram incompletos.',
        'Inclua casos abertos durante a interrupção. Dois clientes podem ter solicitado preço para o mesmo produto, com tabelas diferentes. Quando a informação voltar, a operação precisa saber quais consultas aguardam revisão e quais foram encerradas com orientação já autorizada. Peça que a prova mostre o vínculo com o caso anterior. Defina também quem pode reenviar uma resposta e que condição exige perguntar se o comprador ainda quer continuar. A recuperação precisa atualizar dados e resolver trabalho pendente no canal.',
        'Solicite registros suficientes para calcular o tempo de recuperação. Marque a última consulta válida, o primeiro alerta, a atualização confirmada e a conferência pela operação. Em um segundo exercício, peça que outra pessoa repita o procedimento usando o material entregue. Se a solução só volta a funcionar depois de intervenção do prestador, registre a responsabilidade e o horário em que esse apoio está disponível. Use essa evidência para comparar suporte e estimar quanto trabalho interno o contrato pressupõe.',
      ],
    },
    {
      heading: 'Defina métricas por item consultado e por cotação utilizável',
      paragraphs: [
        'Conte consultas que devolvem a referência certa, com unidade correta, preço aplicável e versão confirmada. Se alguma dessas condições falha, indique qual delas. Para cotações com várias linhas, conte também quantas ficaram completas segundo o critério comercial. Uma cotação de dez itens com nove valores corretos pode permanecer sem condição de envio se o décimo item for importante para o comprador. Use as duas medidas para comparar o mecanismo de consulta e o efeito na fila do vendedor.',
        'Em uma simulação, 100 cotações somam 500 linhas. O agente apresenta 475 linhas corretas, ou 95%. Se as 25 diferenças estão distribuídas entre 20 cotações, só 80 cotações começam sem erro de linha. Registre se outras condições, como frete e validade, também passaram na prova antes de chamá-las de completas. Use valores reais da empresa quando comparar fornecedores e mantenha visível a composição da amostra, porque a proporção de listas longas afeta o segundo indicador.',
        'Meça ainda o atraso até a primeira resposta correta depois de uma atualização. Informe a família, a origem do dado e os horários observados. Um tempo médio pequeno pode esconder uma tabela que só volta no dia seguinte. Compare os grupos com diferentes necessidades comerciais e declare o intervalo tolerável em cada um. Registre consultas enviadas enquanto o dado estava sem confirmação e o tempo de revisão gerado. Esses números ajudam a estimar tanto esforço operacional quanto exposição a preço desatualizado.',
      ],
    },
    {
      heading: 'Compare consulta direta, cópia sincronizada e operação manual',
      paragraphs: [
        'Peça que os fornecedores indiquem como cada campo chega à conversa. Uma consulta direta pode funcionar bem para verificar o preço na confirmação, desde que a fonte aguente o volume e responda dentro do tempo aceito. Uma cópia sincronizada pode facilitar a busca por descrições e referências, mas precisa de prazo para refletir mudanças. A revisão manual pode servir a condições comerciais raras. Compare as três atividades dentro do mesmo fluxo e peça que cada orçamento explique em que momento cada fonte será usada.',
        'Solicite uma simulação de custos com a mesma carteira. Imagine 2.000 cotações mensais e quatro linhas por cotação. Uma integração que consulta o preço por linha pode fazer até 8.000 verificações iniciais, antes de alterações ou novas tentativas. Se o ERP oferece consulta conjunta, peça uma estimativa com a carga medida na prova e confira quais condições podem ser agrupadas. Inclua o esforço para atualizar e auditar as cópias que continuarem necessárias para o catálogo.',
        'Diferencie atualização programada e mudança que exige vigência imediata. Uma revisão semanal de descrições pode usar uma rotina diferente de uma alteração de preço negociada para entrar às 9h. Para cada classe, compare a janela máxima tolerável e o custo de reduzir o atraso. Em vez de exigir atualização instantânea para todo o catálogo, informe as mudanças que afetam contratos, totais ou disponibilidade e teste se a alternativa cobre esses casos.',
        'Inclua o trabalho de suporte na comparação. Pergunte quem investiga uma divergência, quem confirma a tabela e qual evidência é suficiente para encerrar a ocorrência. Um cadastro pode exigir correção na fonte. Em outro caso, o conector pode precisar retomar uma atualização interrompida. Peça que cada proposta estime as horas internas e as atividades de manutenção incluídas no preço. Simule um mês com campanha intensa para ver como quantidade de mudanças, revisão e consultas afetam o custo recorrente.',
      ],
    },
    {
      heading: 'Converta os testes em condições comerciais de aceite',
      paragraphs: [
        'Na homologação, registre para cada caso a referência consultada, a tabela, a quantidade, o horário e a saída esperada. Defina quem pode confirmar a versão e em que tela ou registro a equipe consulta a evidência. Inclua uma compra em que o valor não pode ser apresentado por falta de contexto. A prova passa quando o comportamento observado corresponde à regra aprovada e a operação consegue identificar a razão de um encaminhamento. Combine quem decide quando o teste exige participação de outra equipe.',
        'Classifique erros pelo efeito. Um preço de outra tabela, uma embalagem incorreta ou um valor vencido apresentado como vigente exigem correção e reteste antes da liberação do grupo afetado. Uma diferença na ordem de apresentação pode receber outra prioridade. Defina também um limite de atraso por classe de atualização. Ao conferir a condição, use horários e fontes acordados no contrato. Se o resultado depende de uma grande promoção ainda não representada na amostra, programe a rodada que cobrirá essa carga.',
        'Peça que o fornecedor entregue um roteiro que alguém da empresa consiga repetir. Um supervisor deve poder publicar uma mudança controlada, consultar no canal e verificar o resultado no sistema comercial sem depender de uma explicação verbal. Se a atualização envolve outro prestador, indique quem confirma a chegada em cada etapa. Inclua os horários de suporte e uma orientação sobre o que pode continuar disponível quando uma família de produtos apresenta atraso. O aceite deve cobrir tanto o caminho normal quanto a recuperação.',
      ],
    },
    {
      heading: 'Prepare a primeira campanha após a entrada em operação',
      paragraphs: [
        'Escolha uma família de produtos cuja regra comercial a equipe consiga conferir antes, durante e depois da campanha. Nomeie quem publica o cadastro, quem aprova a tabela e quem acompanha a disponibilidade no WhatsApp. Registre os horários de vigência e combine uma consulta de referência em cada transição. A documentação do Dynamics 365 Commerce ilustra como condições de preço podem variar por catálogo, canal ou grupo. Use as dimensões que existem no seu sistema para selecionar os casos da primeira campanha e identificar quem valida cada condição.',
        'Inclua uma amostra de conversas abertas durante o período anterior. Uma cotação já identificada pode ter prazo próprio, enquanto uma pergunta sem proposta formal pede atualização no momento da compra. A pessoa responsável deve conseguir localizar os dois estados e determinar a regra antes de liberar respostas automáticas. Se o comprador incluir um código de outra família depois do início da promoção, confirme como o sistema calcula o total e quais linhas precisam de nova consulta. Use a evidência para ajustar o roteiro antes da próxima campanha.',
        'Combine como a equipe atua quando percebe a primeira diferença. Defina que produtos ou tabelas ficarão sob revisão e que outras respostas poderão continuar. Um operador deve conseguir consultar o último dado confirmado, identificar a condição comercial em discussão e encaminhar a pendência com o contexto suficiente. Na retomada, confira o produto afetado e um semelhante que não recebeu alteração. Registre quem decide voltar a responder e quanto tempo a operação levou entre notar o problema e confirmar a correção.',
      ],
    },
    {
      heading: 'Prepare um pedido de proposta com dados de teste reutilizáveis',
      paragraphs: [
        'Leve um catálogo fictício com duas embalagens, uma campanha de horário limitado, duas tabelas e uma referência já descontinuada. Informe o sistema em que cada dado é publicado, a frequência de mudanças e o intervalo que a operação consegue tolerar. Descreva como preço e quantidade chegam ao pedido. Peça que cada fornecedor use a mesma sequência, registre a evidência na fonte e mostre o comportamento quando ainda falta informação. Assim, a comparação fica baseada na atualização que o comprador realmente observaria.',
        'Separe os entregáveis da descoberta e da implantação. Na descoberta, peça um mapa de fontes, versões e pontos em que falta confirmação. Na implantação, solicite os testes automatizados ou manuais previstos, as instruções de recuperação e os papéis autorizados a publicar mudanças. Peça uma projeção para campanha comum e outra com alterações frequentes. Compare o custo estimado com a quantidade de cotações utilizáveis e o tempo que a área dedica à revisão. O resultado deve dar condições para decidir qual fluxo entra primeiro no atendimento.',
        'Na entrega, peça que a área comercial consiga repetir uma troca de tabela e que a equipe de suporte consiga investigar uma falha sem depender do autor da configuração. Identifique onde ficam os registros, quais testes devem ser reaplicados quando a fonte muda e quanto tempo o prestador ficará disponível na primeira publicação. Reserve um ponto de revisão após a campanha e confira preço, prazo de atualização e volume de encaminhamentos. Essas medidas permitem decidir se a configuração pode receber outra carteira ou precisa de ajuste.',
      ],
    },
  ],
  faqs: [
    { question: 'Como verificar se o preço do WhatsApp está atualizado?', answer: 'Compare a resposta com a fonte comercial autorizada no mesmo horário e contexto de produto, embalagem, cliente e quantidade.' },
    { question: 'Como testar uma promoção com horário de início?', answer: 'Consulte antes, durante e depois da vigência. Confira também cotações em aberto e o valor calculado na confirmação da compra.' },
    { question: 'O que testar quando a sincronização atrasa?', answer: 'Confira a resposta ao cliente, o encaminhamento e a recuperação com dados atualizados. Verifique os casos abertos durante a interrupção.' },
  ],
  cta: {
    title: 'Quer testar seu catálogo e seus preços no WhatsApp?',
    text: 'Apresente à Tironi Tech as fontes, as tabelas e as mudanças que sua operação precisa refletir. Podemos ajudar a definir os testes e o escopo da integração.',
    label: 'Conversar sobre meu catálogo no WhatsApp',
  },
  sources: [
    { label: 'Microsoft Learn — regras de preço e acordos comerciais por grupo', url: 'https://learn.microsoft.com/en-us/dynamics365/commerce/tasks/category-pricing-rules-trade-agreements' },
  ],
};
