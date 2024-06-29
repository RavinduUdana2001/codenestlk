import React from 'react';
import { Container, Row, Col , Button } from 'react-bootstrap';
import img from '../../assets/three.gif';
import './BodyContent.css'


function BodyContent() {
  return (
    <Container fluid  className='  mt-5' style={{ backgroundColor: "#2c2c2c" ,  }}>
      <Row>
        <Col md={7} className="p-1  " >
         <img src={img} alt='' className='img-fluid mb-lg-5  mb-0'/>
        </Col>
        
        <Col md={5} className="d-flex align-items-center justify-content-center ">
          <div className="p-5 text-center">
            <h2 className='fs-bolder fs-1 mb-3'style={{color:'white'}}>Welcome to Codenestlk</h2>
            <p style={{color:'white'}}>Experience the power of turning ideas into captivating websites. At CodeNestLK, we specialize in crafting dynamic web solutions that bring your vision to life. Let us be your partner in digital transformation.</p>
          
          
            <Button variant="primary" className="custom-button border-0" href="https://wa.me/94741149916" target="_blank">Contact Now</Button>

              </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BodyContent;
