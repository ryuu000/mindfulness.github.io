import React from 'react';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response.profileObj); // Google profile data
};

const GoogleLoginComponent = () => (
    <GoogleLogin
        clientId="your-google-client-id"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />
);

export default GoogleLoginComponent;
