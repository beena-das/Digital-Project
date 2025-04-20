import React, { useEffect } from 'react';
import './whychooseus.css';
import whyChooseUsData from '../Assets/whychooseus';

const WhyChooseUs = () => {

  useEffect(() => {
    const cards = document.querySelectorAll('.why-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, index * 150); // stagger animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);


  return (
    <section className="why-section">
      <h2 className="why-title">Why Choose Us</h2>
      <p className="why-subtitle">All our branches offer the same high-quality services and expertise</p>

      <div className="card-container">
        {whyChooseUsData.map((item, index) => (
          <div key={index} className="why-card">
            <div className="card-icon">{item.icon}</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
