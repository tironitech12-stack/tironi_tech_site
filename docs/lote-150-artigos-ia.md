# Lote de 150 artigos extensos com guardrails de IA

Este lote foi produzido em 29/09/2026 para reforçar as frentes que já mostraram tração no Search Console e criar suporte aprofundado para temas comerciais ainda fracos. O comprimento é uma escolha editorial: cada página pública possui entre 2.822 e 3.191 palavras depois da remoção de parágrafos repetidos pelo catálogo global.

## Distribuição

Foram publicados 15 artigos em cada frente:

- ChatBô e atendimento;
- Prospecção e CRM;
- Agentes de IA e Agentic AI;
- RAG, conhecimento corporativo e context engineering;
- Integrações com CRM, ERP e APIs;
- Automação de processos e operações;
- Software personalizado;
- Governança, segurança e confiabilidade;
- SEO e GEO;
- ROI, custo e business case para IA.

## Guardrails obrigatórios

Cada artigo precisa apresentar briefing editorial, tarefa observável, contribuição específica, cenário aplicado, artefato reutilizável, decisão, métrica, risco, fontes primárias, visual, FAQ e parecer de IA. A revisão é realizada pelo Codex no ambiente local e fica registrada no próprio artigo e no relatório `docs/ai-content-review-150.json`.

O comando `npm run audit:ai150` bloqueia a publicação quando encontra:

- quantidade diferente de 150 páginas no lote;
- slug ou título duplicado;
- concorrência excessiva de intenção;
- sobreposição lexical excessiva no corpo público;
- menos de 2.500 palavras depois dos filtros globais;
- menos de 12 seções ou 24 parágrafos retidos;
- briefing, fontes, visual ou FAQ incompletos;
- score de IA inferior a 80;
- flag crítica ou parecer diferente de `approved`;
- artigo ausente do catálogo público.

O `build` executa `audit:ai150` e `audit:content` antes de gerar o catálogo, compilar o aplicativo, criar o HTML estático e produzir os sitemaps. Assim, uma alteração que viole os guardrails interrompe a publicação.

## Resultado validado

- 150 artigos aprovados;
- zero flags críticas;
- 150 slugs e títulos distintos;
- 10 categorias com 15 artigos cada;
- intenção máxima abaixo de 0,35 no Jaccard definido pelo projeto;
- corpo máximo abaixo de 0,65 no Jaccard de cinco palavras;
- nenhum parágrafo repetido em cinco ou mais artigos públicos;
- 5.320 páginas de artigo prerenderizadas e 5.343 URLs auditadas no sitemap.

O parecer de IA é um guardrail editorial, não uma garantia de classificação, indexação ou permanência factual. Fontes e desempenho precisam continuar sendo monitorados; consultas concorrentes devem levar a atualização ou fusão, não à criação automática de novas variações.
