// Projects.jsx — Toggle between UX and Dev Projects 🎯
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Image imports for consistency across environments
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("ux");
  const navigate = useNavigate();

  // Switch between UX and Dev tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // UX Projects List
  const uxProjects = [
    {
      img: project1,
      title: "Byblos",
      desc: "User Research, Wireframing, Usability Testing",
      route: "/byblos",
    },
    {
      img: project2,
      title: "Citi Bank 🔒",
      desc: "Front-End Development, Heuristic Evaluation, Prototyping",
      route: "/citi",
    },
    {
      img: project3,
      title: "Amazon Prime",
      desc: "Heuristic Evaluation, Usability Testing, Affinity Mapping",
      route: "/amazonprime",
    },
    {
      img: project4,
      title: "Style Sphere",
      desc: "User Research, Wireframing and Prototyping, Usability Testing",
      route: "/stylesphere",
    },
    {
      img: project5,
      title: "Accenture 🔒",
      desc: "Front-End Development, Heuristic Evaluation, Prototyping",
      route: "/accenture",
    },
    {
      img: project6,
      title: "Humber Esports",
      desc: "Heuristic Evaluation, Usability Testing, Affinity Mapping",
      route: "/humber",
    },
  ];

  // Web Dev Projects List
  const devProjects = [
    {
      img: project5,
      title: "CanSTEM CMS",
      desc: "WordPress Build with Elementor & SEO",
      route: "/canstem",
    },
    {
      img: project5,
      title: "React Portfolio",
      desc: "Dark Mode, Weather Themes, Animations",
      route: "/portfolio",
    },
    {
      img: project5,
      title: "Google StopAlarm",
      desc: "Geolocation Alert Using Leaflet.js",
      route: "/stopalarm",
    },
    {
      img: project5,
      title: "Ecommerce CMS",
      desc: "Node.js, Express, MongoDB Admin Panel",
      route: "/ecommerce",
    },
    {
      img: project5,
      title: "Game Dash UI",
      desc: "React App for Game Score Management",
      route: "/gamedash",
    },
    {
      img: project5,
      title: "Accenture 🔒",
      desc: "Front-End Development, Heuristic Evaluation, Prototyping",
      route: "/accenture",
    },
  ];

  // Decide which set of projects to show
  const projectsToShow = activeTab === "ux" ? uxProjects : devProjects;

  return (
    <section id="projects">
      {/* 🧠 Header & Tabs */}
      <div className="projects-header-centered">
        <h2 id="projects-title">
          {activeTab === "ux"
            ? "Featured UX Projects"
            : "Featured Web Dev Projects"}
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

      {/* 🧊 Project Cards */}
      <div className="projects-grid">
        {projectsToShow.map((project, index) => (
          <div className="project" key={index}>
            {/* 🧩 Content container that gets blurred on hover */}
            <div className="project-content">
              <img
                src={project.img}
                alt={`${project.title} project screenshot`}
              />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>

            {/* 👁️ View Project Button */}
            {project.route && (
              <button
                className="view-project-btn"
                onClick={() => navigate(project.route)}
              >
                View Project
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;