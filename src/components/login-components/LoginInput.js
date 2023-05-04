import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

function LoginInput() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/Features");
    }

    const handleClick = (e) => {
        navigate('/SignUp');
    }

    return (
        <>
            <div className='login'>
                <form onSubmit={handleSubmit} className='d-flex flex-column gap-1 py-5'>
                    <label htmlFor='email'>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Your Email' required />
                    <label htmlFor='password'>Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' required />
                    <button type='submit' className='btn btn-primary'>Login</button>
                </form>
                <button onClick={handleClick} className='btn btn-outline-warning bg-white text-dark mt-2'>No account yet? <strong className='text-danger'>Signup</strong> here</button>
            </div>
        </>
    );
}

export default LoginInput;