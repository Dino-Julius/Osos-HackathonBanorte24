import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './GreetingCard.css';

function GreetingCard() {
  return (
    <div className="greeting-text">
      Bienvenido a{' '}
      <span className="TextStyle">
        <ReactTypingEffect
          text={['Banorte Intelligence']}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
        />
      </span>
    </div>
  );
}

export default GreetingCard;
