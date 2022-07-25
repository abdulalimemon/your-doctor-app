import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [updateProfile, updating, profileError] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        alert('An user verification email has been sent to your email address. Please check your inbox or spam folder.');
        await updateProfile({ displayName: name });
    }



    return (
        <Container className="my-5">
            <Row>
                <Col xs={0} lg={3} md={2}></Col>
                <Col xs={12} lg={6} md={8} >
                    <div className="login-card border rounded-3">
                        <h2 className="text-danger text-center fs-2 mb-4">Register</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name." required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control ref={emailRef} type="email" placeholder="Enter Your Email Address." required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={passwordRef} type="password" placeholder="Enter Your Password." required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="A" />
                            </Form.Group>
                            <Button className="w-100 fs-5" variant="danger" type="submit">
                                Register
                            </Button>
                        </Form>
                        <p className="pt-2">Already have an account? <Link to="/login" className="text-decoration-none">Login Now.</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </Col>
                <Col xs={0} lg={3} md={2}></Col>
            </Row>
        </Container>
    );
};

export default Register;