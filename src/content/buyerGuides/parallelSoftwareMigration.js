export const parallelSoftwareMigration = {
  slug: 'migracao-sistema-legado-operacao-paralela',
  date: '2026-11-26',
  updated: '2026-11-26',
  description: 'Compare propostas de migração de software com operação paralela, conciliação de resultados e critérios para desligar o legado.',
  keywords: ['migração de software com operação paralela', 'operação paralela em migração de sistemas', 'orçamento de migração de sistema legado'],
  emphasis: 'migração de software com operação paralela',
  intro: 'Para contratar migração de software com operação paralela, defina quais transações cada sistema recebe, onde elas produzem efeitos oficiais e como serão conciliadas. Inclua no orçamento o trabalho de manter os dois ambientes, corrigir diferenças e encerrar o legado depois que a equipe confirmar os resultados.',
  takeaways: [
    'Delimite a autoridade de cada sistema durante a convivência.',
    'Concilie registros e efeitos externos antes de transferir volume.',
    'Estabeleça critérios de saída e teste o retorno com dados novos.',
  ],
  sections: [
    {
      heading: 'Escolha o tipo de paralelo pela decisão que a empresa precisa tomar',
      paragraphs: [
        'Uma **migração de software com operação paralela** pode reproduzir entradas no sistema novo para comparar resultados ou dividir o atendimento entre recortes que cada sistema assume. Descreva a decisão que precisa tomar. Se a empresa quer saber se o novo sistema calcula a reserva corretamente, pode comparar resultados sem efetuar outra reserva. Se precisa provar que outra unidade consegue operar de ponta a ponta, escolha um grupo em que o novo sistema possa assumir efeitos oficiais conforme a autorização da operação.',
        'Imagine uma distribuidora trocando seu sistema de pedidos. No primeiro ensaio, o legado continua confirmando vendas, reservando estoque e entregando dados à expedição. O sistema novo recebe uma cópia autorizada das entradas e calcula o resultado esperado para conferência. Depois do aceite, uma carteira pode passar a operar exclusivamente no fluxo novo. Peça que a proposta descreva onde a mudança de autoridade é registrada e o que continuará visível para as equipes que consultam pedidos de ambas as carteiras.',
        'Defina o que será comparado em cada modalidade. Uma prova sem efeitos externos pode verificar preço, quantidade, regra de reserva e estado esperado. A comprovação de entrega a outro sistema exige um teste próprio no ambiente autorizado. Declare quais integrações serão simuladas e quais receberão as transações da carteira piloto. O orçamento de convivência precisa mostrar quanto trabalho existe para manter a comparação e de que evidência depende a decisão de ativar o novo fluxo.',
      ],
    },
    {
      heading: 'Atribua um sistema responsável por cada efeito durante a transição',
      paragraphs: [
        'Monte uma matriz por função com criação, revisão, cancelamento, reserva, faturamento e expedição. Em cada linha, indique que sistema pode registrar o efeito, quais fontes recebem uma cópia e quem verifica a confirmação. Uma venda pode ser criada no legado e aparecer no sistema novo para consulta durante a prova. A equipe de expedição precisa reconhecer a referência que autoriza separar. Faça os fornecedores demonstrarem essa diferença com um pedido novo, um pedido em revisão e um pedido encerrado.',
        'Inclua operações iniciadas antes da mudança. Um pedido aberto no legado pode receber complemento ou cancelamento depois do corte. Escolha se aquele grupo permanece sob responsabilidade da origem até encerrar ou será transferido com estado e referência. Peça que a proposta mostre a regra de atribuição quando o cliente altera apenas uma linha. Confira o que a equipe vê em cada sistema e onde o registro oficial permanece acessível. Assim, o primeiro atendimento após o corte segue uma referência que a empresa consegue conferir.',
        'Teste um efeito que pode sair duas vezes, como aviso de expedição ou reserva. Na prova sem escrita, confirme que o ambiente de comparação mantém saídas de teste separadas das integrações reais. Na fase com escrita, confira qual sistema estava autorizado para aquele pedido e a evidência de retorno. Simule uma confirmação atrasada e peça que a equipe consulte o destino antes de repetir. Registre o comportamento para usar na homologação e para estimar quem fará a conciliação durante o primeiro turno.',
      ],
    },
    {
      heading: 'Compare os resultados no mesmo ponto do processo',
      paragraphs: [
        'Selecione um ponto de conferência para cada efeito. O preço pode ser comparado depois de aplicar as condições comerciais. O saldo disponível precisa refletir o mesmo conjunto de reservas. A expedição deve ser verificada depois que o destino confirma o recebimento. Peça que a proposta registre a data de referência e o estágio de cada fonte. Dois pedidos com o mesmo identificador podem aparecer em momentos diferentes nos sistemas. A conciliação precisa distinguir uma diferença real de uma transação que ainda não chegou ao ponto em que será comparada.',
        'Monte um exemplo fictício com um pedido de dez unidades e redução para oito antes da separação. Na cópia de teste, a criação pode aparecer primeiro e a alteração chegar depois. Compare a quantidade quando ambos os ambientes já tiverem processado a revisão. Faça outra rodada em que a alteração não chega dentro do intervalo acordado. Defina quem acompanha a pendência e como a equipe distingue atraso de registro ausente. Inclua a evidência de que o destino oficial recebeu apenas o efeito autorizado.',
        'Peça verificações em totais e em registros individuais. Dois ambientes podem apresentar o mesmo valor total de pedidos quando faltou uma operação e outra apareceu em duplicidade. Compare referências, quantidades e estados, além dos agregados que a direção usa. Quando uma regra muda deliberadamente, identifique como a nova saída será aceita. Documente o resultado esperado, a área que autorizou a diferença e a evidência de teste. Assim, a equipe pode investigar divergências do paralelo sem exigir que o sistema novo reproduza um comportamento que a empresa decidiu substituir.',
      ],
    },
    {
      heading: 'Organize as divergências por causa provável e efeito confirmado',
      paragraphs: [
        'Crie um roteiro para classificar diferenças de dados, de horário, de regra ou de integração. Um desconto pode divergir porque um ambiente consultou outra tabela. Uma reserva pode aparecer apenas no legado por ainda não ter sido processada na cópia. Um item cancelado pode ter sido removido de um relatório e preservado como linha encerrada em outro. Peça que cada cenário indique quais registros o revisor precisa consultar e que pessoa pode confirmar a causa. Enquanto faltar evidência, mantenha a hipótese e a ação seguinte visíveis na fila.',
        'Solicite um teste com uma diferença de baixo valor que tenha consequência importante. Uma reserva de uma unidade pode parecer pequena no total e impedir atender um pedido de cliente. Em outra situação, centavos de diferença podem vir de uma regra de arredondamento que a área aprovou. Defina tolerâncias e prioridades por tipo de efeito, com o aceite dos responsáveis. A direção precisa saber quais discrepâncias impedem mudar de fase e quais podem ser acompanhadas sem expor o processo a consequências que a empresa não aceitou.',
        'Testar a correção faz parte da conciliação. Depois de atualizar a tabela, repita o pedido afetado e outro pedido semelhante que já tinha resultado esperado. Confira o estado oficial no destino, além da saída do cálculo. Se a empresa decidir repetir entradas históricas, use o ambiente designado para a prova e verifique que notificações, reservas e outros efeitos permanecem isolados. Registre o tempo de investigação e de reteste para comparar o esforço de sustentação que as propostas atribuem ao negócio e à equipe técnica.',
      ],
    },
    {
      heading: 'Teste o retorno com transações que já produziram efeitos',
      paragraphs: [
        'Monte um ensaio em homologação com três pedidos criados depois da transferência da carteira. O primeiro foi recebido e ainda aguarda reserva. O segundo tem reserva confirmada e aguarda separação. O terceiro já recebeu confirmação da expedição. Se a empresa decidir devolver a carteira ao legado, estabeleça qual estado precisa aparecer para cada pedido e confira o que já ocorreu no destino antes de registrar outra operação. O ponto de retorno deve preservar efeitos confirmados e deixar uma tarefa atribuída para cada caso ainda aberto.',
        'Defina a hora em que o fluxo novo deixa de aceitar operações oficiais e quando a origem pode voltar a recebê-las. Entre essas duas ações, registre como pedidos novos serão recebidos e quem consegue ver a fila. Uma organização pode manter entradas numa área provisória durante a conciliação e encaminhar casos urgentes pelo procedimento aprovado. Faça uma prova com uma alteração que chega nesse intervalo. O responsável deve conseguir associá-la ao pedido certo quando a operação retomar.',
        'Inclua uma operação cujo retorno ainda não chegou. A ferramenta nova pode informar que enviou a reserva sem conseguir saber se o estoque foi comprometido. O operador precisa consultar a referência no destino e verificar se pode entregar a ação ao legado ou se ela já foi concluída. Teste os dois resultados e registre a evidência que muda a decisão. Quando a reserva já existe, preserve sua referência. Isso ajuda a evitar duplicação e permite que a equipe prossiga da etapa realmente pendente.',
        'Meça o tempo para localizar registros, verificar pendências e confirmar o retorno da carteira. Peça aos operadores que realizem a prova com documentação e acessos previstos. Se depender de uma pessoa ou de um relatório que só aparece no próximo turno, inclua essa condição no plano e no orçamento. A gestão pode precisar optar entre ampliar a janela de retorno, manter um recorte menor ou preparar outra forma de conferir os efeitos. Compare alternativas antes de aprovar a primeira semana de convivência.',
      ],
    },
    {
      heading: 'Separe ajustes em andamento de pedidos que continuam no legado',
      paragraphs: [
        'Escolha a regra para operações iniciadas antes da mudança e que ainda terão alterações. Um pedido com várias entregas pode permanecer no legado até encerrar, enquanto novos pedidos da carteira entram no sistema novo. Se a empresa preferir transferir todos os pedidos em aberto, inclua linhas já separadas, cancelamentos solicitados e pagamentos parcialmente conciliados no teste. Verifique quem confirma o estado transferido e quais alterações ainda precisam passar pelo procedimento anterior.',
        'Inclua um caso que cruza a mudança em apenas uma linha. O cliente pede substituir um item que ainda não foi separado e mantém outro cuja expedição já foi confirmada. Antes de executar a alteração, o operador precisa reconhecer quais etapas têm efeito confirmado e que grupo pode agir. A prova deve indicar se a alteração mantém o pedido original, exige uma nova revisão ou segue como pendência. Confira o que aparece para atendimento, estoque e expedição depois de confirmar o resultado.',
        'Prepare uma lista diária das transações com responsabilidade no legado. Compare o volume restante com o plano e identifique os casos que podem atravessar uma renovação de licença ou o fim da janela de suporte. Se houver uma ordem com prazo longo, defina se o legado continuará disponível até terminar ou se a transferência precisa de escopo adicional. A proposta deve separar o custo de manter acesso de consulta do custo de atender casos que continuam produzindo efeitos.',
      ],
    },
    {
      heading: 'Orce o trabalho de operar e conciliar os dois ambientes',
      paragraphs: [
        'Peça que os fornecedores separem o custo de preparar a comparação, manter os conectores, investigar diferenças e acompanhar a mudança de autoridade. Inclua licenças dos dois ambientes, infraestrutura e horas de operadores, além das despesas de desenvolvimento. Cada proposta deve declarar o volume e a duração que usou como premissa. Uma solução que inclui apenas comparar totais deixa para a empresa o trabalho de explicar diferenças por pedido. Orce a conferência que a operação precisará fazer de fato.',
        'Em um cenário fictício, o legado custa R$ 4.000 por mês e o sistema novo, R$ 5.500. Um mês de convivência custa R$ 9.500 em licenças, ou R$ 4.000 a mais que operar só o novo. Se a janela aumenta em outro mês, estime o efeito sobre suporte, conciliação e contratos. Peça também o custo de manter o legado disponível somente para consulta. Essa modalidade pode ter outras exigências de licença e acesso, que precisam ser confirmadas com o fornecedor.',
        'Inclua o tempo de quem aprova as divergências. Imagine 80 diferenças semanais, das quais 60 são classificadas em três minutos e 20 exigem nove minutos por caso. São seis horas de trabalho por semana, antes de incluir correção e reteste. Use medidas do piloto para atualizar a projeção. Se o mesmo grupo mantém o processo de fechamento, reserve a capacidade dessa equipe no calendário. O valor da proposta deve explicar que parte desse esforço será transferida ao cliente.',
      ],
    },
    {
      heading: 'Defina os critérios para encerrar a operação paralela',
      paragraphs: [
        'Combine com cada área o resultado que precisa ser comprovado para sair do paralelo. Expedição pode exigir confirmação de saídas em turnos representativos. Finanças pode precisar acompanhar um ciclo de faturamento e conciliar cancelamentos. Atendimento pode precisar localizar pedidos iniciados nos dois ambientes. Estabeleça uma amostra, a tolerância aplicável e a condição que impede avançar. Evite definir a saída só por número de dias, pois uma janela longa pode não incluir a operação que mais preocupa a empresa.',
        'Antes de retirar o legado, verifique as dependências de equipes que ainda consultam seus dados. Um relatório pode ler registros diretamente da origem ou usar uma extração que precisa continuar depois da troca. Um pedido antigo pode precisar ficar acessível para responder uma dúvida. Inclua no plano as referências, os papéis autorizados e o procedimento para consultar o histórico. Teste uma amostra com anexos, revisões e efeitos registrados no destino para verificar se o arquivo ou sistema adotado sustenta a consulta.',
        'Defina quem verifica o encerramento dos conectores e das rotinas agendadas. Uma rotina anterior pode continuar enviando notificações mesmo depois de a carteira mudar. Peça que o encerramento inclua a conciliação dos efeitos, a verificação das últimas transações e a revisão dos acessos autorizados. Registre instantes, responsáveis e evidências. Se ainda há transações no legado, identifique o custo e o prazo para mantê-las sob acompanhamento. A data do desligamento precisa refletir essa lista e os compromissos abertos.',
      ],
    },
    {
      heading: 'Homologue a primeira janela com as equipes que recebem os pedidos',
      paragraphs: [
        'Prepare uma sequência fictícia que comece com pedidos em estados diferentes. Inclua uma venda ainda sem reserva, outra parcialmente separada e uma terceira que precisa cancelar uma linha. No roteiro, marque quando ocorre o corte e onde cada solicitação deve aparecer depois dele. Peça que atendimento, estoque e expedição confiram suas etapas. Registre o tempo até cada confirmação e a referência do destino. Assim, o teste comprova que a transição mantém o trabalho visível para as pessoas que precisam agir.',
        'Faça uma segunda rodada com carga maior e uma interrupção breve. O primeiro grupo pode concluir todas as transações de teste e ainda depender de conferência manual acima de um volume realista. Registre quantos pedidos chegam, quantos estão aptos à comparação e quantos permanecem sem confirmação. Verifique o efeito da recuperação sobre a fila e combine quem decide se a operação continua. Quando o ambiente de homologação não permite reproduzir a capacidade real, indique o teste adicional previsto para a janela de produção.',
        'Especifique condições que bloqueiam a liberação. Uma reserva em duplicidade, uma perda de referência para o envio ou uma alteração de pedido sem responsável pode exigir suspender a carteira afetada. Uma divergência de ordenação em relatório pode receber outro prazo se a informação continua acessível à equipe. Defina quem classifica o impacto, que evidência confirma a correção e quais casos serão repetidos. A ata de aceite precisa permitir que outra pessoa reconstrua a decisão com o roteiro e os registros disponíveis.',
      ],
    },
    {
      heading: 'Entregue a passagem de turno com referências e prazos preservados',
      paragraphs: [
        'Escolha o relatório que a coordenação usará para encerrar o turno. Ele deve mostrar pedidos concluídos, efeitos pendentes e casos cuja responsabilidade ainda está sendo transferida. Mantenha a hora original, o destino esperado e a ação de conferência. Teste um pedido iniciado na última meia hora que recebe a confirmação durante a troca de equipe. Peça que a nova pessoa encontre o caso pelo identificador, confira a situação no destino e dê continuidade sem precisar reconstruir a conversa com o operador anterior.',
        'Compare quem acompanha a fila técnica e quem assume o atendimento. Uma equipe pode verificar que a integração retomou e outra confirmar se o pedido já pode seguir. Se aparecer um complemento durante a investigação, deixe explícito onde ele é registrado e qual prazo precisa ser preservado. Inclua na proposta a cobertura de quem conhece os sistemas e de quem pode tomar a decisão operacional. O procedimento deve funcionar no momento em que o fornecedor não está acompanhando cada transação.',
        'Agende uma revisão após o primeiro turno que inclua os responsáveis pelas duas ferramentas e pelo processo de destino. Confira quais divergências foram resolvidas e quais exigem acesso, prazo ou decisão adicional. Peça que a equipe repita a conciliação de uma amostra sem preparação do fornecedor. Registre as dúvidas e ajuste os materiais. Essa revisão mostra o esforço necessário para operar a convivência e permite recalcular o apoio previsto antes de migrar uma carteira com mais volume.',
      ],
    },
    {
      heading: 'Compare propostas com um ensaio de corte e retorno',
      paragraphs: [
        'Entregue aos concorrentes a mesma descrição da carteira, um mapa de integrações e três transações fictícias em estágios diferentes. Peça que cada proposta indique quem prepara o ambiente, quem autoriza a troca e quem verifica estoque e expedição depois do corte. A orientação de migração da AWS descreve pontos de verificação, tratamento das mudanças nos dados e atribuição da decisão de retorno. Use esses elementos para pedir um roteiro aplicável à sua operação, com evidências suficientes para aprovar a continuidade ou interromper a janela.',
        'Compare o que cada fornecedor fará se a checagem não puder terminar no tempo previsto. Um integrador pode recomendar manter a carteira no legado até localizar a divergência. Outro pode isolar o tipo de transação afetado se a regra permitir separar os casos. Solicite o horário-limite para decidir, a previsão de trabalho para reconciliar dados e a cobertura da equipe. Peça uma segunda simulação em que parte das transações já ocorreu para conferir se o retorno cobre também os efeitos confirmados.',
        'Peça um cronograma que separe reprodução para conferência, piloto com efeitos oficiais e encerramento do legado. Para cada fase, indique volume, turnos, responsáveis e uma entrega verificável. Registre o prazo das dependências externas, como autorização de outro integrador ou disponibilidade da homologação. Compare o preço da janela esperada com o de uma extensão. Inclua um cenário em que a empresa precise repetir um ciclo de fechamento e verifique quais horas, licenças e encargos adicionais deverão entrar no orçamento.',
        'Solicite a estimativa de uma carteira futura com outra condição de negócio. Uma unidade pode usar a mesma regra de preços e outra integração de expedição. Compare as atividades reutilizáveis com as que precisam ser revalidadas, como confirmar o destino de cancelamentos. Se a proposta inclui apenas um grupo, peça o preço para acrescentar uma integração ou um turno. Peça que o fornecedor diga quais papéis da empresa precisam participar e quais casos demonstram que o novo grupo não interfere nos que já foram liberados.',
      ],
    },
    {
      heading: 'Acompanhe a estabilidade antes de ampliar ou desligar',
      paragraphs: [
        'Durante a convivência, acompanhe transações admitidas, processadas, confirmadas e pendentes. Verifique por carteira e integração para localizar a diferença. Se o indicador melhora porque a equipe redireciona os casos difíceis ao legado, registre o efeito e ajuste o denominador. Observe quantas horas foram necessárias para conferir pendências e quantas apareceram depois do fechamento do turno. Use essas medidas para decidir qual grupo pode entrar sem assumir que a capacidade demonstrada cobre toda a operação.',
        'Ensaie um fechamento antes de aumentar o volume. Peça que finanças confira valores faturados, reservas liberadas após cancelamentos e operações cuja confirmação chegou depois do corte. A área precisa refazer a relação entre as transações e seus efeitos. Se a nova ferramenta calcula relatórios em outros horários, compare períodos equivalentes e explique as diferenças autorizadas. Registre a evidência que será usada no próximo ciclo. Se a checagem depende de um relatório manual, inclua essa atividade na projeção de continuidade.',
        'Após a primeira liberação, confirme se a equipe consegue investigar diferenças com a documentação entregue. Um operador deve localizar o registro oficial e consultar o histórico. A coordenação precisa descobrir que efeito ainda aguarda confirmação e quem tem autorização para decidir. Peça que os materiais sejam usados numa prova de turno e registre as dependências remanescentes. Revise quais ajustes entram na sustentação e quem reaplica os testes quando outra integração passar a usar o fluxo.',
        'Para a primeira conversa comercial, leve uma amostra de pedidos com alteração e cancelamento, o calendário de fechamento e a janela de retorno aceitável. Informe o sistema que guarda cada efeito e quem pode confirmar o estado. Solicite uma proposta por etapa com custos de convivência e critérios de saída. Se a cobertura dos registros ainda precisa ser investigada, peça uma fase de descoberta com prazo e evidência de conclusão. Use o resultado para escolher um recorte e um ensaio que a operação possa verificar.',
      ],
    },
  ],
  faqs: [
    { question: 'Os sistemas precisam gravar as mesmas transações durante o paralelo?', answer: 'Defina um sistema autorizado por efeito e recorte. Use cópias para comparação ou divida carteiras com regras explícitas de responsabilidade.' },
    { question: 'Como testar a volta ao legado?', answer: 'Ensaie com transações criadas após a troca. Confira os efeitos confirmados e transfira o estado dos casos que ainda exigem ação.' },
    { question: 'Quando encerrar a operação paralela?', answer: 'Após o aceite dos ciclos previstos, a conciliação dos efeitos, a verificação das pendências e a confirmação do acesso ao histórico.' },
  ],
  cta: {
    title: 'Quer orçar uma migração com operação paralela?',
    text: 'Apresente à Tironi Tech os sistemas, as transações e as janelas críticas. Podemos ajudar a definir a convivência, os testes e as condições de saída.',
    label: 'Conversar sobre minha migração de software',
  },
  sources: [
    { label: 'AWS Prescriptive Guidance — verificações e retorno durante a migração', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-migration-cutover/cutover-stage.html' },
  ],
};
