import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';
import middleImage from '../../assets/middle.png';
import './SecondContent.css'; // Import CSS file

function SecondContent() {
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
      sr.reveal('.slide-up', {
        
        delay: 400,
        interval: 300,
        easing: 'ease-in',
      });
    }
  }, [sr]);

  return (
    <div className="container-background" id="second-content">
      <Container fluid={false} className="pt-5"> {/* Set fluid={false} to prevent full width */}
        <Row>
          <Col md={4} sm={12} className="p-3 mt-0 pt-0 d-flex flex-column justify-content-center align-items-center text-center slide-up" style={{ color: 'white' }}>
            <h2>Web Development</h2>
            <p>At CodeNestLK, we specialize in building immersive web solutions that captivate and engage. Our expert team harnesses the power of HTML, CSS, JavaScript, React, PHP, and Bootstrap to create visually stunning and highly functional websites tailored to your needs.</p>
          </Col>
          <Col md={4} sm={12} className="align-items-center justify-content-center mt-0 pt-0">
            <img src={middleImage} alt="Middle Image" className="img-fluid mb-md-5 pb-md-5 mb-3 slide-up" />
          </Col>
          <Col md={4} sm={12} className="p-3 mt-0 pt-0 mb-3 d-flex flex-column justify-content-center align-items-center text-center slide-up" style={{ color: 'white' }}>
            <h2>Mobile App Development</h2>
            <p>Transforming ideas into powerful mobile experiences is our expertise at CodeNestLK. Using Dart and Flutter, we design and develop intuitive mobile applications that resonate with users, whether it's on iOS or Android platforms.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecondContent;
