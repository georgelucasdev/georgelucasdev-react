import React from 'react';
import fusaoImg from '../../img/fusao.jpg';
import reiImg from '../../img/rei.png';

export default function Home() {
  const apps = [
    {
      title: 'Fusão Infinita: Guerra Global',
      description: 'Mergulhe em uma batalha épica de estratégia em tempo real. Funda unidades, domine territórios e torne-se o maior guerreiro do mundo. Competição infinita aguarda!',
      image: fusaoImg,
      link: 'https://play.google.com/store/apps/details?id=com.gemfusion.gamebr'
    },
    {
      title: 'Rei dos Downloads: Baixe tudo!',
      description: 'Seu gerenciador de downloads completo. Baixe vídeos, áudios, imagens e muito mais com velocidade e simplicidade. Um app essencial para seu celular.',
      image: reiImg,
      link: 'https://play.google.com/store/apps/details?id=com.glapps.tiksave'
    }
  ];

  return (
    <main className="container">
      <section className="hero-section">
        <h1>George Lucas Aplicativos</h1>
        <p className="hero-text">
          Desenvolvemos aplicativos e jogos inovadores para Android. Experiências digitais criativas que entretêm e engajam usuários em todo o mundo.
        </p>
      </section>

      <hr className="hr3" />

      <section className="apps-section">
        <h2>Nossos Aplicativos</h2>
        <div className="apps-grid">
          {apps.map((app, index) => (
            <div key={index} className="app-card">
              <a href={app.link} target="_blank" rel="noreferrer">
                <img src={app.image} alt={app.title} className="app-image" />
              </a>
              <div className="app-info">
                <h3>{app.title}</h3>
                <p>{app.description}</p>
                <a href={app.link} target="_blank" rel="noreferrer" className="app-link">
                  Baixar na Play Store →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
