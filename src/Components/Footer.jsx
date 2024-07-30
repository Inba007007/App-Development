import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>We are a toy store dedicated to providing the best toys for kids of all ages. Explore our range of products and find the perfect toy for your little one!</p>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: <a href="mailto:inba007@gmail.com">inba007@gmail.com</a></li>
            <li>Phone: <a href="tel:+917871784499">+91 7871784499</a></li>
            <li>Address: Plot No: 95, Venkatesa Nagar 5th Street, Lion City EXTN Thirunagar, Madurai-625006</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">📘</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">📸</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">🐦</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Toy Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
