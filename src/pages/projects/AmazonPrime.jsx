// AmazonPrime.jsx — Final Case Study Page for Amazon Prime 📺

import React from 'react';
import Footer from '../../components/Footer';

// ✅ Image assets
import img1 from '../../assets/images/amazon-content-listing-1.png';
import img2 from '../../assets/images/amazon-content-listing-2.png';
import img3 from '../../assets/images/amazon-content-details-1.png';
import img4 from '../../assets/images/amazon-content-details-2.png';
import img5 from '../../assets/images/amazon-watchlist-management-1.png';
import img6 from '../../assets/images/amazon-watchlist-management-2.png';
import img7 from '../../assets/images/amazon-search-history-1.png';
import img8 from '../../assets/images/amazon-search-history-2.png';
import img9 from '../../assets/images/amazon-personalized-recommendations-1.png';
import img10 from '../../assets/images/amazon-personalized-recommendations-2.png';
import img11 from '../../assets/images/amazon-create-new-watchlist-1.png';
import img12 from '../../assets/images/amazon-create-new-watchlist-2.png';
import metrics from '../../assets/images/amazon-usability-testing-metrics.png';
import procedure from '../../assets/images/amazon-usability-testing-procedure.png';

const AmazonPrime = () => {
    return (
        <main className="case-study-page amazon-case-study">

            <section className="case-study-intro">
                <h1>Amazon Prime Video - Usability Testing</h1>
                <p className="project-type">UI/UX Case Study · 2024</p>
                <p className="project-description">
                    In the fast-changing world of digital streaming, ensuring that users have a great experience is key. This project focused on improving Amazon Prime Video's usability through comprehensive testing and evaluation.
                </p>
            </section>

            <section className="case-study-section cs-two-col">
                <div>
                    <h3>Project Overview</h3>
                    <p>We aimed to identify usability issues, gather useful data, and provide recommendations to enhance the platform, making it more user-friendly and enjoyable.</p>
                </div>
                <div>
                    <h3>Task and Scenarios</h3>
                    <p>We created scenarios that mimic real-life situations, acting as scripts that guided users through tasks. This helped us observe usability and collect meaningful feedback.</p>
                </div>
            </section>

            <section className="case-study-section cs-two-col">
                <div>
                    <h3>My Role</h3>
                    <p>Group project with fellow UX designers - my contributions:</p>
                    <ul className="cs-list">
                        <li>Conducting usability testing</li>
                        <li>Performing heuristic evaluations</li>
                        <li>Organizing findings through affinity mapping</li>
                    </ul>
                </div>
                <div>
                    <h3>Goals</h3>
                    <p>We wanted to evaluate Prime Video's web interface, focusing on:</p>
                    <ul className="cs-list">
                        <li>Navigation</li>
                        <li>Content discovery</li>
                        <li>Watchlist management</li>
                        <li>Playback experience</li>
                    </ul>
                </div>
            </section>

            <section className="case-study-section">
                <div>
                    <h3>Methodologies</h3>
                    <ul className="cs-list">
                        <li><strong>Heuristic Evaluation</strong>: We assessed the website against established usability standards, identifying issues and making recommendations</li>
                        <li><strong>Usability Testing</strong>: We tested the platform with real users to gather insights and improve satisfaction</li>
                        <li><strong>Affinity Mapping</strong>: We organized data to visualize usability issues and inform design improvements</li>
                    </ul>
                </div>
            </section>

            <section className="case-study-section">
                <div>
                    <h3>Usability Testing Metrics</h3>
                    <img src={metrics} alt="Usability Testing Metrics" className="cs-image" />
                </div>
            </section>
            <section className="case-study-section cs-two-col">
                <div>
                    <h3>Usability Testing Procedure</h3>
                    <ul className="cs-list">
                        <li>Screen Recording Software: Captured participants' interactions to facilitate in-depth analysis.</li>
                        <li>Observational Documentation: Recorded participants' verbal and non-verbal expressions for supplementary insights.</li>
                    </ul>
                </div>
                <div>
                    <img src={procedure} alt="Usability Testing Procedure" className="cs-image" />
                </div>
            </section>
            <section className="case-study-section cs-two-col">
                <div>
                    <h3>Heuristic Evaluation</h3>
                    <p><strong>Tasks for New Users</strong></p>
                    <ul className="cs-list">
                        <li>Sign up for Amazon Prime Video</li>
                        <li>Rent a movie without subscribing yearly</li>
                    </ul>

                    <p><strong>Tasks for Existing Users</strong></p>
                    <ul className="cs-list">
                        <li>Find new or fresh content</li>
                        <li>Explore content based on mood</li>
                        <li>Add movies/series to the watchlist</li>
                        <li>Watch content with friends</li>
                        <li>Cancel subscription</li>
                        <li>Adjust content quality settings</li>
                    </ul>
                </div>
                <div>
                    <h3>Identified Issues</h3>
                    <ul className="cs-list">
                        <li>
                            <strong>No easy navigation for new releases</strong><br />
                            <em>Heuristic:</em> Flexibility and efficiency of use · <strong>Severity: 3</strong>
                        </li>
                        <li>
                            <strong>No notifications for "New Releases" based on preferences</strong><br />
                            <em>Heuristic:</em> Recognition rather than recall · <strong>Severity: 2</strong>
                        </li>
                        <li>
                            <strong>Search bar doesn't retain search history</strong><br />
                            <em>Heuristic:</em> Recognition rather than recall · <strong>Severity: 3</strong>
                        </li>
                        <li>
                            <strong>Difficulty selecting specific genres</strong><br />
                            <em>Heuristic:</em> Flexibility and efficiency of use · <strong>Severity: 1</strong>
                        </li>
                        <li>
                            <strong>Difficulty organizing watchlist by genre</strong><br />
                            <em>Heuristic:</em> User control and freedom · <strong>Severity: 4</strong>
                        </li>
                        <li>
                            <strong>Unclear action to remove items from the watchlist</strong><br />
                            <em>Heuristic:</em> Match between system and real world · <strong>Severity: 1</strong>
                        </li>
                        <li>
                            <strong>Need to remove multiple movies at once</strong><br />
                            <em>Heuristic:</em> Flexibility and efficiency of use · <strong>Severity: 2</strong>
                        </li>
                    </ul>
                </div>

            </section>
            <section className="case-study-section">
                <div>
                    <h3>Recommendations</h3>
                    <p>During usability testing, we create scenarios that mimic real-life situations to guide users in interacting with the product. These scenarios are like scripts that help users understand what tasks they need to perform. By doing this, we can observe how well the product works for them and whether it meets their needs. This process helps us gather valuable feedback to improve the product and make it more user-friendly</p>
                </div>

                {/* Image Sections */}
                <section className="case-study-section-recommendations">
                    <h2>Content Listing</h2>
                    <div className="cs-flex-images">
                        <img src={img1} alt="Content Listing 1" />
                        <img src={img2} alt="Content Listing 2" />
                    </div>
                </section>

                <section className="case-study-section-recommendations">
                    <h2>Content Details</h2>
                    <div className="cs-flex-images">
                        <img src={img3} alt="Content Details 1" />
                        <img src={img4} alt="Content Details 2" />
                    </div>
                </section>

                <section className="case-study-section-recommendations">
                    <h2>Watchlist Management</h2>
                    <div className="cs-flex-images">
                        <img src={img5} alt="Watchlist Management 1" />
                        <img src={img6} alt="Watchlist Management 2" />
                    </div>
                </section>

                <section className="case-study-section-recommendations">
                    <h2>Search History</h2>
                    <div className="cs-flex-images">
                        <img src={img7} alt="Search History 1" />
                        <img src={img8} alt="Search History 2" />
                    </div>
                </section>

                <section className="case-study-section-recommendations">
                    <h2>Personalized Recommendations</h2>
                    <div className="cs-flex-images">
                        <img src={img9} alt="Recommendations 1" />
                        <img src={img10} alt="Recommendations 2" />
                    </div>
                </section>

                <section className="case-study-section-recommendations">
                    <h2>Create New Watchlist</h2>
                    <div className="cs-flex-images">
                        <img src={img11} alt="Create Watchlist 1" />
                        <img src={img12} alt="Create Watchlist 2" />
                    </div>
                </section>
            </section>
            <section className="case-study-section cs-two-col">
                <div>
                    <h3>Key Findings</h3>
                    <ul className="cs-list">
                        <li>Navigation was not intuitive for new users</li>
                        <li>Content discovery lacked clear categorization and context</li>
                        <li>Watchlist management was buried or hard to access</li>
                        <li>Feedback mechanisms (ratings, reviews) were underutilized</li>
                    </ul>
                </div>
                <div>
                    <h3>Key Takeaways</h3>
                    <ul className="cs-list">
                        <li>Improved in conducting structured usability testing</li>
                        <li>Strengthened communication & empathy with users</li>
                        <li>Applied Nielsen’s heuristics effectively</li>
                        <li>Learned the value of iterative design</li>
                    </ul>
                </div>
            </section>

            <section className="case-study-intro">
                <h2>Conclusion</h2>
                <p className="project-description">
                    This case study helped me grow as a UX researcher, enhancing my technical and soft skills while identifying real improvements for Amazon Prime Video.
                </p>
            </section>

            {/* Navigation */}
            <div className="case-study-nav">
                <a href="/citi" className="cs-button outline back-btn">
                    <i className="fas fa-arrow-left"></i> Back to Citi
                </a>
                <a href="/accenture" className="cs-button next-btn">
                    Next Project <i className="fas fa-arrow-right"></i>
                </a>
            </div>

            <div className="separator"></div>
            <Footer />
        </main>
    );
};

export default AmazonPrime;