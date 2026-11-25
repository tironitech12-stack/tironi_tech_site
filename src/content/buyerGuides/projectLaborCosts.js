export const projectLaborCosts = {
  slug: 'integrar-folha-projetos-rateio-custos',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Compare propostas para integrar custos de pessoal por projeto, com rateio de folha, horas aprovadas, correções e conferência no ERP.',
  keywords: ['integração de custos de pessoal por projeto', 'rateio de custos de pessoal por projeto', 'integrar folha e gestão de projetos', 'integração de apontamento e custos no ERP'],
  emphasis: 'integração de custos de pessoal por projeto',
  intro: 'Para contratar a integração de custos de pessoal por projeto, defina primeiro o que a empresa quer distribuir, quais horas ou critérios sustentam o rateio e quando o valor pode ser lançado no ERP. Peça que o fornecedor reproduza um fechamento com uma pessoa em dois projetos, horas não alocáveis e uma correção posterior. O resultado deve permitir explicar o total sem expor dados individuais a quem só precisa acompanhar o projeto.',
  takeaways: [
    'Separe horas registradas, custo estimado, custo apurado e lançamento confirmado.',
    'Valide a regra com casos de rateio, horas faltantes e correções após o fechamento.',
    'Teste totais e restrições de acesso em folha, projetos e ERP.',
  ],
  visual: {
    title: 'Das horas aprovadas ao custo conferido',
    labels: ['Projetos coletam e aprovam apontamentos', 'Fonte autorizada fornece a base de custo', 'Rateio é revisado por competência', 'ERP recebe totais e devolve confirmação'],
    caption: 'Cada fonte responde por um dado. O responsável precisa conferir o total movimentado e o resultado por projeto.',
  },
  sections: [
    {
      heading: 'Defina a decisão que a integração precisa apoiar',
      paragraphs: [
        'Abra um período de trabalho recentemente encerrado e acompanhe como a empresa calculou o custo da equipe em cada projeto. Identifique se a gestão quer ver custo antes do fechamento, comparar orçamento ou conferir lançamentos já feitos. Uma fabricante pode querer conhecer esforço de engenharia por encomenda. Uma prestadora pode precisar medir margem por contrato. O primeiro projeto deve responder a uma pergunta definida, porque a precisão, a frequência e o nível de detalhe mudam conforme o uso.',
        'Separe custo gerencial de registro financeiro. Uma visualização diária pode estimar custo usando taxas autorizadas. A apuração mensal pode usar valores consolidados de outra origem. O ERP pode receber uma classificação ou lançamento com políticas que a empresa precisa validar internamente. A proposta deve dizer qual visão está sendo produzida, quando muda e que fonte pode confirmar. Um painel útil informa se o mês ainda contém estimativas ou se já passou pela apuração.',
        'Leve casos em que o controle atual não consegue responder rapidamente. Uma pessoa pode contribuir para dois projetos e realizar atividades internas no mesmo mês. Outro profissional pode ter indicação de horas aprovada tarde. Talvez o financeiro já conheça o custo total da área, mas precise distribuir por cliente ou centro de custo para comparar com o previsto. Escolha exemplos que revelem a diferença entre montar uma tabela e resolver o fechamento que a empresa realmente usa.',
        'Identifique o indicador que será comparado no piloto. Pode ser tempo para atribuir custos, volume de ajustes manuais, proporção de valores sem destinação ou tempo até aprovar o mês. Registre a situação atual com um grupo de projetos representativo. Uma redução de trabalho em uma área pode aumentar o tempo de revisão em outra. Por isso, peça uma visão que acompanhe o trabalho desde a aprovação das horas até a confirmação do resultado no ERP.',
      ],
    },
    {
      heading: 'Separe as fontes de tempo, projeto e valor',
      paragraphs: [
        'Faça um mapa por dado. A ferramenta de projetos pode registrar tarefa e aprovação. A folha ou outra fonte autorizada pode fornecer a base que a empresa decidiu usar. O ERP pode manter empresas, centros de custo, projetos e períodos. A integração precisa de chaves para relacionar os registros sem trazer detalhes dispensáveis. Em vez de pedir acesso amplo a todos os sistemas, mostre ao fornecedor quais campos são necessários para calcular, conferir e recuperar um lançamento.',
        'Use códigos de pessoa, projeto e tarefa que sobrevivam a mudanças de descrição. Um projeto pode mudar de nome ou gerente sem virar outro destino. Uma pessoa pode trocar de empresa ou centro entre dois períodos. Defina que atributos valem para a data de trabalho e que dados refletem o cadastro atual. Em homologação, mude a unidade após o fechamento e confira se o histórico conserva a relação que estava vigente na competência.',
        'Verifique o momento em que a hora está autorizada. Um registro salvo pode ainda estar em rascunho, aguardando revisão ou retornado para correção. A documentação do Microsoft Dynamics 365 Project Operations exemplifica registros de tempo usados para calcular custos e enviados para aprovação. Isso serve de referência para a sequência, sem pressupor que a instalação da empresa ofereça o mesmo modelo. Peça uma prova de como acessar aprovação e revisão na fonte que será conectada.',
        'Planeje registros que não têm o projeto identificado na origem. A equipe pode lançar horas em atividade interna e só depois classificar parte como suporte a um cliente. Defina se o caso espera aprovação, se vai para um destino transitório ou se exige que alguém retifique a origem. Evite preencher automaticamente com o primeiro projeto associado à pessoa. O operador deve ver onde a informação ficou pendente, quem decide e o que muda após a correção.',
      ],
    },
    {
      heading: 'Descreva a base de custo e a regra de distribuição',
      paragraphs: [
        'Liste as parcelas que a empresa decidiu incluir e o período ao qual pertencem. Um rateio gerencial pode usar um valor agregado e um critério definido pela gestão. Outro pode separar categorias para comparar execução ou lançar nos destinos que o ERP exige. Peça à área responsável que entregue exemplos numéricos e valide o cálculo. O integrador precisa implementar uma decisão registrada, e qualquer tratamento contábil ou de folha deve ser confirmado pelos especialistas da operação.',
        'Num cenário ilustrativo, a base mensal de uma pessoa é de R$ 12 mil. Foram aceitas 60 horas para o projeto A, 30 para o B e dez para atividade interna. Se a regra usa todas as cem horas aprovadas como denominador, o exemplo distribui R$ 7.200 para A, R$ 3.600 para B e R$ 1.200 para a atividade interna. Se a empresa excluir as horas internas do denominador, a distribuição muda. Peça que o fornecedor reproduza a definição adotada e mostre onde o valor que ficou fora é tratado.',
        'Indique como lida com arredondamento. Repartir uma base em várias tarefas e arredondar cada linha pode deixar centavos fora do total. Determine se o resto vai para uma linha definida, uma dimensão de ajuste ou outra estratégia verificável. Faça um teste com valores que não se dividem exatamente. A gestão precisa ver o cálculo e a conciliação. Corrigir a diferença somente depois da exportação prejudica a capacidade de repetir o fechamento quando houver revisão.',
        'Inclua a vigência das regras. Pode haver taxa gerencial por função durante o mês e substituição por valor apurado no fechamento. Não misture resultados estimados e confirmados sem indicar origem. Em projetos longos, a regra pode mudar no meio da execução. Defina o que se aplica por data e o que exige reprocessamento autorizado. Peça que o integrador reconstrua um cálculo antigo com as regras que valiam naquele período.',
      ],
    },
    {
      heading: 'Trate capacidade sem apontamento e atividades que não vão ao cliente',
      paragraphs: [
        'Defina como a empresa reconhece treinamento, férias, atividades internas, espera e outras horas sem tarefa de cliente. Algumas entram em centros próprios. Outras são consideradas na taxa adotada pela gestão. Em vez de assumir que toda hora precisa virar custo de projeto, escreva a regra por tipo e mostre um exemplo. A área responsável deve aprovar tanto o denominador quanto a classificação que será apresentada no relatório.',
        'Inclua mês sem horas aprovadas para uma pessoa que ainda tem custo a tratar. O sistema não deve dividir a base por zero nem associar valor a um projeto sem evidência. Combine se mantém o valor pendente, envia a um centro indicado ou pede ajuste antes de fechar. Mostre como o operador sabe quanto falta distribuir e qual decisão a área tomou. Uma fila que some do painel depois do corte pode esconder parte do total.',
        'Teste horários sobrepostos e períodos incompletos. Um lançamento de oito horas pode ter sido registrado duas vezes ou representar atividades que não deveriam somar dedicação integral. A regra pode comparar apontamentos com agenda, contrato ou outro controle interno, se essa validação for parte do escopo. Peça como são tratados feriados e turnos diferentes. Um relatório de exceção deve dar contexto, motivo e origem sem improvisar um desconto na base de custo.',
        'Verifique horas transferidas de uma atividade interna para um projeto. Se a decisão acontece antes de aprovar, o fluxo pode atualizar a origem. Após fechar, talvez a empresa prefira ajuste em outra competência. Preserve os dois destinos e o motivo da mudança. A proposta deve demonstrar como o ERP e o gestor reconhecem a diferença. Assim a transferência não parece novo custo nem deixa o centro original com valor incorreto.',
      ],
    },
    {
      heading: 'Proteja dados individuais e separe papéis de revisão',
      paragraphs: [
        'Defina quem pode consultar valores necessários para o cálculo, aprovar horas, revisar ajustes e ver totais de projeto. Um líder pode acompanhar o custo agregado sem abrir detalhes individuais da base. Um perfil financeiro pode investigar uma diferença quando autorizado. A integração pode trabalhar com uma chave interna e um valor saneado. Peça um teste de consulta, exportação e relatório com perfis diferentes, incluindo alguém cuja responsabilidade mudou de projeto durante o mês.',
        'Para testar, prepare exemplos fictícios que preservem estrutura, rateio e formatos. Evite fornecer planilhas reais quando a decisão pode ser verificada com os mesmos campos e valores inventados. Se precisar validar interfaces com dados autorizados, combine quem concede acesso, por quanto tempo e que evidência fica disponível. A proposta deve descrever onde os dados entram, como são guardados e como se encerram os acessos do fornecedor depois do piloto.',
        'Defina o nível de detalhe das mensagens e dos logs. Um erro pode identificar competência, projeto e referência operacional sem exibir remuneração ou dados que não ajudam a recuperação. O suporte deve localizar uma ocorrência e transferir ao responsável quando precisar de outra informação. Peça o teste de um perfil de suporte tentando consultar um demonstrativo completo. Confirme o acesso de leitura e compare a informação com a que aparece em arquivos e notificações.',
        'Uma regra equivocada pode afetar muitos projetos. Separe a alteração de parâmetros da aprovação do fechamento. Inclua evidência de autoria, momento e comparação de efeito. Se alguém muda um centro de destino, peça que a solução mostre quais resultados serão afetados e permita revisão antes de consolidar. Essa divisão protege a empresa e deixa o custo de manutenção visível, em vez de depender de modificações sem trilha em planilhas compartilhadas.',
      ],
    },
    {
      heading: 'Defina quando o rateio fica disponível e quando pode ser lançado',
      paragraphs: [
        'Desenhe a sequência de fechamento. Primeiro, a empresa pode obter horas aprovadas e elementos da base. Depois, executa o rateio, revisa exceções e aprova o lote. O ERP confirma recebimento e, dependendo da configuração, valida ou contabiliza. Diga se o projeto mostra uma prévia antes de todas as fontes chegarem. O usuário precisa entender quais valores já passaram por conferência e quais ainda podem mudar com apontamentos tardios.',
        'Escolha a granularidade de lançamento. O ERP pode receber total por projeto, centro, natureza e competência, enquanto os registros individuais ficam restritos na origem ou em área autorizada. Um lote consolidado deve conservar referência ao cálculo que o gerou. Peça que o fornecedor reconstitua a composição com os dados permitidos. Sem esse vínculo, um total diferente depois de uma revisão pode exigir que o financeiro refaça cada cruzamento.',
        'Teste ausência de projeto ou centro no ERP. O lote pode aceitar alguns destinos e rejeitar outro por cadastro inativo. Defina se o processamento exige todas as linhas para fechar ou se permite confirmação parcial. A equipe deve identificar valor aceito, valor em revisão e responsável pela correção. Em nenhum caso a proposta deve usar um centro genérico sem autorização apenas para fazer o lançamento passar. Inclua o efeito da rejeição no relatório final.',
        'Inclua data de competência, data da aprovação e data em que o ERP reconheceu o movimento. Elas podem cair em dias ou meses diferentes. Em período bloqueado, a integração deve indicar o motivo e seguir o procedimento da empresa para ajuste ou retomada. Peça que o demonstrativo mostre o contexto do lançamento. Um gestor pode comparar orçamento por competência, enquanto a área financeira precisa encontrar em que período o ajuste foi efetivamente registrado.',
      ],
    },
    {
      heading: 'Planeje correções com versão, impacto e aprovação',
      paragraphs: [
        'Considere que um gestor aprove horas em um projeto e depois encontre apontamento que pertencia a outro. Antes do fechamento, a pessoa responsável pode corrigir a fonte e recalcular. Depois de confirmar no ERP, talvez seja preciso um ajuste identificado em vez de substituir o resultado. Defina os caminhos por estado. O teste deve mostrar o total anterior, o novo destino e por que a empresa decidiu movimentar a diferença.',
        'Use uma correção de base depois do fechamento. Em um exemplo hipotético, o rateio distribuiu R$ 12 mil e a fonte autorizada publicou uma revisão de R$ 120. Compare as opções de refazer o lote em ambiente controlado ou lançar apenas a diferença, conforme a política. O sistema deve conservar versão da base, regra aplicada e valores por projeto. Peça a comparação antes da aprovação para descobrir se a revisão produziu impacto onde não deveria.',
        'Teste mudanças em chaves. Um projeto encerrado pode continuar recebendo ajuste da competência anterior. Um centro pode ser substituído e manter relatórios históricos. Defina quando o destino original fica válido para correção e quando alguém escolhe outro. Peça que o fornecedor mostre a regra em um caso de centro desativado. O operador precisa saber onde encontra histórico e quem libera o tratamento no ERP.',
        'Defina como documentar uma exceção manual. A equipe pode ajustar um valor, classificar atividade ou completar uma associação. Registre a origem, o motivo, o responsável e a competência afetada. Se o ajuste sair da regra comum, peça confirmação separada de quem pode aprová-lo. Faça a demonstração com um ajuste permitido e outro solicitado por usuário não autorizado. A trilha deve continuar acessível para responder uma pergunta meses depois.',
      ],
    },
    {
      heading: 'Comprove que uma nova tentativa não duplica o rateio',
      paragraphs: [
        'Use uma referência para a execução de cálculo e outra para o lote de envio. Uma competência pode ter prévias e revisões, mas deve ser possível identificar qual versão está autorizada para lançar. Se repetir a transmissão do mesmo lote, o ERP ou a camada de integração precisa reconhecer a tentativa e preservar o efeito já confirmado. Em homologação, perca a resposta depois da gravação e verifique quantas linhas existem no ERP.',
        'Inclua aceite parcial. O ERP pode aceitar o projeto A e rejeitar o B por código inativo. A rotina de recuperação deve identificar a parte confirmada, manter o vínculo e reenviar só o que falta conforme a política. Quando transferir a rejeição para alguém, exponha a referência e o motivo necessário para corrigir. Se o caso exige gerar outro lote, registre o que foi reaproveitado e como o novo retorno fica ligado ao cálculo original.',
        'Peça critérios para distinguir arquivos revisados de arquivos repetidos. Uma exportação pode ter o mesmo nome, mas representar correção na origem. Outra pode trazer exatamente o mesmo conteúdo depois de um erro de transmissão. Separe identificador de arquivo, versão da fonte e competência. Faça a demonstração com os dois casos. A empresa deve saber quando o sistema só registrou nova tentativa e quando existe novo cálculo esperando autorização.',
        'Planeje contingência durante o fechamento. Se a conexão falhar, a área pode registrar um ajuste manual ou aguardar, segundo responsabilidade e prazo. Defina como marcar o lançamento manual e como a integração o reconhece antes de retomar. Um lote atrasado não pode replicar um custo já lançado por outro caminho. Peça evidência da recuperação e inclua no aceite a consulta de valores e referências após a volta.',
      ],
    },
    {
      heading: 'Compare propostas com um fechamento completo por projeto',
      paragraphs: [
        'Imagine uma empresa de serviços com dois projetos ativos e uma frente interna. No teste, uma pessoa divide o mês entre os três destinos. Outra executa trabalho em A, mas parte das horas aguarda aprovação. O financeiro recebe uma base autorizada e quer iniciar a conferência. Peça que a proposta calcule o caso completo, mostre o valor pendente e explique se pode seguir com parte do período. A gestão não deve interpretar a primeira prévia como fechamento definitivo.',
        'Em seguida, faça o gestor aprovar as horas que faltavam e revisar uma atribuição. Observe quais totais mudaram e que histórico ficou. Quando o financeiro aprovar, envie os dados ao ERP e simule rejeição de um projeto. A primeira opção de retorno pode ser corrigir cadastro; a segunda pode seguir ajuste autorizado para outro destino. Peça que o fornecedor demonstre o controle de acesso e indique que informação o gestor vê durante a revisão.',
        'Depois, inclua correção da fonte no mês seguinte. Mostre como a equipe relaciona ajuste e competência, sem recuperar valores individuais em relatórios compartilhados. Para concluir, peça que uma pessoa de finanças reconstruía o total e que um gestor explique a diferença do projeto usando apenas seu perfil. Se ambos dependerem da planilha antiga, identifique o dado que ainda falta na integração. O teste precisa provar cálculo e rotina, além da emissão do relatório.',
        'Compare as propostas com a mesma base hipotética, os mesmos arredondamentos e o mesmo formato de retorno. Registre quais casos foram resolvidos por configuração, desenvolvimento ou explicação verbal. Se o resultado depende de série de importações manuais, estime tempo e risco. A empresa deve conseguir repetir a demonstração com outro período e validar de onde veio cada número. Isso facilita comparar opções com coberturas diferentes.',
      ],
    },
    {
      heading: 'Dimensione o orçamento por fontes, regras e competências',
      paragraphs: [
        'Envie número de empresas, projetos, pessoas e apontamentos, frequência do cálculo e os sistemas envolvidos. Inclua diferenças de regra entre áreas. Separe diagnóstico, mapeamento de dados, cálculo, aprovação, integração, homologação e operação assistida. Uma proposta pode fazer somente uma visão gerencial. Outra pode incluir lançamento, revisão e conciliação por período. Use a mesma competência de teste para identificar a diferença e o trabalho que permanece.',
        'Peça provas de acesso às fontes antes de firmar prazo. A ferramenta de projetos pode exportar horas e aprovação, mas não a revisão completa. A fonte de custo pode disponibilizar uma base agregada em vez de acesso direto. O ERP pode exigir cadastro e credenciais de teste. A proposta deve indicar quem libera cada dependência e que informação será usada se a primeira hipótese não se confirmar. Um fluxo assistido pode ser aceitável se ainda entregar conferência consistente.',
        'Inclua custos de mudanças recorrentes. Pode surgir outra empresa, uma regra exclusiva para certo contrato ou novo código de atividade. Pergunte quais parâmetros a equipe consegue alterar com revisão e quais precisam de desenvolvimento. Peça um teste de vigência futura e verifique que resultados anteriores se mantêm. Além do preço de implantação, considere suporte no período de fechamento, investigação de rejeições e documentação para manter a configuração.',
        'Defina a saída de dados se trocar de integrador. A empresa deve recuperar mapeamentos, versões de regras, referências de lotes e motivos dos ajustes. Verifique restrições de acesso na exportação e os formatos que o financeiro consegue ler. Se houver dependência de ferramenta intermediária, peça como recuperar registros em aberto. O custo de sustentar a integração tem relação com a facilidade de responder a dúvidas antigas e planejar o próximo fechamento.',
      ],
    },
    {
      heading: 'Homologue em paralelo e confira os totais de ponta a ponta',
      paragraphs: [
        'Escolha uma competência já fechada e compare resultados em ambiente controlado. Use casos de pessoa em dois projetos, atividade interna, ausência de horas e correção tardia. Confira total de entrada, distribuído, pendente e diferença de arredondamento conforme a regra. Verifique também por empresa, centro e projeto. Um total geral correto pode esconder uma troca de destino. Peça que cada perfil responsável confirme as evidências que precisa usar.',
        'Inclua teste de permissões e recuperação. Faça um gerente consultar apenas os dados autorizados. Em seguida, simule uma confirmação perdida do ERP e corrija um projeto rejeitado. Confira que o novo envio não duplica o valor e que o responsável consegue ligar o resultado à competência. Documente acesso, autoria e estado final. Uma homologação com apenas um usuário administrador não representa como a empresa vai operar o processo.',
        'No primeiro período, acompanhe tempo de apurar, valores sem destino, acertos manuais e dúvidas de gestores. Num cenário ilustrativo, passar de 18 para oito horas de preparação parece positivo, mas deve considerar tempo de revisão e suporte. Compare projetos semelhantes e anote mudanças. Se a equipe precisa enviar relatórios extras porque a integração limita informação útil, conte esse esforço antes de interpretar o ganho.',
        'Defina o critério de ampliar. Uma empresa pode começar com uma unidade e manter rateio complexo de outras áreas manualmente. Quando quiser incluir outro grupo, avalie base, regras, fechamento e permissões próprias. Use a experiência do piloto para orçar a diferença, sem repetir trabalho que já está contratado. A reunião de revisão precisa mostra evidências de cálculo, aceite no ERP e acesso de cada área, além da capacidade de recuperar uma correção.',
      ],
      bullets: [
        'Pessoa distribuída entre dois projetos e atividade interna.',
        'Custo apurado com horas ainda não aprovadas.',
        'Arredondamento com total conferido.',
        'Ajuste posterior associado ao lançamento original.',
        'Reenvio sem duplicação e acesso restrito aos dados de origem.',
      ],
    },
    {
      heading: 'Prepare a conversa de orçamento com exemplos saneados',
      paragraphs: [
        'Leve um período representativo, as regras de rateio, exemplos fictícios e o resultado esperado. Informe sistemas, responsáveis, janela e visões autorizadas. Mostre uma exceção comum, como horas pendentes ou correção depois do corte. Explique o que o financeiro precisa receber no ERP e o que o gestor usa para acompanhar projetos. A primeira reunião deve permitir avaliar um recorte com fontes disponíveis e decisões que a empresa consegue confirmar.',
        'Peça que o fornecedor devolva escopo, dependências e forma de homologar. Indique quem aprova mudanças de regra, quem pode consultar base e quem reconcilia o ERP. Se a fase inicial for apenas gerencial, mostre como o relatório identifica estimativa e apuração. Se incluir lançamento, exija prova de confirmação e de recuperação. Essa divisão permite comparar o investimento com o trabalho que a integração realmente assume.',
      ],
    },
  ],
  faqs: [
    { question: 'É preciso copiar todos os dados da folha para integrar custos por projeto?', answer: 'Use apenas a base e os identificadores necessários, conforme a decisão e a autorização da empresa. Gestores podem acompanhar valores agregados, enquanto a revisão individual fica com perfis autorizados.' },
    { question: 'Como calcular custo de uma pessoa em dois projetos?', answer: 'Escolha uma base e um critério, como horas aprovadas por destino. Defina o denominador, a regra para atividades internas e o arredondamento antes de implementar.' },
    { question: 'Como tratar lançamento depois do fechamento?', answer: 'Preserve a competência e a versão original. Use ajuste ou reabertura conforme a política validada e confira o efeito no ERP sem duplicar o lote.' },
  ],
  cta: {
    title: 'Quer orçar a integração de custos de pessoal por projeto?',
    text: 'Conte como sua equipe aprova horas, apura custos e confere o resultado no ERP. A Tironi Tech pode ajudar a delimitar o primeiro fechamento e os testes para contratar a integração.',
    label: 'Apresentar meu fluxo de rateio',
  },
  sources: [
    { label: 'Microsoft Dynamics 365 Project Operations — apontamentos de tempo, custos e aprovação', url: 'https://learn.microsoft.com/en-us/dynamics365/project-operations/time/time-entry-overview' },
  ],
};
