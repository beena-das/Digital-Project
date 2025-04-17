import React, { useState } from "react";
import "./Navbar.css";
import logo from '../Assets/logo.jpg';
import { Link } from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>Coders</p>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

        <div className="dropdown">
          <span>Courses ▾</span>
          <div className="dropdown-content">
            <Link to="/courses/web" onClick={() => setMenuOpen(false)}>Web Development</Link>
            <Link to="/courses/app" onClick={() => setMenuOpen(false)}>App Development</Link>
          </div>
        </div>

        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>

        <Link to="/Login" onClick={() => setMenuOpen(false)} className="Login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
