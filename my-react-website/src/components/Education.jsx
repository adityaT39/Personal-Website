import React, { useRef } from 'react';
import './education.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const educationData = [
  {
    year: '2020–2024',
    degree: 'Bachelor of Computer Science',
    institution: 'The University of British Columbia',
    detail: 'Relevant Coursework: Data Structures, Web Programming, Analysis of Algorithms, Software Engineering, Introduction to Artificial Intelligence, and Human Computer Interaction.',
  },
  {
    year: '2016–2020',
    degree: 'IB Diploma',
    institution: 'Pathways World School Aravali',
    detail: null,
  },
];

function Education() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, '.reveal-up, .reveal-right, .timeline-animate');

  return (
    <section id="education" ref={sectionRef}>
      <div className="education-container">
        <h1 className="reveal-up">Education</h1>
        <h2 className="reveal-up" style={{ '--delay': '0.1s' }}>My academic background</h2>
        <div className="timeline timeline-animate">
          {educationData.map((item, index) => (
            <div
              className="timeline-item reveal-right"
              key={index}
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <div className="timeline-left">
                <span className="timeline-year">{item.year}</span>
              </div>
              <div className="timeline-center">
                <div className="timeline-dot" />
              </div>
              <div className="timeline-body">
                <h3 className="timeline-degree">{item.degree}</h3>
                <p className="timeline-institution">{item.institution}</p>
                {item.detail && <p className="timeline-detail">{item.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
