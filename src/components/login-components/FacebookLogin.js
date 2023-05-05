import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { useState } from 'react';
import "./Login.css";

function FacebookLogin() {
    const [profile, setProfile] = useState(null);

    return (
        <>
            <div className='brollo-fb'>
                {!profile ? <LoginSocialFacebook
                    appId="630216948536391"
                    onResolve={(response) => {
                        console.log(response);
                        setProfile(response.data);
                    }}
                    onReject={(error) => {
                        console.log(error);
                    }}
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