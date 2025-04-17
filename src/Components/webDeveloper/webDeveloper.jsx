import React from 'react';
import './webDeveloper.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaCloudUploadAlt, FaCheckCircle } from 'react-icons/fa';

export default function WebDeveloper() {
  return (
    <div className="web-dev-wrapper">
      <header className="web-dev-hero">
        <h1>🚀 Web Development Course</h1>
        <p>Master full-stack development with modern tools & frameworks.</p>
      </header>

      <section className="web-dev-content">
        <h2>📚 What You'll Learn:</h2>
        <ul className="skills-list">
          <li><FaHtml5 /> HTML, CSS, JavaScript</li>
          <li><FaReact /> React.js Frontend Framework</li>
          <li><FaNodeJs /> Node.js & Express.js Backend</li>
          <li><FaDatabase /> MongoDB Database Integration</li>
          <li><FaCloudUploadAlt /> Hosting & Deployment</li>
        </ul>

        <h2>👤 Who This Course is For:</h2>
        <p className="target-info">Aspiring front-end, back-end, and full-stack developers ready to build real-world applications.</p>

        <button className="enroll-btn">🔥 Enroll Now</button>
      </section>
    </div>
  );
}
