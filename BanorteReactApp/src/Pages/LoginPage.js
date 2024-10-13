import React from 'react';
import './LoginPage.css';
import logo from '../imgs/logo1.png';
import { useNavigate } from 'react-router-dom';
import LoginContainer from '../Components/LoginContainer/LoginContainer';

function LoginPageApp() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogin = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log("Login clicked");
    // Navigate to the Welcome Page after the login button is clicked
    navigate('/welcome');
  };

  return (
    <div className="LAppBACK">
      <div className="LApp">
        <div className="logo">
          <LoginContainer />
        </div>
      </div>
    </div>
  );
}

export default LoginPageApp;
