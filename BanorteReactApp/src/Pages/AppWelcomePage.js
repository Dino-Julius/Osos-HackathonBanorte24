import React from "react";
import "./AppWelcomePage.css";
import logo from "../imgs/logo2.png";

import GreetingCard from "../Components/greetingCard/GreetingCard";
import FunctionCard from "../Components/functionCard/FunctionCard";

function WelcomePageApp() {
  return (

    <div className = "WAppBACK">
      <div className="WApp">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <GreetingCard />
        <div className="function-card-container">
          <FunctionCard initialText="¿Necesitas ayuda relacionada a inversiones?" 
                        hoverText="Prefabricar un inicio de convseración relacioado a los temas de inversión"
                        targetPath="/app" 
                        prompt="¿Que me puedes decir sobre inversiones?"/>
                        
          <FunctionCard initialText="¿Necesitas ayuda con tus tarjetas de crédito?" 
                        hoverText="Prefabicar un inicio de conversación relacioado a los temas de tarjetas de crédito"
                        targetPath="/app" 
                        prompt="Necesito ayuda con  mi tarjeta de crédito"/>
          <FunctionCard initialText="¿Necesitas ayuda con tus cuentas de ahorro?" 
                        hoverText="Prefabricar un inicio de conversación relacioado a los temas de cuentas de ahorro"
                        targetPath="/app" 
                        prompt="¿Que me puedes decir sobre cuentas de ahorro?"/>
        </div>
      </div>
    </div>
  );
}

export default WelcomePageApp;
