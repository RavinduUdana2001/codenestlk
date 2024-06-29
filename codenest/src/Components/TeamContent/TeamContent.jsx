import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TeamContent.css'; // Import CSS file for styling
import ScrollReveal from 'scrollreveal';
import teamMember1 from '../../assets/ravindu.jpg';
import teamMember2 from '../../assets/kavindu.jpg';
import teamMember3 from '../../assets/janani.jpg';
import teamMember4 from '../../assets/chethana.jpg';

function TeamContent() {

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
      sr.reveal('.team-card', {
        origin: 'left',
        delay: 250,
        interval: 200,
        easing: 'ease-out',
      });
    }
  }, [sr]);

  const teamMembers = [
    { name: 'Ravindu Singhapura', role: 'Fullstack Developer', image: teamMember1 },
    { name: 'Kavindu Anjana', role: 'Fullstack Developer', image: teamMember2 },
    { name: 'Janani Upeksha', role: 'UI/UX Designer', image: teamMember3 },
    { name: 'Chethana Lakthilina', role: 'Quality Assurance', image: teamMember4 }
  ];

  return (
    <div id="second-content">
      <Container fluid className='overflow-hidden'>
        <Row className='justify-content-center mt-5 mb-5' >
          <h2 className='text-center fs-bold header' style={{ fontSize: '50px', color: '#18315a' }}>Our Talented Team</h2>
          {teamMembers.map((member, index) => (
            <Col lg={3} md={6} sm={12} key={index} className='team-card'>
              <div className="mx-auto mt-5">
                <img src={member.image} alt={member.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.role}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default TeamContent;
