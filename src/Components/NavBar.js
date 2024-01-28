import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const data = useSelector(state=>state.cart)
    
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark" className='fluid' sticky='top'>
    <Container >
      <Navbar.Brand href="/" >Shop Me</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link to="/" as={Link} >Products</Nav.Link>
        
        <Nav.Link to="/cart" as={Link} >Cart {data.length}</Nav.Link>
        
      </Nav>
    </Container>
  </Navbar>
    </div>
  )
}
