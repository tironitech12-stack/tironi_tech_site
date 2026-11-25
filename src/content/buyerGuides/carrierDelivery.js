export const carrierDelivery = {
  slug: 'integracao-erp-transportadora-comprovante-entrega',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Saiba o que exigir ao contratar integração entre ERP e transportadora para rastrear volumes, receber comprovantes e conciliar ocorrências.',
  keywords: ['integração entre ERP e transportadora', 'integração de comprovante de entrega', 'rastreamento de transportadora no ERP', 'orçamento de integração logística'],
  emphasis: 'integração entre ERP e transportadora',
  intro: 'Ao contratar uma integração entre ERP e transportadora, exija um teste que comece na expedição e termine com os volumes, o estado da entrega e o comprovante ligados ao pedido certo. Inclua entrega parcial, tentativa sem sucesso e comprovante recebido depois da baixa. Assim você consegue verificar se a proposta resolve a rotina do atendimento, da logística e do financeiro.',
  takeaways: [
    'Diferencie pedido, remessa, etiqueta, volume e ocorrência de entrega.',
    'Valide quando o status muda e quem consegue consultar o comprovante.',
    'Teste falhas, eventos tardios e entregas parciais antes de expandir para outras transportadoras.',
  ],
  visual: {
    title: 'Da expedição à entrega comprovada',
    labels: ['ERP prepara a remessa e identifica volumes', 'Transportadora confirma a coleta e envia ocorrências', 'Operação confere conclusão e exceções', 'Comprovante é associado ao volume e ao pedido'],
    caption: 'A operação deve conseguir acompanhar volumes separados e explicar se existe evidência disponível para o estado informado.',
  },
  sections: [
    {
      heading: 'Escolha a decisão que a integração deve apoiar',
      paragraphs: [
        'Leve uma remessa recente e peça à equipe que mostre onde consulta a coleta, o prazo, a entrega e a confirmação do cliente. Em algumas operações o rastreio já existe, mas alguém precisa abrir o site de várias transportadoras para responder perguntas. Em outras, o problema é localizar o comprovante quando o cliente alega que recebeu só um volume. O primeiro projeto deve resolver uma decisão observável, como identificar o que falta entregar ou reunir evidências para tratar uma contestação.',
        'Observe as atividades de expedição, atendimento, logística e faturamento separadamente. Expedição precisa da etiqueta, da coleta e da conferência de volumes. Atendimento precisa de data, status e próximo passo. Logística precisa encaminhar exceções para quem pode atuar. Financeiro talvez só use uma parte dos dados, por exemplo quando o contrato exige evidência para liberar uma etapa. A proposta precisa dizer que informação chega a cada papel e como alguém comprova o resultado.',
        'Separe cotação de frete e contratação de transporte da parte de rastreamento. Um projeto pode receber ocorrências de remessas já emitidas pelo ERP, enquanto outro precisa cotar, gerar etiqueta e pedir coleta. Cada operação pressupõe fontes e acessos próprios. Se o fornecedor oferecer um pacote completo, peça preço e critério de aceite para as etapas separadamente. Isso permite começar pela falta mais urgente e entender o que ainda depende de integração futura.',
        'Defina o que conta como sucesso no piloto. Pode ser reduzir consultas manuais por pedido, descobrir tentativas sem sucesso antes de o cliente ligar ou recuperar um comprovante com poucos passos. Meça o processo atual por transportadora e modalidade. Um parceiro pode oferecer rastreamento frequente e comprovante tardio, enquanto outro transmite menos estados. Comparar a amostra por serviço ajuda a escolher um recorte que represente a rotina.',
      ],
    },
    {
      heading: 'Modele pedido, remessa e volume antes de mapear status',
      paragraphs: [
        'Um pedido comercial pode gerar mais de uma remessa, e uma remessa pode carregar vários volumes. O ERP pode identificar o pedido por uma referência de venda, enquanto o transportador usa um código de rastreio por volume ou um código consolidado. Defina como essas chaves se relacionam e em que momento surgem. O atendimento deve poder começar por qualquer referência que o cliente conhece, sem perder a lista de volumes e estados envolvidos na mesma compra.',
        'Inclua o caso de um pedido expedido por dois locais. Parte pode sair cedo de um centro e parte ser preparada numa filial. O cliente pode acompanhar as duas remessas, cada uma com transportadora ou prazo próprio. Se um volume concluir primeiro, o portal precisa mostrar parcialidade sem encerrar a compra inteira. Escreva a regra para apresentar estados agregados e indique de onde vem a data prometida a cada parte.',
        'Teste a substituição de etiqueta. Uma expedição pode imprimir um código e cancelar antes de entregar o volume. O novo código precisa ficar ligado à mesma remessa ou representar outro envio, conforme o processo. Se a etiqueta antiga receber uma ocorrência posteriormente, o operador deve saber que ela já foi cancelada. Peça ao fornecedor como decide qual referência está ativa, o que permanece no histórico e que confirmação deve aparecer no ERP.',
        'Confirme se os identificadores são únicos no escopo usado. Um código pode depender da transportadora, do tipo de serviço ou de outra referência da remessa. Evite associar por número de rastreio sem identificar a fonte e a conta. Se o ERP usa outro documento para representar a remessa, mostre como ele chega à interface contratada. Inclua uma tentativa de vínculo incorreto e confira se o sistema encaminha à revisão em vez de anexar a ocorrência ao pedido mais próximo.',
      ],
    },
    {
      heading: 'Faça um mapa de ocorrências que a operação consiga usar',
      paragraphs: [
        'Reúna os códigos de evento das transportadoras e o significado que elas dão a cada um. Depois mapeie os estados que a empresa quer usar, como aguardando coleta, em trânsito, saída para entrega, tentativa, entregue e retorno. Preserve também o código original. Um parceiro pode usar mensagens diferentes para atraso na rota e endereço não localizado, com ações distintas. A equipe precisa da tradução para trabalhar e da origem para investigar quando a tradução estiver errada.',
        'Descreva quais ocorrências exigem intervenção. Uma passagem por terminal pode ser apenas informativa. Uma tentativa sem sucesso pode exigir contato para validar endereço ou horário. Uma retenção pode pedir documento antes de novo deslocamento. Defina prazos e papéis para encaminhar os casos que precisam de ação. Se todas as ocorrências virarem alerta, atendimento tende a perder as que realmente precisam de acompanhamento.',
        'Peça como a solução trabalha com eventos fora de ordem. Uma transportadora pode transmitir na volta da equipe para a base, enquanto outra fonte publicou a última atualização antes. A ordem de chegada à integração não representa sempre a ordem real. Mantenha os dois horários quando disponíveis e descreva que transições podem voltar, quais representam correção explícita e o que fica em revisão. Um evento de trânsito antigo não deve alterar silenciosamente uma entrega já confirmada.',
        'Teste novidade e divergência. Um código ainda desconhecido pode chegar depois de uma mudança de catálogo. Em vez de transformar qualquer valor imprevisto em entregue ou rejeitado, a solução pode conservar o evento, indicar que falta mapeamento e avisar o responsável. Quando a regra for corrigida, decida se o sistema reclassifica fatos anteriores e como registra isso. Peça um exemplo de manutenção com data e evidência, para estimar trabalho depois da implantação.',
      ],
    },
    {
      heading: 'Trate o comprovante de entrega como uma evidência separada',
      paragraphs: [
        'A ocorrência de entrega pode chegar antes de a imagem ou o documento estar pronto. Especifique quais estados o ERP verá enquanto aguarda evidência e quando o operador deve pedir revisão. Se o contrato exige captura de assinatura, o status entregue por si só talvez não atenda esse critério. Em outros serviços, a evidência pode ser um documento sem imagem ou outra informação acordada. Defina o conteúdo que cada modalidade precisa apresentar.',
        'Veja quais interfaces realmente oferecem o comprovante. A documentação da FedEx para rastreamento, por exemplo, descreve que obter a imagem de assinatura pode exigir a conta de cobrança associada à remessa. As condições variam conforme transportadora, serviço e configuração. Peça aos fornecedores que validem acesso para sua conta e mostrem uma resposta representativa. O orçamento deve informar se basta um link, se o arquivo será armazenado ou se a integração precisa consultá-lo várias vezes.',
        'Um comprovante precisa ser associado à referência certa. Ele pode corresponder a um volume, a um conjunto ou ao pedido inteiro conforme o parceiro. Inclua o caso em que o mesmo documento cobre dois volumes e outro em que só o volume entregue possui evidência. Se a autenticação falhar ou o documento vencer no sistema externo, defina responsável e procedimento de nova consulta. Registre quando a busca ocorreu e o que veio na resposta.',
        'Combine quem pode consultar assinatura, foto, nome e outros dados da evidência. Um papel interno pode ter acesso para responder contestação, enquanto o portal expõe apenas informações necessárias ao cliente autenticado. Peça um teste com usuários de duas contas, incluindo link direto e exportação. Defina tempo de guarda conforme a política da empresa, como restringir downloads e onde a pessoa autorizada encontra a versão correta em caso de substituição.',
      ],
    },
    {
      heading: 'Planeje consulta, eventos e reconciliação',
      paragraphs: [
        'Escolha o mecanismo de acordo com a interface e o serviço. Algumas empresas disponibilizam eventos, outras oferecem consulta periódica ou arquivos com ocorrências. Os eventos reduzem o intervalo desde a disponibilidade até a recepção, quando a fonte envia com frequência. A consulta permite recuperar registros que ficaram sem atualização. Em um modelo combinado, diga que casos serão pesquisados e como identifica registros já recebidos, sem duplicar notificações.',
        'Defina quais remessas precisam de consulta em cada fase. Um volume que ainda aguarda coleta pode usar uma frequência diferente de outro que saiu para entrega. Um caso finalizado pode permanecer em conferência até obter a evidência. Respeite as condições da interface e peça estimativa do volume de consultas para dias comuns e campanhas. Se o parceiro limita chamadas, o projeto precisa selecionar prioridades sem deixar remessas esquecidas indefinidamente.',
        'Faça uma reconciliação amostral com os dados da transportadora. Escolha remessas que o ERP mostra em trânsito e compare os eventos que a fonte disponibiliza. Cruze entregas reportadas com evidências e identifique diferença de horário. Se um lote foi transmitido em duplicidade, reimporte-o no teste. A operação deve continuar enxergando um conjunto de eventos e saber quando o sistema descartou uma repetição ou recebeu uma revisão legítima.',
        'Combine estados de saúde por transportadora e conta. Uma falha de autenticação pode afetar várias remessas ao mesmo tempo, enquanto um código incorreto fica limitado a um volume. Mostre última recepção, tempo sem atualização e idade de pendências. Se o painel indicar apenas que o conector está ativo, a logística talvez não perceba que nenhum comprovante recente chegou. Defina alertas e responsáveis capazes de corrigir ou acionar o parceiro.',
      ],
    },
    {
      heading: 'Use uma entrega parcial para comparar propostas',
      paragraphs: [
        'Imagine uma compra de três caixas enviada por uma única transportadora em dois volumes de rastreio. O primeiro código cobre duas caixas, o segundo cobre a terceira. Na primeira tarde, chega uma ocorrência de entrega do primeiro volume. O outro apresenta tentativa sem sucesso e previsão de novo atendimento. Peça a cada fornecedor que faça o pedido aparecer como parcial, com próximos passos diferentes e sem confundir caixa, volume e remessa.',
        'No dia seguinte, o comprovante do primeiro volume fica disponível. Uma pessoa do atendimento precisa localizar a evidência pelo pedido, conferir a referência e passar uma atualização ao cliente. Simule outra atualização da tentativa depois da confirmação do segundo volume. O estado final deve respeitar os horários e a interpretação acordada dos eventos. Se a transportadora corrigir a ocorrência de entrega, a integração precisa registrar a mudança e informar que existe uma revisão em vez de apagar a evidência anterior.',
        'Inclua contestação de quantidade. O comprador informa que recebeu só uma das duas caixas associadas ao primeiro volume. A ocorrência e o comprovante ajudam a localizar a remessa, mas talvez não provem quais itens estavam dentro dela. A equipe precisa abrir uma exceção, consultar expedição e registrar a investigação sem alterar o status técnico enviado pelo transportador. Esse recorte ajuda a distinguir o que a integração confirma da decisão comercial que a empresa ainda precisa tomar.',
        'Finalize o cenário com o segundo volume devolvido ou reencaminhado. Defina se a nova entrega usará outro código e se o cliente verá o mesmo pedido com histórico atualizado. Faça o fornecedor mostrar como o ERP conserva vínculo, quando a logística pode encerrar o caso e que ação precisa de autorização. O objetivo é observar um fluxo com operação realista, em vez de aceitar só a reprodução de uma entrega sem desvios.',
      ],
    },
    {
      heading: 'Especifique como agir diante de atraso, tentativa e devolução',
      paragraphs: [
        'Diferencie prazo prometido de previsão atualizada. Uma transportadora pode alterar estimativa de chegada sem informar atraso formal. A operação deve saber se o pedido ainda está dentro do prometido ou se precisa avisar o comprador. Peça quais datas vêm do ERP, quais vêm do parceiro e quem tem autoridade para revisar o compromisso. Em testes, simule troca de previsão sem entrega e confirme que o sistema não encerra automaticamente a ocorrência.',
        'Para tentativa sem sucesso, reúna exemplos com destinatário ausente, endereço não localizado e recusa. Cada situação pode pedir ação diferente. Um caso pode voltar à rota automaticamente, outro exige confirmação de endereço ou autorização de retorno. A solução precisa informar ao responsável qual próxima ação está disponível e preservar o que o transportador registrou. Para dados de endereço, peça que o ajuste autorizado chegue à operação correta com histórico.',
        'Na devolução, acompanhe o movimento até a origem ou destino combinado. Uma ocorrência de retorno iniciado não equivale a mercadoria recebida ou liberada para estoque. Mantenha a relação entre pedido, remessa de ida e transporte de volta. Se houver custo adicional, indique qual evento o ERP deve receber e quem revisa antes de contabilizar. Um teste com retorno incompleto ajuda a comprovar que o sistema distingue o movimento logístico do fechamento comercial.',
        'Defina um procedimento manual quando o parceiro não oferece dados suficientes. A operação pode buscar um documento no portal, anexá-lo ao pedido e registrar o motivo. Limite o papel autorizado e preserve a diferença entre uma confirmação recebida pelo conector e uma conferida por pessoa. Quando a interface voltar, a evidência já registrada deve ser reconciliada sem gerar outro caso. Inclua esse caminho se ele já faz parte da operação em dias de maior volume.',
      ],
    },
    {
      heading: 'Mapeie campos do ERP, permissões e comunicação ao cliente',
      paragraphs: [
        'Escreva quem pode criar remessa, alterar transportadora, corrigir vínculo ou anexar comprovante. Alterações comerciais, como cancelar pedido ou conceder reembolso, precisam continuar seguindo as permissões da empresa, ainda que a integração mostre uma ocorrência que as motive. Configure a relação entre eventos externos e ações internas. Uma notificação de atraso pode abrir tarefa, mas a decisão financeira depende de política e autorização próprias.',
        'Defina o conjunto de dados enviado a cada sistema. Para atendimento, pode bastar resumo, link autorizado e previsão. Para financeiro, talvez sejam necessários data efetiva, código de remessa e evidência confirmada. Para logística, códigos detalhados e pendências de reconciliação ajudam na rotina. Adapte a interface aos papéis sem perder a referência que permite ligar relatórios. Confirme também quem conserva o documento original e como se obtém novamente.',
        'Escolha quando notificar. Um fluxo pode enviar mensagens de coleta, saída para entrega e disponibilização de comprovante, mas evitar notificações repetidas sobre passagens por terminal. Defina como tratar reenvio do mesmo evento e atualização fora de ordem. Um consumidor que recebe indicação de entrega antes de aviso de atraso precisa entender qual informação está vigente. Teste a fila de comunicação, mantendo separado o registro técnico e a mensagem enviada.',
        'Peça uma política de correção para associações erradas. Se um comprovante foi ligado a outro pedido, a equipe precisa desvincular com autorização, corrigir e registrar a evidência. Verifique quem teve acesso enquanto estava incorreto e como o histórico fica disponível para investigação. Uma solução de consulta pode parecer pequena até precisar recuperar um erro. Inclua o procedimento, as permissões e o papel responsável no aceite e na estimativa.',
      ],
    },
    {
      heading: 'Compare orçamentos com a mesma transportadora, volume e rotina',
      paragraphs: [
        'Envie a mesma lista de parceiros, contas, modalidades e sistemas para todas as propostas. Inclua quantidade de remessas, picos, volumes por pedido e tipos de evidência. Separe documentação da interface, criação de etiquetas, rastreio, comprovantes, integração ao ERP, notificações, homologação e sustentação. Uma proposta que usa apenas o site da transportadora para comprovar entrega cobre outra necessidade que um sistema que recupera e associa o documento com permissões.',
        'Peça estimativa por primeiro parceiro e por expansão. Uma integração direta pode exigir um conector por transportadora. Uma plataforma intermediária pode reunir várias interfaces, com diferenças de cobertura e custo. Compare as duas usando o mesmo cenário de entrega parcial e comprovante. Confirme se os campos e as imagens estão disponíveis no caminho proposto para a conta da empresa. Estime também o custo de ajustar o mapeamento quando um parceiro incluir modalidade nova.',
        'Na descoberta, espere um mapa de referências, uma amostra de eventos e uma evidência de acesso aos comprovantes. Se não houver ambiente de homologação, combine como demonstrar com dados autorizados e sem alterar remessas reais. Registre a diferença entre o que já foi provado e aquilo que depende de contrato, conta ou autorização. Essa etapa não deve terminar só em uma lista de endpoints. Ela precisa reduzir a incerteza para quem vai aprovar orçamento.',
        'Inclua manutenção depois da primeira entrega. Pessoas de logística precisam rever códigos, priorizar casos e instruir operadores, enquanto suporte lida com indisponibilidade e mudanças na interface. Combine limites de tempo, janelas e responsáveis. Peça como exportar eventos e documentos se mudar de fornecedor. O comprador precisa avaliar se consegue continuar acompanhando remessas antigas e contestadas quando a integração deixa de ser operada pelo mesmo prestador.',
      ],
    },
    {
      heading: 'Homologue a integração e meça o primeiro lote',
      paragraphs: [
        'Prepare um roteiro com criação da remessa, recepção de eventos, tentativa, entrega parcial e comprovante. Em cada etapa, indique a referência que deve permanecer, o estado no ERP e o que atendimento consegue ver. Inclua retorno perdido, repetição e arquivo tardio. Peça que a equipe execute com registros representativos da transportadora. O aceite deve dizer se o resultado é confirmado, pendente ou inválido e que evidência será guardada em cada situação.',
        'Teste seus registros de operação. Uma pessoa deve encontrar uma remessa sem atualização, reconstituir o que chegou da fonte e encaminhar a pendência. Outra deve localizar a evidência de entrega para um volume específico e confirmar que o acesso respeita a política. Faça também um caso que exige correção manual. A integração precisa mostrar onde o processo parou sem depender de alguém com acesso técnico ao banco.',
        'Escolha um grupo que represente diferentes estados de entrega. Compare tempo entre ocorrência e visibilidade no ERP, proporção de remessas encerradas com evidência quando exigida e quantidade de consultas manuais. Num exemplo ilustrativo, reduzir de 80 para 35 consultas mensais ajuda a estimar o benefício se volume e mix forem semelhantes. Acompanhe o tempo que o time investe em resolver exceções para ver o ganho líquido.',
        'Antes de ampliar, reúna registros de entrega parcial, ocorrência sem mapeamento e caso recuperado após interrupção. Avalie como as equipes usaram as informações e qual cenário ainda exige planilha ou troca de mensagem. A empresa pode expandir por transportadora ou modalidade. Documente os critérios de expansão, especialmente quando os dados dos novos parceiros diferem dos usados no teste. Assim o projeto continua apoiando o atendimento e a logística conforme cresce.',
      ],
      bullets: [
        'Pedido com remessas e volumes concluídos em momentos distintos.',
        'Evento recebido fora de ordem com estado atual preservado.',
        'Comprovante tardio e acesso conforme a conta.',
        'Tentativa de entrega com ação atribuída e retorno controlado.',
        'Retomada do conector sem repetir notificações.',
      ],
    },
    {
      heading: 'Prepare o briefing para cotar a primeira integração',
      paragraphs: [
        'Leve ao primeiro encontro uma remessa comum, outra com tentativa e uma contestada. Prepare uma cópia saneada dos códigos, eventos e da evidência que a equipe costuma consultar. Informe tipo de ERP, versão ou interface disponível, transportadoras e volume esperado. Explique em que etapa o atendimento precisa de ajuda. Os fornecedores podem então indicar quais dados precisam validar em sua conta e que recorte pode ser demonstrado antes da contratação.',
        'Peça um retorno com mapa de fontes, escopo da primeira entrega e hipóteses em aberto. O orçamento deve dizer quem libera credenciais, onde o documento será consultado e como provar que os eventos chegaram à remessa certa. Confirme também quem assume a operação caso uma interface perca acesso. Com esses itens claros, fica mais fácil comparar custo e execução, além de planejar uma próxima fase depois que a logística confirmar os resultados.',
        'Mostre também um caso em que a consulta do transportador divergiu do portal usado pelo cliente. Indique o momento em que cada sistema recebeu a informação e qual área corrigiu a mensagem. A primeira entrega deve prever um jeito de comparar o histórico exibido com o evento original. A equipe de atendimento precisa saber se pode corrigir a informação diretamente ou se deve encaminhar à logística. Esse roteiro ajuda a estimar suporte sem confundir atraso da fonte com erro do próprio conector.',
      ],
    },
  ],
  faqs: [
    { question: 'Status entregue e comprovante de entrega chegam juntos?', answer: 'Podem chegar em horários diferentes. Combine como o ERP mostra a confirmação de entrega, quanto tempo aguarda a evidência e quem revisa quando ela não estiver disponível.' },
    { question: 'O que deve acontecer se só um volume do pedido foi entregue?', answer: 'Mantenha o estado de cada volume e informe entrega parcial no pedido. Confira quais etapas dependem da conclusão de todos os volumes ou da decisão do responsável.' },
    { question: 'O que levar para pedir orçamento?', answer: 'Informe ERP, transportadoras, contas e volume. Separe exemplos de remessa, eventos e comprovantes, incluindo uma entrega parcial e uma falha ou tentativa.' },
  ],
  cta: {
    title: 'Quer orçar a integração logística do seu ERP?',
    text: 'Conte como suas remessas são identificadas, onde a equipe acompanha ocorrências e em que momento precisa do comprovante. A Tironi Tech pode ajudar a delimitar o primeiro fluxo e o roteiro de aceite.',
    label: 'Apresentar minha operação de entregas',
  },
  sources: [
    { label: 'FedEx Developer Portal — rastreamento e comprovante de entrega', url: 'https://developer.fedex.com/api/en-in/catalog/track/docs.html' },
  ],
};
