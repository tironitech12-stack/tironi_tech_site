# Revisão de indexação — 13/10/2026

## Dados recebidos

Exportações do Search Console: HTTPS, cobertura e desempenho, obtidas em 13/10/2026. O desempenho contém dados de 13/09 a 11/10: 589 impressões, quatro cliques, CTR de 0,68% e posição média ponderada aproximada de 16,87. A cobertura termina em 08/10, com 553 URLs indexadas e 3.614 excluídas: 3.119 por noindex, 488 detectadas sem indexação, seis redirecionadas e uma rastreada sem indexação.

Os ZIPs não incluem exemplos de URLs excluídas. Não é possível atribuir os 3.119 bloqueios a uma regra específica do código atual nem afirmar que todos devem ser removidos.

## Verificação pública e local

- O domínio sem www responde com redirecionamento permanente 308 para https://www.tironitech.com/.
- A home, /software-sob-medida e /blog/pesquisa-138-how-to-build-a-whatsapp-chatbot-guia-aplicacao respondem 200 com canonical própria e index, follow.
- O robots.txt permite rastreamento e indica o sitemap canônico. O sitemap público consultado tem 1.976 URLs.
- O catálogo fonte atual tem 1.954 artigos em português; não publica traduções. As rotas antigas /en/blog e /es/blog redirecionam para português.
- Os arquivos gerados versionados estavam desatualizados: o catálogo ainda anunciava 1.683 artigos em cada idioma estrangeiro. A geração do build sincronizou esses arquivos com a fonte atual.
- Arquivos de navegação do blog, painel e página 404 mantêm noindex intencional. Não estão no sitemap.

## Alterações

- O build agora executa audit:indexability após o prerender. Uma falha interrompe o build.
- A auditoria verifica HTML existente, regra index sem noindex/none para robots e googlebot, canonical própria e H1 em todas as URLs do sitemap, incluindo serviços e páginas institucionais.
- A auditoria também confirma a declaração do sitemap no robots.txt e rejeita URLs incluídas no sitemap que correspondam aos redirecionamentos incondicionais atuais do vercel.json.
- O artigo com 77 impressões e zero cliques recebeu título mais direto: “Chatbot no WhatsApp para empresas: análise e aplicação”. A descrição informa que se trata de análise da referência, sem prometer um tutorial técnico que o texto não oferece. Sua revisão foi datada em 13/10/2026.

## Próxima verificação no Search Console

1. Exportar exemplos das URLs excluídas por noindex e detectadas sem indexação.
2. Cruzar as URLs com o sitemap atual e os redirecionamentos. Separar versões antigas, arquivos internos e páginas comerciais/artigos que deveriam estar indexados.
3. Inspecionar ao vivo páginas prioritárias que continuam bloqueadas; comparar resposta HTTP, meta robots, X-Robots-Tag e canonical escolhida pelo Google.
4. Solicitar indexação das páginas prioritárias efetivamente corrigidas e reenviar o sitemap após publicação. Não validar como erro os bloqueios intencionais.
5. Comparar duas janelas completas de 28 dias e registrar cliques, impressões e indexação das mesmas páginas. Uma mudança na média de posição pode refletir mudança nas consultas.

Não houve acesso autenticado ao Search Console, solicitação de indexação ou publicação nesta revisão. As verificações públicas são uma amostra, não uma inspeção de todas as URLs do Google.
