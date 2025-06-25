// Navbar.jsx — Handles site navigation and theme switching ✨

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/global.css';

// ✅ Directly import the logo so it works in both local and GitHub Pages
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'default';
    document.body.className = `${savedTheme}-theme`;
  }, []);

  const handleContactClick = () => {
    if (location.pathname === '/') {
      // Already on home — scroll smoothly
      setTimeout(() => {
        const contact = document.getElementById('contact');
        if (contact) contact.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Navigate to home, then scroll
      navigate('/');
      setTimeout(() => {
        const contact = document.getElementById('contact');
        if (contact) contact.scrollIntoView({ behavior: 'smooth' });
      }, 300); // slight delay so home can render first
    }
  };

  return (
    <header>
      <div className="header-grid">
        {/* Logo Column */}
        <div className="header-col logo-col">
          <Link to="/">
            <img className="logo" src={logo} alt="Mahak Patel logo" />
          </Link>
        </div>

        {/* Theme Switcher */}
        <div className="header-col role-col">
          <div className="theme-switcher">
            <button className="theme-btn" data-theme="default" aria-label="Default Theme">
              <i className="fas fa-palette"></i>
            </button>
            <button className="theme-btn" data-theme="moon" aria-label="Moon Theme">
              <i className="fas fa-moon"></i>
            </button>
            <button className="theme-btn" data-theme="snow" aria-label="Snow Theme">
              <i className="fas fa-snowflake"></i>
            </button>
            <button className="theme-btn" data-theme="rain" aria-label="Rain Theme">
              <i className="fas fa-cloud-rain"></i>
            </button>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="header-col nav-col">
          <nav>
            <ul className="desktop-menu">
              <li className="tooltip-bottom">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <span className="tooltiptext-bottom">Back to home. Safe and sound.</span>
              </li>
              <li className="tooltip-bottom">
                <Link to="/play">Play</Link>
                <span className="tooltiptext-bottom">My creative playground!</span>
              </li>
              <li className="tooltip-bottom">
                <Link to="/about">About</Link>
                <span className="tooltiptext-bottom">Who’s behind this magic?</span>
              </li>
              <li className="tooltip-bottom">
                <button className="contact-link-btn" onClick={handleContactClick}>
                  Contact
                </button>
                <span className="tooltiptext-bottom">Talk to me. I don’t bite.</span>
              </li>
            </ul>

            {/* Hamburger Icon for Mobile */}
            <div className="mobile-menu-icon">
              <i className="fas fa-bars"></i>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;