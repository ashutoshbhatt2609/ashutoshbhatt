import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="borderless-section">
      <div className="massive-heading">
        <h2 className="heading-solid">GET</h2>
        <h2 className="heading-dark">IN TOUCH</h2>
      </div>
      
      <p className="contact-sub" style={{marginBottom: '40px', color: '#888', maxWidth: '500px'}}>
        Have a project in mind or want to collaborate? Reach out and let's create something amazing together.
      </p>

      <motion.form 
        className="contact-form" 
        action="https://formsubmit.co/ashutoshbhatt2609@gmail.com" 
        method="POST"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Antispam / settings for formsubmit */}
        <input type="hidden" name="_subject" value="New Portfolio Message!" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />

        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="your@email.com" required />
          </div>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" rows="4" placeholder="Tell me about your project..." required></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
          <span className="accent-arrow">↗</span>
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
