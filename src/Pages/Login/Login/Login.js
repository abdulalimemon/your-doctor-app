import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import PageTitle from '../../Shared/PageTitle/PageTitle';




const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <Container className="my-5">
            <PageTitle title="Login"></PageTitle>
            <Row>
                <Col xs={0} lg={3} md={2}></Col>
                <Col xs={12} lg={6} md={8} >
                    <div className="login-card border rounded-3">
                        <h2 className="text-danger text-center fs-2 mb-4">Login</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control ref={emailRef} type="email" placeholder="Enter Your Email Address." required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={passwordRef} type="password" placeholder="Enter Your Password." required />
                            </Form.Group>
                            <Button className="w-100 fs-5" variant="outline-danger" type="submit">
                                Login
                            </Button>
                            <p className="text-danger text-center py-1 fs-5">{error?.message}</p>
                        </Form>
                        <p className="pt-2"><Link to="/forgotpassword" className="text-decoration-none">Forgot password</Link></p>
                        <p>New to Your Doctor? <Link to="/register" className="text-decoration-none">Register Now.</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </Col>
                <Col xs={0} lg={3} md={2}></Col>
            </Row>
        </Container>
    );
};

export default Login;