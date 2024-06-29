import React from 'react';
import './Pcontent.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Pcontent() {
  return (
    <div className="process-section">
      <h2 className="section-title">Our Development Process</h2>
      <div className="process-container">
        <div className="process-step">
          <div className="process-icon">1</div>
          <FontAwesomeIcon icon={faAngleRight} className="arrow-right" />
          <h3 className="process-title">Requirement Gathering</h3>
          <p className="process-description">Understand client needs and gather project requirements.</p>
        </div>
        <div className="process-step">
          <div className="process-icon">2</div>
          <FontAwesomeIcon icon={faAngleLeft} className="arrow-left" />
          <FontAwesomeIcon icon={faAngleRight} className="arrow-right" />
          <h3 className="process-title">Planning & Analysis</h3>
          <p className="process-description">Plan project scope, timelines, and resource allocation.</p>
        </div>
        <div className="process-step">
          <div className="process-icon">3</div>
          <FontAwesomeIcon icon={faAngleLeft} className="arrow-left" />
          <FontAwesomeIcon icon={faAngleRight} className="arrow-right" />
          <h3 className="process-title">Design & Prototyping</h3>
          <p className="process-description">Create UI/UX designs and prototypes for client approval.</p>
        </div>
        <div className="process-step">
          <div className="process-icon">4</div>
          <FontAwesomeIcon icon={faAngleLeft} className="arrow-left" />
          <FontAwesomeIcon icon={faAngleRight} className="arrow-right" />
          <h3 className="process-title">Development & Testing</h3>
          <p className="process-description">Code implementation and rigorous testing phases.</p>
        </div>
        <div className="process-step">
          <div className="process-icon">5</div>
          <FontAwesomeIcon icon={faAngleLeft} className="arrow-left" />
          <FontAwesomeIcon icon={faAngleRight} className="arrow-right" />
          <h3 className="process-title">Deployment</h3>
          <p className="process-description">Deploy the project to the production environment.</p>
        </div>
        <div className="process-step">
          <div className="process-icon">6</div>
          <FontAwesomeIcon icon={faAngleLeft} className="arrow-left" />
          <h3 className="process-title">Maintenance & Support</h3>
          <p className="process-description">Provide ongoing maintenance and support services.</p>
        </div>
      </div>
    </div>
  );
}

export default Pcontent;
