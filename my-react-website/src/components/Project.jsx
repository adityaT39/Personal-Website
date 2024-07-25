import React from 'react';
import './project.css';

const projects = [
  {
    title: 'Blog Post Website',
    image: process.env.PUBLIC_URL + '/images/Blogpost_Website_screenshot.png',
    link: 'https://github.com/adityaT39/COSC-360-Project',
    description: 'A dynamic blog post website using HTML, CSS, JavaScript, AJAX, PHP, and SQL.',
  },
  {
    title: 'Color Break (Turn-based Card Game)',
    image: process.env.PUBLIC_URL + '/images/Color_Break_screenshot.png',
    link: 'https://github.com/adityaT39/Color-Break',
    description: 'A multiplayer turn-based card game using Unity and web technologies.',
  },
  {
    title: 'OpenSea NFT Marketplace on ICP Blockchain',
    image: process.env.PUBLIC_URL + '/images/Crypto_Dunk_screenshot.png',
    link: 'https://github.com/adityaT39/OpenSea-Clone',
    description: 'A clone of the OpenSea NFT marketplace using the ICP blockchain and Motoko.',
  },

  {
    title: 'We Ride ride sharing app',
    image: process.env.PUBLIC_URL + '/images/We_Ride_screenshot.png',
    link: 'https://github.com/adityaT39/OpenSea-Clone',
    description: 'A clone of the OpenSea NFT marketplace using the ICP blockchain and Motoko.',
  }
];

function Project() {
  return (
    <section id="project">
      <div className="project-container">
        <h1>Projects</h1>
        <h2>Check out my creations.</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-title">{project.title}</div>
              <div className="project-description">{project.description}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;