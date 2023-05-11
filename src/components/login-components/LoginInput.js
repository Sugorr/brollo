// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import { useFormik } from "formik";
import "./Login.css";

const validationSchema = yup.object({
    email: yup.string()
        .email('Invalid eamil format')
        .required('email address is required'),
    password: yup.string()
        .required('Password is required')
        .min(8, 'Password must be atleast 8 characters long'),
});

function LoginInput() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values) => {
            axios.post('http://127.0.0.1:8000/api/login', {
                email: values.email,
                password: values.password
            }).then((response) => {
                const { data } = response;
                console.log(data.token);
                localStorage.setItem('userToken', data.token);
                navigate("/WelcomePage");
            }).catch((err) => {
                console.log(err);
            });
        }
    });

    const handleClick = (e) => {
        navigate("/signup");
    }


    return (
        <>
            <div className='login'>
                <form onSubmit={formik.handleSubmit} className='d-flex flex-column gap-1 py-5'>
                    <label htmlFor='email'>Email</label>
                    <input className='form-control' onChange={formik.handleChange} type='email' name='email' id='email' value={formik.values.email} placeholder='Your Email' required />
                    <label htmlFor='password'>Password</label>
                    <input className='form-control' value={formik.values.password} onChange={formik.handleChange} type='password' name='password' id='password' placeholder='Password' required />
                    <button type='submit' className='btn btn-primary'>Login</button>
                </form>
                <button onClick={handleClick} className='btn btn-outline-warning bg-white text-dark mt-2'>No account yet? <strong className='text-danger'>Signup</strong> here</button>
                <img className='brollo-login-image1' src='./images/Brollo-login-image1.png' alt='Brollo' />
                <img className='brollo-login-image2' src='./images/Brollo-login-image2.png' alt='Brollo' />
            </div>

        </>
    );
}

export default LoginInput;