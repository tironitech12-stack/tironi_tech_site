export const productionReporting = {
  slug: 'orcamento-integracao-erp-e-producao',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Compare orçamentos de integração ERP e apontamento de produção com testes de quantidade, refugo, tempo, retrabalho e fechamento de ordens.',
  keywords: ['integração entre o ERP e o apontamento de produção', 'integração ERP chão de fábrica', 'apontamento de produção no ERP', 'orçamento de integração industrial'],
  emphasis: 'integração entre o ERP e o apontamento de produção',
  intro: 'Para orçar uma integração entre o ERP e o apontamento de produção, escolha uma ordem real e descreva quais operações serão liberadas ao chão de fábrica e quais registros precisam voltar. Peça um teste com quantidade boa, refugo, intervalo de turno e correção de um apontamento. A proposta deve mostrar quando o registro foi capturado, quando o ERP o aceitou e quem pode liberar a ordem para fechar.',
  takeaways: [
    'Separe operação iniciada, progresso informado, quantidade liberada e ordem fechada.',
    'Defina quais referências, motivos, tempos, lotes e seriais atravessam a integração.',
    'Homologue interrupções, correções e reenvios com o saldo e o custo conferidos no ERP.',
  ],
  visual: {
    title: 'Da ordem liberada ao apontamento confirmado',
    labels: ['ERP publica ordem, operação e versão', 'Chão de fábrica registra progresso e desvios', 'Integração confirma aceites e rejeições', 'Supervisão confere saldos e autoriza o fechamento'],
    caption: 'A confirmação de uma operação e a disponibilidade do produto podem depender de etapas e responsáveis diferentes.',
  },
  sections: [
    {
      heading: 'Escolha o problema que a primeira conexão deve resolver',
      paragraphs: [
        'Siga uma ordem recente do momento em que o planejamento a libera até o controle de produção indicar que pode fechá-la. Identifique onde o operador escreve registros, onde alguém os redigita e qual área revisa as diferenças. Em uma fábrica, a demora pode estar em conferir quantidades. Em outra, a produção já informa progresso em tempo útil, mas o ERP recebe tempo e consumo tarde demais para atualizar o custo. O orçamento deve começar pela lacuna observada.',
        'Separe acompanhamento operacional de registro com efeito no ERP. Um painel pode mostrar que a máquina iniciou um ciclo. Um apontamento de quantidade pode alterar o progresso da operação. Uma entrada de produto acabado pode afetar estoque e planejamento. O fornecedor precisa saber quais desses resultados vão entrar no primeiro projeto. Quando a intenção é apenas visualizar, a evidência necessária é diferente daquela para registrar produção e encerrar ordens.',
        'Defina a linha, as famílias e os turnos do piloto. Escolha um processo com operações que a equipe conhece e com desvios que valha testar. Uma linha que monta vários lotes no mesmo turno pode expor o problema de troca de ordem. Uma célula com operadores compartilhados ajuda a verificar tempos concorrentes. Use um alcance que a equipe consiga acompanhar até o fechamento e mantenha casos mais complexos identificados para outra fase.',
        'Escolha uma linha de base. Conte registros atrasados, correções de quantidade, ordens fechadas com falta de informação ou esforço de digitação. Se a empresa já usa planilhas de tempos, descubra quanto trabalho existe para validar exceções e quais dados não são capturados. Em uma primeira avaliação, separe medidas por linha e turno. A adoção pode variar mesmo quando todas as áreas usam o mesmo ERP.',
      ],
    },
    {
      heading: 'Defina chaves e versões para a ordem e suas operações',
      paragraphs: [
        'Escreva como identificar ordem, produto, operação, versão e recurso. Uma ordem pode conter duas operações com nomes semelhantes, e uma atividade pode ser repetida por retrabalho. O número da ordem ajuda a localizar, mas o lançamento precisa indicar a etapa e a ocorrência corretas. Se houver ordens de duas empresas no mesmo ambiente, considere a origem. Peça que o integrador mostre o vínculo em dados de entrada, registros no chão e retorno do ERP.',
        'Indique quais informações são necessárias na liberação. Podem ser roteiro, unidades previstas, materiais, instruções autorizadas e requisito de lote ou serial. Uma versão de desenho alterada depois de parte da execução precisa conservar qual instrução orientou cada operação. Escolha quando o aplicativo pode atualizar uma ordem já aberta e quando deve pedir confirmação. A entrega deve provar que uma mensagem antiga não recoloca uma operação encerrada na fila por engano.',
        'Teste uma ordem com desmembramento. O planejamento pode transferir parte do volume para outra linha e conservar a mesma referência comercial. O sistema de apontamento deve indicar que trabalho foi separado e seus limites. Se o ERP criar uma ordem subordinada, preserve o vínculo sem somar as duas quantidades como se fossem independentes. Inclua congelamento ou cancelamento de uma etapa e confira o que aparece para o operador.',
        'Defina qual sistema autoriza começar e encerrar. Um terminal pode permitir registrar um evento observado mesmo se a sincronização estiver indisponível. A autorização de executar pode depender de lista de trabalho vigente, materiais liberados ou identificação do operador. O ERP pode recusar uma alteração depois de fechar a operação. Documente os estados que precisam permanecer visíveis e como o supervisor resolve uma incompatibilidade.',
      ],
    },
    {
      heading: 'Especifique quantidades boas, refugadas e ainda em análise',
      paragraphs: [
        'Registre a definição de quantidade em cada etapa. Um operador pode concluir 30 peças numa máquina e enviar para inspeção. Dessas, 27 são liberadas e três aguardam avaliação. Um campo único de quantidade terminada pode lançar estoque vendável cedo demais. Determine quando o ERP reconhece progresso, quando recebe quantidade aproveitável e qual estado mantém o restante. Peça uma prova no ambiente que representa a operação real.',
        'Use um exemplo de ordem de 100 unidades. O primeiro turno informa 42 boas e três refugadas. O segundo começa com outro lote de material e registra 48 boas, deixando sete unidades que podem exigir produção adicional ou encerramento por decisão. Confira se cada tipo de quantidade tem efeito previsto e se o saldo planejado não determina sozinho a quantidade a produzir depois de perdas. A política de fechamento deve dizer o que o responsável pode aceitar.',
        'Para refugo, escolha códigos que orientem investigação sem sobrecarregar o operador. Um dano no ajuste, um defeito no material e uma falha detectada na inspeção podem ter responsáveis diferentes. Defina a etapa em que a causa é informada e quando pode ser refinada. Preserve o que foi observado e um registro de revisão. O ERP precisa receber motivo e quantidade conforme o projeto, e o supervisor deve poder encontrar a ocorrência original.',
        'A documentação de execução de produção do Dynamics 365 mostra exemplos de reporte parcial, quantidades boas e sucata, além de vínculo com lotes ou seriais. Use a referência para discutir o mapeamento. A função exata varia com versão e operação. Na proposta, peça exemplos para produto com unidades de saída distintas e para entrada que fica em análise. Se o ERP só oferece parte dos estados, indique onde o restante será registrado.',
      ],
    },
    {
      heading: 'Documente como calcular tempo de preparação, execução e parada',
      paragraphs: [
        'Defina se o sistema registra início e fim, duração apontada ou medição de máquina. Antes de transformar intervalos em custo, esclareça o que pertence ao recurso e o que pertence à pessoa. Um operador pode preparar uma máquina e acompanhar outro processo ao mesmo tempo. Se as duas atividades forem lançadas como dedicação integral, o tempo de mão de obra pode ser contado duas vezes. O projeto precisa manter valores conforme a regra acordada.',
        'Inclua preparação, produção, interrupção e retomada. Uma parada planejada para limpeza pode ter tratamento diferente de falta de material ou manutenção. Peça um teste com mudança de ordem na mesma máquina, pausa e retorno. Mostre como aparecem o tempo da ordem e a disponibilidade do recurso. Se a fábrica usar tempo padrão para custos, defina onde fica o tempo observado para comparação e quando a área autorizada pode ajustar.',
        'Teste um evento que atravessa o fim do turno. A operação pode iniciar antes da mudança, fazer pausa e terminar sob responsabilidade de outro grupo. Defina como atribuir quantidades e horas. Em ambientes com relógios locais, esclareça sincronização e tratamento de horários inconsistentes. Armazene referências que permitam reconstruir a sequência mesmo que o ERP aceite apenas totais por jornada. A proposta deve indicar onde a supervisão revisa conflitos.',
        'Considere o registro esquecido. Um terminal pode ficar com atividade aberta depois de a máquina parar. Estabeleça quem fecha, que evidência usa e se o ERP recebe correção ou lançamento complementar. Uma regra automática pode sinalizar intervalo acima de um limite, mas uma pessoa deve conseguir validar antes de alterar custo. Em teste, peça um ajuste que preserve o valor inicial e apresente o resultado final para o financeiro.',
      ],
    },
    {
      heading: 'Coordene material, lote e retrabalho sem confundir as etapas',
      paragraphs: [
        'Defina se o projeto vai apontar consumo real ou deixar o ERP aplicar regras existentes de baixa. Em uma operação, o ERP calcula consumo previsto ao receber quantidade. Em outra, o operador informa lote e quantidade efetivamente usados. Os dois efeitos precisam ser coordenados para não baixar material duas vezes. Teste um componente previsto que não foi usado e outro substituído com autorização. Confira a posição e as referências depois.',
        'Para lote e serial, registre de onde vem o identificador, que etapas precisam carregá-lo e quando pode ser corrigido. Um produto pode passar por montagem com componentes rastreados e receber serial final mais tarde. Uma reimpressão de etiqueta não representa outra unidade produzida. Peça que o integrador mostre o vínculo entre componentes e saídas e indique quais dados continuam apenas no sistema responsável pela rastreabilidade.',
        'Separe retrabalho de nova produção. Uma peça já produzida pode voltar a uma etapa sem aumentar a quantidade boa se ainda aguarda inspeção. Em outro caso, há uma substituição real depois de descartar a unidade. Defina como registrar reabertura, horas e materiais. O ERP deve distinguir ajuste de atividade, nova execução e entrada de outra peça. Inclua evidência em um caso em que a ordem já tinha progresso antes da decisão.',
        'Planeje o comportamento quando uma unidade é reclassificada. O apontamento pode indicar boa no fim da operação, mas a inspeção posterior pode separar uma amostra. Decida se o ERP recebe correção, transferência ou outro movimento conforme a política. Não esconda que houve uma decisão posterior. A supervisão deve identificar data, autor e motivo, além de saber se o lote já alimentou estoque ou processo seguinte.',
      ],
    },
    {
      heading: 'Escolha como registrar progresso na rotina de fábrica',
      paragraphs: [
        'Observe o ambiente onde o apontamento será feito. Um posto pode usar terminal compartilhado, outro coletor e outro leitura de etiqueta. Trabalhos que acontecem perto de equipamento precisam de uma interação compatível com a operação e seus procedimentos. Defina como o operador encontra a ordem e confirma que selecionou o posto certo. Teste o uso numa sequência de produção com troca de lote e pouco tempo entre etapas, em vez de demonstrar só num computador de escritório.',
        'Combine como os usuários serão identificados. Uma pessoa pode operar várias máquinas ou dividir turno com outra. A supervisão pode precisar corrigir dados, mas isso não deve transformar as alterações em registros do operador original. Em homologação, inicie uma ordem com um perfil, transfira a responsabilidade e corrija uma medição com outro. O relatório deve mostrar quem executou, quem registrou e quem aprovou cada ação quando esses papéis forem diferentes.',
        'Quando usar contadores, sensores ou dados de máquina, peça ao fornecedor um mapa do que cada sinal significa. Um pulso de ciclo pode representar tentativa, passagem ou produto, conforme o equipamento. Ele pode oferecer boa evidência de produção sem identificar qualidade, lote ou pedido sozinho. Defina como ligar a medição à ordem e qual evento exige verificação humana. Na demonstração, simule uma máquina em teste ou preparação para conferir que o sistema não lança produção vendável indevida.',
        'Se a rede no chão de fábrica falhar, indique quais dados podem ser gravados localmente e que condições precisam de consulta online. O operador deve ver quando o apontamento ficou salvo e o supervisor precisa saber quais registros ainda não entraram no ERP. Combine duração tolerada e contingência. Em um caso de parada longa, talvez a equipe use papel ou terminal alternativo. A proposta deve explicar como reconciliar essas entradas antes de retomar.',
      ],
    },
    {
      heading: 'Mostre como a integração reconhece o mesmo apontamento',
      paragraphs: [
        'Defina um identificador para o evento de produção e mantenha-o nas tentativas. Ordem e operação ajudam a verificar contexto, mas duas quantidades iguais podem ser registradas legitimamente em sequência. Identifique cada apontamento e seu vínculo com uma eventual revisão. Se a comunicação falhar ao devolver o resultado, o conector precisa consultar a referência ou encaminhar para conferência. Evite assumir que uma interrupção significa que o ERP não gravou.',
        'Peça o teste de uma resposta perdida depois da aceitação. Se o ERP já confirmou uma quantidade boa e o sistema de execução só viu timeout, a próxima tentativa deve recuperar o resultado. Confira que estoque, progresso e custo não receberam o mesmo efeito outra vez. Faça também duas produções reais com valores iguais, cada qual ligada a um registro distinto. A proposta precisa provar que preserva essas duas situações sem bloquear nem duplicar indevidamente.',
        'Mapeie confirmações por operação. Um lote pode trazer tempo, quantidade e consumo. Se o ERP aceita a quantidade e rejeita a baixa de um componente bloqueado, a integração precisa mostrar o que ficou pendente. Estabeleça quando tenta de novo apenas a parte rejeitada e quando precisa de revisão. O estado de uma ordem não deve parecer totalmente confirmado só porque uma mensagem retornou sucesso. Peça a evidência nos sistemas, não só no log do conector.',
        'Teste mensagem fora de ordem. Um apontamento de finalização pode chegar antes de uma pausa ou correção anterior. Defina qual sequência o sistema deve usar, o que pode ser acumulado e que mudança exige conferência. Registre horários de ocorrência e recepção para investigar a origem. Se o ERP só permite certos registros depois da abertura da operação, o integrador deve explicar como aguarda ou encaminha a sequência sem descartar fatos já observados.',
      ],
    },
    {
      heading: 'Use um caso industrial completo para comparar propostas',
      paragraphs: [
        'Imagine uma fábrica de peças usinadas que libera uma ordem de cem unidades com preparação, usinagem e inspeção. O primeiro operador registra quarenta unidades boas e duas refugadas após troca de ferramenta. A inspeção retém parte do lote para medir uma dimensão e o turno seguinte usa outro lote de matéria-prima. Para orçar, peça uma leitura da ordem, o registro das etapas e o retorno no ERP de acordo com o momento em que a operação considera a saída confirmada.',
        'Na demonstração, simule uma pausa que o operador esqueceu e peça uma correção autorizada. O registro inicial precisa ficar disponível para conferir o impacto. Depois, altere o diagnóstico de um refugo e indique que determinada unidade vai passar por retrabalho. Mostre se a quantidade continua pendente de inspeção e como o novo tempo entra sem duplicar quantidade. O responsável pela qualidade deve conseguir localizar a evidência de cada mudança.',
        'Em seguida, faça a rede cair e perder uma confirmação de quantidade depois de o ERP registrar o efeito. Recupere a conexão e acompanhe a reentrega. Peça que o integrador mostre quais dados usa para localizar o resultado. A operação precisa saber se o segundo turno pode continuar e que parte da ordem ainda aguarda validação. Inclua um componente com cadastro rejeitado para comparar com o erro temporário e verificar a fila de correção.',
        'Finalize com diferença entre planejado e produzido. A ordem original pedia cem unidades e o resultado confirmado ficou abaixo. O supervisor deve ver saldo, perdas, unidades que ficaram em análise e quais decisões ainda faltam. Quando fechar por uma diferença autorizada, registre motivo e responsável. Use o mesmo cenário nas propostas e peça uma exportação para quem calcula custos. Essa pessoa deve conseguir reconstruir o que foi produzido e os lançamentos ligados à ordem.',
      ],
    },
    {
      heading: 'Defina as condições para encerrar a ordem no ERP',
      paragraphs: [
        'Determine quais operações precisam terminar antes de fechar e quem pode aceitar uma diferença. Um roteiro pode incluir inspeção, reprocessamento e transferência de saída. Se uma etapa fica pendente, indique sobre quais registros a operação pode avançar. Em alguns processos, o ERP aceita relatório parcial de produção sem fechar a ordem. Mostre o estado esperado após cada envio. Não inclua encerramento automático apenas porque chegou uma quantidade informada pelo terminal.',
        'Verifique materiais, horas, quantidade boa, refugo e ocorrências de qualidade. Se houver divergência entre ERP e chão de fábrica, a supervisão precisa saber em que etapa surgiu. Peça um relatório de fechamento com referências, excesso ou falta e ações pendentes. Se o projeto prevê aprovação para desvios, demonstre que alguém sem permissão não consegue encerrar. O controle de produção precisa verificar quem aceitou e em que estado encontrou a ordem.',
        'Inclua fechamento de período. Pode haver apontamento no último turno do mês que só chega após o corte contábil. Decida como a operação valida data e período e o que faz quando o ERP rejeita lançamento tardio. Preserve a ocorrência real e o período em que o financeiro reconheceu a correção. O fornecedor deve apresentar como o caso continua visível até fechar e qual evidência aponta o efeito no custo sem reescrever o histórico.',
        'Teste uma ordem já fechada que recebe uma correção. O ERP pode exigir movimento complementar, nova autorização ou procedimento específico. Combine quais mudanças a integração executa e quais encaminha ao responsável. Se houver reabertura, preserve as versões de fechamento e os lançamentos que continuam válidos. Peça demonstração em ambiente de teste. O custo de sustentar essa situação depende de a equipe conseguir recuperar o vínculo sem interromper toda a produção.',
      ],
    },
    {
      heading: 'Compare orçamentos com o mesmo roteiro de operações',
      paragraphs: [
        'Informe versão do ERP, sistema de execução, linhas, postos, turnos e quantidades por dia. Separe custos de diagnóstico, interface, mapeamento, dispositivos, configuração, homologação, treinamento e suporte. Uma proposta pode enviar só a quantidade final. Outra pode cobrir progresso, material e tempo. Coloque as duas na mesma ordem de teste e mostre quais registros ainda precisarão ser feitos ou conferidos manualmente para fechar.',
        'Peça prova de leitura da ordem, registro de um apontamento e identificação da rejeição. Se o ERP tiver interface que não suporta certa operação, documente a alternativa e quem a confirma. Identifique dependências de fabricante de máquinas, fornecedor do ERP ou responsável por redes. Um prazo fechado antes de comprovar o retorno pode esconder o trabalho de recuperar casos aceitos e rejeitados. Combine entregáveis de descoberta que permitam rever a proposta.',
        'Inclua custo de adaptar novas linhas e roteiros. Um setor pode apontar por peça, outro por lote e outro por peso. Alguns usam turnos fixos e outros trocam de ordem dinamicamente. Pergunte quais diferenças entram como configuração e quais exigem desenvolvimento. Peça demonstração de uma mudança de roteiro e teste com ordens existentes. Se houver versões em paralelo, a integração deve preservar o contexto necessário para consolidar registros depois.',
        'Negocie sustentação com base na janela de produção. Determine quem recebe chamados, quais problemas liberam contingência e como o suporte prova que a integração voltou estável. Peça exportação dos vínculos e registros de correção. Se o fornecedor precisar usar dados do cliente para reproduzir incidente, combine ambiente e acesso. Uma operação assistida no primeiro fechamento permite descobrir onde faltam dados e quem precisa aprender a resolver rejeições.',
      ],
    },
    {
      heading: 'Monte o roteiro de homologação e os indicadores do piloto',
      paragraphs: [
        'Antes de executar, escreva o resultado esperado de cada operação. Inclua ordem liberada, apontamento parcial, refugo, material alternativo com autorização e unidade retida. Indique o que o operador enxerga e o que deve aparecer no ERP. Depois, registre tempo de preparação e execução com troca de turno. Confira o efeito de cada dado nos relatórios usados na fábrica. A homologação deve provar efeitos úteis, mesmo quando o processo ainda não está encerrado.',
        'Exija pelo menos uma interrupção, uma repetição e uma correção depois de gravar. Compare quantidades e tempos antes e depois. Registre quais efeitos ficaram aceitos e quem autorizou ajustar o que faltava. Se uma parte do teste depender de simulação externa, marque a condição e indique a prova necessária antes de produção. Valide também um apontamento fora do intervalo previsto e um usuário sem direito de alterar a ordem.',
        'Escolha uma linha piloto e preserve medidas anteriores. Conte atraso de registro, quantidade de acertos manuais, horas para conferir ordens e divergências de material. Uma queda hipotética de 25 correções semanais para dez só é comparável quando volume, turnos e famílias são semelhantes. Acompanhe também filas de exceção e esforço do supervisor. O ganho no terminal pode apenas deslocar trabalho para outra área se as referências continuarem incompletas.',
        'Na revisão do piloto, peça que produção, qualidade e financeiro expliquem o mesmo caso com os dados disponíveis para cada um. Se alguém depender de exportação manual adicional, encontre o motivo e defina a prioridade. Expanda após comprovar os casos principais e as rotinas de recuperação. Uma nova linha pode exigir regras próprias de lote ou material, mesmo quando usa a mesma interface. Planeje testes de expansão por diferença de operação.',
      ],
      bullets: [
        'Apontamento parcial com quantidade boa, refugo e inspeção pendente.',
        'Medição revisada depois da troca de turno.',
        'Consumo de material sem baixa duplicada.',
        'Retorno perdido recuperado pela referência do apontamento.',
        'Fechamento autorizado com diferença explicada.',
      ],
    },
    {
      heading: 'O que levar para cotar a integração',
      paragraphs: [
        'Prepare uma ordem, o roteiro, os apontamentos de um turno e o resultado no ERP, com dados comerciais removidos quando necessário. Inclua um caso de refugo ou retrabalho e outro em que a integração demorou. Informe quem decide qualidade, consumo e encerramento. Mostre fabricantes, interfaces, dispositivos e o procedimento de contingência. Se faltar documentação, indique quem confirma o acesso e em que ambiente consegue testar.',
        'Peça um recorte inicial que possa ser visto em uma ordem completa. Explique quais dados devem aparecer no ERP e qual decisão ainda pertence ao supervisor. Solicite custo com e sem interfaces opcionais e defina como comprovar a recuperação de falhas. Uma proposta será mais fácil de comparar se separar evidência de captura, evidência de contabilização e impacto no fechamento, indicando onde a fábrica pode medir resultado sem esperar por uma implantação maior.',
        'Combine quem corrige o cadastro e os procedimentos antes da entrega. Se a fábrica ainda não tem código de refugo padronizado, a análise precisa levantar quais categorias valem registrar. Se existe mais de uma regra de tempo por célula, leve exemplos da diferença. A decisão sobre custo e prazo muda conforme os dados já existem ou precisam ser organizados. Peça que a estimativa registre as condições que ainda dependem de cada área.',
      ],
    },
  ],
  faqs: [
    { question: 'O apontamento deve fechar a ordem automaticamente?', answer: 'Só se a política e os testes autorizarem. Muitas operações precisam validar qualidade, consumos e diferenças antes de fechar. Preserve os estados de progresso, aceitação dos lançamentos e encerramento.' },
    { question: 'Como evitar duplicação quando a conexão cai?', answer: 'Use um identificador estável por apontamento e confirme o estado no ERP antes de repetir. Teste retorno perdido, reenvio e dois eventos legítimos com a mesma quantidade.' },
    { question: 'Que dados devo levar para pedir orçamento?', answer: 'Envie versões, interfaces, volume e uma ordem com roteiro, operação, quantidades, materiais e correções. Acrescente como o fechamento é aprovado e onde a equipe encontra rejeições.' },
  ],
  cta: {
    title: 'Quer orçar a integração do apontamento de produção com seu ERP?',
    text: 'Conte como sua fábrica registra quantidade, tempo e refugo e quando o ERP recebe o resultado. A Tironi Tech pode ajudar a definir um primeiro fluxo e os critérios para homologá-lo.',
    label: 'Apresentar meu processo de apontamento',
  },
  sources: [
    { label: 'Microsoft Dynamics 365 — registros de progresso, refugo e lote na execução da produção', url: 'https://learn.microsoft.com/en-us/dynamics365/supply-chain/production-control/production-floor-execution-use' },
  ],
};
