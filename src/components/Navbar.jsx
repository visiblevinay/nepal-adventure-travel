import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // logo path

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" className="navbar__logo-img" />
        <span className="navbar__logo-text">Nepal Adventure</span>
      </div>

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
            <a href="https://wa.me/919955462402" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/24/733/733585.png" alt="WhatsApp" /> WhatsApp
            </a>
            <a href="https://www.instagram.com/baadshaharif/profilecard/?igsh=b20yMG5nZjRoOQ==" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/24/2111/2111463.png" alt="Instagram" /> Instagram
            </a>
            <a href="https://youtube.com/@nepal415?si=QOPoaLQVZqAs-_Eo" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/24/1384/1384060.png" alt="YouTube" /> YouTube
            </a>
            <a href="mailto:arifrxl02@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/24/732/732200.png" alt="Gmail" /> Gmail
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
