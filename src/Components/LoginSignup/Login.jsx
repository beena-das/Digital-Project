import React, { useState, useEffect } from 'react';
import './Login.css';
import host from '../Assets/host.jpg';

function Login({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('login');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = activeTab === 'login' ? 'Login successful!' : 'Signup successful!';
    window.confirm(message);
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className={`popup-wrapper ${activeTab === 'signup' ? 'signup-mode' : 'login-mode'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="login-close-btn" onClick={onClose}>×</button>

        <div className="popup-content">
          <div className="popup-left">
            <h2>Analytics 101</h2>
            <p>This free workshop shows you how to track important metrics in your business</p>
            <img src={host} alt="host" />
            <div className="speaker-name">Jane Smith</div>
            <div className="speaker-role">CEO, Company</div>
          </div>

          <div className="popup-right">
            <div className="tab-buttons">
              <button
                onClick={() => setActiveTab('login')}
                className={activeTab === 'login' ? 'active' : ''}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab('signup')}
                className={activeTab === 'signup' ? 'active' : ''}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleFormSubmit}>
              {activeTab === 'signup' && (
                <>
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" required />
                  </div>
                  <div className="form-group">
                    <label>Select Course</label>
                    <select required>
                      <option value="">Choose a course</option>
                      <option value="web">Web Development</option>
                      <option value="data">Data Analytics</option>
                      <option value="design">UI/UX Design</option>
                    </select>
                  </div>
                </>
              )}

              <div className="form-group">
                <label>Email</label>
                <input type="email" required />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" required />
              </div>

              {activeTab === 'signup' && (
                <>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" required />
                  </div>

                  <div className="terms">
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms">
                      I accept the <a href="/">Terms & Privacy</a>
                    </label>
                  </div>
                </>
              )}

              <button type="submit" className="submit-btn">
                {activeTab === 'login' ? 'Login' : 'Sign Up'}
              </button>

              {activeTab === 'signup' && (
                <div className='login-btn'>
                  <p onClick={() => setActiveTab('login')}>
                    If you have already registered, <a href="#">Login Now</a>
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
