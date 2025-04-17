import React from 'react'
import './ContactHero.css'
import Contact from '../Contact/Contact'

function ContactHero() {
  return (
    <div>
        <div className="contact-hero">
          <div className="overlay">
          <h1>Contact Us</h1>
        <h2>Get In Touch</h2>
        <p>We’re open for any suggestion or just to have a chat</p>
          </div>
       </div>
       
       <Contact/>

    </div>
  )
}

export default ContactHero