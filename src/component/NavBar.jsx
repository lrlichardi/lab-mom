import React from "react";
import { Navbar , Nav , Container } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Container className='ms-0'>
          <Navbar.Brand>Laboratorio Dr.Perez Maria Fatima M.P.1094</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to='/patients'>Pacientes</Nav.Link>
              <Nav.Link as={NavLink} to="/paginasutiles">Paginas Utiles</Nav.Link>
              <Nav.Link as={NavLink} to="/socialwork">Obra Sociales</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
