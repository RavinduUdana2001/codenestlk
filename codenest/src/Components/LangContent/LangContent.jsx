import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './LangContent.css'; // Import your CSS file here
import web from '../../assets/website.gif'; // Import your GIF

function LangContent() {
  return (
    <Container fluid className="lang-content-container py-5" style={{backgroundColor:"#ebf0f3"}}>
      <Row className="align-items-center">
        {/* Left column with GIF */}
        <Col lg={6} md={12} className="text-center mb-5">
          <img src={web} alt="Web Development" className="lang-gif img-fluid" />
        </Col>
        {/* Right column with description */}
        <Col lg={6} md={12} className="text-center">
          <div className="description-container p-4">
            <h2 className="mb-4 web-content-subtitle">Mastering the Art of Web Development.</h2>
            <p className='web-content-description'>
         Our web development team harnesses the power of HTML, CSS, JavaScript, and React.js to 
         craft visually stunning and interactive websites. We ensure that your site not only looks 
         great but also functions seamlessly, with a focus on user experience.
            </p>
            <p className='web-content-description'>
            By leveraging backend technologies like PHP, we handle complex server-side processes and database interactions, 
            ensuring your website is both visually appealing and efficient. 
            Plus, we prioritize mobile responsiveness, ensuring your site looks and works flawlessly on all devices.
            </p>
            <p className='web-content-description'>
            Whether you need a simple static site or a dynamic web app, we have the expertise to bring your vision 
            to life and create a standout online presence for your brand.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LangContent;
