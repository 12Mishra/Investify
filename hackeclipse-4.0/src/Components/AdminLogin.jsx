import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if(password==="investify@admin" && email==="admin@investify.com"){
                navigate("/admin/dashboard");
            }            
        } catch (error) {
            if (error.response && error.response.data && error.response.data.msg) {
                setError(error.response.data.msg);
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={handleSubmit} className="login-form">
                <h3>Admin Login Here</h3>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit">Log In</button>
                {error && <div className="error-message">{error}</div>}
            </form>
        </div>
    );
}

export default Login;
