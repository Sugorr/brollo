import React, { useState } from 'react'
import LoginPage from '../components/login-components/LoginInput';
import SignUp from './SignUp';

function Login() {
    const [currentForm, setCurrentForm] = useState();
    return (
        <>
            <LoginPage />
        </>
    );
}

export default Login;