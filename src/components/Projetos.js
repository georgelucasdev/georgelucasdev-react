import React, { useState } from 'react';
import Concluidos from './concluidos';
import Ativos from './ativos';
import styles from '../global.module.scss'

export default function ProjetosComponent() {
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);

  const handleButton1Click = () => {
    setShowInfo1(!showInfo1);
    setShowInfo2(false);
  };

  const handleButton2Click = () => {
    setShowInfo2(!showInfo2);
    setShowInfo1(false);
  };

  return (
    <center>
    <div className={styles.productlist}>
      <button className={styles.botaoconcluidos} onClick={handleButton1Click}>Concluidos</button>
      <button className={styles.botaoativos} onClick={handleButton2Click}>Ativos</button>
      {showInfo1 && <div><Concluidos/></div>}

    </div>
    </center>
  );
}


