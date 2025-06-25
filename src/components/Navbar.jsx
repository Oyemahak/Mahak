// Navbar.jsx — Handles site navigation and theme switching ✨

import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/global.css';

// ✅ Direct import of logo to ensure it works in both local & GitHub Pages
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const location = useLocation();

  // ✅ Apply saved theme on load
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'default';
    document.body.className = `${savedTheme}-theme`;
  }, []);

  // ✅ Scroll to contact section already present on the current page
  const handleContactClick = () => {
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // slight delay in case of rendering
  };

  return (
    <header>
      <div className="header-grid">
        {/* 🔗 Logo */}
        <div className="header-col logo-col">
          <Link to="/">
            <img className="logo" src={logo} alt="Mahak Patel logo" />
          </Link>
        </div>

        {/* 🎨 Theme Switcher Buttons */}
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

        {/* 🌐 Navigation */}
        <div className="header-col nav-col">
          <nav>
            <ul className="desktop-menu">
              <li className="tooltip-bottom">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <span className="tooltiptext-bottom">Back to home. Safe and sound.</span>
              </li>

              <li className="tooltip-bottom">
                <Link to="/play" className={location.pathname === '/play' ? 'active' : ''}>Play</Link>
                <span className="tooltiptext-bottom">My creative playground!</span>
              </li>

              <li className="tooltip-bottom">
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
                <span className="tooltiptext-bottom">Who’s behind this magic?</span>
              </li>

              <li className={`tooltip-bottom ${location.pathname === '/' ? 'active' : ''}`}>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault(); // prevent jump
                    handleContactClick();
                  }}
                  className="nav-link">Contact
                </a>
                <span className="tooltiptext-bottom">Talk to me. I don’t bite.</span>
              </li>
            </ul>

            {/* 📱 Mobile Nav Icon */}
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