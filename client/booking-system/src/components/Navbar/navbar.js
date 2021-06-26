import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavStyling from "./NavStyling.css";

const navbar = () => {
  return (
    <>
      <Navbar className="navcontainer" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="NavLink" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="NavLink" to="/booking">
                Booking
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default navbar;
