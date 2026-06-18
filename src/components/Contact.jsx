import React, { useState } from 'react'
import { WHATSAPP_NUMBER } from '../config'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    const phone = WHATSAPP_NUMBER
    const text = `Olá, meu nome é ${name}. E-mail: ${email}. Mensagem: ${message}`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <section id="contact" className="contact container">
      <h2>Fale com a gente</h2>
      <p>Envie uma mensagem via <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">WhatsApp</a> ou preencha o formulário abaixo.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input placeholder="Nome" value={name} onChange={(e)=>setName(e.target.value)} required />
        <input placeholder="E-mail" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <textarea placeholder="Mensagem" rows="5" value={message} onChange={(e)=>setMessage(e.target.value)} required />
        <button className="btn primary" type="submit">Enviar mensagem</button>
      </form>
    </section>
  )
}
