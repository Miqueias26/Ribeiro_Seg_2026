# 📍 Estrutura de Rotas do Site

## Páginas Criadas

### Página Principal
- **`index.html`** - Página inicial (Home)
  - URL: `/` ou `/index.html`
  - Seções: Hero, Sobre, Serviços, Localizações, Clientes, Notícias, Proposta

### Páginas de Navegação

#### Contato
- **`contato.html`** - Página de contato completa
  - URL: `/contato` ou `/contato.html`
  - Contém: Formulário de contato, informações de contato, links WhatsApp

#### Sobre Nós
- **`sobre.html`** - Página sobre a empresa
  - URL: `/sobre` ou `/sobre.html`
  - Contém: Missão, visão, valores, diferenciais

#### Serviços
- **`servicos.html`** - Página com todos os serviços
  - URL: `/servicos` ou `/servicos.html`
  - Contém: Detalhes de todos os 8 serviços com âncoras (#ppra, #pcmso, etc.)

#### Políticas
- **`privacidade.html`** - Política de Privacidade e Código de Ética
  - URL: `/privacidade` ou `/privacidade.html`
  
- **`qualidade.html`** - Política da Qualidade
  - URL: `/qualidade` ou `/qualidade.html`

#### Outras
- **`parcerias.html`** - Parcerias estratégicas
  - URL: `/parcerias` ou `/parcerias.html`
  
- **`responsabilidade.html`** - Responsabilidade Social
  - URL: `/responsabilidade` ou `/responsabilidade.html`

## Estrutura de Navegação

### Menu Principal
- Home → `index.html`
- Sobre Nós → `sobre.html` (com dropdown)
  - Sobre Nós
  - Parcerias
  - Responsabilidade Social
  - Política de Privacidade
  - Política da Qualidade
- Serviços → `servicos.html` (com dropdown)
  - PPRA
  - PCMSO
  - LTCAT
  - Treinamentos
  - TST
  - Coordenação de Segurança
  - Auditorias
  - Análise de EPIs
- Contato → `contato.html`
- Orçamento Grátis → `contato.html`

## Rotas Vercel

O arquivo `vercel.json` está configurado para:
- Redirecionar URLs amigáveis (`/contato`) para arquivos HTML
- Manter compatibilidade com URLs diretas (`/contato.html`)
- Servir arquivos estáticos corretamente

## Funcionalidades por Página

### Todas as Páginas Incluem:
- ✅ Header com logo e navegação
- ✅ Footer completo com informações
- ✅ Botão "voltar ao topo"
- ✅ Menu mobile responsivo
- ✅ Design consistente e profissional

### Página de Contato Especial:
- ✅ Formulário completo com validação
- ✅ Redirecionamento para WhatsApp
- ✅ Máscara de telefone brasileira
- ✅ Notificações de sucesso

## Como Testar

1. Abra `index.html` no navegador
2. Navegue pelos links do menu
3. Teste o formulário de contato
4. Verifique a responsividade em mobile
5. Teste todos os links entre páginas

## Próximos Passos para Publicação

1. ✅ Todas as páginas criadas
2. ✅ Rotas configuradas no vercel.json
3. ✅ Links atualizados
4. ⚠️ **Atualizar número do WhatsApp** em `script.js` (linha ~225)
5. ⚠️ **Atualizar links do WhatsApp** em todas as páginas HTML
6. Publicar na Vercel seguindo `DEPLOY.md`
