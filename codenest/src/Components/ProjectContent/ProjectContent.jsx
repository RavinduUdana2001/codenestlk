import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Modal, Button, Card } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal
import projectImage1 from '../../assets/piccc.jpg'; // Import project images
import projectImage2 from '../../assets/pic2.jpg'; // Import project images
import projectImage3 from '../../assets/web.gif'; // Import project images
import './ProjectContent.css'; // Import CSS file for custom styling

function ProjectContent() {
  const [sr, setSr] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
      sr.reveal('.card', {
        origin: 'left',
        delay: 400, 
        interval: 200,
        easing: 'ease-out',
      });
    }
  }, [sr]);

  const projects = [
    { id: 1, name: 'Project 1', image: projectImage1, details: 'Project 1 details...' },
    { id: 2, name: 'Project 2', image: projectImage2, details: 'Project 2 details...' },
    { id: 3, name: 'Project 3', image: projectImage3, details: 'Project 3 details...' }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div id="Project-content" className='mt-5 mb-5'>
      <Container>
        <h2 className='text-center fs-bold mt-5 mb-5' style={{fontSize:'50px' , color:'#18315a'}}>Some of our projects</h2>
        <Row>
          {projects.map((project) => (
            <Col key={project.id} lg={4} md={6} sm={12} className='mb-3 '>
              <Card
                className="project-card"
                onClick={() => handleProjectClick(project)}
              >
                <div className="project-img-container">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.name}
                    className="card-img"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.details}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject && selectedProject.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <>
              <img src={selectedProject.image} alt={selectedProject.name} className="img-fluid mb-3" />
              <p>{selectedProject.details}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProjectContent;
