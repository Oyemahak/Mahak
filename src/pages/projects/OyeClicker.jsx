// OyeClicker.jsx — Chrome Extension for SEO CTR
import React from 'react';
import '../../styles/webProjects.css';
import Footer from '../../components/Footer';

const OyeClicker = () => {
  return (
    <main className="case-study-page">
      <section className="case-study-intro">
        <h1>🔍 OyeClicker – SEO CTR Simulator Extension</h1>
        <p className="project-type">Browser Extension · JavaScript</p>
        <p className="project-description">
          OyeClicker simulates realistic user behavior to test organic search result rankings. It mimics delayed clicks, keyword entry, and user scrolling on Google search pages.
        </p>
      </section>

      <section className="case-study-section">
        <h3>🔧 Key Features</h3>
        <ul className="project-list">
          <li>Google-style search result interaction</li>
          <li>Delay-based and randomized CTR simulation</li>
          <li>Keyword injection and click tracking</li>
          <li>Chrome Extension Manifest v3</li>
        </ul>
      </section>

      <section className="case-study-section">
        <h3>🔗 Links</h3>
        <a
          className="button-glass"
          href="https://github.com/Oyemahak/OyeClicker"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 View Code
        </a>
        <a
          className="button-glass"
          href="https://www.figma.com/design/Yq8V1H4p8S7RtLK45R7Wg4/JS-Pet_Project?node-id=73-59"
          target="_blank"
          rel="noopener noreferrer"
        >
          🎨 Figma Flow
        </a>
      </section>

      <div className="separator"></div>
      <Footer />
    </main>
  );
};

export default OyeClicker;