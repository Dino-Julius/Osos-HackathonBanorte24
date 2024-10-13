import React from 'react';
import ReactTypingEffect from 'react-typing-effect'; // Importa el efecto de escritura
import './GreetingCard.css';

function GreetingCard() {
  return (
    <div className="greeting-text">
      {/* Texto de saludo con el nombre de la empresa */}
      Bienvenido a{' '}
      <span className="TextStyle">
        <ReactTypingEffect
          text={['Banorte Intelligence']} // Texto que se va a escribir con el efecto
          speed={100} // Velocidad de escritura
          eraseSpeed={50} // Velocidad de borrado
          typingDelay={500} // Retardo antes de empezar a escribir
        />
      </span>
    </div>
  );
}

export default GreetingCard;
