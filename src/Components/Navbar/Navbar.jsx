import React, { useState, useEffect } from 'react';
import { Menu, X, Code, ChevronDown } from 'lucide-react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Code size={28} />
          <span>TechPro</span>
        </div>

        <div className="navbar-mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="/" className="nav-link active" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
        <a href="#service" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Service</a>
        <a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
        
        <div
          className="nav-link dropdown"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          onMouseEnter={() => {
            if (window.innerWidth > 768) setIsDropdownOpen(true);
          }}
          onMouseLeave={() => {
            if (window.innerWidth > 768) setIsDropdownOpen(false);
          }}
          onClick={() => {
            if (window.innerWidth <= 768) {
              toggleDropdown();
            }
          }}
        >
          <span>Courses <ChevronDown size={16} /></span>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="#Pcourse" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Web Development</a>
              <a href="#Pcourse" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>App Development</a>
              <a href="#Pcourse" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Python</a>
            </div>
          )}
        </div>
        
        <a href="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        <Link to="/login" className="nav-link">
          <button onClick={() => setIsMobileMenuOpen(false)}>Login/Signup</button>
        </Link>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
