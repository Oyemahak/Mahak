// Byblos.jsx — Case Study for Byblos Redesign 📘

import React from 'react';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

// ✅ Imported assets (images for this project)
import userFlow from '../../assets/images/user-flow.png';
import paperSketches from '../../assets/images/paper-sketches.png';
import loFiMobile from '../../assets/images/lo-fi-mobile.png';
import loFiWeb from '../../assets/images/lo-fi-web.png';
import hiFiMobile from '../../assets/images/hi-fi-mobile.png';
import hiFiWeb from '../../assets/images/hi-fi-web.png';

const Byblos = () => {
  return (
    <main className="case-study-page">
      <section className="case-study-intro">
        <h1>Byblos Restaurant Website Redesign</h1>
        <p className="project-type">Capstone UX Project · 4 Weeks · 2023</p>
        <p className="project-description">
          This redesign project focused on improving the user experience of Byblos, a Mediterranean restaurant in Toronto. 
          We focused on better navigation, easier booking, and visual alignment with its premium brand identity.
        </p>
      </section>

      {/* 🔹 User Flow */}
      <section className="case-study-section">
        <h2>User Flow</h2>
        <img src={userFlow} alt="User Flow Diagram for Byblos" className="cs-image" />
      </section>

      {/* 📝 Paper Sketches */}
      <section className="case-study-section">
        <h2>Paper Sketches</h2>
        <img src={paperSketches} alt="Paper sketches for Byblos redesign" className="cs-image" />
      </section>

      {/* 📱 Lo-Fi Wireframes */}
      <section className="case-study-section">
        <h2>Lo-Fi Wireframes</h2>
        <div className="cs-flex-images">
          <img src={loFiMobile} alt="Lo-Fi Mobile Wireframes" className="cs-image" />
          <img src={loFiWeb} alt="Lo-Fi Web Wireframes" className="cs-image" />
        </div>
      </section>

      {/* 🎨 Hi-Fi Mockups */}
      <section className="case-study-section">
        <h2>Hi-Fi Mockups</h2>
        <div className="cs-flex-images">
          <img src={hiFiMobile} alt="Hi-Fi Mobile Mockup" className="cs-image" />
          <img src={hiFiWeb} alt="Hi-Fi Web Mockup" className="cs-image" />
        </div>
      </section>

      {/* 📬 Contact + Footer */}
      <Contact />
      <div className="separator"></div>
      <Footer />
    </main>
  );
};

export default Byblos;