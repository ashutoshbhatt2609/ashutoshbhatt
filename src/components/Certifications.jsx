import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const Certifications = () => {
  const certs = [
    {
      title: "Solidity 101",
      issuer: "Cyfrin Updraft",
      date: "Feb 2026",
      skill: "Solidity",
      url: "https://profiles.cyfrin.io/u/ashutoshbhatt2609/achievements/solidity",
      image: "/badges/media__1775235401775.png"
    },
    {
      title: "Blockchain Basics",
      issuer: "Cyfrin Updraft",
      date: "Feb 2026",
      skill: "Blockchain",
      url: "https://profiles.cyfrin.io/u/ashutoshbhatt2609/achievements/blockchain-basics",
      image: "/badges/media__1775235448977.png"
    },
    {
      title: "Git, GitLab, GitHub Fundamentals",
      issuer: "Udemy",
      date: "Apr 2025",
      skill: "Version Control",
      url: "https://www.udemy.com/certificate/UC-5c9883e7-73a4-41ad-b5ec-5fd7c67c70b5/",
      image: "/badges/media__1775235496564.png"
    },
    {
      title: "Social Media Graphics Masterclass",
      issuer: "Udemy",
      date: "Mar 2025",
      skill: "Design Built",
      url: "https://ude.my/UC-b414a1d7-b702-42bf-a153-591b41f77359",
      image: "/badges/media__1775235579651.png"
    },
    {
      title: "Python 5 Star Badge",
      issuer: "HackerRank",
      date: "Jun 2024",
      skill: "Python",
      url: "https://www.hackerrank.com/profile/ashutoshbhatt261",
      image: "/badges/media__1775235605602.png"
    },
    {
      title: "Python Fundamentals",
      issuer: "Infosys Springboard",
      date: "Dec 2024",
      skill: "Python",
      url: "#",
      image: "/badges/media__1775236046739.png"
    },
    {
      title: "Programming in C",
      issuer: "Infosys Springboard",
      date: "Dec 2024",
      skill: "C",
      url: "#",
      image: "/badges/media__1775236046827.png"
    }
  ];

  return (
    <section id="certifications" className="borderless-section">
      <div className="massive-heading">
        <h2 className="heading-solid">PRO</h2>
        <h2 className="heading-dark">CREDENTIALS</h2>
      </div>

      <div className="certs-grid">
        {certs.map((cert, index) => (
          <motion.a 
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card" 
            key={index}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
          >
            <div className="cert-cover">
              <img src={cert.image} alt={cert.title} loading="lazy" />
              <div className="cert-hover-layer">
                <span>View Credential ↗</span>
              </div>
            </div>
            <div className="cert-info">
              <h4 className="cert-title">{cert.title}</h4>
              <p className="cert-issuer">{cert.issuer} · {cert.date}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
