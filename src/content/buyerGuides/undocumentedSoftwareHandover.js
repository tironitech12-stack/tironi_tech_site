export const undocumentedSoftwareHandover = {
  slug: 'avaliar-assumir-software-sem-documentacao',
  date: '2026-11-26',
  updated: '2026-11-26',
  description: 'Avalie propostas de sustentação de software sem documentação com provas de acesso, compilação, operação e transferência.',
  keywords: ['proposta para assumir software sem documentação', 'contratar manutenção de software sem documentação', 'orçamento para assumir software legado'],
  emphasis: 'proposta para assumir software sem documentação',
  intro: 'Para avaliar uma proposta para assumir software sem documentação, peça uma etapa de descoberta com entregas verificáveis. O fornecedor deve demonstrar que consegue localizar a versão em operação, reproduzir o ambiente, investigar um incidente e explicar quais condições ainda afetam o preço da sustentação.',
  takeaways: [
    'Identifique ativos, responsáveis e condições de acesso antes de fixar o escopo.',
    'Use uma compilação reproduzível e um incidente representativo como provas.',
    'Vincule a passagem de responsabilidade à capacidade de operar e recuperar o serviço.',
  ],
  sections: [
    {
      heading: 'Defina o que significa assumir o software',
      paragraphs: [
        'Peça que a proposta descreva o primeiro mês de responsabilidade. Uma empresa pode precisar que alguém atenda falhas no faturamento, mantenha os ambientes e entregue pequenos ajustes. Outra pode precisar apenas de apoio para recuperar a capacidade de publicar versões. Liste as atividades que hoje têm dono e as que ficam sem resposta quando uma pessoa se ausenta. Para cada uma, descreva o horário em que acontece, quem depende dela e o efeito de um atraso. Leve esse mapa para a comparação de escopo.',
        'Escolha dois incidentes recentes. Em um portal de pedidos, um erro de cadastro pode ser resolvido pelo atendimento, enquanto uma fila parada pode precisar de diagnóstico de integração. Peça ao fornecedor que explique onde começa sua atuação e quando a investigação passa para outra equipe. Se alguém precisa autorizar a reexecução, inclua essa dependência no prazo. Defina o que será entregue ao fim do atendimento, como registros afetados, ação realizada e condição para acompanhar as próximas execuções.',
        'Separe atendimento, manutenção, infraestrutura e evolução no preço. Uma proposta pode incluir a correção de uma rotina que deixou de funcionar e tratar mudanças de regra como outro serviço. Apresente um caso em que o sistema foi configurado de um jeito e a operação espera outro. Peça que o fornecedor descreva como investiga se o problema vem de configuração, falha de software ou requisito novo. O contrato deve indicar quem decide o encaminhamento e quais horas entram em cada modalidade.',
      ],
    },
    {
      heading: 'Identifique os ativos e quem pode entregar cada acesso',
      paragraphs: [
        'Monte uma lista com repositório, histórico de versões, ambiente de produção, área de testes, contas de publicação, banco de dados, serviços externos e registros de execução. Identifique o titular da conta, o responsável por aprovar acesso e o prazo necessário para a liberação. Uma empresa pode possuir o código e depender de uma organização externa para publicar. Peça que o fornecedor descreva quais provas pode iniciar sem esse acesso e quais decisões precisam esperar sua regularização.',
        'Verifique se o acesso cobre os componentes que fazem parte do fluxo. Um portal pode estar no repositório principal, enquanto o arquivo de configuração que controla os envios fica numa ferramenta de publicação. Uma tarefa agendada pode usar outro projeto. Durante a descoberta, siga um pedido da interface até o destino e anote quem administra cada etapa. Se uma parte não puder ser inspecionada, registre o que ficou sem prova e peça que o fornecedor apresente o impacto na cobertura que pretende vender.',
        'Combine a entrega de permissões por função. A pessoa que levanta dependências pode precisar ler configurações e registros. A pessoa que executa uma publicação precisa de autorização adicional no ambiente adequado. Solicite uma atividade demonstrável para cada permissão pedida. Peça que a transição identifique quais contas podem ser administradas pela empresa e como a equipe atuará se o futuro responsável ficar ausente. A proposta deve incluir o tempo necessário para revisar a lista com quem opera o sistema.',
        'Confira o calendário de serviços contratados por terceiros. Um certificado, um serviço de entrega de mensagens ou uma licença de componente pode expirar durante a passagem. Liste a data, o contato e o serviço afetado. Escolha uma renovação próxima e peça que o fornecedor mostre onde verifica o estado e qual será seu papel. Se falta titularidade ou o serviço só pode ser administrado pelo fornecedor anterior, transforme a regularização em entrega com responsável e critério de aceite.',
      ],
    },
    {
      heading: 'Peça prova da versão que está em operação',
      paragraphs: [
        'Para **contratar manutenção de software sem documentação**, confirme que o código disponível corresponde ao sistema que a empresa usa. Peça uma evidência da versão publicada, como o registro de implantação e a referência do artefato. Relacione a versão ao repositório e aos componentes externos que ela carrega. Em um software que recebeu ajustes manuais, uma tela pode se comportar de modo diferente do código disponível. Escolha uma função alterada recentemente e verifique onde a mudança aparece.',
        'Solicite uma compilação em um ambiente preparado para a descoberta. Identifique a versão das ferramentas, os pacotes indispensáveis, a configuração por ambiente e o destino da publicação de teste. Se uma dependência só está disponível na máquina de quem desenvolveu, registre de onde ela será recuperada e quem mantém acesso. Peça que outro integrante repita o processo seguindo o material entregue. Compare o que funcionou e o que ainda precisou ser resolvido com auxílio da primeira pessoa.',
        'Depois da compilação, escolha um fluxo curto que atravesse os componentes necessários. Por exemplo, preparar um pedido de exemplo e conferir o resultado que deveria chegar à integração de estoque. Use dados de teste e verifique o caminho da resposta. Uma página inicial disponível confirma parte do ambiente. Uma transação acompanhada até o destino ajuda a estimar o trabalho de reproduzir os componentes que sustentam a manutenção.',
        'Defina o resultado quando a versão em operação não puder ser reproduzida na descoberta. Peça uma lista dos artefatos identificados, das diferenças e das condições necessárias para avançar. Se a investigação indica configuração divergente, estime a correção e a prova de equivalência. Se falta código ou um componente descontinuado, peça opções de recuperação com o respectivo alcance de manutenção. Use essa informação para aprovar o próximo passo comercial com evidências daquilo que a equipe pode de fato assumir.',
      ],
    },
    {
      heading: 'Teste se o fornecedor consegue investigar um incidente',
      paragraphs: [
        'Escolha um caso cujo resultado a empresa já conhece, mas que exija localizar a causa em mais de uma etapa. Um pedido pode estar disponível no portal e ausente na expedição porque a integração aguardava um cadastro. Entregue ao fornecedor o identificador usado pelo atendimento e o horário aproximado. Peça que ele mostre o último estado confirmado, indique onde o fluxo parou e identifique a equipe que deve executar a próxima ação. Observe quais conclusões vêm dos registros e quais ainda dependem de acesso adicional.',
        'Confirme a capacidade de estimar o alcance. Se um conector deixou de confirmar pedidos às 14h, a equipe precisa distinguir os casos atrasados dos que foram efetivamente rejeitados. Peça uma lista de exemplos e o critério usado para encontrá-los. Inclua um pedido que aparece pendente por outro motivo e verifique como o fornecedor evita incluí-lo na correção. A prova deve indicar o tempo para localizar o problema, comunicar a área afetada e verificar a recuperação.',
        'Peça o registro do incidente em linguagem que a operação consiga usar. A descrição deve indicar a função afetada, a ação já tomada, os dados que ainda precisam ser conferidos e a previsão da próxima atualização. Compare como os fornecedores explicam uma investigação inconclusiva. Se o problema depende do atendimento de terceiro, solicite o caminho para acompanhar essa dependência e a condição para escalar. Use o exercício para estimar a cobertura necessária depois da transferência.',
        'Inclua uma situação em que parte do processamento foi concluída. Num ensaio aprovado, o destinatário recebeu um pedido, mas a confirmação se perdeu. Antes de repetir o envio, a equipe deve localizar o efeito no destino e identificar o que ainda falta. Peça que a contratada mostre como confere a transação no final e como atualiza o atendimento sobre o resultado. Esse cenário revela se a sustentação cobre a conferência do negócio até o encerramento.',
      ],
    },
    {
      heading: 'Peça uma recuperação em ambiente separado',
      paragraphs: [
        'Defina o que precisa ser recuperado para retomar uma atividade. Além do código e do banco, o portal pode depender de arquivos enviados pelos clientes, regras de integração e configurações de tarefas periódicas. Levante a origem, a frequência e o responsável por cada conjunto. Para uma prova de restauração, escolha os componentes que permitam consultar uma transação e simular sua continuidade. Registre as condições que impedem confundir esse ensaio com o ambiente em uso.',
        'Peça ao fornecedor que meça a idade dos dados restaurados e o tempo até o serviço voltar a ser utilizável. Imagine que a última cópia disponível foi produzida às 2h e a falha de referência ocorreu às 8h. A organização precisa decidir como identificar os registros do intervalo, de onde virá a evidência e quem pode reconstruí-los. Se o fornecedor demonstra uma restauração do banco em trinta minutos, inclua também os tempos de localizar a cópia, validar o acesso e concluir a conferência operacional.',
        'Verifique se elementos restaurados correspondem ao mesmo período. Uma solicitação recuperada pode apontar para um comprovante que só existe numa cópia de outro horário. Um conjunto de configurações pode recuperar o endereço de um serviço que mudou desde a cópia. Escolha um caso em que o vínculo precisa funcionar para a operação. Peça um relatório com os itens recuperados, as diferenças e as ações exigidas. A equipe interna deve conseguir entender o resultado sem depender de uma demonstração oral.',
        'Defina quem pode autorizar retomada e quais verificações antecedem a decisão. Uma interface que abre com dados incompletos pode levar alguém a repetir uma ação já confirmada. Combine os fluxos usados para homologar o ambiente recuperado e onde o suporte registra que a operação foi liberada. Para o orçamento, peça o preço do primeiro ensaio, de ensaios periódicos e das correções necessárias para atingir a margem de recuperação acordada.',
      ],
    },
    {
      heading: 'Valide uma mudança pequena do pedido à publicação',
      paragraphs: [
        'Use uma alteração de baixo impacto como prova de sustentação. Um exemplo é acrescentar, em ambiente de homologação, o identificador de uma ordem à tela que o suporte já consulta. Peça que o fornecedor localize o ponto de mudança, mostre o teste usado e publique a versão pelo processo autorizado. Observe se a equipe consegue verificar o comportamento anterior, explicar o alcance da mudança e localizar a versão publicada sem usar a máquina ou a conta pessoal de quem desenvolveu o sistema.',
        'Escolha pelo menos um efeito que precisa continuar após a alteração. Se o identificador aparece em uma tela utilizada por duas unidades, teste ambos os perfis e confira se os campos existentes continuam disponíveis. Peça que a contratada descreva o risco de publicar componentes relacionados e como identifica as integrações que participam do teste. Se a mudança depende de um processo de revisão de outra área, inclua esse tempo ao estimar o prazo de entrega de ajustes.',
        'Ensaie uma reversão e separe versão de dados. Publicar a versão anterior pode ser suficiente para desfazer uma mudança de interface. Se a versão nova grava um campo num formato diferente, a volta pode exigir adaptação ou correção dos registros já produzidos. Peça que a proposta identifique os requisitos para cada caso e como a equipe comprova a continuidade de uma transação anterior à mudança. Use essa informação para comparar a abrangência de uma manutenção corretiva e o trabalho cobrado como projeto.',
      ],
    },
    {
      heading: 'Contrate a descoberta com perguntas e entregas definidas',
      paragraphs: [
        'Peça um **orçamento para assumir software legado** que diga quais perguntas serão respondidas antes da mensalidade de sustentação. Para um portal de pedidos, a descoberta pode confirmar se existe uma versão que compila, quais integrações são necessárias para realizar um pedido de teste e o que falta para restaurar o serviço. A entrega pode incluir um inventário, o registro de cada prova e a estimativa do trabalho pendente. Defina a pessoa que aprova essas evidências e a data da decisão comercial.',
        'Inclua uma condição para cada acesso que ainda depende de outra empresa. Suponha que o código esteja disponível no primeiro dia, mas o histórico de publicação só possa ser entregue na semana seguinte. O fornecedor pode começar o mapa de componentes enquanto aguarda e deixar a confirmação da versão como entrega condicionada. Registre como a espera altera o prazo e quais horas de trabalho poderão ser usadas produtivamente. Peça nova estimativa quando um acesso pendente modificar o escopo de forma relevante.',
        'Compare uma proposta de preço fechado para diagnóstico com outra cobrada por horas. No preço fechado, confirme o limite de ambientes, quantos fluxos serão examinados e o que ocorre se não houver cópia utilizável. No preço por horas, faça o fornecedor indicar uma faixa, quando informará a projeção atualizada e qual material entregará se o limite for atingido. Procure a mesma evidência nas duas propostas. Um mapa de arquitetura tem valor para a compra quando permite identificar onde estão as condições de assumir o serviço.',
        'Distinga capacidade desconhecida de trabalho já identificado. A ausência de roteiro pode indicar que é preciso entrevistar alguém. A impossibilidade de publicar com a conta da empresa pode exigir uma migração do processo de implantação. Registre uma pergunta, uma prova planejada e um possível projeto para cada condição. Antes de aprovar o preço da sustentação, peça que os concorrentes atualizem a previsão com as atividades confirmadas e atribuam a responsabilidade por cada dependência.',
      ],
    },
    {
      heading: 'Compare plantão, correção e evolução nas mesmas condições',
      paragraphs: [
        'Apresente a todos os fornecedores o mesmo calendário. Se o portal recebe pedidos das oito às dezoito e processa a consolidação às vinte e duas, os dois horários precisam aparecer na estimativa. Pergunte quem recebe um chamado em cada faixa e quando a investigação começa. Combine o prazo para confirmar recebimento, atualizar a operação e restaurar a função prioritária. Para uma falha que depende de terceiro, defina em que momento a contratada comunica a dependência e como acompanha o retorno.',
        'Em um exemplo fictício, uma proposta custa R$ 6.500 por mês e cobra separadamente as intervenções fora do expediente. Outra custa R$ 9.000 com duas janelas noturnas e uma quantidade definida de horas de correção. Para comparar, aplique o mesmo número de fechamentos, incidentes e ajustes previstos ao longo de três meses. Peça também o cálculo se uma publicação precisar ser adiada com aviso curto. Verifique quais atividades consomem a franquia e como os excedentes são autorizados.',
        'Peça a discriminação entre corrigir a causa, aplicar uma recuperação e desenvolver uma mudança. Num incidente de pedidos pendentes, o suporte pode restabelecer o envio e deixar a correção permanente para análise. Registre quem pode aprovar a recuperação e que evidência será exigida para fechar o chamado. Depois, solicite a estimativa separada da medida permanente, com impacto no teste e no calendário. Esse recorte ajuda a entender quanto da mensalidade será dedicado ao trabalho corretivo de fato.',
        'Inclua as horas da equipe interna. Em um mês com três chamados que exigem validação no estoque e no faturamento, descreva quem confere o resultado e quanto tempo fica mobilizado. Uma proposta pode prever uma conferência conjunta. Outra pode entregar os registros para revisão posterior. Coloque os dois modelos no mesmo cenário e confirme se o prazo final corresponde ao momento em que a operação poderá usar o serviço. Solicite a cobertura para ausências e trocas de turno.',
      ],
    },
    {
      heading: 'Organize a transferência de conhecimento em torno das rotinas',
      paragraphs: [
        'Use as entrevistas para documentar atividades que têm horário, entrada e entrega. Escolha o responsável atual pelo fechamento, pelo atendimento de incidentes e pelas publicações. Peça que cada um mostre onde começa, o que verifica e quando solicita autorização. Registre o resultado em material acessível à empresa. Para cada orientação, indique o ambiente a que se aplica e a data em que foi confirmada.',
        'Faça duas passagens para as rotinas prioritárias. Na primeira, a pessoa atual executa e a nova equipe acompanha. Na segunda, a nova equipe executa e a anterior observa. Se um passo só pode ser feito em produção, use uma janela autorizada ou uma simulação que preserve as decisões necessárias. Registre o que precisou de ajuda e repita as etapas com dificuldade. Defina antecipadamente quanto tempo o fornecedor anterior consegue dedicar e quais papéis sua empresa precisa cobrir.',
        'Prepare a passagem de chamados em andamento. Para cada ocorrência, reúna a última atualização, o estado verificado, a próxima ação e o contato da área afetada. Uma pendência pode ter um contorno acordado com a operação que precisa continuar até a correção. Peça que o novo responsável explique como verificará esse acordo. Inclua chamados abertos que dependem de terceiros, com a data prevista do próximo retorno e o canal usado para acompanhamento.',
        'Determine onde a documentação será atualizada depois da transferência. Quando uma versão mudar uma configuração de publicação, a revisão deve alcançar o roteiro usado pelo próximo plantão. Peça um exemplo em que o novo fornecedor modifica uma orientação, registra a confirmação e indica quem recebe o aviso. Combine a entrega desses materiais ao final do contrato e confira se a equipe interna consegue acessar a versão aprovada.',
      ],
    },
    {
      heading: 'Passe a responsabilidade quando a nova equipe puder agir',
      paragraphs: [
        'Defina qual serviço muda de responsável, em que horário e com que condições. A empresa pode transferir primeiro a triagem de chamados e depois liberar publicações. Para a primeira etapa, teste a chegada de um alerta e a conversa com a operação. Para a segunda, confira acesso, aprovação, publicação e recuperação. Combine quem continua disponível para acompanhar cada fase. A orientação da AWS para planejamento de ondas inclui a passagem operacional e a revisão de resultados. Use esse princípio para associar o fim de cada etapa a uma prova que sua equipe consiga revisar.',
        'Prepare um teste com a pessoa que assumirá o plantão e outra que atuará como substituta. Apresente o horário de um incidente e o número de um pedido pendente e peça que as duas encontrem a versão em execução, a integração envolvida e o contato da área dona do próximo passo. Use também um cenário em que o responsável da empresa esteja ausente. A resposta deve indicar a autoridade disponível e qual atividade pode esperar. Registre o acesso ou a orientação que faltou para concluir o exercício.',
        'Use uma ficha de passagem com as evidências, as lacunas e os prazos. Um serviço externo pode permanecer sob administração do parceiro anterior enquanto a empresa regulariza a conta. Se essa condição for compatível com a primeira etapa, descreva a cobertura até a troca, o responsável e o que acontece se houver atraso. Para pendências que impedem atender um incidente crítico, defina qual prova será repetida antes do aceite. Informe ao atendimento a data a partir da qual muda o destino dos chamados.',
        'Separe a aprovação da transição da avaliação do primeiro mês. Na passagem, confirme que o novo responsável dispõe das permissões e consegue executar as rotinas. Depois, compare os tempos observados, os chamados reabertos e as situações que exigiram voltar ao fornecedor anterior. Se a nova equipe gastou mais tempo com a atualização de uma integração do que o previsto, revise a rotina e a capacidade contratada. Registre as mudanças com quem aprova o escopo e a cobrança.',
      ],
    },
    {
      heading: 'Leve uma amostra que permita comparar as respostas comerciais',
      paragraphs: [
        'Para a primeira conversa, reúna a forma de acesso ao repositório, o calendário de operação, um incidente recente e o nome das equipes que administram os serviços. Descreva o que a empresa sabe da última publicação e informe as dúvidas. Peça que o fornecedor indique o primeiro passo, a evidência esperada e o que pode impedir a conclusão. Apresente o mesmo material aos demais participantes para comparar o preço e a sequência de trabalho.',
        'Inclua uma variação no cenário apresentado. Se uma publicação feita no mês anterior não pode ser ligada a uma versão do repositório, solicite uma proposta que explique como a lacuna será confirmada e quanto custará investigar. Depois pergunte como o preço muda se a versão puder ser comprovada com o registro do ambiente. A resposta deve indicar quais atividades de manutenção começam em cada caso e o que exige outra autorização. Use a comparação para identificar premissas que precisam ser validadas cedo.',
        'Compare a descrição do time que fará o trabalho. Pergunte quem conduz a descoberta, quem atende fora do expediente e quem assume a publicação de teste. Um especialista pode fazer a análise inicial e se retirar antes do plantão. Peça que a proposta inclua a passagem entre essas pessoas e uma demonstração com quem ficará de fato responsável. Confira também de que forma você recebe o material caso a empresa opte por contratar a sustentação com outro fornecedor após a descoberta.',
        'Peça um plano para as primeiras entregas de manutenção. Se há chamados acumulados e uma atualização periódica marcada, confira quais tarefas entram na primeira semana e que dependências exigem autorização. Para uma fila de ajustes, peça estimativas depois de revisar uma amostra de diferentes tipos. Registre a data para revisar as premissas do orçamento com base no tempo observado. Termine a avaliação verificando se cada promessa tem um responsável, um prazo e uma evidência de conclusão.',
      ],
    },
  ],
  faqs: [
    { question: 'O que pedir antes de contratar a sustentação?', answer: 'Peça a identificação da versão em operação, uma compilação reproduzível, a investigação de um incidente e uma prova de recuperação.' },
    { question: 'Como comparar o preço de assumir um software legado?', answer: 'Use o mesmo calendário e os mesmos incidentes. Compare descoberta, plantão, correção, evolução e a participação das equipes internas.' },
    { question: 'Quando transferir a responsabilidade?', answer: 'Após a nova equipe comprovar os acessos e executar as rotinas acordadas, com responsáveis e medidas definidos para as pendências.' },
  ],
  cta: {
    title: 'Precisa contratar manutenção para um software sem documentação?',
    text: 'Mostre à Tironi Tech os acessos disponíveis, as rotinas críticas e um incidente recente. Podemos ajudar a delimitar a descoberta e estimar a transição.',
    label: 'Conversar sobre a sustentação do software',
  },
  sources: [
    { label: 'AWS Prescriptive Guidance — passagem operacional e encerramento de ondas', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/application-portfolio-assessment-guide/wave-planning.html' },
  ],
};
