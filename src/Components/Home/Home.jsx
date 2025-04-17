import React from 'react'
import './Home.css'
import HeroSection from '../HeroSection/HeroSection'
import AboutSection from '../About/About'
import Services from '../Services/Services'
import Card from '../Card/Card'

function Home() {
  return (
    <div>
    
    <HeroSection/>
    <AboutSection/>
    <Services/>
    <Card/>

 
    </div>
  )
}

export default Home