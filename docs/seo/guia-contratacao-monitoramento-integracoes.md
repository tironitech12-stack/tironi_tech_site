# Como contratar monitoramento de integrações em produção

Se a empresa costuma descobrir que uma integração parou quando alguém reclama, comece a contratação pelo intervalo entre a falha e a primeira ação da equipe. Escolha um incidente e reconstrua o que ocorreu, quem recebeu o aviso e de quais informações essa pessoa precisou. Use o caso para decidir se vale contratar apenas alertas e painéis ou também cobertura para investigar ocorrências fora do horário.

## Escolha um sinal que corresponda ao trabalho interrompido

Imagine que uma distribuidora recebe pedidos pelo portal mesmo quando a integração com o ERP está atrasada. O endereço do portal continua respondendo e o serviço de integração permanece ligado, mas o depósito deixa de receber novos pedidos. Peça que o fornecedor mostre como identifica esse atraso e diferencia um período sem vendas de um acúmulo de pedidos ainda não entregues. No teste, registre a hora do primeiro pedido pendente, a hora do alerta e a fila que recebeu a ocorrência.

Repita o ensaio em um dia de baixo volume. Se a regra usa somente o total de pedidos por hora, uma manhã normal pode parecer uma interrupção. Se espera um pedido vencer o prazo, a supervisão pode receber o alerta tarde demais para cumprir o horário de corte. Escolha com a operação o tempo máximo de espera para cada fluxo e confira quais dados estão disponíveis para verificar o atraso. Leve esse recorte ao diagnóstico da Tironi Tech com a escala do depósito e o exemplo de um incidente anterior.

## Faça o alerta chegar à pessoa que pode tomar a primeira decisão

Escolha uma falha que a equipe interna consegue investigar e outra que depende do fornecedor do ERP. Peça que os dois casos cheguem ao responsável do turno com a referência dos pedidos afetados, o horário da última confirmação e um meio de conferir se a operação continua parada. Depois simule uma troca de turno. O novo responsável precisa encontrar o aviso que já havia sido assumido, recuperar o que foi verificado e saber quem está aguardando uma resposta.

Compare o tempo até o primeiro aviso com o tempo até a primeira investigação. Um serviço pode entregar a notificação em dois minutos e deixar o caso sem análise até a abertura do expediente. Peça a cada fornecedor que declare qual intervalo assume, o que considera início de atendimento e como registra a transferência. Use a diferença para precificar a cobertura que sua empresa precisa em horários em que pedidos parados já exigem decisão.

## Diferencie a falha observada da ausência de informação

Peça ao fornecedor que demonstre dois incidentes. No primeiro, o ERP rejeita pedidos e a integração continua enviando dados sobre as rejeições. No segundo, o coletor para de receber eventos e o painel permanece com o último estado exibido. Confira se a supervisão consegue identificar quando a informação foi atualizada e quais conclusões ainda pode tirar. Uma tela que mostra zero rejeições precisa indicar o período que conseguiu observar. Use o teste para definir quando investigar a operação e quando verificar o próprio monitoramento.

O capítulo do Google SRE sobre monitoramento de sistemas distribuídos distingue verificações que observam o comportamento externo de dados que revelam o estado interno. Na prova de aceite, peça que uma verificação percorra uma tarefa representativa e que a equipe consiga confrontar o resultado com os eventos internos. Se o pedido de teste passou, a operação ganha evidência sobre aquele percurso. Se uma fila interna cresce no mesmo momento, a equipe ainda precisa descobrir quais pedidos foram afetados e quanto tempo podem esperar. [Monitoramento de sistemas distribuídos, Google SRE](https://sre.google/sre-book/monitoring-distributed-systems/)

## Decida quais avisos pedem ação imediata

Prepare um conjunto de falhas que represente o mesmo problema em etapas diferentes. Um pedido aguardando envio pode gerar aviso na fila, aumento de latência e atraso no total processado. Peça que o fornecedor mostre como agrupa os sinais e quais evidências permanecem disponíveis para investigar. Conte quantas vezes a pessoa de plantão precisa interromper outra tarefa e confira se consegue descobrir quais pedidos estão próximos do prazo.

Inclua um erro que pode aguardar o próximo expediente, como a rejeição de um cadastro que só será usado na semana seguinte. Depois simule outro que afeta pedidos perto do horário de corte. Peça que a pessoa escalada encontre as duas ocorrências e explique por que somente uma exige ação imediata. Use as decisões para cotar a cobertura com a Tironi Tech. A regra de prioridade deve acompanhar o efeito comercial observado e o horário em que alguém tem condição de agir.

## Confirme a recuperação pela fila que ainda precisa avançar

Em uma demonstração, faça o ERP voltar a aceitar pedidos novos enquanto os pedidos mais antigos continuam pendentes. Peça que o fornecedor mostre o que acontece com o alerta original. O serviço pode estar disponível e a operação ainda ter entregas atrasadas. O responsável precisa saber quantos pedidos permanecem na fila, qual deles chegou primeiro e quais dependem de validação antes de seguir. Combine em que momento o fornecedor pode comunicar a recuperação técnica e em que momento a área que recebe os pedidos confirma a normalização.

Use como exemplo hipotético uma fila de 180 pedidos que recebe mais 20 por hora. Se o fluxo consegue concluir 50 por hora depois da retomada, a fila diminui em 30 por hora e levaria seis horas para esvaziar, mantidas essas taxas. Peça que o fornecedor demonstre como mede o ritmo de recuperação e como alerta a operação quando a previsão ultrapassa o próximo corte. Se alguns pedidos exigem conferência manual, acompanhe também a capacidade da equipe que pode liberá-los. A estimativa deve indicar quais taxas foram observadas e quais dependem de hipóteses.

## Compare plantão e expediente pelo horário em que a empresa pode agir

Escolha um incidente ocorrido à noite e outro que começou no início do expediente. Para cada caso, identifique quem tinha acesso para investigar, quem podia falar com o fornecedor do sistema e quem tinha autoridade para avisar os clientes. Uma cobertura contínua só reduz o tempo até a ação quando o responsável consegue executar pelo menos a primeira etapa. Peça que o orçamento indique as atividades que entram no plantão e mostre o que fica aguardando a equipe do próximo turno.

Faça a comparação com uma integração que recebe pedidos durante todo o fim de semana, mas só inicia a separação na segunda-feira. Uma falha pequena pode aguardar quando existe tempo para recuperar a fila antes do primeiro corte. Uma interrupção que coloca em risco os pedidos acumulados pode exigir uma investigação mais cedo. Use a capacidade medida na recuperação para decidir o horário que merece cobertura. Na conversa com a Tironi Tech, leve o histórico de incidentes, a escala das áreas e o horário do primeiro compromisso que a falha pode afetar.

## Teste a escalada quando o primeiro responsável não responde

Na prova de aceite, deixe um alerta sem confirmação pelo tempo definido para ocorrências urgentes. Peça que o fornecedor mostre quando entra o substituto, o que ele recebe e se consegue assumir a ocorrência sem abrir outro chamado. Depois faça o titular voltar ao turno e confira se ele encontra a análise já iniciada. O registro precisa mostrar quem está agindo e preservar informações que serão úteis se o caso passar a outro fornecedor.

Repita o teste quando o atendimento foi confirmado, mas a investigação depende de uma resposta externa. Defina se o próximo aviso deve cobrar o fornecedor, chamar o gestor da operação ou apenas lembrar a pessoa que assumiu. Peça que a proposta especifique as condições de cada escalada. Compare o tempo até confirmar o recebimento com o tempo até produzir uma evidência útil para decidir o que fazer com a fila.

## Confira a cobertura durante uma manutenção programada

Simule uma janela em que o ERP fica indisponível para receber pedidos, enquanto o portal continua aberto. Peça que o fornecedor mostre quais alertas são suspensos e quais sinais continuam disponíveis. A equipe pode aceitar uma espera temporária na fila e ainda precisar receber um aviso se o portal deixar de registrar as compras. Use o ensaio para definir quem informa o início e o fim da janela e qual área verifica se o volume acumulado cabe no tempo disponível para a retomada.

Estenda a manutenção além do horário planejado. Confira qual aviso aparece quando termina o intervalo aprovado e quem recebe a estimativa atualizada. Se o próximo turno já começou, peça que o responsável encontre a decisão original e identifique as ocorrências que precisam de atenção. Inclua no orçamento o trabalho de manter calendários diferentes quando há filiais com horários próprios. Uma rotina de manutenção compartilhada pode exigir menos intervenções do que cadastrar e conferir cada janela manualmente.

## Combine a evidência usada no chamado a outro fornecedor

Escolha um caso em que a plataforma de origem confirma o envio e o destino ainda não mostra o registro. Peça que a pessoa de plantão reúna horários, referências dos pedidos afetados e resultado da última verificação no destino. Confira que parte pode ser encaminhada ao fornecedor externo e como a operação preserva o restante para consulta interna. Faça a passagem com um pedido de teste e confira se o fornecedor consegue localizar o evento sem depender de uma nova coleta feita pela equipe comercial.

Repita o roteiro com um retorno indicando que o destino recebeu os dados e recusou parte deles. Determine quem interpreta o motivo e quem pode corrigir o cadastro ou a regra de negócio. A equipe técnica pode identificar a rejeição, enquanto estoque ou financeiro precisa autorizar o ajuste. Peça que a proposta descreva onde fica a pendência quando muda de área e como o supervisor acompanha a fila até o desfecho. No diagnóstico com a Tironi Tech, leve o registro de um chamado que passou por dois fornecedores e indique em que momento a investigação ficou sem responsável.

## Meça minutos de cobertura e trabalho de investigação separadamente

Durante o piloto, registre quanto tempo transcorreu até o alerta e quanto trabalho efetivo a equipe empregou para localizar a causa. Compare um caso com referência suficiente para investigar na primeira tentativa e outro em que o responsável precisou solicitar dados a uma área. Se a cobertura inclui apenas triagem, peça que a proposta explicite a informação que será entregue à equipe seguinte. Se inclui investigação, defina uma evidência de conclusão, como a identificação da etapa parada e dos pedidos que ainda precisam de acompanhamento.

## Orce a cobertura por prazo de negócio

Entregue aos fornecedores três rotinas com horários e consequências diferentes. O envio de pedidos pode exigir intervenção antes do corte de expedição. A atualização do catálogo pode tolerar espera até a abertura da loja. A exportação do fechamento precisa estar disponível quando o financeiro inicia a conferência. Peça que cada proposta mostre como detectaria um atraso em cada rotina, quem assumiria a investigação e até que horário ainda seria possível recuperar o trabalho sem alterar o compromisso comercial.

Compare o preço usando o mesmo período e a mesma quantidade de ocorrências. Solicite uma estimativa para monitorar os fluxos com equipe própria e outra que inclua investigação no horário crítico. Se houver cobrança por incidente, peça que o fornecedor aplique a regra a uma parada que afeta pedidos, estoque e catálogo ao mesmo tempo. A proposta deve explicar quando existe uma ocorrência com vários efeitos e quando cada fluxo demanda tratamento separado. Use essa comparação para calcular quanto custa ampliar a cobertura sem mudar o número de sistemas conectados.

## Teste o alerta que começa antes de um compromisso sazonal

Escolha uma semana em que a empresa espera volume acima do normal, como o fechamento de uma campanha. Separe o crescimento esperado da fila de um atraso que ameaça a expedição. Durante o ensaio, faça a operação processar menos pedidos por hora mesmo com a integração ainda confirmando recebimento. Peça que o fornecedor indique como estima o risco de perder o corte e o que a supervisão consegue verificar antes de redistribuir trabalho ou revisar a previsão com vendas.

Repita o teste quando a campanha terminar. A regra temporária precisa ter um responsável e uma data para revisão. Se o limiar excepcional continuar valendo depois, uma fila anormal numa semana comum pode passar sem aviso. Peça que a equipe demonstre como confere os valores vigentes e como recupera a justificativa registrada. Inclua no orçamento o trabalho de preparar o calendário sazonal e acompanhar a operação até que volte ao ritmo utilizado na medição inicial.

## Entregue os dados de investigação em formato que o suporte possa consultar

Peça uma amostra de ocorrência que inclua as referências usadas para procurar o registro nos dois sistemas, o período afetado e a última confirmação disponível. Verifique se a pessoa de plantão consegue abrir o detalhe com seu perfil normal. Quando a investigação envolve um fornecedor diferente, mostre quais dados ele precisa receber para localizar o evento sem depender de acesso completo ao ambiente. Teste a transferência com identificadores fictícios e confirme que o retorno do fornecedor fica associado à ocorrência que motivou o contato.

No diagnóstico com a Tironi Tech, leve dois incidentes que chegaram a áreas diferentes e a lista de permissões necessárias para conferi-los. A contratação pode concentrar o primeiro piloto em um fluxo com eventos suficientes para confirmar o atraso e em outro que ainda exige instrumentação. Compare o custo de manter as referências disponíveis com o tempo que a equipe gasta reconstruindo o percurso quando a informação se perde.

## Revise os incidentes que só apareceram no atendimento

Selecione uma semana em que o comercial abriu chamados por atraso e compare os registros com os avisos que a equipe técnica recebeu. Para cada problema, anote quando a primeira pessoa percebeu a demora, o que já estava visível nos sistemas e qual pedido motivou a investigação. Se o cliente avisou antes do painel, verifique se a evidência existia no momento ou só apareceu depois. Uma configuração de alerta pode resolver o primeiro caso. No segundo, o orçamento precisa incluir a obtenção do dado que faltava.

Use um exemplo em que uma filial deixa de receber pedidos enquanto as demais continuam operando. Um painel agregado pode mostrar volume normal e esconder a interrupção local. Peça que o fornecedor confira o fluxo por filial e indique onde pode obter uma referência para cada destino. Compare a quantidade de alertas prevista com a escala de quem vai investigar. Quando o custo de observar todas as combinações for alto, escolha primeiro aquelas em que um atraso impede a entrega ou exige contato com o comprador.

## Confira quando uma ocorrência antiga deixa de ser investigável

Escolha um atraso descoberto depois da emissão da nota ou do fechamento do mês. Dê à equipe a referência que ela normalmente recebe e observe se consegue encontrar as confirmações de origem e destino. Peça que o fornecedor identifique por quanto tempo os dados ficam disponíveis para pesquisa e quando é preciso solicitar uma recuperação. No orçamento, compare a guarda de detalhes por poucos dias com a retenção dos registros necessários para investigar no próximo fechamento. O histórico deve ser suficiente para responder às perguntas que de fato continuam aparecendo naquele período.

Inclua uma situação em que o responsável pelo incidente mudou de função. Um analista que recebe a investigação semanas depois precisa descobrir onde o pedido parou, qual evidência sustentou a decisão e o que a operação já informou ao cliente. Faça essa pessoa reconstruir o caso com os acessos do próprio cargo. Se ela precisa solicitar acesso a uma ferramenta que não usa na rotina, registre o esforço de autorização e verifique se a proposta de monitoramento oferece uma forma de consultar somente as referências necessárias.

## Compare o piloto com uma linha de base que inclua os alertas sem ação

Antes de instalar o novo monitoramento, registre durante um turno quantos avisos chegam, quantos exigem investigação e quantos já chegam tarde para cumprir o próximo compromisso. Durante o piloto, aplique a mesma medição e inclua as ocorrências descobertas por telefone ou em outra ferramenta. Uma redução no total de avisos pode ser útil quando a equipe continua localizando os atrasos importantes. Se parte dos incidentes saiu da medição porque a ferramenta passou a agrupá-los, use a lista de pedidos afetados para conferir a mudança.

Peça que o plantonista registre qual decisão tomou ao receber cada ocorrência representativa. Pode ser aguardar uma execução já prevista, solicitar ajuda, avisar a operação ou iniciar a recuperação. Use esses registros na revisão com a Tironi Tech para comparar a entrega de alertas com a contratação de investigação. A primeira pode bastar quando a equipe já tem cobertura e acesso. A segunda merece uma estimativa quando os casos ficam sem análise durante a janela em que ainda é possível recuperar os pedidos.

## Ensaie a decisão antes do horário de corte

Prepare um cenário com vendas, depósito e suporte. Às 15h40, o portal confirma o recebimento de cinco pedidos, mas o ERP confirma apenas dois. O depósito encerra a formação das rotas às 16h. Peça que a pessoa de plantão localize os três pedidos, confira há quanto tempo estão esperando e informe ao depósito quais rotas podem ser afetadas. O teste deve mostrar se o aviso chega cedo o suficiente para que a operação decida manter uma rota aberta, mudar a previsão ou pedir uma confirmação ao cliente.

Introduza uma segunda ocorrência durante o ensaio. Enquanto o suporte investiga a fila do portal, o catálogo de uma filial deixa de atualizar. Entregue ao plantonista os mesmos acessos e canais que ele terá em produção. Observe se consegue preservar o registro das duas ocorrências, explicar qual precisa de atenção primeiro e encaminhar a outra com um prazo. Se a proposta cobre vários fluxos, avalie a capacidade de assumir casos simultâneos e pergunte quando há alguém disponível para dividir o trabalho.

Peça ao depósito que confirme o encerramento do primeiro caso. O responsável deve conseguir identificar os pedidos recuperados, os que perderam o corte e a previsão comunicada ao cliente. Se a ocorrência técnica já foi encerrada, registre em que fila permanece o trabalho pendente. Combine o resultado que o fornecedor entrega e o resultado que a área comercial confirma. Essa divisão permite avaliar a cobertura pelo que a equipe recebeu durante a janela em que ainda podia agir.

## Defina o que muda quando o volume cresce

Use o histórico para escolher uma filial que vai dobrar o número de pedidos ou um canal que vai operar em horário adicional. Peça propostas para os dois cenários com o mesmo prazo de recuperação. O aumento de volume pode exigir mais capacidade para esvaziar a fila, enquanto o novo horário pode exigir cobertura num período em que a equipe de negócio não está presente. Em cada caso, confirme se o preço acompanha os eventos observados, as horas de plantão ou o trabalho efetivo de investigação.

Faça uma revisão após algumas semanas de uso. Escolha uma ocorrência que a equipe resolveu sem ajuda e outra que ficou parada após o primeiro aviso. Reúna os dados usados para decidir e estime quanto tempo seria necessário com atendimento contratado. Use esse comparativo na conversa com a Tironi Tech para decidir se a próxima proposta deve incluir outro fluxo, ampliar o horário ou melhorar as informações de diagnóstico antes de acrescentar cobertura.

Peça, por fim, que o supervisor repita a conferência sem a pessoa que instalou a solução. Ele precisa localizar a fila, explicar o efeito sobre a operação e encontrar os responsáveis por cada etapa. Registre onde faltou informação e quem corrige esse ponto. Vincule o aceite a essa demonstração e ao teste de recuperação, para que a operação consiga verificar a entrega com os acessos que manterá depois do piloto.

## Confira se a operação consegue mudar o prazo de um fluxo

Escolha uma integração cujo horário de corte mudou porque o depósito abriu um segundo turno. Peça ao supervisor que localize a configuração em uso e informe qual equipe precisa aprovar a alteração. Repita um atraso que antes disparava aviso e confira como o novo prazo aparece nos registros. Se o painel reclassificar ocorrências antigas, verifique se o relatório ainda permite reconstruir a decisão com a regra vigente na data do incidente.

Faça o mesmo exercício com uma exceção que vale por apenas um dia. Uma rota antecipada pode exigir aviso mais cedo sem alterar o prazo das demais filiais. Peça que o fornecedor demonstre como a configuração temporária termina e como a operação confirma a volta à regra regular. Na proposta, estime quantas mudanças semelhantes acontecem por mês e quais podem ser executadas pela equipe interna. Use o tempo observado para comparar um serviço que inclui revisão periódica das regras com outro em que cada ajuste é cobrado separadamente. Registre a tarefa e o responsável para que a próxima troca de escala seja tratada no prazo.
