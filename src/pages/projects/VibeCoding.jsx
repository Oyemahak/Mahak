// VibeCoding.jsx — 2-Hour AI Game Build
import React from 'react';
import '../../styles/webProjects.css';
import Footer from '../../components/Footer';

const VibeCoding = () => {
  return (
    <main className="case-study-page">
      <section className="case-study-intro">
        <h1>🎮 Vibe Coding – Match Emoji Game</h1>
        <p className="project-type">AI-Powered Dev Sprint · Game</p>
        <p className="project-description">
          A playful emoji-matching game built in just 2 hours using AI prompts and JavaScript. Responsive, fun, and interactive with emoji logic, score tracking, and win animation.
        </p>
      </section>

      <section className="case-study-section">
        <h3>Key Features</h3>
        <ul className="project-list">
          <li>Match-and-memory game with score logic</li>
          <li>Built from scratch with vanilla JS</li>
          <li>Celebration animations on win</li>
          <li>Mobile-friendly layout</li>
        </ul>
        <h3>Links</h3>
        <a
          className="button-glass"
          href="https://oyemahak.github.io/VibeCoding/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🚀 Live Demo
        </a>
        <a
          className="button-glass"
          href="https://github.com/Oyemahak/VibeCoding"
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
        <a href="/qronster" className="cs-button next-btn">
          Next Project <i className="fas fa-arrow-right"></i>
        </a>
      </div>

      <div className="separator"></div>
      <Footer />
    </main>
  );
};

export default VibeCoding;