import { signOut } from '@firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const usersignOut = () => {
        signOut(auth);
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" ><h2>Your <span className="text-danger">Doctor</span></h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end text-center">
                    <Nav className="align-items-center fs-5">
                        <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {
                            user ?
                                <button className="py-2 px-4 btn btn-light" onClick={usersignOut}>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="/login"><button className="py-2 px-4 btn btn-light" >Login</button></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;