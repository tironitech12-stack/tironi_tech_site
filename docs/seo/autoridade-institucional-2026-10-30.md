# Experiência institucional e conteúdo acessível

## Problema corrigido

A home e parte das páginas comerciais exibiam a experiência de 23+ anos somente após executar JavaScript. O HTML inicial omitia os blocos de métricas. Os contadores também iniciavam em zero enquanto aguardavam a entrada no campo de visão.

A apresentação usava “experiência acumulada” e, em inglês, “combined experience”, sem explicar a atribuição. A trajetória informada abrange marca e fundador; ela não determina automaticamente a data de fundação da pessoa jurídica.

## Alterações

- A apresentação institucional contextualiza os mais de 23 anos na trajetória da marca e de seu fundador e relaciona essa experiência aos serviços atuais.
- Metadados e descrição compartilhada de Organization incluem a experiência em tecnologia, sem acrescentar foundingDate ou datas estimadas.
- A home pré-renderizada inclui a apresentação institucional e as métricas publicadas no site.
- As dez páginas de serviços incluem as mesmas métricas no HTML inicial e no React, usando uma fonte de conteúdo compartilhada.
- As versões em português, inglês e espanhol usam uma descrição consistente de experiência em tecnologia.
- Contadores começam com o valor real e mantêm um nome acessível estável durante a animação.
- A auditoria verifica a apresentação e as métricas no corpo visível do HTML, excluindo scripts e estilos.

## Validação

Executar `npm run build`, incluindo os testes de metadados, catálogo, conteúdo, revisões e indexabilidade. A auditoria de indexabilidade cobre 1.954 artigos e 2.012 URLs do sitemap, além da paridade de experiência da home e das páginas comerciais. Conferir no navegador o texto institucional e os contadores antes da rolagem.

## Continuidade editorial

Documentar pessoas, períodos, marcos da marca, projetos e resultados atribuíveis para sustentar a trajetória com fontes verificáveis. Essas informações ainda não foram inventadas nem convertidas em uma cronologia. A publicação destas correções melhora a disponibilidade e a clareza do conteúdo; mudanças em indexação, posição e recomendações precisam ser medidas depois.
