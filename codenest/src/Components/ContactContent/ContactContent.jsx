import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './ContactContent.css';

function ContactContent() {
  return (
    <div className="container-backgrrr mt-5 pt-5">
      <Container fluid>
        <Row>
            <Col lg={1}></Col>
            <Col lg={10} sm={12} className='mt-4 mb-4'>
        <h1 className='text-center fs-bolder mb-3' style={{ fontSize:'60px' , }}>Contact Us Now</h1>
        <p className='text-center fs-semibold' style={{ fontSize:'18px' ,}}>Contact Codenestlk for all your web development needs! Whether you're looking to create a stunning website, optimize your online presence, or enhance your digital marketing strategies, our team of experts is here to help. Reach out to us today to discuss your project requirements, and let's turn your ideas into reality. Your success is our priority at Codenestlk.</p>
        <div className="text-center">
          <Button variant="primary " className="custom-button border-0" href="https://wa.me/94741149916" target="_blank">Contact Now</Button>
        </div>
        </Col>
        <Col lg={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactContent; // Ensure to export the component
