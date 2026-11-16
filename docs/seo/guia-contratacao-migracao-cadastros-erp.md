# Como contratar um piloto de migração de cadastros para ERP

Antes de contratar a carga completa de clientes, produtos e fornecedores, escolha uma operação que o ERP novo precisa executar no primeiro dia. Se a prioridade é registrar pedidos de uma filial, o piloto precisa mostrar que a equipe encontra o cliente correto, seleciona um produto com a unidade de venda esperada e consegue prosseguir com as condições previstas. Use essa operação para comparar uma proposta de importação com uma entrega que também inclui tratamento das exceções e aceite pelas áreas responsáveis.

## Escolha a unidade que melhor revela o trabalho de preparação

Selecione uma filial com volume suficiente para representar a rotina e alguns cadastros que já exigiram correção. Uma unidade que trabalha com caixas fechadas pode revelar uma diferença de conversão que não aparece em uma filial que vende por peça. Peça ao fornecedor que importe os dois casos e conduza a prova até o registro do pedido. Compare o resultado com o que os operadores esperam ver e confirme quem pode decidir quando as fontes divergem sobre a unidade de medida.

Inclua clientes que compraram recentemente e clientes cujo cadastro precisa permanecer disponível pela relação com registros históricos. A empresa deve definir quais registros entram no trabalho corrente e quais precisam servir à consulta. Solicite volumes e preços para as duas finalidades. A necessidade de encontrar uma venda anterior pode ser atendida por acesso controlado ao histórico, enquanto uma negociação aberta pode exigir cadastro completo no ERP novo e vínculo com a oportunidade em andamento.

## Peça uma amostra das linhas que não puderam ser importadas

Simule um cliente que referencia um grupo ainda ausente no ERP e outro que tem um campo obrigatório em formato incorreto. A primeira correção pode depender da ordem de carga. A segunda pode exigir confirmação de quem mantém o cadastro. Peça ao fornecedor uma lista que mostre a linha original, o motivo da falha e o responsável por liberar a próxima tentativa. A equipe precisa conseguir reproduzir os dois casos e confirmar qual versão chegou ao destino após a correção.

A documentação da Microsoft para Dynamics 365 Finance and Operations apresenta um exercício de reimportação em que os dados passam por uma área intermediária, onde erros são corrigidos e os registros são validados antes de seguir ao destino. Use esse exemplo para pedir evidência das etapas equivalentes no ERP que a empresa pretende adotar. O aceite deve indicar onde a operação confere os dados antes da carga final e o que precisa verificar de novo quando eles já estão disponíveis à equipe. [Exercício de migração da Microsoft](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/develop-entity-for-data-migration)

## Defina quem decide sobre os cadastros duplicados

Escolha dois registros com o mesmo nome comercial e endereços de cobrança diferentes. Peça ao fornecedor que mostre quais informações levam a equipe a relacioná-los e quais exigem preservar os dois. Uma alteração pode afetar a carteira, uma condição comercial ou a associação com pedidos em andamento. Leve ao diagnóstico da Tironi Tech um caso que a equipe já tratou manualmente e a evidência usada para decidir. A proposta pode então distinguir a preparação técnica dos dados das decisões que cabem ao negócio.

## Teste referências usadas fora do ERP

Escolha um cliente cujo código aparece no CRM, em uma planilha de preços e em um portal de pedidos. Na carga de teste, permita que o ERP crie seu próprio identificador e peça ao fornecedor que mostre como cada sistema encontra o cadastro correspondente depois da virada. A operação deve conseguir distinguir o código que o cliente conhece, o identificador do ERP anterior e o que o novo sistema usa para registrar transações. Peça a conferência a uma pessoa que abre pedidos diariamente e observe quais referências ela utiliza de fato.

Acrescente um produto cujo código antigo foi reutilizado em outra filial. Se a migração trata o código como único em toda a empresa, as duas linhas podem acabar associadas ao mesmo item. Passe um pedido de cada filial pelo ensaio e confirme as unidades de venda e os registros de origem. A proposta precisa indicar que combinação de dados permite conferir a associação e quem resolve as exceções quando falta a identificação da filial. Essa prova ajuda a decidir se o contrato deve incluir uma tabela de correspondência mantida pela operação após a carga.

## Confira as mudanças feitas entre o ensaio e a virada

Faça o primeiro ensaio com uma extração datada. Depois altere o endereço de um cliente na origem, acrescente um fornecedor e desative um item que já foi importado no teste. Peça que a equipe demonstre como cada mudança chega à versão usada na virada. A desativação merece atenção porque a ausência de uma linha na segunda extração pode ter várias causas. Defina em que situações a equipe deve desativar o cadastro no destino e quais ficam aguardando confirmação de quem mantém os dados.

Teste também uma correção feita no ERP novo durante o ensaio. Se o fornecedor decidir corrigi-la só na área de carga, ele precisa mostrar como a alteração será preservada na próxima execução. A área comercial pode preferir acertar a informação na origem quando ainda depende dela para vender. O responsável por produtos pode precisar manter uma regra de conversão que existe apenas no destino. Registre para cada decisão onde fica a versão aprovada e quem confere se a carga definitiva a utilizou.

## Dimensione o intervalo em que a equipe precisa registrar alterações à parte

Escolha uma janela de virada e conte quantas alterações costumam ocorrer nela. Inclua cadastros criados com urgência, alterações de endereço e bloqueios que a operação precisa respeitar antes de liberar um pedido. Se o sistema anterior permanecer disponível para consulta, combine quem pode continuar registrando mudanças e como elas chegam ao ERP novo. Peça uma demonstração em que uma alteração seja registrada pouco antes do corte e outra chegue quando a carga já está em andamento.

Ao comparar propostas, estime quem vai conferir as mudanças e quantas consegue revisar por hora. Uma diferença pequena no tempo de processamento pode custar pouco quando a filial está fechada e exigir cobertura extra quando existe atendimento contínuo. Leve ao diagnóstico da Tironi Tech a escala do turno e dois exemplos de mudanças que precisam valer no primeiro dia. Use o teste para definir a duração da janela, o volume que a equipe consegue tratar e a evidência necessária para autorizar a abertura do ERP.

## Valide o cadastro em uma transação que use as condições do cliente

Selecione um cliente que compra pela matriz e recebe mercadoria em duas filiais. Peça que o vendedor registre um pedido para a segunda filial no ERP de teste. Confira se o endereço de entrega, a condição de pagamento e a tabela de preços são os esperados. Uma carga pode importar os campos corretamente e ainda associar a condição comercial à unidade errada. Para avaliar essa diferença, use a transação que aciona a regra e peça que vendas confira o resultado antes de aprovar a amostra.

Repita a prova com um comprador cujo cadastro exige análise antes de liberar o pedido. Defina com a operação o comportamento esperado de um cadastro bloqueado e verifique se o motivo está disponível para a pessoa que atende. Se o ERP permite cadastrar o pedido e exige revisão antes de aceitar a venda, faça o ensaio até a tela de aprovação. O critério precisa refletir o compromisso que a empresa pode assumir nas primeiras horas após a migração.

## Confira as unidades de compra, estoque e venda

Um fornecedor pode entregar um produto em caixas de doze, enquanto o depósito conta peças e o comercial anuncia pacotes de seis. Inclua um item com essa combinação e faça uma compra e uma venda de teste. Compare as quantidades exibidas em cada etapa e veja se os relatórios mostram o saldo que o depósito espera encontrar. Se a unidade de referência mudar na migração, peça que o fornecedor indique como as conversões foram obtidas e quem validou as que dependem de dados mantidos fora do ERP anterior.

Acrescente um item semelhante com embalagem diferente. O responsável pelo cadastro precisa recuperar o código da origem e desfazer uma associação incorreta antes de liberar a carga. Peça que o orçamento explicite quem revisará produtos com conversão ausente e quantos precisam dessa decisão. Uma correção que funciona para uma família pode precisar de análise específica em outra. Use a amostra para estimar o tempo dos especialistas de cada linha de produto.

## Defina o que interrompe a entrada em produção

Separe erros que impedem a operação do primeiro dia de pendências que podem aguardar uma fila com prazo e responsável. Um cadastro de fornecedor sem contato comercial pode exigir complemento, enquanto um produto que aparece com unidade de venda incorreta pode impedir os pedidos de uma família inteira. Peça aos responsáveis que aprovem os critérios antes do segundo ensaio. Quando a carga terminar, a equipe deve conseguir explicar quais operações estão liberadas e quais ainda dependem de uma confirmação.

Prepare um caso em que a carga termina dentro do horário e a amostra comercial falha. Combine quem pode adiar a abertura da filial e como os pedidos já recebidos durante a janela continuarão disponíveis. Na avaliação da proposta, peça que a Tironi Tech demonstre a retomada com base nos dados e nos canais que a empresa pretende usar. Inclua no aceite a conferência do primeiro pedido em cada unidade piloto e o prazo para investigar exceções que surjam quando a equipe voltar a operar.

## Compare preços com a mesma amostra de exceções

Peça que os fornecedores orcem o mesmo recorte de clientes, produtos e fornecedores. Para cada grupo, informe quantas linhas têm dados completos, quantas dependem de outra tabela e quantas exigem uma decisão da operação. Se essas proporções ainda forem desconhecidas, extraia uma amostra de cada filial e registre como ela foi escolhida. Uma estimativa baseada só na quantidade de linhas pode aproximar o tempo de processamento e deixar em aberto as horas de compras, vendas e estoque que serão necessárias antes da virada.

Solicite o preço de preparar a primeira carga, repetir o ensaio após as correções e acompanhar o teste do primeiro pedido. Pergunte quem investiga uma rejeição nova quando ela aparece só em outra filial. Se o orçamento prevê um número limitado de rodadas, combine que tipo de ajuste consome uma rodada adicional. Uma mudança na tabela de preços e a inclusão de outra família de produtos podem exigir trabalhos diferentes. Peça que o fornecedor aplique suas condições a esses dois exemplos para que o comparativo possa ser levado à aprovação interna.

## Meça o trabalho até a linha rejeitada voltar ao processo

Escolha três exceções com responsáveis diferentes. Um produto sem unidade de compra pode voltar para suprimentos. Um cliente com dois endereços válidos pode exigir decisão de vendas. Um fornecedor sem o grupo esperado pode depender de uma configuração do ERP. Acompanhe quanto tempo leva para identificar cada problema, pedir o ajuste e conferir que o cadastro corrigido chegou ao destino. Inclua o tempo em que o caso aguarda uma área, pois ele afeta a duração da janela de implantação.

Peça que as áreas repitam a conferência sem a pessoa que montou a primeira extração. Essa passagem mostra se a planilha ou a fila de erros contém a informação necessária para continuar. Se o operador só encontra o cadastro com um código que não aparece no relatório, inclua esse identificador no aceite e confirme a busca com um exemplo de outra filial. Quando os especialistas precisam dividir o tempo entre saneamento e atendimento, use as medições para definir quantos casos podem entrar por dia e quais devem ser resolvidos antes da próxima carga.

## Confira o que a equipe poderá consultar depois da virada

Escolha um comprador que pede a segunda via de um documento ligado a um cadastro antigo. Faça o atendente encontrar a venda com a referência que o cliente fornece e verificar qual contato está autorizado a receber a resposta. Peça que a proposta demonstre como as referências históricas continuam acessíveis e quem mantém essa consulta disponível. A mesma necessidade pode ser satisfeita por um histórico consultável ou pela migração de dados adicionais, conforme as tarefas que a equipe precisa executar no novo ERP.

Repita a prova com um cadastro que foi dividido em duas unidades no destino. Quem investiga uma reclamação precisa saber qual cadastro representa a compra anterior e qual deve receber o pedido novo. Registre o procedimento no roteiro de treinamento e verifique se um substituto consegue aplicá-lo sem depender da memória do titular. Leve esse caso ao diagnóstico da Tironi Tech para incluir no orçamento a consulta histórica, o relacionamento entre códigos e o trabalho de confirmar cadastros que podem voltar à operação.

## Reconcilie a população elegível antes de avaliar a taxa de sucesso

Peça que a proposta enumere os registros elegíveis na origem, os enviados à carga e os encontrados no destino. Cada diferença precisa ter uma classificação que a área responsável possa conferir. Um item descontinuado pode ter sido excluído por decisão de compras. Um cliente ativo sem endereço pode ficar pendente. Um fornecedor recebido com um identificador diferente pode ter entrado com êxito e ainda exigir conferência do vínculo. Se todas essas situações aparecem como linhas faltantes, a equipe perde tempo procurando correções que já foram decididas.

Separe os resultados por filial e tipo de cadastro. Em uma amostra hipotética de 1.000 registros, 980 podem passar e os 20 restantes pertencer à mesma linha de produtos. Uma taxa geral de 98% descreve a amostra, mas pode ocultar que uma filial está sem os itens necessários para abrir pedidos. Peça à operação que indique quais grupos precisam estar completos e quais aceitam pendências com tratamento definido. Compare a lista dos registros disponíveis com o roteiro de operações prioritárias antes de liberar a virada.

Inclua um relatório que o encarregado do estoque consiga reproduzir com seus próprios acessos. Se a conferência depende de uma exportação que apenas o fornecedor pode gerar, defina como o operador receberá os dados e quanto tempo terá para verificar o resultado. Peça que o teste inclua uma linha que passou tecnicamente e cujo código só pode ser localizado por uma referência em outro sistema. A validação estará completa quando a pessoa responsável conseguir encontrar o registro no caminho que usa para trabalhar.

## Prepare a equipe para tratar o primeiro cadastro criado após a mudança

Escolha um novo cliente que pede orçamento logo depois que a filial começa a operar. Faça o atendente procurar um cadastro anterior e criar o registro se ele ainda não existe. Observe se uma integração atrasada pode trazer um segundo cadastro e quem confirma que os pedidos ficaram com a referência correta. Esse ensaio ajuda a decidir quando desligar as rotinas de importação e quando manter a consulta à origem apenas para localizar referências históricas.

Repita o caso com uma alteração urgente em um item que foi aprovado no piloto. O comprador pode solicitar quantidade que o ERP aceita somente em outro múltiplo. Identifique quem confirma a embalagem, onde o ajuste é registrado e como o estoque confere a mudança antes de liberar a separação. Se a preparação da carga usa tabelas temporárias, combine quais regras precisam ser entregues à equipe que manterá os cadastros depois. A empresa deve conseguir entender por que determinado valor foi escolhido mesmo quando a equipe de implantação já saiu da operação.

## Contrate a passagem da responsabilidade para as áreas de negócio

Peça que o fornecedor demonstre o encerramento de uma exceção com quem mantém o cadastro no dia a dia. O gerente pode aprovar a regra usada para um cliente. O analista precisa registrar o resultado e encontrar a evidência quando uma unidade pedir correção. Faça a passagem em ambiente de teste e confira quais acessos precisam ser concedidos antes da virada. Inclua também a hora em que a equipe do fornecedor deixa de acompanhar o primeiro turno e quem recebe problemas que aparecem depois.

Leve ao diagnóstico da Tironi Tech uma amostra de rejeições, um pedido dependente de condições especiais e a lista de sistemas que ainda usam os códigos antigos. Use esses exemplos para comparar o custo de uma carga assistida com o de uma entrega que também cobre a validação comercial e a passagem para o suporte. Combine quais operações devem funcionar no primeiro dia, quem confirma cada uma e como o gestor decide se há evidência suficiente para ampliar a migração a outra filial.

## Repita a carga depois de uma falha parcial

No ambiente de teste, peça que o fornecedor interrompa uma carga depois que os grupos de clientes já foram gravados, mas antes de terminar a importação dos clientes. Antes de rodar novamente, solicite uma lista do que existe no destino e do que ficou pendente. Inclua uma linha que já foi importada, uma ainda não processada e outra rejeitada por um motivo conhecido. A demonstração deve mostrar o efeito da nova execução sobre as três, inclusive se o ERP mantém a referência que já foi usada nos pedidos de teste.

Em outro ensaio, faça uma pessoa corrigir um cadastro no destino enquanto o responsável pela carga ainda investiga uma falha. A equipe precisa decidir se a repetição pode sobrescrever esse ajuste e quem valida o resultado antes de continuar. No orçamento, peça que o fornecedor diferencie as horas de processamento das horas de conferência após uma interrupção. A operação pode tolerar uma repetição longa fora do expediente, mas precisar de um procedimento diferente no período em que a filial recebe pedidos.

## Confira o que os sistemas conectados enxergam antes da abertura

Escolha uma rotina que usa o ERP sem passar pela tela de cadastro. Um portal pode consultar preços, uma central pode buscar o endereço do cliente e o estoque pode usar um código antigo para identificar um item. Peça que cada equipe execute uma tarefa com o mesmo cadastro usado na prova de carga. Se uma interface consultar uma cópia atualizada em outro horário, anote quando a mudança ficou disponível ali. A liberação do ERP deve considerar o caminho que o operador usará no primeiro turno.

Inclua um item substituído durante a preparação do catálogo. O ERP novo pode listar o substituto e o portal continuar aceitando pedidos para o código anterior. Escolha se a primeira etapa vai migrar a referência antiga, atualizar o portal ou encaminhar esses pedidos para revisão. Compare as propostas pelo esforço de atualizar o cadastro e pelo tempo em que a operação precisará manter a solução de transição. Quando os dois sistemas estiverem sob fornecedores diferentes, atribua a confirmação de cada lado a uma pessoa que possa demonstrar o resultado.

## Use o ensaio para decidir entre uma virada única e a abertura por filial

Faça a comparação com a escala e os pedidos previstos para o primeiro dia. Uma abertura por filial pode facilitar a revisão de exceções quando os cadastros e as equipes são independentes. Quando duas unidades vendem o mesmo estoque ou usam uma condição negociada em conjunto, peça que o fornecedor mostre o que acontece enquanto uma já opera no ERP novo e a outra ainda consulta o antigo. A diferença de datas pode exigir uma rotina temporária para manter códigos e informações comerciais coerentes.

Atribua a cada opção um caso que precisa funcionar durante o intervalo. Se um comprador pede entrega em uma unidade já migrada e cobrança pela matriz, confirme qual equipe registra a venda e qual sistema conserva a referência do pedido. Se o ensaio exigir uma conferência manual, estime o volume com o histórico da operação e verifique a disponibilidade do time. Leve os resultados à decisão comercial com a Tironi Tech e defina quais dependências entram no preço da primeira etapa, quem autoriza a próxima abertura e quais evidências serão revistas em cada filial.

## Cronometre a conferência que antecede a abertura

Peça que os responsáveis por vendas, estoque e compras façam o ensaio em paralelo. Anote quando cada área recebe os dados, qual consulta precisa executar e quanto tempo leva para comunicar a decisão. Se o estoque termina em vinte minutos e vendas depende de um relatório que só sai depois de uma hora, o horário de abertura depende desse relatório. Confira se uma amostra menor pode sustentar a decisão inicial e quais operações permaneceriam em espera. Registre também quando a equipe precisa de uma segunda pessoa para confirmar uma exceção.

Inclua no cronograma o momento em que já não há tempo suficiente para repetir a carga e conferir os resultados antes da abertura prevista. Se uma rejeição crítica aparecer nesse ponto, o gestor precisa saber quais atividades podem continuar no processo anterior e onde registrar os pedidos recebidos no intervalo. Simule a decisão com a pessoa que responde pela filial e peça que ela indique ao atendimento o procedimento para cada canal. Use o tempo observado para comparar promessas de duração da virada e negociar cobertura para a manhã seguinte. Confirme no ensaio quem cobre a conferência de compras se a pessoa escalada precisar atender uma ocorrência na filial.
