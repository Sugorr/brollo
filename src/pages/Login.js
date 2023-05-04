import LoginInput from '../components/login-components/LoginInput';
import FacebookLogin from '../components/login-components/FacebookLogin';


function Login() {

    return (
        <>
            <div className='container login-page'>
                <LoginInput />
                <p className='text-center mt-2'>or Login with</p>
                <div className='text-center'>
                    <FacebookLogin />
                    <a href='#/' className='px-4 fs-1'><i class="fa-brands fa-google"></i></a>
                </div >
            </div >
        </>
    );
}

export default Login;