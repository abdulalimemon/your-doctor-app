import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Checkout = () => {
    const { ID } = useParams();
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Check Out {ID}</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;