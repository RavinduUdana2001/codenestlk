import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './PricingContent.css';

function PricingContent() {
    const handleWhatsAppMessage = (plan) => {
        const whatsappNumber = '94741149916'; // Your WhatsApp number
        const message = `I'm interested in the ${plan} plan. Please provide more information.`;
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="pricing-content">
            <Container>
                <h2 className="text-center mb-5 mt-3" style={{fontSize:'50px'}}>Choose Your Plan</h2>
                <Row>
                    <Col lg={4} sm={12}>
                        <div className="pricing-card">
                            <h3>Basic</h3>
                            <p className="price">$30/Project</p>
                           
                            <ul>
                                <li>Customizable basic static Landing Page</li>
                                <li>Up to 5 sections</li>
                                <li>SEO Optimization</li>
                                <li>content upload</li>
                                <li>Responsive Design</li>
                                <li>Contact Form Integration</li>
                                <li >(You can customize the plan as you preferred)</li>
                            </ul>
                            <Button variant="primary" onClick={() => handleWhatsAppMessage('Basic')}>Choose Plan</Button>
                        </div>
                    </Col>

                    <Col lg={4} sm={12}>
                        <div className="pricing-card">
                            <h3>Standard</h3>
                            <p className="price">$70/Project</p>
                            <ul>
                                <li>All Basic features</li>
                                <li>Up to 4 Pages</li>
                                <li>SEO Optimization</li>
                                <li>Content Management System</li>
                                <li>Responsive design</li>
                                <li>Google Analytics Integration</li>
                                <li >(You can customize the plan as you preferred)</li>
                            </ul>
                            <Button variant="primary" onClick={() => handleWhatsAppMessage('Standard')}>Choose Plan</Button>
                        </div>
                    </Col>

                    <Col lg={4} sm={12}>
                        <div className="pricing-card">
                            <h3>Premium</h3>
                            <p className="price">$150/Project</p>
                            <ul>
                                <li>All Standard features</li>
                                <li>Custom Web Development</li>
                                <li>E-commerce Functionality</li>
                                <li>upto 6 pages</li>
                                <li>SEO Optimization</li>
                                <li>Dedicated Support</li>
                                <li >(You can customize the plan as you preferred)</li>
                            </ul>
                            <Button variant="primary" onClick={() => handleWhatsAppMessage('Premium')}>Choose Plan</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PricingContent;
