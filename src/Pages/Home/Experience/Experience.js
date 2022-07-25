import React from 'react';
import { Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import service from '../../../img/services.png';

const Experience = () => {
    return (
        <Container className="my-5">
            <Row className="align-items-center">
                <Col xs={12} lg={6} md={12} className="mb-3">
                    <Image src={service} className="w-100"></Image>
                </Col>
                <Col xs={12} lg={6} md={12}>
                    <div className="experience-right">
                        <h2 className="fs-3 text-start">5 Years of
                            <br />
                            <span className="fs-1 text-danger"> Medical Excellence</span>
                        </h2>
                        <p className="fs-5 text-start">My administrative and clinical team is second to none. I reiterates the pledge to help all and give hope to those who have lost hope. In this endeavor, while we have the best of an expert team of doctors taking care of the patients at one hand.</p>
                        <Card className="w-100 text-start my-2">
                            <ListGroup variant="flush">
                                <ListGroup.Item>Comprehensive Inpatient Services</ListGroup.Item>
                                <ListGroup.Item>Quick Diagnosis</ListGroup.Item>
                                <ListGroup.Item>Medical And Surgical Services</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Experience;