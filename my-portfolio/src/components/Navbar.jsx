import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      let current = 'home';
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = section;
          }
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      setIsDarkMode(systemPrefersDark);
      document.documentElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const handleNavClick = useCallback((href, section) => {
    setIsOpen(false);
    setActiveSection(section);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    const theme = newTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  const downloadCV = useCallback(() => {
    const cvUrl = '/cv/aymane-kaidi-cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Aymane_Kaidi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navItems = [
    { href: '#home', label: 'Home', section: 'home' },
    { href: '#about', label: 'About', section: 'about' },
    { href: '#projects', label: 'Projects', section: 'projects' },
    { href: '#contact', label: 'Contact', section: 'contact' }
  ];

  return (
    <>
      {/* Professional Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            
            {/* Logo */}
            <div className="navbar-brand">
              <span className="logo-text">Aymane</span>
              <span className="logo-dot">.</span>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="navbar-navigation">
              <div className="nav-menu">
                {navItems.map((item) => (
                  <a 
                    key={item.section}
                    href={item.href}
                    className={`nav-item ${activeSection === item.section ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.section);
                    }}
                  >
                    <span className="nav-label">{item.label}</span>
                    <span className="nav-indicator"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="navbar-actions">
              <button 
                onClick={downloadCV}
                className="btn-download"
                aria-label="Download CV"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Resume</span>
              </button>

              <button 
                onClick={toggleDarkMode}
                className="btn-theme"
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                <div className="theme-icon">
                  {isDarkMode ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="5"/>
                      <line x1="12" y1="1" x2="12" y2="3"/>
                      <line x1="12" y1="21" x2="12" y2="23"/>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                      <line x1="1" y1="12" x2="3" y2="12"/>
                      <line x1="21" y1="12" x2="23" y2="12"/>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </svg>
                  )}
                </div>
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`btn-menu ${isOpen ? 'active' : ''}`}
                aria-label="Toggle menu"
              >
                <span className="menu-line"></span>
                <span className="menu-line"></span>
                <span className="menu-line"></span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
            <div className="mobile-menu-content">
              {navItems.map((item) => (
                <a 
                  key={item.section}
                  href={item.href}
                  className={`mobile-nav-item ${activeSection === item.section ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.section);
                  }}
                >
                  <span className="mobile-nav-label">{item.label}</span>
                  <span className="mobile-nav-indicator"></span>
                </a>
              ))}
              
              <div className="mobile-actions">
                <button 
                  onClick={downloadCV}
                  className="btn-download-mobile"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}