import React from 'react'
import logo from '../assets/logo.svg'

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#">
          <img src={logo} alt="Vender Sites" style={{height:28}} />
        </a>
        <div className="nav-links">
          <a href="#services">Serviços</a>
          <a href="#pricing">Preços</a>
          <a href="#contact">Contato</a>
        </div>
      </div>
    </nav>
  )
}
