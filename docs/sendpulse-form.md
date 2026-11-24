# Formulário integrado ao SendPulse

A rota `/formulario` envia os dados para `/api/sendpulse-lead`. A função serverless autentica no SendPulse e adiciona o contato à lista configurada.

## Configuração na Vercel

Cadastre `SENDPULSE_ADDRESSBOOK_ID` e uma das opções de autenticação:

- `SENDPULSE_API_KEY`; ou
- `SENDPULSE_CLIENT_ID` e `SENDPULSE_CLIENT_SECRET`.

Configure as variáveis nos ambientes Production, Preview e Development conforme a necessidade. Depois, faça um novo deploy.

## Variáveis da lista

A lista do SendPulse deve aceitar estas variáveis:

- `Name`
- `Phone`
- `Empresa`
- `Interesse`
- `Projeto` (texto do briefing, quando informado)
- `Origem_CTA` (identificador interno da página ou botão, quando disponível)
- `Origem`
- `Pagina`
- `UTM_Source`
- `UTM_Medium`
- `UTM_Campaign`
- `Consentimento`

O e-mail continua obrigatório como identificador do contato; telefone e briefing são opcionais. `Pagina` guarda a entrada e os campos UTM são preservados durante a visita quando Analytics está autorizado. Confira na lista do SendPulse se os novos campos recebem os valores após um envio de teste. A função converte telefones brasileiros com DDD para o prefixo internacional `+55` quando o visitante não informa o código do país.
