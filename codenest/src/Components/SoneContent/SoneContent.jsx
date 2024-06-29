import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './SoneContent.css';

function SoneContent() {
  return (
    <div className="container-backg mt-5 pt-5">
      <Container fluid>
        <Row>
            <Col lg={3}></Col>
            <Col lg={6} sm={12} className='mt-4 mb-4'>
        <h1 className='text-center fs-bolder mb-3' style={{ fontSize:'60px' , }}>Our Services</h1>
        <p className='text-center fs-semibold' style={{ fontSize:'18px' ,}}>Embark on a Journey of Digital Transformation with CodeNestLK. Discover a Diverse Range of Expert Services Tailored to Empower Your Online Presence and Propel Your Success Forward.</p>
        <div className="text-center">
          <Button variant="primary " className="custom-button border-0" href="https://wa.me/94741149916" target="_blank">Contact Now</Button>
        </div>
        </Col>
        <Col lg={3}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default SoneContent;
