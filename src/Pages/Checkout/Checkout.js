import React from 'react';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../Shared/PageTitle/PageTitle';


const Checkout = () => {
    const { ID } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        toast('Thank you for the booking..');
    }

    return (
        <Container className="my-5">
            <PageTitle title="Checkout"></PageTitle>
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
            <ToastContainer />
        </Container >
    );
};
export default Checkout;