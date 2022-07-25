import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className="my-5">
            <Row className="align-items-center">
                <Col>
                    <h2 className="text-center text-danger fs-2">Difference between authorization and authentication</h2>
                    <p className=" fs-4">Authentication is the process of determining whether someone or something is who or what it says it is. Authentication provides access control for systems by checking if a user's credentials match the credentials in a database of authorized users or in a data authentication server.

                        <br />
                        Authorization is a process by which a server determines if the user has permission to use a resource or access a file. Authorization is usually coupled with authentication so that the server has some concept of the client that is requesting access. In simple words, Authorization is the process of giving someone the ability to access a resource</p>
                    <h2 className="text-center text-danger fs-2">Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p className=" fs-4">The Firebase Realtime Database lets us build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, real-time events continue to fire and give the end user a responsive experience. Also Firebase provides the best back-end server, great database and analytics solution, and useful integrations with other Google products.</p>
                    <p className=" fs-4">Top Alternatives to Firebase Authentication.</p>
                    <p className=" fs-4">
                        1. Auth0
                        <br />
                        2. MongoDB
                        <br />
                        3. Back4app
                        <br />
                        4. Parse
                        <br />
                        5. AWS Amplify
                        <br />
                        6. Backendless
                    </p>
                    <h2 className="text-center text-danger fs-2">What other services does firebase provide other than authentication?</h2>
                    <p className=" fs-4">There are many services which Firebase provides, Most useful of them are:</p>
                    <p className=" fs-4">
                        1. Cloud Firestore.
                        <br />
                        2. Hosting.
                        <br />
                        3. Cloud Storage
                        <br />
                        4. Google Analytics.
                        <br />
                        5. Predictions
                        <br />
                        6. Cloud Messaging.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Blogs;