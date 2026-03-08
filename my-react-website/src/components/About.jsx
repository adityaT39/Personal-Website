import React, { useRef, useEffect } from 'react';
import './about.css';

const skills = [
  'Python', 'SQL', 'Excel', 'Tableau', 'React', 'JavaScript',
  'HTML5', 'CSS3', 'Git', 'Microsoft 365', 'CRM Tools',
];

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    requestAnimationFrame(() => {
      section.classList.add('about-loaded');
    });
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="about-orbs" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>
      <div className="about-container">
        <div className="about-header">
          <span className="about-greeting about-animate">Hi, I'm</span>
          <h1 className="about-animate">Aditya Tripathi</h1>
          <h2 className="about-animate">CS Graduate · Coordinator &amp; Sales Professional</h2>
        </div>
        <div className="about-content about-animate">
          <p>
            I'm a Computer Science graduate from the University of British Columbia based in
            Kelowna, BC. Currently working as a Coordinator at Onpoint Consulting NZ, where
            I manage operations, built and launched the company website, and support HR and
            client documentation workflows.
          </p>
          <p>
            Previously a top-performing Technology & Sales Associate at Bell (Best Buy Express),
            ranked Top 2 in the BC district. I combine a technical background with strong
            client-facing and data analysis skills — feel free to explore my work below!
          </p>
        </div>
        <div className="skills-section">
          <h3 className="about-animate">Skills &amp; Technologies</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="skill-badge about-animate"
                style={{ '--skill-index': index }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
