import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import fee from "../assets/freepik.png";
import {
  Link
}from 'react-router-dom'



function NavComponent() {
  return (
    <div className="nav">
      <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
        <Container>
          <Navbar.Brand href="http://localhost:3000/">
            <i class="fi fi-rr-football freepik"></i> Front-end
          </Navbar.Brand>
          <Nav.Link ><Link to="/results">Resultado</Link></Nav.Link> 
          <Nav.Link href="../pages/Players">Mis jugadores</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <img src={fee} alt="hh" />
        </Container>
      </Navbar>
    </div>
  );
}

export default NavComponent;
