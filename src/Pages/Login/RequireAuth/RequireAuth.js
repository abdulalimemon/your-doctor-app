import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import EmailVerify from '../EmailVerify/EmailVerify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <EmailVerify></EmailVerify>
    }

    return children;
};

export default RequireAuth;