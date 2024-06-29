import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';
import image1 from '../../assets/seo.png';
import image2 from '../../assets/web.png';
import image3 from '../../assets/app.png';
import image4 from '../../assets/ui-ux.png';
import image5 from '../../assets/backend.png';
import image6 from '../../assets/upload.png';
import image7 from '../../assets/maintenance.png';
import image8 from '../../assets/cart.png';
import './SsecondContent.css';

function SsecondContent() {
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
        delay: 250, 
        interval: 200,
        easing: 'ease-out',
      });
    }
  }, [sr]);

  useEffect(() => {
    if (sr) {
      sr.reveal('.card', {
        origin: 'left',
        scale: 1.2,
        delay: 350, 
        interval: 200,
        easing: 'ease-out',
      });
    }
  }, [sr]);
  return (
    <div>
      <Container fluid className='mb-3 overflow-hidden'>
        <h2 className='mt-5 mb-5 text-center header' style={{fontSize:'50px'}}>Our services</h2>
        <Row className=''> 
          <Col lg={3} md={3} sm={12}>
            <div className="card card-hover  d-flex align-items-center justify-content-center text-center mb-4   ">
              <img src={image2} alt="Image 2" className="img-fluid float-left mr-3 mt-4 mb-2" style={{ width: '60px', height: '60px' }} />
              <div>
                <h3>Web Developing</h3>
                <p>Craft captivating websites tailored to your brand's unique identity, blending functionality and aesthetics seamlessly.</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <div className="card card-hover d-flex align-items-center justify-content-center text-center   mb-4">
              <img src={image3} alt="Image 3" className="img-fluid float-left mr-3 mt-4  mb-2" style={{ width: '60px', height: '60px' }} />
              <div>
                <h3>Mobile App Developing</h3>
                <p >Transform your ideas into dynamic mobile applications, delivering engaging user experiences across platforms.</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <div className="card card-hover d-flex align-items-center justify-content-center text-center mb-4">
              <img src={image1} alt="Image 1" className="img-fluid float-left mr-3 mt-4  mb-2" style={{ width: '60px', height: '60px' }} />
              <div>
                <h3>SEO Service</h3>
                <p>Elevate your online visibility with strategic SEO solutions, optimizing your website for enhanced search engine rankings.</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <div className="card card-hover d-flex align-items-center justify-content-center text-center mb-4">
              <img src={image4} alt="Image 4" className="img-fluid float-left mr-3 mt-4  mb-2" style={{ width: '60px', height: '60px' }} />
              <div>
                <h3>UI UX Design</h3>
                <p >Create intuitive user interfaces and captivating user experiences, ensuring seamless interactions and user satisfaction.</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <div className="card card-hover d-flex align-items-center justify-content-center text-center mb-4">
              <img src={image5} alt="Image 5" className="img-fluid float-left mr-3 mt-4  mb-2" style={{ width: '60px', height: '60px' }} />
              <div>
                <h3>Backend Developing</h3>
                <p >Build robust and scalable backend systems, powering your applications with efficiency and reliability.</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <div className="card card-hover d-flex align-items-center justify-content-center text-center mb-4">
              <img src={image8} alt="Image 8" className="img-fluid float-left mr-3 mt-4  mb-2" style={{ width: '60px', height: '60px' }} />
              <div>
                <h3>E-commerce Functionality</h3>
                <p >Launch feature-rich e-commerce platforms, providing seamless shopping experiences and driving sales.</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <div className="card card-hover d-flex align-items-center justify-content-center text-center mb-4">
              <img src={image6} alt="Image 6" className="img-fluid float-left mr-3 mt-4  mb-2" style={{ width: '60px', height: '60px' }} />
              <div>
                <h3>Content Upload</h3>
                <p >Streamline your content management process with efficient upload and management solutions, ensuring timely updates.</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <div className="card card-hover d-flex align-items-center justify-content-center text-center mb-4">
              <img src={image7} alt="Image 7" className="img-fluid float-left mr-3 mt-4  mb-2" style={{ width: '60px', height: '60px' }} />
              <div>
                <h3>Maintenance and Support</h3>
                <p >Ensure the ongoing performance and security of your digital assets with comprehensive maintenance and support services.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SsecondContent;
