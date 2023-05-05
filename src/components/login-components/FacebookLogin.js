import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

function FacebookLogin() {
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();

    const handleResolve = (response, data) => {
        console.log(response);
        navigate('/Features');
    }

    const handleReject = (err) => {
        console.log(err);
    }

    const showProfile = (data) => [
        setProfile(data)
    ]

    return (
        <>
            <div className='brollo-fb'>
                {!profile ? <LoginSocialFacebook
                    appId="630216948536391"
                    onResolve={handleResolve}
                    onReject={handleReject}
                    onSubmit={showProfile}
                >
                    <FacebookLoginButton />
                </LoginSocialFacebook> : ""}

                {profile ? <div>
                    <h1>{profile.name}</h1>
                    <img className='rounded-circle' src={profile.picture.data.url} alt='profile' />
                </div> : ""}
            </div>
        </>
    );
}

export default FacebookLogin;