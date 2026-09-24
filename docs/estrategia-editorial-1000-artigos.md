# Estratégia editorial Tironi Tech — 24/09/2026

## Estado da entrega

A liberação de indexação dos 1.683 artigos existentes e os primeiros 5 tutoriais foram enviados no commit `ec53a9f`. Outros 16 tutoriais foram escritos diretamente, sem API de geração. A solicitação adicional de 100 artigos parte desse total de 21 e está identificada separadamente por `additional-100-20260924`. A contagem verificada de textos completos, tanto desta solicitação quanto da meta de 1.000, está em `tutorial-production-progress.json`. Os novos textos estão locais até o próximo push. As traduções dos novos tutoriais ainda não foram escritas.

O lote adicional foi concluído com **100 novos artigos em português**, entre **10.153 e 15.770 caracteres de corpo**, após o processamento do site. O total da iniciativa de tutoriais é agora **121 de 1.000**, com **879 restantes**. O inventário legível dos 100 está em `lote-100-artigos.md`. A auditoria obrigatória do lote passou; cada texto tem pelo menos oito seções, FAQ, diagrama, fontes e contexto de atuação da Tironi Tech. Não foram usadas chaves de API de geração.

Verificação final local: build concluído, auditoria de **5.170 páginas de artigos** e **5.192 URLs no sitemap** aprovada, lint sem erros (um aviso preexistente em `useViewportMode.js`). Os novos tutoriais têm corpo completo no HTML, canonical próprio, FAQ e fontes. O build mantém um ponto de atenção de desempenho: o pacote compartilhado de artigos ficou em 2.366,47 kB, ou 716,95 kB comprimidos. O carregamento desse acervo precisa ser considerado na próxima otimização; esta entrega não altera sua arquitetura de carregamento. Nenhum push foi realizado nesta entrega.

O lote adicional divide a redação entre vendas e atendimento, engenharia de software e crescimento e gestão. Cada tutorial precisa superar 10 mil caracteres de corpo após o processamento do site, ter pelo menos oito seções, exemplos próprios, diagrama, FAQ e fontes. Os números de exemplos devem ser identificados como hipotéticos; alegações comerciais e funcionalidades não verificadas não devem ser atribuídas aos produtos. A autorização de redação em agentes do Codex não utiliza chave de API.

`npm run audit:batch100` exige pelo menos 100 novos textos validados nesta solicitação. `npm run audit:indexability`, executado após o build final, confere sitemap, links do arquivo, canonical, idiomas publicados e conteúdo presente no HTML; nos tutoriais, confere também todas as seções, FAQ, fontes, diagrama e dados estruturados. Estar tecnicamente acessível não equivale à confirmação de indexação ou a uma posição garantida nas buscas.

O inventário verificável está em `tutorial-production-progress.json`, regenerado por `node scripts/audit-tutorials.mjs`. Ele conta textos efetivamente integrados ao acervo; pautas não contam como artigos. A verificação automática identifica estrutura, tamanho e parágrafos idênticos, mas não substitui revisão factual e semântica.

Primeiro lote: organização da fila comercial no WhatsApp; cotação de vários produtos; rastreamento de campanha até pedido; retomada de propostas; operação de clube de vantagens com receita recorrente. Cada tema resolve um problema distinto, evitando publicar a mesma resposta com pequenas variações de palavra-chave.

Segundo lote: consulta de produtos com IA no WhatsApp; passagem do Instagram para o WhatsApp; atendimento fora do expediente; duplicidades no CRM; confirmação de pedidos entre CRM e ERP; BI de conversão; especificação de software; aprovação de descontos; validação de MVP B2B; página de orçamento. Conteúdo em `src/content/practicalTutorialArticles.js`, integrado ao catálogo pelo módulo `tutorialArticles.js`. O parser compartilhado apenas converte textos já escritos para o esquema do blog.

Terceiro lote: qualificação de leads no WhatsApp; migração de planilhas; sincronização de estoque; renovação de assinaturas; consulta a documentos internos com IA; onboarding B2B. Conteúdo em `src/content/operationsTutorialArticles.js`. Os textos diferenciam cadastro de oportunidade, leitura de importação, disponibilidade de estoque, estado de cobrança, evidência documental e conclusão de implantação, com exemplos próprios para cada processo.

Os sitemaps e o HTML são gerados pelo processo existente de build. Cada novo tutorial é publicado apenas em português, com canonical próprio, links no acervo e metadados. Não são criadas URLs de tradução sem conteúdo correspondente. Elegibilidade técnica não comprova indexação nem garante posição nas buscas.

## Cerne do negócio

A Tironi Tech desenvolve software sob medida e automações com IA conectadas à operação do cliente. A aquisição deve partir de problemas com custo verificável: demora no atendimento, propostas paradas, digitação duplicada, dados divergentes, baixo aproveitamento de mídia, limitações do ERP, ausência de indicadores e receitas dependentes de esforço manual.

O posicionamento editorial proposto é: transformar gargalos de operação e crescimento em sistemas que a empresa consegue usar, medir e evoluir. O conteúdo precisa explicar quando contratar desenvolvimento, quando integrar ferramentas existentes e quando uma mudança de processo basta.

Produtos e provas pertinentes: ChatBô para atendimento e operação comercial; MestreLead para prospecção e CRM; BI personalizado para decisão; plataformas de assinatura para recorrência; plataformas transacionais e experiências digitais para aquisição. Não presumir que todo projeto utiliza IA. Não atribuir faturamento total à tecnologia como se fosse incremento causal comprovado.

## Pesquisa inicial de referências

Fontes consultadas em 24/09/2026, utilizadas para mapear abordagem editorial, não para copiar textos ou afirmar volumes de busca:

- V4: https://blog.api.v4company.com/2024/06/05/i-a-para-empresa/ — aproximação entre aquisição, CRM, operação e resultado.
- G4: https://g4educacao.com/blog/inteligencia-artificial-pme — linguagem de decisão e adoção por gestores.
- Capgemini: https://www.capgemini.com/insights/research-library/the-blueprint-to-scaling-ai-for-business-transformation/ — implementação, escala e transformação empresarial.
- NTT DATA: https://dam.nttdata.com/api/public/content/2025-ServiceNow-Insight-and-Vision-Report?v=9d11405d — serviços e operação empresarial.
- Adapta: https://adapta.org/blog/ia-nas-empresas — explicação acessível de aplicações empresariais.
- Google: https://developers.google.com/search/docs/fundamentals/creating-helpful-content — utilidade e confiabilidade.
- Google: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview — sitemap não garante indexação.

Essas referências não constituem recomendação, parceria, endosso ou comprovação de liderança da Tironi Tech. Não há nesta pesquisa dados de Keyword Planner ou Search Console para classificar palavras como as mais pesquisadas.

## Distribuição proposta para 1.000 artigos

A distribuição abaixo é um orçamento de pautas. Cada intenção deve ser confrontada com os 1.683 artigos existentes antes da redação. Se já existe uma resposta suficiente, atualizar a URL existente e substituir a pauta por uma lacuna real.

| Frente | Quantidade | Dor e intenção | Relação comercial |
| --- | ---: | --- | --- |
| Software sob medida | 80 | Sistemas que limitam crescimento, comprar ou construir, contratação | Desenvolvimento |
| Automação de processos | 80 | Retrabalho, filas, erros, capacidade operacional | Automação |
| Agentes de IA | 65 | Execução assistida, limites, avaliação, supervisão | IA aplicada |
| WhatsApp e atendimento | 80 | Espera, perda de contexto, consulta de produtos, encaminhamento | ChatBô |
| CRM e operação comercial | 65 | Leads sem dono, propostas paradas, baixa conversão | Integrações e ChatBô |
| Integração de ERP e APIs | 60 | Dados duplicados, estoques divergentes, pedidos inconsistentes | Integrações |
| BI e indicadores | 60 | Decisões sem dados, margem, coortes, qualidade de informação | BI personalizado |
| Marketing e conversão | 70 | Mídia sem vendas, atribuição, landing pages, passagem a vendas | Software e integrações |
| Receita recorrente | 45 | Previsibilidade, retenção, assinatura, inadimplência operacional | Plataformas de assinatura |
| Comércio eletrônico | 60 | Catálogo, carrinho, atendimento, pedido, pós-venda | Plataformas e automação |
| SaaS e MVP | 50 | Validação, escopo, arquitetura, adoção, evolução | Desenvolvimento |
| Modernização de sistemas | 45 | Legado, risco de migração, dependências, indisponibilidade | Engenharia de software |
| Conhecimento e RAG | 40 | Informação dispersa, respostas incorretas, permissões | IA e conhecimento |
| Segurança e governança | 35 | Acesso, auditoria, avaliação, fornecedores | Implementação responsável |
| ROI e orçamento | 40 | Investimento sem retorno, custo total, cenário e payback | Diagnóstico |
| Operação B2B | 35 | Cotação, aprovação, catálogo empresarial, recompra | Sistemas empresariais |
| Crescimento e gestão | 35 | Gargalos do dono, capacidade, prioridades, gestão de mudança | Consultoria e execução |
| SEO, GEO e AEO | 30 | Conteúdo sem demanda, descoberta, mensuração e conversão | GeoAura |
| Produtividade de equipes | 15 | Handoffs, documentos, revisão, padronização | Automação |
| Manutenção e evolução | 10 | Incidentes, custo, performance, observabilidade | Evolução contínua |
| Total | 1.000 | | |

## Critérios para cada artigo

1. Pergunta principal específica e diferente de outras URLs; público e decisão identificados.
2. Resposta direta inicial, diagnóstico com sintomas e exemplos concretos, alternativas e critérios de escolha.
3. Mais de 10 mil caracteres de conteúdo útil, sem completar tamanho com parágrafos intercambiáveis.
4. Exemplo com entradas, regras, saída e exceções. Cálculos hipotéticos rotulados e reproduzíveis.
5. Fontes primárias conferidas para afirmações técnicas, números e regras que podem mudar.
6. Relação com uma solução Tironi Tech somente onde ela resolve o problema explicado.
7. Links internos contextualizados e CTA compatível com o momento de compra.
8. FAQ específica. Diagramas e tabelas quando explicarem fluxo ou comparação; evitar gráficos decorativos sem dados.
9. Data real de publicação e atualização; autoria institucional transparente, sem especialistas ou depoimentos inventados.
10. Revisão de similaridade semântica e factual, além de verificações de slug, estrutura, tamanho, fontes e HTML.

## Ordem inicial

Priorizar: demora no WhatsApp; orçamento parado; CRM desconectado; ERP que não suporta o processo; estoque divergente; campanhas com leads desqualificados; crescimento com margem menor; falta de previsibilidade; planilhas conflitantes; software pronto versus sob medida.

Para medir resultados, separar elegibilidade técnica, URLs indexadas, impressões sem marca, cliques, leads qualificados e contratos. Medir GEO/AEO por consultas reproduzíveis e referências efetivamente citadas, sem transformar acesso de crawler em garantia de menção.
