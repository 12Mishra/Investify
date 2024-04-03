import React from 'react'
import './Login.css'
const Login = () => {
    function togglePasswordVisibility() {
        const passwordInput = document.getElementById('password');
        const toggleButton = document.querySelector('.toggle-password');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleButton.textContent = 'Hide';
        } else {
            passwordInput.type = 'password';
            toggleButton.textContent = 'Show';
        }
    }

    function validateForm(event) {
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Invalid email format';
            event.preventDefault(); // Prevent form submission
        } else {
            emailError.textContent = ''; // Clear error message
        }
    }
    return (
        <div>
            <div>
                <div className="container">
                    <form action="#" className="form">
                        <h2>Login</h2>
                        <div className="field email-field">
                            <div className="input-field">
                                <input type="email" placeholder="Email" className="email" />
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
                                />
                                <i className="bx bx-hide show-hide"></i>
                            </div>
                            <span className="error password-error">
                                <i className="bx bx-error-circle error-icon"></i>
                                <p className="error-text">
                                    Please enter atleast 8 charatcer with number, symbol, small and
                                    capital letter.
                                </p>
                            </span>
                        </div>
                        <div className="input-field button">
                            <input type="submit" value="Login" className="submit-btn" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
