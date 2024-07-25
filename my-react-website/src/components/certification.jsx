import React from 'react';
import './certification.css';

function Certification() {
  return (
    <section id="certifications">
      <div className="certifications-container">
        <h1>Certifications</h1>
        <div className="certification-list">
          <div className="certification-item">
            <img src="/images/codecademy-logo.jpg" alt="Codecademy Logo" className="certification-logo" />
            <div className="certification-text">
              <h2>Learn Java</h2>
              <p>Issuing Organization: Codecademy</p>
              <p>Date of Completion: July 23, 2021</p>
              <a href="https://www.codecademy.com/profiles/AdityaRajTripathi/certificates/learn-java" target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </div>
          </div>
          <div className="certification-item">
            <img src= "/images/codecademy-logo.jpg" alt="Codecademy Logo" className="certification-logo" />
            <div className="certification-text">
              <h2>Learn R</h2>
              <p>Issuing Organization: Codecademy</p>
              <p>Date of Completion: July 7, 2021</p>
              <a href="https://www.codecademy.com/profiles/AdityaRajTripathi/certificates/learn-r" target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </div>
          </div>
          <div className="certification-item">
            <img src="/images/udemy-logo.png" alt="Udemy Logo" className="certification-logo" />
            <div className="certification-text">
              <h2>The Complete 2024 Web Development Bootcamp</h2>
              <p>Issuing Organization: Udemy</p>
              <p>Date of Completion: July 12, 2024</p>
              <a href="https://www.udemy.com/certificate/UC-5cd0290c-3a01-41d2-9955-e8d1bd8801ce/" target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certification;