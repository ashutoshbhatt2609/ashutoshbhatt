import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const tools = [
    { name: "React", subtitle: "Frontend Library", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", subtitle: "React Framework", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", subtitle: "Styling Framework", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Python", subtitle: "Backend & Data", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Solidity", subtitle: "Smart Contracts", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg" },
    { name: "GitHub", subtitle: "Version Control", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Figma", subtitle: "UI/UX Design", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Canva", subtitle: "Graphic Design", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
    { name: "ChatGPT", subtitle: "AI Assistant", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@10.4.0/icons/openai.svg" },
    { name: "Notion", subtitle: "Workspace", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@10.4.0/icons/notion.svg" },
  ];

  return (
    <section id="skills" className="borderless-section">
      <div className="massive-heading">
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <h2 className="heading-solid">TECH</h2>
          <h2 className="heading-solid">SKILLS</h2>
        </div>
        <h2 className="heading-dark">& TOOLS</h2>
      </div>

      <div className="tools-grid">
        {tools.map((tool, index) => (
          <motion.div 
            className="tool-item" 
            key={index}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
          >
            <div className="tool-icon-box">
              <img src={tool.iconUrl} alt={tool.name} className="tool-img-icon" />
            </div>
            <div className="tool-info">
              <span className="tool-name">{tool.name}</span>
              <span className="tool-desc">{tool.subtitle}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
