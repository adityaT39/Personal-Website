import React, { useRef } from 'react';
import './connect.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const links = [
  {
    href: 'https://github.com/adityaT39',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: 'fab fa-github',
    label: 'GitHub',
    download: null,
  },
  {
    href: 'mailto:adityarajtripathi3@gmail.com',
    target: null,
    rel: null,
    icon: 'fas fa-envelope',
    label: 'Email',
    download: null,
  },
  {
    href: 'https://www.linkedin.com/in/aditya-tripathi-0870731b0/',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
    download: null,
  },
  {
    href: `${process.env.PUBLIC_URL}/resume.pdf`,
    target: null,
    rel: null,
    icon: 'fas fa-file-download',
    label: 'Download Resume',
    download: 'Aditya_Tripathi_Resume',
  },
];

function Connect() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, '.reveal-up, .reveal-scale');

  return (
    <section id="connect" ref={sectionRef}>
      <div className="connect-container">
        <h1 className="reveal-up">Connect</h1>
        <h2 className="reveal-up" style={{ '--delay': '0.1s' }}>
          Feel free to reach out to me through the following platforms:
        </h2>
        <div className="connect-links">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.target}
              rel={link.rel}
              download={link.download}
              className="connect-link reveal-scale"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <i className={`${link.icon} connect-icon`}></i>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Connect;
