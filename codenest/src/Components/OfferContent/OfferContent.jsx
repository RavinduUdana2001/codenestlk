import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';
import image1 from '../../assets/first.png';
import image2 from '../../assets/second.png';
import image3 from '../../assets/third.png';
import image4 from '../../assets/fourth.png';
import image5 from '../../assets/fifth.png';
import image6 from '../../assets/sixth.png';
import image7 from '../../assets/seventh.png';
import image8 from '../../assets/eight.png';
import './OfferContent.css';

function OfferContent() {
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
        <h1 className='mt-5 mb-5 text-center header'>What we offer</h1>
        <Row className=''> 
          <Col lg={3} md={3} sm={12}>
            <div className="card card-hover d-flex align-items-center justify-content-center text-center mb-4   ">
              <img src={image1} alt="Image 1" className="img-fluid float-left mr-3 mt-4 mb-2" style={{ width: '60px', height: '60px' }} />
              <div>
                <h3>Customized Solutions</h3>
                <p>Tailored solutions for unique needs, ensuring efficiency. We deliver personalized solutions aligned with your goals and optimized for performance.</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <div className="card card-hover d-flex align-items-center justify-content-cente text-center   mb-4">
              <img src={image2} alt="Image 2" className="img-fluid float-left mr-3 mt-4  mb-2" style={{ width: '60px', height: '60px' }} />
              <div>
                <h3>Professional Design</h3>
                <p >Expert designs captivate audiences, reflecting brand identity. We prioritize professionalism, making your website stand out with compelling visuals.</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <div className="card card-hover d-flex align-items-center justify-content-center text-center mb-4">
              <img src={image3} alt="Image 3" className="img-fluid float-left mr-3 mt-4  mb-2" style={{ width: '60px', height: '60px' }} />
              <div>
                <h3>Responsive Design</h3>
                <p>Websites adapt seamlessly to all devices for optimal experience. Our approach ensures functionality across screen sizes, enhancing user interaction.</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <div className="card card-hover d-flex align-items-center justify-content-center text-center mb-4">
              <img src={image4} alt="Image 4" className="img-fluid float-left mr-3 mt-4  mb-2" style={{ width: '60px', height: '60px' }} />
              <div>
                <h3>SEO Optimization</h3>
                <p >Strategic techniques boost visibility and rankings, enhancing online presence. We focus on content and meta tags for improved visibility.</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <div className="card card-hover d-flex align-items-center justify-content-center text-center mb-4">
              <img src={image8} alt="Image 8" className="img-fluid float-left mr-3 mt-4  mb-2" style={{ width: '60px', height: '60px' }} />
              <div>
                <h3>Content Upload</h3>
                <p >Hassle-free content management keeps your website engaging and updated. We ensure timely updates for relevance, maintaining user interest.</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <div className="card card-hover d-flex align-items-center justify-content-center text-center mb-4">
              <img src={image5} alt="Image 5" className="img-fluid float-left mr-3 mt-4  mb-2" style={{ width: '60px', height: '60px' }} />
              <div>
                <h3>E-commerce Functionality</h3>
                <p >Comprehensive solutions ensure seamless online selling, with secure payments and intuitive carts. We provide smooth shopping experiences for customers.</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <div className="card card-hover d-flex align-items-center justify-content-center text-center mb-4">
              <img src={image6} alt="Image 6" className="img-fluid float-left mr-3 mt-4  mb-2" style={{ width: '60px', height: '60px' }} />
              <div>
                <h3>Technical Expertise</h3>
                <p >Extensive knowledge tackles challenges, delivering innovative solutions. We stay updated with the latest technologies, offering cutting-edge solutions.</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={12}>
            <div className="card card-hover d-flex align-items-center justify-content-center text-center mb-4">
              <img src={image7} alt="Image 7" className="img-fluid float-left mr-3 mt-4  mb-2" style={{ width: '60px', height: '60px' }} />
              <div>
                <h3>Client Satisfaction</h3>
                <p >Dedication to exceeding expectations ensures satisfaction. Clear communication and collaboration ensure successful outcomes, fostering strong client relationships.
               </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OfferContent;
