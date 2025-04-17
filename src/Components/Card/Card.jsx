import React from 'react'
import './Card.css'
import card from '../Assets/data.js'

function Card() {
  return (
    <div className="card-section">
      <h2>Our Happy Clients</h2>
      <div className="card-wrapper">
        {card.map((card) => (
          <div className="card" key={card.id}>
            <p className="feedback">"{card.feedback}"</p>
            <div className="client-info">
              <img src={card.image} alt={card.name} />
              <div>
                <h4>{card.name}</h4>
                <p>{card.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card