import React from 'react'
import './Home.css'
import HeroSection from '../HeroSection/HeroSection'
import AboutSection from '../About/About'
import Card from '../Card/Card'
import Whychooseus from '../whychooseus/whychooseus'
import Counter from '../Counter/counter'
import Popularcourse from '../allCourse/popularCourse'
import AllCourses from '../allCourse/allCourse'


function Home() {
  return (
    <div>
    
    <HeroSection/>
    <AboutSection/>
    <Popularcourse/>
    <Whychooseus/>
    <Counter/>
    <Card/>
    <AllCourses/>
    

 
    </div>
  )
}

export default Home