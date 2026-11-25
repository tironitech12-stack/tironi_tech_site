export const workOrderEvidence = {
  slug: 'automatizar-leitura-ordens-servico-fotos',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Veja como contratar IA para conferir fotos e evidências de ordens de serviço, com amostragem, revisão humana e critérios de aceite.',
  keywords: ['IA para ler evidências de ordens de serviço', 'automação da conferência de fotos de ordem de serviço', 'IA para validar evidências de campo', 'conferência de fotos de assistência técnica'],
  emphasis: 'IA para ler evidências de ordens de serviço',
  intro: 'Para contratar IA para ler evidências de ordens de serviço, explique quais fotos e documentos o técnico deve apresentar e que decisão cada evidência sustenta. Peça um piloto com fotos legíveis, registros incompletos e imagens de um equipamento semelhante ao correto. A solução deve indicar de onde tirou a informação, encaminhar dúvidas para revisão e limitar quando uma sugestão pode liberar a etapa seguinte.',
  takeaways: [
    'Separe qualidade da evidência, associação à ordem e confirmação do serviço.',
    'Teste leitura e encaminhamento com fotos de campo que o fornecedor ainda não usou.',
    'Valide tempo de revisão, erros que passam e trilha antes de automatizar decisões.',
  ],
  visual: {
    title: 'Da foto da visita à revisão da ordem',
    labels: ['Técnico registra a evidência com tipo e referência', 'Sistema verifica qualidade e propõe dados', 'Regras e revisor conferem o que pode seguir', 'Ordem guarda evidência, decisão e próximo passo'],
    caption: 'A imagem sustenta apenas o que for verificável. O estado da ordem depende dos critérios operacionais e da autorização prevista.',
  },
  sections: [
    {
      heading: 'Defina que decisão a evidência precisa sustentar',
      paragraphs: [
        'Abra ordens encerradas e acompanhe o que o supervisor procura antes de aceitar. Uma foto pode identificar etiqueta, documentar estado anterior, registrar componente instalado ou comprovar que há uma leitura disponível. O que a imagem precisa mostrar muda de tarefa para tarefa. Para orçar, leve exemplos aprovados e devolvidos e marque qual informação faltou, quem fez a análise e se a decisão ficou registrada.',
        'Separe três perguntas. A foto tem qualidade para ser analisada? Ela parece corresponder ao equipamento e à etapa esperados? A ordem está pronta para seguir? A primeira pode envolver foco e corte. A segunda depende de referência, como número de série ou local autorizado. A terceira precisa de regras e outras evidências. Uma foto da placa de identificação ajuda a vincular o equipamento, mas não prova que o técnico concluiu todos os testes.',
        'Escolha um caso de uso que represente o trabalho inicial. Uma empresa pode começar por leitura de números de série e verificação de que houve uma foto antes e outra depois. Outra pode querer capturar valores de instrumentos em imagens. Cada caso exige iluminação, enquadramento e critério diferentes. Identifique onde começa a resposta da IA e qual parte continua com uma pessoa. A proposta precisa deixar claro o que será comprovado no piloto.',
        'Meça perdas do processo atual. Conte retornos ao técnico, ordens aguardando evidência, tempo de revisão e falhas que chegam à etapa posterior. Se o principal atraso é esperar que a pessoa volte ao local, uma validação precoce de captura pode ajudar mais que uma análise extensa depois do encerramento. Compare propostas pelo momento em que resolvem o problema, além de precisão e custo por imagem.',
      ],
    },
    {
      heading: 'Padronize a captura antes de depender da análise automática',
      paragraphs: [
        'Defina os tipos de evidência por serviço. Uma instalação pode exigir etiqueta, contexto e registro final. Uma manutenção pode pedir foto antes da intervenção, peça trocada e resultado de medição. Dê a cada evidência uma finalidade, um exemplo e uma instrução curta de enquadramento. A equipe não deve depender de recordar no campo nomes de arquivos ou pastas. Peça que a solução indique o que falta e permita salvar para concluir depois quando a política autorizar.',
        'Escolha onde registrar a evidência. A documentação da Microsoft para o aplicativo móvel de Field Service exemplifica uso de anexos no contexto das ordens. Na sua operação, o recurso pode estar no aplicativo atual, num formulário ou em outro sistema. A proposta deve indicar como garante vínculo com a ordem, visita, ativo e etapa. Capturar foto pela câmera e subir de uma galeria são situações diferentes quando a empresa precisa registrar a origem e a sequência.',
        'Defina o que acontece sem conexão. Um técnico pode salvar fotos e formulário localmente e enviar depois. O sistema precisa mostrar o que ficou salvo, o que ainda não chegou e quando a análise começou. Uma foto registrada no aparelho não deve aparecer como validada na central antes da transmissão. Em homologação, feche a tela sem rede, reabra e recupere a ordem. Depois, interrompa um envio e confira que a evidência chega uma vez.',
        'Evite coletar imagens além da necessidade. Dê exemplos de enquadramento para evitar pessoas, documentos ou detalhes de outras áreas quando não forem necessários. Defina como a equipe lida com envio incorreto e quem pode retirar ou restringir uma imagem. Na cotação, peça qual dado segue para a ferramenta de análise, para o ERP e para o relatório. A proposta deve preservar a prova necessária sem copiar todo o conteúdo para várias ferramentas.',
      ],
    },
    {
      heading: 'Teste identificação por número de série e vinculação à ordem certa',
      paragraphs: [
        'Use etiquetas com números parecidos e formatos de fabricante diferentes. Uma câmera pode confundir 0 e O, ou capturar uma referência de modelo como se fosse serial. Defina como o conteúdo será comparado com o cadastro e que campos ajudam a validar. Se existem dois ativos candidatos, o sistema deve explicar a ambiguidade. A ausência de um código em um catálogo não prova que a imagem é incorreta, principalmente se o cadastro ainda depende de atualização.',
        'Num exemplo hipotético, duas unidades do mesmo modelo ficam na mesma planta. A ordem indica final 0512, mas a etiqueta fotografada termina em 0517. A ferramenta pode ler claramente os caracteres e ainda ter de sinalizar que o registro não coincide. Peça ao fornecedor como encaminha a divergência e quem pode confirmar mudança de vínculo. Uma sugestão de associação não deve alterar automaticamente a ordem nem eliminar referência originalmente autorizada.',
        'Inclua etiquetas danificadas e fotos com reflexo. A automação pode indicar que precisa de outra imagem, completar a conferência com parte do código ou encaminhar revisão. Defina qual decisão é permitida com dados incompletos. Para informações de identidade, prefira mostrar ao revisor o trecho da imagem e os candidatos. Se a equipe não puder refazer a captura na hora, determine como descrever a falta e qual documento alternativo pode servir conforme a política.',
        'Teste ordem com mais de um equipamento. Uma visita pode registrar várias etiquetas e anexar imagens rapidamente. A pessoa precisa vincular cada foto ao ativo correto e conhecer a etapa. Escolha um fluxo para separar e corrigir vínculo sem apagar a imagem que foi anexada inicialmente. Peça que o resultado possa ser consultado e exportado por subconjunto, para confirmar a visita sem confundir medições e componentes de ativos vizinhos.',
      ],
    },
    {
      heading: 'Verifique qualidade de imagem com consequências definidas',
      paragraphs: [
        'Prepare um conjunto com imagens escuras, desfocadas, inclinadas, cortadas ou fora de contexto. A regra deve distinguir imagem ruim de evidência incorreta. Uma foto bem iluminada de outra peça não cumpre a finalidade. Uma foto difícil ainda pode servir como contexto se o dado crítico aparece em outra evidência. Descreva o resultado esperado de cada tipo e quem decide. O fornecedor precisa provar que a revisão encaminha o caso certo à pessoa certa.',
        'Avalie uma orientação imediata de captura. Se o aplicativo consegue sinalizar enquadramento insuficiente antes de sair do local, ele pode reduzir retrabalho. Teste com aparelhos e ambientes usados no campo. Documente o que funciona offline e o que depende de processamento central. Uma proposta pode oferecer aviso simples de tamanho ou foco no aparelho e análise mais profunda depois. Compare a utilidade das duas etapas para a rotina do técnico.',
        'Para leitura de instrumentos, defina o que a imagem pode mostrar com segurança. Escolha formato, unidade, limite visual e evidência adicional quando um valor for crítico. Uma foto pode conter mais de uma escala ou mostrar só parte do visor. Peça um teste em que a ferramenta identifique a ambiguidade. Não use uma leitura automática como autorização de operação da máquina. A revisão segue os procedimentos aprovados pela empresa para aquele equipamento e serviço.',
        'Planeje a situação em que a evidência não pode ser refeita. O técnico pode ter saído e o cliente pode ter janela limitada. A solução deve registrar o motivo e indicar o que a equipe pode verificar por outro documento ou contato. A regra também pode manter a ordem pendente ou encaminhar uma exceção autorizada. Esse procedimento precisa aparecer no orçamento porque a automação será usada em casos que não seguem a captura ideal.',
      ],
    },
    {
      heading: 'Desenhe a tela de revisão e triagem para quem confere a ordem',
      paragraphs: [
        'Mostre evidência, dado sugerido e referência da ordem no mesmo contexto. Uma pessoa que analisa serial deve ver o trecho da etiqueta e o cadastro esperado, além do motivo de encaminhamento. Para uma sequência de fotos, mostre qual etapa cada imagem pretende documentar. A revisão economiza tempo quando leva a pessoa ao ponto da dúvida. Uma grade com arquivos sem indicação do problema ainda exige que a equipe investigue tudo.',
        'Defina estados por evidência e por ordem. Uma foto pode estar legível e outra ainda faltar. Uma ordem pode ter documentação completa e aguardar aprovação contratual. Peça que a proposta mostre o estado de cada item e o que bloqueia a próxima ação. Quando alguém corrige um valor, registre o originalmente sugerido, o confirmado e o responsável. A equipe de qualidade precisa localizar padrões de correção para avaliar mudanças na automação.',
        'Teste reclassificação. Um revisor pode perceber que a foto enviada como “depois” corresponde ao estado anterior. A correção deve preservar o vínculo e explicar por que a ordem continua incompleta. Se o caso exige confirmação do técnico, indique como ele recebe a demanda e que evidências permanecem válidas. Faça um teste com dois revisores para verificar como a decisão é compartilhada e como um perfil sem autorização é impedido de liberar a ordem.',
        'Meça esforço de revisão. Um grupo pode receber alertas demasiados por causa de pequena diferença no enquadramento. Outros casos podem passar automaticamente com entendimento errado do que a imagem representa. Durante a cotação, compare tempo, acertos e custo de erro. Ajuste o limiar conforme a consequência, e preserve revisão obrigatória em situações em que o piloto não demonstrou segurança suficiente. O teste precisa medir a operação de ponta a ponta.',
      ],
    },
    {
      heading: 'Organize um conjunto de avaliação de fotos e decisões',
      paragraphs: [
        'Separe evidências de diferentes técnicos, aparelhos, locais e datas. Inclua alterações de iluminação, tipos de etiqueta e famílias de equipamento. Evite colocar fotografias quase iguais da mesma visita em ajuste e validação. Um sistema pode aprender características de um ambiente e se sair pior quando entra em outra planta. Prepare ao menos um grupo que o fornecedor use apenas no teste final e identifique que situações ainda não aparecem na amostra.',
        'Registre a resposta de referência junto da finalidade. Para um serial, indique os caracteres verificáveis e a ordem correta. Para uma foto de etapa, marque quando a imagem realmente permite identificar o antes ou depois. Para uma evidência ilegível, o resultado esperado pode ser pedir nova imagem em vez de adivinhar. A pessoa que valida deve ter instruções e, quando existe dúvida na equipe, incluir a razão para que fornecedores usem a mesma régua.',
        'Não conte como acerto somente por ter detectado “foto”. Compare a decisão que a empresa quer apoiar, a qualidade do dado e a consequência do erro. Um falso aceite pode mandar uma ordem sem comprovação para faturamento. Uma revisão desnecessária aumenta fila, mas tende a ter outro impacto. Marque quantos exemplos em cada classe foram avaliados. Os percentuais precisam vir junto de quantidade e tipo de amostra para a gestão interpretar.',
        'Inclua exemplos que mostram os limites. Foto de etiqueta de ativo parecido, arquivo reenviado em ordem diferente, imagem sem etapa identificável e medição com unidade ambígua. Esses casos ajudam a conferir se a solução reconhece quando precisa de outra fonte. Teste também o mesmo lote após atualizar a versão do modelo ou a qualidade de compressão. Guarde resultados e alterações para saber o que mudou, mesmo que o serviço subjacente evolua.',
      ],
    },
    {
      heading: 'Use uma visita completa para comparar as propostas',
      paragraphs: [
        'Imagine uma prestadora de manutenção que atende duas unidades do mesmo cliente. Na visita ilustrativa, a ordem exige identificar o equipamento, documentar o estado inicial, registrar a peça substituída e anexar o resultado da inspeção. O técnico começa conectado e perde rede durante o trabalho. Peça que o fornecedor mostre onde as evidências ficam e qual mensagem é exibida a quem espera a conclusão na central.',
        'A foto de etiqueta vem de um ativo adjacente e o resultado da inspeção aparece cortado. A ferramenta deve sugerir revisão e mostrar motivos distintos. Em seguida, corrija a etiqueta, mas mantenha a medição sem unidade. Verifique que a ordem não avança apenas porque o primeiro problema foi resolvido. A proposta precisa indicar que parte foi aceita, o que falta e se o técnico pode retornar com a mesma referência para complementar.',
        'Inclua uma peça antiga fotografada como se fosse a nova. É possível que a imagem mostre um componente legítimo e ainda não prove em que etapa foi registrado. Peça que a solução indique o que consegue observar e quando precisa da sequência ou de outra evidência. Para decisões de cobertura e segurança, defina quem avalia. O teste deve verificar a capacidade de encaminhar incerteza, inclusive se a foto estava nítida e tem aparência semelhante à esperada.',
        'Finalize com o revisor autorizando a etapa prevista e o sistema enviando o estado para a ordem. Simule uma confirmação perdida depois de gravar e confirme que o reenvio não gera outro fechamento. Peça a uma pessoa de supervisão que encontre o trecho usado, a decisão e a data sem depender de explicar o contexto verbalmente. Compare os mesmos eventos em todas as propostas e indique quando um passo foi assistido.',
      ],
    },
    {
      heading: 'Defina o que muda no sistema de ordens depois da análise',
      paragraphs: [
        'Monte um mapa por campo: sistema de origem, dado da IA, valor confirmado e destino. O aplicativo pode guardar imagem, tipo e origem. A automação pode sugerir serial, medição ou qualidade. A revisão humana pode autorizar uma correção ou marcar a necessidade de voltar ao local. O ERP ou sistema de ordens deve receber o estado previsto e uma referência. Escolha como reparar uma associação indevida sem replicar documentos em várias ferramentas.',
        'Separe a análise de foto, o encerramento de ordem e o lançamento financeiro. Um registro completo pode permitir enviar para aprovação sem liberar faturamento por si só. Se a empresa quer automatizar apenas a fila, a proposta deve informar que efeitos continuam manuais. Se a primeira fase precisa mudar o estado da ordem, teste permissões e condições. Inclua uma imagem aprovada com outra exigência ainda pendente para comprovar que o fluxo não passa cedo demais.',
        'Teste identificadores repetidos e transferência de ordem. Uma visita pode ter várias evidências de um mesmo tipo e uma foto pode chegar mais de uma vez depois de interrupção. Preserve referência de cada captura e decisão. Reenviar só para recuperar confirmação não pode apagar uma revisão já feita. Se a ordem mudou de técnico, mostre quem continua responsável por fotos anteriores e que novo acesso é concedido. A proposta deve registrar eventos e revisões sem confundí-los.',
        'Defina o que fazer quando a interface de destino recusa a atualização. Se houver um cadastro de ativo em revisão, a ordem talvez deva permanecer aberta. Mostre quem corrige e quais efeitos já ocorreram. Se a resposta se perdeu depois de gravar, consulte a mesma referência antes de repetir. Faça um roteiro de recuperação com o sistema real de teste. O aceite precisa conferir o estado na origem e no destino, inclusive quando a equipe completa uma parte manualmente.',
      ],
    },
    {
      heading: 'Defina acesso, retenção e recuperação de evidências',
      paragraphs: [
        'Escolha quem consegue ver imagens originais, textos extraídos e registros de revisão. O supervisor pode precisar conferir uma placa, enquanto o financeiro pode só precisar de confirmação. Uma oficina externa pode acessar exclusivamente casos atribuídos. Faça um teste com dois clientes e confira imagens, histórico, exportação e endereços diretos. A proposta deve mostrar o que acontece se um atendimento é transferido ou se o prestador deixa de participar.',
        'Confirme o fluxo dos arquivos usados na análise. Indique onde passam, se o fornecedor guarda cópias e que dados entram em mensagens de erro e logs. Use amostras saneadas para demonstração sempre que preservem o que precisa ser observado. Se houver necessidade de fotos da operação, a equipe responsável deve confirmar ambiente, acesso e prazo. Em orçamento, explique quais passos são necessários para proteger informações de clientes e de locais de atendimento.',
        'Defina como substituir evidência sem perder a decisão original. Uma imagem pode ser anexada à ordem errada e exigir correção. Outra pode ser retida a pedido da operação. O sistema deve indicar qual evidência sustenta o resultado vigente e a razão de uma alteração. Peça que a equipe encontre e corrija um caso sob a política aplicável. A sustentação precisa prever como tratar um erro sem abrir acesso a toda a base.',
        'Planeje continuidade se trocar de fornecedor ou de ferramenta de análise. A empresa pode precisar exportar metadados, referências e decisões e manter acesso ao arquivo pela fonte autorizada. Peça uma amostra de exportação e avalie quais dados são necessários para explicar uma ordem antiga. Defina quem consegue consultar o histórico e onde o suporte encontrará evidência se o sistema externo deixar de estar disponível. Esse trabalho pertence à comparação de custos.',
      ],
    },
    {
      heading: 'Como comparar o investimento em análise e trabalho humano',
      paragraphs: [
        'Informe ordens por mês, evidências por tipo, aparelhos e locais, além do sistema de destino. Separe custos de captura, leitura, revisão, integração, configuração de regras, calibração e suporte. Uma proposta pode cobrar por foto analisada. Outra pode cobrar por documento ou pacote, conforme a tecnologia. Compare com o mesmo volume, incluindo reenvios e testes. Acrescente tempo de quem aprova, corrige e acompanha exceções.',
        'Considere um cenário hipotético com 400 ordens mensais e cinco minutos de conferência média. A carga atual seria de aproximadamente 33 horas e 20 minutos. Se 250 ordens passarem por revisão breve de um minuto e 150 continuarem com cinco minutos, a conferência estimada fica em 16 horas e 40 minutos. Ainda é preciso somar amostragem, correções, suporte e efeitos sobre retorno a campo. Use a conta para comparar hipóteses, sem tratá-la como resultado do piloto.',
        'Peça uma estimativa de incluir outras famílias, técnicos e locais. Uma foto de medidor com outro visor pode exigir luz, enquadramento ou amostras diferentes. Um novo serviço pode pedir outro conjunto de provas. Compare o custo de configurar e validar sem comprometer o caso anterior. Identifique mudanças que a empresa pode ajustar, como instruções de captura, e mudanças que dependem do fornecedor. Isso mostra quanto vale expandir depois de provar a primeira entrega.',
        'A fase de descoberta deve indicar exemplos aceitos, falhas, teste de integração e limitações do método. Se a ferramenta sugerida só funciona com rede, confirme o que o técnico consegue fazer offline. Se não há referência adequada entre imagem e ordem, talvez seja preciso corrigir o formulário antes de analisar. Peça opções estimadas com critérios claros. Assim o orçamento considera trabalho necessário para preparar a evidência, além da execução do modelo.',
      ],
    },
    {
      heading: 'Homologue o resultado com supervisão, técnicos e sistema de destino',
      paragraphs: [
        'Antes da demonstração, defina o conjunto de fotos e as saídas esperadas. Inclua evidência boa, etiqueta semelhante de outro ativo, imagem cortada, envio interrompido e ordem com uma etapa faltando. Registre o que deve ser aceito, encaminhado ou recusado e verifique o que chega à central. Inclua testes de exibição em celular e de acesso por papel. Uma classificação correta só é útil se chega junto do dado que o revisor precisa conferir.',
        'No piloto, meça tempo de captura, taxa de novo envio, precisão em campos críticos, proporção de casos que exigem revisão e falsos aceites observados. Compare por serviço, aparelho e ambiente. Um cenário com menos alertas pode parecer mais eficiente e ainda aceitar imagens inadequadas. Revise uma amostra do que passou automaticamente para detectar essa diferença. Registre quem confere a qualidade e quais situações devem permanecer com revisão humana.',
        'Teste a contingência de processamento. Se o serviço de análise ficar indisponível, a equipe pode continuar capturando e enviar para conferência manual. Defina como evita que a mesma evidência avance pela fila manual e pela automação quando voltar. Peça auditoria de decisões e recuperação de notificações. O objetivo é manter as ordens rastreáveis sem prometer resposta imediata quando alguma dependência está pendente.',
        'Revise o piloto com pessoas que capturam, conferem e usam a conclusão. Leve caso aceito, evidência recusada e ordem que precisou voltar ao técnico. Decida o que ajustar e qual resultado precisa ser comprovado antes de ampliar. Se a automação ainda não distingue dois formatos comuns ou não registra a confirmação no destino, trate a falha antes de incluir outro serviço. Compare novas situações com a amostra original e documente a diferença.',
      ],
      bullets: [
        'Etiqueta legível do ativo errado encaminhada para revisão.',
        'Medição cortada ou com unidade ambígua.',
        'Evidência offline sincronizada sem duplicação.',
        'Ordem pendente apesar de uma foto válida.',
        'Decisão confirmada com permissão e referência no destino.',
      ],
    },
    {
      heading: 'Prepare o briefing para a primeira conversa',
      paragraphs: [
        'Leve três ordens saneadas: uma aprovada, uma que voltou por foto inadequada e outra que teve divergência de ativo ou etapa. Informe o que o técnico usa para capturar, quanto tempo costuma ficar offline e quem autoriza a conclusão. Mostre onde os anexos estão e que evidência a equipe precisa consultar mais tarde. Com esses dados, o fornecedor consegue propor uma etapa que tenha objetivo, dados e critérios visíveis.',
        'Peça que o orçamento diga que decisão pode ser automatizada e que controles continuarão com o supervisor. Combine como medir trabalho manual, qualidade e exceções. Se algum documento ou regra ainda não foi validado, indique o que precisa entrar na descoberta. A proposta deve conservar a diferença entre reconhecer informação, encaminhar evidência e liberar uma etapa. Esse recorte facilita comparar custo, risco de erro e capacidade de sustentar o projeto.',
      ],
    },
  ],
  faqs: [
    { question: 'A IA consegue confirmar que um serviço foi realizado só pela foto?', answer: 'Uma foto pode provar um aspecto observável, como uma etiqueta ou componente. A confirmação depende dos critérios, das outras evidências e da autoridade definida para cada ordem.' },
    { question: 'Quais fotos devo separar para contratar o piloto?', answer: 'Use exemplos reais saneados de vários técnicos, aparelhos e condições, com casos legíveis, incompletos e incorretos. Reserve parte que o fornecedor só verá no teste final.' },
    { question: 'O que deve constar no orçamento?', answer: 'Inclua captura, leitura, revisão, integração, validação offline quando necessária, manutenção de regras e suporte. Compare o custo total e as decisões que ainda exigem uma pessoa.' },
  ],
  cta: {
    title: 'Quer testar IA na conferência das suas ordens de serviço?',
    text: 'Conte como os técnicos registram evidências e quais decisões dependem delas. A Tironi Tech pode ajudar a delimitar o piloto, a amostra e os testes antes da integração.',
    label: 'Apresentar meu fluxo de evidências',
  },
  sources: [
    { label: 'Microsoft Dynamics 365 Field Service — ordens e anexos no aplicativo móvel', url: 'https://learn.microsoft.com/en-us/dynamics365/field-service/mobile/get-work-done-mobile-app' },
  ],
};
