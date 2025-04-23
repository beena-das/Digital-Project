import React from 'react'
import './Home.css'
import HeroSection from '../HeroSection/HeroSection'
import AboutSection from '../About/About'
import Card from '../Card/Card'
import Whychooseus from '../whychooseus/whychooseus'
import Counter from '../Counter/counter'
import Popularcourse from '../allCourse/popularCourse'
import AllCourses from '../allCourse/allCourse'
import Services from '../Services/Services'
import Login from '../LoginSignup/Login'


function Home() {
  return (
    <div>
    
    <HeroSection/>
    <AboutSection/>
    <Popularcourse/>
    <Whychooseus/>
    <Counter/>
    <Services/>
    <Card/>
    

 
    </div>
  )
}

export default Home