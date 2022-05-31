import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

function NavComponent() {
  return (
    <div className="nav">
      <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
        <Container>
          <Navbar.Brand href="#home">
            <i class="fi fi-rr-football freepik"></i> Freepik
          </Navbar.Brand>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavComponent;
