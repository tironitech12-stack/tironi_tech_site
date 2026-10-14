# Ajustes orientados pelos relatórios de 14/10/2026

O detalhamento de noindex termina em 08/10 e registra 1.107 exclusões, com 1.000 exemplos exportados. Os 1.000 exemplos são artigos em português presentes no sitemap público. Seus últimos rastreamentos registrados são de 23 e 24/09; duas URLs verificadas ao vivo já entregam index, follow. Isso sugere dados históricos, mas não comprova a situação atual de toda a lista.

As 488 URLs detectadas sem indexação constam no sitemap atual, incluindo páginas de serviços. A data 1969-12-31 não deve ser interpretada como rastreamento real. Um único artigo, /blog/pesquisa-187-cursor-ai-coding-agent-guia-aplicacao, consta como rastreado sem indexação.

## Alterações locais

- Links para as dez páginas de serviços no início do blog, no componente React e no HTML prerenderizado. A navegação utiliza rótulos descritivos e quebra de linha em telas pequenas.
- Auditoria do build exige esses links no HTML do blog, para detectar regressões na descoberta das páginas comerciais.
- Revisão do artigo sobre Cursor na mesma URL, com introdução, exemplo de validação de contrato, regras de acesso, revisão do diff, testes e avaliação de retrabalho. O texto apresenta uma proposta de piloto, não resultados de uma implantação real. Fonte: https://cursor.com/docs.
- O artigo aponta para a página de desenvolvimento de software sob medida e informa a revisão em 14/10/2026.

As mudanças não solicitam rastreamento ao Google. Após publicação, inspecionar no Search Console as páginas comerciais e uma amostra das exclusões antigas; solicitar indexação das URLs prioritárias cujo teste ao vivo esteja correto. As regras noindex dos arquivos internos, do painel e da página de erro são preservadas.
