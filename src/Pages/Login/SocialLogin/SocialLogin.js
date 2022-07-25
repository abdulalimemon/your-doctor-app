import React from 'react';
import { Button } from 'react-bootstrap';
import './SocialLogin.css';
import GoogleLogo from '../../../img/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className="divider d-flex align-items-center justify-content-center align-self-center">
                <div className="divider-border"></div>
                <div><p className="mx-3 pt-2">or</p></div>
                <div className="divider-border"></div>
            </div>
            <div className="mb-3">
                <Button onClick={() => signInWithGoogle()} variant="outline-danger" className="w-100 py-2 d-flex align-items-center justify-content-center fs-5"><img src={GoogleLogo} width="30px" alt='google logo' /><span className="ms-3">Google Sign In</span></Button>
                <p className="text-danger text-center">{error?.message}</p>
            </div>
        </div>
    );
};

export default SocialLogin;