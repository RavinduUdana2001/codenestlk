import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pic2 from '../../assets/site.png';
import ScrollReveal from 'scrollreveal';
import './WebContent.css';

function WebContent() {
  const [sr, setSr] = useState(null);

  useEffect(() => {
    const scrollReveal = ScrollReveal();
    setSr(scrollReveal);

    return () => {
      if (sr) {
        sr.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (sr) {
      sr.reveal('.header', {
        origin: 'top',
        scale: 1.2,
        delay: 250, // Delay after the image animation
        interval: 250,
        easing: 'ease-out',
      });
    }
  }, [sr]);

  useEffect(() => {
    if (sr) {
      sr.reveal('.slide-up-left', {
        origin: 'left',
        scale: 1.2,
        delay:400,
        interval: 250,
        easing: 'ease-out',
      });
    }
  }, [sr]);

  useEffect(() => {
    if (sr) {
      sr.reveal('.slide-up-right', {
        origin: 'right',
        scale: 1.2,
        delay: 600, // Delay after the image animation
        interval: 250,
        easing: 'ease-out',
      });
    }
  }, [sr]);

;

  return (
    <div className='web-content' id="web-content">
      <Container fluid className="overflow-hidden"> {/* Apply overflow hidden */}
        <Row className='mobile-content-row'>
        <Col sm={12} className={`text-center mt-5 slide-in-bottom`}>
            <h2 className='fs-1 header'>Web Development</h2>
          </Col>
          <Col lg={6} md={6} sm={12} className={`mobile-content-col mt-3 slide-up-left`}>
            {/* Image goes here */}
            <img src={pic2} alt="Image" className="img-fluid" />
          </Col>
          <Col lg={6} md={6} sm={12} className={`d-flex align-items-center mobile-content-col slide-up-right`}>
            {/* Description goes here */}
            <div>
              <h2 className='text-center'>Empower Your Digital Presence</h2>
              <p className='text-center'>
              Explore CodeNestLK's web development expertise, where we prioritize customer satisfaction through responsive designs, seamless user experiences, and cutting-edge technologies including HTML, CSS, JavaScript, React, PHP, and Bootstrap. Our mission is to deliver tailor-made websites that not only showcase your brand effectively but also drive results in today's digital world.
              </p>
            </div>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
}

export default WebContent;
