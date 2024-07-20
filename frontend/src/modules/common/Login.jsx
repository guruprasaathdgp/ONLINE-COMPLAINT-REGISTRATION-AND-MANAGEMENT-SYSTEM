import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Passwordrequirements from './Passwordrequirements';
import './Login.css'; // Import the CSS file

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;
    const navigate = useNavigate();

    const handleLogin = () => {
        try {
            // Simulate a successful login condition
            const isLoginSuccessful = true; // Change this to false to simulate a failed login

            if (isLoginSuccessful) {
                alert('Login successful');
                navigate('/ComplaintForm'); // Navigate to ComplaintForm on success
            } else {
                alert('Login failed. Please check your credentials and try again.');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred during login. Please try again.');
        }
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">LOGIN</h2>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email" className="label">
                            Email Address
                        </label>
                        <input
                            name="email"
                            id="email"
                            placeholder="mern@example.com"
                            type="email"
                            value={email}
                            onChange={onChange}
                            className="input"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                            value={password}
                            onChange={onChange}
                            className="input"
                            required
                        />
                    </div>
                    <input type='submit' value='Login' className="submit-button" />
                </form>
            </div>
        </div>
    );
};

export default Login;
