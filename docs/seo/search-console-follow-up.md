# Ajustes de indexação e conversão — 21/10/2026

## Implementado

- Links contextuais entre artigos de intenção específica e páginas comerciais. Artigos de pesquisa e assuntos sem correspondência mantêm sua navegação existente.
- Revisão de três conteúdos com sinais no Search Console: central de atendimento multiequipe, retomada de conversas e dúvidas de propostas.
- Diferenciação do par com título duplicado: um guia de implantação e um guia de medição de triagem e resolução. As duas URLs permanecem acessíveis.
- Correção do filtro editorial que descartava parágrafos novos nas revisões e da regra de snippets que podia sobrescrever uma data mais recente.
- Auditoria de datas do sitemap, H1 único, destinos comerciais e preservação das revisões no HTML gerado. Títulos duplicados passam a bloquear o build.
- Eventos `service_link_click`, `diagnostic_link_click`, `whatsapp_contact_click` e `email_contact_click`. Todos passam pelo consentimento de analytics existente. `page_path` identifica a página de origem sem enviar texto de mensagens, dados do formulário ou parâmetros da URL.
- O envio bem-sucedido do formulário mantém `diagnostic_submit` e inclui o identificador `origem` já utilizado nos links. Não é contado como lead apenas por clicar em contato.

## Verificação após publicação

1. No Search Console, comparar a inspeção indexada com o teste ao vivo das páginas comerciais, incluindo `/agente-ia-whatsapp`, `/agentes-de-ia-para-empresas` e `/automacao-whatsapp-com-ia`.
2. Conferir o último rastreamento e a canonical escolhida pelo Google nas páginas historicamente excluídas. O HTML atual indexável não comprova indexação.
3. Solicitar indexação das páginas prioritárias corrigidas e acompanhar a validação existente; evitar repetir solicitações sem alteração material.
4. Conferir eventos no GA4/Vercel com consentimento concedido e a ausência de eventos sem consentimento. Cliques são intenção de contato, não confirmação de lead.
5. Comparar janelas completas de 28 dias por página, país e dispositivo. Relacionar contatos recebidos a oportunidades qualificadas no processo comercial.

O sitemap continua único. Arquivo, painel, erros e versões internacionais redirecionadas permanecem fora dele. Não foram aplicados redirecionamentos ou exclusões editoriais em massa. A auditoria local valida o artefato gerado; status HTTP e cabeçalhos de produção também dependem da hospedagem.

## Validação local concluída em 22/10/2026

- `npm run build`: aprovado, incluindo 1.954 artigos e 1.976 entradas de sitemap.
- `npm run lint`: sem erros; permanece o aviso anterior de dependência de hook em `src/hooks/useViewportMode.js`.
- `node --experimental-vm-modules scripts/test-conversion-consent.mjs`: aprovado para consentimento ausente, negado, concedido, revogado e falha do provedor, sem envio para contas reais.
- Navegador: artigo de atendimento multiequipe → serviço de agente no WhatsApp → formulário com interesse de automação selecionado e origem na URL.
- O build mantém o aviso de bundle grande do catálogo de artigos. Nenhuma publicação foi realizada nesta etapa.
