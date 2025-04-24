import React from 'react';
import './Home.css';
import HeroSection from '../HeroSection/HeroSection';
import AboutSection from '../About/About';
import Card from '../Card/Card';
import Whychooseus from '../whychooseus/whychooseus';
import Counter from '../Counter/counter';
import Popularcourse from '../allCourse/popularCourse';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';

function Home({ onSignInClick }) {
  return (
    <div>
      <HeroSection onSignInClick={onSignInClick} />

      <AboutSection />
      <Popularcourse />
      <Whychooseus />
      <Counter />
      <Services />
      <Card />
      <Contact />
    </div>
  );
}

export default Home;
