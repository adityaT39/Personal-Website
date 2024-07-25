import React from 'react';
import './connect.css';

function Connect() {
  return (
    <section id="connect">
      <div className="connect-container">
        <h1>Connect</h1>
        <h2>Feel free to reach out to me through the following platforms:</h2>
        <div className="connect-links">
          <a href="https://github.com/adityaT39" target="_blank" rel="noopener noreferrer" className="connect-link">
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="mailto:aditya.tripathi@icloud.com" className="connect-link">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/aditya-tripathi-0870731b0/" target="_blank" rel="noopener noreferrer" className="connect-link">
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="/resume.pdf" download className="connect-link">
            <i className="fas fa-file-download"></i>
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Connect;