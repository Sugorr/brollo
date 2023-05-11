import { useNavigate } from "react-router-dom";
import FacebookLogin from '../components/login-components/FacebookLogin';
import GoogleLogin from '../components/login-components/GoogleLogin';
import axios from 'axios';
import * as yup from 'yup';
import { useFormik } from "formik";
import '../App.css';

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

function Signup() {
    const navigate = useNavigate();

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
                console.log(response);
                navigate('/login');
            }).catch((err) => {
                console.log(err);
            });
        }
    });

    const handleClick = (e) => {
        navigate("/Login");
    }


    const handleLogout = () => {
        localStorage.removeItem('userToken');
        navigate('/login');
    }

    return (
        <>
            <div className="container py-3 signup-section">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="text-center">Register</h4>
                        <form onSubmit={formik.handleSubmit}>

                            <label className="form-label">Username</label>
                            <input className="form-control" type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} placeholder="eg. Juan Dela Cruz" />

                            <label className="form-label">Email</label>
                            <input className="form-control" type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} placeholder="eg. name@gmail.com" />

                            <label className="form-label">Birthday</label>
                            <input className="form-control" type="date" name="birthday" id="birthday" value={formik.values.birthday} onChange={formik.handleChange} />

                            <label className="form-label">Password</label>
                            <input className="form-control" type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} placeholder="Please enter strong password" />

                            <label className="form-label">Confirm Password</label>
                            <input className="form-control" type="password" name="confirmPassword" id="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} placeholder="Please enter strong password" />

                            <button className="btn btn-info mt-1" type="submit">Submit</button>
                        </form>
                        <div className="text-center">
                            <p className='text-dark mt-2'>Already have an account? <a href="#/" className='text-danger cursor-pointer' onClick={handleClick}>Login</a></p>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <FacebookLogin />
                        <GoogleLogin />
                        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                    </div>
                    <img className='brollo-login-image1' src='../../images/Brollo-login-image1.png' alt='Brollo' />
                    <img className='brollo-login-image2' src='../../images/Brollo-login-image2.png' alt='Brollo' />
                </div>
            </div>
        </>
    )
}

export default Signup;