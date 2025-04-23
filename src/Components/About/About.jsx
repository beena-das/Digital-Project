import React, { useEffect } from 'react';
import './About.css';
import marketingImage from '../Assets/digital-marketing.jpg'; // ✅ Image
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();  // Initialize AOS animations
  }, []);

  const handleRedirect = () => {
    navigate('/contact'); // Redirect to Contact page
  };

  return (
    <div className="about-wrapper" id="about">
      <div className="about-section">
        <div className="image-wrapper" data-aos="flip-left">
          <img src={marketingImage} alt="Digital Marketing" className="about-image" />
        </div>

        <div className="about-text">
          <h2>About <span>Code Digital</span></h2>
          <p className="tagline">Creative Design & Development</p>
          <p className="description">
            Through Digital Transformation and Innovation <strong>Code Digital</strong> aims at assisting businesses all over the world to achieve their needs and targets.
            Balancing beautiful design and engaging content, our team helps businesses communicate directly with their customers.
          </p>
          <button onClick={handleRedirect} className="your-consultation-btn">
            FREE CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
