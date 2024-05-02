import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './StyleSheets/NavBar.css';

function NavBar() {
    return (
        <Navbar expand="lg" style={{ backgroundColor: '#343a40', color: 'white' }}>
            <Container>
                <Navbar.Brand as={Link} to="/"><h1>House25</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/"><p>Home</p></Nav.Link>
                        <Nav.Link as={Link} to="/AddPropertyPage"><p>List</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;