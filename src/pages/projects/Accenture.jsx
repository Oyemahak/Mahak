// Accenture.jsx - Final Case Study Page for Accenture Projects
import React from 'react';
import Footer from '../../components/Footer';

// Image assets (replace with your actual image imports)
import jpaBeforeHome from '../../assets/images/accenture-job-profile-accelerator-initial-homepage.png';
import jpaAfterHome from '../../assets/images/accenture-job-profile-accelerator-final-homepage.png';
import jpaOption1 from '../../assets/images/accenture-job-profile-accelerator-profile-summary-before.png';
import jpaOption2 from '../../assets/images/accenture-job-profile-accelerator-profile-summary-after.png';
import jpaBeforeProfile from '../../assets/images/accenture-job-profile-accelerator-option1.png';
import jpaAfterProfile from '../../assets/images/accenture-job-profile-accelerator-option2.png';
import amisBefore from '../../assets/images/accenture-amis-1.png';
import amisAfter from '../../assets/images/accenture-amis-2.png';
import pbwmBefore from '../../assets/images/accenture-pbwm-before.png';
import pbwmAfter from '../../assets/images/accenture-pbwm-after.png';
import pbwmOption1 from '../../assets/images/accenture-pbwm-option1.png';
import pbwmOption2 from '../../assets/images/accenture-pbwm-option2.png';
import timeTracker1 from '../../assets/images/accenture-time-tracker-1.png';
import timeTracker2 from '../../assets/images/accenture-time-tracker-2.png';
import fileTrackerBefore from '../../assets/images/accenture-file-upload-status-activity-tracker-1.png';
import fileTrackerAfter from '../../assets/images/accenture-file-upload-status-activity-tracker-2.png';

const Accenture = () => {
    return (
        <main className="case-study-page accenture-case-study">
            {/* Introduction Section */}
            <section className="case-study-intro">
                <h1>Accenture - UX Stories Behind Five Projects</h1>
                <p className="project-type">UI/UX Case Study · 2024</p>
                <p className="project-description">
                    Throughout my journey as a User Experience Designer, I've engaged in diverse projects that prioritize usability,
                    efficiency, and overall user satisfaction. This case study highlights five pivotal projects: the Citi PBWM Portal,
                    Job Profile Accelerator, AMIS Dashboard, Time Tracker Application, and the File Upload Status & Activity Tracker.
                </p>
            </section>

            <section className="case-study-section">
                <p className="project-description">
                    <i>"This case study is accompanied by "before and after" mockups to visually demonstrate the improvements made across these
                    projects, showcasing the tangible impact of thoughtful UX design."</i>
                </p>
            </section>

            {/* Job Profile Accelerator Section */}
            <section className="case-study-section">
                <h2>Job Profile Accelerator - Homepage & Source Profile Summary Page</h2>

                <div className="cs-arrow-grid-rows">
                    {/* Homepage Before/After */}
                    <div className="cs-grid-row">
                        <div>
                            <img src={jpaBeforeHome} alt="Initial Homepage" />
                            <h4 className="before-title">Before: Initial Homepage</h4>
                        </div>
                        <div className="cs-arrow-center">
                            <i className="fa-solid fa-arrow-right arrow-icon-between desktop-only"></i>
                            <i className="fa-solid fa-arrow-down arrow-icon-between mobile-only"></i>
                        </div>
                        <div>
                            <img src={jpaAfterHome} alt="Final Homepage" />
                            <h4 className="after-title">After: Final Homepage</h4>
                        </div>
                    </div>

                    {/* Alternate Options */}
                    <div className="cs-grid-row">
                        <div>
                            <img src={jpaOption1} alt="Alternate Option 1" />
                            <h4 className="alternate-title">Alternate Option 1</h4>
                        </div>
                        <div className="cs-arrow-center">
                            <i className="fa-solid fa-arrow-right arrow-icon-between desktop-only"></i>
                            <i className="fa-solid fa-arrow-down arrow-icon-between mobile-only"></i>
                        </div>
                        <div>
                            <img src={jpaOption2} alt="Alternate Option 2" />
                            <h4 className="alternate-title">Alternate Option 2</h4>
                        </div>
                    </div>

                    {/* Profile Before/After */}
                    <div className="cs-grid-row">
                        <div>
                            <img src={jpaBeforeProfile} alt="Initial Profile Summary" />
                            <h4 className="before-title">Before: Initial Profile Summary</h4>
                        </div>
                        <div className="cs-arrow-center">
                            <i className="fa-solid fa-arrow-right arrow-icon-between desktop-only"></i>
                            <i className="fa-solid fa-arrow-down arrow-icon-between mobile-only"></i>
                        </div>
                        <div>
                            <img src={jpaAfterProfile} alt="Final Profile Summary" />
                            <h4 className="after-title">After: Final Profile Summary</h4>
                        </div>
                    </div>
                </div>

                <h3>Problem Statement</h3>
                <p>
                    Managing job profiles across various departments can be complicated and disconnected. The Job Profile Accelerator project
                    aimed to simplify this process, making it easier for consultants and reviewers to handle job profiles efficiently.
                    Additionally, the Source Profile Summary page required specific enhancements to better meet user needs and improve overall usability.
                </p>

                <h3>Design Process</h3>
                <ul className="cs-list">
                    <li><strong>Homepage:</strong> I designed a clean and functional homepage that allowed users to navigate effortlessly, improving their overall experience from the first interaction.</li>
                    <li><strong>Source Profile Summary Page Adjustments:</strong>
                        <ul>
                            <li><strong>Graph Redesign:</strong> Changed the vertical bar graph to a horizontal one as per client specifications, making the data easier to read and understand.</li>
                            <li><strong>Iconography:</strong> Enhanced the icons on the left panel to better match the page titles, ensuring the interface was both cohesive and intuitive.</li>
                        </ul>
                    </li>
                </ul>

                <h3>Solution</h3>
                <p>
                    The final design introduced a sleek and intuitive dashboard that streamlined the job profile management process.
                    By simplifying the workflow and making the interface more user-friendly, the updated homepage and Source Profile
                    Summary page significantly improved efficiency for consultants and reviewers.
                </p>

                <div className="prototype-buttons">
                    <a
                        href="https://www.figma.com/design/Ch86xHTaiccd8RtzBgTvR8/My-Designs?node-id=1666-19285&t=ml80RYmeq4LNh4rC-0"
                        className="cs-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Explore My Playground
                    </a>
                </div>
            </section>

            {/* AMIS Dashboard Section */}
            <section className="case-study-section">
                <h2>AMIS Dashboard</h2>

                <div className="cs-arrow-grid-rows">
                    <div className="cs-grid-row">
                        <div>
                            <img src={amisBefore} alt="Initial AMIS Dashboard" />
                            <h4 className="before-title">Before: Initial Dashboard</h4>
                        </div>
                        <div className="cs-arrow-center">
                            <i className="fa-solid fa-arrow-right arrow-icon-between desktop-only"></i>
                            <i className="fa-solid fa-arrow-down arrow-icon-between mobile-only"></i>
                        </div>
                        <div>
                            <img src={amisAfter} alt="Revamped AMIS Dashboard" />
                            <h4 className="after-title">After: Revamp Dashboard</h4>
                        </div>
                    </div>
                </div>

                <h3>Problem Statement</h3>
                <p>
                    The original AMIS dashboard suffered from poor visual design, including unengaging headers and misaligned elements,
                    which resulted in a suboptimal user experience. The project goal was to refresh the interface while maintaining
                    alignment with brand guidelines.
                </p>

                <h3>Design Process</h3>
                <ul className="cs-list">
                    <li><strong>Heuristic Evaluation:</strong> Identified key usability issues through a thorough heuristic evaluation.</li>
                    <li><strong>UI Refinement:</strong> Focused on making targeted adjustments to improve visual hierarchy and align the interface with brand standards.</li>
                    <li><strong>User Feedback:</strong> Gathered insights from stakeholders to ensure the redesign met both user and business needs.</li>
                </ul>

                <h3>Solution</h3>
                <p>
                    The updated AMIS dashboard featured subtle but impactful changes. The color scheme was adjusted for better contrast
                    and alignment issues were resolved, making the dashboard more visually appealing and easier to navigate.
                </p>

                <div className="prototype-buttons">
                    <a
                        href="https://www.figma.com/design/Ch86xHTaiccd8RtzBgTvR8/My-Designs?node-id=0-1&p=f&t=2TuMRPWY6VNuTRdR-0"
                        className="cs-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Explore My Playground
                    </a>
                </div>
            </section>

            {/* Citi PBWM Portal Section */}
            <section className="case-study-section">
                <h2>Citi PBWM Portal - Dashboard Revamp</h2>

                <div className="cs-arrow-grid-rows">
                    {/* Main Before/After */}
                    <div className="cs-grid-row">
                        <div>
                            <img src={pbwmBefore} alt="Initial PBWM Dashboard" />
                            <h4 className="before-title">Before: Initial Dashboard</h4>
                        </div>
                        <div className="cs-arrow-center">
                            <i className="fa-solid fa-arrow-right arrow-icon-between desktop-only"></i>
                            <i className="fa-solid fa-arrow-down arrow-icon-between mobile-only"></i>
                        </div>
                        <div>
                            <img src={pbwmAfter} alt="Final PBWM Dashboard" />
                            <h4 className="after-title">After: Finalized Dashboard Design</h4>
                        </div>
                    </div>

                    {/* Alternate Options */}
                    <div className="cs-grid-row">
                        <div>
                            <img src={pbwmOption1} alt="PBWM Alternate Option 1" />
                            <h4 className="alternate-title">Alternate Option 1</h4>

                        </div>
                        <div className="cs-arrow-center">
                            <i className="fa-solid fa-arrow-right arrow-icon-between desktop-only"></i>
                            <i className="fa-solid fa-arrow-down arrow-icon-between mobile-only"></i>
                        </div>
                        <div>
                            <img src={pbwmOption2} alt="PBWM Alternate Option 2" />
                            <h4 className="alternate-title">Alternate Option 2</h4>
                        </div>
                    </div>
                </div>

                <h3>Problem Statement</h3>
                <p>
                    The existing Citi PBWM (Personal Banking & Wealth Management) portal dashboard needed improvements in terms of
                    visual appeal and usability. The goal was to enhance the user interface while adhering to brand guidelines and
                    ensuring the dashboard remained cool and not overwhelming for users.
                </p>

                <h3>Design Process</h3>
                <ul className="cs-list">
                    <li><strong>Iconography:</strong> Improved the iconography by selecting better-suited icons that made the interface more intuitive and aligned with user expectations.</li>
                    <li><strong>Card Design:</strong> Provided multiple design options for the dashboard cards, considering various user scenarios to make the interface versatile.</li>
                    <li><strong>Color Scheme:</strong> Adjusted the color palette to be visually appealing without being harsh or bold, focusing on a balance between attractiveness and functionality.</li>
                    <li><strong>UX Principles:</strong> Applied best practices in UX design, focusing on user-centered improvements while infusing creativity to meet client requirements.</li>
                </ul>

                <h3>Solution</h3>
                <p>
                    The final dashboard design for the Citi PBWM portal was a combination of improved iconography, thoughtfully designed cards,
                    and a harmonious color scheme. These changes resulted in a visually appealing and user-friendly dashboard that aligned with
                    both brand guidelines and user needs.
                </p>

                <div className="prototype-buttons">
                    <a
                        href="https://www.figma.com/design/NVPVKidIlIVLzxwogb7xdK/Collibra?node-id=412-4555&t=zx5S5xjUNuzG6ShH-0"
                        className="cs-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Explore My Playground
                    </a>
                </div>
            </section>

            {/* Time Tracker Application Section */}
            <section className="case-study-section">
                <h2>Time Tracker Application</h2>

                <div className="cs-grid-row">
                    <div>
                        <img src={timeTracker1} alt="Time Tracker UI 1" />
                    </div>
                    <div className="cs-arrow-center">
                        <i className="fa-solid fa-arrow-right arrow-icon-between desktop-only"></i>
                        <i className="fa-solid fa-arrow-down arrow-icon-between mobile-only"></i>
                    </div>
                    <div>
                        <img src={timeTracker2} alt="Time Tracker UI 2" />
                    </div>
                </div>

                <h3>Problem Statement</h3>
                <p>
                    While Jira is a powerful tool, its complexity can be overwhelming for first-time users. The Time Tracker Application
                    was designed as a simpler alternative, focusing on intuitive navigation and a user-friendly interface tailored for
                    the Citi Bank projects.
                </p>

                <h3>Design Process</h3>
                <ul className="cs-list">
                    <li><strong>Competitive Analysis:</strong> Conducted a thorough analysis of existing tools to identify strengths and weaknesses.</li>
                    <li><strong>User-Centered Design:</strong> Engaged in extensive user research to understand the specific needs of Citi Bank employees.</li>
                    <li><strong>Collaboration:</strong> Worked closely with Ridhh Verma, a seasoned UX designer, to develop a solution that balanced functionality with ease of use.</li>
                    <li><strong>Iterative Prototyping:</strong> Developed multiple prototypes, refining the design through user feedback and testing.</li>
                </ul>

                <h3>Solution</h3>
                <p>
                    The final application provided a streamlined experience, making it easy for users to track work without the steep
                    learning curve associated with Jira. The interface was designed to be both powerful and accessible, ensuring that
                    users could efficiently manage their tasks.
                </p>

                <div className="prototype-buttons">
                    <a
                        href="https://www.figma.com/design/JsccrJunX4D6jfMaMh0TUt/Time-Tracker?node-id=902-19&t=eSC0SoDgsWMxueOS-1"
                        className="cs-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Explore My Playground
                    </a>
                </div>
            </section>

            {/* File Upload Status & Activity Tracker Section */}
            <section className="case-study-section">
                <h2>File Upload Status & Activity Tracker</h2>

                <div className="cs-arrow-grid-rows">
                    <div className="cs-grid-row">
                        <div>
                            <img src={fileTrackerBefore} alt="Legacy File Tracker" />
                            <h4 className="before-title">Legacy Design</h4>
                        </div>
                        <div className="cs-arrow-center">
                            <i className="fa-solid fa-arrow-right arrow-icon-between desktop-only"></i>
                            <i className="fa-solid fa-arrow-down arrow-icon-between mobile-only"></i>
                        </div>
                        <div>
                            <img src={fileTrackerAfter} alt="Refined File Tracker" />
                            <h4 className="after-title">Refined Design</h4>
                        </div>
                    </div>
                </div>

                <h3>Problem Statement</h3>
                <p>
                    The existing solution for tracking file uploads and activities was inefficient and time-consuming, particularly for
                    developers. The goal was to create a streamlined application that allowed for easy entries and made it simpler for
                    team leads to track activities and leaves.
                </p>

                <h3>Design Process</h3>
                <ul className="cs-list">
                    <li><strong>Problem Analysis:</strong> Conducted an in-depth analysis to understand the limitations of the current system.</li>
                    <li><strong>User Research & Feedback:</strong> Collected insights from developers and team leads to inform the design process.</li>
                    <li><strong>Iterative Design:</strong> Created and refined prototypes based on user feedback, focusing on simplifying the workflow.</li>
                    <li><strong>Usability Testing:</strong> Performed usability tests to ensure the design was intuitive and met user needs.</li>
                </ul>

                <h3>Solution</h3>
                <p>
                    The resulting application significantly reduced the time required to manage file uploads and track activities.
                    The user flow was simplified, making it easier for both developers and team leads to complete their tasks efficiently.
                </p>

                <div className="prototype-buttons">
                    <a
                        href="https://www.figma.com/design/Ch86xHTaiccd8RtzBgTvR8/My-Designs?node-id=0-1&t=YnkG7zRANeKqwj1L-1"
                        className="cs-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Explore My Playground
                    </a>
                </div>
            </section>

            {/* Conclusion Section */}
            <section className="case-study-intro">
                <h2>Conclusion</h2>
                <p className="project-description">
                    Through these projects, I've gained invaluable experience in applying user-centered design principles to solve complex
                    problems. Whether it's a complete redesign or targeted improvements, my focus has always been on enhancing usability
                    and efficiency. By involving users throughout the design process and iterating based on their feedback, I've been able
                    to deliver solutions that not only meet but exceed expectations.
                </p>
            </section>

            {/* Navigation */}
            <div className="case-study-nav">
                <a href="/" className="cs-button outline back-btn">
                    <i className="fas fa-arrow-left"></i> Back to Home
                </a>
                <a href="/byblos" className="cs-button next-btn">
                    Next Project <i className="fas fa-arrow-right"></i>
                </a>
            </div>

            <div className="separator"></div>
            <Footer />
        </main>
    );
};

export default Accenture;