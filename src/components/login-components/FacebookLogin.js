import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import { useFormik } from "formik";
import { useEffect } from "react";
import "./Login.css";

const validationSchema = yup.object({
    name: yup.string()
        .required('Emailaddress is required')
        .min(4, 'name must be atleast 4 characters'),
    email: yup.string()
        .email('Invalid eamil format')
        .required('email address is required'),
    password: yup.string()
        .required('Password is required')
        .min(8, 'Password must be atleast 8 characters long'),
});

function FacebookLogin() {
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);

    useEffect(() => { }, []);
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            birthday: "",
            confirmPassword: "",
        },
        validationSchema,
        onSubmit: (values) => {
            axios.post('http://127.0.0.1:8000/api/register', {
                name: values.name,
                email: values.email,
                password: values.password,
                birthday: values.birthday,
            }).then((response) => {
                const { data } = response;
                console.log(data.token);
                localStorage.setItem('userToken', data.token);
            }).catch((err) => {
                console.log(err);
            });
        }
    });

    return (
        <>
            <div className='brollo-fb'>
                {!profile ? <LoginSocialFacebook
                    appId="630216948536391"
                    onResolve={(response) => {
                        console.log(response);
                        setProfile(response.data);
                        navigate('/welcomePage')
                    }}
                    onReject={(error) => {
                        console.log(error);
                    }}
                    onSubmit={formik.handleSubmit}
                    onChange={formik.handleChange}
                    value={formik.values.data}
                >
                    <FacebookLoginButton />
                </LoginSocialFacebook> : ""}
                {profile ? <div>
                    <h1>Hi, <br />{profile.name} Welcome to Brollo</h1>
                    <img className='rounded-circle' src={profile.picture.data.url} alt='profile' />
                </div> : ""}

            </div>
        </>
    );
}

export default FacebookLogin;