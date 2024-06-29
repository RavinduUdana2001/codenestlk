import React from 'react'
import './ServiceContent.css';
import { Container, Row, Col } from 'react-bootstrap';
import picc from '../../assets/picc.png';

function ServiceContent() {
  return (
    <div>
         <Container fluid  className='mt-lg-5 pt-lg-5 mt-5' style={{ backgroundColor: "" ,  }}>
      <Row>
        <Col md={5} className="p-1  " >
       <img src={picc} alt='' className='img-fluid mt-4'></img>
        </Col>
        
        <Col md={7} className="d-flex align-items-center justify-content-center">
          <div className="p-5 text-center">
            <h2 className='fs-bolder fs-1 mb-3'>Make Your Dream Website Today</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde pariatur facere ipsam. Porro, libero ipsum consectetur eius ex tenetur, quia consequatur voluptatum a officiis et alias ipsam odit tempora quam.</p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default ServiceContent