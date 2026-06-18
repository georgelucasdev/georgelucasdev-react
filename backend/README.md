# WhatsApp Cloud API Bot — Backend

Bot automático para responder mensagens WhatsApp com respostas pré-configuradas. Usa a oficial **WhatsApp Cloud API** da Meta.

## Pré-requisitos

- Node.js 16+
- Conta Meta Business (gratuita)
- Um número de telefone (pode ser o seu pessoal no início do teste)

## Setup Rápido

### 1. Criar App no Meta

1. Acesse [Meta for Developers](https://developers.facebook.com)
2. Crie um novo **App** (ou use existente)
3. Escolha **Business** como tipo
4. Adicione o produto **WhatsApp**
5. Selecione sua **Business Account** (ou crie uma)

### 2. Registrar Número de Telefone

1. Em **WhatsApp > Getting Started**, registre um número de telefone (pode usar o seu pessoalmente para testes)
2. Você receberá um **Phone Number ID** (ex: `102348237498...`)
3. Anote também o **Business Account ID**

### 3. Gerar Access Token

1. Acesse **Settings > User Roles > System Users**
2. Crie um novo **System User** com role `Admin`
3. Gere um **Access Token** com as permissões:
   - `whatsapp_business_messaging`
   - `whatsapp_business_management`

Anote o token (válido por 60 dias aproximadamente).

### 4. Configurar .env Localmente

Copie `.env.example` para `.env` e preencha com seus valores:

```bash
cp .env.example .env
```

Edite `.env`:
```
WHATSAPP_BUSINESS_ACCOUNT_ID=seu_business_account_id
WHATSAPP_PHONE_NUMBER_ID=seu_phone_number_id
WHATSAPP_ACCESS_TOKEN=seu_access_token_aqui
WEBHOOK_TOKEN=escolha_um_token_seguro_aleatorio
PORT=3001
```

### 5. Instalar Dependências e Rodar

```bash
npm install
npm run dev
```

Você verá:
```
🚀 WhatsApp Bot rodando em http://localhost:3001
```

### 6. Configurar Webhook na Meta

Para receber mensagens, você precisa expor seu servidor localmente para a Meta. Use **ngrok** (túnel seguro):

```bash
# Instale ngrok: https://ngrok.com/download
ngrok http 3001
```

Você receberá uma URL pública como `https://abc123.ngrok.io`.

**Na Meta Console:**

1. Vá para **WhatsApp > Configuration**
2. Em **Webhook URL**, preencha: `https://seu_url_ngrok.ngrok.io/webhook`
3. Em **Verify Token**, use o valor que colocou em `WEBHOOK_TOKEN` no `.env`
4. Em **Webhook Fields**, selecione:
   - `messages`
   - `message_status`
5. Clique em **Verify and Save**

A Meta fará uma requisição GET para validar. Se tudo estiver certo, você verá:
```
Webhook verificado com sucesso!
```

### 7. Testar

1. Envie uma mensagem WhatsApp para seu número registrado
2. Você receberá uma resposta automática

**Ou teste via API:**

```bash
curl -X POST http://localhost:3001/send \
  -H "Content-Type: application/json" \
  -d '{"phone":"5511999999999","message":"Teste do bot!"}'
```

## Estrutura de Respostas

Edit `server.js` para customizar respostas no objeto `autoResponses`:

```javascript
const autoResponses = {
  default: 'Olá! Recebemos sua mensagem...',
  planos: 'Temos 3 planos...',
  contato: 'Para consultoria...',
}
```

O bot analisa a mensagem recebida e escolhe uma resposta baseada em palavras-chave.

## Próximos Passos (Produção)

1. **Deploy**: use Vercel, Heroku, Railway, ou sua VPS
2. **Integração com CRM**: salve mensagens em banco de dados (Firebase, MongoDB, Postgres)
3. **IA avançada**: integre OpenAI/GPT para respostas naturais
4. **Validação de números**: implemente regras de negócio (ex: enviar infopreço apenas para clientes verificados)

## Endpoints

- `GET /health` — Status do servidor
- `GET /webhook` — Validação de webhook (Meta)
- `POST /webhook` — Receber mensagens
- `POST /send` — Enviar mensagem manualmente

## Troubleshooting

- **"Webhook verification failed"**: verifique se `WEBHOOK_TOKEN` está correto na Meta e no `.env`
- **"Unauthorized" ao enviar mensagem**: cheque se `ACCESS_TOKEN` é válido e tem as permissões certas
- **Não recebe mensagens**: certifique-se que ngrok está rodando e a URL foi atualizada na Meta

## Referências

- [WhatsApp Cloud API Docs](https://developers.facebook.com/docs/whatsapp/cloud-api)
- [Webhook Reference](https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks)
- [Send Messages](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/send-messages)
