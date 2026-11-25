export const documentPilot = {
  slug: 'contratar-piloto-ia-documentos-reais',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Monte um piloto de IA com documentos reais, amostra separada, revisão humana e métricas para comparar fornecedores antes da contratação.',
  keywords: ['piloto de IA com documentos reais', 'contratar automação de documentos', 'teste de extração de documentos', 'critérios de aceite para IA'],
  emphasis: 'piloto de IA com documentos reais',
  intro: 'Antes de contratar a automação, monte um piloto de IA com documentos reais que reproduza os formatos, as exceções e os campos que sua equipe encontra. Guarde uma amostra para o teste final, compare a saída com respostas verificadas por pessoas e conte quanto esforço sobra depois da revisão. O resultado deve mostrar quais documentos podem seguir automaticamente, quais exigem conferência e quais ficam fora do primeiro escopo.',
  takeaways: [
    'Crie uma amostra que cubra famílias de documentos e exceções que mudam a decisão.',
    'Separe desenvolvimento, calibração e teste final para comparar fornecedores com a mesma régua.',
    'Combine precisão por campo, risco residual, custo da revisão humana e critérios de aceite.',
  ],
  visual: {
    title: 'Etapas do piloto de automação documental',
    labels: ['Seleção e saneamento da amostra', 'Registro humano do resultado esperado', 'Ajuste e calibração fora da amostra final', 'Teste e decisão com critérios definidos'],
    caption: 'O lote final serve para medir o que a solução consegue extrair e encaminhar em documentos que o fornecedor ainda não usou para ajustar o sistema.',
  },
  sections: [
    {
      heading: 'Delimite o documento e a ação que a automação vai apoiar',
      paragraphs: [
        'Comece pelo momento em que a equipe abre um arquivo e decide o próximo passo. Um pedido enviado em PDF pode alimentar uma conferência antes do cadastro no ERP. Um laudo de manutenção pode ser encaminhado para revisão quando registra um defeito que exige intervenção. Um comprovante pode apenas ser associado a um protocolo. Cada decisão define quais campos ler, que erros importam e o que precisa ser feito quando a leitura for inconclusiva.',
        'Escreva o objeto de teste em uma frase que a operação reconheça. Em uma distribuidora, o piloto pode preparar para conferência pedidos em PDF de clientes recorrentes, indicando referência de compra, empresa pagadora, unidade e quantidades. O fornecedor precisa saber se produtos vêm por códigos próprios do comprador, se há anexos de complementação e se um arquivo pode reunir várias compras. Esse recorte é mais útil para estimar implantação do que pedir uma IA que “entenda todos os documentos”.',
        'Separe a leitura da execução no sistema de destino. Uma caixa de e-mail pode conter um documento com pedido compatível, mas a equipe só pode gravá-lo depois de conferir cadastro, preço e disponibilidade. A solução pode sugerir o preenchimento e mostrar a origem da informação antes da aprovação. Decida com o fornecedor onde termina a leitura e começa a lógica comercial. O aceite da primeira fase pode se concentrar em produzir campos verificáveis, sem colocar dados ainda não homologados em produção.',
        'Liste o que está fora da primeira etapa com exemplos concretos. Pode ser imagem de mensagem cortada, formulário manuscrito, documento em idioma não usado pela operação ou arquivo protegido. Se o fornecedor decidir incluir algum desses casos, exija uma evidência equivalente à dos formatos prioritários. A lista de exclusões precisa aparecer também na tela ou na rotina de triagem. Na operação, alguém precisa saber que um arquivo foi recusado pelo piloto e onde ele deve ser processado.',
      ],
    },
    {
      heading: 'Monte uma amostra que represente o trabalho real',
      paragraphs: [
        'Use lotes recebidos em períodos diferentes e classifique os documentos pela origem, formato e tipo de decisão. Em pedidos de compra, a família pode ser definida pelo modelo de documento do cliente, pelo uso de texto pesquisável ou digitalização e pela presença de tabelas quebradas entre páginas. Procure também períodos que concentram erros, como fechamento do mês e campanhas sazonais. Uma seleção feita apenas com arquivos recentes de um cliente frequente rara vez representa a variedade que o time precisa absorver.',
        'Escolha o tamanho e a composição da amostra com o responsável pela operação. Uma parte deve refletir a mistura real para estimar esforço de revisão. Outra deve reunir cenários críticos, mesmo que raros, como unidade de venda ambígua, mudança de filial, documento repetido com uma pequena correção ou campo de preço incompatível. Apresente os resultados de cada grupo. Concentrar exceções em uma única média pode subestimar o desempenho esperado em produção ou esconder erros que merecem um limite próprio.',
        'Evite que versões quase iguais do mesmo arquivo apareçam nos conjuntos de ajuste e teste. Se uma empresa envia uma mesma tabela diariamente com pequenos ajustes, agrupe arquivos pela origem e, quando fizer sentido, por modelo ou período. Você pode deixar um cliente inteiro fora do ajuste para ver como o sistema lida com uma origem nova. Se a primeira fase só cobrir clientes conhecidos, use documentos posteriores desses mesmos clientes e diga o que foi testado. Assim fica claro até onde a evidência pode ser generalizada.',
        'Registre por que cada formato entrou. Essa trilha ajuda quando um fornecedor pede mais material para ajustar a leitura. Você consegue decidir se o novo exemplo faz parte do conjunto de desenvolvimento ou se desapareceria a independência do teste. Para casos difíceis, mantenha a descrição do problema junto da classificação, com informação suficiente para que outra pessoa confira o critério. Faça uma revisão periódica se a empresa muda de fornecedor, layout ou canal de recebimento.',
      ],
    },
    {
      heading: 'Proteja os dados antes de compartilhar arquivos',
      paragraphs: [
        'Faça um inventário dos campos que o piloto realmente precisa. Se a pergunta envolve tabulação e associação de itens, troque nomes e números que não afetam esse teste, preservando posição e tipo de dado. Para conferir a vinculação entre filial e cadastro, pode ser necessário manter identificadores consistentes entre documentos e sistemas de teste. Defina o que deve ser substituído, que relação precisa permanecer e quem tem autorização para preparar o material.',
        'Sanear um PDF exige testar a versão final. Uma caixa visual sobre um campo pode deixar texto selecionável, camadas, comentários ou metadados acessíveis. Verifique o arquivo após a transformação e confirme se nenhuma informação desnecessária aparece no nome ou na pasta. Para benchmarking de fornecedores, o mesmo lote saneado evita que diferenças de exposição ou qualidade dos arquivos afetem a comparação.',
        'Antes de enviar dados reais, peça a descrição do ambiente de teste e dos acessos. Confirme onde os arquivos entram, quais serviços conseguem lê-los, por quanto tempo ficam armazenados e como resultados, logs e cópias são tratados. Combine com sua área responsável quais dados são necessários e como o encerramento será verificado. Na contratação, esse mapa pode virar um entregável de descoberta e permitir a aprovação interna do piloto por quem administra os dados.',
        'Separe os resultados referenciais do material enviado quando o fornecedor precisar executar o teste sem conhecer as respostas. Arquivos de gabarito podem conter valores que você ocultou ou comentários internos. Restrinja a saída bruta a quem precisa examinar os erros. Em apresentações, use um exemplo autorizado ou sintetizado que preserve o padrão do documento. Isso permite demonstrar a decisão sem reproduzir dados de um cliente ou fornecedor real.',
      ],
    },
    {
      heading: 'Como produzir um gabarito que duas pessoas possam reproduzir',
      paragraphs: [
        'Antes de rodar modelos, transforme o julgamento da equipe em instruções de anotação. Para cada campo, escreva nome, formato, onde pode aparecer e como proceder quando estiver faltando. Em um pedido, a referência do cliente pode estar no cabeçalho e a referência de entrega perto dos itens. Usar qualquer número legível como identificador introduz erro no gabarito. Um pequeno lote inicial serve para encontrar instruções ambíguas antes de pedir a anotação de todos os arquivos.',
        'Represente ausência e ambiguidade como estados diferentes. “Campo ausente” significa que o documento não mostra a informação. “Campo ambíguo” significa que há mais de uma leitura defensável com os elementos disponíveis. “Fora do escopo” descreve um formato ou situação que o piloto não deve processar. Se o gabarito só aceitar valores preenchidos, o fornecedor que adivinhar pode parecer melhor do que uma solução que encaminha a incerteza para revisão.',
        'Verifique uma parte dos documentos com dois revisores independentes. Quando houver discordância, registre como o responsável resolveu o caso e atualize a instrução. Em campos que mudam preço, quantidade ou destino, escolha exemplos que ajudem a testar a consistência entre pessoas. Se a equipe também ficar dividida, o processo pode precisar de uma regra nova ou de um campo adicional na solicitação. A dificuldade observada faz parte do diagnóstico que a empresa deve considerar antes de automatizar.',
        'Inclua no gabarito a página e o trecho de origem para campos críticos. Ao testar extração de tabelas, adote uma referência estável para linha, código e unidade. Isso facilita distinguir falhas de leitura de falhas na associação entre valores. Uma solução pode captar todos os números de uma tabela e associar a quantidade da linha anterior ao item seguinte. A conferência precisa comparar a relação entre dados, além de a presença de caracteres que combinam com o documento.',
      ],
    },
    {
      heading: 'Separe ajuste, calibração e teste final',
      paragraphs: [
        'Entregue ao fornecedor um conjunto de ajuste com exemplos de formatos e respostas esperadas. Ele pode usá-lo para avaliar OCR, definir a estrutura de saída, melhorar regras e testar políticas de revisão. Reserve um grupo diferente para escolher limiares, ajustar combinações de campos ou comparar os efeitos de encaminhar mais documentos a uma pessoa. Mantenha o lote final separado até que a versão a ser testada passe pelo acordo entre as partes.',
        'Para comparar fornecedores, use as mesmas famílias de documentos, respostas de referência e regras de pontuação. Informe antes do teste quais normalizações são aceitas, como separar decimal e milhar ou converter data para um formato único. Se permitir uma correção manual no teste de um fornecedor, aplique o mesmo procedimento aos outros e contabilize o tempo de intervenção. Assim o teste confronta o mesmo custo operacional em condições verificáveis.',
        'Durante a execução final, registre versão do sistema, data, configuração, parâmetros relevantes e tempo de execução. Guarde os resultados associados aos nomes controlados dos documentos. Se houver indisponibilidade, defina antes quando poderá repetir e se ela deve aparecer na avaliação. Uma nova tentativa pode ser legítima para medir recuperação, mas precisa ficar visível como tentativa e fazer parte do tempo observado.',
        'Se um ajuste depois do teste for necessário, mantenha o resultado anterior e use outro lote para confirmar o ganho. Quando os mesmos arquivos passam a guiar mudanças, deixam de ser uma amostra independente. O registro da primeira saída ajuda o comprador a saber o que mudou e a negociar prazos para cobrir formatos ainda frágeis. Um piloto bem documentado permite medir evolução sem confundir qualidade de memorização de exemplos com capacidade no fluxo.',
      ],
    },
    {
      heading: 'Como medir qualidade por campo, por documento e por decisão',
      paragraphs: [
        'Comece pelos campos que geram consequência operacional. Se quantidade e unidade forem críticas, conte valores corretos, incorretos, ausentes e encaminhados. Uma identificação parcial pode ser aceitável para orientar a busca, enquanto uma quantidade errada pode gerar um pedido inválido. Estabeleça a resposta esperada para cada tipo de erro. O fornecedor deve mostrar de que forma os resultados alimentam a tela de revisão ou impedem que o documento seja enviado adiante.',
        'Depois meça documentos completos. Em um exemplo ilustrativo, o piloto encontra corretamente 94 de 100 referências de compra e 92 de 100 unidades. Esses números ainda deixam em aberto quantos documentos acertaram ambos os campos. Calcule o resultado olhando a combinação por documento, pois o cadastro só pode seguir quando todas as condições exigidas estão satisfeitas. Para itens de uma tabela, exija também que cada valor corresponda à linha correta.',
        'Avalie a decisão de encaminhar separadamente da extração. Um fornecedor pode processar automaticamente 45 de 100 arquivos e deixar o restante para revisão. Outro pode processar 75, mas enviar vários casos errados. Faça a matriz com aprovação correta, revisão apropriada, encaminhamento desnecessário e aprovação indevida. Isso mostra o impacto de aumentar a cobertura quando a empresa tem pouca tolerância a um tipo de erro específico.',
        'Resultados pequenos exigem contexto. Se um conjunto de dez exceções graves não apresentar erro, ainda há pouca evidência sobre ocorrências infrequentes. Documente o número de exemplos e a forma de seleção ao apresentar percentuais. Em situações de maior impacto, mantenha a revisão humana ou amplie os testes antes de liberar execução. O perfil de risco do NIST para IA generativa oferece referência para pensar sobre medição, monitoramento e avaliação em condições relevantes de uso.',
      ],
    },
    {
      heading: 'Como calibrar a revisão humana e calcular o custo residual',
      paragraphs: [
        'Peça que o fornecedor mostre o que a pessoa verá quando um campo exigir revisão. O operador precisa encontrar o trecho do documento, entender por que o sistema suspendeu a ação e corrigir o valor sem perder o original. Se o modelo fornecer uma pontuação de confiança, teste se ela separa erros dos acertos com dados do seu processo. A documentação de Document Intelligence da Microsoft distingue sinais de qualidade da análise e recomenda verificar a confiança no cenário avaliado. Cada ferramenta pode definir o sinal de forma diferente.',
        'Meça tempo do operador com e sem assistência para grupos comparáveis. Em um exemplo hipotético de 1.200 documentos por mês, com cinco minutos de leitura manual por unidade, a linha de base seria de 100 horas. Se 720 seguirem corretamente sem edição e 480 exigirem três minutos em média, a revisão soma 24 horas. Some a amostragem dos automatizados, a investigação dos erros, o manejo da fila e a manutenção. O resultado serve para comparar cenários com diferentes taxas de encaminhamento.',
        'Inclua custos que um teste de extração pode esconder. Documentos longos podem exigir mais processamento, páginas repetidas podem entrar de novo e um arquivo ilegível pode exigir intervenção antes de a inferência começar. Peça unidade de cobrança e como ela varia por página, execução, processamento adicional ou serviço terceiro. Simule um período de pico em que o número de revisões aumenta. A empresa precisa entender a capacidade humana que ainda será necessária para cumprir o prazo.',
        'Escolha os critérios de cobertura junto do time que corrige os dados. Se um campo problemático aparece em um único cliente, pode valer a pena manter esse tipo em revisão e liberar os formatos já avaliados. Quando a equipe observa muitos encaminhamentos incorretos em todos os formatos, talvez seja melhor voltar à calibração. O piloto deve mostrar as consequências das duas escolhas com exemplos rastreáveis para que o comprador possa negociar uma implantação gradual.',
      ],
    },
    {
      heading: 'Quais cenários difíceis colocar no roteiro de homologação',
      paragraphs: [
        'Use uma tabela que atravessa páginas e repete o cabeçalho. Inclua dois itens com descrições parecidas e unidades diferentes. O teste precisa provar que as linhas não foram duplicadas ao encontrar o novo cabeçalho e que os números permaneceram ao lado do código correto. Peça que a equipe mostre a saída e a tela de revisão. Se não houver referência ao trecho de origem, o operador pode ter dificuldade de encontrar a divergência mesmo quando o sistema sinaliza baixa confiança.',
        'Inclua uma nova versão do mesmo pedido com itens alterados. O reconhecimento de anexos repetidos precisa distinguir reenvio de revisão. A extração pode produzir o mesmo número de compra e quantidade diferente. O processo deve conservar a ordem das versões, associar a correção ao pedido que já existia e encaminhar a decisão à equipe quando um registro já foi aprovado. Defina se a primeira etapa só sugere essa associação ou também atualiza o sistema.',
        'Teste uma digitalização com campo cortado e um PDF com informação contraditória, como dois endereços de entrega sem indicação clara. O resultado válido pode ser revisão humana ou recusa controlada. Inclua um pedido com dados diferentes dos registrados no ERP para observar quando a validação comercial consegue detectar o problema. A equipe deve conseguir localizar a causa e retomar o caso com o campo corrigido sem perder rastreabilidade.',
        'Simule interrupção de processamento e retorno posterior. Se o piloto usa filas, confirme que o mesmo arquivo não gera duas revisões e que o operador vê quando entrou e em que estágio está. Registre o comportamento enquanto o serviço permanece indisponível, inclusive como a equipe desvia documentos prioritários para um fluxo manual. Esse cenário ajuda a separar o custo de revisão em operação normal do custo de recuperar o estoque de documentos em um incidente.',
      ],
      bullets: [
        'Tabela paginada com cabeçalho repetido e unidades distintas.',
        'Reenvio da mesma compra com alteração de versão.',
        'Arquivo cortado que exige revisão e conserva a justificativa.',
        'Retomada depois de indisponibilidade com uma única revisão por arquivo.',
      ],
    },
    {
      heading: 'Monte o orçamento com uma decisão ao final de cada fase',
      paragraphs: [
        'No pedido comercial, descreva o volume por tipo de documento, as exceções conhecidas, os campos críticos e o destino dos dados. Se a empresa ainda não tem uma classificação confiável desses volumes, peça uma etapa de diagnóstico que entregue mapa de formatos, critérios de amostra e estimativa de erros. O orçamento também deve indicar quais atividades pertencem ao fornecedor e quais dependem dos especialistas que conhecem as regras de compra ou conferência.',
        'Combine entregas verificáveis na fase de piloto. Um pacote pode incluir a amostra saneada e sua classificação, a tabela de respostas esperadas, a versão executada, o relatório por grupo e um fluxo visível de revisão. Peça que o relatório registre exemplos de erros e como seriam tratados em produção. A reunião de encerramento deve permitir escolher entre validar novos formatos, deixar casos em revisão ou suspender investimento se o gargalo principal não estiver na leitura.',
        'Na fase de implantação, peça estimativas separadas para integração, configuração de acesso, tratamento de falhas, suporte e treinamento. Uma boa leitura de documentos pode acabar num gargalo se a equipe precisa copiar de novo a saída para o ERP. Teste o sistema de destino antes de fixar o escopo de gravação. Se o piloto prova só a extração, a proposta de produção precisa explicitar o trabalho que falta para completar a ação operacional.',
        'Defina a responsabilidade por versões. Documentos mudam de layout, sistemas atualizam campos e critérios comerciais ganham exceções. Combine quem recebe alertas de queda de qualidade, como um lote será reproduzido com a configuração antiga e qual amostra será usada em regressões. Quando um modelo ou serviço for substituído, a empresa deve conseguir verificar novamente os campos críticos. Esse cuidado transforma a decisão de contratar em compromisso de manter a qualidade.',
      ],
    },
    {
      heading: 'Combine como a amostra evolui depois da implantação',
      paragraphs: [
        'Escolha um pequeno lote recorrente para cotejar com o resultado da produção. A composição deve incluir documentos aprovados automaticamente, casos enviados à revisão e formatos que apareceram recentemente. Observe o documento e a decisão humana correspondente. Acompanhar somente os arquivos que acionaram alerta torna invisíveis os erros que passaram pela automação e pode deixar a empresa com uma impressão de estabilidade enquanto o perfil de entrada muda.',
        'Uma mudança no fornecedor do documento pode alterar o volume sem mudar nenhum componente da solução. Se um cliente adotar um modelo novo de pedido, registre o início da mudança e compare os campos críticos por família. Combine em contrato como a equipe ativa revisão temporária para esse grupo, quem aprova a calibração e que teste libera a retomada. Esse procedimento é mais verificável do que uma obrigação genérica de manter a qualidade depois da entrega.',
        'Use correções humanas para descobrir onde investir. Se dezenas de casos têm quantidade correta e unidade incompleta, pode ser mais útil revisar a associação de catálogo do que trocar o modelo de leitura. Se o erro aparece quando há documentos concatenados, a solução pode precisar dividir arquivos por fronteira antes de extrair. Para retestar, guarde um conjunto anterior de referência e acrescente exemplos novos, mantendo o resultado das versões comparável.',
      ],
    },
    {
      heading: 'Como interpretar um piloto que não alcançou os critérios',
      paragraphs: [
        'Volte à linha em que a saída começou a divergir. Uma tabela com formatos pouco legíveis pode beneficiar-se de preparar imagens antes da leitura. Uma definição imprecisa de unidade pode depender de cadastro e exigir teste com outra fonte. Uma divergência recorrente de versões pode revelar falta de identificador no processo de entrada. Classificar essas causas ajuda a escolher se a próxima etapa é melhorar a integração, revisar a regra humana ou restringir os documentos aceitos.',
        'Documente o impacto da eventual restrição de escopo. Se o formato de um cliente corresponde a grande parte do volume, mantê-lo manual pode mudar o resultado financeiro. Se são cinco exceções mensais com grande potencial de erro, revisar todas pode ser um limite aceitável. Reestime tempo e cobertura com o recorte que seria implantado, e peça à operação que confirme se o fluxo mais simples atende a um problema relevante.',
        'Quando o piloto não indica justificativa para automação integral, aproveite o que demonstrou sobre a rotina. A equipe pode ganhar uma tela de consulta, um validador de cadastro ou um canal para receber documentos num formato mais uniforme. Essas alternativas têm custos e critérios próprios. Leve os resultados, exemplos e dependências para a reunião para que o fornecedor possa cotar a hipótese que realmente restou.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Quantos documentos preciso separar para contratar um piloto?',
      answer: 'Use volume suficiente para cobrir os formatos frequentes e as exceções que alteram a decisão. Registre quantos exemplos há por grupo e reserve uma parte que o fornecedor só verá no teste final. O número depende da variedade e do impacto em caso de erro.',
    },
    {
      question: 'Dá para contratar usando PDFs simulados?',
      answer: 'Arquivos simulados ajudam a provar formato e integração. Para estimar desempenho operacional, inclua uma amostra representativa dos documentos reais, preparada com os controles de dados da empresa e com respostas de referência verificadas.',
    },
    {
      question: 'Qual precisão deve ser exigida no piloto de IA?',
      answer: 'Estabeleça limites por campo, documento e consequência. Uma saída que muda quantidade, valor ou destino pode exigir revisão obrigatória mesmo quando o indicador global parece alto. Avalie cobertura automática e erros que passam sem revisão.',
    },
    {
      question: 'Como saber se a revisão humana ainda compensa?',
      answer: 'Compare o esforço total por documento com a linha de base, incluindo revisão, exceções e acompanhamento. Avalie também o efeito no prazo e na taxa de erro. Uma redução de digitação tem mais valor se houver capacidade disponível para resolver os casos que ficam na fila.',
    },
  ],
  cta: {
    title: 'Quer definir o escopo de um piloto com seus documentos?',
    text: 'Descreva os tipos de arquivo, os campos que exigem conferência e o sistema de destino. A conversa começa pelo processo e pelos critérios de aceite. Exemplos sem dados sensíveis bastam para o primeiro contato.',
    label: 'Conversar sobre meu piloto de automação',
  },
  sources: [
    { label: 'NIST — perfil de gestão de risco para IA generativa', url: 'https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence' },
    { label: 'Microsoft Azure AI Document Intelligence — precisão e confiança', url: 'https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/accuracy-confidence?view=doc-intel-4.0.0' },
  ],
};
