import express from 'express'
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

const app = express()
app.use(express.json())

const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID
const BUSINESS_ACCOUNT_ID = process.env.WHATSAPP_BUSINESS_ACCOUNT_ID
const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN
const WEBHOOK_TOKEN = process.env.WEBHOOK_TOKEN || 'webhook_secret_token'
const PORT = process.env.PORT || 3001

// Respostas automáticas pré-definidas
const autoResponses = {
  default: 'Olá! Recebemos sua mensagem. Nosso time entrará em contato em breve. 🙌',
  planos: 'Temos 3 planos: Essencial (R$800/R$500 promo), Profissional (R$2.500), E-commerce (R$4.500). Qual te interessa?',
  contato: 'Para mais informações sobre suporte e consultoria, continuaremos por aqui. Como posso ajudar?',
}

// GET - Validar webhook token (Meta requer isto)
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode']
  const token = req.query['hub.verify_token']
  const challenge = req.query['hub.challenge']

  if (mode === 'subscribe' && token === WEBHOOK_TOKEN) {
    console.log('Webhook verificado com sucesso!')
    res.status(200).send(challenge)
  } else {
    console.error('Falha na verificação do webhook')
    res.sendStatus(403)
  }
})

// POST - Receber mensagens e responder
app.post('/webhook', async (req, res) => {
  const data = req.body

  // Meta envia validação
  if (data.object !== 'whatsapp_business_account') {
    return res.sendStatus(400)
  }

  try {
    // Processa cada entrada
    for (const entry of data.entry) {
      for (const change of entry.changes) {
        const message = change.value.messages?.[0]
        const status = change.value.statuses?.[0]

        if (message) {
          await handleIncomingMessage(message, change.value)
        }

        if (status) {
          console.log(`📨 Status: ${status.status} para mensagem ${status.id}`)
        }
      }
    }

    res.sendStatus(200)
  } catch (error) {
    console.error('Erro ao processar webhook:', error)
    res.sendStatus(500)
  }
})

// Processar mensagem recebida
async function handleIncomingMessage(message, valueData) {
  const phoneNumber = valueData.contacts[0].wa_id
  const senderName = valueData.contacts[0].profile.name
  const messageText = message.text?.body || '[Tipo de mensagem não suportado]'

  console.log(`\n📩 Nova mensagem de ${senderName} (${phoneNumber}): "${messageText}"`)

  // Decidir resposta automática baseada no conteúdo
  let response = autoResponses.default
  if (messageText.toLowerCase().includes('plano') || messageText.toLowerCase().includes('preço')) {
    response = autoResponses.planos
  } else if (messageText.toLowerCase().includes('suporte') || messageText.toLowerCase().includes('consultoria')) {
    response = autoResponses.contato
  }

  // Enviar resposta
  await sendMessage(phoneNumber, response)
}

// Enviar mensagem via WhatsApp Cloud API
async function sendMessage(recipientPhone, messageText) {
  const url = `https://graph.instagram.com/v18.0/${PHONE_NUMBER_ID}/messages`

  const payload = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: recipientPhone,
    type: 'text',
    text: {
      body: messageText,
    },
  }

  try {
    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    console.log(`✅ Resposta enviada para ${recipientPhone}. ID: ${response.data.messages[0].id}`)
    return response.data
  } catch (error) {
    console.error(`❌ Erro ao enviar mensagem para ${recipientPhone}:`, error.response?.data || error.message)
    throw error
  }
}

// Rota de teste (enviar mensagem manualmente)
app.post('/send', async (req, res) => {
  const { phone, message } = req.body

  if (!phone || !message) {
    return res.status(400).json({ error: 'phone e message são obrigatórios' })
  }

  try {
    const result = await sendMessage(phone, message)
    res.json({ success: true, data: result })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`🚀 WhatsApp Bot rodando em http://localhost:${PORT}`)
  console.log('Endpoints:')
  console.log(`  GET  /webhook         - Validação do webhook (Meta)`)
  console.log(`  POST /webhook         - Receber mensagens`)
  console.log(`  POST /send            - Enviar mensagem de teste`)
  console.log(`  GET  /health          - Status do servidor`)
})
