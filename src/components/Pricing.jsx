import React, { useEffect, useState } from 'react'

const plans = [
  { name: 'Essencial', price: 'R$800', promoPrice: 'R$500', features: ['Site de uma única página', 'Layout responsivo', 'SEO básico'] },
  { name: 'Profissional', price: 'R$2.500', features: ['Até 10 páginas', 'Formulário de contato', 'Otimização de velocidade'] },
  { name: 'E-commerce', price: 'R$4.500', features: ['Catálogo de produtos', 'Integração de pagamentos', 'Treinamento'] }
]

import { WHATSAPP_NUMBER } from '../config'

function whatsappFor(planName, purpose='Compra', note=''){
  const phone = WHATSAPP_NUMBER
  const text = `${purpose} - ${planName}. ${note} Tenho interesse e gostaria de receber instruções.`
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

export default function Pricing(){
  const [remaining, setRemaining] = useState(0)

  useEffect(()=>{
    const key = 'essencial_offer_expires'
    const now = Date.now()
    let expires = parseInt(localStorage.getItem(key), 10)
    if (!expires || isNaN(expires) || expires <= now){
      expires = now + 5 * 60 * 1000 // 5 minutos
      localStorage.setItem(key, String(expires))
    }

    function update(){
      const rem = Math.max(0, Math.ceil((expires - Date.now()) / 1000))
      setRemaining(rem)
    }

    update()
    const t = setInterval(update, 1000)
    return ()=> clearInterval(t)
  },[])

  function formatTime(s){
    const m = Math.floor(s/60).toString().padStart(2,'0')
    const sec = (s%60).toString().padStart(2,'0')
    return `${m}:${sec}`
  }

  return (
    <section id="pricing" className="pricing container">
      <h2>Planos e formas de compra</h2>
      <p className="purchase-note">Escolha entre compra rápida (pagamento único) ou contratação com consultoria e suporte.</p>
      <div className="grid">
        {plans.map((p) => {
          const isEssencial = p.name === 'Essencial'
          const onPromo = isEssencial && remaining > 0
          return (
            <div key={p.name} className="card">
              <h3>{p.name}</h3>
              {isEssencial ? (
                <div>
                  {onPromo ? (
                    <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                      <p className="price" style={{margin:0}}>{p.promoPrice}</p>
                      <p className="tag" style={{textDecoration:'line-through',color:'#7f8b99'}}>{p.price}</p>
                      <div className="timer">{formatTime(remaining)}</div>
                    </div>
                  ) : (
                    <p className="price">{p.price}</p>
                  )}
                </div>
              ) : (
                <p className="price">{p.price}</p>
              )}

              <div className="tag">O que inclui</div>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div style={{display:'flex',gap:'8px',marginTop:'12px'}}>
                {isEssencial ? (
                    <>
                    <a className="btn primary" href={whatsappFor(p.name,onPromo? 'Compra rápida (PROMO)':'Compra rápida', onPromo? `Preço promocional: ${p.promoPrice}`:`Preço: ${p.price}`)} target="_blank" rel="noreferrer">Comprar agora</a>
                    <a className="btn ghost" href={whatsappFor(p.name,'Contratação com consultoria')} target="_blank" rel="noreferrer">Contratar com consultoria</a>
                  </>
                ) : (
                  <>
                    <a className="btn primary" href={whatsappFor(p.name,'Compra rápida')} target="_blank" rel="noreferrer">Comprar agora</a>
                    <a className="btn ghost" href={whatsappFor(p.name,'Contratação com consultoria')} target="_blank" rel="noreferrer">Contratar com consultoria</a>
                  </>
                )}
              </div>
              <p className="tag">Compra rápida: pagamento único. Consultoria: inclui alinhamento e suporte.</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
