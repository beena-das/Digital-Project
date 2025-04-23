import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Shield, Zap } from 'lucide-react';
import './HeroSection.css';
import { Link, useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero-section">
      <div 
        className="hero-background"
        style={{ transform: `translateY(${scrollY * 0.4}px) `}}
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
          <Link to="/login">
           <button className="cta-button primary">
             Sign In
             <ArrowRight size={18} />
           </button>
         </Link>
            <button onClick={()=>navigate('/about')} className="cta-button secondary">
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
