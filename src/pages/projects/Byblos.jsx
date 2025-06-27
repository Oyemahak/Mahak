// Byblos.jsx — Final Case Study Page 🚀

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

// Images
import userFlow from '../../assets/images/user-flow.png';
import paperSketches from '../../assets/images/paper-sketches.png';
import loFiMobile from '../../assets/images/lo-fi-mobile.png';
import loFiWeb from '../../assets/images/lo-fi-web.png';
import hiFiMobile from '../../assets/images/hi-fi-mobile.png';
import hiFiWeb from '../../assets/images/hi-fi-web.png';

const Byblos = () => {
  const navigate = useNavigate();

  return (
    <main className="case-study-page">
      {/* 🔷 Project Intro */}
      <section className="case-study-intro">
        <h1>Byblos Restaurant Website Redesign</h1>
        <p className="project-type">Capstone UX Project · 4 Weeks · 2023</p>
        <p className="project-description">
          Byblos is a Toronto restaurant offering Eastern Mediterranean cuisine. This project focused on developing an online ordering experience that allows users to easily browse the menu, place delivery or pickup orders, track orders, and manage favourites — improving both customer convenience and the restaurant’s online presence.
        </p>
      </section>

      {/* 🧠 My Role */}
      <section className="case-study-section">
        <h2>My Role</h2>
        <p className="project-description">
          This was a collaborative project with another UX designer. I was responsible for conducting UX research, brainstorming solutions, creating wireframes and prototypes, and performing usability testing.
        </p>
      </section>

      {/* 💡 Proposed Solution */}
      <section className="case-study-section">
        <h2>Proposed Solution</h2>
        <p className="project-description">
          I designed a complete online ordering system that enables users to:
        </p>
        <ul className="cs-list">
          <li>✅ Browse the menu effortlessly</li>
          <li>✅ Order food for delivery or pickup</li>
          <li>✅ Access exclusive online offers</li>
          <li>✅ Track orders and manage favourites</li>
        </ul>
      </section>

      {/* 🔍 Research Insights */}
      <section className="case-study-section">
        <h2>Research</h2>
        <p className="project-description">
          I used a design-thinking approach: conducting interviews and surveys to uncover user pain points such as:
        </p>
        <ul className="cs-list">
          <li>• Difficulty navigating the menu</li>
          <li>• No convenient ordering method</li>
          <li>• Desire for offers and easy tracking</li>
        </ul>
      </section>

      {/* 🔁 User Flow */}
      <section className="case-study-section">
        <h2>User Flow</h2>
        <img src={userFlow} alt="User Flow Diagram for Byblos" className="cs-image outlined" />
      </section>

      {/* ✍️ Sketches */}
      <section className="case-study-section">
        <h2>Paper Sketches</h2>
        <img src={paperSketches} alt="Paper sketches for Byblos redesign" className="cs-image outlined" />
      </section>

      {/* 🧱 Lo-Fi Wireframes */}
      <section className="case-study-section">
        <h2>Lo-Fi Wireframes</h2>
        <div className="cs-flex-images outlined">
          <img src={loFiMobile} alt="Lo-Fi Mobile Wireframes" className="cs-image" />
          <img src={loFiWeb} alt="Lo-Fi Web Wireframes" className="cs-image" />
        </div>
      </section>

      {/* 🎨 Hi-Fi Mockups */}
      <section className="case-study-section">
        <h2>Hi-Fi Mockups</h2>
        <div className="cs-flex-images outlined">
          <img src={hiFiMobile} alt="Hi-Fi Mobile Mockup" className="cs-image" />
          <img src={hiFiWeb} alt="Hi-Fi Web Mockup" className="cs-image" />
        </div>
      </section>

      {/* 🔗 Hi-Fi Prototype Buttons */}
      <div className="prototype-buttons">
        <a
          href="https://www.figma.com/proto/6O0gLoYGeDDevzaWTM87Ms/Byblos_Humber?page-id=1%3A18&node-id=623-269&..."
          target="_blank"
          rel="noreferrer"
          className="cs-button"
        >
          Hi-Fi Mobile Prototype
        </a>
        <a
          href="https://www.figma.com/proto/6O0gLoYGeDDevzaWTM87Ms/Byblos_Humber?page-id=1%3A18&node-id=1304-738&..."
          target="_blank"
          rel="noreferrer"
          className="cs-button outline"
        >
          Hi-Fi Web Prototype
        </a>
      </div>

      {/* ✅ Conclusion */}
      <section className="case-study-section">
        <h2>Conclusion</h2>
        <p className="project-description">
          We successfully delivered a responsive and intuitive online ordering system for Byblos. The design significantly improved digital engagement and reflected the brand’s premium dining experience.
        </p>
      </section>

      {/* 🔁 Nav Buttons */}
      <div className="case-study-nav">
        <button className="cs-button" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        <button className="cs-button" onClick={() => navigate('/subway')}>
          Next Project →
        </button>
      </div>

      <Footer />
    </main>
  );
};

export default Byblos;