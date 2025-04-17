import React from 'react';
import './appDeveloper.css';

export default function AppDeveloper() {
  return (
    <div className="app-developer-container">
      <div className="app-hero-section">
        <div className="app-overlay">
          <h1 className="main-title">📱 App Development Course</h1>
          <p className="sub-title">
            Learn to build powerful mobile apps using Flutter, React Native, or native tech like Java and Swift.
          </p>
        </div>
      </div>

      <div className="app-content">
        <h2>📘 What You'll Learn:</h2>
        <ul>
          <li>🎨 Mobile UI/UX Design</li>
          <li>⚛️ Flutter or React Native Basics</li>
          <li>🔥 Firebase Integration</li>
          <li>🔗 API Handling & Backend Connection</li>
          <li>🚀 Deploying to Play Store / App Store</li>
        </ul>

        <h2>👤 Who This Course is For:</h2>
        <p>
          Beginners to intermediate developers who want to build real-world mobile apps from scratch.
        </p>
        <button className="enroll-btn">🚀 Enroll Now</button>
      </div>
    </div>
  );
}
