import React from 'react';
import './Popup.css';

const Popup = ({ show, onClose, onButtonClick }) => {

  const handleButtonClick = (path) => {
    onButtonClick(path);
  };

  const handleButtonClick2 = () => {
    window.open("https://precandidato.georgelucas.dev/", "_blank"); // Abre o site em uma nova aba
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Escolha uma opção</h2>
        <button onClick={() => handleButtonClick('/')}>Site do Desenvolvedor</button>
        <button onClick={handleButtonClick2}>Site do Pré-Candidato</button>
      </div>
    </div>
  );
};

export default Popup;
