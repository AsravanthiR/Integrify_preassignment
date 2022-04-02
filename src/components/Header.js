import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark" className="add-padding fs-4" expand="lg">
        <Container className="d-flex justify-content-center align-items-center gap-3">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <LinkContainer to="/" className="nav-link">
                <Nav.Link href="#home">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/brewery">
                <Nav.Link href="#link">Breweries</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
