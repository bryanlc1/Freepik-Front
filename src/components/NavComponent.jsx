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
            <i class="fi fi-rr-football freepik"></i> Freepik Front
          </Navbar.Brand>
          <Nav.Link href="#home">Formulario</Nav.Link>
          <Nav.Link href="../pages/ResultsPage">Resultado Form</Nav.Link>
          <Nav.Link href="#pricing">Mis jugadores</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavComponent;
