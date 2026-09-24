import { tutorial } from './tutorialSchema.js';

export const expansionTutorialArticles = [
  tutorial({
    editorialRequest: 'additional-100-20260924',
    slug: 'como-testar-jornada-orcamento-celular-tarefas-reais',
    title: 'Como testar a jornada de orçamento pelo celular e encontrar obstáculos antes de comprar mais tráfego',
    description: 'Prepare um teste de usabilidade com tarefas reais, registre obstáculos e priorize correções no caminho entre a oferta e o contato comercial.',
    category: 'Vendas e crescimento',
    keywords: ['como melhorar conversão pelo celular', 'teste de usabilidade site', 'orçamento pelo WhatsApp', 'site para gerar leads', 'desenvolvimento web'],
    intro: 'Antes de aumentar o tráfego, observe se uma pessoa consegue entender a oferta e pedir um orçamento pelo celular. Este tutorial propõe um teste de usabilidade para uma empresa fictícia de serviços técnicos. O procedimento ajuda a encontrar obstáculos concretos, sem confundir a opinião sobre o visual com a capacidade de concluir uma tarefa comercial.',
    takeaways: ['Descrever uma tarefa sem revelar o caminho desejado.', 'Observar o uso com pouca interferência do moderador.', 'Separar falha de interface, dúvida de oferta e problema de atendimento.', 'Priorizar correções pelo efeito na tarefa e verificar novamente.'],
    visual: { type: 'flow', eyebrow: 'JORNADA NO CELULAR', title: 'Observar antes de redesenhar', labels: ['Definir a tarefa', 'Preparar o cenário', 'Observar a execução', 'Classificar obstáculos', 'Conferir a correção'], caption: 'Uma sessão revela problemas no contexto observado. Ela não fornece, sozinha, uma taxa de conversão representativa de todo o público.' },
    faqs: [
      { question: 'Perguntar se a pessoa gostou do site é um teste de usabilidade?', answer: 'A opinião pode complementar a análise, mas o teste deve observar uma tarefa. Uma pessoa pode gostar do visual e ainda não conseguir enviar uma solicitação.' },
      { question: 'Preciso testar com centenas de pessoas?', answer: 'O recorte depende da pergunta. Sessões qualitativas ajudam a descobrir obstáculos; elas não devem ser apresentadas como uma estimativa estatística da conversão do público inteiro.' },
      { question: 'Devo explicar como usar o formulário durante a sessão?', answer: 'Evite orientar o caminho que está sendo avaliado. Registre quando a pessoa precisa de ajuda, pois essa necessidade é uma evidência sobre a experiência atual.' },
      { question: 'Como a Tironi Tech pode atuar?', answer: 'Pode investigar a jornada, corrigir interfaces e conectar o envio ao atendimento e ao CRM, de acordo com os obstáculos encontrados.' },
    ],
    cta: { title: 'Descubra onde sua página perde a continuidade comercial', text: 'A Tironi Tech pode avaliar a jornada de orçamento e implementar melhorias de interface e integração para que o interesse chegue à equipe com contexto.', label: 'Avaliar a jornada do meu site', href: '/#contato' },
    sources: [{ label: 'GOV.UK Service Manual — testes moderados de usabilidade, consultado em 24/09/2026', url: 'https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing' }],
  }, `
## 1. Escolha uma tarefa comercial que tenha um fim observável

Uma empresa percebe muitas visitas e poucas solicitações, mas ainda não sabe onde a experiência se rompe. Escolha uma tarefa específica, como verificar se o serviço atende determinada necessidade e iniciar um pedido de orçamento. Evite uma instrução ampla como explore o site, porque ela não permite saber se a pessoa conseguiu o que precisava. O fim da tarefa deve ser observável e compatível com o serviço: solicitação registrada, conversa iniciada ou identificação clara de que a oferta não atende ao caso.

Use um cenário fictício próximo do contexto do comprador. Para uma empresa de instalações, o participante pode precisar avaliar um serviço para uma pequena unidade comercial. Forneça as informações necessárias ao papel, mas não diga quais botões deve clicar. Se a instrução já contém o nome do menu e o caminho do formulário, você estará avaliando obediência à orientação, não descoberta da jornada. O teste precisa deixar espaço para a pessoa mostrar como entende a oferta e onde procura a próxima ação.

Defina quais perguntas a observação deve responder. O visitante entende para quem o serviço serve? Consegue encontrar o contato? Sabe o que acontecerá depois do envio? Essas perguntas delimitam o estudo e evitam transformar a sessão em uma discussão geral sobre cores. Preferências visuais podem aparecer, mas devem ser separadas de obstáculos que impedem a tarefa. A análise comercial precisa localizar o trabalho que não avançou e a razão observada para isso.

## 2. Prepare um ambiente que preserve o fluxo sem criar pedidos indevidos

Use um ambiente ou procedimento de teste que não envie solicitações fictícias como oportunidades reais sem identificação. O caminho precisa se parecer com a experiência que será avaliada, incluindo validação e confirmação, mas a equipe deve conseguir distinguir os registros do teste. Se parte da jornada depende de um canal externo, combine como a sessão chegará até esse ponto e o que poderá ser concluído. Não crie mensagens para terceiros sem que esse envio faça parte de um teste autorizado.

Escolha dispositivos e condições relevantes ao público. Um formulário que funciona em uma tela grande pode ocultar um botão sob o teclado no celular. Uma imagem pesada pode atrasar a abertura em uma conexão menos estável. Não é necessário testar toda combinação possível de aparelho no primeiro estudo, mas registre a condição usada. Isso impede generalizar uma observação feita em um único contexto como se cobrisse todas as situações de acesso.

Revise os dados fictícios necessários para preencher o fluxo e explique seu uso ao participante. Evite pedir que ele revele informações privadas apenas para testar um campo. Se houver gravação ou observação por outras pessoas, combine isso adequadamente e preserve o material conforme o procedimento adotado. O objetivo é investigar a experiência, não coletar dados pessoais adicionais. Um cenário bem preparado permite observar comportamento relevante sem transformar o teste em uma exposição desnecessária de informações.

## 3. Observe a execução sem ensinar a resposta

O guia de testes moderados do GOV.UK descreve sessões em que participantes executam tarefas enquanto a equipe observa. Neste roteiro, a aplicação prática é dar a tarefa e permitir que a pessoa procure seu caminho, usando perguntas neutras quando necessário. Não antecipe a próxima tela nem corrija imediatamente uma escolha inesperada. Essa escolha pode revelar que o conteúdo ou a navegação comunica algo diferente do que a empresa imaginava.

Anote o que aconteceu antes de interpretar. A pessoa abriu o menu duas vezes, voltou à página anterior e procurou preço em um bloco de perguntas. Esses fatos são mais úteis do que escrever ficou perdida sem explicar por quê. Registre também momentos em que ela conclui corretamente, pois podem indicar componentes que vale preservar. Um redesenho não precisa substituir tudo; ele deve resolver obstáculos mantendo caminhos que já funcionam para o público observado.

Se o participante pedir ajuda, registre o pedido e escolha uma intervenção compatível com o objetivo da sessão. Pode ser necessário permitir que ele continue para observar a etapa seguinte, mas essa conclusão deve ser marcada como assistida. Não conte o sucesso com orientação como se a pessoa tivesse descoberto o caminho sozinha. A distinção ajuda a medir a dificuldade e impede que a condução da sessão esconda justamente o problema que deveria ser investigado.

## 4. Separe entendimento da oferta e dificuldade de interação

Uma pessoa pode encontrar o formulário e ainda não saber se o serviço atende seu caso. Outra pode compreender a oferta e não conseguir selecionar uma opção no celular. São obstáculos diferentes. Classifique dúvidas de conteúdo, falhas de interação e problemas técnicos, mantendo os exemplos observados. A correção de um texto ambíguo não é a mesma de um campo que não aceita o formato esperado. Uma lista genérica de melhorar a experiência torna a priorização menos objetiva.

Observe as expectativas criadas pelos botões e pelas mensagens. Se a ação diz receber orçamento e o resultado é apenas cadastro para uma ligação futura, pode haver uma diferença entre promessa e entrega. O teste deve verificar o que a pessoa esperava, sem concluir automaticamente que o fluxo precisa oferecer um preço imediato. Talvez a correção seja explicar melhor a etapa de avaliação. A interface deve representar o processo real que a empresa consegue executar.

Examine o que acontece ao abrir o WhatsApp ou outro canal. A pessoa entende qual informação será enviada e consegue retomar o serviço que estava olhando? Uma troca de aplicativo pode perder a referência da oferta. Se o teste termina no clique, esse problema não aparece. Defina até onde a tarefa será acompanhada e registre limites de observação. Um botão funcionar tecnicamente não comprova que a conversa comercial começou com contexto suficiente.

## 5. Investigue erros de preenchimento como problemas recuperáveis

Inclua um cenário em que falte uma informação ou um formato não seja aceito. Confira se a mensagem explica o que precisa mudar e se os dados já preenchidos continuam disponíveis. Um erro não precisa encerrar a tarefa, mas o fluxo deve permitir recuperação compreensível. Observe também a posição da mensagem no celular: ela pode aparecer fora da área visível e deixar o usuário sem perceber por que o envio não avançou.

Teste o comportamento do teclado, a ordem dos campos e a possibilidade de voltar a uma etapa. Um visitante pode corrigir telefone ou descrição depois de revisar o pedido. Se a interface apaga o restante ou cria uma nova solicitação em cada tentativa, o problema atinge a operação comercial além da experiência de uso. O procedimento deve acompanhar o registro final e verificar se a equipe recebeu uma demanda coerente, sem duplicidades geradas pela dificuldade de preenchimento.

Não trate toda resposta incompleta como falta de interesse. Um campo pode usar um termo desconhecido, exigir precisão que o comprador ainda não possui ou pedir uma informação cedo demais. Pergunte o que a pessoa entendeu e o que precisaria para responder, sem sugerir que ela deveria saber. Essa observação pode levar a uma orientação melhor, a um campo opcional ou à coleta em uma conversa posterior. O formulário deve servir ao próximo passo, não exigir que o cliente resolva sozinho toda a avaliação.

## 6. Priorize achados pelo impacto na tarefa

Para cada achado, registre evidência, efeito, hipótese de causa e proposta de correção. Diferencie impedimento de conclusão, esforço adicional e preferência pessoal. Um botão invisível pode bloquear a solicitação; um termo confuso pode provocar informação errada; uma preferência por outra cor pode não alterar a tarefa. Essa organização ajuda a concentrar o trabalho nas mudanças que resolvem obstáculos concretos, sem transformar a sessão em uma votação de estilo.

Considere recorrência e gravidade, mas não apresente a frequência em uma amostra pequena como taxa do público inteiro. Se três participantes encontraram o mesmo problema, isso sustenta investigá-lo, não afirmar que uma porcentagem equivalente de todos os visitantes abandona por essa razão. Conecte a observação a dados operacionais quando disponíveis, mantendo as diferenças entre os métodos. A análise qualitativa mostra como um obstáculo acontece; a medição quantitativa exige um desenho próprio.

Escolha correções delimitadas e defina como conferir cada uma. Se o problema é a pessoa não entender a próxima etapa, a verificação pode pedir que outro participante explique o resultado esperado após ler a nova mensagem. Se o problema é envio duplicado, o teste deve repetir a ação e conferir o registro. Evite uma tarefa ampla de redesenhar tudo sem critério de conclusão. Uma melhoria verificável permite aprender se a causa foi corretamente identificada.

## 7. Repita a tarefa depois da correção

Teste novamente o caminho com as mudanças aplicadas, preferencialmente sem depender apenas de pessoas que já aprenderam a interface anterior. O participante que decorou o botão pode concluir com facilidade mesmo que o problema de descoberta continue. Preserve o cenário e os critérios relevantes para comparar o comportamento. Ao mesmo tempo, registre alterações de contexto que possam afetar o resultado. A repetição deve verificar a hipótese de correção, não produzir uma demonstração ensaiada.

Confira consequências em etapas vizinhas. Reduzir um campo pode facilitar o envio e deixar a equipe sem informação necessária para atender. Acrescentar uma explicação pode resolver a dúvida e empurrar a ação para longe da área visível. Observe o fluxo completo novamente, incluindo a mensagem recebida pela operação. Uma correção local só se torna melhoria da jornada quando mantém a continuidade que a empresa e o comprador precisam.

Registre o que foi resolvido, o que permanece e o que surgiu durante a nova rodada. Não declare o site totalmente validado com base em um recorte. A conclusão deve indicar a tarefa e as condições avaliadas. Esse registro ajuda a planejar próximos testes sem repetir descobertas já tratadas e permite que desenvolvimento, marketing e atendimento entendam o alcance da evidência. O trabalho de melhoria se acumula quando cada rodada deixa decisões claras.

## 8. Relacione o teste à rotina comercial

Depois da publicação, acompanhe envios válidos, dúvidas recorrentes e continuidade do atendimento, considerando as condições de medição disponíveis. Um aumento de solicitações pode ter outras causas, como mudança de campanha ou oferta. Não atribua toda variação ao ajuste de interface apenas por ter ocorrido depois. Use os dados para verificar se o obstáculo observado continua aparecendo e para formular a próxima pergunta. O teste oferece uma base de aprendizado, não uma garantia de crescimento.

Compartilhe os achados com quem recebe as demandas. A equipe pode identificar se a nova mensagem deixou o contexto mais claro ou se clientes ainda chegam com expectativa diferente. Essa devolutiva conecta a experiência digital ao trabalho comercial. Um site que facilita o envio, mas entrega registros sem responsável ou sem referência de oferta, ainda perde parte do valor. A melhoria deve acompanhar o caminho até uma próxima ação útil, dentro do escopo escolhido.

A Tironi Tech pode investigar e implementar essa jornada, conectando interface, formulários e atendimento aos sistemas usados pela empresa. Para iniciar, escolha uma tarefa importante e reúna exemplos de dificuldades percebidas. O trabalho deve produzir correções que possam ser conferidas em uso, preservando a identidade do site. Antes de ampliar investimento em aquisição, entender onde a pessoa consegue ou não avançar ajuda a direcionar o desenvolvimento para problemas concretos.
`),
];
