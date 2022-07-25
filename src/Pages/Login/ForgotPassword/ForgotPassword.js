import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    const emailRef = useRef('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        sendPasswordResetEmail(email);
        toast('A reset password email has been sent to your email address. please check your inbox or spam folder.');
    }

    return (
        <Container className="my-5">
            <Row>
                <Col xs={0} lg={3} md={2}></Col>
                <Col xs={12} lg={6} md={8} >
                    <div className="login-card border rounded-3">
                        <h2 className="text-danger text-center fs-2 mb-4">Forgot password</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="p-2 fs-5" ref={emailRef} type="email" placeholder="Enter Your Email Address." required />
                            </Form.Group>

                            <Button className="w-100 fs-5" variant="outline-dark" type="submit">
                                Next
                            </Button>
                            <p className="text-danger text-center py-1 fs-5">{error?.message}</p>
                        </Form>
                    </div>
                </Col>
                <Col xs={0} lg={3} md={2}></Col>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default ForgotPassword;