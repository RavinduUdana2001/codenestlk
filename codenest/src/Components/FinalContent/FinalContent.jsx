import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';

function FinalContent() {
  return (
    <footer className=' text-white text-center text-lg-start' style={{backgroundColor:"#5253f9"}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/profile.php?id=61557471675297&mibextid=ZbWKwL' className='me-4 text-reset'>
            <FaFacebookF />
          </a>
          <a href='https://wa.me/94741149916' className='me-4 text-reset'>
            <FaWhatsapp />
          </a>
          <a href='https://www.instagram.com/codenestlk/?igsh=ZTZybTNncW45aDk2&utm_source=qr' className='me-4 text-reset'>
            <FaInstagram />
          </a>
       
        </div>
      </section>

      <section>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <span className='me-3'>Codenest</span>
              </h6>
              <p>
                Where idea becomes websites.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>Web Design</p>
              <p>Quality Assurance</p>
              <p>Mobile Application Development</p>
              <p>UI/UX Design</p>
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <span className='me-2'>
                  <FaHome />
                </span>
                No 5, 1st lane, New Town  Polonnaruwa
              </p>
              <p>
                <span className='me-3'>
                  <FaEnvelope />
                </span>
                codenestlk@gmail.com
              </p>
              <p>
                <span className='me-3'>
                  <FaPhone />
                </span>
                +94 715396152
              </p>
              <p>
                <span className='me-3'>
                  <FaPrint />
                </span>
                +94 741149916
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='py-4'>
        <Container>
          <Row>
            <Col>
              <h6 className='text-uppercase fw-bold mb-3'>Privacy Policy</h6>
              <p>Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.</p>
              <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
              <p>We don't share any personally identifying information publicly or with third-parties, except when required to by law.</p>
            </Col>
            <Col>
              <h6 className='text-uppercase fw-bold mb-3'>Terms and Conditions</h6>
              <p>By accessing the website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
              <p>The materials contained in this website are protected by applicable copyright and trademark law.</p>
              <p>We reserve the right to modify or replace these terms at any time without notice.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright: 
        <a className='text-reset fw-bold' href='https://codenestlk.com'>
           codenestlk
        </a>
      </div>
    </footer>
  );
}

export default FinalContent;
