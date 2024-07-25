import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="menu-icon" onClick={handleToggle}>
        ☰
      </div>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
        </li>
        <li>
          <a href="#education" onClick={(e) => handleScroll(e, 'education')}>Education</a>
        </li>
        <li>
          <a href="#project" onClick={(e) => handleScroll(e, 'project')}>Projects</a>
        </li>
        <li>
          <a href="#certifications" onClick={(e) => handleScroll(e, 'certifications')}>Certifications</a>
        </li>
        <li>
          <a href="#connect" onClick={(e) => handleScroll(e, 'connect')}>Connect</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;