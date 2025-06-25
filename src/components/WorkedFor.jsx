// WorkedFor.jsx — Professional experience showcase in grid and carousel 💼

import React from "react";

// ✅ Direct imports for consistent local + GitHub Pages builds
import company1 from "../assets/images/company1.png";
import company2 from "../assets/images/company2.png";
import company3 from "../assets/images/company3.png";
import company4 from "../assets/images/company4.png";

import accenture from "../assets/images/accenture.png";
import citi from "../assets/images/citi.png";
import dazzlingSmile from "../assets/images/dazzling-smile.png";
import canstem from "../assets/images/canstem.png";

const WorkedFor = () => {
  return (
    <section id="worked-for">
      <h2>Worked For</h2>

      {/* Desktop Grid View */}
      <div className="worked-for-container">
        <div className="worked-for-grid">
          <div className="company-14 tooltip">
            <img src={company1} alt="Citi Bank" />
            <span className="tooltiptext">
              Led UX design for internal B2B dashboards. Focused on usability improvements,
              interaction design, and system flows as a core contributor.
            </span>
          </div>

          <div className="company-23 tooltip">
            <img src={company2} alt="Accenture" />
            <span className="tooltiptext">
              Worked on front-end development and prototyping for enterprise tools. Built
              interfaces with attention to detail, performance, and accessibility.
            </span>
          </div>

          <div className="company-23 tooltip">
            <img src={company3} alt="Dazzling Smiles" />
            <span className="tooltiptext">
              Designed and developed a full custom WordPress website. Managed everything
              from layout to optimization for a responsive dental service site.
            </span>
          </div>

          <div className="company-14 tooltip">
            <img src={company4} alt="CanSTEM Education" />
            <span className="tooltiptext">
              Redesigned web platforms and managed digital service delivery. Conducted UX
              research, improved SEO, and enhanced user engagement for an educational client.
            </span>
          </div>
        </div>

        {/* Mobile Carousel View */}
        <div className="carousel-arrows">
          <button className="arrow-left" disabled>&#10094;</button>
          <div className="worked-for-mobile">
            <img className="mobile-companies-img" src={accenture} alt="Accenture" />
            <img className="mobile-companies-img active" src={citi} alt="Citi Bank" />
            <img className="mobile-companies-img" src={dazzlingSmile} alt="Dazzling Smiles" />
            <img className="mobile-companies-img" src={canstem} alt="CanSTEM Education" />
          </div>
          <button className="arrow-right">&#10095;</button>
        </div>
      </div>
    </section>
  );
};

export default WorkedFor;