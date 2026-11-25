export const freightAudit = {
  slug: 'automatizar-conferencia-frete-contratado',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Compare propostas de automação de conferência de frete com cálculo por contrato, cobranças adicionais, revisão de diferenças e integração ao ERP.',
  keywords: ['automação de conferência de frete e cobrança por contrato', 'conferência de fatura de frete', 'auditoria de frete automatizada', 'conciliação de frete no ERP'],
  emphasis: 'automação de conferência de frete e cobrança por contrato',
  intro: 'Para orçar automação de conferência de frete e cobrança por contrato, leve uma tabela vigente, remessas identificadas e uma fatura com diferenças já investigadas. Peça que o fornecedor calcule o esperado, mostre a origem de cada valor e encaminhe adicionais sem autorização para revisão. A entrega deve separar cálculo, conferência e aprovação do lançamento no ERP.',
  takeaways: [
    'Transforme contrato, tabela e condições adicionais em regras testáveis.',
    'Vincule cada cobrança à remessa, ao período e à evidência aplicável.',
    'Homologue divergências, revisões e reprocessamento antes de automatizar aprovações.',
  ],
  visual: {
    title: 'Da condição contratada à fatura conferida',
    labels: ['Contrato e versão aplicável', 'Remessa e dados de transporte', 'Cálculo esperado comparado com valores cobrados', 'Diferença tratada e resultado confirmado no ERP'],
    caption: 'Uma diferença pode ser legítima, incorreta ou ainda inconclusiva. Preserve a evidência e a decisão antes de autorizar o lançamento.',
  },
  sections: [
    {
      heading: 'Escolha o ponto em que a conferência mais consome tempo',
      paragraphs: [
        'Abra uma fatura recente e acompanhe a conferência desde o recebimento até a aprovação. Algumas equipes perdem tempo convertendo arquivos em planilha. Outras já importam os dados, mas precisam localizar a remessa ou interpretar como o contrato determina tarifa e adicionais. Identifique se o primeiro projeto deve melhorar captura, associação, cálculo, revisão ou integração financeira. Cada trabalho exige acessos e critérios de aceite diferentes.',
        'Separe a previsão de frete usada na venda da apuração contratual. Uma estimativa pode orientar preço e prazo ao comprador, enquanto a conferência depende de serviço realizado, informações de embarque e condições negociadas. O fornecedor deve saber qual valor é a referência oficial para a avaliação. Se houver estimativa no ERP e cobrança do transportador, a diferença entre ambas não basta sozinha para concluir que existe erro.',
        'Defina as modalidades e parceiros do piloto. Uma operação pode trabalhar com entregas por volume, cargas dedicadas e transferência entre filiais. A mesma transportadora pode ter condições diferentes por conta, empresa ou serviço. Escolha um recorte que tenha faturas e remessas identificáveis e exemplos de cobrança fora do previsto. O orçamento pode separar conectores e regras para que a empresa entenda o custo de incluir cada grupo depois.',
        'Meça o trabalho atual. Registre tempo para conferir fatura, quantas linhas exigem busca manual, que valores ficam pendentes e quanto tempo leva para resolver uma dúvida. Uma automação pode encontrar mais diferenças porque melhora a cobertura. Isso não equivale a recuperar todo o valor sinalizado. No piloto, mantenha separados diferença detectada, explicada, contestada e ajustada. Assim a empresa consegue avaliar o benefício com os dados que tem.',
      ],
    },
    {
      heading: 'Modele a versão do contrato com condições que podem ser verificadas',
      paragraphs: [
        'Reúna tabela, anexos, aditivos e acordos excepcionais usados na rotina. Para cada condição, registre a fonte, o serviço, a região, a vigência e a unidade de cálculo. Uma tabela pode usar faixa de peso e outra pode usar valor fixo para certo percurso. As áreas precisam concordar sobre o documento que prevalece quando mais de um se aplica. Sem essa regra, o integrador pode obter números diferentes da conferência manual mesmo lendo todos os dados corretamente.',
        'Defina a data que seleciona a versão. A regra pode consultar saída, coleta, contratação ou outro marco documentado. Uma remessa expedida antes de reajuste e faturada depois é um bom exemplo. Peça que a proposta reproduza as duas vigências. Se uma diferença foi cobrada em outro mês, preserve a data comercial e o período financeiro. A conferência deve deixar claro qual referência foi usada e por que o valor esperado não mudou com uma atualização posterior de tabela.',
        'Inclua preços mínimos, faixas e dependências entre componentes. Uma cobrança pode usar maior valor entre taxa mínima e resultado por faixa. Outra pode aplicar adicional depois do mínimo. Faça casos no limite de peso e na troca de região. Especifique arredondamento, ordem e campos que permitem identificar a regra. Em vez de descrever a tabela como uma fórmula genérica, mostre o passo a passo esperado para uma remessa com condições sobrepostas.',
        'Defina quem mantém a tabela e como aprova nova versão. Uma equipe pode importar um arquivo revisado, conferir exemplos e publicar com vigência futura. Outra pode exigir implantação quando muda a lógica. Peça demonstração de mudança de faixa e recuperação de uma leitura anterior. Se um parâmetro incorreto for publicado, deve ser possível encontrar quais conferências usaram aquela versão e decidir o que recalcular. Esse trabalho precisa aparecer na sustentação.',
      ],
    },
    {
      heading: 'Confirme peso, cubagem, origem e destino com exemplos',
      paragraphs: [
        'A faixa usada depende de como o contrato define o peso cobrável. Quando houver cubagem, documente unidades, dimensões, fator aplicável e o momento de arredondar. Algumas modalidades podem usar critérios distintos para outra rota ou embalagem. Dê exemplos conhecidos à equipe de contratação. Um resultado que só coincide numa caixa comum não prova que a integração lida com volumes de dimensões diferentes ou que a origem do peso está correta.',
        'Num cenário hipotético, o cadastro registra peso físico de 18 kg. A regra do serviço, usando as dimensões aceitas, produz 22 kg de referência volumétrica. Se o contrato de exemplo estabelece usar o maior dos dois, a faixa de cálculo parte de 22 kg. Peça que o integrador mostre valor, unidade, fonte e arredondamento. Se a transportadora medir 25 kg, transforme a diferença em item verificável, em vez de trocar o dado esperado sem guardar a evidência original.',
        'Mapeie local de origem e destino. Filiais com endereços próximos podem participar de tabelas diferentes. Uma rota pode depender de faixa de CEP, unidade contratante ou local efetivo de coleta. Teste uma remessa que muda de depósito depois do pedido. O ERP deve preservar origem confirmada e a integração deve indicar por que aplicou determinada condição. Nomes de cidades e descrições informais não substituem uma correspondência de cadastro aprovada.',
        'Inclua pedidos fracionados. Uma remessa pode ter mais de um volume e seguir no mesmo transporte. Outra venda pode ser expedida em duas remessas que não compartilham cálculo. Decida se a tarifa incide por volume, remessa, carga ou outra unidade contratada. Peça uma prova com dois volumes pequenos e uma quantidade total semelhante à de um volume grande. O resultado pode mudar por causa de mínimos ou faixas definidos no contrato.',
      ],
    },
    {
      heading: 'Trate adicionais como itens com gatilho e evidência',
      paragraphs: [
        'Reúna os componentes extras usados na operação e registre as condições para cada um. Uma taxa pode depender do destino. Uma reentrega pode exigir tentativa comprovada. Uma espera pode ter prazo de tolerância e autorização. O projeto deve mostrar valor, base, regra e evidência suficiente antes de considerar a cobrança explicada. Evite transformar toda linha não reconhecida em tarifa genérica. A classificação determina quem conduz a revisão.',
        'Num exemplo ilustrativo, o cálculo base é de R$ 160 e o contrato permite R$ 30 de coleta especial se for autorizada. A fatura registra R$ 190. Se houver autorização ligada à remessa, a diferença pode ser explicada. Sem ela, deve ficar pendente mesmo quando o adicional tem o valor correto. Peça que o fornecedor mostre onde o operador encontra a prova e como informa que o documento ainda não chegou.',
        'Inclua cobrança duplicada e cobrança com nome diferente. Dois relatórios podem representar o mesmo adicional com abreviação ou código antigo. Defina a tabela de equivalência e as chaves que comprovam uma nova ocorrência. Uma nova tentativa validada pode gerar outro custo conforme o contrato. Um reenvio do mesmo registro não pode somar outro valor. Teste ambos e confira a relação com a remessa e com os documentos que o financeiro usa.',
        'Escolha quem pode validar uma exceção. Logística pode confirmar que a espera aconteceu. Compras pode verificar se o adicional está previsto. Financeiro pode aprovar o valor a lançar. Separe os papéis conforme a política da empresa e registre valores anteriores, novos e motivos. Peça que o fornecedor demonstre autorização parcial, disputa e ajuste posterior, preservando o que foi cobrado originalmente e o que a empresa reconheceu.',
      ],
    },
    {
      heading: 'Separe leitura da fatura e decisão contratual',
      paragraphs: [
        'Comece pelos formatos que realmente chegam. O parceiro pode fornecer arquivo estruturado, exportação de portal ou PDF. Use os dados estruturados quando trouxerem a referência e o detalhe necessários. Nos PDFs, teste cabeçalho, continuação de tabela e adicionais agrupados. A extração precisa preservar linha, valor e origem para a equipe conferir. Uma leitura bem-sucedida não garante que a cobrança pertença ao contrato ou tenha evidência suficiente.',
        'Defina o que deve ir à revisão. Identificador pouco legível, total incompatível e fatura com itens repetidos são casos diferentes. O operador precisa visualizar trecho, valor capturado e vínculo sugerido. Se o sistema não consegue distinguir um total de rodapé e uma linha cobrada, mantenha a revisão antes de lançar. Em uma comparação de propostas, use documentos com variação real de formato e não apenas exemplos preenchidos para passar no teste.',
        'Decida como registrar correções de leitura. Ajustar uma referência numa fatura não deve alterar de forma automática a regra de todas as importações. Registre autor, motivo e efeito, e peça outra aprovação quando for mudar uma regra do conector. O fornecedor deve mostrar um caso corrigido, uma revisão de versão do layout e uma nova execução sem duplicar cobranças. Essa separação ajuda a estimar manutenção após a implantação.',
        'Planeje anexos, autorizações e documentos que não devem entrar no cálculo. Uma mensagem pode trazer fatura, demonstrativo e material informativo. O sistema precisa classificar o que contém cobrança e o que só comprova um evento. Peça testes com arquivos repetidos e revisão daquela fatura. Defina onde preserva a origem e por quanto tempo a equipe precisa consultar, de acordo com as regras de acesso da operação.',
      ],
    },
    {
      heading: 'Ligue a cobrança à remessa sem depender apenas do valor',
      paragraphs: [
        'Faça uma tabela com chaves disponíveis na fatura, transporte e ERP. O pedido pode levar a mais de uma remessa. Uma carga pode concentrar vários documentos, e a fatura pode trazer linhas que representam partes dela. Defina o nível em que o contrato cobra e quais referências recuperam a composição. Se o valor e a data forem iguais em duas remessas, a integração deve manter ambos os candidatos para revisão em vez de escolher uma associação arbitrária.',
        'Planeje múltiplas linhas para a mesma remessa. Tarifa principal, adicional e ajuste de período precisam de identidade própria. O sistema deve evitar somar duas vezes uma linha repetida sem descartar outro serviço válido. Peça o teste com arquivo retransmitido e fatura retificada. A equipe deve conseguir reconhecer qual vínculo já foi conferido e que mudança gerou o novo resultado. O financeiro precisa dessas referências quando o lançamento aparece em um lote geral.',
        'Inclua cobrança sem remessa correspondente. O cenário pode indicar dado ausente, erro de referência ou atividade extra que exige processo diferente. Defina quem examina e o que pode comprovar associação manual. Mantenha o valor sinalizado e o motivo até resolver. Não faça o painel parecer conciliado só porque a linha foi movida de categoria. Peça evidência de como o fornecedor encontra o caso por parceiro, data, valor e documento.',
        'A documentação do Dynamics 365 apresenta um fluxo em que cobranças de transporte previstas são comparadas com faturas do fornecedor. Use isso para discutir o que seu ERP já suporta e o que precisa ser desenvolvido. A integração pode aproveitar rotinas nativas ou preparar resultados para elas. Confirme o nível de detalhe disponível, o tipo de autorização e como a operação recupera uma linha rejeitada. A escolha afeta construção e manutenção.',
      ],
    },
    {
      heading: 'Use uma fatura com faixa, adicional e correção para comparar propostas',
      paragraphs: [
        'Imagine um varejista que expede para dois destinos e troca tabela no meio do mês. Escolha uma remessa anterior e outra posterior à mudança. No exemplo ilustrativo, a primeira usa faixa a partir de peso volumétrico e uma tarifa de R$ 160. A segunda tem faixa diferente e custou R$ 200. Peça que os fornecedores determinem quais regras estão vigentes e exibam os detalhes sem usar a data de recebimento da fatura como atalho.',
        'Acrescente um adicional de R$ 30 na primeira remessa e faça a documentação da autorização chegar depois. O sistema precisa mostrar a diferença enquanto falta evidência e indicar a resolução quando ela aparece. Na segunda remessa, traga peso informado pelo transportador diferente do peso registrado no embarque. A operação precisa comparar as fontes e escolher a evidência aplicável pela política. O cálculo original deve permanecer consultável.',
        'Em seguida, reimporte o documento e apresente uma versão que corrige uma linha. Peça que o fornecedor mostre quais cobranças permanecem, qual valor mudou e que referência identifica a correção. Se uma parte já chegou ao ERP, indique se será ajustada ou enviada para análise. Reproduza também um retorno perdido depois da gravação. Confira que a tentativa repetida não criou outro lançamento para o mesmo item conferido.',
        'Termine com uma visão por remessa, fatura e parceiro. Uma pessoa de logística deve explicar o que foi aceito e o que ainda precisa de evidência. O financeiro deve localizar o resultado no ERP. Compras deve conseguir verificar a tabela usada. Compare quanto tempo leva a sequência e que trabalho foi manual. O exemplo mede a capacidade de recuperar uma decisão, além da capacidade de calcular o frete esperado.',
      ],
    },
    {
      heading: 'Projete revisão, tolerâncias e oportunidade de contestação',
      paragraphs: [
        'Classifique as diferenças por valor, peso, rota, vigência, duplicação e falta de evidência. Algumas podem ser resolvidas por cadastro e outras precisam de ação contratual. Defina prioridade, prazo e responsável. Uma diferença que bloqueia pagamento pode precisar de tratamento antes das demais. O operador deve conseguir entender o motivo e qual fonte permite revisar. Peça uma demonstração em que as categorias levam a ações diferentes.',
        'Se a empresa usar tolerância, registre o limite e quando ela se aplica. Pequenos arredondamentos podem ser aceitáveis. Uma diferença pequena recorrente pode indicar regra errada ou componente duplicado. Preserve o esperado e observado e acompanhe contagem e soma de valores tolerados. Peça um caso no limite e outro logo acima. Não deixe tolerância esconder uma cobrança que ainda não tem condição autorizada.',
        'Defina os estados da tratativa: aguardando evidência, explicado, enviado para contestação, aprovado com ajuste ou resolvido conforme a política. Mantenha conversa e documentos ligados à linha correta. Se a comunicação com o parceiro não for integrada, a equipe ainda precisa registrar o estado e como identifica retorno. Em orçamento, compare o que a automação detecta com o que ainda exige uma atuação humana após o alerta.',
        'Peça que perfis diferentes atuem no mesmo caso. Logística pode anexar evidência, compras pode revisar a política e financeiro pode aprovar um valor. O acesso a condições negociadas e relatórios não precisa ser igual para toda a equipe. Verifique consulta, exportação e mudança de decisão. A trilha deve indicar quem resolveu e quais documentos existiam antes da confirmação. Isso ajuda a operar quando uma cobrança reaparece em outro período.',
      ],
    },
    {
      heading: 'Defina o que o ERP recebe e como confirma o lançamento',
      paragraphs: [
        'Decida se a integração só entrega uma fatura conferida ou também prepara o lançamento. Escreva os campos que precisam chegar ao ERP, como parceiro, empresa, fatura, parcela, centro de custo, referência de remessa e valor aprovado. Determine em que lugar fica a decisão e qual documento comprova o que já foi reconhecido. Se houver aprovação separada para pagamento, mantenha esse momento fora dos estados puramente técnicos do conector.',
        'Mapeie a granularidade de rateio quando uma fatura cobre remessas de vários centros. A regra pode distribuir por quantidade, peso ou outra base validada pela empresa. Registre como o ERP aceita as dimensões e quem aprova. Teste um lote com uma linha de centro inativo e outras linhas válidas. Peça que o fornecedor mostre como preserva o que foi aceito e recupera o rejeitado sem perder o vínculo com a fatura.',
        'Simule uma falha depois de enviar ao ERP. O fluxo deve conservar a referência e consultar antes de repetir. Se o sistema de destino ainda não confirmou, mantenha a pendência visível até resolver. Uma rotina manual de contingência precisa registrar a mesma referência para evitar outra gravação quando o conector voltar. Inclua esse caminho no aceite, com identificação do papel que autoriza o retorno e os dados que devem ser conferidos.',
        'Teste um ajuste após o fechamento. A transportadora pode emitir crédito, corrigir uma cobrança ou confirmar um adicional em outro período. Preserve o valor original, a diferença e o novo documento. A área responsável deve indicar que competência será usada e como aparece em relatórios. Peça que o financeiro localize o ajuste a partir da remessa e da fatura original. O orçamento precisa incluir esse tipo de recuperação quando já faz parte da rotina.',
      ],
    },
    {
      heading: 'Compare orçamento com a mesma tabela, fatura e operação',
      paragraphs: [
        'Entregue aos fornecedores volume de faturas, remessas, parceiros, modalidades e formatos. Separe custos de leitura ou importação, regras, associação, revisão, integração, implantação e sustentação. Uma solução pronta pode importar o formato e ainda exigir configuração de contrato. Uma solução própria pode aproveitar dados do ERP e precisar construir um motor de regras. Compare as duas usando as mesmas condições, incluindo quem mantém a tabela depois.',
        'Peça uma descoberta que entregue pareamento de remessas, cálculo com evidência e um resultado verificável no ERP. Se a interface da transportadora ou do financeiro não foi testada, registre a dependência e o que acontece se faltar determinado campo. Procure o menor recorte com valor operacional. Uma fase pode começar por conferência em paralelo e manter pagamento com a equipe, enquanto o próximo passo é avaliado com dados do piloto.',
        'Inclua custos de adicionar parceiros e serviços. Uma nova transportadora pode exigir formato, códigos e prioridades diferentes. Uma mudança de regra pode ser feita por configuração ou exigir desenvolvimento e teste. Peça uma simulação de cadastro de tarifa futura e como reproduzir a anterior. A comparação de custo deve explicar o volume esperado de revisões, o tempo de resposta do suporte e quais condições implicam nova proposta.',
        'Verifique exportação e independência de dados. A equipe deve recuperar versões de tabela, referências, decisões e histórico de diferenças sem depender de reproduzir a tela do fornecedor. Peça amostra e confirme os direitos de consulta conforme os papéis existentes. Ao mudar de integrador, indique quem tratará faturas em aberto e como provar lançamentos já feitos. Esse custo de transição pode influenciar a escolha mesmo quando os valores de implantação são próximos.',
      ],
    },
    {
      heading: 'Homologue o projeto com faturas reais saneadas e medidas comparáveis',
      paragraphs: [
        'Prepare um lote com documentos saneados e resultados validados por logística e financeiro. Inclua mudança de vigência, peso divergente, adicional sem prova, linha repetida e cobrança ajustada em outro período. Para cada caso, anote cálculo, valor observado, estado e próximo passo. Faça o fornecedor mostrar de onde veio a informação sem depender de relato verbal. Peça que usuários da operação encontrem a evidência com os próprios perfis.',
        'Teste a carga, a conferência e a saída. Envie um documento repetido, corrija um vínculo e simule perda depois de gravar. Ao retomar, confira o que foi lançado e o que ainda está na fila. Se o projeto apenas entrega arquivo ao ERP, combine o teste de importação e como a confirmação chega de volta. Defina falhas que impedem liberar, como duplicar pagamento ou aplicar tabela errada sem alerta.',
        'Meça tempo até concluir, linhas tratadas sem busca manual, diferenças ainda abertas e trabalho até o ERP. Numa hipótese com 500 linhas de fatura por mês, se 400 são conferidas de forma direta, revise as outras cem e estime o esforço por motivo. Não trate o valor sinalizado como ganho confirmado. Observe diferenças explicadas, ajustes reconhecidos e tempo que a equipe continua usando para comprovar ocorrências.',
        'Comece por um parceiro e modalidade com histórico suficiente. Faça o primeiro fechamento em paralelo e registre situações fora do escopo. Antes de expandir, confirme que a equipe sabe reproduzir o cálculo, identificar arquivo revisado e encaminhar diferenças. Compare novas rotas e parceiros com os casos já cobertos. A ampliação deve incluir teste adicional quando a forma de cobrar ou apresentar documentos muda, mesmo que o ERP permaneça igual.',
      ],
      bullets: [
        'Remessa de uma vigência faturada depois da mudança de tabela.',
        'Peso cobrável divergente com fontes lado a lado.',
        'Adicional com evidência tardia e decisão registrada.',
        'Fatura retransmitida sem cobrança duplicada.',
        'Ajuste posterior ligado ao documento e lançamento originais.',
      ],
    },
    {
      heading: 'O que levar à primeira conversa de orçamento',
      paragraphs: [
        'Leve uma tabela, uma remessa e uma fatura comuns, além de uma linha extra que a equipe já precisou investigar. Prepare exemplos saneados com chaves consistentes. Informe ERP, parceiro, modalidade, corte, volume e quem confirma a apuração. Aponte onde documentos e autorizações ficam e que dados o financeiro precisa receber. Se o acesso à interface ainda não existe, diga quem libera uma amostra e quando a equipe poderá conferir.',
        'Peça um recorte de entrega que responda a uma decisão verificável. Pode ser calcular o frete de determinada modalidade, conciliar uma fatura ou preparar o lote aprovado para o ERP. A proposta deve mostrar qual parte será provada, quem valida exceção e como medir resultado. Confirme quais tipos de cobrança ficam fora e como serão tratados na rotina. Desse modo, a empresa consegue comparar opções e decidir onde ampliar depois.',
        'Mostre como uma mudança contratual é negociada hoje. Talvez compras receba uma nova planilha, logística confirme alcance e financeiro só veja a diferença na próxima fatura. Peça um exemplo de transição de vigência e identifique que documentos ficam em cada etapa. Essa conversa ajuda a estimar o trabalho que permanece com a empresa. Combine como a proposta registrará uma condição excepcional já aceita para uma única remessa, sem transformá-la em regra geral para compras futuras.',
      ],
    },
  ],
  faqs: [
    { question: 'O valor calculado já basta para contestar uma cobrança de frete?', answer: 'Confira versão do contrato, dados da remessa e evidência de adicionais. Um cálculo mostra a diferença, mas a decisão depende da regra aplicável e da revisão autorizada.' },
    { question: 'A automação deve pagar a fatura?', answer: 'O primeiro escopo pode calcular, conferir e preparar um resultado para a aprovação financeira. Separe lançamento e pagamento e teste as autorizações se fizerem parte do projeto.' },
    { question: 'O que mais influencia o custo de implantação?', answer: 'Quantidade de formatos, parceiros, regras e integrações, além da qualidade dos dados de remessa. Compare propostas com os mesmos casos de tarifa, adicional e ajuste.' },
  ],
  cta: {
    title: 'Quer orçar a automação da conferência de frete?',
    text: 'Conte como sua equipe recebe as faturas, busca as remessas e confere as condições contratadas. A Tironi Tech pode ajudar a definir um primeiro fluxo e os testes para integrá-lo ao ERP.',
    label: 'Apresentar meu processo de conferência',
  },
  sources: [
    { label: 'Microsoft Dynamics 365 — conferência de frete e correspondência com faturas', url: 'https://learn.microsoft.com/en-us/dynamics365/supply-chain/landed-cost/landed-cost-vs-tms' },
  ],
};
