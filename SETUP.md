# Vender Sites — Setup Completo

Seu site React + backend WhatsApp bot está pronto! Aqui está o guia passo a passo.

## 📁 Estrutura do Projeto

```
georgelucas-dev/
├── frontend (React + Vite)
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── backend (Node.js + Express + WhatsApp Bot)
    ├── server.js
    ├── package.json
    ├── .env.example
    └── README.md
```

## 🎨 Frontend (React)

### Rodar localmente

```bash
# Na raiz do projeto (onde fica este arquivo)
npm install
npm run dev
```

Acesse `http://localhost:5173` — você verá:
- Header com navbar + logo
- Hero com chamada à ação
- Seções: Serviços, Planos (com promo Essencial 5min), Contato
- **Tema escuro** com cores cian/cyan
- Todos os CTAs apontam para WhatsApp (configure seu número em `src/config.js`)

### Configurar seu número WhatsApp

Edite `src/config.js`:
```javascript
export const WHATSAPP_NUMBER = 'COLOQUE_SEU_NUMERO_AQUI' // Formato: 5511999999999
```

## 🤖 Backend (WhatsApp Bot)

### Setup completo

1. **Instalar dependências:**
   ```bash
   cd backend
   npm install
   ```

2. **Configurar credenciais Meta:**
   - Siga os passos em `backend/README.md` para obter:
     - Business Account ID
     - Phone Number ID
     - Access Token
     - Webhook Token (você escolhe um valor seguro)

3. **Criar arquivo `.env`:**
   ```bash
   cp .env.example .env
   ```
   Preencha com seus valores reais.

4. **Rodar servidor:**
   ```bash
   npm run dev
   # Rodará em http://localhost:3001
   ```

5. **Expor para a internet (teste local):**
   ```bash
   # Instale ngrok: https://ngrok.com/download
   ngrok http 3001
   # Você receberá uma URL pública como https://abc123.ngrok.io
   ```

6. **Configurar webhook na Meta:**
   - Vá para seu app na [Meta Console](https://developers.facebook.com)
   - Em WhatsApp > Configuration
   - Webhook URL: `https://seu_url_ngrok.ngrok.io/webhook`
   - Verify Token: (mesmo valor que `WEBHOOK_TOKEN` no `.env`)
   - Webhook Fields: `messages`, `message_status`
   - Clique em Verify and Save

7. **Testar:**
   - Envie uma mensagem WhatsApp para seu número registrado
   - Você deve receber uma resposta automática em segundos

## 📊 O que seu site oferece

### Planos
- **Essencial**: 1 página, R$800 (com promo R$500 por 5 min)
- **Profissional**: Até 10 páginas, R$2.500
- **E-commerce**: Catálogo + pagamentos, R$4.500

### Cada plano oferece 2 formas de compra
1. **Comprar agora** → abre WhatsApp com mensagem pré-preenchida
2. **Contratar com consultoria** → também via WhatsApp

### Bot responde automaticamente
- Mensagens sobre "planos/preço" → informação dos planos
- Mensagens sobre "suporte/consultoria" → informação de consultoria
- Outras mensagens → confirmação de recebimento

## 🚀 Deploy (Produção)

### Frontend (React)
Deploy gratuito em:
- **Vercel** (recomendado para Next/React): `vercel deploy`
- **Netlify**: arrastar pasta `dist/` após `npm run build`

### Backend (Bot)
Deploy em:
- **Vercel Serverless** (com suporte a Node)
- **Heroku** (gratuito encerrou, mas Railway é barato)
- **Railway.app** (muito simples)
- **Sua VPS** (mais controle e privacidade)

Para produção no Vercel:
```bash
# Gere a build
npm run build

# Deploy
vercel deploy
```

Atualize `WEBHOOK_TOKEN` como variável de ambiente no seu host.

## 🔒 Segurança & Boas Práticas

1. **Nunca commite `.env`** com credenciais reais
2. **Token de acesso**: regenere periodicamente na Meta Console
3. **Rate limiting**: implemente para evitar abuso (optional)
4. **Logging**: salve mensagens em banco de dados para auditoria
5. **Termos de Uso**: informe ao cliente sobre o bot automático

## 📝 Próximas Melhorias

- ✅ Integrar com IA (OpenAI/GPT) para respostas mais naturais
- ✅ Banco de dados (Firebase/MongoDB) para salvar leads
- ✅ Dashboard admin para ver conversas e analytics
- ✅ Templates de mensagens (aprovadas pela Meta para mensagens proativas)
- ✅ Integração com CRM (Pipedrive, Hubspot)

## 📧 Suporte

Se encontrar problemas:
1. Verifique `WEBHOOK_TOKEN` na Meta
2. Confirme que ngrok está rodando (e .ngrok.io URL está atualizada)
3. Verifique logs no console do backend
4. Valide Access Token em Meta Console

---

**Tudo pronto?** Você tem um site profissional vendendo sites com bot automático respondendo no WhatsApp! 🎉
