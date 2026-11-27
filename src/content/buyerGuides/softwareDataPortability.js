export const softwareDataPortability = {
  slug: 'orcamento-software-clausula-exportacao-dados',
  date: '2026-11-27',
  updated: '2026-11-27',
  description: 'Avalie a portabilidade de dados em propostas de software com testes de exportação, prazos de entrega e custos de saída.',
  keywords: ['portabilidade de dados em uma proposta de software', 'exportação de dados de software empresarial', 'orçamento de software com portabilidade de dados'],
  emphasis: 'portabilidade de dados em uma proposta de software',
  intro: 'Para avaliar a portabilidade de dados em uma proposta de software, peça uma exportação que a equipe consiga interpretar e reutilizar. Confira a cobertura de registros e anexos, a documentação dos vínculos e o preço para repetir a entrega.',
  takeaways: [
    'Defina os dados necessários a partir da tarefa que precisa continuar.',
    'Teste uma exportação e sua leitura em ferramenta independente.',
    'Compare prazo e custo em condições normais e na transição.',
  ],
  sections: [
    {
      heading: 'Defina o que a empresa precisa levar para outro sistema',
      paragraphs: [
        'Comece pelo fluxo que terá de continuar. Em um portal de compras, a equipe pode precisar transferir solicitações abertas, aprovações e anexos, além de consultar pedidos encerrados. Escolha um caso de cada tipo e registre o que outra aplicação deve conseguir mostrar. Para a solicitação aberta, indique o próximo estado e quem responde pela aprovação. Para a encerrada, identifique a referência que ajuda a localizar o pedido no ERP. Use essa lista para delimitar a exportação na proposta.',
        'Inclua os vínculos que costumam ficar apenas na interface. Uma tela pode mostrar o responsável pelo centro de custo utilizando um cadastro que muda a cada reorganização. Se o histórico precisa explicar quem aprovou um pedido na época, confira se a referência antiga estará disponível e como interpretar o código. Peça um teste em que a organização mudou a estrutura depois da aprovação. A prova deve preservar o sentido da informação no momento relevante para a consulta.',
        'Delimite os dados que precisam ser carregados e os que bastam para consulta. Um histórico de mudanças pode ser necessário para reconstruir uma decisão, mesmo sem entrar como sequência de eventos ativos no sistema novo. Indique quais arquivos vão compor um acervo e quais informações precisam alimentar o fluxo atual. Peça preço para preparar os dois conjuntos e confirme quem define o que é obrigatório em cada um.',
      ],
    },
    {
      heading: 'Peça uma exportação que uma ferramenta independente consiga ler',
      paragraphs: [
        'Na **exportação de dados de software empresarial**, solicite uma amostra com o formato previsto na contratação. Escolha uma ferramenta diferente da que gerou os arquivos e peça à equipe que abra a amostra e encontre uma compra pelo número usado na rotina. Em seguida, localize as linhas, o aprovador e o anexo. Registre os passos que dependem de um componente do fornecedor. Quando a leitura depende de uma ferramenta específica, solicite o custo, a versão e o procedimento necessário para manter o acesso.',
        'Peça o dicionário dos arquivos com tipo, unidade, codificação, chaves e significado dos estados. Um identificador com zeros à esquerda pode mudar de valor aparente ao ser aberto como número. Um campo vazio pode representar ausência de informação ou uma decisão ainda pendente. Escolha dados que exponham essas diferenças. Faça outra pessoa repetir a leitura usando a documentação e confira se ela encontra a mesma referência e explica o resultado.',
        'Teste uma importação de amostra em ambiente separado. O destino pode exigir chave única por unidade, enquanto a origem identifica pedidos pelo número e pelo ano. Peça que a pessoa responsável reconstrua a chave e confira os registros que precisam de revisão. Use dois pedidos com o mesmo número em unidades distintas. Se a carga só conseguir distinguir os registros com um campo complementar, inclua esse campo no escopo obrigatório da entrega.',
      ],
    },
    {
      heading: 'Verifique a cobertura com uma lista de referências esperadas',
      paragraphs: [
        'Peça ao fornecedor que informe quais conjuntos entraram na exportação e quais foram excluídos. Compare as contagens por unidade, período e estado. Se um pedido está encerrado e outro foi cancelado, defina se os dois devem aparecer e em qual conjunto. Confira também a cobertura dos dados auxiliares que dão significado aos códigos, como tabelas de centros de custo e motivos de recusa. A comparação precisa usar a mesma data de corte para distinguir lacunas de mudanças feitas depois da extração.',
        'Use uma conferência por chave, além da contagem. Em um exemplo fictício, a origem e o pacote têm 500 solicitações, mas um número aparece duas vezes e outro ficou ausente. Peça que a equipe identifique a diferença pelo código e pela unidade. Em seguida, confira a correspondência das linhas, dos eventos de aprovação e dos anexos. Registre o que precisa ser reentregue e como o fornecedor indica a versão que substitui a anterior.',
        'Exija o recorte dos dados que foram extraídos após a primeira versão. Uma solicitação antiga pode ter recebido um ajuste recente, embora a data de abertura continue igual. Teste uma inclusão nova, uma alteração e um cancelamento no intervalo. O fornecedor deve mostrar como cada um aparece na entrega complementar. Se o sistema só gera pacotes completos, peça uma estimativa para repetir a extração e conferir o efeito no calendário da transição.',
      ],
    },
    {
      heading: 'Teste anexos com as referências usadas pela operação',
      paragraphs: [
        'Escolha três tipos de documento, como um orçamento, um comprovante e um arquivo enviado depois de uma revisão. No pacote, verifique se o nome, o tipo e a referência permitem localizar cada anexo pelo pedido correspondente. Dois arquivos podem ter nomes iguais e pertencer a solicitações diferentes. Faça uma prova em que o operador começa pelo número do pedido e confirma que abriu o documento correto. Peça que a proposta indique onde ficam os vínculos quando os anexos são entregues em arquivos separados.',
        'Confirme se a entrega inclui o conteúdo necessário ou um endereço que continuará disponível. Um link pode funcionar no dia do teste e depender de uma conta que será encerrada depois. Faça a conferência com um perfil previsto para a transição e teste a abertura sem usar a sessão da ferramenta de origem. Quando parte dos documentos precisa ser recuperada sob demanda, registre o prazo e a quantidade que o fornecedor consegue entregar no mesmo período.',
        'Verifique se um arquivo foi preservado e se pertence ao registro esperado. A conferência do tamanho ou de um verificador de integridade ajuda a identificar alterações nos bytes recebidos. A relação com o pedido exige outra evidência, como uma chave no manifesto ou o registro original que aponta para o documento. Peça uma lista dos anexos ausentes, dos vínculos duvidosos e dos tipos de arquivo que exigem outra ferramenta para abrir.',
      ],
    },
    {
      heading: 'Defina como a equipe recebe e confere uma reentrega',
      paragraphs: [
        'Peça um cenário em que a primeira exportação tem uma lacuna e a segunda corrige apenas um período. Registre o identificador do pacote, o intervalo e a parte que será substituída. Faça a carga em ambiente separado e confira uma solicitação corrigida e outra que permanecia válida. Verifique também se repetir o mesmo pacote cria duplicidades. Inclua na proposta o preparo da correção, o tempo de conferência e a participação necessária do fornecedor.',
        'Dê à pessoa que recebe o pacote uma instrução com os arquivos, a ordem de leitura e o resultado esperado. Ela deve localizar a revisão apropriada e identificar a evidência que permite aceitar o novo lote. Se a correção depende de outra extração de anexos ou de atualização do dicionário, registre o custo e o prazo. Combine onde a empresa guarda os materiais que precisa consultar depois do encerramento.',
      ],
    },
    {
      heading: 'Compare propostas com o mesmo volume e o mesmo prazo',
      paragraphs: [
        'No **orçamento de software com portabilidade de dados**, informe quantas unidades, anos de histórico, registros e anexos entram na entrega. Separe a amostra inicial, as exportações periódicas e a carga de encerramento. Uma proposta pode incluir acesso para baixar tabelas durante o contrato e cobrar uma extração maior no fim. Outra pode oferecer um pacote periódico, mas exigir serviço adicional para preparar anexos. Use o mesmo recorte e confirme o que é entregue em cada etapa.',
        'Peça que a estimativa divida preparação, geração, transferência, conferência e correção. Se um pacote tem arquivos grandes, o prazo de transferência depende do meio autorizado e da disponibilidade de quem recebe. Se parte da entrega é dividida por unidade, indique quem consolida o material. Compare o tempo até a equipe conseguir localizar uma referência após receber o pacote. Inclua a investigação de registros rejeitados e o prazo para solicitar outra versão.',
        'Em um exemplo fictício, uma oferta custa R$ 3 mil para gerar a extração e exige R$ 2 mil de apoio para reconstruir vínculos. Outra inclui o pacote, mas cobra R$ 4 mil pelo preparo dos anexos e R$ 1.500 para conferir a importação. Os totais são R$ 5 mil e R$ 5.500 nas condições do exemplo. Compare o volume e as provas incluídas, além das horas que sua equipe teria de dedicar. Peça preços para dobrar o volume e para repetir um período específico.',
      ],
    },
    {
      heading: 'Verifique o que continua disponível no período de saída',
      paragraphs: [
        'Planeje as datas a partir da última operação que precisa ser mantida. Se a empresa encerra o uso em uma sexta-feira e recebe o pacote definitivo na segunda, defina como serão recuperados pedidos e aprovações que mudam depois da primeira amostra. Informe até qual data a equipe terá acesso de consulta e quem autoriza uma exportação complementar. Peça uma prova que mostre o recorte da carga inicial e indique as alterações entregues após o corte.',
        'Compare o acesso de consulta após a troca com a capacidade de gerar outra exportação. A empresa pode ainda visualizar relatórios e perder a permissão de baixar anexos. Peça que a proposta descreva o perfil e a janela de cada função. Teste o caminho com as permissões que existirão após a virada. Para uma entrega assistida, registre o canal, o prazo e o custo de solicitar materiais faltantes. Use essa condição para planejar a revisão do pacote definitivo.',
        'Defina o procedimento para uma transição adiada. Se o sistema novo ainda precisa homologar a importação, a empresa pode precisar estender o acesso de consulta ou receber outra cópia. Peça a previsão de preço e a antecedência para solicitar. Em seguida, teste uma situação em que somente um grupo ficou pendente e os demais já podem seguir. Especifique como a equipe distingue a versão atual das versões anteriores e como mantém a cobertura durante a extensão.',
      ],
    },
    {
      heading: 'Teste a continuidade com solicitações em estados diferentes',
      paragraphs: [
        'Selecione uma solicitação aguardando aprovação, outra aprovada e ainda sem pedido, e uma terceira cujo pedido já existe no ERP. Para cada uma, identifique o que a equipe pode fazer no destino após importar. Na primeira, verifique a alçada, o responsável atual e a próxima etapa. Na segunda, confira se a autorização existente pode ser reaproveitada de acordo com o processo da empresa. Na terceira, localize o pedido pelo vínculo exportado antes de permitir outro envio.',
        'Inclua uma decisão que muda durante a janela final. Se alguém recusar uma solicitação que no primeiro pacote ainda aparecia pendente, o destino precisa refletir a situação confirmada no corte. Peça uma prova com a entrega complementar e sua ordem de aplicação. Verifique se os comentários e as evidências entram com a mesma referência. Se o destino representa estados de outra forma, registre a conversão e onde a equipe consulta casos sem correspondência direta.',
        'Faça uma rodada com a equipe que realmente assume. Entregue apenas a referência, o perfil necessário e as instruções de leitura. Peça que a pessoa encontre a solicitação, confirme a última ação e indique o próximo responsável. Se depender de acesso ao software antigo, registre o motivo e inclua a preparação no orçamento. Repita com uma compra cancelada para avaliar se o destino reconhece a situação e previne uma nova operação fora da autorização.',
      ],
    },
    {
      heading: 'Negocie como recuperar o significado dos estados e das relações',
      paragraphs: [
        'Peça exemplos de estados cujo significado depende da etapa. Um registro como aprovado pode indicar a decisão da gerência ou a confirmação da compra, conforme o módulo. Solicite o nome da origem, o evento, a data e a relação com o pedido. Use uma amostra em que a mesma palavra aparece em dois lugares. A leitura independente precisa permitir distinguir o que aconteceu. Se alguma decisão era calculada e não foi guardada, informe o limite da reconstrução e quais documentos podem confirmar o caso.',
        'Teste a hierarquia que liga solicitação, linhas, aprovações e pedidos. Uma solicitação pode gerar dois pedidos quando a entrega é dividida entre fornecedores. Peça que a exportação preserve a relação e indique a quantidade associada a cada documento. Confira também uma linha cancelada depois da aprovação. Se os arquivos apresentam apenas o total, compare o custo de exportar detalhes com o trabalho de investigar as ocorrências que o total não explica.',
        'Defina como tratar referências que deixaram de existir no cadastro atual. Um aprovador pode ter mudado de unidade e um centro de custo pode ter sido encerrado. Peça que o pacote informe quais códigos guardam o estado histórico e quais usam a descrição atual para consulta. Teste uma ordem emitida antes da mudança. Quando a referência disponível não comprova quem tinha o papel no momento da decisão, registre a lacuna e atribua a validação à área responsável.',
      ],
    },
    {
      heading: 'Confira quem pode solicitar, receber e validar o pacote',
      paragraphs: [
        'Registre quem tem autorização para solicitar a exportação e quem confirma a chegada. Uma área pode precisar dos próprios pedidos e anexos, enquanto a equipe da transição recebe os conjuntos de várias unidades. Defina os recortes e peça uma prova de que o fornecedor entrega cada um ao grupo previsto. Confira se a lista de arquivos pode ser revisada por quem faz a conferência. O orçamento deve incluir a preparação de perfis, a entrega e a forma de comunicar que o pacote está disponível.',
        'Escolha um cenário em que a pessoa destinatária precisa ser substituída durante a janela. Peça que a empresa use seus próprios canais de autorização para indicar outra pessoa e confirmar a entrega. Registre quanto tempo a mudança leva e em que situações o pacote deve ser reemitido. Se o meio de transferência expira depois de alguns dias, verifique quem pode solicitar a reabertura e se a versão a receber será a mesma ou uma nova. Inclua o custo no cenário em que a revisão precisa ser estendida.',
        'Faça o teste com um recorte de duas unidades e verifique o acesso de cada perfil. Um operador pode abrir o relatório referente à própria unidade e identificar que os anexos esperados chegaram. A equipe central pode precisar das referências dos dois conjuntos para reconstruir uma compra que atravessa as unidades. Uma pessoa sem autorização deve ser encaminhada ao procedimento de solicitação. Registre a regra que vale para o pacote final e o que pode ser disponibilizado no teste.',
      ],
    },
    {
      heading: 'Simule a janela de entrega com o volume previsto',
      paragraphs: [
        'Meça o trabalho de preparar, transferir, abrir e verificar o material. Uma amostra pode chegar em minutos e um pacote com anos de anexos ocupar a janela inteira. Separe o tempo para gerar os arquivos do tempo para recebê-los e confirmar os vínculos. Se a entrega ocorre em lotes, peça uma ordem de recebimento que permita começar a conferência enquanto os demais são preparados. Registre em quais etapas a empresa e o fornecedor precisam estar disponíveis.',
        'Em um exemplo fictício, a origem leva quatro horas para gerar um pacote, a transferência ocupa três horas e a revisão inicial requer mais duas horas. Se as atividades são sequenciais, o prazo até a primeira confirmação chega a nove horas. Use a prova para verificar o que pode ocorrer simultaneamente e o que depende de uma ação anterior. Inclua a margem para repetir um lote e confirme quem pode autorizar a continuação se uma etapa exceder o prazo previsto.',
        'Teste a retomada quando a transferência para no meio. Registre os arquivos já recebidos e confira como o fornecedor retoma pelo conjunto pendente. Compare o inventário final com a lista esperada. Se alguns arquivos foram recriados durante a pausa, verifique se o identificador do pacote mostra quais versões pertencem ao mesmo corte. Peça que a proposta descreva as horas de suporte para esse cenário e a forma de antecipar a conferência de um grupo prioritário.',
        'Use uma situação em que a equipe precisa abrir o acervo sem acesso à origem. Deixe disponíveis apenas o pacote recebido, o dicionário e as instruções. Peça que ela localize um pedido antigo, interprete sua aprovação e abra o anexo correspondente. Se o prazo depende de preparar outra ferramenta, some esse tempo ao orçamento. Quando apenas parte do histórico pode ser lida dentro da janela, identifique o recorte pendente e a data de revisão.',
      ],
    },
    {
      heading: 'Formalize o aceite com cobertura, leitura e continuidade',
      paragraphs: [
        'Confira também um campo que admite mais de uma forma de preenchimento. Uma data registrada sem horário deve continuar identificável como data, para evitar que o destino a trate como um evento ocorrido à meia-noite e altere a sequência do histórico.',
        'Monte uma ficha de aceite para cada conjunto. Associe período, contagem, chaves, formato e versão. Registre quem confere os números e quem avalia se os registros preservam o sentido para o trabalho. A documentação técnica do AWS DMS descreve a comparação de registros entre origem e destino e como identificar divergências. Use o princípio para estruturar a conferência e inclua a leitura dos anexos e a interpretação dos eventos em provas próprias.',
        'Inclua um caso que deve continuar em operação e um que precisa apenas ser localizado. Para o primeiro, confirme que o destino consegue identificar a etapa e executar a próxima ação autorizada. Para o segundo, peça a outra pessoa que encontre o registro e a evidência de encerramento. Se os dois usam o mesmo pacote, confira se os perfis acessam o recorte adequado. Faça a prova com registros anteriores a uma mudança de cadastro para validar a leitura histórica.',
        'Combine o tratamento de divergências descobertas durante a conferência. Se uma unidade tem anexos ausentes, indique se o restante pode ser aprovado e em que condições o grupo pendente será reentregue. Registre quem autoriza a revisão, qual versão será substituída e quais testes precisam ser repetidos. Se uma relação crítica ficou sem chave, indique a informação complementar necessária. Use a evidência para decidir se o novo ambiente pode assumir a operação naquela data.',
        'Defina o estado em que o acesso anterior pode ser encerrado. A equipe deve confirmar que tem a última versão prevista, consegue recuperar os documentos e conhece o procedimento para lacunas já registradas. Se ainda é possível pedir uma correção, confirme o prazo e a pessoa que recebe a solicitação. Inclua uma prova de revisão com alguém que não participou da extração. Registre a decisão e as condições em que será necessário manter a consulta por mais tempo.',
      ],
    },
    {
      heading: 'Negocie uma prova periódica antes de precisar sair',
      paragraphs: [
        'Inclua um ensaio durante o uso do software para verificar se a exportação continua compatível com o projeto. Uma nova funcionalidade pode acrescentar anexos ou estados que não existiam na primeira prova. Escolha uma amostra dessas mudanças e repita a leitura independente. Registre a versão do formato e o que a equipe precisou atualizar no destino. Peça que a proposta informe se a revisão periódica está incluída e como solicita uma adaptação.',
        'Compare o custo de manter exportações recorrentes com o de solicitar uma entrega completa no fim. Um pacote mensal pode facilitar conferir mudanças e reduzir o volume da última janela. Se cada execução depende de uma equipe especializada, inclua os custos de geração, revisão e guarda. Peça uma previsão para o histórico crescer e para os arquivos de maior volume chegarem separados. Verifique o que pode ser recuperado quando a revisão encontra uma diferença de competência antiga.',
        'Defina uma frequência ligada às mudanças de maior efeito. Se o sistema muda o formato de aprovação e passa a gravar outra referência, repita um teste de continuidade. Se o fornecedor só ajusta a apresentação de um relatório, verifique se o pacote entregue permanece interpretável. Combine quem recebe o aviso e como aprova a nova versão do dicionário. Use o tempo observado para dimensionar a validação que a empresa consegue manter sem abrir um projeto a cada alteração.',
      ],
    },
    {
      heading: 'Leve um exemplo completo para comparar as respostas comerciais',
      paragraphs: [
        'Na primeira reunião, apresente uma solicitação aberta, um pedido encerrado com anexo e uma correção feita depois do primeiro registro. Indique o volume por unidade e quais sistemas precisarão continuar usando os dados. Solicite um preço que discrimine amostra, exportação definitiva, correção de diferenças e apoio à importação. Peça prazos para a entrega e o último momento em que a equipe pode acionar suporte durante a transição.',
        'Acompanhe a proposta com uma ficha que identifique o que pode ser demonstrado agora e o que depende do volume final. Se o fornecedor consegue exportar linhas e anexos hoje, confirme as chaves pela amostra. Se o prazo depende de uma cópia em outro ambiente, peça quem prepara a operação e quais recursos são necessários. Compare o preço para levar o conteúdo e o trabalho que sua equipe terá até interpretá-lo. Registre as condições que precisam ser confirmadas antes de decidir.',
        'Peça a cada fornecedor que apresente o resultado de saída usando os mesmos exemplos. A equipe deve localizar o pedido sem a interface original, reconstruir as relações necessárias e explicar o estado que alimentará a nova operação. Registre quanto tempo a prova consome e quanto custa repetir o procedimento. Use a resposta para escolher uma proposta que preserve os dados úteis e permita verificar seu conteúdo antes de a empresa mudar de sistema.',
      ],
    },
  ],
  faqs: [
    { question: 'Como testar a portabilidade antes de contratar?', answer: 'Peça uma amostra representativa e confira pedidos, estados, vínculos e anexos em ferramenta independente.' },
    { question: 'O que deve entrar no preço da exportação?', answer: 'Inclua preparação, geração, transferência, conferência, reentregas e apoio para interpretar ou importar os dados.' },
    { question: 'Quando aprovar o pacote final?', answer: 'Depois de conferir cobertura e versões e demonstrar que o destino consegue consultar o histórico e continuar as operações previstas.' },
  ],
  cta: {
    title: 'Quer avaliar a portabilidade antes de contratar software?',
    text: 'Leve à Tironi Tech seu fluxo, o volume de dados e um exemplo de pedido com anexos. Podemos ajudar a delimitar a entrega e as provas de aceite.',
    label: 'Conversar sobre portabilidade de dados',
  },
  sources: [
    { label: 'AWS Database Migration Service — conferência entre origem e destino', url: 'https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Validating.html' },
  ],
};
