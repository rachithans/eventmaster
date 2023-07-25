import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

function NavBar({ loggedIn, isAdmin, onLogout }) {
  const location = useLocation().pathname;
  console.log(loggedIn, isAdmin, location);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <div className=" container d-flex justify-content-between align-items-center">
          <div className="align-items-center">
            <Navbar.Brand as={Link} to="/" className="fw-bold ">
              <h1 className="mt-4">EventMaster</h1>
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="mx-3">Create Event</Nav.Link>
                <Nav.Link className="mx-3" as={Link} to="/Faq">
                  FAQs
                </Nav.Link>
                <Nav.Link className="mx-3" as={Link} to="/ContactUs">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <ButtonGroup>
              {!loggedIn ? (
                <>
                  {(location === "/register" || location === "/") && (
                    <Button variant="primary" as={Link} to="/login">
                      Log In
                    </Button>
                  )}
                  {(location === "/login" || location === "/") && (
                    <Button variant="primary" as={Link} to="/register">
                      Register
                    </Button>
                  )}
                </>
              ) : (
                <Button variant="primary" onClick={onLogout}>
                  Logout
                </Button>
              )}
            </ButtonGroup>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
