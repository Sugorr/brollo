import LoginInput from '../components/login-components/LoginInput';
import FacebookLogin from '../components/login-components/FacebookLogin';
import GoogleLogin from '../components/login-components/GoogleLogin';


function Login() {

    return (
        <>
            <div className='container login-page'>
                <LoginInput />
                <p className='text-center mt-2'>or Login with</p>
                <div className='text-center'>
                    <FacebookLogin />
                    <GoogleLogin />
                </div >
            </div >
        </>
    );
}

export default Login;