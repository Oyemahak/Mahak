// DazzlingSmile.jsx — WordPress Dental Site
import React from 'react';
import '../../styles/webProjects.css';
import Footer from '../../components/Footer';

const DazzlingSmile = () => {
  return (
    <main className="case-study-page">
      <section className="case-study-intro">
        <h1>🦷 Dazzling Smile – Dental Clinic Website</h1>
        <p className="project-type">Freelance Project · WordPress</p>
        <p className="project-description">
          A responsive WordPress site for a dental clinic, built using Elementor and styled for SEO and appointment conversion. The site includes service pages, reviews, and mobile optimization.
        </p>
      </section>

      <section className="case-study-section">
        <h3>🔧 Key Features</h3>
        <ul className="project-list">
          <li>WordPress + Elementor build</li>
          <li>Mobile-optimized and SEO-ready</li>
          <li>Appointment integration</li>
          <li>Custom styling for clinic brand</li>
        </ul>
      </section>

      <section className="case-study-section">
        <h3>🔗 Links</h3>
        <a
          className="button-glass"
          href="https://dazzlingsmile.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🚀 Live Site
        </a>
        <a
          className="button-glass"
          href="https://www.figma.com/design/1m2nusj7cJ5EHV9jpNrso9/Dazzling-Smile?node-id=187-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          🎨 Figma Design
        </a>
      </section>

      <div className="separator"></div>
      <Footer />
    </main>
  );
};

export default DazzlingSmile;