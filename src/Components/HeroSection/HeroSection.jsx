import React from 'react';
import './HeroSection.css';
import Slider from 'react-slick';
import Typewriter from 'typewriter-effect';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../Assets/slider1.jpg';
import slider2 from '../Assets/slider2.jpg';
import slider3 from '../Assets/slider3.jpg';
import slider4 from '../Assets/slider4.jpg';

const images = [slider1, slider2, slider3, slider4];

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="hero-wrapper">
      <div className="hero-slider">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`slide-${index}`} className="slider-image" />
            </div>
          ))}
        </Slider>
        <div className="hero-overlay-content">
          <h1 className="hero-heading">
            <Typewriter
              options={{
                strings: ['Boost Online Reach', 'For Your Brand'],
                autoStart: true,
                loop: true,
                pauseFor: 1500,
              }}
            />
          </h1>
          <p className="hero-paragraph">
            Welcome to the online world of <strong>Coder Digital</strong>! We are thrilled to have you here and introduce you to our exceptional products and services. Get ready to embark on a journey of quality, innovation, and customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
