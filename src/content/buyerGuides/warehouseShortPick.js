export const warehouseShortPick = {
  slug: 'integrar-wms-erp-separacao-incompleta',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Saiba como contratar integração WMS–ERP para separações incompletas, com realocação de estoque, expedição parcial e reconciliação.',
  keywords: ['integração WMS–ERP para separações incompletas', 'separação incompleta no WMS', 'integração WMS ERP', 'short pick no armazém'],
  emphasis: 'integração WMS–ERP para separações incompletas',
  intro: 'Ao contratar uma integração WMS–ERP para separações incompletas, peça um teste em que o separador encontra menos unidades do que o sistema esperava. A proposta deve mostrar como o armazém procura outro endereço, quando o ERP pode confirmar uma quantidade menor e o que acontece com o saldo que ficou pendente. Inclua divergências de lote, retorno perdido e expedição parcial no aceite.',
  takeaways: [
    'Diferencie reserva, quantidade encontrada, quantidade expedida e pendência comercial.',
    'Defina quem realoca estoque, aprova substituição ou autoriza envio parcial.',
    'Teste reprocessamento e reconciliação com o mesmo pedido e as mesmas referências.',
  ],
  visual: {
    title: 'Como tratar a falta durante a separação',
    labels: ['ERP libera linha e quantidade para o WMS', 'Separador registra encontrado e motivo da falta', 'WMS procura alternativa ou abre exceção', 'ERP confirma saída e destina a quantidade pendente'],
    caption: 'A falta observada em um endereço pode ser resolvida no armazém. O compromisso com o cliente só muda conforme a decisão autorizada.',
  },
  sections: [
    {
      heading: 'Descubra qual decisão fica sem resposta na separação',
      paragraphs: [
        'Escolha duas ordens recentes em que a equipe encontrou menos mercadoria do que esperava. Siga a linha desde a liberação até a doca e localize quando a diferença apareceu. Um separador pode encontrar quatro caixas em um endereço reservado para seis. Em outro pedido, pode achar todas as unidades e descobrir que o lote não atende aos requisitos. Para orçar, leve o caminho de cada desvio e o que a equipe fez para recuperar o pedido.',
        'Separe erro de posição física, bloqueio de qualidade, produto avariado e regra comercial. Os quatro casos podem deixar quantidade pendente, mas pedem respostas diferentes. Uma falta no primeiro endereço pode ser resolvida com outra posição. Um lote bloqueado exige entender por que não pode sair. Uma substituição de produto requer decisão que o armazém talvez não possa tomar sozinho. A integração precisa preservar motivo e estado para a equipe certa agir.',
        'Defina qual sistema tem autoridade durante o trabalho. O ERP conhece pedido, condições e compromisso. O WMS gerencia endereços, tarefas e execução do armazém, conforme o desenho da operação. Uma instrução de separação pode ser alterada no WMS sem mudar a quantidade vendida. A quantidade aprovada para faturar pode depender de confirmação no ERP. Discuta a fronteira antes de pedir um conector que atualize os dois lados.',
        'Escolha uma meta para a primeira fase. Pode ser evitar expedir menos itens do que o ERP registra, reduzir o tempo para realocar ou impedir que o pedido desapareça da fila após confirmar a parte disponível. Meça o processo com pedidos comuns e exceções por turno. Uma equipe que resolve mais faltas antes do corte pode melhorar o prazo mesmo que continue registrando o mesmo número de divergências físicas.',
      ],
    },
    {
      heading: 'Diferencie quantidade solicitada, reservada, encontrada e expedida',
      paragraphs: [
        'Use uma linha simples no briefing: o cliente compra dez unidades, o ERP libera dez, o WMS reserva dez e o separador encontra seis no endereço orientado. Essas quantidades não devem sobrescrever umas às outras. A quantidade encontrada deve indicar onde e quando foi registrada. A reserva deve mostrar se continua válida ou foi transferida. E a expedição só pode ser confirmada depois da etapa que a operação estabelece para fechar o envio.',
        'Registre a diferença entre falta de endereço e falta de produto no depósito. É possível haver outras quatro unidades aptas no estoque, mas fora da posição escolhida. Também pode haver quatro em inspeção que não estão disponíveis para atender o pedido. O fornecedor precisa mostrar como distingue as duas situações e o que diz ao ERP enquanto investiga. Um retorno de quantidade menor sem causa pode levar vendas a cancelar um item que o armazém conseguiria separar.',
        'Descreva as quantidades que o ERP espera para reconhecer o pedido. Uma interface pode aceitar alterações de reserva durante a separação. Outra pode conhecer apenas quantidade liberada e confirmação da carga. Defina quais eventos entram em cada sistema e quem reconcilia um caso com mais de uma mudança. Teste o pedido quando as quatro unidades faltantes forem encontradas antes do corte e quando só aparecerem no turno seguinte.',
        'Inclua unidade, embalagem e dimensões que afetam o saldo. Se o WMS separa caixas e o ERP vende unidades, amarre código, conversão e arredondamento. Encontrar duas caixas e três unidades soltas pode ou não bastar para um pedido de três caixas fechadas. Peça um exemplo de conferência em que quantidade matemática não é toda elegível. A regra deve impedir que o integrador confirme volumes com embalagem diferente da prometida.',
      ],
    },
    {
      heading: 'Decida quando procurar outro endereço ou realocar uma reserva',
      paragraphs: [
        'A realocação deve considerar posição física, reserva existente e disponibilidade para aquele pedido. A documentação do Dynamics 365 exemplifica políticas de separação incompleta com realocação automática, manual ou combinada. Use a referência para comparar caminhos e confirme o que o WMS escolhido oferece na configuração real. Uma regra automática pode orientar o separador a outra posição. Em casos com decisão de prioridade, a supervisão pode precisar selecionar uma alternativa.',
        'Inclua uma posição que pertence a outro pedido. Se o item está fisicamente disponível e reservado para uma coleta próxima, tomar a mercadoria pode criar atraso em outra carga. Defina quando é permitido remanejar, quem confirma e como o pedido afetado volta à fila. Peça que o fornecedor demonstre os dois lados da decisão. O ganho no pedido urgente só é verdadeiro quando a operação consegue enxergar e administrar a consequência no outro compromisso.',
        'Verifique o que ocorre quando a procura por outro endereço se repete. Uma posição no estoque de reserva pode precisar de reposição antes de liberar o item. A área pode aceitar abrir tarefa de abastecimento em vez de desviar o separador. Escreva o limite de espera e os estados esperados. Um operador precisa distinguir itens que chegam antes do corte e itens que exigem nova previsão. A integração deve manter o vínculo entre a exceção, a reposição e a linha original.',
        'Defina a evidência da troca de endereço. Registre opção sugerida, posição usada, quantidade confirmada e origem da decisão. Se o sistema permite uma escolha manual, solicite motivo quando houver desvio da sugestão. Esse dado serve para investigar diferenças de inventário e melhorar a orientação da equipe. No aceite, peça a reconstituição de uma linha realocada por alguém que não participou do turno. A pessoa deve conseguir entender por que o primeiro endereço deixou de ser usado.',
      ],
    },
    {
      heading: 'Trate lote, validade e substituição como regras de negócio',
      paragraphs: [
        'Dois produtos com o mesmo código podem não ser equivalentes para o pedido se lote, validade, condição ou serial tiverem restrição. Um cliente pode exigir unidades de um mesmo lote. Outro pode aceitar lotes diferentes desde que cada unidade cumpra a validade mínima prevista. Defina os critérios com quem conhece o contrato e peça um teste com estoque físico existente e nenhuma unidade elegível. O sistema deve mostrar motivo diferente de ausência total.',
        'Especifique como a operação registra avaria. Uma caixa pode estar no endereço indicado, mas não pode ser expedida. O separador informa a quantidade aproveitável e o motivo, e a equipe autorizada define bloqueio, inspeção ou outra destinação. A falta no pedido e a mudança no estado do estoque têm referências próprias. Em teste, confira se o item avariado sai da disponibilidade e se o cliente só recebe a quantidade aprovada e efetivamente separada.',
        'Na substituição de SKU, defina quem pode sugerir e quem pode aceitar. O armazém pode identificar produto compatível, mas preço, documento e expectativa do comprador podem mudar. A proposta deve mostrar quando a substituição é autorizada no ERP e como a instrução atualizada chega ao WMS. Registre as condições que permitem uma substituição pré-aprovada e as que exigem validação humana, mantendo o histórico do item originalmente vendido.',
        'Teste kits e componentes. Um pedido pode vender um conjunto enquanto o WMS separa várias linhas físicas. Se faltar um componente, defina se o conjunto pode ficar em preparação, se é possível substituir a peça ou se todo o kit volta para pendência. A confirmação de expedição precisa representar o que saiu e relacionar ao item comercial. Um aceite só com produtos unitários não comprova que a integração preserva o saldo de conjuntos incompletos.',
      ],
    },
    {
      heading: 'Escolha entre expedir parte, segurar, dividir ou cancelar saldo',
      paragraphs: [
        'Leve à contratação as opções que vendas e logística usam após a falta. Algumas empresas seguram o pedido até completar. Outras expedem parte se o cliente aceitar ou se o contrato já permitir. Há casos em que é preciso dividir a entrega, fazer outra previsão ou cancelar o restante. A proposta deve indicar quem toma cada decisão e como ela chega ao WMS. A quantidade separada não autoriza automaticamente a quantidade faturada.',
        'Num exemplo hipotético, um pedido de dez unidades tem seis prontas, quatro aguardando reposição e coleta prevista para as 16h. Se a empresa aprovar enviar seis, o ERP deve gerar a etapa correspondente e conservar quatro pendentes com referência ao pedido. Se o cliente rejeitar entrega dividida, as seis podem permanecer reservadas até nova decisão. Faça os fornecedores demonstrar os dois casos e o estado depois de confirmar o primeiro envio.',
        'Inclua custo e prazo. Um envio dividido pode exigir outra embalagem, frete adicional e uma janela de recebimento diferente. Registre quem autoriza a condição e onde o cliente é atualizado. Se o sistema só muda a quantidade, a logística talvez tenha de administrar o impacto em outra ferramenta. Defina quais informações fazem parte do orçamento e quais continuarão manuais. Teste o pedido por inteiro para comprovar que o saldo não some entre os sistemas.',
        'Planeje o que acontece quando o restante fica disponível logo após o corte. A operação pode iniciar outro trabalho, juntar ao mesmo envio se ainda permitido ou manter a segunda promessa. A escolha depende de separação, documentação e coleta. Cada nova execução precisa da referência correta para evitar dupla expedição. Peça uma demonstração usando uma linha parcialmente atendida e outra sem falta no mesmo pedido, com o resumo que atendimento e financeiro conseguem consultar.',
      ],
    },
    {
      heading: 'Especifique as mensagens entre ERP e WMS',
      paragraphs: [
        'Escreva quais mensagens iniciam, atualizam e encerram o trabalho. A liberação pode conter referência de pedido, linha, SKU, unidade, quantidade, depósito e critérios de lote. O retorno de exceção pode indicar quantidade encontrada, endereço original, motivo e estado. A confirmação de expedição precisa relacionar carga, volumes e quantidade final. Defina o que é obrigatório em cada fase e como rejeitar uma mensagem incompleta antes que ela seja confundida com confirmação.',
        'Preserve as chaves durante reprocessamento. Uma linha pode gerar várias tarefas no WMS e mais de um retorno de separação. O ERP precisa reconhecer que tudo se refere ao mesmo compromisso, sem somar duas vezes a mesma execução. Use identificadores por linha, tarefa, exceção e saída em vez de usar apenas o número do pedido. Na descoberta, obtenha exemplos das interfaces e confira como as versões representam uma correção em cada direção.',
        'Inspecione quem muda cada estado. O WMS pode abrir uma exceção e solicitar decisão, enquanto o ERP autoriza reduzir, substituir ou redirecionar. Se a operação ainda não tiver um caminho de volta, descreva como a pessoa registra a decisão e como o trabalho recomeça. Uma interface que apenas notifica falta pode reduzir busca, mas deixar manual a reconciliação do compromisso. Compare o escopo com o procedimento que a empresa precisa executar.',
        'Teste um retorno perdido depois que o ERP confirma a expedição. O WMS ou o conector deve localizar o resultado pela referência antes de repetir. Em outro caso, simule rejeição por lote ou unidade. A equipe deve enxergar qual parte foi aceita e como corrigir a pendência. Para cada cenário, peça quem pode reenviar, quais dados são preservados e que evidência confirma o efeito no ERP. O erro não deve reiniciar todas as linhas do pedido.',
      ],
    },
    {
      heading: 'Use um cenário completo de separação e conferência',
      paragraphs: [
        'Considere uma distribuidora ilustrativa. O pedido tem dez caixas de um item e quatro de outro. O WMS direciona a primeira linha para um endereço que contém seis caixas. Em outra posição existem duas caixas disponíveis e duas reservadas para um pedido prioritário. A segunda linha pode ser separada normalmente. Solicite que a proposta mostre o estado dos dois itens, a recomendação de realocação e a quantidade que permanece pendente.',
        'Confirme a realocação de duas caixas elegíveis e deixe as duas reservadas com o pedido prioritário. Se vendas autorizar expedir oito e manter duas em aberto, confira o que aparece no ERP, na embalagem e na doca. Se a operação decidir aguardar, a solução deve mostrar por quanto tempo a separação permanece retida e quem reavalia o corte. Use o mesmo exemplo nas propostas para observar a diferença entre representar situação e tomar a decisão.',
        'Agora simule que duas caixas adicionais chegaram ao endereço. Uma está disponível e outra aguarda inspeção. A reserva restante não pode consumir indistintamente ambas. Peça ao fornecedor ligar o recebimento à posição e mostrar que estados tornam cada caixa elegível. Se apenas uma pode seguir, verifique se a equipe enxerga saldo e pode negociar outro prazo. Esse teste revela dependências de cadastro, qualidade e tempo de atualização sem atribuir o problema inteiro ao WMS.',
        'Encerre o primeiro envio e perca a resposta do ERP. Reenvie a mensagem ou recupere o estado segundo a política. Confira os totais separados, expedidos e pendentes, inclusive as quatro caixas da segunda linha. Por fim, solicite exportação para alguém da supervisão. Ela deve conseguir entender por que o pedido foi dividido, que decisão autorizou e em qual etapa ficou o restante. Isso prova a capacidade de reconstituir a exceção depois da correria da coleta.',
      ],
    },
    {
      heading: 'Crie rotinas de reconciliação e apoio à contagem física',
      paragraphs: [
        'A falta repetida num endereço merece tratamento além da tarefa de separação. Defina como abrir contagem, investigação ou conferência de movimentos conforme os procedimentos do armazém. Peça vínculo com a exceção que motivou a análise. A solução deve preservar a posição registrada e o que o operador observou. Um ajuste autorizado pode corrigir estoque, enquanto o pedido é resolvido por realocação. Evite que uma ação elimine a evidência que a outra equipe ainda precisa.',
        'Compare regularmente as reservas do ERP e os trabalhos do WMS. Procure linha liberada sem tarefa, tarefa concluída sem confirmação, saída confirmada com quantidade diferente e saldo pendente que não recebeu destinação. Classifique diferenças legítimas de janela e erros que precisam de ação. Se um envio pode levar tempo para aparecer, registre o estado e o prazo esperado. O relatório deve ajudar a resolver o desvio, não apenas contar quantos existem.',
        'Defina quem analisa cada alerta. O almoxarifado valida posição e condição, vendas confirma compromisso e integração investiga retorno. Uma fila deve indicar pedido, linha, diferença, motivo, idade e possível próxima ação. Em caso de reenviar, peça que o operador veja quais efeitos já ocorreram. Teste o procedimento com uma linha que exige correção de cadastro e outra que já foi regularizada manualmente. A recuperação deve respeitar os efeitos existentes.',
        'Acompanhe a frequência de separação incompleta por endereço, item e turno. Um padrão pode indicar reposição tardia, diferença de contagem ou confirmação de movimento depois de a mercadoria sair. Não confunda aumento de registro de faltas com piora automática, pois a operação pode simplesmente ter passado a capturá-las. Compare casos e revise como a integração mostra as causas. A empresa deve conseguir usar o relatório para selecionar melhorias de processo e cadastro.',
      ],
    },
    {
      heading: 'Compare orçamento por interface, depósito e regras de exceção',
      paragraphs: [
        'Envie a mesma lista de sistemas, versões, depósitos, volume, dispositivos e tipos de pedido para cada fornecedor. Separe diagnóstico, conectores, mapeamento, regra de exceção, filas de revisão e homologação. Uma proposta pode usar funções nativas do WMS e desenvolver apenas a comunicação com o ERP. Outra pode precisar criar tratamento adicional. Compare usando a mesma falta de endereço, realocação e decisão sobre o saldo. Peça que indiquem o que ficou manual.',
        'No diagnóstico, espere uma prova de liberar pedido e receber retorno de quantidade e motivo. Se quiser atualizar compromisso ou cancelar saldo, peça também uma mensagem de volta ao WMS. Identifique quem fornece ambiente, credenciais e registros de teste. Se um fornecedor terceiro cobra por recurso ou altera o prazo, considere essa dependência na proposta. A empresa deve entender se vai contratar um conector, um ajuste em cada sistema ou ambos.',
        'Inclua custo de dispositivo, treinamento e acompanhamento. O separador precisa aprender quando registra falta, como busca alternativa e quem avisa quando uma causa não é conhecida. Se o centro usa coletores com rede intermitente, teste o comportamento no aparelho utilizado. Pergunte como o fornecedor acompanha mudanças de layouts e versões. O custo real envolve suporte durante o corte e capacidade de recuperar exceções sem interromper todos os pedidos.',
        'Considere expansão para depósitos com regras diferentes. Um centro pode trabalhar por ondas, outro por pedido individual. Algumas unidades controlam lote e outras usam apenas SKU. Pergunte quais regras podem ser configuradas por depósito e quais exigem desenvolvimento. Peça criação de um exemplo sem afetar regras existentes. Inclua a possibilidade de exportar histórico e vínculos quando mudar de WMS ou operador logístico.',
      ],
    },
    {
      heading: 'Defina critérios de aceite e indicadores do piloto',
      paragraphs: [
        'Monte uma tabela de cenário, resultado esperado, evidência e responsável. A falta em endereço deve aparecer com quantidade, motivo e referência. A alternativa elegível deve respeitar reservas. O ERP deve reconhecer a quantidade expedida e o destino do saldo. Em caso de repetição, os totais não mudam. Inclua um exemplo de lote bloqueado e um erro retornado pelo ERP. Teste em ambiente controlado e confira o estado nos dois sistemas.',
        'Escolha uma operação piloto com volume representativo. Meça tempo de resolução, pedidos divididos, linhas que ficam sem destinação e diferenças entre WMS e ERP. Num cenário ilustrativo, uma queda de 30 para 12 linhas pendentes por semana precisa ser comparada com a mesma carga e janela. Acompanhe também quanto trabalho permanece com supervisão e se a recuperação acontece antes do horário de corte. Isso ajuda a entender qual etapa melhorou.',
        'Teste a contingência. Se a interface ficar indisponível, o armazém pode continuar separando dentro dos limites autorizados, enquanto algumas confirmações aguardam. Registre onde ficam as decisões e como a equipe informa o ERP. Na retomada, verifique o que foi lançado manualmente para evitar duplicação. Peça um procedimento com papéis, referência e condição de retorno. A aceitação deve provar que a operação consegue fechar a carga mesmo em uma falha prevista.',
        'Faça uma revisão da primeira semana com logística, vendas e TI. Leve um caso realocado, um envio parcial e uma divergência que exigiu intervenção. Compare a decisão esperada e a observada. Se o saldo continua desaparecendo da fila depois de expedir parte, trate antes de incluir outros centros. Se as posições mais problemáticas já foram identificadas, planeje a expansão conforme as regras de estoque e de compromisso que ainda não foram testadas.',
      ],
      bullets: [
        'Falta no endereço com realocação para estoque elegível.',
        'Lote bloqueado sem substituição automática.',
        'Envio parcial com saldo pendente controlado no ERP.',
        'Retorno perdido sem nova confirmação de expedição.',
        'Contagem física aberta com evidência da exceção.',
      ],
    },
    {
      heading: 'O que levar para cotar a primeira integração',
      paragraphs: [
        'Prepare um pedido, as tarefas do WMS, os movimentos de estoque e o resultado no ERP, com dados de cliente removidos quando necessário. Inclua uma linha resolvida noutro endereço e outra que exigiu parcial. Mostre quem decide o saldo e quais dispositivos a equipe usa. Informe versões, interfaces conhecidas, horários de corte e volumes do depósito. Quando uma API ou arquivo ainda não estiver documentado, indique quem libera uma amostra válida.',
        'Peça que a resposta traga o primeiro fluxo a demonstrar, as dependências e a divisão de responsabilidades. Um integrador deve dizer onde a falta será registrada, quando o ERP saberá, como a empresa preserva o compromisso e o que acontece durante uma interrupção. Compare a proposta com a rotina do separador e com o trabalho de supervisão. A primeira entrega precisa tornar uma exceção verificável do endereço à saída.',
        'Defina a forma de aprovar a expansão depois do piloto. Uma operação com produtos de catálogo pode provar integração de quantidade sem testar itens serializados. Um armazém com várias unidades de venda pode precisar de casos adicionais mesmo usando o mesmo conector. Peça que a estimativa mantenha visíveis essas diferenças e que cada nova regra entre com um caso de teste. Isso ajuda a planejar a evolução sem confundir ganho inicial e cobertura de todo o catálogo.',
        'Antes de aprovar, confirme onde o fornecedor registra os casos que o conector ainda não cobre. Para cada exceção, indique quem recebe a linha, qual referência usa e quando pode liberar a carga. Se a confirmação prática depende de uma pessoa conferir o ERP, inclua essa tarefa no custo do piloto. Assim, o orçamento reconhece o trabalho que permanece e permite decidir se vale automatizá-lo na etapa seguinte.',
      ],
    },
  ],
  faqs: [
    { question: 'O que significa separação incompleta no WMS?', answer: 'É a situação em que o operador encontra ou confirma menos unidades elegíveis do que a tarefa pedia. A solução deve registrar motivo e quantidade antes de realocar, aguardar ou alterar o compromisso.' },
    { question: 'Quem decide se o pedido pode sair parcialmente?', answer: 'Depende da política. O WMS informa a execução, e vendas, logística ou o ERP podem validar a decisão comercial. Registre a autorização e mantenha a quantidade restante ligada ao pedido.' },
    { question: 'O que pedir na demonstração de integração WMS–ERP?', answer: 'Use um pedido com falta no endereço, alternativa válida, lote bloqueado e confirmação parcial. Peça também a recuperação de um retorno perdido e confira os estados nos dois sistemas.' },
  ],
  cta: {
    title: 'Quer integrar as exceções do seu armazém ao ERP?',
    text: 'Conte como a equipe registra faltas, quando pode trocar de endereço e quem decide o saldo do pedido. A Tironi Tech pode ajudar a delimitar o primeiro fluxo e os critérios de aceite.',
    label: 'Apresentar meu processo de separação',
  },
  sources: [
    { label: 'Microsoft Dynamics 365 — realocação de itens após separação incompleta', url: 'https://learn.microsoft.com/en-us/dynamics365/supply-chain/warehousing/tasks/set-up-short-picking-item-reallocation' },
  ],
};
