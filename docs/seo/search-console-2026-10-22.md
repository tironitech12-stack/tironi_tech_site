# Diagnóstico completo do Search Console — 22/10/2026

## Escopo e datas

A propriedade `sc-domain:tironitech.com` foi consultada diretamente pela API oficial, com acesso somente leitura. A coleta inclui desempenho por data, consulta, página, país, dispositivo e aparência, o sitemap, 19 inspeções de URL e os relatórios da interface que não existem na API: cobertura, HTTPS, Core Web Vitals, rastreamento, links, melhorias, ações manuais, segurança e remoções.

Os dados finais de desempenho terminam em 20/10/2026. A linha de 21/10 ainda estava incompleta no momento da consulta. Os arquivos integrais estão em `artifacts/search-console/2026-10-20/` e incluem JSON e CSVs.

## Resultado da pesquisa

| Período | Cliques | Impressões | CTR | Posição média |
|---|---:|---:|---:|---:|
| Todo o histórico disponível até 20/10 | 6 | 747 | 0,80% | 15,76 |
| Últimos 28 dias, 23/09–20/10 | 5 | 727 | 0,69% | 15,42 |
| 28 dias anteriores, 26/08–22/09 | 1 | 20 | 5,00% | 28,35 |
| Dados provisórios até 21/10 | 7 | 770 | 0,91% | 15,65 |

As impressões cresceram 3.535% e os cliques 400% na comparação entre janelas de 28 dias, mas a base anterior era muito pequena. A visibilidade começou a existir; o CTR ainda é baixo e o volume não permite conclusões estatísticas fortes para consultas com uma ou duas impressões.

Desktop concentra 615 das 747 impressões e tem CTR de 0,65%. Mobile tem 132 impressões, CTR de 1,52% e posição média melhor, 11,55 contra 16,67 no desktop. O Brasil responde por 380 impressões e cinco cliques; os Estados Unidos têm 141 impressões e nenhum clique, sinal de que versões ou temas internacionais estão aparecendo sem atrair tráfego.

A API mostrou 89 consultas, mas elas somam somente 151 impressões. O restante foi anonimizado pelo Google. Por isso, decisões editoriais devem combinar os termos visíveis com as páginas e intenções, não assumir que a lista de consultas é completa.

## Páginas e consultas com oportunidade

As páginas que mais merecem ajuste de snippet e alinhamento de intenção são:

| Página | Cliques | Impressões | CTR | Posição |
|---|---:|---:|---:|---:|
| Chatbot no WhatsApp para empresas — análise e aplicação | 0 | 77 | 0% | 5,65 |
| Central de atendimento no WhatsApp multiequipe | 0 | 27 | 0% | 3,15 |
| Dúvidas de proposta no WhatsApp sem mudar o escopo | 0 | 21 | 0% | 5,86 |
| Tironi Tech Club | 0 | 15 | 0% | 4,20 |
| Reconciliação de dados entre sistemas | 0 | 12 | 0% | 6,92 |
| Instagram para WhatsApp preservando contexto | 0 | 10 | 0% | 5,80 |
| Idempotência em integrações de pedidos | 0 | 10 | 0% | 8,60 |

O artigo de chatbot recebeu 77 impressões e zero clique, além de um alerta do Search Console por crescimento de 433% nas impressões entre 05/10 e 11/10. Seu título e descrição já foram reescritos em 13/10; a próxima ação é medir 28 dias completos depois da mudança antes de alterar novamente. Nas outras páginas, usar a consulta e o benefício concreto no início do título e da descrição, preservando a promessa entregue pelo texto.

Quatro consultas têm posição até 30, pelo menos três impressões e zero clique:

- `onboarding de clientes b2b`: cinco impressões, posição 2;
- `idempotencia`: quatro impressões, posição 7;
- `sales automation tools`: três impressões, posição 18;
- `ferramentas de red teaming de ia`: três impressões, posição 30.

Os dois primeiros pares página/consulta devem receber prioridade de snippet. O volume ainda é pequeno, então a decisão deve ser confirmada após mais impressões.

## Indexação

O relatório geral, atualizado em 15/10, registra 594 URLs indexadas e 3.593 não indexadas:

| Motivo | URLs |
|---|---:|
| Excluída por `noindex` | 3.106 |
| Detectada, mas não indexada | 448 |
| Página com redirecionamento | 22 |
| Rastreada, mas não indexada | 17 |

O recorte exato do sitemap tem 1.976 URLs: 420 indexadas e 1.556 não indexadas, taxa de indexação de 21,3%. As exclusões do sitemap são 1.094 por `noindex`, 448 detectadas e 14 rastreadas sem indexação. O sitemap não tem erros ou avisos; foi reenviado em 13/10 e baixado pelo Google em 21/10.

As 1.094 exclusões por `noindex` são um estado histórico: os exemplos foram rastreados em 23–24/09, e a validação começou em 14/10. Uma amostra em produção hoje retorna HTTP 200, canonical própria e `index, follow`, sem `X-Robots-Tag`. Portanto, o HTML atual está corrigido, mas o Google ainda precisa rastrear novamente e concluir a validação. Não remover essas URLs nem mudar a regra outra vez enquanto a validação está em andamento.

Das 19 URLs inspecionadas por API, 15 estão indexadas. Quatro são neutras: o domínio sem `www` é um redirecionamento esperado, e `/agente-ia-whatsapp`, `/agentes-de-ia-para-empresas` e `/automacao-whatsapp-com-ia` estão “detectadas, mas não indexadas”. As três páginas comerciais estão no sitemap, respondem 200, têm canonical própria e `index, follow`; precisam de links internos editoriais fortes e tempo de rastreamento.

O arquivo `/blog/arquivo` ainda aparece no histórico de desempenho, com 55 impressões e zero clique, mas hoje usa `noindex, follow` e não está no sitemap. Essa presença deve cair conforme o Google atualiza o índice.

## Rastreamento e saúde técnica

Nos últimos 90 dias houve 10,8 mil solicitações de rastreamento, 110 MB baixados e resposta média de 121 ms. O Google recebeu 99% de respostas 200; 301 e 404 ficaram abaixo de 1%. Foram 10.717 solicitações ao host `www` e 33 ao domínio sem `www`, ambos sem problemas. A finalidade foi 55% descoberta e 45% atualização.

HTTPS está íntegro: três URLs HTTPS e zero URL não HTTPS com erro. Não há volume de uso suficiente para dados de campo de Core Web Vitals em celular ou computador; isso significa ausência de amostra, não aprovação de desempenho. O relatório de breadcrumb mostra uma entidade válida e zero inválidas. Não há ações manuais, problemas de segurança nem solicitações de remoção recentes.

## Autoridade e arquitetura de links

O Search Console reconhece apenas um link externo, vindo de `clubxnamai.com.br` para a home. Este é o maior limitador de autoridade. Os links internos reconhecidos somam 25.503, mas estão concentrados: 22.169 para a home, 3.333 para o Club e um para `/como-funciona`. Embora os artigos tenham blocos de relacionados no HTML, o relatório ainda não mostra distribuição relevante para guias e páginas comerciais.

## Plano priorizado

1. **Acompanhar a validação de `noindex` até o Google concluir.** Medir semanalmente a queda das 1.094 URLs do sitemap e o aumento das 420 indexadas. Reabrir o diagnóstico somente se exemplos rastreados depois de 14/10 ainda mostrarem `noindex`.
2. **Fortalecer as três páginas comerciais não indexadas.** Inserir links contextuais a partir da home, do Club e de artigos já indexados sobre WhatsApp e agentes de IA. Usar âncoras descritivas e manter cada página no sitemap.
3. **Concentrar o núcleo editorial.** Para as 448 detectadas e 14 rastreadas sem indexação, priorizar conteúdos ligados a receita e clusters que já recebem impressões. Páginas sem demanda, diferenciação ou links devem ser fundidas, melhoradas ou retiradas do sitemap em lotes pequenos, após revisão editorial.
4. **Melhorar CTR onde já existe posição.** Começar por onboarding B2B, idempotência, central multiequipe e proposta pelo WhatsApp. Avaliar título e descrição a cada 28 dias completos; não reagir a uma ou duas impressões.
5. **Construir autoridade externa real.** Buscar menções de parceiros, clientes, associações empresariais, diretórios setoriais confiáveis e publicações técnicas que apontem para páginas comerciais ou guias fortes. O ponto de partida atual é somente um domínio externo reconhecido.
6. **Medir experiência com dados próprios.** Como o Search Console não tem Core Web Vitals de campo, executar PageSpeed/Lighthouse nas páginas comerciais e nos modelos de artigo e acompanhar Web Vitals no analytics até o tráfego gerar amostra no CrUX.
7. **Revisar internacionalização.** URLs antigas em inglês e espanhol aparecem em resultados e hoje redirecionam para português. Manter somente idiomas realmente publicados, com conteúdo próprio, canonical e `hreflang` coerentes; remover do sitemap as versões que apenas redirecionam.

## Meta de 30 dias

Usar como metas operacionais: aumentar as URLs indexadas do sitemap de 420 para pelo menos 700, reduzir as exclusões históricas por `noindex` após a validação, obter indexação das três páginas comerciais, elevar o CTR de 28 dias acima de 1% e conquistar pelo menos cinco domínios externos relevantes. As metas devem ser reavaliadas com o próximo ciclo de 28 dias, porque o histórico atual ainda é curto.
