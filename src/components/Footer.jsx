import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-massive">ASHUTOSH</div>
        <div className="footer-bottom">
          <p>&copy; 2026 Ashutosh Bhatt. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/bhattvashutosh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/ashutoshbhatt2609" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://x.com/Sky1833787" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
