# Como contratar a modernização de um sistema legado sem interromper a operação

Comece pelo fluxo que sua empresa precisa preservar durante a troca. Uma distribuidora pode depender da emissão de pedidos até o horário de corte, enquanto uma prestadora de serviços precisa manter a consulta ao histórico de atendimento. Antes de solicitar proposta, escolha uma operação real e documente como ela começa, quais sistemas consulta e o que comprova que terminou. Essa referência permite comparar modernização incremental, substituição por uma plataforma pronta e reconstrução sob medida com o mesmo critério de negócio.

## Leve um caso real para o diagnóstico

Escolha uma transação que atravesse o sistema legado e outra ferramenta. Em uma operação de venda, acompanhe a aprovação, a reserva e a entrega. Anote em que tela cada equipe trabalha, qual código identifica a transação e o que muda caso o cliente altere o pedido. Inclua um item que segue o fluxo comum e uma exceção frequente. Na primeira reunião, peça que o fornecedor mostre quais etapas poderiam migrar primeiro e quais dependências precisam ser isoladas.

Se o sistema atual exige trabalho manual, observe em quais pontos a equipe usa planilhas ou mensagens para completar o processo. Um campo ausente pode ter sido substituído há anos por uma anotação em outra ferramenta. Se a proposta copiar apenas as telas existentes, esse trabalho paralelo pode continuar. Se importar todas as exceções sem revisão, o escopo cresce antes de a equipe saber quais regras continuam necessárias.

## Compare propostas pelo risco da transição

Peça que cada fornecedor escolha o mesmo fluxo e descreva a primeira entrega, o que continuará sendo atendido no sistema atual e como verificar os dados após a mudança. Para um sistema de pedidos, o primeiro recorte pode ser consultar pedidos já encerrados em uma interface nova, mantendo criação e faturamento no legado. Na homologação, compare a aparência da consulta, a consistência dos dados e a resposta para um pedido que existe no ERP mas ainda não aparece no portal.

Uma proposta de troca completa precisa explicar como a empresa vai operar durante a janela de mudança e quais transações não podem ficar pendentes. Uma proposta incremental precisa indicar quais partes continuam usando a estrutura antiga, por quanto tempo e como a equipe reconhece a fonte de cada informação. Para as duas, solicite critérios de aceite e um exercício de retorno ao procedimento anterior em ambiente de teste.

## Escolha uma primeira entrega com fronteiras claras

Escolha um fluxo que tenha uma entrada identificável e uma saída que sua equipe consiga conferir. Para uma distribuidora, pode ser acompanhar a situação dos pedidos de uma filial em um portal novo. A entrada é um pedido existente no sistema de gestão. A saída é uma consulta que mostra as mesmas etapas aprovadas pela expedição. Vendedores podem usar a página nova para consultar e continuar emitindo pedidos pela ferramenta atual durante o piloto.

Peça ao fornecedor para listar quais operações precisam atravessar essa fronteira. Uma consulta de leitura pode precisar de atualização de cadastro, regras de visibilidade por carteira e histórico de entrega. Uma alteração no próprio pedido já envolve autorização, registro e resposta quando o sistema de gestão está indisponível. Decida em quais situações a primeira versão termina em uma orientação para o operador e em quais ela realmente executa uma mudança.

Teste a proposta com uma equipe que não participou do desenho. Dê a ela a tarefa de encontrar uma venda pelo número de pedido e explicar a situação ao cliente. Em seguida, apresente um pedido sem confirmação de entrega e pergunte onde verificaria o próximo passo. Observe se os operadores reconhecem a origem, o horário da última atualização e a informação que ainda depende de confirmação. Use a observação para definir o treinamento e revisar a interface.

## Trate relatórios e conciliações como parte da operação

Peça uma amostra dos relatórios que a direção usa para fechar a semana ou o mês. Se o sistema legado reúne vendas por situação de faturamento, o painel novo precisa indicar com quais estados e horários agrupa cada venda. Dois relatórios podem apresentar totais diferentes pelo simples fato de agruparem por data de aprovação e de emissão fiscal. Compare as regras sobre pedidos devolvidos, cancelados e parcialmente entregues antes de usar a divergência como indicador de defeito.

Na homologação, escolha um período fechado e reconcilie o total com registros individuais. Separe diferenças explicadas por regra das que exigem investigação. Aponte quem aprova cada transformação de dados e peça que a decisão seja registrada junto ao teste. Depois da implantação, a equipe precisa conseguir reproduzir a conferência quando uma atualização mudar o modo como o relatório é calculado.

## Defina o que acontece com o histórico

Separe o histórico que a equipe consulta todos os dias dos registros que só aparecem em auditorias, disputas ou análises anuais. Para o primeiro grupo, escolha quais filtros e identificadores precisam estar disponíveis no novo sistema. Para o segundo, defina como uma pessoa autorizada localiza e lê um registro quando necessário. A proposta pode prever uma operação de consulta independente da migração integral, desde que a empresa consiga acessar os arquivos e explicar de onde vieram.

Faça o teste com registros de anos diferentes. Uma venda antiga pode usar um código de produto desativado ou pertencer a uma filial que mudou de código. Confira se a consulta mantém o vínculo com o registro original. Se a empresa precisar agrupar dados históricos pela estrutura atual, documente a transformação separadamente. Dessa forma, o relatório pode usar a classificação nova enquanto o documento original continua consultável.

## Simule o dia em que será preciso voltar

Descreva um motivo concreto para suspender a virada. Por exemplo, a expedição encontra pedidos válidos que deixaram de aparecer após a atualização. Defina quem pode tomar a decisão, o horário em que equipe e fornecedor precisam se falar e qual procedimento será usado até que o fluxo seja reparado. A demonstração deve mostrar o que acontece com as transações feitas no sistema novo antes dessa decisão.

Se algumas operações já foram registradas, voltar a usar a plataforma antiga exige reconciliar essas alterações. Peça um exercício com um cadastro atualizado e um pedido novo depois da virada. O fornecedor deve mostrar como localizar ambos, qual sistema conserva a versão aplicável e como a equipe confere se a operação anterior pode voltar a receber pedidos. Combine quem aprova a retomada e qual teste será repetido quando o sistema novo for reativado.

## Identifique as dependências que só aparecem em produção

Peça uma relação dos arquivos, integrações e tarefas agendadas que o fluxo usa. Comece pelos horários em que elas rodam e por quem recebe seus resultados. Uma exportação enviada toda madrugada pode alimentar um painel que ninguém associava ao sistema legado. Um arquivo produzido no fechamento do mês pode ser necessário para o financeiro mesmo que a equipe comercial trabalhe apenas nas telas de pedidos. Confirme as dependências com quem consome os dados e compare com os registros de execução disponíveis.

Em uma proposta de modernização incremental, escolha como tratar cada dependência. Algumas podem passar a consumir a interface nova. Outras podem continuar ligadas ao sistema atual até que o relatório ou a tarefa seja substituído. Documente esse período em termos de trabalho e responsabilidade. Se dois sistemas precisam conviver por três fechamentos, determine quem verifica a consistência dos registros em cada fechamento e qual teste autoriza desligar o fluxo antigo.

Inclua um exercício de calendário no aceite. Faça a equipe simular uma venda em dia útil, uma alteração depois do horário de corte e um fechamento com transações pendentes. Em cada cenário, confira quem recebe o aviso, onde consulta a situação e como pode continuar o trabalho. Esse teste é especialmente útil quando o fornecedor conhece a interface mas depende da equipe interna para saber em que momento uma rotina altera a operação.

## Descubra quais regras valem a pena migrar

Peça aos operadores exemplos de tarefas que exigem uma sequência própria de teclas, cartas de autorização ou planilhas. Em seguida, converse com quem pode explicar a regra por trás do procedimento. Um vendedor pode abrir o cadastro duas vezes porque o sistema perdeu a capacidade de consultar um endereço diferente do faturamento. Outro pode seguir uma aprovação manual porque o cliente tem um contrato especial. No primeiro caso, a modernização pode retirar um contorno técnico. No segundo, é preciso preservar a condição comercial até que a empresa decida revisá-la.

Escolha um caso recente para cada regra importante e anote entrada, resultado, responsável e frequência. Nas propostas, peça que cada fornecedor indique onde a regra será configurada e como um gestor altera a configuração. Inclua exemplos que mostrem limites, como uma aprovação que muda quando o pedido ultrapassa um valor ou quando o cliente pertence a duas carteiras. Uma lista de funcionalidades informa o que existe. Os casos de teste mostram como a operação vai funcionar.

## Compare a parada prevista com o custo de manter dois sistemas

Peça uma estimativa para o período em que as duas ferramentas serão usadas em paralelo. Inclua suporte, licenças, horas de revisão e treinamento. Se duas versões recebem pedidos durante a transição, a equipe vai precisar conciliar quais operações entraram em cada uma. Se apenas uma recebe pedidos e a outra lê os dados, confirme quanto atraso a operação tolera para a consulta. Use a estimativa para comparar propostas que adotam estratégias de implantação diferentes.

O custo de uma janela de parada depende de quando ela ocorre e de quais operações ficam afetadas. Uma alteração de madrugada pode atrapalhar uma carga que roda nesse horário. Um fechamento no sábado pode coincidir com recebimento ou inventário. Use o calendário da operação para escolher a janela e defina o momento em que a virada precisa ser interrompida para dar tempo de aplicar o procedimento de retorno.

## Defina qual sistema pode alterar cada registro durante a transição

Quando as equipes passam a trabalhar em dois sistemas, escreva onde cada alteração deve começar. A ferramenta nova pode consultar pedidos e receber anotações de atendimento, enquanto o sistema atual continua responsável por condições comerciais e emissão. Para cada campo ou ação, registre onde a mudança é aceita, quando fica visível na outra ferramenta e quem resolve uma divergência. Inclua essas regras na tela de orientação e no roteiro de treinamento.

Teste um caso em que o atendimento registra um endereço de entrega novo enquanto a expedição já prepara o pedido. A equipe deve saber se a informação pode mudar na etapa atual e quem autoriza a mudança. Se houver uma atualização simultânea em duas telas, a proposta precisa explicar qual resultado é aceito e como a pessoa que fez a outra alteração recebe retorno. Registre a regra de negócio antes de discutir o mecanismo de sincronização.

As etapas de transição podem ser diferentes para cada unidade. Uma filial pode passar a emitir pedidos pela ferramenta nova enquanto outra fica no legado até concluir o treinamento. No aceite, use usuários de ambas as unidades e verifique qual tela cada um deve usar para a mesma operação. Inclua uma transferência de carteira e um pedido atendido por mais de uma filial. Esses casos mostram se a regra acompanha a organização real da empresa.

## Coloque prazo e condição de saída na operação paralela

Defina o que precisa acontecer para encerrar a convivência de sistemas. Um critério pode ser completar dois fechamentos consecutivos com conciliação aprovada pelo financeiro. Outro pode ser comprovar que a equipe localiza pedidos antigos e novos sem depender do fornecedor. Em vez de fixar só uma data, liste as evidências que as equipes responsáveis precisam revisar e a etapa que será adiada se um resultado não for aceito.

Peça um custo de extensão da operação paralela e uma relação das dependências que continuam pagas nesse período. Se a virada atrasar por dados incompletos, confira quanto custa manter os dois ambientes ativos e quem vai resolver o cadastro. Uma proposta com custo previsível para essa situação ajuda a empresa a decidir o que migrar primeiro sem comprometer serviços críticos.

## Use dados da operação para definir metas de desempenho

Antes de contratar, identifique as tarefas que mais sofrem com lentidão. Para um atendente, pode ser localizar um cliente pelo número de contrato. Para a expedição, pode ser gerar a lista de separação no horário de pico. Meça o tempo da ação completa, incluindo a espera por dados externos. Registre o ambiente, o volume aproximado e os horários observados. Use essa linha de base para que as propostas sejam comparadas com a mesma referência.

No teste de desempenho, inclua uma rotina concorrente. Um sistema pode responder bem à consulta individual, mas ficar lento quando o financeiro importa uma planilha ou quando o ERP confirma centenas de pedidos. Peça ao fornecedor que demonstre o que o operador vê durante a espera e como o suporte descobre a etapa que atrasou. A aceitação pode exigir um tempo para a consulta e uma condição separada para processamento em lote. Documente o horário e o volume que cada condição cobre.

## Avalie se a equipe consegue assumir a manutenção

Escolha uma mudança frequente, como atualizar a regra que encaminha pedidos especiais para revisão. Peça que alguém da sua equipe acompanhe o ajuste em homologação, entenda em que arquivo ou tela a regra vive e consiga repetir o teste. Confira se a documentação indica onde verificar o resultado e como restaurar a configuração anterior. Esse exercício revela quais alterações podem ser feitas internamente e quais dependem do fornecedor.

Na proposta, separe treinamento operacional de transferência técnica. Quem atende o cliente precisa saber onde localizar uma venda e pedir ajuda. Quem mantém a solução precisa conhecer dependências, configurações, ambientes e procedimentos de recuperação. Peça entregas para os dois grupos e combine uma sessão em que a equipe faça o exercício enquanto o fornecedor acompanha. A capacidade de completar o exercício é uma evidência que pode entrar no aceite.

## Teste permissões com o recorte de carteira real

Liste os grupos que usam o sistema e descreva a informação que cada um precisa para trabalhar. Um supervisor regional pode consultar várias filiais, enquanto um vendedor vê apenas a carteira atribuída. A equipe que mantém o catálogo pode atualizar descrições, sem precisar consultar condições individuais dos clientes. Use essas diferenças para preparar contas de homologação e revisar a proposta junto aos gestores de cada área.

Na demonstração, transfira ficticiamente uma conta de uma região para outra e acompanhe o que acontece com as consultas, anotações e tarefas abertas. Confira se o vendedor anterior continua vendo os registros necessários para encerrar uma pendência e quando esse acesso termina. Compare o comportamento com a regra que a empresa aprovou. Se houver etapas manuais, registre quem aplica cada alteração e como o parceiro comprova que ela ocorreu.

## Conduza a entrada em produção por etapas que a equipe consiga observar

Divida a virada em ações com início, término e responsável. Antes da primeira liberação, confira a última carga, a amostra de transações e a disponibilidade do suporte. Ao liberar o primeiro grupo de usuários, acompanhe um fluxo real até o fim e registre as diferenças observadas. Se a próxima etapa depende de um teste, deixe explícito quem decide se o resultado autoriza ampliar o acesso.

Combine como registrar um desvio durante a mudança. Quando um atendente encontrar um pedido divergente, ele precisa saber que identificador informar, em qual canal pedir ajuda e como seguir atendendo enquanto o caso é conferido. Uma lista simples de pendências com responsável e próxima ação evita que solicitações se percam entre conversas e chamados. Na revisão do dia, confirme se cada caso tem uma decisão ou prazo de retorno.

Antes de ativar a etapa seguinte, compare a operação com os limites definidos no aceite. Se a equipe completou vendas no prazo, os registros conciliam e os casos pendentes têm responsável, há evidência para ampliar o recorte. Se a velocidade melhorou mas os pedidos perderam informações importantes no atendimento, revise o ponto de transferência estabelecido na proposta com exemplos concretos.

## Organize a proposta em entregas que a empresa pode aceitar

Peça que a proposta indique quais fluxos ficarão disponíveis em cada entrega, quais dependências precisam ser resolvidas e quem pode aprovar o resultado. «Migrar clientes» pode significar importar os cadastros ativos, disponibilizar os documentos históricos ou reconstituir a carteira de cada vendedor. Ao escrever a etapa, indique o conjunto de dados, o período e a tarefa que o usuário deve conseguir executar. Associe o pagamento e a validação aos marcos definidos no contrato, considerando o tempo que a equipe precisa para homologar.

Escolha antes da implementação como tratar descobertas durante a análise. Por exemplo, o histórico pode existir em dois formatos conforme o ano, e a proposta inicial pode cobrir apenas um deles. Peça uma estimativa da frequência de casos afetados e consulte quem usa esses registros. A empresa pode decidir criar uma busca separada para o período antigo, ampliar a migração ou manter uma cópia consultável. Registre o efeito de cada decisão no prazo, no custo e na forma de atender o cliente.

## Use a primeira semana para testar a continuidade do atendimento

Escolha duas operações que representem o início e o fim de um dia de trabalho. Em uma distribuidora, a primeira pode ser importar pedidos recebidos à noite. A segunda pode ser fechar as entregas que saíram no último horário. Defina onde a equipe confere o total, como encontra exceções e a quem pede ajuda. A revisão deve usar a mesma fonte que será consultada depois que o parceiro deixar de acompanhar a operação diariamente.

Simule uma ausência dentro da equipe. Se o responsável habitual pelo fechamento estiver fora, um substituto deve conseguir identificar transações que ainda aguardam resposta e localizar o procedimento de continuidade. Registre os pontos em que ele precisou abrir outra ferramenta ou pedir acesso. Uma instrução que funciona apenas para quem participou do projeto precisa ser revista antes de a empresa ampliar a implantação.

Na reunião seguinte, compare os casos atendidos com os casos previstos na proposta. Por exemplo, a nova consulta pode resolver a maioria dos pedidos e deixar de mostrar vendas cujo número mudou depois da emissão. Verifique se essa situação exige uma correção no recorte atual, uma regra de busca adicional ou um procedimento de consulta ao histórico. A decisão deve incluir o impacto no atendimento, com quem ficou a pendência e como será feito o próximo teste.

## Decida quando encerrar o ambiente antigo

Separe as condições para parar de registrar novos dados daquelas necessárias para desligar o acesso ao histórico. A primeira decisão pode depender da conciliação de vendas e do treinamento das equipes. A segunda pode depender de conferência dos documentos migrados, da entrega de uma cópia consultável e do aceite das áreas que usam relatórios periódicos. Se essas condições têm prazos diferentes, registre o custo de manter apenas o acesso de consulta e quem será responsável por ele.

Peça que o fornecedor demonstre como o time encontra um documento antigo sem depender de uma instalação ou conta pessoal. Escolha uma nota ou pedido cujo cadastro tenha mudado durante a migração. Confirme que o documento ainda pode ser localizado pelo identificador original e que o acesso respeita o papel do usuário. Registre a evidência com o roteiro de aceite, incluindo o que deve acontecer quando um arquivo estiver ausente.

Depois do desligamento, acompanhe o primeiro fechamento de período com os sistemas que permaneceram. Confira se algum relatório, exportação ou rotina apresenta diferenças por depender de uma informação cujo caminho mudou. Se o resultado atender aos critérios do projeto, registre a data da revisão e o responsável por manter a documentação e os testes.

## Prepare o material para o diagnóstico da Tironi Tech

Reúna um fluxograma simples, uma amostra fictícia representativa e a agenda de rotinas críticas. Leve também os relatórios que precisam continuar funcionando e um exemplo de problema que já exigiu retorno ao procedimento manual. No diagnóstico, a Tironi Tech pode usar esse material para delimitar um fluxo de software sob medida, identificar as integrações necessárias e propor um teste de transição que envolva as áreas responsáveis.

Saia da primeira reunião com a lista de perguntas que ainda impedem uma proposta. Em um caso, pode ser preciso saber se o legado permite exportar as transações que mudaram desde a última carga. Em outro, se o fornecedor atual entrega a definição dos campos de um relatório. Designe uma pessoa para buscar cada resposta e combine quando será possível escolher o primeiro recorte. Esse roteiro dá à diretoria uma base para aprovar o investimento e decidir como medir o resultado da modernização.
