import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = ({ onSignInClick }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div
        className="hero-background"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <div className="gradient-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">
            <span className="hero-title-line">Innovative Software</span>
            <span className="hero-title-line">Solutions for the Future</span>
          </h1>
          <p className="hero-subtitle">
            We build powerful, scalable applications that transform businesses
            and drive exceptional results.
          </p>

          <div className="hero-cta">
          <button
            className="cta-button primary"
            onClick={() => {
              onSignInClick();
            }}
          >
           Sign In
           <ArrowRight size={18} />
         </button>


            <button
              className="cta-button secondary"
              onClick={() => {
                const section = document.getElementById('about');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                } else {
                  console.error('Section not found');
                }
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Software visualization"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
