export const resourceScheduling = {
  slug: 'sistema-agendamento-recurso-compartilhado',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Defina o orçamento de um sistema de agendamento de equipamentos e equipes com reservas simultâneas, manutenção, deslocamento e remanejamento.',
  keywords: ['sistema de agendamento de equipamentos e equipes', 'orçamento de sistema de reservas corporativas', 'agenda de equipamentos compartilhados', 'software de alocação de equipes e recursos'],
  emphasis: 'sistema de agendamento de equipamentos e equipes',
  intro: 'Para orçar um sistema de agendamento de equipamentos e equipes, descreva o trabalho que só pode acontecer quando todos os recursos certos estão disponíveis ao mesmo tempo. Leve um exemplo com equipamento, operador, local e duração, além de uma indisponibilidade que obrigue a mudar a agenda. Compare propostas pelo que elas conseguem reservar, confirmar e remanejar sem gerar conflito para quem executa.',
  takeaways: [
    'Identifique disponibilidade real, capacidade, qualificação e tempo de deslocamento.',
    'Teste uma reserva simultânea de equipe e equipamento, inclusive com duas pessoas concorrendo pelo mesmo horário.',
    'Defina como manutenção, cancelamento e atraso repercutem nos compromissos já confirmados.',
  ],
  visual: {
    title: 'Disponibilidade até a execução do trabalho',
    labels: ['Pedido com local, janela e requisitos', 'Equipe e equipamento compatíveis', 'Reserva confirmada e comunicada', 'Uso concluído ou remanejado com histórico'],
    caption: 'A agenda deve comunicar quando todos os recursos necessários estão reservados e quando a solicitação ainda depende de confirmação.',
  },
  sections: [
    {
      heading: 'Identifique o que precisa ser reservado junto',
      paragraphs: [
        'Liste serviços recentes que usaram equipamento e equipe. Para cada um, escreva o tipo de equipamento necessário, a quantidade, a habilidade exigida, o local e o período do trabalho. Uma montagem pode depender de duas pessoas, um veículo e uma ferramenta disponível na mesma unidade. Uma inspeção pode compartilhar um instrumento entre grupos em horários diferentes. Anote quais recursos podem ser substituídos e quais precisam ser os mesmos até a conclusão.',
        'Separe calendário de necessidade. Uma agenda pode mostrar que há um equipamento livre às 13h, mas ele está em outra filial e não chega ao local com o operador autorizado. Essa situação deve ficar representada antes de o sistema oferecer um horário. No briefing, descreva o caminho desde a solicitação até a confirmação. A proposta precisa especificar quais condições são filtradas, quais são verificadas por quem despacha e que informação o solicitante enxerga em cada fase.',
        'Mostre quem decide a reserva. Uma equipe pode usar equipamentos leves sem aprovação, enquanto a agenda de instrumentos calibrados fica com uma pessoa responsável pela unidade. Algumas empresas liberam a solicitação para o supervisor apenas quando o horário compromete outra frente. Defina o limite de autonomia e indique quais operações precisam de registro de decisão. A agenda deve explicar se o recurso foi reservado, se existe uma pré-reserva ou se a equipe só enviou uma solicitação.',
        'Escolha o que vale medir antes de cotar. Podem ser conflitos de agenda, atrasos por espera de equipamento, tempo da pessoa que organiza reservas ou solicitações recusadas por falta de capacidade. Observe o trabalho concluído e não só a quantidade de marcações. Se a empresa reorganizar horários mais depressa, mas deixar equipes se deslocarem sem o recurso certo, a melhoria administrativa ainda não resolveu o motivo da contratação.',
      ],
    },
    {
      heading: 'Modele disponibilidade por unidade, calendário e condição do ativo',
      paragraphs: [
        'Comece pelos calendários que alteram oferta. Pessoas têm turnos, pausas, férias e afastamentos. Equipamentos podem ficar em manutenção, inspeção, calibração ou limpeza. Veículos podem exigir retirada e devolução numa unidade. Um espaço pode estar disponível para preparação e indisponível para uso durante a mesma janela. Indique a fonte de cada calendário e quem pode registrar uma mudança. O sistema precisa diferenciar bloqueio de uso e ausência de agenda publicada.',
        'Para ativos compartilhados, planeje a localização como parte da disponibilidade. Um instrumento em trânsito não pode ser tratado como entregue só porque o período de viagem terminou. A operação pode usar confirmação de retirada e devolução, com identificação de quem recebeu. Se a reserva depender de transferir o ativo, estabeleça o tempo, o responsável e os estados que mostram se o envio ainda aguarda confirmação. Peça um teste num dia com duas unidades solicitando o mesmo recurso.',
        'Defina se o solicitante escolhe um equipamento específico ou reserva uma unidade de um conjunto intercambiável. Para uma ferramenta calibrada, pode importar qual número de patrimônio foi designado. Para um conjunto de equipamentos equivalentes, a empresa pode preferir confirmar capacidade e decidir o ativo depois. A documentação de Field Service da Microsoft distingue agrupamentos de recursos que trabalham juntos e conjuntos de recursos intercambiáveis. Use essa distinção para escolher uma forma de reserva que combine com sua operação.',
        'Mapeie os bloqueios planejados e os urgentes. Uma revisão prevista pode ser lançada antes de abrir a semana. Uma falha às 7h pode afetar reservas confirmadas para o restante do dia. O sistema precisa mostrar impacto, identificar os responsáveis e guiar a substituição ou o reagendamento. Evite que um bloqueio de manutenção apague compromissos sem deixar explicação. Inclua no aceite a atualização da agenda e a comunicação que chega a quem estava esperando.',
      ],
    },
    {
      heading: 'Calcule a duração com preparação, uso e retorno',
      paragraphs: [
        'O imóvel, a equipe e o equipamento podem ser ocupados em trechos diferentes. Uma inspeção de 90 minutos pode exigir 30 minutos de montagem e 20 de desmontagem. A equipe talvez viaje antes, enquanto um técnico local prepara o local. Descreva quais recursos ficam reservados durante cada trecho. Se todos forem bloqueados pelo período inteiro sem necessidade, o calendário parece mais cheio e pode impedir um segundo trabalho que seria viável.',
        'Use uma visita ilustrativa entre duas unidades. O serviço na planta A termina às 10h e o próximo pedido está marcado às 10h20 na planta B. O deslocamento costuma demorar 35 minutos, e a empresa exige uma janela para conferir o equipamento antes de uso. Peça que cada fornecedor mostre o que acontece ao tentar confirmar esse horário e como uma alternativa é apresentada. O teste deve distinguir bloqueio obrigatório, sugestão de margem e decisão autorizada para abrir exceção.',
        'Defina como estimar tempos quando os serviços variam. Uma instalação pode durar mais quando o equipamento ainda está em embalagem ou o acesso precisa ser liberado pela fábrica. Um atendente pode selecionar uma duração prevista por tipo e ajustar com justificativa. Peça ao sistema um registro do previsto e do confirmado, de modo que os dados de execução possam informar estimativas futuras. A empresa também precisa ver se um atraso tende a consumir a janela seguinte.',
        'Teste compromisso que atravessa turnos. Uma equipe pode concluir preparação num dia e deixar o equipamento no local até terminar no dia seguinte. O ativo permanece reservado mesmo quando os operadores estão fora de turno, enquanto uma equipe de continuação pode assumir a execução. Informe se a agenda deve permitir reservas em partes, uma unidade inteira por período ou troca de responsável. A proposta deve demonstrar como as etapas ficam relacionadas para evitar que o mesmo ativo seja emprestado no intervalo.',
      ],
    },
    {
      heading: 'Proteja a confirmação quando duas pessoas disputam o horário',
      paragraphs: [
        'Uma lista de horários disponíveis retrata o instante em que foi consultada. Se dois atendentes abrem a mesma janela e confirmam quase juntos, a aplicação deve conferir novamente a disponibilidade antes de aceitar. Peça uma demonstração com dois usuários e o último equipamento disponível. Apenas uma reserva pode ser confirmada quando o recurso é exclusivo. O outro usuário deve receber o motivo e opções para continuar, sem descobrir o conflito só no dia da execução.',
        'Quando o serviço depende de equipe e equipamento, a confirmação deve proteger o conjunto. Se a equipe foi reservada e o equipamento deixou de estar livre, a proposta precisa indicar se a equipe será liberada ou ficará temporariamente retida com prazo. Uma reserva parcial sem estado claro pode ocupar o calendário e impedir compromissos legítimos. Explique que informação será apresentada quando algum requisito ainda não estiver atendido e quem pode assumir o acompanhamento.',
        'Defina se vale usar bloqueio temporário. Em algumas jornadas comerciais, segurar um conjunto por poucos minutos permite concluir cadastro ou obter uma autorização rápida. Em outros fluxos, uma confirmação interna pode demorar horas e bloquear recursos escassos sem garantia de execução. Combine a duração, o que acontece quando expira e se existe renovação por perfil autorizado. Teste uma aprovação que chega depois do vencimento e exige nova conferência da janela.',
        'Inclua indisponibilidade da interface ou retorno perdido. A agenda pode registrar a reserva e perder a resposta quando transmite a confirmação para outro sistema. Uma nova tentativa deve localizar a mesma solicitação e evitar criar outro compromisso. Peça estados que distingam confirmação local, comunicação pendente e falha de integração. A equipe precisa recuperar a informação a partir do número da solicitação, sem comparar listas de horários manualmente para descobrir o que foi feito.',
      ],
    },
    {
      heading: 'Planeje a substituição quando um recurso deixa de estar disponível',
      paragraphs: [
        'Defina que substituições podem ser aceitas por regra. Um item de outro modelo pode fazer o mesmo trabalho se tiver capacidade, acessórios e inspeção adequados. Técnicos podem compartilhar função e ainda ter certificações, turnos ou regiões diferentes. Peça que o fornecedor modele requisitos da tarefa separados das características dos recursos. Isso permite buscar alternativas compatíveis sem presumir que dois equipamentos de descrição semelhante são intercambiáveis.',
        'Num cenário hipotético, um equipamento agendado para as 14h é bloqueado às 11h por falha. Há um substituto noutra unidade, mas ele exige deslocamento e preparação. O operador precisa comparar a troca com adiar o serviço ou reorganizar outra visita. Peça que o sistema mostre quais compromissos receberão impacto e quem pode aprovar a mudança. Uma notificação deve indicar a decisão tomada e pedir confirmação quando a execução depende de uma nova condição.',
        'Separe alterações internas das que precisam de comunicação ao cliente. Trocar um equipamento equivalente pode manter horário e condições. Trocar a planta ou adiar entrega já afeta o combinado. Registre o estado anterior, o novo e a pessoa que autorizou. Se a empresa envia avisos por vários canais, a integração deve evitar mandar versões conflitantes durante a revisão. Teste um cancelamento que chega logo após uma notificação de substituição e confira o que aparece para a equipe.',
        'Considere solicitações recorrentes. Uma manutenção mensal pode reservar o mesmo grupo em janelas futuras. Se apenas a próxima visita for alterada, as demais devem conservar regra e responsáveis. Se a recorrência inteira mudar, indique como o sistema encontra conflitos nas ocorrências já confirmadas. Peça um teste de edição de uma ocorrência e outro de toda a série. A agenda deve mostrar o histórico e explicar até quando os recursos ficaram comprometidos.',
      ],
    },
    {
      heading: 'Use uma jornada real para comparar fornecedores',
      paragraphs: [
        'Imagine uma empresa que instala equipamentos em duas plantas e compartilha uma plataforma elevatória. Para o atendimento das 8h, ela precisa de dois instaladores com habilitações complementares, da plataforma conferida e de acesso liberado pelo cliente. No cenário ilustrativo, a visita ocupa duas horas e exige meia hora de preparação. O fornecedor precisa mostrar que o horário oferecido considera disponibilidade de cada recurso e o tempo necessário para chegar ao local.',
        'Em seguida, abra outro pedido com a mesma plataforma e horário em uma filial diferente. Peça ao atendente que tente reservar o segundo serviço antes de confirmar o primeiro. Quando o primeiro for autorizado, o outro deve ficar sem confirmação ou receber uma opção que considere transporte e devolução. Mostre o resultado na agenda individual de cada técnico e na visão do ativo. A empresa deve conseguir explicar por que uma alternativa existe e outra não.',
        'Adicione uma solicitação interna de manutenção que bloqueia a plataforma entre os atendimentos. A central deve localizar o responsável, ver a agenda impactada e decidir se há substituição com os requisitos adequados. Se a unidade só puder fazer a troca após inspeção, a nova reserva deve carregar essa condição. Uma demonstração que apenas remove o equipamento da lista não prova que os compromissos já firmados serão recuperados de forma previsível.',
        'Encerre o teste registrando que a primeira visita ocupou 40 minutos a mais. A decisão pode ser avisar a equipe seguinte, transferir o equipamento ou remarcar. Peça que o fornecedor compare o que estava planejado com o que aconteceu, sem editar o histórico anterior para esconder o atraso. O caso demonstra o valor do sistema para o despacho, para a gestão da frota e para quem depende da informação atualizada no local do trabalho.',
      ],
    },
    {
      heading: 'Defina quais estados e informações entram nas integrações',
      paragraphs: [
        'Liste os sistemas que conhecem os recursos e explique o que cada um confirma. Um cadastro de manutenção pode indicar se o equipamento está liberado. O RH ou controle de turnos pode informar escalas e ausências. O sistema de ordem de serviço conhece o local e a tarefa. O calendário colaborativo pode mostrar o compromisso depois de confirmado. Escreva de onde os dados vêm e qual ferramenta pode alterar cada elemento, inclusive a agenda compartilhada.',
        'Defina identificadores para pedido, reserva, trabalho e recurso. Uma reserva pode mudar de equipamento e continuar atendendo o mesmo pedido. Uma tarefa recorrente pode ter uma referência para a série e outra para cada visita. Se a empresa exportar dados para medir utilização, a relação precisa sobreviver à troca de agenda. Peça ao fornecedor um exemplo do que o ERP ou o sistema de ordens recebe e como devolve confirmação ou rejeição.',
        'Avalie sincronização nos dois sentidos com atenção. Alterar horário em um calendário externo pode parecer conveniente, mas talvez ignore as regras que verificam equipamento ou habilitação. A proposta deve dizer se o compromisso externo é apenas informativo, se aceita pedido de mudança ou se pode confirmar remanejamento. Em homologação, edite o mesmo evento em dois sistemas e veja como a organização conserva a autoridade e comunica a decisão.',
        'Peça um teste em que o cadastro de manutenção fica temporariamente inacessível. Se o sistema não consegue provar a liberação do equipamento, a regra deve indicar se há outra fonte autorizada, se bloqueia confirmação ou se registra uma pendência. Uma mensagem de calendário ocupado não explica uma falha de consulta. O painel precisa mostrar quando o dado foi verificado e permitir que a equipe retome os casos após recuperação sem reabrir todas as solicitações.',
      ],
    },
    {
      heading: 'Separe autoatendimento, despacho e supervisão',
      paragraphs: [
        'O solicitante pode precisar de poucas escolhas: tipo de trabalho, local, janela e requisitos. A central precisa de filtros, disponibilidade e acesso às pendências. O supervisor pode analisar utilização, prioridades e exceções. Defina o que cada papel pode mudar e que informação é necessária para decidir. Um painel único com todos os dados pode ficar confuso para quem só quer reservar um instrumento uma vez durante a semana.',
        'Decida se a auto-reserva deve mostrar qualquer horário livre ou apenas janelas elegíveis para o contexto. Um operador de um turno pode não ter autorização para solicitar equipamentos de outra área. Uma visita pode ser viável no calendário e exigir aprovação de transporte. Peça uma demonstração com um usuário comum e um despachante. A diferença precisa aparecer também ao usar um endereço direto ou procurar um compromisso já confirmado.',
        'Defina quais exceções exigem autorização. Em uma urgência, o supervisor pode reatribuir equipamentos ou deslocar uma equipe, dependendo da política. O sistema deve registrar qual compromisso foi impactado, quem aprovou e quando segue a comunicação. Se for preciso avisar outro cliente, o despacho precisa saber se o aviso ocorreu. Inclua no aceite uma tentativa por alguém sem permissão e uma aprovação legítima com impacto nos dois calendários.',
        'Mostre o que o técnico vê antes de sair. O próximo local, os recursos e as instruções precisam aparecer sem depender de acessar detalhes de toda a operação. Quando uma troca estiver pendente de confirmação, indique qual versão continua valendo. A proposta deve explicar a experiência no celular e o comportamento quando a pessoa estiver com sinal fraco. Se a atualização só aparece após conexão, combine uma rota operacional para urgências e registre esse limite.',
      ],
    },
    {
      heading: 'Modele cancelamento, uso real e devolução',
      paragraphs: [
        'Combine o que significa cancelar um pedido. Se nenhum recurso saiu da base, o horário pode ser liberado assim que a decisão é autorizada. Quando o equipamento já está em trânsito, outro compromisso talvez só possa ser marcado após devolução e conferência. Defina quando cada recurso volta à agenda e como ficam os dados que já foram comunicados. Uma mesma regra para todas as fases pode disponibilizar um ativo que ainda está no local anterior.',
        'Teste devolução atrasada. O responsável deve indicar se o equipamento continua em uso, está sendo transportado ou chegou e aguarda inspeção. Quem reservou para o próximo turno precisa saber o que muda e como reagir. Se outra equipe decidir usar um substituto, preserve o vínculo com a solicitação original. Assim o relatório de uso não registra duas execuções quando houve apenas uma visita com troca de equipamento.',
        'Considere cancelamentos frequentes e faltas de confirmação. Um prazo para liberar recursos não usados pode beneficiar a operação, desde que o solicitante entenda a regra e exista procedimento para exceção. Escolha quando pedir confirmação de presença, quem recebe o lembrete e o que acontece se a resposta chegar depois da liberação. A confirmação deve verificar se a janela ainda está disponível antes de restabelecer o compromisso.',
        'Para analisar utilização, registre os instantes planejados e os efetivos. Um equipamento pode ficar ocupado para a organização antes de começar a tarefa porque o transporte o retirou da base. Uma pessoa pode terminar a visita e ainda preencher o atendimento. Defina qual unidade entra no indicador, como horas de serviço ou janela inteira de indisponibilidade. Compare relatos com a agenda e permita correção autorizada quando um horário real não foi registrado.',
      ],
    },
    {
      heading: 'Calcule o orçamento pela complexidade das regras e das integrações',
      paragraphs: [
        'Envie aos fornecedores um mapa das unidades, dos tipos de ativo, dos papéis e dos serviços da primeira fase. Acrescente duração, calendários, origem dos bloqueios e exemplo de exceção. Peça custos separados para cadastro, configuração das regras, interface de agenda, integrações, implantação, treinamento e suporte. Se houver dados inconsistentes sobre localização ou manutenção, defina quem vai corrigi-los. Essa atividade pode ser necessária antes que a agenda ofereça opções confiáveis.',
        'Uma agenda pronta pode organizar reservas simples por pessoa, sala ou equipamento. Uma solução sob medida pode ser justificável quando a operação precisa validar vários recursos simultaneamente, aceitar substituições autorizadas ou acompanhar estados de sistemas diferentes. Compare ambas com o mesmo atendimento completo. Pergunte quais condições o fornecedor consegue demonstrar agora e quais dependem de extensão. Veja se a proposta prevê manutenção quando a operação abrir outra unidade ou mudar regras de capacidade.',
        'Inclua custos recorrentes que dependem de volume. Pode haver licenças por usuário, consulta de distância, envio de mensagens, integração e armazenamento de registros. Peça uma simulação de crescimento para a janela mais movimentada e identifique custos que continuariam existindo se a empresa usar o sistema só no grupo inicial. Um fornecedor pode incluir suporte comercial, mas depender de outra empresa para atualizar calendário ou integração. Documente o ponto de contato e a responsabilidade de cada parte.',
        'Peça um teste de aceitação para mudanças depois da implantação. Um responsável deve conseguir cadastrar um novo turno, suspender um equipamento e habilitar um técnico para um tipo de tarefa conforme a política. Pergunte quais alterações exigem nova versão de software. Quanto mais frequente a mudança, mais importante saber quem consegue executá-la e em quanto tempo. Essa análise transforma custo de adaptação em condição comparável na proposta.',
      ],
    },
    {
      heading: 'Como testar a entrega e medir o primeiro grupo',
      paragraphs: [
        'Monte testes com resultados esperados para cada papel. O solicitante confirma uma janela elegível e não consegue assumir um recurso restrito. O despacho vê equipe e equipamento na mesma reserva. O supervisor troca um ativo após falha e confere o histórico. A manutenção publica bloqueio e detecta os compromissos atingidos. Inclua mensagens enviadas e o estado que os sistemas externos receberam. Um calendário bonito é pouco útil se a regra falhar num desses caminhos.',
        'Inclua os limites de desempenho previstos. Teste o início do turno com vários solicitantes procurando equipamentos escassos e a consulta do planejamento semanal com várias unidades. Verifique se duas sessões não confirmam a mesma capacidade e se o operador recebe resposta útil quando o horário se torna indisponível. Se houver otimização automática, compare com uma sequência manual e observe a razão das escolhas. A equipe precisa entender quando aceitar o resultado e quando montar exceção.',
        'Escolha um piloto que inclua recursos de alto uso e ao menos um fluxo de substituição. Mantenha registro do procedimento anterior para comparar. Em um cenário hipotético, 40 conflitos por mês podem cair para 15, mas a redução deve ser interpretada considerando volume e tipo de pedido. Observe espera do solicitante, uso de recursos, tempo de remanejamento e compromissos que deixaram de acontecer. Um indicador isolado pode premiar uma agenda mais vazia em vez de uma operação melhor.',
        'Estabeleça o que impede ampliar. Pode ser a falta de confiabilidade dos bloqueios, a impossibilidade de reproduzir a autorização ou uma taxa alta de atualizações manuais. Marque quem corrige e que evidência será verificada depois. Se o primeiro grupo funcionar, amplie por unidade ou por tipo de recurso e compare a complexidade adicionada. A contratação fica mais previsível quando o custo da expansão está ligado ao que realmente se repetiu no piloto.',
      ],
      bullets: [
        'Duas reservas concorrentes para o último ativo disponível.',
        'Equipe e equipamento confirmados como conjunto.',
        'Manutenção imprevista com identificação dos compromissos afetados.',
        'Reprogramação de uma ocorrência sem alterar a série inteira.',
        'Retorno de integração perdido sem geração de compromissos duplicados.',
      ],
    },
    {
      heading: 'O que levar para a primeira conversa de orçamento',
      paragraphs: [
        'Prepare três serviços saneados com duração, local, pessoas, equipamentos e regras de aprovação. Um deve ser simples, outro deve mostrar recurso compartilhado entre unidades e o terceiro deve incluir um remanejamento real. Leve um calendário de manutenção ou escala, indicando como é atualizado. Se não houver histórico confiável de conflitos, descreva como a equipe os descobre e qual etapa deixa de acontecer quando falta informação.',
        'Peça que a resposta descreva a primeira operação que pode entrar em uso, a dependência de cadastros e as evidências de aceite. Separe a função de visualizar calendários da função de autorizar reservas em nome de uma área. Pergunte também como exportar as decisões e se é possível identificar quais recursos foram de fato usados numa visita após ajustes. Esse histórico pode ser necessário para dimensionar frota, capacidade e custo mais tarde.',
        'Combine responsabilidades para a fase de estabilização. Se a equipe achar horário fora de turno, alguém deve corrigir o calendário ou a regra, conforme a origem. Se um equipamento não volta no prazo, a ocorrência pode pedir ação da central ou da manutenção. Registre como o suporte diferencia causas. Isso evita que a empresa contrate apenas a implementação e depois precise definir às pressas o processo para revisar uma reserva que já afetou outras pessoas.',
      ],
    },
  ],
  faqs: [
    { question: 'Uma agenda compartilhada basta para controlar equipamentos e equipes?', answer: 'Pode bastar para reservas simples. Se o serviço depende de disponibilidade simultânea, deslocamento, qualificação e manutenção, peça prova de que todos os requisitos são verificados antes da confirmação.' },
    { question: 'Como testar dupla reserva no orçamento?', answer: 'Use dois usuários solicitando a mesma janela do último recurso disponível. Confirme que apenas uma reserva é aceita e que nenhuma alocação parcial inesperada permanece no calendário.' },
    { question: 'Quais informações ajudam a estimar o projeto?', answer: 'Leve unidades, calendários, tipos de serviço, regras de duração, equipes, ativos e sistemas integrados. Inclua um dia normal e uma indisponibilidade que exija remanejamento.' },
  ],
  cta: {
    title: 'Quer orçar uma agenda com as regras da sua operação?',
    text: 'Conte à Tironi Tech quais equipamentos e equipes precisam estar disponíveis juntos, como surgem os conflitos e quem confirma o atendimento. Podemos discutir a primeira entrega e seus critérios de aceite.',
    label: 'Apresentar meu fluxo de agendamento',
  },
  sources: [
    { label: 'Microsoft Dynamics 365 Field Service — agendamento de equipes e equipamentos', url: 'https://learn.microsoft.com/en-gb/dynamics365/field-service/resource-crews' },
  ],
};
