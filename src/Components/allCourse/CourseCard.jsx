import React, { useState } from 'react';
import './popularCourse.css';

const CourseCard = ({ image, title, reviews, users, logo }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleRegisterClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="course-card">
        <img src={image} alt="Course" className="course-image" />
        
        <h3>{title}</h3>
        <div className="rating">
          <span>⭐️⭐️⭐️⭐️⭐️</span>
          <p>{reviews} | {users} User Reviews</p>
        </div>
        <button className="register-btn" onClick={handleRegisterClick}>Register Now</button>
      </div>

      {/* Modal Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={handleClosePopup}>×</span>
            <h2>Register for {title}</h2>
            <form className="register-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseCard;
