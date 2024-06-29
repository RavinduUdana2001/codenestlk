import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.png'; 
import { Link } from 'react-router-dom';  
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa'; 
import './HeaderContent.css';

function HeaderContent() {
  return (
    <Navbar expand="lg" fixed="top" variant="dark" className="navbar-light" style={{ backgroundColor: '#2c2c2c' }}>
      <Container className="">
      <Navbar.Brand as={Link} to="/" className="">
  <img
    src={logo}
    alt="Bootstrap"
    width="195"
    height="35"
    className="d-inline-block align-top ms-2"
  />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='me-3'  />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto mb-lg-0 me-auto pe-lg-5 align-items-center">
            {/* Add the classes to display social media icons only on large screens */}
            <Nav.Link href="https://www.facebook.com/profile.php?id=61557471675297&mibextid=ZbWKwL" target="_blank" className="social-icon-link me-lg-4 text-white d-none d-lg-inline">
              <FaFacebook size={35} className="social-icon" />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/codenestlk/?igsh=ZTZybTNncW45aDk2&utm_source=qr" target="_blank" className="social-icon-link me-lg-4 text-white d-none d-lg-inline">
              <FaInstagram size={35} className="social-icon" />
            </Nav.Link>
            <Nav.Link href="https://wa.me/94741149916" target="_blank" className="social-icon-link me-lg-4 text-white d-none d-lg-inline">
              <FaWhatsapp size={35} className="social-icon" />
            </Nav.Link>
    
          </Nav>
          <Nav className="me-auto me-lg-5 ps-lg-1 mb-lg-0 text-center">
            <Nav.Link as={Link} to="/" className=" ms-lg-5 fw-semibold fs-5 text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About" className="ms-lg-5 fw-semibold fs-5 text-white">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Services" className="ms-lg-5 fw-semibold fs-5 text-white">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="ms-lg-5 fw-semibold fs-5 text-white">
              Contact
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderContent;
