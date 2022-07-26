import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Page404 from '../../../img/404.png';
import PageTitle from '../PageTitle/PageTitle';


const NotFound = () => {
    return (
        <Container className="my-5">
            <PageTitle title="404"></PageTitle>
            <Row className="align-items-center">
                <Col className=" d-flex justify-content-center align-items-center">
                    <img className="img-fluid" src={Page404} alt="emon" />
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;