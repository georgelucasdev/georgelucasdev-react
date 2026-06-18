import React from 'react'

const items = [
  { title: 'Site institucional', desc: 'Profissional e objetivo: apresenta sua empresa e gera contatos.' },
  { title: 'Loja online', desc: 'Vendas simples e rápidas: catálogo, carrinho e pagamento integrado.' },
  { title: 'Landing page', desc: 'Foque numa oferta e converta visitantes em clientes ou leads.' }
]

export default function Services() {
  return (
    <section id="services" className="services container">
      <h2>O que entregamos</h2>
      <div className="grid">
        {items.map((it) => (
          <div key={it.title} className="card">
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
