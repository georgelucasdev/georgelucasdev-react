import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Privacidade from './pages/Privacidade'
import Termos from './pages/Termos'
import Reembolso from './pages/Reembolso'
import Promocao from './pages/Promocao'

function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <Services />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/politica-de-privacidade" element={<Privacidade />} />
          <Route path="/termos-e-condicoes" element={<Termos />} />
          <Route path="/politica-de-reembolso" element={<Reembolso />} />
          <Route path="/promocao" element={<Promocao />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
