// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import auctionIcon from '../assets/Images/auction.svg';
import '../styles/login.scss';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate(); // Initialize navigate

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters long.");
            return;
        }

        setErrorMessage("");
        navigate('/selection-menu');  // Navigate to selection menu after successful login
    };

    return (
        <div className="si-main-container">
            <div className="si-image-container">
                <img src={auctionIcon} alt="auction" className="si-auction-icon" />
            </div>
            <div className="si-login-container">
                <div className="si-main-login-container">
                    <div className="si-set-title">
                        <h1 className="si-title"><b>WELCOME TO</b></h1>
                        <h2 className="si-subtitle">AUCTION DASHBOARD</h2>
                    </div>
                    
                    <form className="si-login-form" onSubmit={handleSubmit}>
                        <label htmlFor="username" className="si-label">USERNAME</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={username} 
                            onChange={handleUsernameChange} 
                            className="si-input" 
                            placeholder='Enter User Name'
                        />
                        
                        <label htmlFor="password" className="si-label">PASSWORD</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password} 
                            onChange={handlePasswordChange} 
                            className="si-input" 
                            placeholder='Enter the Password'
                        />
                        
                        {errorMessage && <p className="error-message">{errorMessage}</p>}

                        <button type="submit" className="si-signin-button">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
