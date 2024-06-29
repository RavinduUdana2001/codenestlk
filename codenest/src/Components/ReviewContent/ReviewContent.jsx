import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import image3 from '../../assets/harshajith.jpg';
import image1 from '../../assets/ushan.png';
import image2 from '../../assets/kavindu.jpg';
import image4 from '../../assets/apple.jpg';
import image5 from '../../assets/trendz.jpeg';
import ScrollReveal from 'scrollreveal';
import './ReviewContent.css';

function ReviewContent() {
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
        delay: 300, 
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
        delay: 400, 
        interval: 200,
        easing: 'ease-out',
      });
    }
  }, [sr]);
  return (
    <div className=''>
      <Container fluid className='mb-5 overflow-hidden'>
        <h2 className='mb-5 text-center fs-1 mt-3 header'>Customer Reviews</h2>
        <Row>
          <Col lg={4} md={6} sm={12} className=''>
            <Card className='card-hover  mb-3'>
              <Card.Body>
              <img src={image3} alt="Image 3" className="img-fluid  text-center mr-3 mt-2  mb-3 rounded-2" style={{ width: '90px', height: '90px' }} />
                <Card.Title>Harshajith gunasen</Card.Title>
                <Card.Text>
                CodeNestLK delivered beyond our expectations, crafting a stunning website that perfectly represents our brand. Their attention to detail and professionalism made the entire process seamless. Highly recommended!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className='card-hover mb-3'>
              <Card.Body>
              <img src={image2} alt="Image 2" className="img-fluid  text-center mr-3 mt-2  mb-3 rounded-2" style={{ width: '90px', height: '90px' }} />
                <Card.Title>Kavindu Anjana</Card.Title>
                <Card.Text>
                I can't thank CodeNestLK enough for the incredible job they did on our e-commerce website. The design is modern and user-friendly, and the functionality is flawless. Our online sales have skyrocketed since launching the site!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className='card-hover mb-3'>
              <Card.Body>
              <img src={image5} alt="Image 1" className="img-fluid  text-center mr-3 mt-2  mb-3 rounded-2" style={{ width: '90px', height: '90px' }} />
                <Card.Title>Trendz</Card.Title>
                <Card.Text>
                Working with CodeNestLK was a pleasure from start to finish. Their team is incredibly talented and dedicated to ensuring client satisfaction. Our mobile app turned out beautifully, thanks to their expertise in Flutter and Dart.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className='card-hover  mb-3'>
              <Card.Body>
              <img src={image1} alt="Image 5" className="img-fluid  text-center mr-3 mt-2  mb-3 rounded-2" style={{ width: '90px', height: '90px' }} />
                <Card.Title>Ushan Dinitha</Card.Title>
                <Card.Text>
                CodeNestLK transformed my outdated portfolio website into a sleek, modern platform that perfectly showcases my work. Their attention to detail and commitment to excellence made the entire process seamless and enjoyable. I am thrilled with the results!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className='card-hover  mb-3'>
              <Card.Body>
              <img src={image4} alt="Image 4" className="img-fluid  text-center mr-3 mt-2  mb-3 rounded-2" style={{ width: '90px', height: '90px' }} />
                <Card.Title>Apple hub</Card.Title>
                <Card.Text>
                We turned to CodeNestLK for our e-commerce website, and they delivered beyond our expectations. From intuitive navigation to secure payment processing, every aspect of the site is top-notch. Our online sales have flourished thanks to their expertise!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ReviewContent;
