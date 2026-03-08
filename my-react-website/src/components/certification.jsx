import React, { useRef } from 'react';
import './certification.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certifications = [
  {
    logo: process.env.PUBLIC_URL + '/images/ifc-logo.png',
    logoAlt: 'Investment Funds Canada Logo',
    title: 'Investment Funds in Canada (IFC)',
    org: 'IFSE Institute',
    date: 'November 2025',
    link: null,
  },
  {
    logo: process.env.PUBLIC_URL + '/images/google-logo.png',
    logoAlt: 'Google Logo',
    title: 'Google Business Intelligence Professional Certificate',
    org: 'Google / Coursera',
    date: '2025',
    link: null,
  },
  {
    logo: process.env.PUBLIC_URL + '/images/udemy-logo.png',
    logoAlt: 'Udemy Logo',
    title: 'The Complete 2024 Web Development Bootcamp',
    org: 'Udemy',
    date: 'July 12, 2024',
    link: 'https://www.udemy.com/certificate/UC-5cd0290c-3a01-41d2-9955-e8d1bd8801ce/',
  },
  {
    logo: process.env.PUBLIC_URL + '/images/codecademy-logo.jpg',
    logoAlt: 'Codecademy Logo',
    title: 'Learn Java',
    org: 'Codecademy',
    date: 'July 23, 2021',
    link: 'https://www.codecademy.com/profiles/AdityaRajTripathi/certificates/learn-java',
  },
  {
    logo: process.env.PUBLIC_URL + '/images/codecademy-logo.jpg',
    logoAlt: 'Codecademy Logo',
    title: 'Learn R',
    org: 'Codecademy',
    date: 'July 7, 2021',
    link: 'https://www.codecademy.com/profiles/AdityaRajTripathi/certificates/learn-r',
  },
];

function Certification() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, '.reveal-up, .reveal-right');

  return (
    <section id="certifications" ref={sectionRef}>
      <div className="certifications-container">
        <h1 className="reveal-up">Certifications</h1>
        <div className="certification-list">
          {certifications.map((cert, index) => (
            <div
              className="certification-item reveal-right"
              key={index}
              style={{ '--delay': `${index * 0.08}s` }}
            >
              <img src={cert.logo} alt={cert.logoAlt} className="certification-logo" />
              <div className="certification-text">
                <h2>{cert.title}</h2>
                <p>Issuing Organization: {cert.org}</p>
                <p>Date of Completion: {cert.date}</p>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
