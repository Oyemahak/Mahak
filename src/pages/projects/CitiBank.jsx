import React from 'react';
import Footer from '../../components/Footer';

// Image assets
import lineage1 from '../../assets/images/citi-data-mind-system-lineage-view-1.png';
import lineage2 from '../../assets/images/citi-data-mind-system-lineage-view-2.png';
import lineage3 from '../../assets/images/citi-data-mind-system-lineage-view-3.png';
import lineage4 from '../../assets/images/citi-data-mind-system-lineage-view-4.png';
import explorer1 from '../../assets/images/citi-data-mind-explorer-strategic-data-lineage-1.png';
import explorer2 from '../../assets/images/citi-data-mind-explorer-strategic-data-lineage-2.png';
import ofm1 from '../../assets/images/citi-ofm-1.png';
import ofm2 from '../../assets/images/citi-ofm-2.png';

const CitiBank = () => {
  return (
    <main className="case-study-page citi-case-study">
      <section className="case-study-intro">
        <h1>Citi Bank – Data Management Simplified</h1>
        <p className="project-type">UI/UX Case Study · 2024</p>
        <p className="project-description">As part of a larger project at Accenture, I collaborated on designing multiple user interfaces for Citi Bank employees. The project aimed to develop a unified platform for managing complex data systems, streamlining workflows, and reducing operational errors.</p>
      </section>

      <section className="case-study-section">
        <h3>My Role</h3>
        <p>
          I joined this project as a Junior UX Designer midway through development. My role involved supporting senior designers with UI tasks, conducting heuristic evaluations, and creating user flows from existing wireframes. I maintained the established brand guidelines and identity throughout. Due to the project’s confidentiality and complexity, I’ll focus on key design aspects and provide an overview of selected screens.
        </p>
      </section>

      <section className="case-study-section">
        <h2>Data Mind – System Lineage View</h2>
        <h4>Purpose</h4>
        <p>To provide insights into how selected data is processed and stored within the bank's ecosystem.</p>
        <h4>Features</h4>
        <ul className="cs-list">
          <li><strong>Tag Filters: </strong>Users can select and filter tags from the top section to view specific data contracts and lineage.</li>
          <li><strong>Visual Mapping: </strong>The center of the screen displays a visual representation of data flows between various systems, aiding in understanding data relationships.</li>
          <li><strong>User Experience: </strong>The interface is clean and minimalistic, focusing on clarity and ease of use, which is crucial for quick decision-making.</li>
        </ul>
        <div className="cs-arrow-grid-rows">
          {/* Row 1 */}
          <div className="cs-grid-row">
            <img src={lineage1} alt="System Lineage 1" />
            <div className="cs-arrow-center">
              <i className="fa-solid fa-arrow-right arrow-icon-between desktop-only"></i>
              <i className="fa-solid fa-arrow-down arrow-icon-between mobile-only"></i>
            </div>
            <img src={lineage2} alt="System Lineage 2" />
          </div>

          {/* Row 2 */}
          <div className="cs-grid-row">
            <img src={lineage4} alt="System Lineage 4" />
            <div className="cs-arrow-center">
              <i className="fa-solid fa-arrow-left arrow-icon-between desktop-only"></i>
              <i className="fa-solid fa-arrow-down arrow-icon-between mobile-only"></i>
            </div>
            <img src={lineage3} alt="System Lineage 3" />
          </div>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Data Mind Explorer – Strategic Data Lineage</h2>
        <h4>Purpose</h4>
        <p>To explore strategic data flows across various business functions.</p>
        <h4>Features</h4>
        <ul className="cs-list">
          <li><strong>Classification Filters: </strong>The left sidebar allows users to filter data based on classifications such as Enterprise Standard Products, Business Functions, and Geography Segments.</li>
          <li><strong>Interactive Lineage Map: </strong>The interactive map in the center displays the connections between different data entities, allowing users to explore and understand the intricate relationships between them.</li>
          <li><strong>User Experience: </strong>Designed for in-depth analysis, this interface offers flexibility and control over data exploration, making it easier for users to identify patterns and insights.</li>
        </ul>
        <div className="cs-arrow-grid-rows">
          <div className="cs-grid-row">
            <img src={explorer1} alt="Explorer 1" />
            <div className="cs-arrow-center">
              <i className="fa-solid fa-arrow-right arrow-icon-between desktop-only"></i>
              <i className="fa-solid fa-arrow-down arrow-icon-between mobile-only"></i>
            </div>
            <img src={explorer2} alt="Explorer 2" />
          </div>
        </div>
      </section>

      <section className="case-study-section">
        <h2>Operating Fact Manager (OFM) – Report Lineage Interface</h2>
        <h4>Purpose</h4>
        <p>To help Citi Bank employees visualize and track the flow of financial data across systems.</p>
        <h4>Features</h4>
        <ul className="cs-list">
          <li>Search and Filter Options: Located on the left sidebar, these tools allow users to refine their view of data flows.</li>
          <li>Data Offering Panel: The right sidebar provides detailed information on selected data contracts, including data concepts, qualified products, and managed segments.</li>
          <li>User Experience: The layout is designed to present complex data relationships clearly, with intuitive navigation and accessibility features.</li>
        </ul>
        <div className="cs-arrow-grid-rows">
          <div className="cs-grid-row">
            <img src={ofm1} alt="OFM 1" />
            <div className="cs-arrow-center">
              <i className="fa-solid fa-arrow-right arrow-icon-between desktop-only"></i>
              <i className="fa-solid fa-arrow-down arrow-icon-between mobile-only"></i>
            </div>
            <img src={ofm2} alt="OFM 2" />
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      <section className="case-study-section">
        <h3>Key Takeaways</h3>
        <ul className="cs-list">
          <li><strong>Design Consistency:</strong> Across all screens, the design remains consistent, ensuring a seamless user experience as employees navigate through different parts of the user flow.</li>
          <li><strong>Simplified Navigation:</strong> The screens are structured to minimize complexity, with intuitive navigation that allows users to focus on their tasks without unnecessary distractions.</li>
          <li><strong>Enhanced Data Visualization:</strong> Each screen is designed to present complex data in a visually accessible manner, aiding in quick comprehension and decision-making.</li>
        </ul>
      </section>

      <section className="case-study-intro">
        <h2>Conclusion</h2>
        <p className="project-description">
          This project was a significant learning experience, where I contributed to the development of sophisticated tools that streamline database management for Citi Bank employees. Despite joining the project midway, I was able to make meaningful contributions to the UI design and user flow, helping to create a cohesive and user-friendly platform.
        </p>
      </section>

      {/* Navigation */}
      <div className="case-study-nav">
        <a href="/" className="cs-button outline back-btn">
          <i className="fas fa-arrow-left"></i> Back to Home
        </a>
        <a href="/amazonprime" className="cs-button next-btn">
          Next Project <i className="fas fa-arrow-right"></i>
        </a>
      </div>

      <div className="separator"></div>
      <Footer />
    </main>
  );
};

export default CitiBank;