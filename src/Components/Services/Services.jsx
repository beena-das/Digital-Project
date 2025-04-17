import React, { useState } from 'react';
import { websitePlans } from '../Assets/product.js';
import './Services.css';

function Services() {
  const [expandedCardId, setExpandedCardId] = useState(null); // single card at a time

  const handleToggle = (id) => {
    setExpandedCardId(prevId => (prevId === id ? null : id));
  };

  return (
    <div>
      <section className="pricing-wrapper">
        <h3 className="pricing-title">Website Development Plans</h3>
        <div className="pricing-container">
          {websitePlans.map((plan) => {
            const isExpanded = expandedCardId === plan.id;
            const visibleFeatures = isExpanded ? plan.features : plan.features.slice(0, 6);

            return (
              <div
                className="pricing-card"
                key={plan.id}
                style={{ borderTop: `8px solid ${plan.color}` }}
              >
                <div className="plan-header">
                  <div className="plan-icon">{plan.icon}</div>
                  <h3 className="plan-title">{plan.title}</h3>
                  <p className="plan-price">{plan.price}</p>
                </div>

                <ul className="plan-features">
                  {visibleFeatures.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>

                {plan.features.length > 6 && (
                  <div style={{ textAlign: 'center' }}>
                    <button className="show-more-btn" onClick={() => handleToggle(plan.id)}>
                      {isExpanded ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                )}

                <div className="order-btn-wrapper">
                  <button
                    className="order-btn"
                    onClick={() => alert('Order placed! Our team will contact you.')}
                  >
                    Call to Order
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Services;
