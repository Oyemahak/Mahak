// Byblos.jsx — Final Case Study Page for Byblos 🍽️

import React from 'react';
import Footer from '../../components/Footer';

// ✅ Image assets
import userFlow from '../../assets/images/user-flow.png';
import paperSketches from '../../assets/images/paper-sketches.png';
import loFiMobile from '../../assets/images/lo-fi-mobile.png';
import loFiWeb from '../../assets/images/lo-fi-web.png';
import hiFiMobile from '../../assets/images/hi-fi-mobile.png';
import hiFiWeb from '../../assets/images/hi-fi-web.png';

const Byblos = () => {
    return (
        <main className="case-study-page">

            {/* 🚀 Intro Section */}
            <section className="case-study-intro">
                <h1>Byblos Restaurant Website Redesign</h1>
                <p className="project-type">Capstone UX Project · 4 Weeks · 2023</p>
                <p className="project-description">
                    This redesign project focused on improving the user experience of Byblos, a Mediterranean restaurant in Toronto.
                    We focused on better navigation, easier booking, and visual alignment with its premium brand identity.
                </p>
            </section>

            {/* 📊 Three-Column Overview */}
            <section className="case-study-section">
                <div className="cs-three-col">
                    <div>
                        <h3>My Role</h3>
                        <p>UX Researcher & Interaction Designer – conducted interviews, usability tests, and created wireframes & prototypes.</p>
                    </div>
                    <div>
                        <h3>Proposed Solution</h3>
                        <p>We focused on streamlining the booking process, making the navigation intuitive, and aligning visuals with the luxury brand.</p>
                    </div>
                    <div>
                        <h3>Research</h3>
                        <p>User interviews revealed pain points around reservations and confusion navigating the site. Heuristic evaluation confirmed major gaps.</p>
                    </div>
                </div>
            </section>

            {/* 🔄 User Flow */}
            <section className="case-study-section">
                <h2>User Flow</h2>
                <img src={userFlow} alt="User Flow Diagram" className="cs-image" />
            </section>

            {/* ✍️ Paper Sketches */}
            <section className="case-study-section">
                <h2>Paper Sketches</h2>
                <img src={paperSketches} alt="Paper Sketches" className="cs-image" />
            </section>

            {/* 📱 Lo-Fi Wireframes */}
            <section className="case-study-section">
                <h2>Lo-Fi Wireframes</h2>
                <div className="cs-flex-images">
                    <img src={loFiMobile} alt="Lo-Fi Mobile Wireframes" className="cs-image" />
                    <img src={loFiWeb} alt="Lo-Fi Web Wireframes" className="cs-image" />
                </div>
            </section>

            {/* 🎨 Hi-Fi Mockups with View Prototypes */}
            <section className="case-study-section">
                <h2>Hi-Fi Mockups</h2>
                <div className="cs-flex-images">
                    <div className="cs-mockup-wrapper">
                        <img src={hiFiMobile} alt="Hi-Fi Mobile Mockup" />
                        <a
                            href="https://www.figma.com/proto/6O0gLoYGeDDevzaWTM87Ms/Byblos_Humber?page-id=1%3A18&node-id=623-269&viewport=799%2C355%2C0.15"
                            className="cs-mockup-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Mobile Prototype
                        </a>
                    </div>
                    <div className="cs-mockup-wrapper">
                        <img src={hiFiWeb} alt="Hi-Fi Web Mockup" />
                        <a
                            href="https://www.figma.com/proto/6O0gLoYGeDDevzaWTM87Ms/Byblos_Humber?page-id=1%3A18&node-id=1304-738&viewport=799%2C355%2C0.15"
                            className="cs-mockup-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Web Prototype
                        </a>
                    </div>
                </div>
            </section>

            {/* 📌 Conclusion */}
            <section className="case-study-intro">
                <h2>Conclusion</h2>
                <p className="project-description">
                    Through research and iterative design, we crafted a visually rich and functional redesign for Byblos.
                    Our usability testing confirmed improved navigation, reservation flows, and user satisfaction.
                </p>
            </section>

            {/* 🧭 Navigation Buttons */}
            <div className="case-study-nav">
                <a href="/" className="cs-button outline back-btn">
                    <i className="fas fa-arrow-left"></i> Back to Home
                </a>
                <a href="/citi" className="cs-button next-btn">
                    Next Project <i className="fas fa-arrow-right"></i>
                </a>
            </div>

            <div className="separator"></div>

            {/* 🧩 Footer */}
            <Footer />
        </main>
    );
};

export default Byblos;