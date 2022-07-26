import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const EmailVerify = () => {
    return (
        <Container className="my-5" >
            <Row >
                <Col xs={0} lg={3} md={2}></Col>
                <Col xs={12} lg={6} md={8} className=" d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
                    <div className="login-card text-center" >
                        <h2 className="text-danger my-3">Your Email is not Verified.</h2>
                        <h5 className="text-success my-3">Please Verify Your Email Address.</h5>
                        <Button className="btn btn-danger">Send Email Again</Button>
                    </div>
                </Col>
                <Col xs={0} lg={3} md={2}></Col>
            </Row>
        </Container>
    );
};

export default EmailVerify;