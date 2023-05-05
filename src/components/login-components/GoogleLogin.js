import { LoginSocialGoogle } from 'reactjs-social-login';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";


function GoogleLogin() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleResolve = ({ provider, data }) => {
        console.log(provider, data);
        setUser(data);
        // history.push('/Features');
        navigate('/Workspace');
    }

    const handleReject = (err) => {
        console.log(err);
    }

    return (
        <>
            <div>
                {!user ? <LoginSocialGoogle
                    client_id={
                        "69716278963-3o3kq42c14chqh3mlvdips90uu21ijhe.apps.googleusercontent.com"
                    }
                    scope="openid profile email"
                    discoveryDocs="claims supported"
                    access_type="offline"
                    onResolve={handleResolve}
                    onReject={handleReject}
                    className='google-login mt-2'
                >
                    <GoogleLoginButton />
                </LoginSocialGoogle> : ""}

                {user && <div>
                    <h1>{user.name}</h1>
                    <img className='rounded-circle' src={user.picture} alt='profile' />
                </div>}
            </div >
        </>

    );
}

export default GoogleLogin;