import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Register = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col xs={0} lg={3} md={2}></Col>
                <Col xs={12} lg={6} md={8} >
                    <div className="login-card border rounded-3">
                        <h2 className="text-danger text-center fs-2 mb-4">Register</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your Email Address." />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Your Password." />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="A" />
                            </Form.Group>
                            <Button className="w-100 fs-5" variant="danger" type="submit">
                                Register
                            </Button>
                        </Form>
                        <p className="pt-2">Already have an account? <Link to="/login" className="text-decoration-none">Login Now.</Link></p>
                    </div>
                </Col>
                <Col xs={0} lg={3} md={2}></Col>
            </Row>
        </Container>
    );
};

export default Register;