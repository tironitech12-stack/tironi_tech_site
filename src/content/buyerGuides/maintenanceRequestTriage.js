export const maintenanceRequestTriage = {
  slug: 'contratar-ia-triagem-chamados-manutencao',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Compare propostas de IA para triagem de chamados de manutenção com identificação de ativos, prioridades, encaminhamento e testes de aceite.',
  keywords: ['IA para triagem de chamados de manutenção', 'automatizar chamados de manutenção', 'classificação de chamados de manutenção com IA', 'orçamento de automação de manutenção'],
  emphasis: 'IA para triagem de chamados de manutenção',
  intro: 'Para contratar IA para triagem de chamados de manutenção, leve relatos reais saneados, o cadastro de ativos e as regras que orientam urgência e encaminhamento. Peça um piloto com ativo ambíguo, ocorrências repetidas e situações em que o sistema deve pedir ajuda imediata a um responsável. A proposta deve mostrar como o chamado ganha contexto e em que momento uma pessoa decide abrir ou alterar a ordem.',
  takeaways: [
    'Separe relato, classificação, prioridade, despacho e execução.',
    'Teste se o sistema identifica ativo, contexto de parada e fila autorizada.',
    'Exija revisão em casos com risco, incerteza ou efeito na ordem de manutenção.',
  ],
  visual: {
    title: 'Do relato de falha ao encaminhamento',
    labels: ['Solicitante descreve ativo, local e impacto', 'Sistema sugere classificação com evidência', 'Regra ou responsável define a prioridade e a fila', 'Planejamento decide sobre a ordem e confirma o próximo passo'],
    caption: 'A solicitação informa um problema. A criação de uma ordem depende da avaliação e dos procedimentos da operação.',
  },
  sections: [
    {
      heading: 'Escolha qual parte da triagem precisa melhorar',
      paragraphs: [
        'Abra solicitações recentes em dois turnos e acompanhe desde o primeiro relato até a decisão da manutenção. Num caso, o operador pode escrever apenas “voltou a falhar” e o planejador precisa procurar o ativo. Em outro, a identificação está certa, mas ninguém consegue dizer se a linha parou. Escolha a etapa que toma tempo ou perde informação. Pedir IA para classificar tudo pode esconder o fato de que o principal gargalo acontece no formulário ou na transferência entre equipes.',
        'Separe recebimento, esclarecimento, prioridade e execução. A documentação de gerenciamento de ativos do Dynamics 365 descreve solicitações que informam a necessidade de avaliação e podem gerar uma ordem após validação. Use a distinção para estimar seu projeto. Um canal pode reunir relato e evidências sem dar autorização para intervir no equipamento. O fornecedor deve dizer em que fase a sugestão chega e quem confirma a ação seguinte.',
        'Leve exemplos de manutenção corretiva, pedido de inspeção e dúvida de operação se esses casos usam o mesmo canal. Uma mensagem dizendo que o motor está vibrando não é igual a solicitação para planejar teste de uma máquina que ainda funciona. Escolha motivos frequentes e situações raras com consequências relevantes. Peça que o primeiro piloto consiga encaminhar corretamente os casos que tem condição de avaliar e não esconda os outros atrás da mesma categoria genérica.',
        'Meça a situação atual em períodos comparáveis. Conte chamados devolvidos por dados faltantes, tempo até responsável tomar conhecimento, reclassificações e ordens abertas com ativo errado. Uma automação pode reduzir tempo de fila sem resolver atraso de execução. A gestão precisa enxergar em que ponto o ganho aconteceu. Defina quais indicadores serão comparados, que eventos os sustentam e o que continua dependendo de capacidade técnica ou disponibilidade de peças.',
      ],
    },
    {
      heading: 'Defina o que a origem precisa dizer e quando pedir esclarecimento',
      paragraphs: [
        'Prepare os campos mínimos conforme o local. A solicitação pode incluir unidade, área, equipamento, sintoma, início percebido e efeito sobre a operação. Use referências que o solicitante conhece e mantenha um caminho para quando ele não encontra o ativo. Uma lista de centenas de máquinas pode gerar escolha incorreta. Teste se há busca por etiqueta, linha ou nome conhecido e verifique se a informação fica ligada ao cadastro oficial.',
        'Peça perguntas úteis para preencher lacunas. Se a mensagem diz “bomba parada”, pode importar qual conjunto e qual área estão afetados. Se a condição já foi enquadrada por procedimento obrigatório, as instruções desse procedimento prevalecem. O sistema pode registrar e orientar a buscar um responsável autorizado, sem pedir ao operador que diagnostique ou tente corrigir o equipamento. Defina o que não deve ser solicitado e quando escalar sem esperar resposta adicional.',
        'Considere canais diferentes. Um operador pode usar aplicativo durante o turno, um gestor enviar e-mail e a central registrar ligação. A integração deve preservar origem, horário, autor e anexos quando necessários. Se duas mensagens se referem a uma mesma situação, mantenha evidência e momento de cada relato. Quando a solicitação já tem registro oficial, mostre como lançar atualização sem criar outro chamado que disputará atenção da equipe.',
        'Inclua continuidade quando não há sinal ou quando a rede fica lenta. Salvar uma observação localmente é diferente de enviar à central. O usuário deve ver confirmação de recebimento e saber que canais oficiais usar quando o procedimento exigir contato imediato. Peça um teste com envio interrompido, retomada e mudança de turno. A proposta deve descrever o limite do fluxo digital e como o caso aparece quando a comunicação volta.',
      ],
    },
    {
      heading: 'Vincule equipamento e local sem depender de abreviações',
      paragraphs: [
        'Um apelido pode ser conhecido numa linha e apontar para outra máquina em outra planta. Monte o mapa entre tag oficial, nome usado pela equipe, tipo, unidade e local. Separe atributos vigentes do histórico, especialmente se ativos foram movidos. A automação pode sugerir candidatos, mas não deve transferir chamado sozinho quando falta evidência. Faça um teste com duas bombas de nome parecido e indique como a pessoa confirma a ligação.',
        'Inclua componentes ou conjuntos. Um operador pode citar a válvula, enquanto o ativo gerenciado é a estação inteira. O cadastro pode ter relação entre os dois ou exigir revisão do planejador. Combine em que nível se cria solicitação e em qual o histórico fica acessível. Se o ERP precisa de um ativo específico para abrir ordem, a triagem deve conservar pendência até identificar. Não envie um código genérico para superar a validação sem autorização.',
        'Defina quais elementos podem consolidar casos. Dois relatos sobre parada na mesma linha podem ser duplicados ou refletir falhas diferentes. A semelhança de texto ajuda a sugerir ligação, mas tempo, ativo e condição precisam ser conferidos. Peça ao fornecedor que mostre como apresenta candidatos e como registrar casos relacionados sem fundi-los. A empresa deve identificar quem informou o sintoma e responder às duas pessoas quando a rotina prevê.',
        'Planeje a manutenção da tabela de nomes e locais. Um equipamento novo pode não aparecer nos exemplos usados para ajustar a solução. A fila deve indicar ativo não encontrado e atribuir ao responsável, em vez de associar à máquina parecida. Quando uma correção de cadastro for publicada, verifique o efeito nas novas solicitações e preserve vínculos antigos. Peça estimativa do trabalho que a empresa terá para atualizar nomes, sinônimos e identificadores.',
      ],
    },
    {
      heading: 'Transforme criticidade e urgência em regras verificáveis',
      paragraphs: [
        'Prioridade pode depender do ativo, do efeito relatado, da existência de alternativa e da política por turno. Um equipamento crítico com ruído observado pode pedir avaliação rápida. Um equipamento de apoio parado pode ter outro tratamento conforme a redundância e o contexto. Registre regras, informações exigidas e quem confirma. O fornecedor deve demonstrar que a saída diferencia impacto informado e impacto verificado, mantendo revisão quando faltam dados.',
        'Defina gatilhos de encaminhamento imediato segundo os procedimentos da operação. Relatos associados a risco, segurança ou condição desconhecida podem exigir atendimento humano sem esperar que o modelo conclua uma causa. A solução deve aplicar as regras aprovadas e orientar o uso dos canais oficiais. Evite usar confiança de classificação como motivo para baixar prioridade. Prove o encaminhamento usando mensagens curtas, termos incomuns e contextos em que o solicitante não pode continuar respondendo.',
        'Inclua prioridade conflitante. Uma pessoa pode marcar urgente, mas não informar se a linha parou. Outra pode escolher baixa e mencionar um efeito crítico no texto. O sistema deve preservar as informações, indicar a regra e encaminhar para validação quando necessário. Peça que o fornecedor mostre a evidência da sugestão, o responsável por rever e como uma alteração chega à fila. Um índice numérico sem motivo dificulta confiar ou corrigir o resultado.',
        'Teste impacto em horário e escala. Um chamado pode seguir para a equipe da planta durante o turno e para outra cobertura fora dele. A regra precisa considerar local e situação, sem prometer que a disponibilidade da equipe é conhecida quando não foi verificada. Combine alternativas autorizadas quando ninguém confirma recebimento. O aceite deve mostrar como muda a indicação sem perder a referência e como o supervisor encontra solicitações que ainda não foram assumidas.',
      ],
    },
    {
      heading: 'Delimite o papel da IA e as decisões que ela só prepara',
      paragraphs: [
        'Uma primeira versão pode extrair informações do relato, sugerir categoria e apontar o que falta. Pode também estruturar um resumo que o planejador consulta. Defina qual ação é reversível e o que tem efeito na execução. Alterar prioridade, liberar ordem ou informar instrução de intervenção pode exigir papéis e regras diferentes. Peça que o fornecedor demonstre os limites mesmo quando o texto de origem pedir um atalho ou afirmar que determinada aprovação já existe.',
        'Mostre como as saídas são justificadas. A operação precisa ver sinais citados no texto, dados de cadastro e regra usada. Quando a ferramenta não consegue identificar o ativo, o painel deve mostrar isso. Evite preencher diagnóstico por aparência de um relato. Um sintoma pode ter várias causas e a triagem existe para orientar investigação. O teste deve comparar a categoria sugerida, a evidência apresentada e a decisão final adotada pelo responsável.',
        'Separe sugestão e confirmação no histórico. Se a pessoa muda a prioridade ou o destino, registre valor anterior, motivo e momento. Não transforme cada correção em mudança automática da regra. Use revisões para criar casos de teste, comparar versões e aprovar alterações. Na cotação, descubra quem consegue modificar condições de encaminhamento e como valida a mudança. O custo de sustentação depende da autonomia da equipe e da capacidade de repetir o piloto.',
        'Defina a resposta quando a análise não está disponível. A central pode seguir usando uma fila tradicional, com os procedimentos oficiais para casos importantes. O sistema deve indicar se o chamado só foi recebido ou se já passou por triagem. Quando a análise voltar, não substitua uma decisão humana já registrada sem revisão. Peça um teste com processamento tardio e confirme que o encaminhamento autorizado continua vigente no sistema.',
      ],
    },
    {
      heading: 'Monte uma amostra que represente a linguagem de campo',
      paragraphs: [
        'Reúna chamados de turnos, unidades e equipes diferentes. Inclua mensagens curtas, abreviações, anexos e descrições que mudaram ao longo da investigação. Retire dados desnecessários mantendo a relação entre local, ativo e sintoma. Separe chamados usados para construir exemplos daqueles usados para aceitar o resultado. Várias mensagens da mesma ocorrência devem ficar no mesmo conjunto para evitar que o piloto reconheça uma situação que já viu.',
        'Para cada relato, registre categoria, ativo quando confirmado, prioridade esperada, fila e evidência mínima. Quando a informação inicial não bastava, marque que pergunta ou encaminhamento seria adequado. O resultado final da manutenção pode ajudar a classificar, mas não deve ser usado como se estivesse disponível na abertura. Diferencie o que a triagem consegue inferir desde o início daquilo que só se descobre após inspeção. Faça os fornecedores receberem a mesma régua.',
        'Inclua erros com consequências distintas. Confundir duas categorias leves pode aumentar tempo de revisão. Mandar um relato de possível risco para uma fila comum pode ter impacto maior. Registre quantos casos por grupo foram avaliados e compare encaminhamento, falsos alertas e erros que passaram. Uma taxa média pode esconder falhas graves se a maioria das mensagens representa solicitações simples. Preserve exemplos de situações que exigem escalonamento.',
        'Avalie a pergunta proposta pelo sistema e o efeito do esclarecimento. Uma pergunta boa distingue dois candidatos ou confirma impacto sem pedir que a pessoa faça uma atividade fora do procedimento. Respostas incompletas devem conservar estado e responsável. Teste uma mensagem enviada no fim do turno que recebe complemento no próximo. A equipe precisa retomar com contexto. Esse teste revela a qualidade da triagem além de acertar o rótulo estático.',
      ],
    },
    {
      heading: 'Compare os fornecedores com um chamado que muda de prioridade',
      paragraphs: [
        'Imagine um centro industrial com duas linhas de embalagem. O solicitante informa uma falha numa identificadora chamada “seladora 2”, mas existe equipamento com esse apelido em ambos os setores. No cenário ilustrativo, o sistema deve pedir qual local e manter o chamado rastreável. Depois, a pessoa informa a área e relata que parou a produção. Peça que cada fornecedor mostre a mudança de prioridade e o caminho para a equipe responsável.',
        'Na sequência, outro colaborador registra o mesmo sintoma em outro canal. A solução pode sugerir que os relatos estão relacionados, mas precisa conservar os dois autores, horários e observações. Confirme como o planejador relaciona registros e comunica o próximo passo. Se a segunda mensagem descreve outro ativo, a fila precisa manter chamado separado. Esse teste mostra se uma função de deduplicação ajuda ou apaga diferenças relevantes para a manutenção.',
        'Adicione uma condição que, segundo a política de exemplo, exige contato humano imediato. A ferramenta deve usar o encaminhamento autorizado e deixar visível a confirmação de recebimento ou sua ausência. Não peça ao operador para testar uma causa. Faça a demonstração com uma mensagem curta e uma que menciona condição semelhante como contexto passado. Compare o uso de regra, evidência e revisão. É importante saber em que casos a automação não consegue distinguir sozinha.',
        'Finalize com decisão humana de abrir uma ordem e simule perda do retorno do sistema de manutenção. A próxima tentativa precisa recuperar a referência ou encaminhar conferência antes de criar outra ordem. Um supervisor deve conseguir rastrear solicitação, prioridade, decisão e ordem final. Use o mesmo caso em todas as propostas e verifique o que ocorreu no sistema de destino. Uma tela de triagem aprovada não prova que a integração preservou o contexto no despacho.',
      ],
    },
    {
      heading: 'Defina as integrações e o que cada sistema responde',
      paragraphs: [
        'Escreva uma tabela com cadastro de ativos, histórico de ocorrências, escalas, solicitantes, fila e ordens. Escolha qual sistema permite consultar ou alterar cada dado. A ferramenta de triagem pode receber relato e evidência, enquanto a manutenção conserva definição de ordem e responsabilidade. Se a escala vem de outro lugar, indique atualização e como agir quando ela não está acessível. Não deixe uma sugestão de fila parecer confirmação de uma pessoa.',
        'Defina as referências de solicitação, atualização e ordem. Um relato pode originar mais de uma tarefa, e uma ordem pode reunir ocorrências relacionadas. Na integração, o número visível precisa voltar ao canal original quando isso for útil. Inclua um caso em que o mesmo evento seja entregue de novo e outro em que alguém altera a prioridade no sistema central. O fornecedor deve provar que mantém referências e não abre outra ordem nem volta um estado que já foi atualizado.',
        'Teste recusas e confirmação parcial. O sistema de manutenção pode aceitar o chamado e rejeitar ativo não cadastrado ou impedir uma ordem fora do escopo. A fila precisa mostrar o que foi aceito e qual parte ficou pendente. Peça ao operador que resolva com a permissão prevista. Se a interface ficou inacessível depois da gravação, preserve a incerteza e procure a referência antes de repetir. Não marque o chamado como assumido apenas porque foi transmitido.',
        'Planeje atualização de estado no canal que recebeu a solicitação. A pessoa pode precisar saber que o chamado foi encaminhado, que a manutenção pediu mais dados ou que existe uma ordem. Defina quais observações permanecem internas e quais podem ser comunicadas. Se a política prevê prazo, indique quem governa a previsão. Teste um cancelamento e uma revisão de prioridade para confirmar que os canais mostram o resultado atual sem repetir avisos ou expor informação desnecessária.',
      ],
    },
    {
      heading: 'Dimensione revisão e supervisão da fila',
      paragraphs: [
        'Mostre ao responsável o relato, o ativo sugerido, a prioridade e a origem da regra. O painel deve indicar o que já foi confirmado e o que exige decisão. Uma pessoa pode precisar consultar ocorrências relacionadas ou o estado da linha. Peça que o fornecedor apresente apenas os dados necessários ao trabalho. Uma fila que exige abrir várias telas para validar o básico pode consumir o tempo que a automatização deveria liberar.',
        'Combine como registrar mudanças. Um planejador pode mover a prioridade por informação nova, mudar o ativo ou encaminhar a outra equipe. Registre motivo, data e estado anterior. Se a pessoa altera uma sugestão de IA, preserve o texto original e a evidência. Isso permite verificar por que a ferramenta errou e construir teste. Também ajuda a equipe do turno seguinte a entender a decisão sem procurar quem estava presente.',
        'Inclua acesso por unidade e papel. Um solicitante pode ver o próprio relato e estado, enquanto supervisão enxerga mais ocorrências relacionadas. Um prestador pode ver apenas ordens atribuídas. Faça teste com dois locais e referências diretas. Se a equipe usa anexos, confirme quem pode abrir e exportar. Limite dados em avisos e logs quando não forem necessários para compreender a pendência. O orçamento deve explicar como administra perfis e substituições.',
        'Peça como lidar com fila acumulada e cobertura. Um turno pode registrar muitas ocorrências após uma parada, e a equipe não tem capacidade de rever tudo imediatamente. Prioridades confirmadas devem ficar visíveis conforme a política. A gestão deve identificar falta de resposta ou transferência. Teste quem pode redistribuir e como marca que alguém está tratando. A automação resolve parte do encaminhamento e precisa oferecer estados úteis quando há mais trabalho do que pessoas disponíveis.',
      ],
    },
    {
      heading: 'Compare orçamento por canal, integração e risco de erro',
      paragraphs: [
        'Entregue aos fornecedores o mesmo volume, canais, ativos, turnos e tipos de chamado. Separe custos de captura, cadastro, classificação, regra, revisão, ligação ao sistema de manutenção, testes e suporte. Uma solução pode resumir texto e encaminhar para revisão. Outra pode criar solicitações em ferramenta externa. Compare o que muda na operação. O custo aumenta quando é necessário manter mapeamentos por local, escalas e procedimentos de recuperação.',
        'A descoberta deve entregar exemplos de ativos reconhecidos, organização das prioridades e prova de uma atualização autorizada no destino. Se o cadastro não inclui apelidos ou se os locais mudaram, estime o trabalho de saneamento. Peça condições para validar casos raros e quem apresenta os procedimentos oficiais. Se o integrador não consegue provar uma condição, indique o efeito no escopo. A proposta precisa mostrar como operar a etapa assistida enquanto houver dúvida.',
        'Considere custo recorrente por mensagem, anexo, integração e trabalho humano. Se cada chamado precisa de várias perguntas ou revisão, o custo cresce de forma diferente de uma única classificação. Peça estimativa com pico de volume e indisponibilidade. Inclua treinamento, revisão de regras e avaliação de mudanças de modelo. Uma opção que responde rápido mas exige supervisionar ajustes extensos pode custar mais em uso do que parece na implantação.',
        'Verifique continuidade e portabilidade. A empresa deve conseguir exportar relações entre ativos, chamados, decisões e ordens, com permissões apropriadas. Peça uma demonstração de mudança de cadastro e de versão de regra. Identifique quais configurações ficam sob domínio da manutenção e quais dependem de novo desenvolvimento. Esse trabalho é relevante para orçar porque novos equipamentos, turnos e serviços aparecem depois do piloto.',
      ],
    },
    {
      heading: 'Homologue a triagem com teste de exceção e recuperação',
      paragraphs: [
        'Prepare um roteiro que comece com mensagens saneadas e termine na fila ou ordem prevista. Inclua ativo desconhecido, duplicidade aparente, prioridade conflitante, ocorrência de possível risco e indisponibilidade. Escreva os resultados esperados antes de rodar e indique o que impede a liberação. A equipe deve conseguir encontrar por que a ferramenta encaminhou e que dados ainda precisam de confirmação. Faça o teste com papéis reais em ambiente controlado.',
        'Inclua uma atualização fora de ordem e uma decisão manual enquanto o serviço de IA está indisponível. Quando a ferramenta voltar, não deve reverter decisão ou disparar ações repetidas. Verifique histórico e confirmação no destino. Se o canal original ficar sem resposta, aplique o procedimento oficial para a situação. A homologação precisa comprovar o que a ferramenta faz e como a operação continua caso o processamento deixe de estar disponível.',
        'No piloto, meça tempo até triagem, categorias revistas, ativos mal associados, chamados devolvidos e exceções de prioridade. Num cenário hipotético, reduzir de 90 para 40 buscas manuais por mês pode ajudar, mas confira se não houve aumento de chamadas encaminhadas incorretamente. Acompanhe os casos que passaram sem revisão por amostragem. Para segurança ou urgência, siga os limites definidos pela equipe responsável mesmo se o resultado médio parecer bom.',
        'Antes de ampliar, peça que operadores, supervisão e TI expliquem casos típicos e difíceis olhando os próprios sistemas. Procure os pontos em que tiveram de buscar dados fora da fila. Defina que mudança precisa ser comprovada novamente e quais novos grupos têm regras diferentes. Um site diferente pode exigir outro teste mesmo com a mesma tecnologia. Use o resultado para orçar expansão, mantendo a avaliação dos erros que têm maior consequência.',
      ],
      bullets: [
        'Apelido associado a mais de um ativo, com esclarecimento solicitado.',
        'Ocorrência urgente encaminhada conforme procedimento oficial.',
        'Relatos parecidos conservados ou relacionados com evidência.',
        'Prioridade autorizada preservada após análise tardia.',
        'Ordem recuperada pela referência sem duplicação.',
      ],
    },
    {
      heading: 'O que levar à conversa de orçamento',
      paragraphs: [
        'Prepare relatos de uma situação comum, uma ambígua e uma que exigiu intervenção rápida, sem dados desnecessários. Leve o cadastro de exemplo, os turnos e a forma de encaminhar hoje. Informe o sistema de manutenção e quem confirma prioridade, ordem e resposta ao solicitante. Mostre onde a equipe demora ou perde contexto. Isso ajuda a dimensionar a primeira entrega e separar ajustes de processo de integração técnica.',
        'Peça que a proposta mostre que decisão será apoiada, que evidências entrarão e em que casos uma pessoa vai assumir. Confirme como funcionam revisão, contingência e autorização de efeitos. Combine os estados que precisam aparecer nos sistemas e os critérios de piloto. O fornecedor deve explicar o trabalho que a empresa continua fazendo e o que pode medir, para comparar o benefício em vez de apenas contar classificações.',
        'Leve também a situação em que um ativo muda de local ou a escala troca. Esses eventos ajudam a revelar como a automação vai se manter no tempo. Peça uma estimativa para atualizar o vínculo, testar e voltar à regra anterior quando necessário. Se a empresa ainda não definiu o procedimento para um caso importante, registre a dependência. A primeira entrega pode melhorar a captura e manter a decisão com o time responsável até que seja possível prová-la.',
      ],
    },
  ],
  faqs: [
    { question: 'A IA pode abrir ordens de manutenção automaticamente?', answer: 'Somente nos casos autorizados e homologados pela operação. Comece separando sugestão, encaminhamento e liberação. Use revisão quando ativo, risco ou prioridade não estiverem confirmados.' },
    { question: 'Como testar se a triagem reconhece urgência?', answer: 'Use situações saneadas que a equipe considera urgentes, mensagens ambíguas e exemplos semelhantes sem o mesmo impacto. Compare encaminhamento, confirmação e erros por grupo.' },
    { question: 'Quais fatores mais mudam o orçamento?', answer: 'Canais, qualidade do cadastro, regras de prioridade, quantidade de exceções, integração e revisão humana. Peça demonstração de uma ocorrência completa e de uma falha recuperada.' },
  ],
  cta: {
    title: 'Quer testar IA na triagem de manutenção?',
    text: 'Conte como as solicitações chegam, onde a equipe decide a prioridade e como abre as ordens. A Tironi Tech pode ajudar a recortar um piloto com responsáveis, integrações e critérios de aceite.',
    label: 'Apresentar meu fluxo de manutenção',
  },
  sources: [
    { label: 'Microsoft Dynamics 365 Asset Management — solicitações de manutenção e vínculo com ordens', url: 'https://learn.microsoft.com/dynamics365/supply-chain/asset-management/manage-maintenance-requests/maintenance-request-overview' },
  ],
};
