import React, { useEffect, useState } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';

function FaqContent() {
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
        origin: 'right',
        delay: 250, 
        interval: 200,
        easing: 'ease-out',
      });
    }
  }, [sr]);

  useEffect(() => {
    if (sr) {
      sr.reveal('.acc', {
        origin: 'left',
        delay: 450, 
        interval: 200,
        easing: 'ease-out',
      });
    }
  }, [sr]);
  return (
    <Container className="mt-5 mb-5 overflow-hidden">
      <h2 className="text-center mb-4 header">Frequently Asked Questions</h2>
      <Accordion className='acc'>
        <Accordion.Item eventKey="0" className=''>
          <Accordion.Header>What services do you offer as a web development company?</Accordion.Header>
          <Accordion.Body>
          We offer a comprehensive range of web development services, including website design, development, e-commerce solutions, content management systems (CMS), custom web applications, website maintenance, and more.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      
      {/* Add space between accordions */}
      <div style={{ marginBottom: '10px' }}></div>
      
      <Accordion className='acc'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>How long does it typically take to develop a website?</Accordion.Header>
          <Accordion.Body>
          The timeframe for website development varies depending on the complexity of the project. Simple websites may take a few days, while more complex projects can take several weeks. We work closely with our clients to establish timelines and keep them informed throughout the development process.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div style={{ marginBottom: '10px' }}></div>

      <Accordion className='acc'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What technologies and platforms do you specialize in for web development?</Accordion.Header>
          <Accordion.Body>
          We specialize in a variety of technologies and platforms, including HTML, CSS, react , JavaScript, PHP, Python, WordPress and more. Our team stays up-to-date with the latest trends and technologies to deliver cutting-edge solutions for our clients.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div style={{ marginBottom: '10px' }}></div>

      <Accordion className='acc'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Can you help with website maintenance and updates after the initial development?</Accordion.Header>
          <Accordion.Body>
          Yes, we offer website maintenance and support services to ensure your website remains up-to-date and functions smoothly. Our team can assist with content updates, security patches, software updates, and any other maintenance tasks required to keep your website running efficiently.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div style={{ marginBottom: '10px' }}></div>
      
      <Accordion className='acc'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do you ensure the security of websites you develop, especially for e-commerce businesses?</Accordion.Header>
          <Accordion.Body>
          Security is a top priority for us. We implement industry best practices for website security, including secure coding practices, SSL certificates, regular security audits, and robust authentication mechanisms. For e-commerce websites, we also adhere to PCI DSS compliance standards to ensure the protection of sensitive customer data.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      
    </Container>
  );
}

export default FaqContent;
