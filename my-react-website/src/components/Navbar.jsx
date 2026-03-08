import React, { useState, useEffect } from 'react';
import './navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="menu-icon" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a></li>
          <li><a href="#experience" onClick={(e) => handleScroll(e, 'experience')}>Experience</a></li>
          <li><a href="#education" onClick={(e) => handleScroll(e, 'education')}>Education</a></li>
          <li><a href="#project" onClick={(e) => handleScroll(e, 'project')}>Projects</a></li>
          <li><a href="#certifications" onClick={(e) => handleScroll(e, 'certifications')}>Certifications</a></li>
          <li><a href="#connect" onClick={(e) => handleScroll(e, 'connect')}>Connect</a></li>
          <li>
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
