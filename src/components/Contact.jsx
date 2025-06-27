import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiInstagram, FiSend, FiX } from 'react-icons/fi';
import "../styles/Contact.css";
import contactImage from "../assets/images/contact-image.jpg";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log("Form Submitted", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="contact-title">
            Let's Create Something 
            <span> Amazing Together</span>
          </h1>
          
          <div className="contact-methods">
            <motion.a 
              href="mailto:work.aditya2010@gmail.com"
              className="contact-card"
              whileHover={{ y: -5 }}
            >
              <FiMail className="contact-icon" />
              <div>
                <h3>Email Me</h3>
                <p>work.aditya2010@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/heliosaadi/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              whileHover={{ y: -5 }}
            >
              <FiInstagram className="contact-icon" />
              <div>
                <h3>Instagram</h3>
                <p>@imadityvk</p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="contact-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="image-container">
            <img src={contactImage} alt="Contact" className="contact-image" />
            <button 
              className="cta-button"
              onClick={() => setIsModalOpen(true)}
            >
              Send a Message
              <FiSend className="send-icon" />
            </button>
          </div>
        </motion.div>
      </div>

      {isModalOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              <FiX />
            </button>
            
            <h2>Let's Talk!</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <label>Your Name</label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <label>Email Address</label>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <label>Your Message</label>
              </div>

              <button type="submit" className="send-btn">
                {isSubmitted ? 'Sending...' : 'Send Message'}
                <FiSend />
              </button>
            </form>

            {isSubmitted && (
              <div className="success-message">
                🎉 Message sent successfully!
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;