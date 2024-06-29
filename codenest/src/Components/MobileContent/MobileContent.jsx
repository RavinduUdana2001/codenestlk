import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pic from '../../assets/mobile.png';
import ScrollReveal from 'scrollreveal';
import './MobileContent.css';

function MobileContent() {
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
      sr.reveal('.slide-left', {
        origin: 'left',
        delay:350,
        interval: 200,
        easing: 'ease-out',
      });
    }
  }, [sr]);

  useEffect(() => {
    if (sr) {
      sr.reveal('.slide-right', {
        origin: 'right',
        delay: 350, // Delay after the image animation
        interval: 200,
        easing: 'ease-out',
      });
    }
  }, [sr]);

;


  return (
    <div className='container-bg' id="mobile-content">
      <Container fluid className='overflow-hidden'>
        
        <Row className='mobile-content-row'>
          <Col lg={6} md={6} sm={12} className='mobile-content-col mt-3 slide-left'>
            {/* Image goes here */}
            <img src={pic} alt="Image" className="img-fluid motion-from-left mt-2 mb-5" />
          </Col>
          <Col lg={6} md={6} sm={12} className='d-flex align-items-center mobile-content-col slide-right'>
            {/* Description goes here */}
            <div className='motion-from-right'>
              <h2 className='text-center fs-1 '>Mobile Application Development</h2>
              <p className='text-center mt-2'>
              Elevate Your Business with Innovative App Solutions. Our team specializes in crafting intuitive mobile applications using cutting-edge technologies such as Flutter and Dart. From sleek design to seamless functionality, we offer comprehensive solutions tailored to your needs, ensuring superior user experiences. Partner with us to propel your business forward in the dynamic world of mobile app development."
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MobileContent;
