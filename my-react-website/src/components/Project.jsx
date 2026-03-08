import React, { useRef } from 'react';
import './project.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'Multiplayer Digital Card Game (Capstone)',
    image: process.env.PUBLIC_URL + '/images/Color_Break_screenshot.png',
    link: 'https://github.com/COSC-499-W2023/year-long-project-team-19',
    description: 'Built a multiplayer digital card game from scratch in a 5-person capstone team. Designed card mechanics, turn/round flow, deck logic, and game state rules. Integrated multiplayer networking to synchronize player actions and game state.',
    tags: ['Unity', 'C#', 'Multiplayer Networking'],
  },
  {
    title: 'Retail Superstore BI Dashboard',
    image: process.env.PUBLIC_URL + '/images/bi_dashboard_screenshot.png',
    link: 'https://github.com/adityaT39',
    description: 'Analyzed sales and margin performance to identify high-profit product segments and improve inventory planning. Built interactive dashboards to help business users interpret KPIs, reduce shipping delays, and increase revenue opportunities.',
    tags: ['SQL', 'Python', 'Tableau', 'Excel'],
  },
  {
    title: 'FIFA 21 Performance Analysis',
    image: process.env.PUBLIC_URL + '/images/fifa_analysis_screenshot.png',
    link: 'https://github.com/adityaT39',
    description: 'Evaluated performance metrics of 18,000+ assets to optimize player portfolio decisions and maximize returns. Applied valuation concepts mirroring investment analysis and risk vs. reward trade-offs.',
    tags: ['Python', 'Pandas', 'Tableau'],
  },
  {
    title: 'Blog Post Website',
    image: process.env.PUBLIC_URL + '/images/Blogpost_Website_screenshot.png',
    link: 'https://github.com/adityaT39/COSC_360_Project',
    description: 'A dynamic blog post website using HTML, CSS, JavaScript, AJAX, PHP, and SQL.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'AJAX'],
  },
  {
    title: 'OpenSea NFT Marketplace on ICP Blockchain',
    image: process.env.PUBLIC_URL + '/images/Crypto_Dunk_screenshot.png',
    link: 'https://github.com/adityaT39/OpenSea-Clone',
    description: 'A clone of the OpenSea NFT marketplace using the ICP blockchain and Motoko.',
    tags: ['Motoko', 'ICP Blockchain', 'Web3', 'React'],
  },
  {
    title: 'We Ride Ridesharing App',
    image: process.env.PUBLIC_URL + '/images/We_Ride_screenshot.png',
    link: 'https://github.com/sam131102/Carpooling-App-HCI',
    description: 'A ridesharing app prototype designed as an HCI project, focused on usability and user-centered design.',
    tags: ['Figma', 'UX Design', 'Prototyping', 'HCI'],
  },
  {
    title: 'Personal Portfolio Website',
    image: process.env.PUBLIC_URL + '/images/personal_website_screenshot.png',
    link: 'https://github.com/adityaT39/Personal-Website',
    description: 'A personal portfolio website showcasing projects, skills, and achievements.',
    tags: ['React', 'JavaScript', 'CSS', 'HTML'],
  },
];

function Project() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, '.reveal-up, .reveal-card');

  return (
    <section id="project" ref={sectionRef}>
      <div className="project-container">
        <h1 className="reveal-up">Projects</h1>
        <h2 className="reveal-up" style={{ '--delay': '0.1s' }}>Check out my creations.</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card reveal-card"
              style={{ '--delay': `${index * 0.07}s` }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-info">
                <div className="project-title">{project.title}</div>
                <div className="project-description">{project.description}</div>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <span className="project-cta">View on GitHub →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
