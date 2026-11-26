export const internalProceduresAgent = {
  slug: 'contratar-agente-ia-responder-procedimentos-internos',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Compare propostas de agentes de IA para procedimentos internos com fontes vigentes, regras por unidade e testes de resposta e encaminhamento.',
  keywords: ['agente de IA para procedimentos internos', 'contratar agente de IA para responder procedimentos internos', 'IA para consultar procedimentos vigentes'],
  emphasis: 'agente de IA para procedimentos internos',
  intro: 'Para contratar um agente de IA para procedimentos internos, escolha as decisões que ele precisa orientar, identifique quem aprova as instruções e teste o que acontece quando duas versões indicam passos diferentes. A resposta deve mostrar qual procedimento se aplica, de onde veio a orientação e quando pedir confirmação a uma pessoa.',
  takeaways: [
    'Defina quais decisões a primeira versão terá autorização para orientar.',
    'Confira a vigência, o público, a unidade e as exceções de cada instrução.',
    'Teste mudanças de procedimento e a transferência de dúvidas sem resposta clara.',
  ],
  sections: [
    {
      heading: 'Escolha a decisão que o agente vai ajudar o colaborador a tomar',
      paragraphs: [
        'Ao contratar um **agente de IA para procedimentos internos**, comece por perguntas que chegam enquanto alguém executa uma tarefa. Uma pessoa do recebimento pode precisar saber onde registrar uma divergência entre mercadoria e pedido. Outra pode perguntar que evidência anexar antes de encaminhar uma ocorrência. Descreva a ação que cada resposta permite tomar. Se o agente deve apenas localizar a instrução e explicar os passos, defina separadamente quem tem autoridade para registrar ou aprovar a ação no sistema.',
        'Imagine uma rede que recebe mercadorias em filiais pequenas e em centros de distribuição. As filiais registram a divergência antes de finalizar a entrada. Os centros usam uma fila de conferência que recebe parte dos volumes. Uma resposta sobre qual tela abrir depende do tipo de local. Peça que o fornecedor mostre como o agente identifica essa condição. Se o colaborador usar um termo genérico como “depósito”, verifique se o agente pede o dado que distingue os dois fluxos ou encaminha conforme o procedimento autorizado.',
        'Delimite as perguntas e os papéis que participarão do piloto. A rede pode começar pelo recebimento padrão em duas unidades e deixar as exceções de transporte para a equipe de suporte. Em cada assunto, indique o que será considerado uma resposta utilizável. Por exemplo, o colaborador precisa reconhecer o registro onde fará a anotação e qual responsável deve receber o caso. Esse recorte permite comparar as propostas pelo trabalho que a resposta ajuda a concluir.',
      ],
    },
    {
      heading: 'Confirme quem publica e retira cada versão do procedimento',
      paragraphs: [
        'Monte uma tabela com tema, dono da regra, documento aprovado, vigência e público. Uma versão pode ter sido editada mais recentemente e ainda estar em revisão. Outra pode estar vigente para uma filial enquanto o centro de distribuição usa um complemento autorizado. Peça que a prova inclua as duas fontes e indique o critério que determina o uso. Quando existe divergência sem regra confirmada, encaminhe a decisão ao dono do procedimento e registre o estado antes de configurar a resposta do agente.',
        'Use um caso de revisão programada. Uma instrução fictícia autoriza anexar a foto depois do registro até sexta-feira. A nova regra exige a imagem antes da conclusão e entra em vigor na segunda. Teste a consulta nos dois períodos e inclua uma pergunta sobre um caso registrado na sexta e tratado na segunda. Confirme qual evento determina a regra. A empresa precisa distinguir instruções para uma tarefa nova de consultas sobre decisões tomadas sob uma versão anterior.',
        'Peça que o prestador mostre a passagem do documento publicado até a resposta. Registre o horário em que ele entrou em vigor e o momento em que a orientação passou a ser recuperada no canal. Se a revisão ocupa mais de uma página ou mantém condições em um anexo, confira se o trecho recuperado inclui as referências necessárias. Combine um limite de atraso por grupo de procedimentos e a pessoa que decide suspender respostas de um tema até confirmar a publicação.',
      ],
    },
    {
      heading: 'Escreva respostas que permitam conferir condição e fonte',
      paragraphs: [
        'Peça uma resposta que apresente o passo aplicável, a condição e a referência consultável. No exemplo do recebimento, a instrução pode variar conforme a mercadoria já tenha sido registrada ou ainda esteja em conferência. Use dois casos que pedem a mesma ação com estados diferentes. Confira se a resposta preserva a condição de cada um e se o trecho indicado confirma o que o colaborador deve fazer. Um link para o documento inteiro pode ajudar na navegação, enquanto a evidência precisa mostrar onde está o passo citado.',
        'Inclua perguntas para as quais falta um dado indispensável. Se o endereço da unidade define a tela, o agente pode perguntar qual unidade está tratando a ocorrência. Se duas instruções aprovadas continuam em conflito, defina como encaminhar a dúvida e que contexto deve chegar ao dono do procedimento. Confira também a situação em que o colaborador tem acesso a uma instrução geral e a exceção depende de outro papel. Escreva com a equipe o resultado esperado em cada caso e guarde esses exemplos para a homologação.',
      ],
    },
    {
      heading: 'Teste instruções conflitantes sem deixar o agente arbitrar a regra',
      paragraphs: [
        'Escolha uma pergunta em que a instrução geral e um complemento local parecem aplicáveis. No recebimento, a regra geral pode dizer para abrir a ocorrência no ERP e o complemento de uma filial pode exigir uma conferência na fila local antes desse registro. Confirme com a área responsável se os dois documentos tratam da mesma etapa e qual prevalece para aquela unidade. Registre a decisão e a evidência antes da homologação. Um trecho mais parecido com a pergunta pode estar em um documento que não se aplica ao caso.',
        'Inclua um conflito ainda não resolvido. Duas orientações vigentes podem indicar responsáveis diferentes por aceitar material avariado. Peça que o fornecedor mostre como a dúvida chega ao dono do procedimento, o que o colaborador pode fazer enquanto espera e qual referência ficará no registro. Verifique se a resposta mantém os passos já confirmados sem decidir sozinha a parte em disputa. A operação pode precisar orientar a equipe sobre a guarda do material enquanto a autorização fica pendente.',
        'Teste também uma exceção autorizada que termina numa data definida. Imagine que uma obra desvia temporariamente o recebimento de uma filial para outra área. Consulte antes do início, durante a vigência e depois do encerramento. Confira se a resposta explica por que o caminho temporário é aplicável e se a operação consegue voltar à instrução habitual. Peça que a proposta inclua a verificação do encerramento, pois o esforço de manter exceções deve entrar no custo da operação.',
      ],
    },
    {
      heading: 'Homologue a publicação de uma revisão do início ao fim',
      paragraphs: [
        'Peça uma prova com um documento fictício cuja alteração mude uma ação verificável. Antes da publicação, registre a orientação esperada e a referência vigente. Na publicação, marque o horário que vale para o negócio e a pessoa responsável. Em seguida, consulte a mesma pergunta até observar o resultado correto. Confira a resposta e a fonte exibida. Se a empresa usa mais de um canal interno, repita nos canais que entram no escopo e anote os horários de atualização em cada um.',
        'Inclua uma versão agendada que chegou ao repositório antes de começar a valer. Se o agente encontra o arquivo antecipadamente, a resposta precisa aplicar a regra da data consultada. Teste também a retirada de uma versão que circulou depois da sua vigência. Verifique como a equipe percebe se o índice não refletiu a retirada e em que condições o tema precisa ficar sob atendimento humano. Uma prova precisa demonstrar a troca na conversa, pois o histórico de edição sozinho não comprova a orientação entregue.',
        'Faça a conferência com alguém que publica instruções no dia a dia. Peça que atualize o procedimento de teste, indique os tópicos atingidos e execute uma consulta de referência. Outro colaborador deve localizar a instrução nova e explicar a condição que mudou. Use a sessão para medir quanto trabalho a publicação exige e onde o fornecedor precisa participar. Um orçamento de implantação deve esclarecer quem manterá os procedimentos atualizados após a transferência.',
      ],
    },
    {
      heading: 'Encaminhe as dúvidas com contexto suficiente para decidir',
      paragraphs: [
        'Defina quem recebe cada tipo de dúvida. Uma instrução ausente pode ir para o dono do processo. Um documento vigente que o colaborador não consegue consultar pode exigir apoio do responsável pelo acesso. Uma diferença entre o texto e o comportamento do ERP pode precisar de análise de tecnologia e operação. Escreva a informação necessária para cada destino. Inclua a pergunta, unidade, condição conhecida e a referência disponível, dentro das permissões acordadas.',
        'Verifique o percurso de uma dúvida até receber resposta. No exemplo das duas regras de avaria, o responsável pode decidir que vale o procedimento da unidade até atualizar o complemento. Confirme onde a decisão é registrada, como o colaborador recebe a orientação e quem determina se há motivo para revisar o documento. Quando a dúvida revela uma lacuna, atribua o preparo da nova versão e faça o reteste depois de publicar. A prova mede tanto o encaminhamento imediato quanto a capacidade de corrigir a origem da dúvida.',
        'Conte o tempo gasto para explicar e resolver a pendência. Um encaminhamento útil pode preservar os passos já aplicáveis e levar a dúvida específica à pessoa certa. Se a equipe recebedora precisa refazer a busca e pedir a unidade de novo, registre o esforço e ajuste o formato do caso. Compare soluções com a mesma pergunta incompleta e a mesma regra de autorização. Inclua a revisão humana ao calcular o custo mensal e ao definir o volume que a equipe consegue atender na primeira fase.',
      ],
    },
    {
      heading: 'Confira se a fonte citada sustenta a decisão inteira',
      paragraphs: [
        'Use uma ficha de avaliação com a pergunta, a condição de aplicação, a resposta esperada e os trechos que apoiam cada ação. Em um recebimento com mercadoria avariada, a fonte pode exigir uma foto antes de registrar a divergência e uma conferência do responsável quando o produto já foi lançado. Peça que o avaliador abra a citação e confirme as duas condições. Uma resposta com referência correta ainda pode omitir a parte que determina quando entregar o caso à supervisão.',
        'Inclua uma instrução distribuída entre o manual e uma tabela. O manual pode dizer que a conferência é obrigatória para certas famílias, enquanto a tabela identifica quais entram e quem deve revisar. Compare os candidatos com o mesmo documento e a mesma pergunta. Registre se o agente recuperou apenas o texto geral, conseguiu ligar os dois elementos ou pediu um dado que ainda faltava. Quando a resposta combinar fontes, cada trecho decisivo precisa poder ser conferido pela pessoa autorizada.',
        'Teste a utilidade da citação nas ferramentas que os colaboradores usam. Uma referência pode levar a um documento cujo acesso depende do papel ou a uma página que abre no celular sem indicar a seção relevante. Peça que a prova seja executada por alguém com o perfil previsto no piloto. Confira se a pessoa entende o passo e confirma sua origem sem acesso extra. Se a orientação só está disponível a outro grupo, aplique o procedimento de encaminhamento e reconheça esse resultado na avaliação.',
        'Reserve um caso em que a instrução vigente não cubra a pergunta. Registre o que o agente pode informar com segurança e a condição que impede orientar o próximo passo. Compare o encaminhamento com o de uma pergunta resolvida por fonte direta. A área deve conseguir identificar se precisa publicar uma regra, ampliar acesso ou corrigir a busca. Essa leitura ajuda a escolher o investimento que realmente melhora a cobertura.',
      ],
    },
    {
      heading: 'Meça orientação utilizável e tempo até o próximo passo',
      paragraphs: [
        'Defina o que conta como orientação utilizável. No recebimento, pode ser passar ao colaborador o caminho correto, com a condição aplicável e uma fonte conferível. Em outra tarefa, pode ser indicar a pessoa que pode responder quando falta uma exceção documentada. Acompanhe esses desfechos separadamente. Uma pergunta encerrada rapidamente pode ter sido resolvida, encaminhada ou abandonada. Para medir o benefício, identifique o estado confirmado pela pessoa que precisava decidir.',
        'Imagine 160 perguntas fictícias no conjunto de teste. A operação confirma que 120 têm instruções atuais e permitidas para o perfil. Em 96 dessas, a resposta traz o passo completo e a referência. São 80% das perguntas cobertas pela documentação e 60% do conjunto total. Divida as outras 64 por motivo, como falta de fonte, citação incompleta ou resposta inadequada. Use números observados na empresa e mantenha diferentes perfis e unidades visíveis no resultado.',
        'Compare quanto tempo a pessoa leva para encontrar a instrução, verificar a aplicação e agir. Se o procedimento atual exige procurar em duas pastas e confirmar com um colega, registre as etapas. Com o agente, inclua tempo para abrir a citação, responder perguntas de contexto ou aguardar a supervisão. Separe tempo ativo de espera. Em uma rodada acompanhada pelo fornecedor, marque o esforço que alguém de fora assumiu e procure repetir uma amostra com a equipe que manterá a rotina.',
        'Observe erros com efeitos diferentes. Uma orientação correta que demora pode ainda atender a uma consulta recorrente. Um procedimento de outra unidade pode causar retrabalho mesmo quando a mensagem parece convincente. Combine quais casos bloqueiam a ampliação e que medidas precisam aparecer por tema. Inclua palavras usadas pelos próprios colaboradores e perguntas recentes. Depois de ajustar a configuração, repita a avaliação sobre casos que não fizeram parte do ajuste para verificar o efeito.',
      ],
    },
    {
      heading: 'Compare custos pela manutenção das fontes e do atendimento de exceção',
      paragraphs: [
        'Peça preço separado para inventário, preparação de fontes, configuração de busca, testes de vigência e operação. Se a empresa ainda precisa escolher quem publica procedimentos ou reconciliar cópias locais, inclua esse esforço no orçamento. Compare o que cada prestador assume e o trabalho atribuído à equipe interna. Um valor de implantação pode cobrir uma coleção com instruções bem descritas e precisar de revisão quando a documentação se divide entre unidades e versões.',
        'Solicite uma simulação para a rotina atual e outra com revisões frequentes. Inclua volume de consultas, atualização dos materiais, suporte e horas de análise das dúvidas encaminhadas. Indique quem valida uma nova regra e quanto tempo deve reservar para conferir uma amostra depois da publicação. Se o fornecedor cobra por volume ou licença, peça a unidade e a data de referência. Compare o custo por orientação utilizável com o atendimento que a empresa consegue sustentar nos horários críticos.',
        'Verifique como a proposta trata a inclusão de outro tema. Um procedimento de compras pode usar os mesmos repositórios, mas exigir acesso de outro grupo e um dono de conteúdo diferente. Peça um exemplo de expansão com estimativa, pré-requisitos e testes que precisam ser repetidos. Conte o tempo de revisar a resposta e de verificar a nova documentação. Assim, a empresa consegue projetar custo por grupo de instruções e avaliar o próximo investimento depois de conhecer a manutenção do piloto.',
      ],
    },
    {
      heading: 'Verifique quais instruções cada perfil pode receber',
      paragraphs: [
        'Uma instrução pode ser aplicável à unidade e ter etapas restritas a quem aprova. Combine com os responsáveis quais partes devem ser consultáveis por quem executa a tarefa e quais só aparecem no procedimento de supervisão. Em homologação, use duas contas fictícias com papéis diferentes e faça a mesma pergunta. Confira a resposta, os trechos citados e o resultado ao abrir a fonte. A pessoa que precisa de autorização deve receber uma orientação útil sobre a passagem, dentro das informações previstas para o seu papel.',
        'Inclua um colaborador que muda de unidade no meio do piloto. Verifique que instrução ele pode consultar antes e depois da atualização, incluindo uma conversa já aberta. Se a solução mantém respostas anteriores disponíveis, defina como o histórico respeita os acessos e quais estados precisam ser revistos no aceite. Registre o tempo em que a regra de acesso passou a valer no repositório e no canal. A operação deve identificar quem acompanha uma diferença entre os dois.',
        'Peça que cada prestador mostre a origem dos perfis e o responsável por ajustar a regra. O repositório pode aplicar permissões por documento, enquanto a operação determina a unidade da pessoa em outro sistema. A proposta deve indicar como essas condições entram no teste e como uma dúvida é encaminhada quando o vínculo ainda precisa de confirmação. Inclua o esforço para cadastrar pessoas, revisar mudanças e administrar acessos temporários no custo de continuidade.',
      ],
    },
    {
      heading: 'Planeje a reação a uma instrução desatualizada no atendimento',
      paragraphs: [
        'Defina um caminho para o colaborador sinalizar que a orientação diverge do procedimento em uso. O relato precisa informar tema, unidade, horário e referência, dentro do acesso previsto. A pessoa que recebe deve conseguir confirmar qual versão estava publicada e por que apareceu na resposta. Inclua uma situação fictícia em que o manual foi atualizado, mas um complemento local ainda tem a regra anterior. A prova deve mostrar como a operação identifica a divergência, encaminha ao dono e orienta quem está aguardando.',
        'Combine quando limitar respostas sobre um tema. Se a nova regra ainda não foi confirmada no canal, pode ser necessário orientar as pessoas a consultar o responsável por aquela tarefa. Para voltar a responder, execute uma consulta de referência com a versão vigente e outra para uma unidade cuja regra não mudou. Registre quem autoriza a retomada e onde consultar o resultado. Esse procedimento ajuda a prever o esforço da equipe enquanto a fonte volta a ficar sincronizada.',
        'Revise também o que acontece com perguntas feitas desde a última alteração. Uma dúvida pode já ter sido resolvida pela supervisão e outra ainda estar em atendimento. A coordenação deve poder selecionar casos que precisam de retorno e indicar quais podem ser encerrados. Inclua a referência do caso e uma orientação de próxima ação sem reaproveitar automaticamente a resposta antiga. Compare o tempo para identificar os casos e o apoio necessário durante a primeira semana de operação.',
      ],
    },
    {
      heading: 'Compare fornecedores com a mesma prova e o mesmo critério de aceite',
      paragraphs: [
        'Entregue aos candidatos um conjunto fictício com uma regra geral, um complemento regional e duas versões da mesma instrução. Acrescente dúvidas formuladas por pessoas da operação, incluindo uma ocorrência iniciada antes da troca de versão. Informe qual perfil fará cada consulta e qual resposta a área responsável considera correta. Avalie cada proposta pelo resultado obtido e pelo trabalho necessário para chegar a ele. Se um candidato preparar previamente as respostas, solicite uma segunda rodada com perguntas equivalentes em outra formulação.',
        'No aceite, inclua consulta normal, dúvida ambígua, atualização de regra e acesso restrito. A documentação do Azure AI Search descreve o controle de acesso no nível de documento como uma forma de devolver resultados conforme as permissões de quem consulta. Qualquer que seja a tecnologia contratada, verifique o efeito com o perfil que realmente usará o canal. Confira se as fontes citadas podem ser abertas e se a resposta encaminha corretamente as decisões reservadas a outra função. Registre o que foi testado no ambiente de destino e o que ainda depende de configuração.',
        'Peça que o orçamento identifique o esforço de cada entrega. Inventariar regras vigentes pode exigir entrevistas, enquanto integrar um repositório pode depender de administradores que conhecem os perfis. Homologar uma mudança envolve alguém que publica e alguém que verifica a aplicação. Reserve horas para essas pessoas e confirme se a proposta inclui acompanhamento após o primeiro uso. Se uma área ainda não tem dono para determinada instrução, indique se resolver a lacuna faz parte do contrato ou é uma condição interna para iniciar.',
      ],
    },
    {
      heading: 'Combine a primeira liberação e a transferência de manutenção',
      paragraphs: [
        'Escolha um tema e um grupo de pessoas para a primeira janela. Inclua colaboradores que executam a tarefa e supervisores que recebem as pendências. Nas primeiras rodadas, reveja as respostas que habilitaram uma decisão e aquelas que precisaram de intervenção. Compare com a linha de base e verifique se a configuração mantém a mesma qualidade depois de publicar uma revisão. Defina a pessoa que pode liberar outro tema e qual evidência será necessária quando houver outras unidades, fontes ou controles de acesso.',
        'Peça materiais de transferência que uma pessoa recém-chegada consiga usar. A lista de fontes deve mostrar dono, vigência, público e procedimento de publicação. O roteiro precisa permitir repetir uma pergunta antes e depois de uma mudança, além de conferir um encaminhamento. Em uma sessão prática, peça que a equipe localize a referência de uma resposta e registre o próximo passo diante de uma divergência. Compare o resultado com a distribuição de responsabilidades prometida no orçamento e confirme o apoio disponível quando surgir uma dúvida fora do horário.',
        'Para a primeira conversa de contratação, leve três perguntas sobre tarefas reais, um procedimento aprovado e um exemplo fictício de exceção. Informe onde os colaboradores procuram orientações hoje, quem atualiza o material e quando a direção precisa decidir. Peça uma previsão de custo por etapa e uma forma de medir respostas utilizáveis. Se o piloto pretende verificar um conjunto restrito de perguntas, mantenha esse recorte no aceite e registre os pré-requisitos para ampliar. Isso dá à empresa um método que pode aplicar novamente ao incluir outro departamento.',
      ],
    },
  ],
  faqs: [
    { question: 'Como testar se o agente responde com o procedimento vigente?', answer: 'Consulte a mesma pergunta antes e depois de uma mudança aprovada. Confira o passo indicado, a vigência, a unidade e a fonte citada.' },
    { question: 'O que fazer quando dois procedimentos entram em conflito?', answer: 'Verifique se existe precedência aprovada. Quando a regra não estiver definida, encaminhe a dúvida e suas referências ao responsável pelo processo.' },
    { question: 'O que comparar no orçamento do agente?', answer: 'Compare preparação de fontes, integração, teste de versões e acessos, encaminhamento, suporte e custo por orientação utilizável.' },
  ],
  cta: {
    title: 'Quer testar um agente com seus procedimentos internos?',
    text: 'Apresente à Tironi Tech as tarefas prioritárias, as fontes vigentes e as diferenças entre unidades. Podemos ajudar a delimitar a prova e definir os critérios de aceite.',
    label: 'Conversar sobre meu agente de procedimentos',
  },
  sources: [
    { label: 'Microsoft Learn — controle de acesso no nível de documento', url: 'https://learn.microsoft.com/azure/search/search-document-level-access-overview' },
  ],
};
