import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import services from '../Assets/services';

const Services = () => {
  return (
    <div className="services-section" id='service'>
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
