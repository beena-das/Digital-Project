import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [activeTab, setActiveTab] = useState('login');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`${activeTab === 'login' ? 'Login' : 'Signup'} form submitted (frontend only)`);
  };

  return (
    <div className="auth-container">

      {/* Right Form Section */}
      <div className="auth-form">
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

        {activeTab === 'login' && (
          <form onSubmit={handleFormSubmit}>
            <label>Email</label>
            <input type="email" placeholder="Email" required />
            <label>Password</label>
            <input type="password" placeholder="Password" required />
            <button type="submit" className="submit-btn">Login</button>
          </form>
        )}

        {activeTab === 'signup' && (
          <form onSubmit={handleFormSubmit}>
            <label>Email</label>
            <input type="email" placeholder="Email" required />
            <div className="name-fields">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <label>Password</label>
            <input type="password" placeholder="Password" required />
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" required />
            <div className="terms">
              <input type="checkbox" required />
              <span>I accept the <a href="/">Terms & Privacy</a></span>
            </div>
            <button type="submit" className="submit-btn signup">Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
