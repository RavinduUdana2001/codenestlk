import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image from '../../assets/image.png';
import './HelpContent.css'; // Import CSS file for styling

function HelpContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const targetOffset = document.getElementById('Help-content').offsetTop;
      const windowHeight = window.innerHeight;

      if (scrollTop + windowHeight >= targetOffset) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="Help-content">
      <h1 className='mt-5 text-center'>This is a sample text</h1>
      <Container className='mt-5 mb-5' style={{ backgroundColor: '#f8f6fe', borderRadius: '60px' }}>
        <Row className=''>
          <Col lg={5} md={6} sm={12} className={`d-flex align-items-center justify-content-center text-center ${isVisible ? 'slide-in-left' : ''}`}>
            <div className="">
              <img src={image} alt="Image" className="img-fluid mb-md-5 pb-md-5 mb-3 ms-md-3 mt-md-5 ms-lg-5" />
            </div>
          </Col>
          <Col lg={5} md={6} sm={12} className={`d-flex align-items-center justify-content-center text-center ms-lg-5 ps-lg-5 ${isVisible ? 'slide-in-right' : ''}`}>

            <div className="">
              <h2 className='ms-lg-5 ps-lg-5'>This is the topic related </h2>
              <p className='ms-lg-5 ps-lg-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel rem aut
                voluptatem optio temporibus quam fugiat sunt, veniam ea commodi a architecto unde,
                deleniti, ipsam dolore inventore culpa consequuntur amet?</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HelpContent;
