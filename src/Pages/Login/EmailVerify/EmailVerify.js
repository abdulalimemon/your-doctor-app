import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailVerify = () => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );
    return (
        <Container className="my-5" >
            <Row >
                <Col xs={0} lg={3} md={2}></Col>
                <Col xs={12} lg={6} md={8} className=" d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
                    <div className="login-card text-center" >
                        <h2 className="text-danger my-3">Your Email is not Verified.</h2>
                        <h5 className="text-success my-3">Please Verify Your Email Address.</h5>
                        <Button variant="danger" className="py-2 px-4 my-2" onClick={async () => {
                            await sendEmailVerification();
                            toast('An user verification email has been sent to your email address. Please check your inbox or spam folder.');
                        }}>Send Email Again</Button>
                    </div>
                </Col>
                <Col xs={0} lg={3} md={2}></Col>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default EmailVerify;