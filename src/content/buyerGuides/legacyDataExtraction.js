export const legacyDataExtraction = {
  slug: 'contratar-extracao-dados-legado-encerramento',
  date: '2026-11-26',
  updated: '2026-11-26',
  description: 'Compare propostas de extração de dados legados, valide arquivos e vínculos e prepare o aceite antes de encerrar o sistema.',
  keywords: ['extração de dados antes de encerrar um sistema legado', 'contratar extração de dados de sistema legado', 'orçamento de extração de dados legados'],
  emphasis: 'extração de dados antes de encerrar um sistema legado',
  intro: 'Para contratar a extração de dados antes de encerrar um sistema legado, especifique quais registros, vínculos e anexos precisam sair, como a equipe vai consultá-los e quem verificará a entrega. Planeje uma extração de teste e uma carga final com critérios de completude e um ponto de corte que a operação consiga confirmar.',
  takeaways: [
    'Use perguntas reais de consulta para definir o conteúdo da entrega.',
    'Identifique vínculos, anexos e exclusões antes de fechar o preço.',
    'Condicione o encerramento à reconciliação e ao teste de recuperação.',
  ],
  sections: [
    {
      heading: 'Defina a entrega a partir das consultas que precisam continuar',
      paragraphs: [
        'Reúna pessoas de atendimento, operação e tecnologia e peça exemplos de perguntas que continuariam chegando depois de encerrar o sistema. A assistência técnica pode precisar localizar ordens antigas pelo número de série. A qualidade pode relacionar uma troca de peça ao lote utilizado. A área financeira pode conferir que parte do serviço foi coberta pela garantia. Transforme cada pergunta em um teste com chaves de busca, dados que devem aparecer, perfil autorizado e resultado esperado. Use essa lista para estimar o que precisa ser entregue.',
        'Separe os dados que alimentarão um sistema em funcionamento dos que terão uso de consulta. Ordens abertas podem precisar cair num novo fluxo com status, prazos e responsáveis. Ordens encerradas podem permanecer num acervo pesquisável. Uma ordem encerrada ainda pode ser citada na abertura de um novo chamado. Nesse caso, defina como o operador localiza o registro anterior e registra a referência. Peça ao fornecedor que mostre a travessia entre os dois destinos com um exemplo completo.',
        'Para **contratar extração de dados de sistema legado**, descreva o resultado de cada conjunto de dados. Por exemplo, uma ordem deve sair com o identificador antigo, a data registrada, o equipamento, os serviços executados e a relação dos documentos disponíveis. Se a consulta deve explicar o valor autorizado em garantia, inclua os campos e a versão da regra que ajudam nessa conferência, quando existirem. Colha a confirmação da área que usa a informação antes de retirar tabelas ou partes aparentemente repetidas.',
        'Registre por que determinados dados ficam fora e quem confirmou a exclusão. Uma base pode conter rascunhos cancelados, arquivos de teste e cópias de integração. Alguns rascunhos podem ter relação com incidentes que a equipe ainda acompanha. Use amostras de cada categoria para conferir o recorte. A área responsável determina quais obrigações e decisões internas orientam a guarda. Peça que o preço identifique o efeito dessas escolhas no volume, nas permissões e nos testes.',
      ],
    },
    {
      heading: 'Descubra onde estão os dados que aparecem juntos na tela',
      paragraphs: [
        'Pegue uma ordem antiga e acompanhe de onde vem cada informação. A tela pode montar o cabeçalho com uma tabela relacional, recuperar o laudo em um diretório e consultar um cadastro externo para exibir o nome do técnico. Solicite um inventário dessas origens, com o período de cobertura e a relação que permite ligar os registros. Combine uma extração de amostra em que o fornecedor entregue o cabeçalho, os itens, os eventos e o documento da mesma ordem.',
        'Pergunte se a tela mostra o valor gravado naquela data ou consulta o cadastro atual. Um equipamento pode ter mudado de proprietário desde a visita técnica. Uma oficina pode ter trocado de nome. Para manter a interpretação histórica, identifique quando é possível recuperar o valor da época e marque quando o legado conserva apenas o valor atual. Peça que o dicionário de dados descreva a origem e a regra usada. Valide a explicação com uma ordem antiga cujo proprietário mudou.',
        'Verifique as chaves em mais de uma unidade. O número 1842 pode existir na unidade Norte e na unidade Sul. Um relatório pode mostrar apenas esse número, embora a base use também a filial e o ano. Defina o identificador que será usado na exportação, na busca e no sistema de destino. Faça um teste de consulta com dois registros que repetem o identificador exibido. Se houver conversão para um novo código, preserve uma tabela de correspondência que a equipe consiga revisar.',
        'Identifique os campos derivados e os códigos pouco documentados. Um status numérico pode significar uma etapa diferente conforme a versão do sistema ou a linha de produto. Peça que o fornecedor procure regras e tabelas auxiliares e compare a interpretação com registros conhecidos pela operação. Quando a classificação continuar indefinida, preserve o valor original e indique a dúvida no relatório de extração. Combine quem investigará os casos e se a consulta poderá ser liberada com a marcação explícita.',
      ],
    },
    {
      heading: 'Conte os anexos pelo vínculo com o registro',
      paragraphs: [
        'Faça o inventário de anexos por tipo e origem. Laudos podem estar num compartilhamento, fotos em armazenamento remoto e assinaturas numa tabela da aplicação. Para cada conjunto, peça quantidade, tamanho, formato, regra de nome e método de associação. Uma estrutura de pastas organizada pelo nome do cliente pode ter mudado ao longo dos anos. A lista precisa manter o caminho conhecido e identificar a ordem à qual o arquivo será associado. Use exemplos com mais de um arquivo para o mesmo serviço.',
        'Diferencie vínculos sem arquivo, arquivos sem vínculo e cópias repetidas. A primeira situação pode resultar de uma limpeza antiga. A segunda pode incluir documentos válidos que perderam a associação por mudança de versão. Para duplicatas, verifique se a repetição é do conteúdo ou apenas do nome. Dois arquivos chamados laudo.pdf podem pertencer a ordens distintas. Defina quem decide quando corrigir, registrar como exceção ou preservar o conteúdo em separado. Inclua esse esforço no orçamento.',
        'Teste documentos antigos e recentes e confira se abrem no ambiente de destino. Separe a validação de integridade do arquivo da verificação de conteúdo e vínculo. Um hash permite conferir se os bytes entregues correspondem ao manifesto calculado para aquele arquivo. A associação à ordem correta precisa de outra prova, que pode usar a chave gravada e a conferência de amostras pelo atendimento. Peça também uma verificação da abertura de arquivos em formatos pouco usados e identifique o programa necessário.',
        'Se a empresa pretende converter formatos, combine o que será preservado e como a conversão será verificada. Uma imagem pode continuar legível após conversão enquanto um formulário perde campos pesquisáveis. Um documento assinado pode exigir que a consulta mantenha o original para uso específico. Peça preço por formato, volume e tipo de verificação. Reserve uma amostra em que o responsável pelo processo compare o original com a versão que será usada no dia a dia.',
      ],
    },
    {
      heading: 'Compare os formatos pela forma de receber e reutilizar',
      paragraphs: [
        'Um arquivo tabular pode servir para conferência e importação. Uma cópia do banco preserva estrutura e tipos do ambiente de origem, mas pode exigir versão e ferramentas compatíveis. Uma consulta web facilita o trabalho de quem busca um registro individual. A mesma contratação pode entregar um conjunto pesquisável e arquivos que a empresa consegue carregar em outra ferramenta. Peça que os fornecedores expliquem o custo e as condições de cada formato usando a mesma amostra.',
        'Para arquivos tabulares, especifique codificação, separador, cabeçalho, representação de vazio e formato de datas e valores. Um código de série com zeros à esquerda pode ser interpretado como número por uma planilha. Uma data de atendimento pode mudar de dia conforme o fuso aplicado na conversão. Defina o tipo esperado e teste com registros que contenham esses casos. Se o destino exige uma regra própria, peça que o fornecedor preserve o valor original quando a transformação dificultar a conferência.',
        'Peça uma descrição de cada campo, com nome no destino, origem, tipo, transformação e vínculo. Para valores codificados, inclua o mapa de códigos disponível. Para históricos com versões diferentes, indique quando cada regra se aplica. A pessoa que recebe deve conseguir reconstruir a relação entre ordem, equipamento e anexo com a documentação entregue. Escolha um caso representativo e faça essa prova com alguém que não participou da extração.',
        'Defina o manifesto de entrega antes do teste. Cada pacote pode listar versão, recorte temporal, conjuntos incluídos, quantidade, arquivos de referência e verificadores de integridade. Se a exportação for dividida por período ou unidade, documente como localizar os pacotes e detectar lacunas. Se o fornecedor reentregar um lote corrigido, indique qual versão substitui a anterior e que testes serão repetidos. A mesma regra ajuda compras a conferir o que foi entregue a cada parcela do projeto.',
      ],
    },
    {
      heading: 'Compare a origem e o destino no mesmo ponto de corte',
      paragraphs: [
        'Peça que os totais sejam produzidos sobre um recorte reproduzível. Se a assistência continua registrando visitas enquanto os arquivos são gerados, uma consulta feita uma hora depois pode incluir ordens fora da entrega. Defina qual estado da origem será usado para a extração e a conferência. Pode ser uma cópia consistente, uma janela de escrita suspensa ou outro método que permita identificar as mudanças incluídas. Registre a data, os filtros e as informações que permitam ao time repetir a comparação.',
        'Comece pela contagem por período, unidade e situação da ordem. Compare também os identificadores. Se a origem tem 3.200 ordens e o destino tem o mesmo total, ainda pode haver uma ordem ausente e outra duplicada. Liste chaves encontradas apenas num lado e reúna os casos em que falta parte do identificador. Quando houver transformação, compare a partir da correspondência aprovada em vez de exigir que o código novo seja idêntico ao antigo. Peça o resultado tanto para os registros principais quanto para os itens relacionados.',
        'Escolha valores e vínculos que sustentem a consulta. Por exemplo, compare serviços e peças por ordem, valores por tipo de cobertura e datas por período de encerramento. Use regras explícitas para diferenças autorizadas de arredondamento ou conversão. A documentação do AWS Database Migration Service descreve a comparação de linhas entre origem e destino e limitações quando o registro está mudando. Use esse princípio para perguntar como o fornecedor comprovará equivalência quando houver mudanças durante a extração ou campos convertidos.',
        'Peça resultados por categoria. Uma ordem cuja chave está duplicada pede investigação diferente de um documento inexistente na origem. Registre também os casos que ficaram fora dos testes. Se um tipo de arquivo não pode ser aberto automaticamente, planeje a inspeção de uma amostra e defina quando o resultado permite entregar o restante. A área que usa o registro deve confirmar se a limitação afeta a consulta esperada. Deixe a decisão vinculada aos registros concretos.',
      ],
    },
    {
      heading: 'Defina um plano para as diferenças e as reentregas',
      paragraphs: [
        'Para cada divergência, registre o identificador, os valores observados, a regra aplicada e a próxima ação. Separe os erros introduzidos pela extração dos problemas já presentes na origem. Imagine uma ordem com dois itens iguais e apenas um comprovante vinculado. A operação pode confirmar que ambos os itens são válidos ou autorizar uma correção em um conjunto derivado. Quando houver correção, preserve a origem e a autorização para que uma revisão futura possa distinguir o registro recebido da versão tratada.',
        'Combine o formato de uma reentrega. O fornecedor pode gerar novamente o lote completo ou substituir apenas um intervalo em que a regra mudou. Em ambos os casos, quem importa precisa saber exatamente quais arquivos perderam validade e como evitar carregar itens duas vezes. Peça um teste em que um primeiro lote é aceito, um segundo recebe correções e uma nova execução demonstra a quantidade e os vínculos finais. Combine também quem valida se o manifesto foi atualizado.',
        'Associe as tolerâncias aos usos previstos. Um campo descritivo que já estava vazio pode ser aceito se a busca e a identificação da ordem funcionarem. Uma divergência que impede distinguir garantia de cobrança pode travar as consultas financeiras daquele conjunto. Para uma exceção aceita, identifique o alcance, a pessoa que autorizou e a forma de sinalizar a limitação. O orçamento deve prever quanto custa isolar o lote, corrigir a regra e executar novamente a verificação.',
        'Defina como a conferência pode ser repetida depois que o fornecedor entregar. Solicite as consultas, relatórios ou rotinas de validação acordados, com instruções e requisitos de execução. Rode uma verificação com alguém da equipe que receberá o acervo. Observe se a pessoa consegue localizar o recorte correto, interpretar diferenças conhecidas e produzir um resultado equivalente. Isso ajuda a identificar dependências da máquina ou do acesso pessoal de quem fez a extração.',
      ],
    },
    {
      heading: 'Projete a carga final com base no ensaio',
      paragraphs: [
        'No ensaio, cronometre leitura, transferência, montagem do acervo e verificação. Anote a concorrência com a operação e o efeito sobre o horário dos usuários. Se o sistema fica lento quando a leitura de anexos coincide com o fechamento da assistência, planeje outra janela ou use uma cópia autorizada. Solicite a indicação do fator que mais afeta a duração. O tamanho do banco, a quantidade de arquivos pequenos e a velocidade de transferência podem exigir estimativas diferentes.',
        'Escolha o procedimento para mudanças posteriores à extração inicial. Defina como localizar ordens novas, mudanças de status, exclusões e substituições de anexos. Um filtro simples por data da ordem pode perder uma correção feita hoje em um registro do ano anterior. Teste um caso de cada tipo e confira se a sequência é reconstruída. Se a origem não preserva o histórico necessário para identificar o que mudou, estime uma nova leitura do conjunto ou uma janela autorizada de bloqueio das alterações.',
        'Em um cenário fictício, a cópia de 600 GB leva seis horas e a conferência leva outras três. A empresa dispõe de quatro horas com escrita suspensa. Uma carga inicial pode retirar a maior parte do volume antes, desde que seja possível capturar as alterações posteriores e validar a soma das entregas. Simule uma alteração de documento durante a cópia inicial e identifique qual versão deve constar no destino. Use a medição de uma amostra para planejar margem para reprocessamento e suporte.',
        'Escreva a sequência final com horários e responsáveis. Inclua a comunicação do corte, a confirmação da última transação, a cópia das alterações, a conferência e o momento de decisão. Se um processo de retaguarda gravar eventos depois de o atendimento fechar, confirme quando ele termina e quais registros envia. Se a verificação exceder a janela, a equipe precisa saber se pode manter a origem em serviço e repetir a carga, ou se existe um procedimento alternativo aprovado para atendimento.',
      ],
    },
    {
      heading: 'Defina quem recebe os dados e como o acesso muda',
      paragraphs: [
        'Especifique a etapa em que os arquivos passam do ambiente de origem para o destino de trabalho e, depois, para o acervo definitivo. Identifique o operador autorizado a produzir cada pacote, quem pode baixá-lo e quem confirma a recepção. Durante um ensaio, é comum surgir uma cópia adicional para que a área de negócio consiga testar. Registre a localização, o responsável e a data prevista para revisar a necessidade dessa cópia. Compare propostas que incluem esses passos com propostas que terminam no envio dos arquivos.',
        'Prepare perfis pela tarefa que continuarão executando. Uma oficina terceirizada pode receber acesso às ordens que atendeu, enquanto a qualidade consulta histórico por equipamento em várias unidades. Faça uma prova com a mesma ordem nas duas sessões e confirme o que deve aparecer em cada uma. Inclua anexos e resultados de pesquisa no teste. Se o pacote será recebido por uma área central e distribuído por ela, descreva como serão produzidos os recortes e quem poderá revisar uma distribuição indevida.',
        'Defina o que será disponibilizado no ensaio. Para testar mapeamento, a equipe pode usar um conjunto com dados substituídos e vínculos preservados. Para conciliação final, pode precisar de acesso a valores reais em ambiente aprovado. Combine com a organização quais permissões e controles se aplicam a cada etapa e inclua a preparação na estimativa. Se o fornecedor precisar de uma conta temporária, identifique o responsável pela aprovação e o momento de revisar ou encerrar esse acesso.',
        'Peça um registro da entrega que possa ser consultado depois. Inclua o identificador do pacote, o local de destino, o horário, a versão do manifesto e a pessoa que confirmou o recebimento. Se a contratada participa da carga no sistema que fica em operação, indique quem autoriza o início e como são registradas as linhas aceitas, rejeitadas e pendentes. A separação dos resultados permite distinguir uma transferência bem-sucedida de uma importação concluída.',
      ],
    },
    {
      heading: 'Teste a recuperação com quem vai usar o acervo',
      paragraphs: [
        'Peça ao atendimento que abra uma ordem antiga com o endereço do acervo, seguindo as orientações que ficarão disponíveis no dia a dia. Escolha um caso em que o usuário só conhece o equipamento e o período aproximado. O teste deve medir quanto tempo leva para localizar a ordem, conferir se ela pertence ao equipamento certo e visualizar o laudo. Repita com um registro cujo número aparece em mais de uma unidade. Anote cada ponto em que a pessoa depende da ajuda do projeto.',
        'Se uma parte do material fica guardada fora da consulta imediata, faça uma prova de recuperação desse conjunto. Solicite, por exemplo, todas as evidências de uma campanha de manutenção de um ano específico. Verifique se o responsável consegue identificar o pacote certo, recuperar uma cópia íntegra e interpretar os campos. Registre o tempo de preparação e o prazo até disponibilizar o material. Considere no orçamento as horas necessárias para cada recuperação que envolva um operador especializado.',
        'Confirme como o acervo funciona sem depender de recursos que serão desligados. Durante uma prova autorizada, simule a indisponibilidade da origem para a consulta histórica. Verifique se a aplicação ainda busca arquivos, resolve o nome de unidades e autentica os perfis esperados. Se uma parte continuar usando um cadastro ativo de outro sistema, registre o vínculo, o time que o sustenta e a forma de consultar os registros caso o código mude. Obtenha o aceite da equipe que manterá esse ponto de integração.',
        'Para a recuperação de um lote arquivado, faça o responsável conferir a versão e o verificador de integridade antes de disponibilizar a cópia. Depois, peça que uma pessoa da operação confirme dois registros e seus anexos. A validação técnica confirma o arquivo recepcionado, enquanto a validação da área demonstra que o resultado serve à consulta. Ensaie também a recuperação quando o operador principal estiver ausente e inclua no material de entrega os acessos e passos que o substituto deve seguir.',
      ],
    },
    {
      heading: 'Compare preços com o mesmo recorte e as mesmas provas',
      paragraphs: [
        'Para pedir um **orçamento de extração de dados legados**, apresente o período, o volume aproximado, a quantidade de unidades e os tipos de anexos conhecidos. Informe quantas consultas precisam continuar e quais conjuntos vão alimentar outro sistema. Se uma origem tem acesso apenas pelo fornecedor do produto, descreva a condição para liberar a amostra. Peça preços distintos para descoberta, extração de teste, correções, carga final e acompanhamento. Inclua a disponibilidade esperada durante a janela de encerramento.',
        'Compare como os preços variam quando aparecem dados fora do inventário. Um fornecedor pode estimar por conjunto e outro pelo volume transferido. Apresente um exemplo de crescimento que inclua arquivos em formatos diferentes e vínculos com chaves incompletas. Peça a revisão dos preços para cada caso e indique quem aprova o adicional. Se parte das dificuldades pode ser confirmada por um ensaio curto, vincule a aprovação da etapa seguinte ao resultado do ensaio e à estimativa atualizada.',
        'Inclua os custos após a entrega. Em um cenário fictício, uma proposta cobra R$ 26.000 pela extração e prevê R$ 700 mensais de armazenamento e recuperação. Outra cobra R$ 34.000 e prevê R$ 300 mensais para a mesma finalidade. Em 36 meses, os valores somariam R$ 51.200 e R$ 44.800, assumindo valores constantes e sem cobrar resgates adicionais. Compare a cobertura antes de decidir. Se a primeira inclui consulta imediata e a segunda exige uma solicitação a cada acesso, estime a frequência e o custo de espera.',
        'Solicite que a proposta mostre quais testes estão incluídos em cada entrega. Uma descrição genérica de validação pode cobrir contagens sem abranger vínculos ou anexos. Apresente aos fornecedores uma ordem válida, outra com um documento ausente na origem e uma terceira com correção após a extração inicial. Peça que demonstrem como os casos aparecem no acervo e no relatório de exceções. Use o mesmo exercício para comparar o tempo de resposta e a capacidade de entregar uma correção que a equipe consiga verificar.',
      ],
    },
    {
      heading: 'Condicione o desligamento à aprovação de cada entrega',
      paragraphs: [
        'Monte uma ficha de aceite com o recorte, a versão entregue e as pessoas responsáveis pelas verificações. A equipe técnica confirma os totais, chaves e vínculos. A operação comprova que as consultas previstas funcionam. Quem administra o acervo confirma os acessos e o procedimento de recuperação. A coordenação verifica se as exceções têm decisão registrada e define a data em que a origem deixa de receber mudanças. Anexe a evidência de cada etapa para uma revisão futura.',
        'Separe a aprovação da carga final da decisão de retirar o ambiente antigo. Uma extração pode estar completa e o destino ainda precisar corrigir permissões para usuários de uma unidade. O cronograma deve indicar se a origem pode ficar acessível apenas para consulta durante o ajuste e quanto custa essa extensão. Defina o marco em que será possível cancelar contratos vinculados à origem. Inclua quem confirma que os processos previstos foram transferidos e que a próxima consulta poderá ser atendida.',
      ],
    },
  ],
  faqs: [
    { question: 'O que devo pedir numa proposta de extração do legado?', answer: 'Peça inventário, amostra, dicionário de dados, manifesto de entrega, conferência de registros e anexos, carga final e teste de recuperação.' },
    { question: 'Como confirmar que todos os registros foram extraídos?', answer: 'Compare chaves e contagens no mesmo recorte da origem, valide os vínculos e investigue o que aparece em apenas um lado.' },
    { question: 'Quando é possível desligar o sistema antigo?', answer: 'Após validar a carga final, aprovar as exceções e demonstrar que os usuários autorizados conseguem localizar e recuperar os dados no destino.' },
  ],
  cta: {
    title: 'Precisa extrair dados antes de encerrar um sistema?',
    text: 'Compartilhe com a Tironi Tech as origens, o prazo e as consultas que precisam continuar. Podemos ajudar a delimitar a amostra, a conferência e a entrega final.',
    label: 'Conversar sobre a extração do legado',
  },
  sources: [
    { label: 'AWS Database Migration Service — validação da origem e do destino', url: 'https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Validating.html' },
  ],
};
