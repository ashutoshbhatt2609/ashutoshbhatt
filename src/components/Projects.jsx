import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "BMSIT&M Portal",
      subtitle: "Institutional Portal & Virtual Tour",
      url: "https://bmsce-hack.vercel.app/",
      image: "/bmsit-portal.png",
      gradient: "linear-gradient(135deg, #a855f7, #6b21a8)"
    },
    {
      title: "Tech on Mars",
      subtitle: "Interplanetary SaaS Template",
      url: "https://dexter-two.vercel.app/",
      image: "/mars.png",
      gradient: "linear-gradient(135deg, #ff5c3a, #992812)"
    }

  ];

  return (
    <section id="projects" className="projects-section">
      <div className="massive-heading">
        <h2 className="heading-solid">RECENT</h2>
        <h2 className="heading-dark">PROJECTS</h2>
      </div>

      <div className="projects-list-minimal">
        {projects.map((project, index) => (
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
            key={index}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
          >
            <div className="project-image-box" style={{ background: project.gradient }}>
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-cover-img" />
              ) : (
                <div className="project-image-overlay"></div>
              )}
            </div>

            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
            </div>

            <div className="project-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
