import React, { useState } from 'react';
import './Signup.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post("http://localhost:3001/auth/register", {
                name,
                email,
                phone,
                password
            });

            if (response.status === 201) {
                navigate("/auth/login"); // Navigate to login page
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
        <>
            <body className="register-body">
                <div className="register-container">
                    <div className="register-background">
                        <div className="register-shape"></div>
                        <div className="register-shape"></div>
                    </div>
                    <form className="register-form" onSubmit={handleSubmit}>
                        <h3>Register Here</h3>

                        <label htmlFor="name" className="register-label">Name</label>
                        <input type="text" id="name" className="register-input" value={name} onChange={(e) => setName(e.target.value)} required />

                        <label htmlFor="email" className="register-label">Email</label>
                        <input type="email" id="email" className="register-input" value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <label htmlFor="phone" className="register-label">Phone</label>
                        <input type="tel" id="phone" className="register-input" value={phone} onChange={(e) => setPhone(e.target.value)} required />

                        <label htmlFor="password" className="register-label">Password</label>
                        <input type="password" id="password" className="register-input" value={password} onChange={(e) => setPassword(e.target.value)} required />

                        <label htmlFor="confirm_password" className="register-label">Confirm Password</label>
                        <input type="password" id="confirm_password" className="register-input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

                        <button type="submit" className="register-button">Register</button>

                    </form>
                </div>
            </body>

        </>
    );
}

export default Signup;
