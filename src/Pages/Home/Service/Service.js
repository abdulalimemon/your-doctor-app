import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './service.css';


const Service = ({ service }) => {
    const { name, img } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" className="px-2 py-3 service-img" src={img} alt="Service"/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;