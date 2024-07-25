import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faSchool } from '@fortawesome/free-solid-svg-icons';
import './education.css';

function Education() {
  return (
    <section id="education">
      <div className="education-container">
        <h1>Education</h1>
        <div className="education-items">
          <div className="education-item">
            <div className="education-icon">
              <FontAwesomeIcon icon={faUniversity} size="3x" />
            </div>
            <h2>Bachelor of Computer Science</h2>
            <p>The University of British Columbia, 2020-2024</p>
            <p>
              Relevant Coursework: Data Structures, Web Programming, Analysis of Algorithms, Software Engineering,
              Introduction to Artificial Intelligence, and Human Computer Interaction.
            </p>
          </div>
          <div className="education-item">
            <div className="education-icon">
              <FontAwesomeIcon icon={faSchool} size="3x" />
            </div>
            <h2>IB Diploma</h2>
            <p>Pathways World School Aravali, 2016-2020</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;