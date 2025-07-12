// Qronster.jsx — QR Code Generator
import React from 'react';
import '../../styles/webProjects.css';
import Footer from '../../components/Footer';

const Qronster = () => {
  return (
    <main className="case-study-page">
      <section className="case-study-intro">
        <h1>Qronster – QR Code Generator</h1>
        <p className="project-type">Personal Project · JavaScript Challenge</p>
        <p className="project-description">
          Qronster is a responsive, fun, and fully client-side QR code generator built with vanilla HTML, CSS, and JS. Users can customize their code color, branding, and download their QR codes instantly.
        </p>
      </section>

      <section className="case-study-section">
        <h3>Key Features</h3>
        <ul className="project-list">
          <li>Custom color selection and branding</li>
          <li>Live QR preview and instant download</li>
          <li>Responsive design for all devices</li>
          <li>No libraries - pure JS</li>
        </ul>
        <h3>Links</h3>
        <a
          className="button-glass"
          href="https://oyemahak.github.io/QRonster/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🚀 Live Demo
        </a>
        <a
          className="button-glass"
          href="https://github.com/Oyemahak/QRonster"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 View Code
        </a>
      </section>
      
      {/* ↩️ Navigation */}
      <div className="case-study-nav">
        <a href="/" className="cs-button outline back-btn">
          <i className="fas fa-arrow-left"></i> Back to Home
        </a>
        <a href="/schoolsystem" className="cs-button next-btn">
          Next Project <i className="fas fa-arrow-right"></i>
        </a>
      </div>

      <div className="separator"></div>
      <Footer />
    </main>
  );
};

export default Qronster;