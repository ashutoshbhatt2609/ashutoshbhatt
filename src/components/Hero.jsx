import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-titles">
        <h1 className="hero-title-top">SOFTWARE</h1>
        <h1 className="hero-title-bottom">ENGINEER</h1>
      </div>
      
      <p className="hero-description">
        Passionate about creating intuitive and engaging user experiences. I specialize in transforming complex ideas into beautifully crafted, scalable digital products. With a strong foundation in modern engineering and an eye for high-end interaction design, I bridge the gap between functionality and aesthetics.
      </p>

      <div className="status-badges-container">
        <div className="status-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          <span className="status-text">2nd-year CSE student at BMSIT</span>
        </div>
        <div className="status-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span className="status-text">Based in Bangalore</span>
        </div>
        <div className="status-badge">
          <div className="status-dot-wrap">
            <div className="status-dot"></div>
            <div className="status-dot-ping"></div>
          </div>
          <span className="status-text">Open for work</span>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <h2>2+</h2>
          <p>HACKATHONS<br />WON</p>
        </div>
        <div className="stat-item">
          <h2>4+</h2>
          <p>PROJECTS<br />COMPLETED</p>
        </div>
        <div className="stat-item">
          <h2>6+</h2>
          <p>CERTIFICATIONS<br />EARNED</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
