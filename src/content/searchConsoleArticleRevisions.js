// Editorial revisions of existing URLs; no new pages are created.
export const searchConsoleArticleRevisions = {
  'ia-atendimento-cliente-aplicacoes-metricas': {
    title: 'Como medir triagem e resolução no atendimento com IA',
    description: 'Defina métricas de triagem, resolução, reabertura e transferência no atendimento com IA, com critérios para comparar o piloto à operação atual.',
    updated: '2026-10-21',
    intro: 'Medir atendimento com IA exige acompanhar o resultado do pedido, e não apenas quantas conversas o robô encerrou. Uma resposta automática pode terminar a sessão sem resolver a solicitação. Este guia organiza a medição de um piloto: escolha do grupo de comparação, registro dos eventos e leitura conjunta de resolução, reabertura e transferência. Para avaliar a contratação e a implantação, consulte também o guia de IA para atendimento ao cliente.',
    primaryGuide: { href: '/agentes-de-ia-para-empresas', label: 'Agentes de IA para empresas', description: 'Planeje um piloto com ações autorizadas e critérios de resultado que a equipe consegue verificar.' },
    takeaways: ['Separar encerramento de conversa de resolução confirmada.', 'Comparar solicitações semelhantes durante a mesma janela de observação.', 'Revisar falhas e reaberturas antes de ampliar a automação.'],
    sections: [
      { heading: 'Defina o pedido e a unidade de medição', paragraphs: ['Escolha uma intenção identificável, como consultar o status de um pedido. Registre o identificador da solicitação, a intenção, o início e o desfecho. Uma pessoa pode enviar várias mensagens para o mesmo pedido; contar mensagens como atendimentos distorce o resultado.', 'Defina antes do piloto quando um pedido será considerado resolvido: confirmação do cliente, conclusão verificável no sistema ou revisão da equipe. Registre separadamente os casos em que não foi possível confirmar o resultado.'] },
      { heading: 'Leia resolução junto com reabertura', paragraphs: ['Calcule a resolução confirmada dividindo os pedidos com resultado verificado pelos pedidos elegíveis observados. Informe o denominador e a janela em cada relatório. Não retire silenciosamente falhas de integração ou transferências do grupo observado.', 'Acompanhe também quantos pedidos foram reabertos dentro de uma janela definida pela operação. Se o mesmo cliente retorna porque a primeira resposta não resolveu o problema, a sessão encerrada não deve ser apresentada como sucesso definitivo. A janela precisa ser igual nos grupos comparados.'] },
      { heading: 'Separe espera, execução e transferência', paragraphs: ['Meça o tempo até a primeira resposta útil e o tempo até o resultado. Uma saudação automática não equivale a uma orientação que permite ao cliente avançar. Observe mediana e casos mais demorados para que atendimentos rápidos não escondam esperas longas.', 'Na transferência, confira se a pessoa recebeu intenção, resumo, dados já confirmados e motivo do encaminhamento. Registre a necessidade de repetir perguntas. Transferir um caso sensível corretamente pode representar um bom resultado, mesmo sem resolução automática.'] },
      { heading: 'Compare um piloto com solicitações equivalentes', paragraphs: ['Compare a mesma intenção, canal, horário e condições de operação. Anote mudanças de equipe, campanhas e indisponibilidades que possam afetar o período. Uma diferença observada entre grupos não prova, sozinha, que a IA causou a mudança.', 'Revise uma amostra de casos resolvidos, não confirmados e reabertos com a equipe responsável. Antes de ampliar o piloto, confira erros de resposta, ações indevidas, custo por solicitação e esforço de revisão. Este roteiro não apresenta resultados medidos nem define uma meta universal de automação.'] },
    ],
    faqs: [
      { question: 'Conversas encerradas são pedidos resolvidos?', answer: 'Não necessariamente. A resolução precisa de um critério verificável, e os casos sem confirmação devem aparecer separadamente.' },
      { question: 'Qual é a meta ideal de resolução automática?', answer: 'Depende da intenção, do risco e da operação. Defina os critérios antes do piloto e avalie resolução junto com reabertura, qualidade e custo.' },
    ],
  },
  'ia-para-atendimento-ao-cliente': {
    title: 'IA para atendimento ao cliente: como planejar a implantação',
    description: 'Planeje a implantação de IA no atendimento: escolha do caso de uso, integração com sistemas, transferência para pessoas e critérios de contratação.',
    updated: '2026-10-21',
    primaryGuide: { href: '/agentes-de-ia-para-empresas', label: 'Agentes de IA para empresas' },
  },
  'central-atendimento-whatsapp-multiequipe': {
    title: 'Central de atendimento no WhatsApp: filas, responsáveis e contexto',
    description: 'Organize o WhatsApp entre vendas, suporte e financeiro com filas, responsável pela conversa e transferência de contexto entre equipes.',
    updated: '2026-10-21',
    intro: 'Uma central de atendimento no WhatsApp precisa deixar claro quem responde, qual é a próxima ação e quando transferir a conversa. Considere um cliente que pede orçamento e, na mesma mensagem, pergunta sobre uma cobrança: vendas pode conduzir a proposta enquanto o financeiro recebe uma tarefa com contexto, sem dois atendentes responderem ao mesmo tempo. O desenho deve ser validado na rotina da equipe antes de ampliar a automação.',
    primaryGuide: { href: '/agente-ia-whatsapp', label: 'Agente de IA para WhatsApp', description: 'Veja como integrar triagem, filas e transferência para pessoas na operação de atendimento.' },
  },
  'recuperar-conversas-abandonadas-whatsapp': {
    updated: '2026-10-21',
    intro: 'Para recuperar uma conversa abandonada no WhatsApp, comece pelo último compromisso registrado: qual dúvida ficou aberta, quem deveria agir e se ainda faz sentido retomar. Se o cliente pediu uma comparação de planos, uma retomada útil apresenta a diferença que faltava e pergunta se o cenário continua o mesmo. Antes de enviar, confira consentimento, regras do canal e pedidos para não receber novas mensagens. Este guia propõe um processo de retomada; não apresenta uma taxa de recuperação medida.',
  },
  'como-responder-duvidas-proposta-whatsapp-sem-mudar-escopo-por-acidente': {
    updated: '2026-10-21',
    intro: 'Ao responder uma dúvida de proposta no WhatsApp, indique a versão da proposta e se a resposta apenas esclarece o combinado ou exige uma alteração. Por exemplo: explicar como funciona uma integração prevista é esclarecimento; incluir uma integração adicional pede revisão de escopo, prazo e preço. Registre a decisão na proposta e confirme a versão aprovada antes de a equipe executar. Assim, a conversa ajuda a decidir sem criar dois acordos diferentes.',
  },
  'pesquisa-187-cursor-ai-coding-agent-guia-aplicacao': {
    title: 'Cursor para desenvolvimento empresarial: como avaliar um piloto',
    description: 'Um roteiro para avaliar o Cursor em software empresarial: escolha da tarefa, proteção dos dados, revisão do diff, testes e critérios de aceite.',
    updated: '2026-10-14',
    intro: 'O Cursor é apresentado pela sua documentação como um agente de programação para compreender código, planejar alterações, desenvolver funcionalidades e revisar mudanças. Para uma empresa, a decisão prática é como testar esse apoio em um repositório real com limites claros. Este guia propõe um piloto; não apresenta resultados medidos nem promete ganho de produtividade.',
    takeaways: ['Escolher uma alteração pequena com comportamento esperado verificável.', 'Definir dados e ações permitidos antes de executar o piloto.', 'Revisar código, testes e custo de retrabalho antes de aprovar a entrega.'],
    sections: [
      { heading: 'Escolha uma tarefa que tenha começo e fim', paragraphs: ['Use uma correção de defeito reproduzível ou uma alteração pequena de regra de negócio. Registre a entrada, o resultado atual e o resultado esperado. Evite começar por uma reescrita completa: ela torna difícil distinguir ajuda útil de mudanças desnecessárias.'], bullets: ['Exemplo: um formulário aceita uma data anterior ao início do contrato.', 'Critério de aceite: a data inválida é rejeitada com mensagem clara, e datas permitidas continuam funcionando.', 'Limite: não alterar autenticação, banco de dados ou outras regras do formulário.'] },
      { heading: 'Prepare o repositório e os limites de acesso', paragraphs: ['Trabalhe em uma branch dedicada e confira se a equipe consegue executar o projeto e seus testes antes do piloto. Use exemplos sintéticos ou anonimizados. A equipe responsável deve revisar as políticas da ferramenta e os dados que poderão ser enviados antes de disponibilizar código ou informações restritas.'], bullets: ['Documente comandos de instalação, execução e verificação.', 'Mantenha credenciais fora do código e não as inclua no pedido.', 'Defina quais comandos e integrações exigem autorização humana.'] },
      { heading: 'Escreva um pedido que permita conferir a mudança', paragraphs: ['Um pedido útil descreve o defeito, o caminho para reproduzi-lo, o comportamento desejado e o escopo permitido. Peça que a proposta identifique os arquivos afetados e os testes relevantes. A explicação ajuda a revisão, mas a aprovação depende do código e do comportamento observado.'], bullets: ['Pedido de exemplo: corrija a validação de data no formulário de contrato.', 'Preserve o envio e as regras existentes; adicione verificação para data anterior, igual e posterior ao início.', 'Informe como reproduzir o problema e como confirmar a correção.'] },
      { heading: 'Revise o diff e teste os limites', paragraphs: ['Leia as alterações antes de incorporá-las. Confira se a validação está na camada responsável pela regra e se o código não mudou comportamentos fora do escopo. Execute os testes definidos e repita o cenário que reproduzia o defeito. Um teste que apenas copia a implementação oferece pouca evidência.'], bullets: ['Confira datas inválidas, campos vazios e o formato aceito.', 'Execute os casos que já funcionavam.', 'Verifique novas dependências e alterações de permissões.', 'Registre falhas e correções necessárias, inclusive as descobertas pela revisão humana.'] },
      { heading: 'Decida com uma comparação que inclua revisão e retrabalho', paragraphs: ['Registre tempo de implementação, tempo de revisão, falhas encontradas e retrabalho. Compare tarefas de complexidade semelhante; uma única entrega não permite concluir que a ferramenta melhora toda a operação. A aprovação do piloto deve depender de critérios definidos antes do uso, incluindo qualidade, custo e aderência às políticas internas.', 'Se o piloto funcionar, amplie uma categoria de tarefa por vez. Se a revisão consumir o ganho obtido ou surgirem mudanças sem autorização, ajuste o processo antes de ampliar o uso. O responsável técnico continua sendo quem aceita a entrega.'] },
    ],
    faqs: [
      { question: 'O piloto comprova ganho de produtividade?', answer: 'Somente se houver uma comparação adequada, incluindo revisão e retrabalho. Este roteiro não apresenta medições e não garante redução de prazo.' },
      { question: 'É preciso dar acesso à produção?', answer: 'O piloto proposto começa em ambiente de desenvolvimento com dados sintéticos ou anonimizados. Acesso adicional depende da necessidade e das regras da empresa.' },
      { question: 'Quem aprova a alteração?', answer: 'O responsável técnico deve revisar o diff, verificar os critérios de aceite e decidir se a mudança pode ser incorporada.' },
    ],
    sources: [{ label: 'Cursor — documentação oficial', url: 'https://cursor.com/docs' }],
    primaryGuide: { href: '/desenvolvimento-software-sob-medida', label: 'Desenvolvimento de software sob medida' },
  },
};
