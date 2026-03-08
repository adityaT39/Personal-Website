import React, { useRef } from 'react';
import './experience.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    company: 'Onpoint Consulting NZ',
    role: 'Coordinator',
    period: 'Jan 2026 – Present',
    bullets: [
      'Coordinate daily business operations, supporting project workflows, documentation management, and internal communication.',
      'Designed and launched the company\'s Squarespace website, improving digital presence and maintaining ongoing content updates and optimization.',
      'Prepare and organize client contracts and agreements for review and signature, ensuring accuracy and timely processing.',
      'Support HR and recruitment functions by posting job listings, screening applications, and shortlisting candidates for entry-level roles.',
    ],
  },
  {
    company: 'Bell (Best Buy Express)',
    role: 'Technology & Sales Associate',
    period: 'Oct 2024 – Nov 2025',
    bullets: [
      'Consistently achieved 100%+ of monthly sales targets and exceeded targets (2×) in June, maintaining Green Zone performance.',
      'Ranked Top 2 in the BC district by using consultative needs analysis to match customers with the right plans, devices, and solutions.',
      'Earned multiple 5-star Google reviews recognizing strong product knowledge, clear communication, and reliable customer support.',
      'Increased average transaction value through cross-selling of protection, accessories, and plan add-ons while keeping recommendations customer-first.',
    ],
  },
];

function Experience() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, '.reveal-up, .reveal-left');

  return (
    <section id="experience" ref={sectionRef}>
      <div className="experience-container">
        <h1 className="reveal-up">Experience</h1>
        <h2 className="reveal-up" style={{ '--delay': '0.1s' }}>My professional background</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div
              className="experience-item reveal-left"
              key={index}
              style={{ '--delay': `${index * 0.15}s` }}
            >
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
