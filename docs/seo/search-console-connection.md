# Conexão direta com o Google Search Console

O projeto consulta a API oficial diretamente, sem intermediário, usando a biblioteca de autenticação do Google e escopo `webmasters.readonly`.
O mesmo cliente atende o endpoint privado do projeto e a CLI que o Codex pode executar neste chat. Não instala um plugin nem um servidor MCP no aplicativo.

## Ativação

Se a organização bloquear chaves de conta de serviço (`iam.disableServiceAccountKeyCreation`), preserve a política e use OAuth:

1. No Google Auth Platform, configure o aplicativo e crie um cliente do tipo **Aplicativo para computador**. Em modo de teste externo, inclua sua conta como usuário de teste. Tokens de teste podem exigir nova autorização após sete dias.
2. Baixe o JSON do cliente e guarde fora do repositório.
3. Execute `node scripts/connect-search-console.mjs CAMINHO_CLIENTE_JSON CAMINHO_CREDENCIAIS_JSON` e abra a URL apresentada. Autorize somente leitura do Search Console. O retorno usa loopback local, state e PKCE.
4. Configure `GOOGLE_APPLICATION_CREDENTIALS` em `.env.local` apontando para o arquivo de credenciais gerado e `GSC_SITE_URL=sc-domain:tironitech.com`.
5. No servidor, use o conteúdo desse arquivo em `GSC_CREDENTIALS_JSON`, além de `GSC_SITE_URL` e `GSC_API_TOKEN`. Nunca publique o token de atualização.

Com OAuth, não é necessário adicionar a conta de serviço à propriedade; as consultas seguem as permissões da conta que autorizou o aplicativo.

Alternativa com conta de serviço, quando permitida pela organização:

1. Em https://console.cloud.google.com/apis/library/searchconsole.googleapis.com selecione ou crie um projeto e habilite a Google Search Console API.
2. Em IAM e administrador → Contas de serviço, crie uma conta e uma chave JSON. Não é necessário conceder papéis de administrador do projeto.
3. No Search Console, abra a propriedade desejada → Configurações → Usuários e permissões. Adicione o `client_email` da conta de serviço, com acesso restrito para leitura.
4. Guarde o JSON fora do repositório. Copie `.env.example` para `.env.local` e configure `GOOGLE_APPLICATION_CREDENTIALS` com o caminho absoluto. Em arquivos env no Windows, prefira barras `/` no caminho.
5. Execute `npm run gsc -- sites` e copie a propriedade exata retornada para `GSC_SITE_URL`: domínio (`sc-domain:dominio.com.br`) ou prefixo (`https://dominio.com.br/`).

Não cole chaves privadas no chat. Basta informar o caminho local do JSON para concluir a configuração. Nenhuma conexão real é confirmada até uma consulta autenticada ter sucesso.

## Consultas locais e neste chat

```sh
npm run gsc -- sites
npm run gsc -- sitemaps
npm run gsc -- performance 2026-09-01 2026-09-28 page,query
npm run gsc -- inspect https://SEU-DOMINIO/pagina
```

Depois da ativação, peça neste chat para consultar cliques, impressões, CTR, posição ou indexação. O Codex executa a CLI no workspace com as credenciais locais.
Datas de desempenho seguem o fuso do Search Console (Pacific Time); os dados solicitados são finais. A CLI solicita até 25.000 linhas por chamada; `npm run gsc:analyze` pagina as dimensões principais e salva JSON e CSV em `artifacts/search-console`. A API retorna as linhas principais e pode omitir consultas anônimas, portanto não equivale a uma enumeração garantida de todas as buscas.
A inspeção consulta a versão conhecida pelo índice do Google; não executa teste ao vivo nem solicita indexação.

## Servidor do projeto

Configure `GSC_SITE_URL`, `GSC_CREDENTIALS_JSON` e `GSC_API_TOKEN` nas variáveis privadas da hospedagem. Gere o token com um gerenciador de senhas. O JSON deve ser o conteúdo original de `authorized_user` ou da conta de serviço. Não defina `GOOGLE_APPLICATION_CREDENTIALS` no servidor quando usar o JSON em variável.

O endpoint `GET /api/search-console` exige `Authorization: Bearer <GSC_API_TOKEN>` e oferece `action=sites`, `action=sitemaps`, `action=performance&startDate=YYYY-MM-DD&endDate=YYYY-MM-DD&dimensions=page,query` e `action=inspect&url=<URL codificada>`.
Consuma esse endpoint apenas a partir de um backend autorizado. Não coloque o token em JavaScript do navegador. Nenhum painel público foi conectado a esse endpoint.

## Referências

- https://developers.google.com/identity/protocols/oauth2/service-account
- https://developers.google.com/webmaster-tools/v1/searchanalytics/query
- https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect
