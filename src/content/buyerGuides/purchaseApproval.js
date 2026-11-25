export const purchaseApproval = {
  slug: 'orcamento-sistema-aprovacao-compras-alcadas',
  date: '2026-11-25',
  updated: '2026-11-25',
  description: 'Veja como montar um briefing e comparar orçamentos de um sistema de aprovação de compras por alçada, com exemplos, integração ao ERP e critérios de aceite.',
  keywords: ['sistema de aprovação de compras por alçada', 'orçamento para aprovação de compras', 'fluxo de requisição de compras', 'matriz de alçadas de compras'],
  emphasis: 'sistema de aprovação de compras por alçada',
  intro: 'Para orçar um sistema de aprovação de compras por alçada, entregue aos fornecedores a política vigente, exemplos de compras e o ponto em que o ERP pode emitir a ordem. Peça que cada proposta demonstre como trata troca de aprovador, alteração de valor, rateio e compras emergenciais. Isso permite comparar o trabalho de implantação pela regra que será testada, pela integração e pelo custo de manter a operação.',
  takeaways: [
    'Especifique como valor, categoria, centro de custo e unidade afetam cada decisão.',
    'Compare o fluxo nativo do ERP e um sistema sob medida com os mesmos casos de aceite.',
    'Vincule o orçamento à ordem de compra, à versão aprovada e à trilha de auditoria.',
  ],
  visual: {
    title: 'Da requisição ao pedido autorizado',
    labels: ['Requisição com dados completos', 'Validação de verba e alçada', 'Decisão sobre a versão apresentada', 'Geração e confirmação da ordem no ERP'],
    caption: 'Cada etapa tem uma evidência própria. Uma solicitação aprovada pode continuar aguardando integração antes de virar ordem.',
  },
  sections: [
    {
      heading: 'Identifique qual decisão está atrasando a compra',
      paragraphs: [
        'Escolha solicitações de diferentes áreas e reconstitua o que houve desde o pedido interno até o envio da ordem ao fornecedor. Anote as datas em que a solicitação entrou, voltou para complemento, foi aprovada e virou ordem. Em uma operação industrial, o gerente pode aprovar manutenção no mesmo dia, mas compras ainda precisa descobrir qual máquina será atendida para selecionar o centro de custo. Nesse caso, boa parte da espera está no preenchimento inicial e no retorno do pedido.',
        'Entreviste separadamente quem pede, quem aprova, quem compra e quem confere a despesa. Cada pessoa costuma conhecer uma parte das exceções. O solicitante sabe por que recorre a uma mensagem fora do fluxo, enquanto a área de compras conhece as situações em que duas cotações têm escopos diferentes. Procure um caso em que o pedido ficou parado sem responsável e outro em que a ordem foi emitida depressa, mas com informação incorreta. O próximo sistema precisa lidar com velocidade e qualidade.',
        'Esclareça se o orçamento cobre requisições, ordens ou as duas aprovações. A requisição registra uma necessidade interna e autoriza compras a conduzir o processo. A ordem pode incluir fornecedor, preço negociado e condições que só aparecem depois da cotação. Em empresas que usam os dois controles, uma autorização inicial de verba deixa de representar o compromisso final se o valor ou a contratação mudou. Essa distinção influencia telas, prazos, permissões e integração.',
        'Defina o primeiro resultado observável. Pode ser encontrar o responsável por toda requisição aberta, impedir emissão sem aprovação válida ou reduzir devoluções por formulário incompleto. Registre a linha de base com o volume e os tipos de compra do período escolhido. Quando os fornecedores falarem em ganho de produtividade, peça que apontem qual etapa muda e como a equipe comprovará o ganho em relação a essa amostra.',
      ],
    },
    {
      heading: 'Transforme a política de compras em uma matriz que pode ser testada',
      paragraphs: [
        'Comece com linhas da política que já têm dono e vigência. Para cada linha, registre unidade, categoria, faixa de valor, papel aprovador e situações que alteram a regra. Uma política pode autorizar compras de material recorrente na filial e exigir análise adicional da sede para serviço continuado. Quando condições se sobrepõem, descreva se uma prevalece ou se as duas se acumulam. Um requisito útil explica como decidir e aponta quem pode mudar a decisão.',
        'Teste a fronteira dos valores. Se o gerente pode aprovar até R$ 5 mil, simule pedidos de R$ 4.999,99, R$ 5 mil e R$ 5.000,01. Indique se a comparação usa valor dos itens, desconto, tributos, frete ou total projetado da contratação. Em um contrato mensal, especifique se entra a parcela, o mínimo contratado ou a soma do prazo. Deixe a mesma definição em briefing, tela e regra para que a pessoa confira por que a compra mudou de nível.',
        'Identifique a chave que encontra o aprovador. Pode ser o responsável pelo centro de custo, o gestor da unidade ou alguém com atribuição específica, como segurança do trabalho. Uma pessoa pode exercer papéis diferentes em duas filiais. Peça ao fornecedor que apresente como localiza o papel certo a partir do contexto da compra. Confira também quando a aplicação deve impedir que um solicitante seja o único a autorizar sua própria despesa.',
        'Cuide da manutenção da política. Ao publicar uma faixa nova, a equipe precisa saber o que acontece com solicitações abertas e com compras já aprovadas. Uma alternativa é conservar a versão aplicada e reavaliar apenas pedidos reenviados. Outra é recalcular casos abertos a partir de uma mudança explicitamente aprovada. A proposta deve mostrar quem publica a alteração, como ela é testada e como localizar a regra que valia para uma transação de meses atrás.',
      ],
      bullets: [
        'Condições de entrada: empresa, filial, centro de custo, categoria, natureza e valor da despesa.',
        'Resultado da regra: aprovadores, ordem de atuação, prazo, substituição e destino após a decisão.',
        'Evidência de aceite: dados usados, versão da regra, decisão observada e efeito no ERP.',
      ],
    },
    {
      heading: 'Compare aprovação da requisição inteira e aprovação por linha',
      paragraphs: [
        'Um pedido com itens de naturezas diferentes pode exigir decisões diferentes. Imagine uma requisição que reúne peças de manutenção e treinamento. A despesa de peças pertence à fábrica, enquanto a capacitação usa orçamento de pessoas. Autorizar o total por um gestor único simplifica a interface, mas exige que essa pessoa tenha autoridade sobre todas as despesas. Encaminhar linhas separadas preserva a responsabilidade de cada área e cria mais estados para gestão e integração.',
        'Combine o que ocorre quando uma linha é recusada ou revisada. A empresa pode devolver a solicitação toda, permitir separar itens aprovados ou aguardar correção antes de emitir a ordem. Cada alternativa tem efeito no fornecedor e na entrega. Se o desconto dependia de comprar os itens juntos, retirar uma linha pode invalidar a cotação. Descreva esse comportamento no orçamento para não descobrir na homologação que o sistema permite gerar um pedido comercialmente diferente do que foi analisado.',
        'No rateio, decida se cada gestor analisa seu compromisso ou se um responsável central avalia o todo. Um serviço de R$ 18 mil pode ser atribuído a três centros de custo em proporções diferentes. O sistema precisa conferir se as parcelas fecham o total após arredondamento. Também precisa mostrar se uma alteração de percentual muda o aprovador e se as outras decisões continuam válidas. Teste revisão do rateio depois de apenas uma das áreas ter aprovado.',
        'A documentação do Dynamics 365 apresenta exemplos de requisições encaminhadas como documento ou por linha. Use essa referência para formular o teste e confirme na versão do ERP existente quais recursos estão habilitados. Mesmo quando a plataforma oferece ambos os modelos, configuração, grupos de usuários, licenças ou integração com verba podem depender do ambiente. Peça demonstração com duas áreas reais em vez de um formulário padrão com todos os itens no mesmo centro.',
      ],
    },
    {
      heading: 'Defina como a verba será consultada, reservada e liberada',
      paragraphs: [
        'Uma alçada informa quem pode decidir. A disponibilidade orçamentária responde se há verba e quais exceções precisam de análise adicional. Na conversa de cotação, mostre onde a empresa mantém o orçamento, quando o valor disponível é atualizado e se a aprovação reserva saldo. Um arquivo atualizado a cada dia pode servir para consulta gerencial, mas tem limites quando várias compras concorrem pela mesma verba durante o expediente.',
        'Num cenário ilustrativo, um centro tem R$ 12 mil disponíveis. Dois projetos submetem requisições de R$ 8 mil quase juntas. Se cada aprovação lê o saldo antes da outra gravar, ambas podem parecer válidas. Escolha se o compromisso será reservado no ERP, registrado em outro controle autorizado ou tratado como análise explícita do financeiro. O roteiro de aceite deve mostrar a ordem desses eventos e como o conflito aparece para as duas equipes.',
        'Mapeie os estados que alteram o compromisso. Recusar uma requisição liberará a reserva? Pedido aprovado e ainda sem fornecedor conserva o valor pelo mesmo prazo? Reduzir uma linha depois da cotação devolve o saldo automaticamente? Uma mudança na disponibilidade orçamentária precisa de trilha e, quando aplicável, de confirmação do ERP. Sem isso, a equipe pode confiar em uma reserva exibida no portal que já perdeu validade no sistema financeiro.',
        'Na proposta, identifique o que acontece quando a origem da verba está indisponível. Algumas compras podem permanecer em validação até a consulta voltar. Em uma situação excepcional, a política pode prever uma autorização formal por outro caminho. Registre quem responde pela exceção, qual evidência fica anexada e como o caso será reconciliado depois. A indisponibilidade de uma interface precisa ter um estado próprio para o usuário distinguir problema técnico de recusa financeira.',
      ],
    },
    {
      heading: 'Trate as exceções que costumam passar por fora do fluxo',
      paragraphs: [
        'Pergunte a cada área quando ela abandona o procedimento habitual. Pode ser parada de equipamento, ausência de aprovador, fornecedor exclusivo ou compra com adiantamento. Para cada evento, separe urgência operacional de autorização. Se o supervisor pode acionar manutenção emergencial, documente o limite, a justificativa e quem revisa a despesa depois. A tela deve dar acesso ao caminho previsto, mesmo quando o usuário trabalha fora do turno regular.',
        'Na substituição de aprovador, especifique período, unidade, categorias e teto da delegação. Um gerente pode cobrir férias de outro durante duas semanas, mas continuar impedido de autorizar determinadas compras. Inclua o caso de uma solicitação encaminhada antes da substituição e ainda aberta quando ela começa. O fornecedor deve mostrar se a tarefa muda de responsável e o que ocorre ao fim do prazo, inclusive quando alguém abre um link antigo de notificação.',
        'Investigue o fracionamento com uma regra que a equipe consiga interpretar. Duas compras parecidas podem ter motivos legítimos, como faturas de unidades distintas ou entregas em datas diferentes. Um alerta por fornecedor, categoria, solicitante ou proximidade temporal pode ajudar na revisão. Combine os critérios e o responsável por avaliar. Se existir bloqueio, descreva como compras comprova que as solicitações são distintas e como o histórico permanece auditável.',
        'Planeje o caso de exceção descoberto após o envio da ordem. Uma compra pode ter seguido para o fornecedor e recebido condição diferente na confirmação. O sistema precisa indicar se exige aditivo, nova decisão ou cancelamento. Inclua quem é notificado e qual sistema conserva o estado comercial atualizado. O comprador deve encontrar de imediato qual versão da ordem corresponde à autorização final, mesmo dias depois da negociação.',
      ],
    },
    {
      heading: 'Use uma compra completa para discutir revisão e reaprovação',
      paragraphs: [
        'Considere um exemplo hipotético de aquisição de sensores para uma fábrica. A requisição inicial prevê R$ 12.400 e é encaminhada ao gerente de manutenção pela política vigente. Na cotação, o preço muda para R$ 14.100 com um prazo menor e um frete adicional. A organização exige aprovação financeira acima de R$ 13 mil. O sistema deve mostrar o que mudou, conservar a primeira versão e submeter os novos termos ao responsável correto antes de liberar a ordem.',
        'Agora imagine que a diferença seja apenas a correção do nome de um equipamento no campo de observação. A política pode permitir registrar a alteração sem reiniciar o aceite, desde que os dados que definem o compromisso permaneçam iguais. Mapeie quais campos são materiais e se a regra varia por etapa. Quando existe um contrato vigente ou condições especiais, o fornecedor precisa distinguir a descrição para a equipe da informação que será enviada à outra parte.',
        'Inclua também uma redução que muda a faixa. A empresa pode desejar conservar aprovações anteriores como evidências, embora agora a decisão final caiba a uma alçada menor. Se o fluxo recalcular papéis, confirme que tarefas antigas desaparecem das filas ativas e que a nova requisição mostra o motivo. Se a organização preferir manter a aprovação superior por regra, faça os participantes testarem esse caminho e incluírem a justificativa na documentação.',
        'Ao redor da aprovação existem outras ações, como solicitar complemento, rejeitar, cancelar e devolver para cotação. Defina para cada uma quem executa, se exige justificativa e o que acontece com dados e prazos. Na homologação, peça uma devolução com instruções específicas e verifique se o solicitante consegue reenviar sem criar outro registro. O time de compras deve enxergar a sequência e reconhecer a requisição vigente sem precisar juntar e-mails.',
      ],
    },
    {
      heading: 'O que exigir da integração entre o fluxo de aprovação e o ERP',
      paragraphs: [
        'Faça uma tabela de autoridade dos dados para descrever de onde vêm fornecedor, itens, condições de pagamento, centros de custo e verba. O portal pode capturar uma necessidade de negócio, enquanto o ERP valida cadastros e gera a ordem. Se o comprador puder escolher um fornecedor livremente no portal, defina quando a empresa exige um cadastro homologado. Um rótulo simples de fornecedor disponível não comprova que aquela filial pode emitir a ordem para ele.',
        'Peça ao fornecedor um teste da interface antes de fechar prazo e preço. O teste deve criar ou simular uma ordem num ambiente controlado, retornar o identificador e mostrar a rejeição de um dado inválido. Informe versão do ERP e restrições de acesso. Quando a interface é fornecida por terceiro, identifique quem autoriza acesso, quem cobra por uso e quem mantém a documentação. Assim, o contrato distingue uma entrega de software de suas dependências externas.',
        'Defina o que significa uma integração concluída. Após aprovar, o portal pode enviar a versão autorizada e aguardar confirmação. Se o ERP rejeitar o pedido porque um centro de custo ficou inativo, a equipe precisa saber onde corrigir. Se a resposta se perder depois de gravar, o sistema deve consultar a referência da requisição antes de criar outra ordem. Inclua essa condição no teste e exija que o usuário consiga localizar a ordem confirmada sem intervenção no banco.',
        'Combine como voltar ao processo manual durante uma interrupção. Uma ordem emitida no ERP por contingência precisa ser ligada à solicitação original e impedida de sair novamente pela rotina automática. O procedimento deve dizer quando congelar a fila, quem faz a associação e como reativar o envio para os casos que ainda não viraram ordem. Teste a retomada com pelo menos uma compra criada manualmente e outra cuja aprovação permaneceu aguardando processamento.',
      ],
    },
    {
      heading: 'Projete a supervisão para compras, gestão e auditoria',
      paragraphs: [
        'Quem solicitou deve enxergar onde o pedido ficou parado, quais informações faltam e se existe prazo esperado. Quem aprova precisa do contexto necessário para decidir, incluindo valor, justificativa e condições, sem pesquisar cada campo em outra ferramenta. Compras precisa de uma fila distinta para cotar, revisar ou transmitir ao ERP. Apresente essas visões ao fornecedor e veja se a solução atende ao trabalho de cada papel com ações concretas.',
        'Defina quais informações ficam no histórico. Uma trilha útil registra autor, instante, papel exercido, regra aplicada, versão da requisição e resultado. Para rejeições ou exceções, guarde a razão e o encaminhamento previsto. Se a aprovação puder acontecer por e-mail, mostre como o sistema vincula o ato a uma identidade e a uma versão vigente. O envio da mensagem por si só só evidencia que alguém foi notificado.',
        'Peça cenários de visualização por perfil. Um solicitante pode consultar as próprias compras e determinados dados de acompanhamento, mas não precisa ver propostas de fornecedores de outras áreas. O gestor pode analisar seu centro de custo, enquanto a auditoria tem consulta ampliada com exportação controlada. Inclua um usuário com dois vínculos organizacionais para conferir se a visibilidade corresponde à atribuição correta em cada contexto.',
        'Combinar um alerta para requisição atrasada ajuda a recuperar o fluxo. A regra pode calcular horário útil, feriados e etapa. Confirme se alertar um responsável substitui a tarefa ou apenas avisa. Em determinadas compras, aumentar o nível automaticamente deve significar solicitar nova decisão, mantendo o bloqueio de emissão até existir autorização válida. Defina um destinatário capaz de agir, especialmente em filas que reúnem unidades com agendas diferentes.',
      ],
    },
    {
      heading: 'Quando configurar o ERP e quando contratar software sob medida',
      paragraphs: [
        'Peça uma demonstração da configuração nativa se o ERP já controla compras e permite definir as alçadas pertinentes. Mostre o processo com mudança de valor, rateio, substituição e exportação. Configure o cenário em uma versão comparável à da operação e confirme quais licenças e perfis são necessários. A configuração pode ser a opção mais simples quando o ERP atende as regras, o público já acessa a ferramenta e o histórico fica no lugar esperado.',
        'Um módulo sob medida pode ser útil quando o ERP atende a emissão e o financeiro, mas requisitantes de várias unidades precisam de uma experiência diferente ou a regra combina fontes e aprovações externas. Especifique a divisão de responsabilidades. Por exemplo, o portal recebe a requisição e controla a alçada, enquanto a ordem e a baixa orçamentária permanecem no ERP. A equipe de suporte precisa localizar o estado sem assumir que o portal consegue corrigir qualquer regra do sistema financeiro.',
        'Há também projetos que combinam formulário corporativo, automação de tarefas e controles nativos. Avalie se o volume e a complexidade justificam essa composição. Se a regra exige revisão frequente por pessoas de negócios, mostre como elas atualizam uma tabela autorizada e validam seu efeito. Se cada exceção exige um ajuste técnico em múltiplos conectores, estime esse custo antes de apresentar a composição como alternativa de implantação mais barata.',
        'Compare todas as opções com uma requisição simples, uma repartida, uma alterada após aprovação e um erro de integração. Anote quais passos usam configuração, desenvolvimento ou trabalho manual. Peça qual teste precisa repetir após atualização do ERP. Uma solução fica mais previsível quando o fornecedor especifica onde a regra mora, como é documentada e quais equipes entrarão em ação se a carga de pedidos ou a política mudar.',
      ],
    },
    {
      heading: 'Monte a planilha de orçamento e aceite antes de negociar',
      paragraphs: [
        'Peça a cada fornecedor uma planilha com descoberta, configuração ou desenvolvimento, integração, migração de cadastros, homologação, treinamento e suporte. Use o mesmo conjunto de filiais, perfis e tipos de compra na comparação. Marque itens opcionais, como aquisição pelo celular, notificação em canais adicionais e relatório gerencial. Faça o fornecedor separar os recursos que já existem dos que dependem de licença ou prova de conceito.',
        'Na etapa de descoberta, espere obter uma matriz vigente amarrada a casos de teste, um mapa de dados e evidência da interface do ERP. Combine o que acontece se um risco inviabilizar a integração desejada. A etapa pode entregar alternativas, como começar com validação e exportação assistida, estimadas com o esforço residual da equipe. Uma saída clara dá ao comprador condição de decidir a etapa seguinte com informação verificável.',
        'Defina o cenário de implantação inicial. Uma fábrica pode começar com compras de manutenção em uma unidade e manter os demais fluxos no processo anterior. Registre onde a equipe abre requisições durante essa fase, como trata compras antigas e quando mede o resultado. Se a empresa usar as duas rotas para a mesma categoria, estabeleça uma identificação visível para reduzir registros duplicados e evitar que requisições já aprovadas entrem duas vezes no ERP.',
        'Vincule os pagamentos ou marcos de entrega a evidências proporcionais ao projeto. Pode haver homologação da regra, aceite da transmissão ao ERP e confirmação da operação assistida. Para cada fase, indique quem verifica e como um defeito será reproduzido. Se a configuração precisar de dados ainda indisponíveis, peça que essa condição apareça na estimativa e diga quem confirma sua disponibilidade antes de marcar a virada.',
      ],
      bullets: [
        'Caso de fronteira no limite da alçada e um centavo acima.',
        'Rateio com recusa de uma área e decisão das demais preservada conforme política.',
        'Reaprovação depois de mudança no valor ou no fornecedor autorizado.',
        'Substituição com fim de vigência, trilha de auditoria e fila atualizada.',
        'Falha do ERP depois da aprovação e recuperação sem ordem duplicada.',
      ],
    },
    {
      heading: 'Como verificar o retorno depois da implantação',
      paragraphs: [
        'Meça tempos por etapa para descobrir se a automação removeu espera ou apenas a deslocou. A autorização pode ficar mais rápida ao mesmo tempo que compras passa a receber mais solicitações sem cotação. Compare requisições completas, devoluções, tempo até a ordem e casos fora do fluxo por tipo e unidade. Para itens urgentes, mantenha um recorte que revele se a nova fila atende a manutenção quando um equipamento para.',
        'Num exemplo hipotético com 400 requisições por mês, se 100 voltavam por dados faltantes e a média de correção era de 12 minutos, a equipe usava 20 horas nesse retrabalho. Se o novo formulário reduz as devoluções para 40, a redução estimada nessa atividade é de 12 horas sob as mesmas condições. Compare o ganho com o tempo gasto preenchendo novos campos, atendendo exceções e administrando a política. O retorno depende da diferença total na rotina.',
        'Revise também controles que não se traduzem diretamente em horas. Procure ordens sem aprovação rastreável, desvios entre a versão aprovada e a emitida, reservas vencidas e compras em que a urgência foi usada repetidamente. Escolha uma amostra manual para verificar se os relatórios explicam o ocorrido. Se a equipe deixou de abrir requisição em certas situações, a queda de desvios no painel pode refletir menor cobertura em vez de melhoria.',
        'Reúna os responsáveis após um ciclo de fechamento. Leve exemplos de uma compra bem encaminhada, uma que exigiu substituição e uma que gerou problema no ERP. Decida o que corrigir antes de habilitar outras áreas. Uma implantação por fases funciona melhor quando critérios de expansão já estão definidos, inclusive estabilidade da fila, facilidade para recuperar a trilha e manutenção das alçadas sem intervenção desproporcional.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Qual é a diferença entre aprovar a requisição e aprovar a ordem?',
      answer: 'A requisição autoriza o tratamento de uma necessidade interna. A ordem representa as condições que podem seguir ao fornecedor. Se valor, fornecedor ou condições só forem conhecidos depois da cotação, a política pode exigir uma segunda decisão.',
    },
    {
      question: 'Como estimar o custo de um sistema de alçadas de compras?',
      answer: 'Compare propostas com a mesma matriz, unidades, perfis e cenários de integração. Peça valores de descoberta, implantação, licenças, sustentação e mudanças na política. Identifique as condições que ainda precisam ser confirmadas no ERP.',
    },
    {
      question: 'Qual dado levar à primeira conversa de projeto?',
      answer: 'Leve as faixas e papéis, a versão do ERP e exemplos saneados de uma compra comum, uma exceção e uma mudança após aprovação. Indique quem decide sobre verba e quem confirma que a ordem foi emitida.',
    },
  ],
  cta: {
    title: 'Sua empresa precisa organizar as aprovações de compras?',
    text: 'Conte como a requisição circula, quem pode autorizar e qual ERP emite a ordem. A Tironi Tech pode ajudar a delimitar a primeira etapa e os testes para cotar o projeto.',
    label: 'Apresentar meu processo de compras',
  },
  sources: [
    { label: 'Microsoft Dynamics 365 — fluxo de aprovação de requisições', url: 'https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/purchase-requisitions-workflow' },
    { label: 'Microsoft Dynamics 365 — políticas de compras e reaprovação', url: 'https://learn.microsoft.com/en-us/dynamics365/supply-chain/procurement/purchase-policies' },
  ],
};
