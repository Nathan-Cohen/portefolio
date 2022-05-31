import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {Container, Navbar, Nav} from 'react-bootstrap'

export default function NavBar() {
  return (
    <>
      <Navbar className="container-navbar" variant='light' expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{fontSize: "25px", fontWeight: 'bold'}}>Nathan COHEN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Accueil</Nav.Link>
              <Nav.Link as={Link} to="/projects/test">Projets</Nav.Link>
              <Nav.Link as={Link} to="/experiences">Expériences</Nav.Link>
              <Nav.Link as={Link} to="/formations">Formations et Diplômes</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
