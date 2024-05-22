import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/contact-us">Contact Us</a>
        {/* Add more links as needed */}
      </div>
      <div className="social-media-icons">
        <a href="https://twitter.com/sportspass" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://facebook.com/sportspass" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
        {/* Add more social media icons as needed */}
      </div>
    </footer>
  );
}

export default Footer;
