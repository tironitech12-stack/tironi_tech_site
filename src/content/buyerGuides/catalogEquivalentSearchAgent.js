export const catalogEquivalentSearchAgent = {
  slug: 'agente-ia-pesquisa-catalogo-b2b',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Teste agentes de IA para encontrar produtos equivalentes em catálogos B2B com requisitos técnicos, dados de origem e revisão comercial.',
  keywords: ['agente de IA para localizar produtos equivalentes', 'busca de equivalentes no catálogo B2B', 'teste de equivalência de produtos com IA'],
  emphasis: 'agente de IA para localizar produtos equivalentes',
  intro: 'Para testar um agente de IA para localizar produtos equivalentes, entregue pedidos fictícios com requisitos claros, opções parecidas e fichas incompletas. Confira quais candidatos ele encontra, que atributos sustentam a comparação e quando encaminha a decisão a um especialista.',
  takeaways: [
    'Defina os requisitos que autorizam sugerir uma alternativa.',
    'Avalie a busca de candidatos e a evidência de compatibilidade.',
    'Meça o esforço de revisão e a qualidade das opções incluídas na cotação.',
  ],
  sections: [
    {
      heading: 'Defina o que torna um produto equivalente para aquela compra',
      paragraphs: [
        'Na **busca de equivalentes no catálogo B2B**, uma alternativa precisa cumprir os requisitos relevantes para a aplicação pretendida. Um comprador pode procurar uma peça de reposição, um item que falta no estoque ou uma embalagem mais adequada ao consumo. Essas situações podem exigir critérios diferentes. Comece pelas perguntas que o televendas e a engenharia já fazem. Registre quais campos são indispensáveis, quais podem variar e quem decide quando uma adaptação é aceitável. Use essa definição como referência tanto para orçar quanto para testar.',
        'Imagine um distribuidor industrial que oferece fitas para operações de embalagem. Dois rolos podem ter a mesma largura e comprimentos próximos, mas divergir na superfície indicada e na temperatura de aplicação. Uma descrição comercial que menciona as mesmas palavras não comprova que ambos servem ao processo do cliente. Peça que o agente mostre a referência de cada atributo e mantenha as lacunas visíveis. Quando o comprador informou apenas largura e quantidade, a resposta pode solicitar a superfície ou encaminhar ao especialista conforme a condição definida.',
        'Separe equivalência técnica, disponibilidade comercial e preferência. Uma alternativa compatível pode estar indisponível. Um produto em estoque pode exigir outro aplicador. Uma marca preferida pode ser relevante se o comprador a exige, e flexível se foi citada para identificar o formato. Defina em que etapa cada condição será avaliada e quem autoriza uma exceção. Isso evita aceitar uma demonstração que só prioriza o produto mais fácil de entregar e deixa para a equipe descobrir a incompatibilidade depois.',
      ],
    },
    {
      heading: 'Prepare uma amostra que inclua candidatos quase iguais',
      paragraphs: [
        'Escolha um item conhecido, outro que pode ser substituído sob condição e um terceiro para o qual não existe alternativa comprovada. Para cada entrada, liste a referência original, os requisitos e a evidência dos candidatos que devem ser considerados. Acrescente um produto da mesma família que falhe em um único requisito. Um bom teste mostra se o agente consegue encontrar a alternativa e preservar a diferença que impede recomendar um item parecido. Peça que a equipe de produto valide os casos antes de entregar a amostra aos fornecedores.',
        'Inclua diferentes maneiras de pedir a mesma coisa. Um comprador pode usar código antigo, descrição interna, abreviação ou parte de uma ficha técnica. Em outra rodada, altere só a restrição que determina a aplicação. Compare a lista de candidatos e confira quais opções deixam de aparecer. Se o fornecedor inclui sinônimos ou atributos manuais, registre o esforço para manter esses dados quando o catálogo muda. A prova deve indicar também o trabalho necessário para tratar itens que chegaram depois da primeira configuração.',
        'Preserve os casos em que precisa pedir complemento. A descrição pode informar que a fita será aplicada em caixas frias sem esclarecer a temperatura da superfície no momento da aplicação. Especifique o dado que muda a escolha e a pessoa que pode confirmá-lo. Teste como o agente mantém as outras características já obtidas quando o cliente responde mais tarde. Se a ficha não oferece evidência suficiente, confira se o vendedor recebe a dúvida e pode continuar sem receber uma equivalência já tratada como definitiva.',
      ],
    },
    {
      heading: 'Normalize as unidades sem perder a medida original',
      paragraphs: [
        'Peça que a demonstração preserve o valor apresentado pelo fabricante e mostre a conversão usada na comparação. Uma fita informada como 50 milímetros pode aparecer em outro cadastro como 5 centímetros. A largura coincide, mas essa igualdade precisa ser confirmada separadamente do comprimento e da unidade comercial. Uma descrição que diz “50 x 100” pode significar largura em milímetros e comprimento em metros. Se o cabeçalho da tabela foi perdido na importação, o agente deve pedir revisão em vez de atribuir unidades por conta própria.',
        'Separe conversão exata, arredondamento e tolerância de fabricação. Em uma amostra fictícia, 2 polegadas correspondem a 50,8 milímetros. Se o aplicador foi validado para uma faixa de 49 a 51 milímetros, a largura pode atender a esse requisito. Se o máximo informado é 50 milímetros, arredondar o valor mudaria a decisão. Solicite que o especialista confirme os limites e a operação aplique o teste a produtos no centro, na borda e fora da faixa. Guarde os valores originais para que outra pessoa consiga revisar a conclusão.',
        'Inclua uma consulta para 48 rolos e duas opções comerciais, uma vendida em caixas com seis e outra em caixas com dez. A compatibilidade do rolo pode estar comprovada nos dois casos e a quantidade que vai para a cotação ainda exigir decisão. Peça que a saída mostre quantos rolos serão entregues, se existe quantidade excedente e quem pode confirmar a compra em embalagem fechada. Avalie a comparação técnica separadamente do cálculo comercial, pois um erro na unidade de venda pode invalidar uma cotação tecnicamente bem fundamentada.',
      ],
    },
    {
      heading: 'Confira a evidência de cada atributo antes de aceitar a recomendação',
      paragraphs: [
        'Em vez de pedir uma nota única de similaridade, solicite uma comparação que ligue cada requisito a uma ficha ou registro autorizado. Para uma fita de embalagem, a empresa pode verificar suporte, adesivo, largura, comprimento e temperatura de aplicação. A temperatura de serviço depois da aplicação pode ser outra medida. Inclua duas fichas que usam termos próximos para esses campos e confirme que o agente preserva o significado de cada uma. Uma citação deve apontar para a tabela ou trecho que sustenta a afirmação decisiva.',
        'Teste uma ficha do fabricante que contradiz a descrição comercial. A descrição pode ter sido escrita para uma embalagem antiga ou combinar variantes da mesma família. Defina com a equipe qual fonte prevalece para cada campo e como reconhecer a versão vigente. Peça que o fornecedor mostre quando a divergência afeta a comparação e a pessoa que pode confirmá-la. Se existe uma substituição homologada entre dois códigos, peça também sua vigência, o contexto de uso e a referência da decisão. Uma aprovação para uma linha de embalagem pode deixar outras aplicações em aberto.',
        'Faça a prova com uma ficha que apresenta os limites de uma família em tabela. A largura pode estar no cabeçalho e o tipo de adesivo em outra coluna. Peça que a demonstração associe o dado à variante exata. Depois, altere uma condição da consulta para exigir outra linha. Confira se o agente recupera o trecho pertinente e preserva o código correspondente. Registre os casos em que a informação faltou ou a leitura foi ambígua, pois essas diferenças determinam o trabalho de preparação do catálogo e de revisão pelo especialista.',
      ],
    },
    {
      heading: 'Avalie a busca de candidatos separadamente da decisão de equivalência',
      paragraphs: [
        'Escolha uma consulta cujo produto indicado pela equipe tenha uma descrição diferente da peça original. Se o agente encontra apenas nomes parecidos, verifique se o catálogo oferece atributos, códigos anteriores ou referências autorizadas que ligam os itens. Compare quantos candidatos esperados aparecem e em que posição. Em outra rodada, use um candidato parecido que falha num requisito obrigatório. A solução pode encontrá-lo e mostrar por que ele foi descartado. O teste precisa distinguir uma busca incompleta de uma decisão de compatibilidade incorreta.',
        'Pode haver também mais de um candidato válido. Peça que a equipe de produto explique quais opções são aceitáveis e quando a escolha muda conforme o cliente. Na cotação, apresente os requisitos atendidos e as diferenças que ainda podem influenciar a compra. Se o comprador tem uma preferência de marca ou embalagem, indique se ela foi tratada como exigência ou como critério de ordenação. Compare o que acontece ao retirar a preferência, mantendo os requisitos técnicos. Essa prova mostra se as regras podem ser ajustadas sem alterar o significado de compatibilidade.',
        'Inclua uma consulta que admite candidatos promissores e nenhuma equivalência comprovada. O vendedor deve saber que campo está faltando, por que ele muda a decisão e a quem pedir confirmação. Peça que os fornecedores demonstrem a passagem para a equipe de produto com o código original, os candidatos encontrados e as referências disponíveis. Meça quanto tempo o especialista leva para retomar a análise. Se precisa repetir toda a pesquisa, o relatório deve refletir esse esforço antes de estimar o ganho comercial.',
      ],
    },
    {
      heading: 'Teste mudanças no catálogo entre a pesquisa e a cotação',
      paragraphs: [
        'Em uma rodada de homologação, publique uma ficha fictícia que corrige a faixa de temperatura de uma fita. Rode a consulta antes e depois da publicação e compare a indicação do agente com a referência aprovada. Em seguida, abra um rascunho iniciado antes da mudança. Defina com a empresa se a opção deve voltar para revisão e em que momento o vendedor precisa confirmar a ficha atual. Anote os horários de publicação, atualização da busca e primeira resposta correta para estimar a janela de exposição a uma orientação desatualizada.',
        'Repita a prova com a retirada de uma variante e com a troca de embalagem de outra. No primeiro caso, a empresa pode permitir consulta ao histórico e encaminhar solicitações novas ao especialista. No segundo, a adaptação da quantidade pode ser necessária mesmo que os atributos de aplicação permaneçam equivalentes. Peça uma lista das cotações afetadas e verifique como a equipe reconhece as que exigem nova conferência. Confira também uma variante parecida que não deveria mudar e registre a fonte que permite explicar a diferença.',
        'Inclua dados de estoque e preço como verificações posteriores à equivalência. Uma alternativa pode ser tecnicamente válida e perder disponibilidade enquanto a cotação é preparada. A política deve dizer se o vendedor pode oferecer outra opção confirmada ou precisa consultar o cliente antes. Peça a demonstração com uma segunda opção em outra embalagem e confira os totais. O contrato precisa esclarecer onde ficam as evidências da compatibilidade e onde a operação verifica a condição comercial atual.',
      ],
    },
    {
      heading: 'Meça o custo da revisão técnica até a alternativa entrar na cotação',
      paragraphs: [
        'Defina o que conta como resultado útil. A equipe pode aceitar uma recomendação com todos os atributos comprovados ou receber um encaminhamento bem preparado quando exige parecer técnico. Mantenha essas medidas separadas e conte as propostas de equivalência recusadas. Em ambos os casos, observe o tempo gasto para localizar a ficha, comparar campos e registrar a decisão. Se o especialista abre a mesma tabela que já consultava e repete a conversão, esse esforço precisa aparecer ao lado do tempo economizado na busca.',
        'Em um cenário fictício, 240 consultas por mês exigem nove minutos em média para localizar e conferir alternativas. Na prova assistida, a tarefa leva seis minutos, incluindo revisão. A diferença representa 12 horas por mês. Se a equipe precisa de quatro horas para validar fichas novas e corrigir associações, restam oito horas de capacidade líquida nesse cenário. Use dados da própria empresa e separe o tempo de espera por um esclarecimento da atividade de revisão. Inclua a qualidade da cotação para que o ganho de tempo tenha um critério de continuidade.',
        'Analise o custo por família. Uma linha bem descrita permite comparar atributos em pouco tempo, enquanto outra exige consultar ficha antiga, interpretar unidade e fazer uma pergunta ao cliente. Separe os resultados antes de estimar a expansão. Solicite preço por descoberta, preparação de dados, integração, revisão e manutenção. Indique quem mantém as tabelas de atributos e quem poderá reaplicar os casos depois da próxima atualização. A área comercial pode decidir começar pela família em que as evidências e o volume justificam o investimento.',
      ],
    },
    {
      heading: 'Confira a passagem da recomendação para a cotação',
      paragraphs: [
        'Defina o que o vendedor recebe quando escolhe uma alternativa. O rascunho deve preservar a referência originalmente solicitada, o código sugerido, os requisitos conferidos e as condições que ainda precisam de aprovação. Na prova com fitas, mostre se a largura e o tipo de adesivo foram verificados para aquela variante. Confira se a unidade comercial usada na cotação corresponde ao produto encontrado. Quando houver uma diferença aceitável, como um rolo mais longo, registre o que o comprador precisa conhecer antes de decidir.',
        'Procure um caso em que dois códigos comerciais apontam para a mesma variante técnica em embalagens diferentes. Peça que o fornecedor mostre de onde vêm o preço e a disponibilidade de cada código. Depois, altere a quantidade e confira se a condição técnica se mantém enquanto o cálculo comercial é refeito. Verifique o resultado no sistema que gera a proposta. A equipe deve conseguir identificar de qual código veio cada linha e saber quando a alteração exige nova conferência de embalagem, saldo ou prazo.',
        'Teste a revisão de uma proposta antes do envio. Um vendedor pode escolher um candidato equivalente e descobrir que o estoque disponível está em outra filial. Defina se deve oferecer entrega parcial, apresentar nova data ou voltar a comparar candidatos. Peça aos fornecedores que preservem a justificativa técnica e a decisão comercial em seus respectivos registros. Faça a verificação com alguém que não participou da busca. A pessoa deve conseguir explicar por que o item aparece na cotação e qual informação ainda depende do cliente.',
      ],
    },
    {
      heading: 'Teste restrições por cliente, contrato e unidade',
      paragraphs: [
        'Uma relação de equivalência pode ser aprovada para uma carteira específica. Um cliente pode aceitar duas marcas para uma linha de embalagem e exigir uma referência nominal para outra unidade. Inclua um caso com a mesma descrição e códigos aprovados diferentes por contrato. Defina quem confirma a conta e em que fonte a regra estará disponível. Quando o vínculo comercial ainda não foi verificado, oriente a prova para distinguir a pesquisa geral de produtos da oferta que pode ser feita àquele cliente.',
        'Compare o cenário de um operador que consulta o catálogo inteiro com o de uma unidade que só tem permissão para oferecer parte dele. Um item tecnicamente adequado pode estar fora da carteira atendida, sem disponibilidade local ou condicionado a revisão. Peça que o teste mostre a busca, a aplicação da restrição comercial e a origem da decisão. Inclua uma mudança de atribuição no meio da cotação, depois verifique quem pode abrir o histórico e se o novo responsável recebe contexto suficiente para concluir a proposta.',
        'Use casos em que a preferência do cliente chega tarde. O comprador pode informar, depois de ver a primeira alternativa, que o aplicador foi homologado para uma faixa menor. A nova condição deve voltar à análise, mantendo visível o que já foi verificado. Compare o resultado quando essa alteração chega antes e depois de uma revisão interna. Se a preferência afeta apenas a ordem dos candidatos, preserve a avaliação técnica anterior. Se muda um requisito obrigatório, registre por que o primeiro candidato precisa ser revisto.',
      ],
    },
    {
      heading: 'Reserve uma amostra para o aceite depois da configuração',
      paragraphs: [
        'Divida os casos entre ajuste e validação. No primeiro grupo, permita que o fornecedor conheça a resposta esperada e revise os atributos. No segundo, deixe que a equipe interna guarde as respostas até executar a prova. Preserve exemplos de consulta por código antigo, ficha incompleta, opção condicionada e ausência de alternativa. Escolha as respostas com quem pode confirmar a aplicação e registre a versão do catálogo. Assim, a empresa compara o resultado sem depender de uma demonstração construída para perguntas já conhecidas.',
        'Defina a evidência que será examinada em cada rodada. Uma pessoa da área técnica confere atributos e fontes. Um vendedor verifica a unidade de venda, o registro da revisão e o que passou à cotação. A equipe que administra o catálogo pode reproduzir uma mudança controlada e conferir o tempo até a atualização. Combine o critério para considerar um caso encerrado, incluindo o destino de uma dúvida que não pode ser respondida de imediato. Registre de onde veio a confirmação e se alguma etapa foi executada em fonte simulada.',
        'Inclua um conjunto que avalie o efeito de uma recomendação errada. Uma alternativa com faixa de aplicação insuficiente pode ser recusada antes da compra, gerar devolução ou provocar parada durante a operação, conforme os procedimentos da empresa. Classifique os achados pela consequência observável e determine quais bloqueiam o recorte. Se uma referência ou condição falhar, repita o caso afetado e outro próximo que deveria continuar igual. Peça que a equipe possa consultar os resultados antes de assinar a liberação.',
      ],
    },
    {
      heading: 'Defina o que fazer quando uma família fica sem dados confiáveis',
      paragraphs: [
        'Escolha quem pode restringir recomendações de uma família durante uma revisão de dados. Um fornecedor pode substituir uma ficha sem indicar com clareza a mudança nas variantes. A empresa pode manter pesquisa pelo código e encaminhar comparações técnicas à equipe enquanto confirma os atributos. Escreva o que aparece para o vendedor nessa situação e que evidência permite restabelecer a busca de equivalentes. Teste a mesma consulta antes da restrição, durante a verificação e depois da liberação.',
        'Planeje como revisar cotações que já estavam em andamento. Se uma condição mudou, pode haver propostas que ainda aguardam conferência e outras que foram enviadas. A coordenação precisa reconhecer o grupo atingido, avaliar o procedimento comercial e decidir quem orientará o comprador. Inclua uma referência fictícia por estado e confirme se o vendedor consegue localizar a justificativa original. Registre o tempo de investigação e a informação necessária para decidir o próximo passo.',
        'Compare o que os fornecedores entregam para investigar a qualidade do catálogo. Peça uma lista dos campos incompletos, das fichas em conflito e dos itens que entram na revisão com mais frequência. Defina quem pode corrigir o cadastro e que prova deve ser repetida. Isso ajuda a distinguir custo de manter a busca do trabalho de governança que a empresa já teria de fazer. Use os resultados para escolher se a próxima etapa inclui outra família ou concentra esforço na preparação dos dados do grupo atual.',
      ],
    },
    {
      heading: 'Compare os entregáveis e o custo de incluir outra família',
      paragraphs: [
        'Envie aos candidatos a mesma amostra de fichas, a definição dos atributos obrigatórios e os limites de acesso. Peça que o preço identifique quanto trabalho cabe à equipe para preparar descrições, validar tabelas, configurar integração e homologar a cotação. Separe a atividade que será repetida em toda nova família daquela que pode ser reaproveitada. Se a empresa mantém equivalências em planilhas locais, indique como o fornecedor pretende identificar as versões e quem confirma que uma relação ainda vale. Peça a estimativa para uma família com fichas completas e outra com dados que precisam de revisão.',
        'A diretriz do modelo de dados da GS1 descreve conteúdo líquido com quantidade e unidade de medida. Use essa referência para conversar com a área de cadastro sobre quais campos identificam o conteúdo de uma embalagem, sem aplicar essa medida a dimensões ou requisitos técnicos que têm outros campos. Na comparação comercial, peça um exemplo em que a variante técnica permanece igual e a unidade de venda muda. Verifique os cálculos no sistema de cotação e identifique onde o vendedor deve confirmar a quantidade antes de apresentar a alternativa.',
        'Peça que o orçamento inclua um exercício de suporte. Depois que a equipe publica uma ficha revisada, simule uma recomendação que ainda cita a versão anterior. Mostre onde o vendedor registra a divergência, quem verifica o dado atualizado e o que acontece às cotações abertas. Compare horário e cobertura de atendimento, incluindo o papel da empresa na publicação da correção. Se o projeto depende de outro integrador, identifique onde cada responsável atua e como a área comercial acompanha o caso enquanto espera.',
      ],
    },
    {
      heading: 'Escolha o primeiro recorte e combine as condições de expansão',
      paragraphs: [
        'Comece por uma família em que o volume, a documentação e a disponibilidade do especialista permitam medir o efeito. Nas primeiras semanas, revise consultas com alternativa comprovada, encaminhamentos e propostas que precisaram ser corrigidas. Compare o tempo ativo e a proporção dos casos em que o vendedor conseguiu justificar a escolha. Use amostras separadas para pedidos simples e para situações condicionadas ao uso. Se os dados melhoram em apenas um grupo, defina quais condições sustentam a decisão de ampliá-lo e quais ainda precisam de teste.',
        'Na primeira conversa, leve uma ficha completa, duas variantes quase iguais, um exemplo de compra com embalagem diferente e um caso sem alternativa comprovada. Informe quem assina a equivalência, de onde vêm preço e saldo e o que a cotação deve preservar. Solicite uma proposta com roteiro de aceite e material para repetir os testes após atualizar o catálogo. No encerramento, confirme que a área de produto pode localizar as evidências e que vendas consegue retomar um encaminhamento com os dados recebidos. Registre os custos e os responsáveis para a próxima família.',
      ],
    },
  ],
  faqs: [
    { question: 'Como testar se dois produtos são equivalentes?', answer: 'Defina os requisitos da aplicação e confira cada atributo na ficha da variante correta. Encaminhe os campos sem evidência ao especialista.' },
    { question: 'Um produto equivalente pode entrar direto na cotação?', answer: 'Siga a regra de revisão da empresa e confirme código comercial, embalagem, quantidade e disponibilidade antes de oferecer a alternativa.' },
    { question: 'O que incluir no teste do agente de busca?', answer: 'Inclua itens semelhantes com diferenças decisivas, fichas desatualizadas, equivalências condicionadas e casos sem alternativa comprovada.' },
  ],
  cta: {
    title: 'Quer testar a busca de equivalentes no seu catálogo?',
    text: 'Apresente à Tironi Tech suas famílias de produtos, regras de revisão e sistema de cotação. Podemos ajudar a definir a amostra e os critérios de aceite.',
    label: 'Conversar sobre a busca no meu catálogo',
  },
  sources: [
    { label: 'GS1 — diretriz de implementação de atributos do modelo global de dados', url: 'https://ref.gs1.org/guidelines/gdm-implementation/' },
  ],
};
