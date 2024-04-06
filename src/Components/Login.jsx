import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            navigate("/profile");
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post("http://localhost:3001/auth/login", {
                email,
                password
            });

            if (response.status === 200) {
                Cookies.set('token', response.data.token);
                navigate("/user");
            } else {
                setError("An error occurred. Please try again.");
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
            <div>
            
            <div className="container">
                <form onSubmit={handleSubmit} className="form">
                    <h2>Login</h2>
                    <div className="field email-field">
                        <div className="input-field">
                            <input
                                type="email"
                                placeholder="Email"
                                className="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <span className="error email-error">
                            <i className="bx bx-error-circle error-icon"></i>
                            <p className="error-text">Please enter a valid email</p>
                        </span>
                    </div>
                    <div className="field create-password">
                        <div className="input-field">
                            <input
                                type="password"
                                placeholder="Password"
                                className="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className="bx bx-hide show-hide"></i>
                        </div>
                        <span className="error password-error">
                            <i className="bx bx-error-circle error-icon"></i>
                            <p className="error-text">
                                Please enter at least 8 characters with a combination of numbers, symbols, lowercase, and uppercase letters.
                            </p>
                        </span>
                    </div>
                    <div className="input-field button">
                        <input type="submit" value="Login" className="submit-btn" />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                </form>
                {/* <button onClick={handleLogout}>Logout</button> Logout button */}
            </div>
        </div>
    );
}

export default Login;
