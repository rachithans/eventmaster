import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import React from 'react';

function HomeNavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className='fw-bold'><h1>EventMaster</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Create Event</Nav.Link>
            <Nav.Link href="">About Us</Nav.Link>
            {/* Using my email address for the time being */}
            <Nav.Link href="mailto:bhavya.jain@dal.ca">Contact Us</Nav.Link>
            <NavDropdown title="Sign in/Sign up" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Login">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Register">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavBar;