# OpenAI Ads — WhatsApp

React/Vite; Pixel apenas. Pixel público: QzffkApkFtwFMCpgsADApu. Primeira integração OpenAI Ads, reutilizando o consentimento marketing existente.

Conversão: ativação de link HTTPS para o WhatsApp 5543996676633, evento lead_created com type customer_action. Inclui botão flutuante, rodapé e diagnóstico, desktop/mobile, teclado e botão central. Não confirma envio ou recebimento de mensagem. Um listener global evita disparos adicionais nos handlers Google Ads existentes; inicialização única por documento. Repetir um clique representa outra ativação.

SDK carregado somente após consentimento marketing; cada evento confere consentimento atual. Revogação bloqueia novas chamadas do aplicativo. Não há dados de usuário adicionais, telefone do visitante ou texto de mensagem no payload. Atribuição e transporte são responsabilidade do SDK. Debug desativado.

CAPI não implementada: não necessária para o clique solicitado; nenhuma chave utilizada. Não há eventos duplicados Pixel/CAPI. page_viewed e contents_viewed foram deliberadamente omitidos para medir apenas a conversão solicitada. Carrinho, checkout, pedidos, cadastros, agendamentos, assinaturas e trials não têm confirmação de sucesso neste fluxo e não foram instrumentados.

Verificação: ESLint; teste isolado scripts/test-openai-ads.mjs (node --experimental-vm-modules), cobrindo consentimento ausente/concedido/revogado, inicialização única, destino correto, botão central e falha SDK. Nenhum evento real é enviado pelos testes. Recepção e atribuição no painel Ads ainda precisam ser confirmadas com um contato real e consentido; bloqueadores podem impedir medição.

Documentação: https://developers.openai.com/ads/measurement-pixel

Revisão de implantação: conferir compatibilidade com os requisitos de privacidade, segurança, consentimento e tratamento de dados da empresa. A implementação mantém o consentimento de marketing existente.
