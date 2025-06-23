import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <nav className="navbar">
      <div className="navbar__logo">Nepal Adventure</div>

      <button className="navbar__hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`navbar__links ${isMenuOpen ? "active" : ""}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#tours">Tours</a></li>
        <li><a href="#hotels">Hotels</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="navbar__socials">
        <button onClick={toggleDropdown} className="socials__btn">Socials ▾</button>
        {showDropdown && (
          <div className="socials__dropdown">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/24/733/733585.png" alt="WhatsApp" /> WhatsApp
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/24/2111/2111463.png" alt="Instagram" /> Instagram
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" /> Facebook
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/24/732/732200.png" alt="Gmail" /> Gmail
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
