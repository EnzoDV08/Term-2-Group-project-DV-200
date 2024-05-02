import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './StyleSheets/NavBar.css';
import RealEstateLogo from '../Images/logo/logo.svg';

function NavBar() {
    return (
        <Navbar expand="lg" style={{ backgroundColor: '#343a40', color: 'white' }}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={RealEstateLogo} alt="Real Estate Logo" />
                </Navbar.Brand>
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