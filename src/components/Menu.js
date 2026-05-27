import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

export default function Menu() {
  return (
    <header className="site-header">
      <NavLink to="/" className="brand">
        <img src={logo} height="40" width="40" alt="Logo" />
      </NavLink>
      <nav className="site-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/promocao">Promoção</NavLink>
        <NavLink to="/politica-de-privacidade">Privacidade</NavLink>
        <NavLink to="/termos-e-condicoes">Termos</NavLink>
        <NavLink to="/politica-de-reembolso">Reembolso</NavLink>
      </nav>
    </header>
  );
}
