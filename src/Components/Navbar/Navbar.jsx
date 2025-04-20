import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from '../Assets/logo.jpg';
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // 👈 new state for dropdown

  const dropdownRef = useRef();

useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);



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
        <Link to="/all-course" onClick={() => setMenuOpen(false)}>All Course</Link>
        <Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        <Link to="/Login" onClick={() => setMenuOpen(false)} className="Login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
