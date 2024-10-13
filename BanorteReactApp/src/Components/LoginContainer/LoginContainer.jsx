import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import './LoginContainer.css';
import logo from '../../imgs/logo2.png'; 

function LoginContainer() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook para la redirección

    const handleLogin = (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del form

        // Validación de usuario y contraseña
        if (username === 'Admin01' && password === 'AdminC') {
            navigate('/welcome'); // Redirige a /welcome si los datos son correctos
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="page-container">
            <div className="loginContainer__logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="loginContainer">
                <div className="loginContainer__form">
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginContainer;
