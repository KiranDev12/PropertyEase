import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="logo-name">
        <h1>Property Ease</h1>
      </div>
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p>If you have any questions or need further information, feel free to reach out to us.</p>
        <p className="phone-number">Phone: +1 (123) 456-7890</p>
        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
