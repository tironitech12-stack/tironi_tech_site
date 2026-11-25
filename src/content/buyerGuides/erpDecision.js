export const erpDecision = {
  slug: 'integrar-erp-criar-modulo-ou-trocar-sistema',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Compare integração, módulo sob medida e troca de ERP com uma matriz de decisão, um exemplo de pedidos e critérios para pedir orçamento.',
  keywords: ['integrar o ERP', 'módulo sob medida para ERP', 'trocar de ERP', 'orçamento de integração ERP'],
  emphasis: 'integrar o ERP',
  intro: 'Vale integrar o ERP quando ele já executa corretamente a operação central e o gargalo está na passagem de informação entre ferramentas. Um módulo sob medida faz sentido quando falta uma regra ou etapa inteira, como aprovação de descontos por filial. Considere trocar de sistema se a limitação afeta estoque, faturamento e outras funções que a empresa depende do ERP para executar. Antes de pedir orçamento, teste a alternativa mais simples em um fluxo real e nas exceções que definem seu custo.',
  takeaways: [
    'Compare as três opções usando o mesmo pedido e as mesmas exceções.',
    'Defina onde nasce o pedido, quem pode alterá-lo e onde fica o status fiscal.',
    'Peça um orçamento com dependências, critérios de aceite e custo de sustentação.',
  ],
  visual: {
    title: 'Do pedido comercial ao faturamento',
    labels: ['CRM registra a oportunidade', 'Regra valida e aprova o pedido', 'ERP confirma o recebimento', 'Operação acompanha as divergências'],
    caption: 'Exemplo de fronteiras entre os sistemas. A mesma tela pode reunir esses estados sem transferir a autoridade sobre estoque e faturamento.',
  },
  sections: [
    {
      heading: 'Como distinguir uma falha de passagem de uma limitação do ERP',
      paragraphs: [
        'Siga um pedido recente desde o momento em que o cliente aceita a proposta até o faturamento. Anote quem copiou os dados, quais campos mudaram, onde o pedido esperou e qual registro encerrou a operação. Durante esse levantamento, mantenha à vista três objetos distintos: a proposta comercial aprovada, a solicitação de pedido transmitida e o pedido criado no ERP. Eles podem representar a mesma compra e, mesmo assim, ter versões, responsáveis e momentos de confirmação diferentes.',
        'Em uma falha de passagem, o ERP já tem campos e regras para receber o pedido certo. O vendedor cadastra a venda no CRM, alguém copia cliente e itens para o ERP e outra pessoa compara os resultados quando há divergência. Se a aprovação, o preço e a disponibilidade funcionam quando a solicitação chega corretamente, a primeira hipótese de projeto é automatizar a entrega dos dados, receber um identificador do ERP e devolver o resultado ao processo comercial.',
        'Em uma limitação funcional, o ponto de decisão carece de um lugar próprio. Por exemplo, todas as propostas estão no CRM e todos os pedidos no ERP, mas ninguém consegue demonstrar qual diretor aprovou uma combinação de margem baixa e entrega prioritária. A planilha que controla o aceite contém um requisito de negócio. Só transferir seus campos entre sistemas preservaria a falta de autorização. Nesse caso, investigue a configuração nativa antes de estimar uma etapa adicional de software.',
        'A substituição ganha força quando as restrições se espalham pelo núcleo da operação. Uma empresa pode até construir uma tela externa para pedidos, mas continua sem fechar o estoque por unidade, sem exportar dados completos e sem um caminho sustentado de atualização do ERP. Avalie quantas capacidades críticas têm esse perfil. Uma limitação isolada pode caber num módulo. Várias dependências centrais, cada uma apoiada em uma exceção manual, podem tornar a extensão mais cara de manter do que a migração.',
      ],
    },
    {
      heading: 'Uma matriz para decidir com evidências',
      paragraphs: [
        'Monte a matriz em uma reunião com vendas, expedição, financeiro e quem mantém o ERP. O participante que conhece o pedido deve trazer exemplos. O responsável pelo sistema deve verificar se a versão instalada aceita a operação. A liderança escolhe quais riscos são aceitáveis. Registre os campos que definem a decisão, como capacidade nativa, acesso aos dados, tempo de recuperação e impacto no fechamento. Para cada linha, acrescente o documento ou a execução que sustenta a avaliação.',
        'Classifique cada opção como demonstrada, dependente de validação ou eliminada. Uma demonstração com pedido genérico vale como evidência de que a conexão existe. Para confirmar a aderência, peça um segundo teste com uma regra que a empresa realmente use, como preço por cliente e filial. Foram usados dados de teste? Qual versão do ERP respondeu? Houve aprovação simulada? Anotar essas condições evita usar como prova de produção algo que só funcionou com um usuário administrador e uma tabela simplificada.',
        'Trate requisitos essenciais como condições para seguir. Se uma interface só funciona quando alguém permanece conectado em uma estação, pergunte se esse modelo é compatível com a janela de operação e o suporte. Se a empresa precisa recuperar pedidos sem acesso amplo de escrita, peça um perfil próprio para a integração. Evite calcular uma nota média que esconda um impedimento crítico. Uma opção pode ter aparência excelente em preço e prazo e, ainda assim, ficar fora da concorrência por não permitir recuperar vendas confirmadas.',
        'Reserve uma coluna para o custo de desistir. Um teste de integração com uma filial e um único tipo de pedido pode ter saída reversível. Um módulo que muda quem libera mercadoria já exige plano para manter fila, histórico e responsabilidade se a iniciativa parar. A troca do ERP precisa considerar extrações, formação de usuários e o período em que versões ou sistemas coexistem. Quanto maior o impacto de abandonar a hipótese, menor deve ser o compromisso financeiro antes de comprová-la.',
      ],
      bullets: [
        'Integração: prove que o ERP registra corretamente um pedido equivalente e dispõe de uma interface sustentada.',
        'Módulo: prove onde a regra ausente será executada e como o ERP recebe seu resultado.',
        'Substituição: prove quais funções críticas deixam de atender e como os dados e a operação poderão migrar.',
      ],
    },
    {
      heading: 'Exemplo ilustrativo de uma distribuidora com duas filiais',
      paragraphs: [
        'Imagine que a distribuidora receba pedidos pelo time comercial. O CRM guarda a proposta aceita, mas um assistente remonta o pedido no ERP. A filial Sul permite expedição parcial, enquanto a filial Norte exige validação central antes de separar itens. A diretoria cogita substituir o ERP após um mês de reclamações sobre atrasos. Antes da decisão, a empresa reúne quinze exemplos de pedidos de entrega simples e mais cinco casos com divergências de estoque, desconto excepcional ou troca de filial.',
        'Ao comparar os registros, a equipe identifica que alguns pedidos ficaram parados após a aprovação comercial porque os códigos de produto do CRM tinham sido salvos sem a unidade de venda. Uma caixa e uma unidade apareciam com a mesma descrição amigável. O ERP rejeitava os registros incompletos, mas o CRM não recebia o motivo. A regra de estoque se mostrou adequada no ambiente de teste quando recebeu o código e a unidade corretos. Isso fortaleceu a hipótese de integração para o trecho de entrada do pedido.',
        'Em outros casos da filial Norte, o problema era diferente. O pedido existia corretamente no ERP, mas a liberação dependia de um e-mail que autorizava separar itens antes de completar a carga. Ao analisar o processo, a gerente identificou que só metade das mensagens citava o identificador do pedido. A decisão agora exige duas perguntas: o ERP consegue registrar a liberação no lugar certo ou vale usar um módulo de aprovação que registre autoridade, evidência e validade antes de devolver o resultado?',
        'A empresa pode comparar propostas em dois lotes. No primeiro, contrata a validação de códigos, o envio de pedidos e o retorno do motivo de rejeição. No segundo, avalia a regra de expedição e as permissões com os responsáveis da filial Norte. Se o primeiro pacote reduzir a redigitação, isso basta para justificar sua entrega isolada. Se o segundo revelar que várias regras centrais estão inacessíveis, a empresa terá evidência mais precisa para estudar a substituição. O exemplo é didático e seus números descrevem um cenário hipotético.',
      ],
    },
    {
      heading: 'O que escrever no escopo de uma integração',
      paragraphs: [
        'Defina qual evento cria uma solicitação. No exemplo, o CRM só a emite após a proposta atingir um estado aceito e os dados mínimos passarem pela validação. O contrato técnico precisa indicar o identificador permanente da solicitação, a filial, os itens, as quantidades, a unidade de venda e a origem dos dados de preço. Se a proposta mudar depois do envio, a integração deve distinguir alteração controlada de uma nova compra. O fornecedor precisa explicar como cada sistema reconhece essa mudança.',
        'Mapeie os retornos que o comercial precisa ver. Uma solicitação enviada ainda pode estar aguardando confirmação. Um erro de validação fica disponível para corrigir o dado. Se a conexão cair e o sistema não souber se houve gravação, a próxima tentativa deve consultar o estado do pedido antes de repetir a ação. Especifique quem recebe cada estado, o que pode corrigir e onde encontrar o identificador do ERP. Disparar o envio é uma entrega técnica. Acompanhar o resultado faz parte do fluxo que o comprador contrata.',
        'Peça que o orçamento descreva o mapeamento, o mecanismo de transmissão e o acompanhamento após a entrega. Pergunte qual volume o ambiente suporta nos horários de pico e como o fornecedor vai testar essa capacidade. Em ambiente compartilhado, defina quais operações podem ficar em fila e quais precisam avisar a equipe imediatamente. Inclua o acesso documentado aos registros técnicos com filtros que ajudem a encontrar um pedido específico e evitem exibir dados comerciais além do necessário.',
        'O aceite deve incluir uma segunda entrega, propositalmente, da mesma solicitação. O teste de repetição só passa se houver um único pedido no ERP e se a equipe conseguir identificar por que o envio foi repetido. Valide também cliente sem cadastro, unidade de medida incompatível e retorno de erro após alteração da proposta. Esse conjunto revela se a integração dá suporte à resolução do problema no dia a dia ou se obriga a operação a abrir uma ocorrência para cada divergência pequena.',
      ],
    },
    {
      heading: 'Onde a tradução entre os sistemas deve acontecer',
      paragraphs: [
        'Separe o significado comercial do código que cada ferramenta usa. Um status como “fechado” pode indicar que a proposta foi aceita no CRM, enquanto no ERP a palavra descreve um pedido que já não admite alterações. Traduzir os dois para um único campo chamado status elimina essa diferença. No escopo da integração, peça a associação explícita entre estado original, estado interno da solicitação e resultado que o usuário verá. Essa associação precisa aceitar que os três valores fiquem diferentes durante parte do trabalho.',
        'No exemplo da distribuidora, uma tabela mantém o código comercial, o identificador no ERP e a unidade associada à filial. A integração traduz a venda para o formato do ERP e conserva a chave da solicitação para rodar a conferência depois. Se a unidade não for conhecida, a fila mostra a situação para quem corrige o cadastro. Ela também registra qual regra estava em uso quando o pedido foi enviado. Assim o suporte consegue reproduzir uma decisão antiga mesmo após a tabela mudar.',
        'Uma camada de tradução ajuda a isolar diferenças de vocabulário e de modelo, como descreve a Microsoft no padrão de camada anticorrupção. Num orçamento, pergunte onde ela roda, como suas tabelas são atualizadas e quem atende quando um valor novo aparece. Uma camada dessas só compensa se a equipe consegue manter as regras sem espalhá-las por fórmulas e conectores. Documente as regras que pertencem à integração e mantenha decisões de estoque, aprovação e faturamento com o serviço que tem autoridade para executá-las.',
        'Escolha duas verificações para essa fronteira. Na primeira, mude a descrição de um item preservando seu identificador e confirme se o pedido continua reconhecível. Na segunda, envie uma venda com unidade que tenha o mesmo nome em dois catálogos e confirme que a escolha usa o código e a filial corretos. Declare o resultado esperado em cada sistema. Com esses testes, uma revisão futura da tabela de tradução tem critérios claros para preservar os pedidos anteriores.',
      ],
    },
    {
      heading: 'Quando um módulo sob medida tem fronteiras claras',
      paragraphs: [
        'Considere um módulo quando o processo precisa de uma decisão própria, com dados, estados e regras que o ERP não acomoda satisfatoriamente. No exemplo da filial Norte, o módulo pode conservar o pedido associado, registrar os itens autorizados, indicar o aprovador e emitir o resultado para a expedição. Estoque e faturamento permanecem com os responsáveis atuais. Essa divisão precisa estar explícita na proposta para impedir que a nova interface vire uma segunda fonte de verdade.',
        'Ao pedir orçamento, compare primeiro o que o fornecedor consegue configurar dentro do ERP. Uma regra nativa pode oferecer trilha suficiente e reduzir o número de telas, desde que seja possível testar suas permissões, alterações e exportações. Se a configuração pede modificações difíceis de atualizar, peça uma segunda estimativa com um módulo externo. O mesmo plano de demonstração serve para comparar ambas as opções, inclusive o instante em que alguém altera uma quantidade após a aprovação.',
        'Escreva quem pode aprovar, em que ordem e o que acontece quando ninguém responde. Uma autorização pode expirar se o estoque mudar ou se o cliente revisar a proposta. Determine se a equipe pode conceder exceções e como o usuário descobrirá que a aprovação perdeu validade. Inclua também o cenário em que a mesma pessoa está nas duas funções do fluxo. A duplicação de papéis afeta a auditoria mesmo quando o sistema apresenta botões separados para solicitar e aprovar.',
        'Para medir a utilidade do módulo, compare o tempo entre solicitação e decisão, a quantidade de autorizações sem registro e a proporção de casos que voltam para correção. Conte também as vezes em que a operação precisou voltar ao ERP ou à caixa de e-mail depois de abrir o módulo. Se o indicador melhora só porque a equipe deixa de registrar exceções, a solução perdeu visibilidade. Uma amostra manual, com dono e período definidos, ajuda a conferir o significado dos dados.',
      ],
    },
    {
      heading: 'Como avaliar uma troca de ERP sem depender de uma apresentação',
      paragraphs: [
        'A proposta de substituição precisa demonstrar as capacidades que pesam na decisão. Para cada uma, leve um cenário real com requisitos e regras. Observe se compras aprova a entrada de material corretamente, se a transferência entre filiais preserva identificação e estado e se o financeiro consegue conferir um pedido com desconto, devolução e entrega parcial. Quem usa o ambiente diariamente deve participar da demonstração e registrar a evidência em lugar acessível à equipe.',
        'Peça uma estratégia para migrar em etapas quando houver uma fronteira segura. A Microsoft descreve a substituição gradual de capacidades como uma forma de manter o legado operando enquanto novas partes assumem responsabilidades. Esse padrão faz sentido se o novo e o antigo tiverem interfaces utilizáveis e se a equipe puder indicar qual versão é responsável por cada operação. Uma fronteira obscura pode esconder gravações concorrentes e tornar o retorno mais difícil que uma migração programada.',
        'A estrutura de exportação tem peso semelhante ao da tela de cadastro. Teste se clientes, itens e pedidos saem com identificadores, datas e relações que permitam conferir totais. Pergunte quais registros ficam no histórico e como a equipe os consultará depois que o sistema deixar de receber transações. Ao planejar importação, documente transformações como mudança de unidade ou consolidação de filial. Ao testar, compare grupos com regras distintas para evitar que um saldo total correto esconda dados incorretos em uma filial.',
        'Em uma virada, escreva quando novas solicitações deixam de entrar no ambiente anterior, como pedidos em trânsito serão tratados e quem decide cancelar a mudança. O plano de retorno precisa indicar o estado a partir do qual os dois sistemas já podem divergir. Se houver dados criados no novo ambiente, como serão recuperados no antigo? Se o fornecedor puder apenas restaurar uma cópia anterior, a operação precisa saber como evitar a perda de pedidos no intervalo.',
      ],
    },
    {
      heading: 'Como comparar os números de três propostas',
      paragraphs: [
        'Escolha um horizonte comum e peça a todos os fornecedores o custo para o mesmo processo. Na integração, inclua descoberta técnica, conectores, licenças da interface, hospedagem, suporte e adaptação a alterações dos sistemas. No módulo, some o custo da regra de negócio, telas, permissões, testes, implantação e manutenção. Na troca de ERP, inclua configuração, licenças, migração de dados, treinamento e tempo da equipe. Registre condições de contratação e premissas de volume que façam o custo mudar.',
        'Use números aproximados de processo quando a empresa ainda não tem contabilidade detalhada. Em um cenário ilustrativo com 900 pedidos mensais, se a redigitação ocupar quatro minutos por pedido, o esforço inicial é 60 horas mensais. Se a integração eliminar a digitação em 70% deles, são 42 horas brutas potencialmente liberadas. Se o tratamento de 90 exceções acrescentar dois minutos a cada caso em relação ao processo antigo, retire três horas. Avalie ainda supervisão, retomada de falhas e treinamento. O resultado hipotético de 39 horas líquidas serve para dimensionar a investigação.',
        'Tempo liberado pode diminuir fila, permitir que o time absorva mais trabalho ou reduzir uma despesa comprovável. Só trate um valor como economia financeira quando houver relação observável com hora extra, contratação, fornecedor ou outro desembolso. Em uma decisão de ERP, a quantidade de pedidos que deixam de atrasar pode ser mais valiosa que a mão de obra recuperada. O comprador pode estimar o efeito de cada indicador separadamente e depois testar se a mesma perda está sendo somada duas vezes.',
        'Faça pelo menos um cenário de baixa adoção e outro de integração mais complexa. Se o ERP limitar consultas no pico, peça o efeito na fila. Se a empresa ainda terá que revisar manualmente metade dos pedidos por falta de cadastro, pergunte qual é o retorno nessa condição. Nas propostas mais amplas, separe os custos que ocorrerão mesmo sem o projeto, como uma renovação já contratada. Esse cuidado torna o comparativo mais útil do que uma estimativa única com ar de precisão.',
      ],
    },
    {
      heading: 'Quais testes precisam aparecer na proposta',
      paragraphs: [
        'O teste do caminho padrão deve começar numa venda aprovada e terminar com pedido registrado, identificador devolvido e acompanhamento disponível. Prepare evidências que possam ser revistas por quem não estava na demonstração. Se a filial ou a unidade do item afetar a operação, use os mesmos campos que entram na rotina real. Um vídeo de demonstração pode ajudar a explicar a interface. Para aceitar integração, registre também o estado visto em cada sistema e o instante em que os dados mudam.',
        'No caminho de exceção, confirme quem consegue corrigir o dado, o prazo de intervenção e o que impede ações duplicadas. Use um pedido cuja proposta mudou após a aprovação, um item com quantidade acima da disponível e um retorno interrompido depois da gravação. Para o módulo, insira um caso que requeira segunda autorização. Para a substituição, inclua pelo menos uma rotina do fechamento que use dados migrados. Você testa desde cedo as partes que podem afetar faturamento, expedição ou reconciliação.',
        'Defina o conjunto de testes com a operação e marque quais falhas impedem uso. Duplicar pedido financeiro e perder a identificação de uma autorização podem impedir a liberação da entrega. Uma mensagem pouco clara pode ser tratável dentro de um prazo estipulado se houver forma segura de trabalhar. Registre o que entra na garantia, quem corrige inconsistências de cadastro e como serão aceitas melhorias depois do piloto. Separe critérios de homologação de metas de resultado para que a equipe possa avaliar o que controla antes e depois da virada.',
        'O encerramento da homologação deve deixar um registro que o comprador possa inspecionar. Peça uma lista com caso, resultado esperado, status observado, evidência, responsável e decisão. Se houver desvio aceito para o piloto, marque qual volume ou filial ele afeta e quando a equipe deverá revê-lo. Num projeto com várias entregas, vincule a aprovação formal à versão testada dos conectores e das regras. Uma mudança posterior exige nova verificação da parte afetada.',
      ],
    },
    {
      heading: 'O que levar para uma conversa de orçamento',
      paragraphs: [
        'Leve um mapa simples de como a venda nasce, passa por conferência e entra no ERP. Acrescente a versão do ERP, a ferramenta que origina pedidos, as filiais, os horários de pico e quem responde por estoque, preço e faturamento. Relacione duas ou três ocorrências que tomaram mais tempo da equipe. A documentação de API e integrações existentes ajuda na avaliação inicial. Quando o acesso técnico ainda depende do fornecedor do ERP, informe essa dependência no pedido de proposta.',
        'Escolha um objetivo observável. Você pode querer parar de refazer a digitação, comprovar a aprovação ou poder substituir a ferramenta antiga sem perder consulta de histórico. Descreva a primeira etapa com volume aproximado e as ações que precisam continuar manuais. Organize os dados necessários em exemplos minimizados para a conversa inicial. Códigos fictícios e valores alterados bastam quando o que interessa é o formato, a relação de itens ou a regra de aprovação.',
        'Peça que a proposta devolva a recomendação técnica com a prova ainda necessária, o fluxo a ser entregue, as dependências do cliente e a forma de estimar ajustes. Em uma descoberta paga, combine entregáveis verificáveis, como mapa de interfaces, execução de um pedido de teste e estimativa por fase. A descoberta pode invalidar a primeira hipótese e poupar um contrato mal dimensionado. Deve produzir informação que sirva à decisão mesmo que a empresa escolha outro caminho.',
        'Combine como acompanhar o primeiro mês de operação. Defina quem vai comparar volumes e exceções, qual a frequência de revisão e quando a equipe decidirá ampliar a entrega. Esse acompanhamento é especialmente valioso na integração de ERP porque uma solução pode passar no teste inicial e encontrar particularidades de fechamento, feriados ou catálogos que só aparecem com o uso. O custo de ajustar essas condições precisa estar visível na negociação.',
      ],
    },
  ],
  faqs: [
    {
      question: 'É melhor integrar o ERP ou desenvolver uma tela própria para pedidos?',
      answer: 'Integre se as ferramentas atuais já coletam o que o ERP precisa e a dificuldade é transferir os dados e confirmar o resultado. Uma tela ou módulo próprio vale investigar quando a equipe precisa registrar uma etapa ausente, como aprovar a divisão de um pedido entre filiais, com permissões e histórico.',
    },
    {
      question: 'Como começar se o fornecedor ainda não confirmou acesso à API?',
      answer: 'Peça uma descoberta técnica com acesso de teste e dois pedidos representativos. Confira se existe uma interface documentada para consulta e gravação, quais condições comerciais se aplicam e como obter erro e confirmação. Se a interface não suportar o fluxo, avalie uma importação documentada ou redimensione a proposta.',
    },
    {
      question: 'Quando a troca de ERP começa a fazer sentido?',
      answer: 'Quando limitações comprovadas comprometem várias funções centrais e as alternativas de configuração, integração e extensão deixam a empresa com custos ou riscos recorrentes difíceis de administrar. A proposta de substituição precisa explicar migração, continuidade, validação e recuperação.',
    },
    {
      question: 'Que informação o fornecedor precisa para estimar a primeira fase?',
      answer: 'Apresente o percurso de um pedido, a versão do ERP, as interfaces conhecidas, volumes, filiais e exemplos de exceção. Indique a condição que vale como entrega concluída e quem aceita o resultado. Isso permite estimar a primeira fase e apontar o que depende de descoberta.',
    },
  ],
  cta: {
    title: 'Seu processo cabe em uma integração, um módulo ou numa troca de sistema?',
    text: 'Conte à Tironi Tech onde o pedido começa, qual ERP sua empresa usa e em que etapa a equipe precisa intervir. Use a conversa para identificar a primeira hipótese que vale testar.',
    label: 'Apresentar meu fluxo e avaliar as opções',
  },
  sources: [
    { label: 'Microsoft Azure Architecture Center — substituição gradual de sistemas legados', url: 'https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig' },
    { label: 'Microsoft Azure Architecture Center — camada de tradução entre sistemas', url: 'https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer' },
  ],
};
