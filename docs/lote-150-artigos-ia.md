# Lote de 150 artigos extensos com guardrails de IA

Este lote foi produzido em 29/09/2026 para reforçar as frentes que já mostraram tração no Search Console e criar suporte aprofundado para temas comerciais ainda fracos. Os limites de extensão são escolhas editoriais do lote original, não requisitos do Google. Quatro artigos receberam revisões práticas posteriores e seguem critérios próprios de integridade, sem extensão mínima artificial.

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

O lote original usa briefing editorial, tarefa observável, contribuição específica, cenário aplicado, artefato reutilizável, decisão, métrica, risco, fontes primárias, visual e FAQ. O comando automático verifica estrutura, integridade e sobreposição textual e registra o resultado em `docs/ai-content-review-150.json`.

Em 09/11/2026, removemos a nota fixa e o parecer de aprovação gerados junto com o conteúdo. Eles não comprovavam revisão factual. O relatório distingue as verificações estruturais aprovadas da revisão factual pendente, inclusive nos quatro artigos reescritos. A revisão factual exige uma pessoa identificada, conferência das afirmações nas fontes e registro das correções; o comando automático não realiza nem atesta essa etapa.

O comando `npm run audit:ai150` bloqueia a publicação quando encontra:

- quantidade diferente de 150 páginas no lote;
- slug ou título duplicado;
- concorrência excessiva de intenção;
- sobreposição lexical excessiva no corpo público;
- menos de 2.500 palavras depois dos filtros globais, nos textos originais não reescritos;
- menos de 12 seções ou 24 parágrafos retidos, nos textos originais não reescritos;
- briefing, fontes, visual ou FAQ incompletos;
- parecer de aprovação gerado reutilizado como revisão factual;
- artigo ausente do catálogo público.

O `build` executa `audit:ai150` e `audit:content` antes de gerar o catálogo, compilar o aplicativo, criar o HTML estático e produzir os sitemaps. Uma alteração que viole esses critérios estruturais interrompe a compilação. A revisão factual pendente é registrada separadamente; a compilação aprovada não significa que ela foi concluída.

## Verificações e pendências

- 150 artigos com revisão factual pendente;
- 150 slugs e títulos distintos;
- 10 categorias com 15 artigos cada;
- intenção máxima abaixo de 0,35 no Jaccard definido pelo projeto;
- corpo máximo abaixo de 0,65 no Jaccard de cinco palavras;
- nenhum parágrafo repetido em cinco ou mais artigos públicos, conforme a verificação lexical automática.

O relatório registra a data real de cada execução e os resultados estruturais encontrados. Essas verificações não garantem classificação, indexação, originalidade ou precisão factual. Fontes e desempenho precisam continuar sendo monitorados; consultas concorrentes devem levar a atualização ou fusão, não à criação automática de novas variações.
