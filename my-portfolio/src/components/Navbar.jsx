import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <span className="logo-text">Aymane</span>
            
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(`#${item.toLowerCase()}`);
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`navbar-toggle ${isOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile ${isOpen ? 'active' : ''}`}>
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link-mobile"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(`#${item.toLowerCase()}`);
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}