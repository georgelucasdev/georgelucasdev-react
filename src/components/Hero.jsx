import React from 'react'

export default function Hero() {
  return (
    <header className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Sites que vendem — rápidos, claros e confiáveis</h1>
          <p>Receba um site pronto para converter clientes — layout focado em ação, carregamento rápido e SEO básico incluso. Sem jargões, só resultado.</p>
          <div className="cta-row">
            <a className="btn primary" href="#pricing">Ver planos e comprar</a>
            <a className="btn ghost" href="#contact">Quero consultoria</a>
          </div>
          <p className="sub">Entrega típica: 7–14 dias. Suporte inicial incluso por 30 dias.</p>
        </div>
        <div className="hero-mockup">
          <div className="mockup-placeholder">
            <div className="mockup-window">
              <div className="mockup-header"></div>
              <div className="mockup-body"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
