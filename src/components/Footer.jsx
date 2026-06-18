import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Vender Sites</h4>
            <p>Criando sites profissionais que vendem.</p>
          </div>
          <div className="footer-col">
            <h4>Páginas</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/promocao">Promoção</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/politica-de-privacidade">Privacidade</Link></li>
              <li><Link to="/termos-e-condicoes">Termos</Link></li>
              <li><Link to="/politica-de-reembolso">Reembolso</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Vender Sites — Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
