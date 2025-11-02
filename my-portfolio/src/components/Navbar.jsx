import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            aymane 
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="navbar-toggle"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="navbar-mobile">
            <a href="#home" className="nav-link-mobile">Home</a>
            <a href="#about" className="nav-link-mobile">About</a>
            <a href="#projects" className="nav-link-mobile">Projects</a>
            <a href="#contact" className="nav-link-mobile">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}