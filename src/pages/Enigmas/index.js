import React from 'react';
import styles from '../../styler.css';
import VideoPlayer1 from '../../components/VideoPlayer1';
import VideoPlayer2 from '../../components/VideoPlayer2';
import VideoPlayer3 from '../../components/VideoPlayer3';
import VideoPlayer4 from '../../components/VideoPlayer4';

export default function Enigmas() {
  return (
    <main>
      <div className={styles.cardContainer1}>
        <div className={styles.cardcentro}>
            <VideoPlayer1 />
        </div>
      </div>
      
      <div className={styles.cardContainer2}>
        <div className={styles.cardesquerda}>
          <div className={styles.cardContent}>
            <VideoPlayer2 />
            <p className={styles.cardtext1}>Usamos melhoria de sombras para deixar a qualidade maior dos efeitos de luminosidade
             e luminosidade global que optimiza o jogo parar que o usuário tenha uma experiência melhor no jogo.</p>
          </div>
        </div>
      </div>

      <div className={styles.cardContainer3}>
        <div className={styles.cardContent2}>
            <p className={styles.cardtext2}>Com PostProcessing voltado a eficiência com cálculos rápidos para gerar qualidade superior em jogos com baixa iluminação.</p>
      </div>
        <div className={styles.cardContainer31}>
            <VideoPlayer3 />
        </div>
      </div>

      <div className={styles.cardContainer2}>
        <div className={styles.cardesquerda}>
          <div className={styles.cardContent}>
            <VideoPlayer4 />
            <p className={styles.cardtext1}>Enigmas com designer desafiador na qual o usuário vai ter uma imersão.</p>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <h1 style={{textAlign: 'center'}}>Download do Jogo</h1>
      <div className={styles.cardContainer1}>
        
        <iframe
          frameborder="0"
          src="https://itch.io/embed/2139091"
          width="502"
          height="167"
        >
          <a href="https://glukax.itch.io/enigmas-da-escurido">
            Enigmas da Escuridão by GeorgeLucas Dev
          </a>
        </iframe>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
