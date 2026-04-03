import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      role: "PR Media Director",
      org: "Rotaract Club of BMS Yelahanka",
      period: "Jun 2025 — Present",
      type: "Full-time",
      description: "Leading media strategy and public relations for college events and social initiatives across Karnataka.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      insta: "https://instagram.com",
      linkedin: "https://linkedin.com"
    },
    {
      role: "Content Writer",
      org: "Entrepreneurship Cell, BMSIT&M",
      period: "Jun 2025 — Present",
      type: "Full-time",
      description: "Crafting compelling content for startup events, newsletters, and the E-Cell brand across digital platforms.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
      insta: "https://instagram.com",
      linkedin: "https://linkedin.com"
    },
    {
      role: "Marketing Team",
      org: "Literary Society, BMSIT&M",
      period: "Apr 2025 — Present",
      type: "Full-time",
      description: "Designing promotional campaigns and social media strategies for literary events and workshops.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      insta: "https://instagram.com",
      linkedin: "https://linkedin.com"
    },
    {
      role: "Marketing Team Member",
      org: "Institution's Innovation Council, BMSIT&M",
      period: "Oct 2024 — Apr 2025",
      type: "Full-time · On-site",
      description: "Promoted innovation events, hackathons, and IIC-backed initiatives across the Bangalore campus.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
      insta: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  ];

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (selectedExp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedExp]);

  return (
    <section id="experience" className="borderless-section">
      <div className="massive-heading">
        <h2 className="heading-solid">WORK</h2>
        <h2 className="heading-dark">EXPERIENCE</h2>
      </div>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <motion.div 
            className="exp-row clickable" 
            key={index}
            onClick={() => setSelectedExp(exp)}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
          >
            <div className="exp-dot-line">
              <div className="exp-dot"></div>
              {index < experiences.length - 1 && <div className="exp-line"></div>}
            </div>
            <div className="exp-content">
              <div className="exp-header">
                <h3 className="exp-role">{exp.role}</h3>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-org">{exp.org} · <span className="exp-type">{exp.type}</span></p>
              <p className="exp-desc">{exp.description}</p>
            </div>
            <div className="exp-hover-indicator">
              <span>View Details ↗</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedExp && (
          <motion.div 
            className="exp-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExp(null)}
          >
            <motion.div 
              className="exp-modal"
              initial={{ y: 50, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 30, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="exp-modal-close" onClick={() => setSelectedExp(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
              
              <div className="exp-modal-image">
                <img src={selectedExp.image} alt={selectedExp.role} />
              </div>
              
              <div className="exp-modal-body">
                <h3 className="exp-modal-role">{selectedExp.role}</h3>
                <p className="exp-modal-org">{selectedExp.org}</p>
                <p className="exp-modal-period">{selectedExp.period} · {selectedExp.type}</p>
                
                <div className="exp-modal-divider"></div>
                
                <p className="exp-modal-desc">{selectedExp.description}</p>
                
                <div className="exp-modal-links">
                  {selectedExp.insta && (
                    <a href={selectedExp.insta} target="_blank" rel="noreferrer" className="btn-social">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      Instagram
                    </a>
                  )}
                  {selectedExp.linkedin && (
                    <a href={selectedExp.linkedin} target="_blank" rel="noreferrer" className="btn-social pulse-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Experience;
