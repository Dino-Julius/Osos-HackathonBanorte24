import React from "react";
import "./AppWelcomePage.css";
import logo from "../imgs/logo1.png";

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
          <FunctionCard initialText="Prompt1" 
                        hoverText="Prompt Expandido"
                        targetPath="/app" />
          <FunctionCard initialText="Prompt2" 
                        hoverText="Prompt Expandido2"
                        targetPath="/app" />
          <FunctionCard initialText="Prompt3" 
                        hoverText="Prompt Expandido3"
                        targetPath="/app" />
        </div>
      </div>
    </div>
  );
}

export default WelcomePageApp;
