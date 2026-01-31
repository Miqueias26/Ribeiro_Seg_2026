# ✅ Checklist de Publicação

## Antes de Publicar

### 📝 Conteúdo

- [x] Formulário de contato criado
- [x] Formulário redireciona para WhatsApp
- [x] Todos os textos adaptados para São Paulo
- [x] Serviços focados apenas em SST
- [x] Notícias sobre segurança do trabalho
- [x] Logo adicionado no header e footer

### 🔧 Funcionalidades

- [x] Menu mobile funcional
- [x] Scroll suave entre seções
- [x] Botão "voltar ao topo"
- [x] Slider do hero
- [x] Animações ao scroll
- [x] Formulário com máscara de telefone
- [x] Validação de formulário
- [x] Notificações de sucesso

### 📱 Responsividade

- [x] Mobile (480px)
- [x] Tablet (768px)
- [x] Desktop (968px+)
- [x] Imagens responsivas
- [x] Formulário responsivo
- [x] Menu mobile funcional

### ⚙️ Configurações

- [ ] **ATUALIZAR NÚMERO DO WHATSAPP** em `script.js` (linha ~225)
- [ ] **ATUALIZAR LINKS DO WHATSAPP** em `index.html`
- [ ] Verificar email de contato
- [x] Meta tags SEO adicionadas
- [x] vercel.json criado
- [x] Caminhos de imagens corretos

### 🖼️ Imagens

- [x] Logo no header
- [x] Logo no footer
- [x] Caminhos relativos corretos
- [x] Alt text nas imagens

## 📋 Passos para Publicar

1. **Atualizar número do WhatsApp:**
   - Abra `script.js`
   - Linha ~225: `const whatsappNumber = '5516997761982';`
   - Substitua pelo número real (formato: 5516997761982)

2. **Atualizar links do WhatsApp:**
   - Abra `index.html`
   - Procure por `wa.me/5516997761982`
   - Substitua pelo número real

3. **Testar localmente:**
   - Abra `index.html` no navegador
   - Teste o formulário
   - Teste em mobile (F12 > Device Toolbar)

4. **Publicar na Vercel:**
   - Siga o guia em `DEPLOY.md`
   - Ou use: `vercel --prod`

## 🚀 Comandos Úteis

```bash
# Iniciar servidor local
python -m http.server 8000

# Publicar na Vercel (se tiver CLI instalada)
vercel

# Publicar em produção
vercel --prod
```

## ✨ Tudo Pronto!

O site está preparado para publicação. Basta atualizar o número do WhatsApp e seguir o guia de deploy!
