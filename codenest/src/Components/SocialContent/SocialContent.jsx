import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './SocialContent.css'; // Import CSS file for styling
import whatsapp from '../../assets/whatsapp.png';
import insta from '../../assets/instagram.png';
import fb from '../../assets/facebook.png';

function SocialContent() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/94741149916', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/profile.php?id=61557471675297&mibextid=ZbWKwL', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/your_instagram_profile/', '_blank');
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={3} md={3} sm={12} className="social-column " style={{backgroundColor:'#dbe1f4'}}>
            <img src={whatsapp} alt="WhatsApp" className="social-image mt-5" />
            <h3 className="social-header">WhatsApp</h3>
            <p className="social-description">Connect with us on WhatsApp for instant support.</p>
            <button className="contact-button mb-5" onClick={handleWhatsAppClick}>Contact Us</button>
          </Col>

          <Col lg={3} md={3} sm={12} className="social-column " style={{backgroundColor:'#edf0f9'}}>
            <img src={fb} alt="Facebook" className="social-image mt-5" />
            <h3 className="social-header">Facebook</h3>
            <p className="social-description">Follow us on Facebook for updates and news.</p>
            <button className="contact-button mb-5" onClick={handleFacebookClick}>Contact Us</button>
          </Col>

          <Col lg={3} md={3} sm={12} className="social-column " style={{backgroundColor:'#dbe1f4'}}>
            <img src={insta} alt="Instagram" className="social-image mt-5" />
            <h3 className="social-header">Instagram</h3>
            <p className="social-description">Check out our latest posts on Instagram.</p>
            <button className="contact-button mb-5" onClick={handleInstagramClick}>Contact Us</button>
          </Col>

          <Col lg={3} md={3} sm={12} className="contact-column ">
            <div className="contact-details">
              <h3 className="contact-header">Contact Details</h3>
              <div className="contact-info">
                <FaMapMarkerAlt className="contact-icon" />
                <p className='mt-3'>Colombo , Sri lanka</p>
              </div>
              <div className="contact-info">
                <FaPhone className="contact-icon" />
                <p className='mt-3'>+94 741149916</p>
              </div>
              <div className="contact-info">
                <FaEnvelope className="contact-icon" />
                <p className='mt-3'>codenestlk@gmail.com</p>
              </div>
           
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SocialContent;
