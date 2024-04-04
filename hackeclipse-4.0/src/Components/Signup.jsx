import React, { useState } from 'react';
import './Signup.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post("http://localhost:3001/auth/register", {
                name,
                email,
                password
            });
            console.log(response);
        } catch (error) {
            if (error.response) {
                setError(error.response.data.msg); // Assuming your backend sends an error message in a property named 'msg'
            } else {
                setError("An error occurred. Please try again."); // Fallback error message
            }
        }

        Request.json({
            "name": name,
            "email": email
        })
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="signup-container">
                        <div className="signup-box">
                            <h2><center>Register</center></h2>
                            <div className="formdesign" id="name">
                                Name: <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <b><span className="formerror" /></b>
                            </div>

                            <div className="formdesign" id="email">
                                Email: <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><b><span className="formerror" /></b>
                            </div>

                            <div className="formdesign" id="pass">
                                Password: <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><b><span className="formerror" /></b>
                            </div>

                            <div className="formdesign" id="cpass">
                                Confirm Password: <input type="password" name="confirm_password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><b><span className="formerror" /></b>
                            </div>
                            <div className="input-field button">
                                <input type="submit" value="SignUp" className="submit-btn" />
                            </div>
                            {error && <div>Error: {error}</div>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
