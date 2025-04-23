import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">About Coder's Web</a></li>
            <li><a href="#">Client Testimonials</a></li>
            <li><a href="#">Case Studies</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Software Solutions</a></li>
            <li><a href="#">Our Technologies</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">API Documentation</a></li>
            <li><a href="#">Developer Resources</a></li>
          </ul>
        </div>

        <div className="footer-section about">
          <h3>About Coder's Web</h3>
          <p>Coder's Web is a future-focused software development company delivering customized solutions, mobile and web apps, and scalable digital platforms. We’re committed to innovation and transforming the way businesses operate through technology.</p>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-contact">
          <p><strong>Contact Us:</strong> +91 9555981753 | <a href="mailto:support@codersweb.com">support@codersweb.com</a> | Lucknow, Uttar Pradesh</p>
        </div>

        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>

        <div className="footer-copy">
          <p>© 2025 Coder's Web. All Rights Reserved.</p>
          <p>Designed by Coder's Web</p>
        </div>
      </div>
    </footer>
  );
}
