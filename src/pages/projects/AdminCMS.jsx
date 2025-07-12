// AdminCMS.jsx — Node.js CMS for Portfolio
import React from 'react';
import '../../styles/webProjects.css';
import Footer from '../../components/Footer';

const AdminCMS = () => {
  return (
    <main className="case-study-page">
      <section className="case-study-intro">
        <h1>🧰 Admin CMS Panel – Portfolio Backend</h1>
        <p className="project-type">Personal CMS · Node + MongoDB</p>
        <p className="project-description">
          A custom CMS built with Node.js, Express, MongoDB Atlas, and Pug to manage portfolio data (Skills and Messages) with authentication, live email notifications, and trash system for contact form.
        </p>
      </section>

      <section className="case-study-section">
        <h3>🔧 Key Features</h3>
        <ul className="project-list">
          <li>CRUD for Skills and Messages</li>
          <li>Pug-based responsive admin UI</li>
          <li>Trash system + inline comments</li>
          <li>Nodemailer + MongoDB Atlas</li>
        </ul>
      </section>

      <section className="case-study-section">
        <h3>🔗 Links</h3>
        <a
          className="button-glass"
          href="https://admin-dashboard-mahak.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          🚀 Live Demo
        </a>
        <a
          className="button-glass"
          href="https://github.com/Oyemahak/admin-dashboard-mahak"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 View Code
        </a>
      </section>

      <div className="separator"></div>
      <Footer />
    </main>
  );
};

export default AdminCMS;