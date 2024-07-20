import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const styles = {
    boldCenter: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    highlight: {
        background: 'linear-gradient(to right, #ff0000, #00ff00, #0000ff)',
        WebkitBackgroundClip: 'text',
        textAlign: 'center',
        WebkitTextFillColor: 'transparent',
    },
    container: {
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(-45deg, #e6e6fa 40%, #fafafa 50%, #e6e6fa 60%)',

        backgroundSize: '300%',
        backgroundPositionX: '40%',

        //background: '#e6e6fa', // Light purple background
        overflow: 'hidden',
    },
    showerEffect: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '10px',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 70%)',
        animation: 'shower 1s linear infinite',
        pointerEvents: 'none',
    },
    leftShower: {
        left: 0,
        transform: 'scaleX(-1)', // Mirror effect for the left side
    },
    rightShower: {
        right: 0,
    },
    formContainer: {
        backgroundColor: '#F9F9F9', // Light background for the form box
        color: 'black', // Black text for better readability
        width: '400px',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    input: {
        backgroundColor: '#E0E0E0', // Light grey for inputs
        color: 'black',
        borderColor: '#B0B0B0',
    },
    submitButton: {
        backgroundColor: '#003366', // Dark blue background for the submit button
        color: 'white',
    }
};

function Register() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        axios.post('http://localhost:3001/register', { name, phone, email, password, user_type: userType })
            .then(result => {
                console.log(result);
                alert('Registered successfully');
                navigate('/login');
            })
            .catch(err => {
                console.log(err);
                setIsSubmitting(false);
            });
    };

    useEffect(() => {
        // Stop the animation after 5 seconds
        const timer = setTimeout(() => {
            document.querySelectorAll('.shower').forEach(el => el.style.animation = 'none');
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={styles.container}>
            <div className="shower" style={{ ...styles.showerEffect, ...styles.leftShower }}></div>
            <div className="shower" style={{ ...styles.showerEffect, ...styles.rightShower }}></div>
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white border border-blue-500 p-8 rounded-lg shadow-lg" style={styles.formContainer}>
                    <div>
                        <h3 style={styles.highlight}>
                            REGISTER NOW
                        </h3>
                    </div>
                    <form onSubmit={handleSubmit} className={isSubmitting ? 'bg-blue-200' : ''}>
                        <div className="mb-4">
                            <label htmlFor="name" className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" style={styles.boldCenter}>
                                Full Name
                            </label>
                            <input
                                name='name'
                                id="name"
                                placeholder="enter your name"
                                type='text'
                                onChange={(e) => setName(e.target.value)}
                                style={styles.input}
                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" style={styles.boldCenter}>
                                Phone Number
                            </label>
                            <input
                                name='phone'
                                id="phone"
                                placeholder="+91 9966 2345 23"
                                type="tel"
                                pattern="[0-9]{10}"
                                title="Phone number must be a 10-digit number"
                                onChange={(e) => setPhone(e.target.value)}
                                style={styles.input}
                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" style={styles.boldCenter}>
                                Email Address
                            </label>
                            <input
                                name="email"
                                id="email"
                                placeholder="mren@example.com"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                style={styles.input}
                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" style={styles.boldCenter}>
                                Password
                            </label>
                            <input
                                name="password"
                                id="password"
                                type="password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                onChange={(e) => setPassword(e.target.value)}
                                style={styles.input}
                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            />
                        </div>
                        <div className="flex items-center p-6">
                            <button
                                type="submit"
                                style={styles.submitButton}
                                className="block w-full select-none rounded-lg px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
