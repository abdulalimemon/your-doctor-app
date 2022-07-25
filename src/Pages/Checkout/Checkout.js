import React from 'react';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { useParams } from 'react-router';

const Checkout = () => {
    const { ID, name } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Container className="my-5">
            <Row>
                <Col xs={0} lg={3} md={2}></Col>
                <Col xs={12} lg={6} md={8} >
                    <div className="login-card border rounded-3">
                        <h2 className="text-danger text-center fs-2 mb-4">Order Check Out</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control type="text" placeholder="Enter Your Name." required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter Your Email Address." required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control type="text" placeholder="Enter Your Address." required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control type="tel" placeholder="Enter Your Phone number." required />
                            </Form.Group>

                            <Button className={`w-100 fs-5`} variant="danger" type="submit">
                                Make Appointment
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col xs={0} lg={3} md={2}></Col>
            </Row>
        </Container >
    );
};
export default Checkout;