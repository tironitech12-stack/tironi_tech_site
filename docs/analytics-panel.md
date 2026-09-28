# Painel de inteligência do site

A rota privada `/painel` consulta o Vercel Web Analytics pelo backend e apresenta acessos, visitantes, taxa de rejeição, evolução diária, artigos mais vistos, origens e dispositivos. O token da Vercel nunca é enviado ao navegador.

## Variáveis na Vercel

Configure nos ambientes Production e Preview:

- `PANEL_PASSWORD`: senha usada para entrar no painel.
- `PANEL_SESSION_SECRET`: segredo longo e aleatório usado para assinar a sessão de oito horas.
- `VERCEL_TOKEN`: token de acesso com permissão de leitura do projeto.
- `VERCEL_ANALYTICS_PROJECT_ID`: ID ou slug do projeto que recebe o tráfego de `tironitech.com`.
- `VERCEL_ANALYTICS_TEAM_ID`: ID ou slug do time proprietário, quando o projeto pertence a um time.
- `VITE_CLARITY_PROJECT_ID`: ID público do projeto Microsoft Clarity, usado no build do site.
- `CLARITY_PROJECT_ID`: o mesmo ID, usado no backend para criar o link de gravações.

Depois de salvar as variáveis, faça um novo deploy. O painel é prerenderizado com `noindex`, não aparece no sitemap e não registra as próprias visitas.

## Privacidade e gravações

O Clarity só é carregado depois que o visitante autoriza a categoria Analytics no painel de cookies. A integração envia `ad_Storage: denied` e `analytics_Storage: granted` pelo Consent API V2. Ao revogar a autorização, a integração informa a recusa e solicita a remoção dos cookies do Clarity.

Configure o projeto do Clarity para mascarar por padrão textos sensíveis e todos os campos de entrada. A Política de Privacidade do site informa o uso de gravações de interação para melhoria de experiência.
