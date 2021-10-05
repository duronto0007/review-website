import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () =>{
  
    return (
        
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/home">Children Development Center</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav" to="/home">Home</NavLink>
          <NavLink className="nav" to="/courses">Courses</NavLink>
          <NavLink className="nav" to="/events">Events</NavLink>
          <NavLink className="nav" to="/about">About</NavLink>
          <NavLink className="nav" to="/contact">Contact</NavLink>
        </Nav>
        </Container>
      </Navbar>
    
    );
};

export default Header;