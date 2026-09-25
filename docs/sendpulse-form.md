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
- `Origem`
- `Pagina`
- `UTM_Source`
- `UTM_Medium`
- `UTM_Campaign`
- `Consentimento`

O e-mail é o identificador principal do contato. A função converte telefones brasileiros com DDD para o prefixo internacional `+55` quando o visitante não informa o código do país.
