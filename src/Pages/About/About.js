import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import emon from '../../img/emon.png';


const About = () => {
    return (
        <Container className="my-5">
            <Row className="align-items-center">
                <Col xs={12} lg={6} md={12} className=" d-flex justify-content-center align-items-center">
                    <img className="img-fluid" src={emon} alt="emon" />
                </Col>
                <Col xs={12} lg={6} md={12}>
                    <h2 className="text-danger fs-2">About Me</h2>
                    <p className=" fs-4">Hey there! I am Abdul Alim Emon. I am currently a 4th-year honors student in political science. I am learning MERN Stack development and Working in the web development sector.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;