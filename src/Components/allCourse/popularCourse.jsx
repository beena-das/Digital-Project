import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from './CourseCard.jsx';
import './popularCourse.css';
import popularCourses from '../Assets/popularCourse.js';

const Courses = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cards = document.querySelectorAll('.course-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, index * 150); // delay for staggered effect
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);


  return (
    <section className="popular-courses" id='Pcourse'>
      <div className="header">
      <h2>
        Trending <span className="highlight">Programs</span>
      </h2>
      
        <button className="view-all" onClick={() => navigate('/all-course')}>
          View All →
        </button>
      </div>
      <div className="courses-container">
      {popularCourses.slice(0, 8).map((item, index) => (
         <CourseCard key={index} {...item} />
       ))}
      </div>
    </section>
  );
};

export default Courses;
