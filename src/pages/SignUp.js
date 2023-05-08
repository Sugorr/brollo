import { useState } from "react";
import SignupInputs from "../components/signup-components/SignupInputs";
import { useNavigate } from "react-router-dom";
import FacebookLogin from '../components/login-components/FacebookLogin';
import GoogleLogin from '../components/login-components/GoogleLogin';


function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username shoud be 3-16 characters and shoudn't include any special character!",
            label: "username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "Enter a valid Email address",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday"
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Password don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleClick = (e) => {
        navigate("/Login");
    }

    console.log(values);
    return (
        <>
            <div className="container py-4 signup-section">
                <h4 className="text-center">Register</h4>
                <form onSubmit={handleSubmit}>
                    {inputs.map((inputs) => (
                        <SignupInputs
                            key={inputs.id}
                            {...inputs}
                            value={values[inputs.name]}
                            onChange={onChange}
                        />
                    ))}

                    <button className="btn btn-primary d-grid mx-auto" type="submit">Submit</button>
                </form>
                <div className="text-center">
                    <p className='text-dark mt-2'>Already have an account? <a href="#/" className='text-danger cursor-pointer' onClick={handleClick}>Login</a></p>
                </div>
                {/* <p className='text-center mt-2'>or Sign in with</p> */}
                <div className='text-center'>
                    <FacebookLogin />
                    <GoogleLogin />
                </div >
            </div>

        </>

    )
}


export default Signup;