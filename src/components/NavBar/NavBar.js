import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
    return (
        <div className=''>
 <Navbar className='' bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='fw-bold text-primary fs-2 ' to="/">Best Online Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold ">
            <Link className='mx-4 text-decoration-none ' to="/home">Home</Link>
            <Link className='mx-4 text-decoration-none' to="/quiz">Quiz</Link>
            <Link className='mx-4 text-decoration-none' to="/blogs">Blogs</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavBar;