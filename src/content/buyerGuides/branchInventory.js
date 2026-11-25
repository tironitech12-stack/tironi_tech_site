export const branchInventory = {
  slug: 'orcamento-integracao-saldo-filiais-ecommerce',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Compare propostas para integrar estoque por filial ao e-commerce, com saldo disponível, reserva, retirada e prevenção de venda sem estoque.',
  keywords: ['integração de estoque por filial para e-commerce', 'orçamento de integração de estoque', 'estoque por loja no e-commerce', 'integração de estoque de ERP e loja virtual'],
  emphasis: 'integração de estoque por filial para e-commerce',
  intro: 'Para orçar uma integração de estoque por filial para e-commerce, leve ao fornecedor o saldo de um produto em duas unidades e os movimentos que mudam quanto pode ser vendido. Peça que ele prove como a loja consulta a disponibilidade, reserva a unidade certa e atualiza a oferta quando o mesmo item sai no balcão. Inclua falhas de comunicação, retirada na loja e devolução no roteiro de teste.',
  takeaways: [
    'Documente o saldo que cada filial disponibiliza para cada canal.',
    'Valide consulta, reserva e confirmação com compras concorrentes no mesmo SKU.',
    'Compare custos de implantação e sustentação com testes de defasagem, retirada e reconciliação.',
  ],
  visual: {
    title: 'Da posição da filial à confirmação do pedido',
    labels: ['ERP ou estoque local registra movimentos', 'Disponibilidade é calculada por unidade e canal', 'Checkout solicita reserva com referência do pedido', 'Filial confirma separação ou informa exceção'],
    caption: 'O número mostrado no catálogo pode refletir a última posição publicada. A operação precisa saber quando a disponibilidade é verificada no pedido.',
  },
  sections: [
    {
      heading: 'Comece pelo que a loja precisa prometer ao comprador',
      paragraphs: [
        'Uma rede pode mostrar disponibilidade para entrega, retirada ou consulta ao vendedor. Cada promessa usa estoque de uma forma. Para retirada em uma filial, o comprador depende de a unidade selecionada separar o item. Para entrega, a rede pode transferir ou expedir de lugares diferentes, conforme prazo e custo. Descreva as promessas que entram na primeira fase e dê ao fornecedor exemplos que representem a combinação entre destino, canal e produto.',
        'Escolha dois pedidos recentes que deram trabalho. Talvez a loja tenha vendido com base no estoque total, mas a unidade apta a expedir estava sem o produto. Outro caso pode ter começado com saldo disponível e terminar em falta porque alguém comprou no balcão. Identifique a etapa em que a decisão usou dados ruins. O orçamento fica mais exato quando a empresa explica se precisa corrigir divulgação, reservar, confirmar separação ou reconstruir o saldo de uma unidade.',
        'Descreva quais locais participam. Uma rede pode ter lojas próprias, franquias e centros de distribuição. Um local pode possuir estoque e ainda ficar fora da oferta online porque não separa pedidos. Outro pode aceitar retirada apenas em certos horários. Registre quem autoriza um local a atender cada canal, qual janela aplica e que condição suspende o uso. Evite que toda filial cadastrada entre automaticamente na promessa do site.',
        'Defina o indicador que orienta a contratação. Cancelamento por falta de estoque, pedido enviado para filial errada e perda de venda por saldo desatualizado são problemas diferentes. Conte casos e escolha uma janela comparável antes do piloto. Peça uma visão por loja, canal e família de produto. Uma integração pode funcionar bem em estoque central e ainda falhar nas lojas que têm vendas de balcão e reposição mais frequentes.',
      ],
    },
    {
      heading: 'Diferencie estoque físico de saldo disponível para venda',
      paragraphs: [
        'Use um exemplo com quantidades pequenas para confrontar as propostas. Uma loja tem dez unidades registradas. Três estão comprometidas com pedidos já aceitos, duas separadas para retirada e uma retida para conferência de qualidade. Se as categorias não se sobrepõem, restam quatro unidades elegíveis para cálculo de venda. A empresa pode reservar uma delas como margem para o balcão, publicando três unidades online. Teste as definições para evitar subtrair a mesma reserva duas vezes.',
        'Na API de inventário da Shopify, quantidades como disponíveis, comprometidas e em mãos podem ser consultadas por local. Isso ilustra por que mapear cada estado antes de transmitir. Seu ERP pode usar termos e convenções diferentes, inclusive incluir pedidos confirmados no saldo ou deduzir reservas em outra etapa. Peça que o fornecedor compare um instantâneo da fonte, o saldo calculado e o número publicado na plataforma com explicação de cada diferença.',
        'Diga o que vale para itens em trânsito, avariados e devolvidos. Uma mercadoria saindo da filial A pode não estar mais disponível na origem e ainda não ter chegado à filial B. Uma devolução recebida pode precisar de triagem antes de voltar para venda. Modele estados intermediários em vez de inferir disponibilidade quando o primeiro evento aparece. Peça um teste no qual uma transferência atrasa e confira o que a loja oferece durante a espera.',
        'Decida como tratar estoque negativo e diferenças de contagem. Um saldo negativo pode indicar uma baixa tardia ou um erro de inventário. Para disponibilização, a empresa pode bloquear o SKU naquele local e avisar quem corrige. No diagnóstico, preserve a posição observada em vez de substituí-la silenciosamente. Quando a correção chegar, o operador deve conseguir verificar origem, horário e efeito no e-commerce antes de reabrir a oferta.',
      ],
    },
    {
      heading: 'Mapeie SKU, unidade de venda e identificação de locais',
      paragraphs: [
        'Faça uma correspondência entre os produtos das fontes. Um SKU pode existir com o mesmo texto e representar outra embalagem. Uma variante de tamanho ou cor pode ter um código interno e um código de canal. Uma filial pode usar código antigo em um sistema e novo em outro. Peça que o fornecedor explique como relaciona registros e o que ocorre quando um item não tem vínculo. A qualidade do mapeamento define se uma atualização chega ao produto e ao local corretos.',
        'Separe quantidade de estoque e quantidade vendida. Um kit de duas unidades usa dois componentes, enquanto uma caixa fechada pode ter código próprio. Se o canal vende pacotes e o ERP controla unidades, defina conversão e arredondamento. Em um exemplo com cinco unidades elegíveis e venda em caixas de três, a oferta pode ser de uma caixa, com duas unidades não vendáveis naquele formato. Teste o balanço após confirmar e cancelar o pedido.',
        'Para kits, descreva como a rede escolhe a filial. Mesmo que o total de itens em todas as unidades baste para montar o kit, cada local pode ter só parte dos componentes. Se a política exige expedição conjunta, calcule kits possíveis por local. Se permite dividir, avalie prazo, embalagem e regra de frete. O fornecedor deve demonstrar como a decisão aparece para o comprador e como os componentes retornam ao saldo se a compra for desfeita.',
        'Defina quem pode alterar os vínculos e como o sistema registra a versão. A migração de um código não deve fazer a integração publicar posição de um produto antigo no novo sem conferência. Inclua o caso de filial desativada no site enquanto ainda possui pedidos a separar. A equipe precisa interromper novas promessas e continuar enxergando o histórico e as reservas já confirmadas. Uma política bem documentada evita apagar dados para retirar um local da operação.',
      ],
    },
    {
      heading: 'Escolha como atualizar a loja e medir o atraso',
      paragraphs: [
        'A integração pode receber eventos de movimentos, consultar saldos em intervalos ou combinar ambos. Eventos podem aproximar a atualização do momento da baixa, enquanto consultas periódicas ajudam a conferir o conjunto. A escolha depende das interfaces e do volume. Peça que as propostas indiquem quais eventos existem no ERP, qual é o tempo esperado para publicação e como detectam um movimento perdido. A operação deve saber quando a posição ficou antiga demais para ser usada.',
        'Teste a atualização do balcão. Registre a posição de um SKU, faça uma venda na filial em ambiente de prova e marque quando o movimento aparece no ERP e quando muda no site. Em seguida, simule atraso numa etapa e veja qual informação o painel apresenta. A diferença entre horários mostra se o gargalo está no PDV, na interface ou na publicação. Essa separação permite contratar uma ação de correção no lugar em que o atraso começa.',
        'Peça que o fornecedor explique como trata movimentos fora de ordem. Uma posição mais antiga pode chegar depois de uma atualização recente. Se prevalecer apenas o último arquivo recebido, a oferta pode retornar a um saldo já superado. Use número de versão, sequência de eventos ou outro critério que a fonte consiga sustentar. Teste uma entrega repetida e outra tardia. O fornecedor precisa mostrar as referências guardadas e o resultado que ficou publicado.',
        'Combine a conferência integral. Em horários escolhidos, compare o saldo vendido no site com a posição esperada por produto e local. A conferência pode identificar divergências que não foram capturadas pelos eventos. Defina se o sistema corrige, sinaliza ou suspende o item quando há diferença. Registre o impacto antes de ajustar. Se o e-commerce estiver recebendo compras simultaneamente, o processo também precisa considerar reservas criadas durante a conferência.',
      ],
    },
    {
      heading: 'Defina o momento da reserva e quem pode confirmá-la',
      paragraphs: [
        'O site pode indicar disponibilidade na página do produto e validar novamente ao fechar o carrinho. Escolha se existe reserva temporária antes de pagamento, quando expira e o que um pedido pendente ocupa. Um item muito disputado pode exigir proteção durante uma etapa curta. Uma reserva longa pode retirar unidades de venda sem que o comprador finalize. Teste a política no tempo e na condição que a empresa considera representativos do canal.',
        'Com uma unidade restante, abra dois carrinhos para a mesma filial. Faça os dois avançarem até a etapa de confirmação. Se o estoque é exclusivo, somente um pedido pode obter a reserva válida. O outro deve receber alternativa, como selecionar outra loja ou rever quantidade. Teste também uma venda de balcão entre consulta e confirmação. Se não houver uma fonte capaz de registrar as duas reservas, explique qual limite a operação aceita e como reduz o risco até integrar os canais.',
        'Associe a reserva a uma referência que permanece nas tentativas. Se a confirmação não volta ao site, uma repetição deve localizar a reserva já criada em vez de comprometer outra unidade. A equipe de atendimento precisa conferir a relação entre pedido, filial e SKU. Se a loja reserva mais de um item, escolha o tratamento de falha parcial. A decisão pode reter o restante por prazo ou desfazer o conjunto, conforme a experiência prometida.',
        'Defina a liberação por pagamento não concluído, cancelamento e troca de local. Se uma reserva expira antes de o pagamento chegar, a aplicação precisa confirmar novamente antes de aceitar a separação. Quando o comprador cancela, registre se o item já foi separado e quando volta à oferta. Uma reversão não deve liberar estoque que foi usado em outro pedido. Peça a demonstração das transições e da trilha de decisões para a equipe de operação.',
      ],
    },
    {
      heading: 'Projete retirada na loja e envio dividido com critérios claros',
      paragraphs: [
        'Para retirada, identifique quando o cliente escolhe a unidade e quais condições são verificadas. A filial pode mostrar um saldo com horário disponível, mas ainda precisar de uma janela de separação. O estado “pedido aceito” tem implicação diferente de “pronto para retirar”. Combine como a loja confirma a separação, até quando guarda a reserva e o que acontece se não encontrar o item. Faça o teste usando um comprador que já saiu para retirar.',
        'No envio, decida quando usar mais de um local. Dividir a entrega pode atender um carrinho que nenhuma filial cobre sozinha, mas acrescenta custo e prazos. Peça que o fornecedor indique se divide por item, por parte da quantidade ou apenas por categoria. Escolha quem confirma a alternativa e o que o consumidor recebe. No aceite, verifique como cada parte pode ser acompanhada e cancelada sem alterar indevidamente as outras.',
        'Considere o pedido direcionado a uma filial que fica indisponível depois. A equipe pode tentar outra unidade se o prazo, o custo e a autorização permitirem. A transferência de responsabilidade precisa encerrar ou liberar a reserva anterior e confirmar a nova. Um pedido de retirada não pode mudar de local sem refletir a escolha do comprador. Defina os estados de remanejamento, quem autoriza e como um aviso evita deslocamento até a unidade errada.',
        'Defina prioridades por pedido e por local. Uma loja pode preservar quantidade para atendimento presencial e receber pedidos online só acima de um limite. Outra pode reunir estoque para um canal específico. Peça uma forma de mudar esses parâmetros sem reconfigurar toda a integração. O operador precisa saber quais regras aplicaram cada oferta. A homologação deve mostrar o efeito da mudança nas novas vendas e o que acontece com reservas já confirmadas.',
      ],
    },
    {
      heading: 'Use um exemplo com balcão, e-commerce e transferência',
      paragraphs: [
        'Considere uma rede ilustrativa com duas lojas e um centro de distribuição. A loja A tem três itens elegíveis para retirada e compartilha o estoque com o balcão. A loja B tem cinco, dos quais dois estão em conferência. O centro entrega para o mesmo município, mas não aceita retirada. Uma pessoa monta um carrinho de quatro produtos para retirar em A. A solução deve mostrar que aquela opção não cobre a quantidade e propor escolhas válidas de acordo com a política.',
        'Em seguida, reduza o carrinho para dois e inicie a etapa de pagamento. Simule uma venda no balcão de duas unidades enquanto a solicitação ainda está em análise. O teste deve revelar se a reserva ocorreu antes e foi respeitada, ou se a confirmação precisará recusar ou ajustar a oferta. Compare os horários e os identificadores no PDV, no ERP e na plataforma. O objetivo é conseguir explicar o resultado em vez de depender da ordem em que as telas atualizaram.',
        'Introduza uma transferência do centro para a loja A. A saída não deve aumentar imediatamente a oferta daquela loja antes do recebimento previsto pela política. Registre um recebimento parcial e um item retido para conferência. Peça que o fornecedor mostre quais unidades voltam a ser vendáveis e quando aparece a nova posição. Se a plataforma permite pré-venda com prazo, configure esse caminho como promessa diferente da retirada imediata.',
        'Complete o exemplo com devolução em outra filial. A rede pode registrar o recebimento por conveniência do comprador e manter o item fora da venda até inspeção. A autorização de devolução não significa que o saldo já voltou. O sistema deve conservar o vínculo com o pedido original e indicar o lugar em que a mercadoria pode ser disponibilizada depois. Esse caso testa processo e integração do início ao fim, inclusive quando a loja que recebe a devolução não foi a que vendeu.',
      ],
    },
    {
      heading: 'Especifique o que ocorre quando uma interface fica indisponível',
      paragraphs: [
        'Classifique falhas de forma que o time consiga agir. Uma consulta lenta pode permitir repetir após intervalo. Um SKU sem cadastro exige correção. Uma resposta perdida após reserva requer recuperar o estado antes de repetir. O painel deve mostrar a última confirmação, indicar o local afetado e separar problema técnico de falta de estoque. Pergunte qual informação o comprador receberá enquanto a loja ainda não sabe se pode confirmar o pedido.',
        'Escolha uma política para a posição desatualizada. A empresa pode suspender retirada em uma unidade, manter oferta indicativa sem fechar pedido ou reduzir saldo publicado até recuperar a comunicação. A decisão depende da promessa e do risco que a operação aceita. Defina a idade máxima que cada canal usa e como é avisada a equipe. Teste o retorno da integração e verifique se a oferta é restaurada apenas depois de validar a posição vigente.',
        'Peça ao fornecedor que registre tentativas, identificadores e respostas, com acesso adequado para vendas e suporte. Um lojista precisa saber se um pedido ainda aguarda separação. O técnico pode precisar de dados para localizar uma transação específica. Essa divisão reduz o trabalho de investigação. Inclua uma forma de consultar por pedido, SKU e filial e pedir correção de apenas um item ou local sem republicar toda a base.',
        'Combine como uma operação manual será reconciliada. Se o site interrompe a reserva, alguém pode atender um cliente por outro canal usando o ERP. Na retomada, o sistema deve considerar essa venda antes de reofertar o produto. Peça um roteiro com responsáveis, estado inicial e critérios para liberar. Se houver volume acumulado de atualizações, verifique se os movimentos são ordenados ou se a integração consulta uma posição atual antes de publicar.',
      ],
    },
    {
      heading: 'Compare os custos a partir das fontes e do volume real',
      paragraphs: [
        'Envie a mesma lista de canais, filiais, depósitos, SKUs e volume para todos os fornecedores. Separe custo de diagnóstico, mapeamento, conectores, homologação, migração e acompanhamento. Uma proposta pode cobrir só a publicação de saldo e deixar reservas para o e-commerce. Outra pode prever um controle de reserva centralizado. Descreva a diferença usando os testes esperados, porque os dois projetos não resolvem o mesmo conjunto de problemas.',
        'Informe os horários de pico. Uma loja pode ter poucos milhares de SKUs e receber muitos movimentos em uma campanha curta. Parte do volume vem do PDV, parte da plataforma e parte de transferências. Peça que o fornecedor estime como manterá as atualizações durante essa carga. Indique se a API tem limites, se os eventos chegam em grupo e se a conciliação integral concorre com operações de checkout. O teste deve usar distribuição parecida com a realidade.',
        'Considere o custo recorrente de operação. Se cada nova filial exige vincular depósito, calendário, modalidade e usuários, peça uma simulação de inclusão. Defina quem corrige diferenças de cadastro e que suporte atende quando a plataforma ou ERP muda. Uma proposta pode transferir ao cliente a tarefa de investigar exceções. Entenda que ferramentas estarão disponíveis e o tempo previsto para detectar e corrigir uma discrepância que afeta venda.',
        'Avalie também a possibilidade de ampliar. O piloto pode ligar duas unidades e uma família, reservando expansão para outras lojas e canais. Informe regras que devem continuar específicas, como expedição em uma unidade e retirada em outra. Peça documentação para atualizar vínculos, repetir testes e exportar histórico. Assim a empresa consegue estimar o custo da próxima rodada e não precisa redescobrir como a oferta foi produzida a cada ajuste.',
      ],
    },
    {
      heading: 'Homologue com divergências e evidências de cada sistema',
      paragraphs: [
        'Antes da demonstração, prepare os dados esperados para cada filial e SKU. Faça um item aparecer como disponível, outro como reservado para retirada e outro como retido para inspeção. A equipe deve confirmar a consulta do site e acompanhar o movimento no ERP. Se houver uma diferença, peça explicação e faça o fornecedor comprovar que os estados não foram somados ou abatidos em duplicidade. Registre horário, versão e regra usada no teste.',
        'Teste autorização do operador e alteração de catálogo. Um usuário da filial pode precisar confirmar separação e ajustar uma exceção, mas a empresa pode limitar alteração de política e saldo. Simule publicação de um item novo, suspensão de um depósito e volta à operação. Confira no site, no painel e na saída da interface. O operador precisa distinguir uma mudança esperada de um erro de sincronização que exigirá correção.',
        'Escolha um lote controlado para o piloto e registre antes a linha de base. Meça cancelamento por falta, tempo de atualização, pedidos para a filial errada e esforço gasto em conferência. Num exemplo hipotético, passar de 22 cancelamentos mensais para oito pode ser relevante se volume e mix forem comparáveis. Verifique também quantas vezes o site ocultou estoque que a filial poderia vender. Evitar falta exibindo ofertas conservadoras demais pode reduzir a disponibilidade comercial.',
        'Reúna compras, lojas, vendas digitais e TI para revisar os primeiros casos. Leve um pedido retirado com sucesso, um conflito de reserva e uma correção de saldo. Defina quem consegue explicar cada resultado e que evidência precisa ficar mais acessível. Se algum teste crítico falha, ajuste o recorte antes de ampliar unidades ou modalidades. O aceite final deve registrar o alcance aprovado, as pendências e o plano de tratamento durante a transição.',
      ],
      bullets: [
        'Saldo publicado por filial com reservas e itens retidos.',
        'Disputa pelo último item entre pedidos ou canais.',
        'Retirada confirmada na unidade escolhida.',
        'Transferência parcial e devolução aguardando inspeção.',
        'Reconciliação e retomada após perda de comunicação.',
      ],
    },
    {
      heading: 'Prepare o primeiro encontro com o integrador',
      paragraphs: [
        'Leve relatórios saneados de duas unidades, uma amostra de códigos de produto e o caminho de um pedido do catálogo à separação. Mostre onde identifica reservas, devoluções e transferências. Informe quais interfaces já estão disponíveis e quem autoriza ambiente de teste. Se não souber a latência da posição, apresente horários de uma venda real e indique como comparar a fonte com a atualização do site.',
        'Peça um orçamento que comece por uma promessa de venda verificável, como retirada em uma filial para uma família de produtos. Anote quais dados já estão confiáveis e quais decisões dependem da rede. A resposta precisa informar o que será demonstrado na primeira fase, como o operador recupera uma falha e como o projeto mede a diferença em relação ao processo atual. Esse recorte dá base para planejar novas unidades e canais depois.',
        'Se a rede já tem um integrador, leve um exemplo do que ele publica e a documentação dos campos que preenche. Verifique se a plataforma aceita responsáveis diferentes por local ou se o novo fluxo assumirá todos os saldos do item. Duas rotinas que atualizam a mesma posição podem alternar entre valores corretos para momentos distintos. Para a transição, peça um teste em que o fluxo antigo cesse para apenas uma unidade enquanto os outros locais continuam ativos. A equipe deve conseguir dizer qual origem publicou cada posição.',
        'Combine como voltar ao fluxo anterior se os primeiros pedidos revelarem uma divergência crítica. Defina quem suspende a oferta da filial, como protege as reservas do piloto e quando pode retomar publicação pelo integrador antigo. A troca de sistema deve preservar pedidos já aceitos. Peça uma conferência de saldo e compromissos antes e depois da virada. Esse exercício ajuda a estimar o esforço de implantação e evita depender de uma troca integral no dia de maior demanda.',
      ],
    },
  ],
  faqs: [
    { question: 'O site deve mostrar o saldo total de todas as filiais?', answer: 'Depende da modalidade. Para retirada, confirme a unidade escolhida. Para entrega, some ou combine locais apenas quando as regras de expedição permitirem cumprir quantidade e prazo.' },
    { question: 'Como evitar vender o mesmo item no balcão e no e-commerce?', answer: 'Use uma fonte capaz de verificar compromissos dos dois canais e confirme a reserva no fechamento. Teste duas compras concorrentes pelo mesmo item e planeje como agir se um canal ficar sem comunicação.' },
    { question: 'O que mais muda o custo da integração?', answer: 'Número de sistemas, qualidade de SKU e local, disponibilidade de interfaces, alcance das reservas e regras de expedição. Compare propostas com as mesmas filiais, volumes e exceções.' },
  ],
  cta: {
    title: 'Quer orçar a integração de estoque da sua rede?',
    text: 'Conte onde sua equipe consulta o saldo, como reserva os itens e quais unidades atendem o e-commerce. A Tironi Tech pode ajudar a delimitar a primeira integração e os testes para cotá-la.',
    label: 'Apresentar minha operação de estoque',
  },
  sources: [
    { label: 'Shopify Developer — quantidades e estados de estoque em locais', url: 'https://shopify.dev/docs/apps/build/inventory-management-apps/manage-quantities-states' },
  ],
};
