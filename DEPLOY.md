# 🚀 Guia de Publicação na Vercel

Este guia vai te ajudar a publicar o site da Ribeiro Segurança do Trabalho na Vercel de forma rápida e fácil.

## 📋 Pré-requisitos

1. Conta no GitHub (gratuita)
2. Conta na Vercel (gratuita)
3. Git instalado no seu computador

## 🔧 Passo a Passo

### 1. Preparar o Repositório Git

Se ainda não tem um repositório Git:

```bash
# No terminal, dentro da pasta do projeto
git init
git add .
git commit -m "Initial commit - Ribeiro Segurança do Trabalho"
```

### 2. Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em "New repository"
3. Nome: `ribeiro-seguranca-trabalho` (ou outro nome de sua escolha)
4. Marque como **Público** ou **Privado**
5. **NÃO** marque "Initialize with README"
6. Clique em "Create repository"

### 3. Conectar com GitHub

No terminal, execute:

```bash
git remote add origin https://github.com/SEU_USUARIO/ribeiro-seguranca-trabalho.git
git branch -M main
git push -u origin main
```

(Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub)

### 4. Publicar na Vercel

#### Opção A: Via Site da Vercel (Mais Fácil)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"** e faça login com sua conta GitHub
3. Clique em **"Add New Project"**
4. Selecione o repositório `ribeiro-seguranca-trabalho`
5. A Vercel detectará automaticamente as configurações:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: (deixe vazio)
   - **Output Directory**: (deixe vazio)
6. Clique em **"Deploy"**
7. Aguarde alguns segundos... 🎉 Seu site estará online!

#### Opção B: Via CLI da Vercel

1. Instale a CLI da Vercel:

   ```bash
   npm install -g vercel
   ```

2. No terminal, dentro da pasta do projeto:

   ```bash
   vercel
   ```

3. Siga as instruções:
   - Login na Vercel
   - Confirme o projeto
   - Deploy!

### 5. Configurar Domínio Personalizado (Opcional)

1. Na Vercel, vá em **Settings** > **Domains**
2. Adicione seu domínio (ex: `ribeiroseguranca.com.br`)
3. Siga as instruções para configurar DNS

## ⚙️ Configurações Importantes

### Atualizar Número do WhatsApp

Antes de publicar, atualize o número do WhatsApp no arquivo `script.js`:

```javascript
// Linha ~225
const whatsappNumber = "5516997761982"; // Substitua pelo número real
```

**Formato do número:**

- Sem espaços, parênteses ou hífens
- Com código do país (55 para Brasil)
- Exemplo: `5516997761982` para 5516997761982

### Atualizar Links do WhatsApp

No arquivo `index.html`, atualize os links do WhatsApp:

```html
<!-- Linha ~348 -->
<a href="https://wa.me/5516997761982?text=..." target="_blank"></a>
```

## 🔄 Atualizações Futuras

Para atualizar o site:

1. Faça suas alterações nos arquivos
2. No terminal:
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   git push
   ```
3. A Vercel atualizará automaticamente! ✨

## 📱 Testar o Site

Após o deploy, você receberá uma URL como:

- `https://ribeiro-seguranca-trabalho.vercel.app`

Teste todas as funcionalidades:

- ✅ Navegação
- ✅ Formulário de contato
- ✅ Links do WhatsApp
- ✅ Responsividade em mobile
- ✅ Imagens carregando corretamente

## 🐛 Solução de Problemas

### Imagens não aparecem

- Verifique se os caminhos estão corretos: `assets/logo_Ribeiro_Seg.png`
- Certifique-se de que as imagens estão na pasta `assets/`

### Formulário não funciona

- Verifique o console do navegador (F12)
- Confirme que o número do WhatsApp está correto
- Teste em diferentes navegadores

### Site não atualiza

- Limpe o cache do navegador (Ctrl + Shift + R)
- Verifique se o deploy foi concluído na Vercel

## 📞 Suporte

Se tiver problemas:

1. Verifique os logs na Vercel (Deployments > View Function Logs)
2. Teste localmente primeiro
3. Verifique a documentação da Vercel: [vercel.com/docs](https://vercel.com/docs)

## ✅ Checklist Antes de Publicar

- [ ] Número do WhatsApp atualizado
- [ ] Email de contato correto
- [ ] Todas as imagens carregando
- [ ] Formulário testado
- [ ] Links funcionando
- [ ] Responsividade testada
- [ ] SEO básico configurado
- [ ] Arquivo `vercel.json` criado

---

**Boa sorte com a publicação! 🚀**
