# Vender Sites — Template

Projeto mínimo em React + Vite para oferecer serviços de criação de sites.

Como usar

Instale dependências e rode em modo desenvolvimento:

```bash
npm install
npm run dev
```

O site inclui componentes básicos: Hero, Services, Pricing e Contact.
## Páginas

- **Home** — Hero, serviços, planos e contato
- **Promoção** — Produtos em promoção (links de afiliado)
- **Política de Privacidade** — Política de privacidade
- **Termos e Condições** — Termos de uso
- **Política de Reembolso** — Política de reembolso

## Configurar WhatsApp

Edite `src/config.js` e altere `WHATSAPP_NUMBER` com seu número.

## Backend (WhatsApp Bot)

Veja `backend/README.md` para configurar o bot automático.

Configurar WhatsApp

1. Abra `src/config.js` e substitua `WHATSAPP_NUMBER` pelo seu número no formato internacional sem sinais (ex: `5511999999999`).
2. Os botões de compra e o formulário abrirão o WhatsApp com uma mensagem pré-preenchida.

Personalize textos, preços e integração conforme necessário.
