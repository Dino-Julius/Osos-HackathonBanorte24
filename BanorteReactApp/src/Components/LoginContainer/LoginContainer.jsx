import React from 'react';
import './LoginContainer.css';
import logo from '../../imgs/logo1.png'; 

function LoginContainer() {
    return (
        <div className="page-container">
            <div className="loginContainer__logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="loginContainer">
                <div className="loginContainer__form">
                    <form>
                        <input type="text" placeholder="Usuario" />
                        <input type="password" placeholder="Contraseña" />
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginContainer;
