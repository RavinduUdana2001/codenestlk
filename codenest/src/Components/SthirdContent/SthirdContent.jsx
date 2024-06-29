import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import one from '../../assets/one.jpg';
import two from '../../assets/two.jpg';
import three from '../../assets/three.jpg';
import './SthirdContent.css'; // Import CSS file for styling

function SthirdContent() {
    return (
        <div className="testimonial-section">
            <Container className='mb-3 overflow-hidden'>
                <h2 className='mt-5 mb-5 text-center header' style={{fontSize:'50px'}}>What our top clients say</h2>
                <Row className=''> 
                    <Col lg={4} md={4} sm={12}>
                        <div className="card">
                            <img src={one} alt="Ravindu Perera" className="img-fluid rounded-circle mb-3 mt-4" />
                            <div className='mb-3'>
                                <h3>Exceptional Quality</h3>
                                
                                <p>Clients appreciate the exceptional quality of our work, noting the attention to detail and the high standard of craftsmanship in every project delivered.</p>
                            </div>
                        </div>
                    </Col>
        
                    <Col lg={4} md={4} sm={12}>
                        <div className="card">
                            <img src={two} alt="Janani Silva" className="img-fluid rounded-circle mb-3 mt-4" />
                            <div className='mb-3'>
                                <h3>Professionalism</h3>
                                
                                <p>Clients praise the professionalism and expertise of our team, highlighting our ability to understand their needs and deliver solutions that exceed expectations.</p>
                            </div>
                        </div>
                    </Col>
        
                    <Col lg={4} md={4} sm={12}>
                        <div className="card">
                            <img src={three} alt="Ravindu Perera" className="img-fluid rounded-circle mb-3 mt-4" />
                            <div className='mb-3'>
                                <h3>Reliability and Support</h3>
                                
                                <p>Clients value the reliability and ongoing support provided by our team, noting our responsiveness and dedication to addressing their concerns promptly.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SthirdContent;
