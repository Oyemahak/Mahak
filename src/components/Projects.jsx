// Projects.jsx — Toggle between UX and Dev Projects 🎯

import React, { useState } from "react";

// ✅ All images imported for consistent deployment
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("ux");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const uxProjects = [
    { img: project1, title: "Byblos", desc: "User Research, Wireframing, Usability Testing" },
    { img: project2, title: "Citi Bank 🔒", desc: "Front-End Development, Heuristic Evaluation, Prototyping" },
    { img: project3, title: "Subway", desc: "Heuristic Evaluation, Usability Testing, Affinity Mapping" },
    { img: project4, title: "Style Sphere", desc: "User Research, Wireframing and Prototyping, Usability Testing" },
    { img: project5, title: "Accenture 🔒", desc: "Front-End Development, Heuristic Evaluation, Prototyping" },
    { img: project6, title: "Humber Esports", desc: "Heuristic Evaluation, Usability Testing, Affinity Mapping" },
  ];

  const devProjects = [
    { img: project5, title: "Accenture 🔒", desc: "Front-End Development, Heuristic Evaluation, Prototyping" },
    { img: project5, title: "Accenture 🔒", desc: "Front-End Development, Heuristic Evaluation, Prototyping" },
    { img: project5, title: "Accenture 🔒", desc: "Front-End Development, Heuristic Evaluation, Prototyping" },
    { img: project5, title: "Accenture 🔒", desc: "Front-End Development, Heuristic Evaluation, Prototyping" },
    { img: project5, title: "Accenture 🔒", desc: "Front-End Development, Heuristic Evaluation, Prototyping" },
    { img: project5, title: "Accenture 🔒", desc: "Front-End Development, Heuristic Evaluation, Prototyping" },
  ];

  return (
    <section id="projects">
      <div className="projects-header-centered">
        <h2 id="projects-title">
          {activeTab === 'ux' ? 'Featured UX Projects' : 'Featured Web Dev Projects'}
        </h2>
        <div className="project-toggle">
          <button
            className={`tab-toggle ${activeTab === "ux" ? "active" : ""}`}
            onClick={() => handleTabChange("ux")}
          >
            UX Projects
          </button>
          <button
            className={`tab-toggle ${activeTab === "dev" ? "active" : ""}`}
            onClick={() => handleTabChange("dev")}
          >
            Web Dev Projects
          </button>
        </div>
      </div>

      <div className="projects-grid">
        {(activeTab === "ux" ? uxProjects : devProjects).map((project, index) => (
          <div className="project" key={index}>
            <img
              src={project.img}
              alt={`${project.title} project screenshot`}
            />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;