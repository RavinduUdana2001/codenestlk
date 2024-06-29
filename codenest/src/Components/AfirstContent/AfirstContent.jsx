import React from 'react';
import './AfirstContent.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import photo from '../../assets/photo.jpg';

function AfirstContent() {
  return (
    <div className="mt-lg-0 mt-5">
      <Container fluid>
        <Row>
          <Col lg={7} md={7} sm={12}>
            <img src={photo} alt='' className='img-fluid mt-3'></img>
          </Col>
          
          <Col lg={5} md={5} sm={12} className="d-flex flex-column justify-content-center">
            {/* Center content vertically */}
            <h2 className='text-center fs-bolder mb-3' style={{ fontSize:'60px' }}>About CodeNestLK</h2>
            <p className='text-center' style={{ fontSize:'18px' }}>Explore the essence of CodeNestLK, where creativity and innovation converge to shape exceptional digital experiences. Get to know our journey and the dedicated team behind our success.</p>
            <div className="text-center">
            <Button variant="primary" className="custom-button" href="https://wa.me/94741149916" target="_blank">Contact Now</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AfirstContent;
