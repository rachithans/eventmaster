import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

function NavBar() {
  const [pageLink, setPageLink] = useState("");
  const currentPageUrl = window.location.href;
  const location = useLocation().pathname;
  console.log(location);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <h1>EventMaster</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Create Event</Nav.Link>
            <Nav.Link as={Link} to="/Faq">
              FAQs
            </Nav.Link>
            <Nav.Link as={Link} to="/ContactUs">
              Contact Us
            </Nav.Link>
            {/* <Nav.Link href="">About Us</Nav.Link> */}

            <ButtonGroup>
              {(location == "/register" || location == "/") && (
                <Button variant="primary" as={Link} to="/login">
                  Log In
                </Button>
              )}

              {(location == "/login" || location == "/") && (
                <Button variant="primary" as={Link} to="/register">
                  Register
                </Button>
              )}
            </ButtonGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
