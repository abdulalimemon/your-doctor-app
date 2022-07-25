import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './service.css';


const Service = ({ service }) => {
    const { id, name, img } = service;
    const navigate = useNavigate();

    const navigateToCheckout = id => {
        navigate(`/checkout/${id}`);
    }

    return (
        <Col>
            <Card>
                <Card.Img variant="top" className="px-2 py-3 service-img" src={img} alt="Service" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Button onClick={() => navigateToCheckout(id)} variant="outline-dark" className="w-100 fs-5 py-1 my-2">Checkout</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;