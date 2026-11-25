export const renewalBilling = {
  slug: 'integracao-crm-financeiro-cobranca-renovacoes',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Compare propostas de integração para conciliar renovações do CRM com cobranças, ajustes de vigência, pagamentos e registros no ERP.',
  keywords: ['integração para conciliar renovações do CRM com cobranças', 'integração CRM e cobrança recorrente', 'conciliação de renovações no ERP', 'integração financeira de contratos recorrentes'],
  emphasis: 'integração para conciliar renovações do CRM com cobranças',
  intro: 'Para contratar uma integração para conciliar renovações do CRM com cobranças, defina o que comprova o aceite, como a nova vigência chega ao financeiro e qual fonte confirma cada cobrança. Peça um teste com mudança de plano, pagamento atrasado e devolução de crédito. O projeto deve mostrar qual contrato está vigente, qual valor foi emitido e o que ainda depende de conferência.',
  takeaways: [
    'Use referências distintas para contrato, renovação, cobrança e pagamento.',
    'Compare propostas com alteração de vigência, reajuste e pagamento que chega fora de ordem.',
    'Valide a recuperação de falhas e a conciliação por contrato e período no ERP.',
  ],
  visual: {
    title: 'Do aceite da renovação à conferência da cobrança',
    labels: ['CRM registra a versão aprovada', 'Financeiro valida vigência e agenda de cobrança', 'ERP ou provedor confirma emissão e pagamento', 'Operação reconcilia diferenças e comunica o estado'],
    caption: 'Aceitar a renovação pode autorizar uma cobrança, mas a emissão e a confirmação financeira precisam de evidências próprias.',
  },
  sections: [
    {
      heading: 'Escolha qual etapa da renovação precisa ganhar controle',
      paragraphs: [
        'Abra três renovações recentes no CRM e reconstrua a passagem para o financeiro. Busque o momento em que alguém considerou a negociação aceita, os dados usados para emitir a cobrança e a referência que aparece na confirmação. Numa empresa de serviços, o comercial pode renovar com as mesmas condições e o financeiro já ter um calendário programado. Em outro caso, o cliente troca de plano. Essas situações devem seguir regras que a proposta consiga distinguir.',
        'Separe falta de visibilidade de erro de execução. Às vezes a cobrança foi emitida corretamente e o CRM só não recebeu a informação. Em outras, uma mudança de data ou quantidade nunca chegou ao financeiro. Um painel de consulta ajuda no primeiro cenário. O segundo exige transferência de condições aprovadas e validação antes de emitir. Dê aos fornecedores o problema e as evidências que a equipe consegue observar, em vez de pedir sincronização de todos os dados dos sistemas.',
        'Defina o que faz parte do piloto: leitura de renovações aprovadas, atualização de plano, emissão, acompanhamento da liquidação ou lançamento financeiro. A primeira fase pode confirmar cobranças existentes e apontar divergências sem alterar como são emitidas. Outra operação pode precisar mesmo de criar instruções a partir do aceite. O escopo depende da autoridade que a empresa quer delegar ao fluxo e do custo de recuperar um erro.',
        'Escolha como medir. Conte renovações aceitas sem cobrança, cobranças que saíram com valor inesperado, tempo até corrigir diferenças e perguntas que o financeiro recebe do comercial. Use períodos comparáveis por tipo de contrato. Uma integração pode melhorar visibilidade antes de reduzir ocorrências registradas, pois torna problemas existentes rastreáveis. Combine como o piloto vai avaliar trabalho que permanece com a equipe.',
      ],
    },
    {
      heading: 'Modele contrato, renovação e cobrança com referências próprias',
      paragraphs: [
        'Um contrato conserva a relação comercial ao longo de vigências. Uma renovação representa condições aprovadas para um próximo período. A cobrança pode ser emitida em parcela única ou várias, e cada confirmação financeira pode ter uma referência distinta. Peça uma tabela com essas chaves, sua origem e o que permanece quando há revisão. Um número de oportunidade do CRM ajuda a localizar, mas não pode substituir referências necessárias para distinguir parcelas ou vários contratos da mesma conta.',
        'Defina o que significa aceite. Um vendedor pode mover o negócio para uma etapa, receber assinatura ou registrar aprovação interna, conforme a política. Se houver condições pendentes, descreva o que impede emissão. Um contrato de serviços pode exigir validação de empresa pagadora e data de início. A integração deve saber qual versão chega ao financeiro e quem pode modificá-la. Em teste, faça uma aprovação que fica incompleta e confirme que o sistema mantém a pendência.',
        'Inclua organização, empresa de faturamento e pessoa de contato como dados separados. Uma conta comercial pode reunir mais de uma empresa pagadora. Uma renovação pode mudar o pagador sem trocar a conta ou o responsável pelo uso. Se o ERP exige um código específico, defina quem mantém o vínculo e como tratar cadastro inativo. Peça um cenário em que o CRM e o ERP usam nomes diferentes para a mesma entidade, mas a cobrança precisa sair para o registro correto.',
        'Teste duas renovações de contratos iguais em um mesmo grupo. Se a integração deduplicar por cliente, plano e valor, pode impedir uma cobrança legítima. Use a referência da renovação aprovada e uma chave por parcela ou instrução. Mantenha o mesmo vínculo ao repetir uma tentativa. Se a aprovação comercial mudou antes de emitir, preserve a versão nova e mostre o destino da anterior. O operador precisa identificar se houve revisão do mesmo contrato ou uma contratação adicional.',
      ],
    },
    {
      heading: 'Especifique vigência, reajuste e mudança de plano',
      paragraphs: [
        'Descreva data de início, fim, vencimento e período a que a cobrança se refere. Um CRM pode mostrar a renovação como ganha em novembro e a nova vigência começar em janeiro. O ERP pode emitir em dezembro conforme o calendário acordado. Os estados precisam refletir o que cada data significa. Em homologação, inclua contrato com início futuro e veja se a oferta aparece como renovada, enquanto a condição anterior ainda vale para a operação atual.',
        'Mostre a regra de reajuste com exemplos revisados pelo financeiro. Um contrato pode renovar com valor fixo autorizado ou com atualização validada em outra etapa. Determine se a integração recebe o preço aprovado ou calcula a partir de componentes. Se calcular, especifique origem, vigência, arredondamento e quem confirma. O orçamento precisa separar uma transformação de dados de uma nova responsabilidade de precificação. Um valor exibido no CRM pode não bastar para provar a condição final.',
        'Inclua uma mudança de plano no meio do ciclo. O cliente pode pedir mais licenças, reduzir escopo ou trocar periodicidade. Dependendo da política, a diferença pode entrar no próximo ciclo, gerar ajuste proporcional ou exigir nova aprovação. Faça os fornecedores mostrarem versões, datas e como o valor chega à cobrança. A solução precisa informar quais condições já foram aplicadas e quais aguardam confirmação, sem recobrar o período que o cliente já pagou.',
        'Teste uma data que muda depois de aprovar. A renovação pode precisar aguardar a conclusão de um projeto ou uma habilitação. Defina quem autoriza mudar vencimento e se a cobrança já emitida deve ser mantida, ajustada ou cancelada conforme o procedimento financeiro. Preserve o compromisso anterior e o motivo da revisão. A proposta precisa permitir explicar a sequência a alguém que não participou da negociação, inclusive quando há um aditivo.',
      ],
    },
    {
      heading: 'Separe cobrança criada, vencida, paga e conciliada',
      paragraphs: [
        'Determine a fonte de cada estado. O CRM pode saber que houve aceite. O ERP pode registrar a cobrança ou o vencimento. Um provedor pode confirmar pagamento e ajustar saldos mais tarde. Se a solução recebe eventos, conserve as referências da fonte e a hora do fato. A documentação da Stripe para assinaturas exemplifica notificações de atividades como eventos de fatura e pagamento, que podem chegar em etapas diferentes. Peça exemplos do provedor que a empresa usa antes de fechar o escopo.',
        'Defina o que aparece para vendas quando uma cobrança existe e o pagamento ainda não foi encontrado. Um status de pendência pode refletir o vencimento em aberto, uma falha de pagamento ou uma confirmação ainda em processamento. A equipe precisa enxergar referência e próxima ação. Se o financeiro tiver uma confirmação por outra fonte, o fluxo deve indicar o procedimento de conferência, sem mudar o estado com base apenas em mensagem informal.',
        'Inclua pagamento parcial ou agrupado se o seu processo permite. Uma transferência pode quitar dois documentos, enquanto outro contrato recebe parte do valor e mantém saldo. Relacione pagamento com as cobranças e conserve o critério de distribuição. Se os dados não permitem associação segura, envie para revisão. Peça um teste em que duas cobranças tenham o mesmo valor no mesmo dia. A conciliação deve evitar adivinhar pela correspondência numérica.',
        'Teste retorno fora de ordem. Uma notificação de emissão pode chegar depois de uma confirmação de pagamento. O sistema deve registrar ambos sem voltar a exibir indevidamente estado de pagamento pendente. Em caso de revisão legítima, como estorno, preserve o evento original e o novo efeito. Especifique o que aparece no CRM e quais decisões continuam com o financeiro. O objetivo é preservar fatos e orientar ação, não reproduzir toda transição do provedor sem interpretação.',
      ],
    },
    {
      heading: 'Projete exceções para atraso, crédito e cancelamento',
      paragraphs: [
        'Leve exemplos de pagamento atrasado. Uma cobrança vencida não determina sozinha a decisão sobre atendimento ou vigência, que depende do contrato e da política da empresa. Defina quem administra as ações, o que o CRM precisa mostrar e que passos podem ser automatizados. Peça teste para atraso com nova data negociada e para confirmação que chega após um aviso. As notificações devem seguir a informação vigente para evitar cobrança indevida.',
        'Inclua crédito aplicado a nova cobrança. Se o cliente teve um ajuste de R$ 200, o contrato pode continuar com valor nominal diferente do total a pagar naquele ciclo. O ERP precisa relacionar crédito, cobrança e período. Na demonstração, peça que o integrador mostre onde o desconto normal da negociação difere de um saldo aplicado. A equipe deve conseguir explicar ao cliente e conferir que o crédito só foi usado nos limites autorizados.',
        'Teste uma renovação desfeita depois de emitir. Pode haver cancelamento de cobrança, estorno de valor já recebido ou outra ação definida pelo financeiro. Diferencie desses casos uma renovação que deixa de acontecer antes de faturar. Estabeleça que dado o CRM recebe e quando encerra a vigência futura. O histórico deve conservar a decisão comercial e a movimentação financeira com referências distintas. A proposta precisa indicar o procedimento quando uma integração aceita leitura, mas não executa correção.',
        'Planeje uma revisão após o corte. Um ajuste pode chegar em outro período e não deve reescrever sem trilha um valor já aprovado. Preserve a competência da origem e o período de registro do efeito. Defina quem pode emitir ou associar a diferença e como ela aparece nos relatórios. Inclua equipe de vendas e financeiro na demonstração, para conferir se ambos explicam o que ocorreu com o contexto permitido.',
      ],
    },
    {
      heading: 'Defina a troca de dados entre CRM, ERP e provedor',
      paragraphs: [
        'Monte uma tabela que mostre quem cria, altera e consulta cada dado: aceite, vigência, serviço, valor, empresa pagadora, cobrança, pagamento e ajuste. Um CRM pode registrar a condição aprovada e consultar o resultado, enquanto o ERP confirma a criação da cobrança. Se houver um provedor externo, faça a referência seguir até o pagamento e voltar ao financeiro. A proposta deve indicar de onde vem cada estado e se a interface precisa conservar uma cópia.',
        'Defina quais ações são automáticas. Uma renovação aprovada pode abrir uma tarefa de conferência em vez de emitir imediatamente. Um evento de pagamento pode atualizar o CRM, mas não alterar termos do contrato. Peça um teste com cadastro de cobrança inválido e outro com renovação aguardando assinatura. O sistema precisa reter cada caso na fase apropriada e indicar quem pode resolver. O orçamento muda conforme a quantidade de regras que a automação recebe.',
        'Inclua integração parcial. Um ERP pode aceitar o lançamento de cobrança e rejeitar o vínculo com uma filial ou projeto. Um provedor pode gerar uma parcela e informar que outra precisa de revisão. A solução deve conservar cada efeito confirmado e apresentar o que está faltando. Não faça um novo lote para corrigir uma linha sem considerar as anteriores. Peça uma demonstração e verifique as referências do CRM, do ERP e da interface financeira.',
        'Estabeleça o procedimento quando um sistema não estiver disponível. Se o financeiro emite manualmente depois de um corte, defina onde guarda a referência da renovação. Antes de retomar, a integração deve conferir se a cobrança já apareceu. Se o CRM estiver indisponível, indique que atualizações esperam retorno e como monitorar a fila. Um incidente não deve exigir reconstruir todas as renovações do mês. O fornecedor deve mostrar o caminho de recuperação em ambiente de teste.',
      ],
    },
    {
      heading: 'Recupere reenvios sem cobrar o mesmo período duas vezes',
      paragraphs: [
        'Escolha referências que identifiquem renovação, versão e competência ou parcela. Uma mesma requisição pode ser entregue repetidamente sem criar duas cobranças. A empresa também pode exigir duas parcelas legítimas do mesmo valor. Teste as duas situações lado a lado. Não use apenas cliente, valor ou data para impedir repetição, porque isso pode esconder operações independentes. O roteiro deve mostrar o que já foi confirmado e em que momento se decide criar outro registro.',
        'Simule que o ERP ou o provedor aceitou a instrução, mas o conector perdeu o retorno. A solicitação deve permanecer com estado incerto até localizar a operação pela referência ou concluir revisão. Enquanto isso, o CRM não deve indicar que está tudo pronto para reemitir. Quando a consulta confirmar, registre o identificador gerado e continue o fluxo. Peça ao fornecedor para demonstrar o mesmo cenário quando a gravação realmente não aconteceu.',
        'Diferencie repetição de mensagem e nova versão da negociação. Um cliente pode mudar o escopo antes de emitir. A empresa pode invalidar a versão anterior e liberar outra conforme a política. Se a cobrança antiga já existe, a revisão deve seguir o procedimento de ajuste autorizado. A solução precisa mostrar qual versão chegou ao financeiro e por que houve outra tentativa. Verifique se a alteração fica visível nos relatórios sem somar todos os valores como se fossem devidos.',
        'Planeje o reprocessamento de uma faixa de datas. Um lote de eventos pode faltar após falha ou mudança de interface. Prefira uma rotina que recupere o estado e compare registros antes de enviar ações. Em homologação, peça que a equipe processe de novo duas renovações, uma já concluída e outra pendente. O sistema precisa preservar a primeira e resolver só a etapa necessária da segunda. Confirme a divisão de permissões para simular e executar.',
      ],
    },
    {
      heading: 'Use um cenário de renovação com reajuste e crédito para contratar',
      paragraphs: [
        'Considere uma empresa que presta serviços com contrato anual e cobrança mensal. No exemplo ilustrativo, o cliente aceita renovar a partir de janeiro, com aumento de escopo e valor de R$ 2.200 por mês. A cobrança anterior de R$ 2.000 continua vinculada à vigência até dezembro. A proposta deve mostrar a versão aprovada, o início futuro e o vínculo com a primeira cobrança. O atendimento precisa ver qual condição vale antes e depois da virada.',
        'Introduza um crédito de R$ 200 aprovado para o primeiro ciclo. O valor mensal contratado permanece em R$ 2.200. A primeira cobrança pode ficar em R$ 2.000 conforme a regra do exemplo. Peça que cada fornecedor preserve a origem do ajuste e mostre como o financeiro encontra a evidência. Quando o segundo ciclo começar, o crédito não deve ser aplicado de novo. Em seguida, altere a data de vencimento para testar versionamento e aprovação da condição.',
        'Simule que o evento de pagamento chega com atraso e antes de a resposta de emissão aparecer no CRM. Os sistemas precisam ligar o resultado pelas referências corretas e manter os horários. Receber uma mensagem antiga de cobrança emitida não deve reverter o estado confirmado. Se houver divergência, peça que a equipe encontre a parcela, observe a origem e explique o que ainda está pendente. Use os mesmos dados para comparar propostas.',
        'Por fim, apresente uma segunda renovação para a mesma empresa, com datas ou condição parecidas. Reenvie o evento da primeira enquanto importa a segunda. A integração deve continuar reconhecendo as duas operações legítimas e os efeitos repetidos. No fechamento, peça um relatório por contrato e competência que consiga mostrar a vigência, as cobranças, o crédito e a confirmação. Faça uma pessoa de vendas consultar o CRM sem entrar no relatório financeiro detalhado.',
      ],
    },
    {
      heading: 'Monte a fila de divergências e a conferência de fechamento',
      paragraphs: [
        'Escolha diferenças que a operação precisa encontrar. Pode haver renovação aprovada sem cobrança, cobrança sem aceite vinculado, cliente incorreto, valor divergente ou pagamento sem associação. A fila deve apresentar prioridade, idade, dado esperado, dado observado e responsável. Registre qual fonte precisa ser corrigida. Uma situação em que o pagamento ainda está em processamento tem outro tratamento que uma cobrança duplicada para a mesma parcela.',
        'Defina quem pode resolver cada tipo. Vendas pode ajustar referência ou revisar a versão aprovada, mas não necessariamente confirmar recebimento. O financeiro confere documento e pagamento. O suporte técnico verifica falha de conexão ou mapeamento. Separe operações de consulta, reenvio e correção. Inclua teste com um perfil que tenta emitir ou alterar condição sem permissão. A auditoria deve poder identificar quem resolveu e que evidência usou.',
        'Ao fechar, compare renovações aceitas, cobranças previstas, documentos emitidos, valores ajustados e estados de pagamento. Faça cortes por empresa e período. Uma soma geral pode esconder uma cobrança de uma conta que compensou a ausência de outra de valor igual. Exija evidência por referência e regra para os casos que podem permanecer em acompanhamento. A lista deve indicar a data de cada evento para evitar que atraso legítimo pareça omissão.',
        'Inclua dados e permissões no relatório. O comercial precisa de estado e próximo passo, enquanto dados bancários ou detalhes de cobrança podem ficar restritos. O sistema que envia alertas deve usar a quantidade de informação necessária para a tarefa. Peça um teste com duas contas e perfis diferentes, também em exportações. Quando alguém troca de carteira, confira o acesso atual e a preservação do histórico das decisões já feitas.',
      ],
    },
    {
      heading: 'Compare orçamentos com a mesma regra operacional',
      paragraphs: [
        'Informe quantidade de contratos, empresas, moedas se aplicável, periodicidades, ferramentas e volume de mudanças contratuais. Separe descoberta, conector, regras, fila, relatórios, implantação e operação assistida. Uma proposta pode apenas consultar cobranças e atualizar o CRM. Outra pode preparar ou emitir ao receber um aceite. Compare usando o mesmo exemplo de renovação, crédito e reenvio. Indique o trabalho que continuará com vendas e com o financeiro.',
        'Peça prova de leitura e criação antes de fixar prazo. O CRM pode oferecer evento de mudança de etapa sem disponibilizar a versão aprovada. O ERP pode exigir vínculo com uma empresa ou permitir criação só em janela específica. O provedor pode expor estado de cobrança sem indicar o contrato comercial. A descoberta deve entregar o mapa das referências, o menor teste válido e as dependências. Se faltar dado, peça caminhos alternativos e esforço residual.',
        'Calcule a sustentação considerando ajustes e suporte mensal. A empresa pode trocar provedor, criar planos ou alterar calendário. Pergunte quais parâmetros são administráveis e que mudanças exigem desenvolvimento. Peça como a aplicação guarda regras de vigência e como um ajuste recebe teste antes de entrar em uso. Também inclua o trabalho para investigar divergências depois de alterações externas. O orçamento só é comparável quando as premissas de manutenção aparecem.',
        'Exija exportação de vínculos, versões, estados e motivos de ajuste. Caso a empresa mude de CRM ou integrador, precisa conseguir identificar contratos vigentes, cobranças vinculadas e casos em aberto. Verifique formatos e permissões. Um histórico de eventos bruto pode não explicar a decisão se faltam referências entre sistemas. Peça uma amostra de exportação que a equipe consiga consultar sem usar credenciais do fornecedor.',
      ],
    },
    {
      heading: 'Homologue um ciclo fechado e acompanhe a primeira carteira',
      paragraphs: [
        'Escolha contratos com as variações mais relevantes e simule um ciclo completo. Inclua aprovação em data anterior à vigência, mudança de empresa pagadora e primeira cobrança com ajuste. Em cada caso, defina valores e referências esperados e quem os confirma. Teste reenvio e resultado incerto. Abra os registros em cada sistema para verificar efeito. O aceite deve incorporar o trabalho da equipe que usa o resultado, e não só o retorno da interface.',
        'No piloto, acompanhe tempo do aceite à confirmação, diferenças entre valor previsto e emitido, renovações sem vínculo e casos que exigem conferência manual. Num cenário hipotético, reduzir o tempo de dois dias para um pode ajudar se a carga e o tipo de contrato forem semelhantes. Meça também se a equipe passou a detectar ajustes que antes não via. Os resultados precisam separar atraso operacional, regra em revisão e problema de integração.',
        'Teste uma virada para processo manual, seguida de recuperação. A empresa deve saber como parar novas emissões sem perder os registros em processamento, o que preencher na contingência e como reconciliar antes de reativar. Se parte das cobranças foi criada por outro canal, associe a referência em vez de repetir. Inclua quem autoriza retomar e que evidência mostra que a fila ficou consistente. Esse teste protege o fechamento mesmo em meses de demanda alta.',
        'Reúna vendas, financeiro e TI para avaliar uma renovação bem-sucedida, uma rejeição e um ajuste de período. Cada área deve explicar o que aconteceu a partir do que consegue consultar. Defina o que precisa evoluir antes de ampliar para outra carteira. Um novo grupo pode ter vigências, créditos ou processos de cobrança diferentes. Use os testes já comprovados e acrescente os que refletem as diferenças, para que a expansão tenha cobertura verificável.',
      ],
      bullets: [
        'Aceite registrado com início de vigência futuro.',
        'Crédito aplicado somente à parcela autorizada.',
        'Pagamento recebido antes de uma atualização tardia de cobrança.',
        'Reenvio com referência mantida e sem segunda emissão.',
        'Ajuste posterior explicado no fechamento por contrato.',
      ],
    },
    {
      heading: 'Prepare a primeira conversa para contratar a integração',
      paragraphs: [
        'Leve amostras saneadas de aceite, vigência, documento de cobrança e registro de pagamento. Separe uma renovação recorrente, outra com mudança e uma com pendência de cadastro ou atraso. Informe onde estão os identificadores e quem pode fornecer um ambiente de teste. Diga que resultado a operação quer enxergar primeiro. Esse material ajuda o fornecedor a delimitar descoberta e estimativa sem preencher lacunas por suposição.',
        'Peça que a proposta indique o primeiro fluxo a provar, as interfaces necessárias, o trabalho que fica com a equipe e como tratar uma cobrança que já pode ter sido emitida. Combine quem aprova mudanças de vigência, quem confirma o pagamento e qual dado chega ao CRM. Uma estimativa é mais útil quando separa acompanhar cobranças existentes de passar a emitir com base no CRM. Assim a empresa compara propostas pelo efeito real no processo.',
        'Inclua um mapa simples de integrações que já existem. Alguns clientes podem receber cobranças por uma rotina recorrente enquanto outros dependem de processamento assistido. Se a ferramenta nova passar a emitir, identifique como desligar ou limitar a rotina antiga para o mesmo grupo. Peça um teste de transição com uma renovação já programada. O sistema precisa reconhecer a instrução que existe ou manter o novo fluxo em espera até que a empresa decida como assumir a operação.',
      ],
    },
  ],
  faqs: [
    { question: 'Renovação ganha no CRM pode emitir cobrança automaticamente?', answer: 'Pode, se o evento comprovar a aprovação e a política autorizar. Valide vigência, pagador, valor e referências. Casos com condição pendente devem ficar em revisão.' },
    { question: 'Como conferir cobrança com valor diferente do contrato?', answer: 'Compare a versão aprovada e a competência com a cobrança emitida. Procure crédito, ajuste ou mudança autorizada e vincule a evidência ao valor. Mantenha pendente o que ainda não foi explicado.' },
    { question: 'Como evitar cobrar duas vezes depois de erro de conexão?', answer: 'Mantenha referências estáveis por renovação e parcela. Consulte o resultado antes de repetir e encaminhe casos incertos para revisão. Teste esse cenário antes da implantação.' },
  ],
  cta: {
    title: 'Quer ligar as renovações do CRM ao seu financeiro?',
    text: 'Conte onde sua equipe aprova vigências, emite cobranças e confere pagamentos. A Tironi Tech pode ajudar a delimitar uma primeira integração e os testes de aceite.',
    label: 'Apresentar meu fluxo de renovação',
  },
  sources: [
    { label: 'Stripe Billing — eventos de assinaturas e cobranças', url: 'https://docs.stripe.com/billing/subscriptions/webhooks' },
  ],
};
