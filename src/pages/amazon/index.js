import React from 'react';
import imgPs5 from '../../img/ps5.jpg';
import imgPc from '../../img/pcgamer.jpg';
import imgNotebook from '../../img/note.jpg';
import imgMouse from '../../img/mause.jpg';
import imgTeclado from '../../img/teclado.jpg';
import imgGeneric from '../../img/fone.jpg';

export default function Amazon() {
  const products = [
    {
      title: 'PlayStation 5 Slim Digital (825GB)',
      description: 'Console PlayStation 5 Slim Digital — edição Turismo. Confira o preço e disponibilidade na Amazon.',
      image: imgPs5,
      link: 'https://amzn.to/3RAwUL5'
    },
    {
      title: 'Gamer Ryzen 5600GT',
      description: 'Computador Gamer com Ryzen 5600GT e memória 3200MHz — peça ideal para jogos de alta performance.',
      image: imgPc,
      link: 'https://amzn.to/4wUsChS'
    },
    {
      title: 'Notebook Gamer Alienware Aurora',
      description: 'Notebook/PC Gamer Alienware Aurora — configuração premium para jogos e criação de conteúdo.',
      image: imgNotebook,
      link: 'https://amzn.to/4uBQBRe'
    },
    {
      title: 'Mouse Gamer Predator Redragon M612 ',
      description: 'Mouse gamer com alta sensibilidade e iluminação RGB — precisão para jogos competitivos.',
      image: imgMouse,
      link: 'https://amzn.to/4u24kjl'
    },
    {
      title: 'Teclado Gamer HyperX Alloy (ABNT2)',
      description: 'Teclado mecânico HyperX Alloy com layout ABNT2 — ideal para digitação e jogos.',
      image: imgTeclado,
      link: 'https://amzn.to/4vfbz8B'
    },
    {
      title: 'Fome de ouvido com fio JBL',
      description: 'SOM PROFISSIONAL. Com a tecnologia JBL QuantumSOUND Signature, o JBL Quantum 100M2 coloca você no centro da ação para escutar os menores detalhes e sentir cada explosão, proporcionando uma experiência de som realista.',
      image: imgGeneric,
      link: 'https://amzn.to/4o2VmAX'
    }
  ];

  return (
    <main className="container">
      <section className="hero-section">
        <h1>Amazon Shop</h1>
        <p className="hero-text">Links de produtos na Amazon — substitua pelos seus links de afiliado para gerar receita.</p>
      </section>

      <hr className="hr3" />

      <section className="apps-section amazon-section">
        <h2>Produtos</h2>
        <div className="apps-grid amazon-grid">
          {products.map((p, i) => (
            <div key={i} className="app-card amazon-item">
              <a href={p.link} target="_blank" rel="noreferrer">
                <img src={p.image} alt={p.title} className="app-image" />
              </a>
              <div className="app-info">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="app-link">Comprar na Amazon →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
