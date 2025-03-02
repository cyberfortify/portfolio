import React, { useState } from 'react';
import "../styles/Contact.css"; // Your CSS file for styling
import contactImage from "../assets/images/contact-image.jpg"; // Make sure to replace with your image path

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  }); // State to store form data

  // Handle opening the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, e.g., sending the data to an API or email
    console.log("Form Submitted", formData);
    closeModal(); // Close the modal after submitting
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h1 className="contact-title">
            Have a question, problem or project? Let's &nbsp; 
            <i>
              <a onClick={openModal}>talk.</a>
            </i>
          </h1>
          <p className="contact-message">
            Let's talk! Feel free to reach out to me through the links below.
          </p>
          <div className="contact-links">
            <a href="mailto:work.aditya2010@gmail.com" className="contact-link">
              Gmail
            </a>
            <a
              href="https://www.instagram.com/heliosaadi/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="contact-right">
          <img src={contactImage} alt="Contact" className="contact-image" />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
            <h2>Tell Me</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="send-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
