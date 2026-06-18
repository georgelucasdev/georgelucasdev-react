import React from 'react'

const promos = [
  {
    title: 'PlayStation 5 Slim Digital (825GB)',
    desc: 'Console PlayStation 5 Slim Digital — edição Turismo. Confira o preço e disponibilidade em promoção.',
    link: 'https://www.amazon.com.br/PlayStation%C2%AE5-Slim-Digital-825GB-Turismo/dp/B0FPGF9J2J/ref=sr_1_5?crid=1VH2HM16UZHF6'
  },
  {
    title: 'Gamer Ryzen 5600GT',
    desc: 'Computador Gamer com Ryzen 5600GT e memória 3200MHz — peça ideal para jogos de alta performance.',
    link: 'https://www.amazon.com.br/Gamer-Ryzen-5600GT-Placa-M%C3%A3e-3200MHz/dp/B0GV5GYVHP/'
  },
  {
    title: 'Notebook Gamer Alienware Aurora',
    desc: 'Notebook/PC Gamer Alienware Aurora — configuração premium para jogos e criação de conteúdo.',
    link: 'https://www.amazon.com.br/Notebook-Gamer-Alienware-Aurora-AC16-C7240H-D30/dp/B0FPGTRPLL/'
  },
  {
    title: 'Mouse Gamer Predator Redragon M612',
    desc: 'Mouse gamer com alta sensibilidade e iluminação RGB — precisão para jogos competitivos.',
    link: 'https://www.amazon.com.br/Mouse-Gamer-Predator-Redragon-M612/dp/B08T68T1T6/'
  },
  {
    title: 'Teclado Gamer HyperX Alloy (ABNT2)',
    desc: 'Teclado mecânico HyperX Alloy com layout ABNT2 — ideal para digitação e jogos.',
    link: 'https://www.amazon.com.br/HyperX-Teclado-Gamer-Alloy-ABNT2/dp/B07TV9B7Z3/'
  },
  {
    title: 'Fone de ouvido JBL Quantum',
    desc: 'Som profissional com tecnologia JBL QuantumSOUND Signature — experiência imersiva para gamer.',
    link: 'https://www.amazon.com.br/gp/aw/d/B0D6NLHV8N/'
  },
  {
    title: 'Massa Plástica Cinza 400G - Carplast',
    desc: 'Reparação e colagem em diversos materiais, com foco em reparação de metais.',
    link: 'https://amzn.to/4foo50V'
  },
  {
    title: 'Tramontina Interruptor Simples 4x2 Aria',
    desc: 'Produzido em termoplástico com acabamento brilho na cor branca.',
    link: 'https://amzn.to/3RFIepv'
  },
  {
    title: 'Foxlux Lâmpada LED Bulbo 9W 3000K',
    desc: 'Lâmpada de LED que economiza energia sem comprometer a iluminação.',
    link: 'https://amzn.to/4o7eq0W'
  },
  {
    title: 'Kit Alicate Crimpar + Terminais 1200 peças',
    desc: 'Completo para instalações elétricas com precisão e qualidade profissional.',
    link: 'https://amzn.to/4uN0njH'
  }
]

export default function Promocao() {
  return (
    <div className="container legal-page">
      <h1>Promoções</h1>
      <p>Confira os produtos em promoção com os melhores preços do mercado!</p>

      <div className="grid promo-grid">
        {promos.map((p) => (
          <div key={p.title} className="card promo-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="btn primary">
              Comprar na Promoção →
            </a>
          </div>
        ))}
      </div>

      <p style={{marginTop: '2rem', fontSize: '0.9rem', color: 'var(--muted)'}}>
        <strong>Nota:</strong> Os links de promoção são links de afiliado. Se você comprar através deles, você estará ajudando a manter este site funcionando.
      </p>
    </div>
  )
}
