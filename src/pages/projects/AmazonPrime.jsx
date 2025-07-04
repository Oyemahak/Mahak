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
                    <h3>Usability Testing Procedure</h3>
                    <ul className="cs-list">
                        <li>Screen Recording Software: captured participant interaction.</li>
                        <li>Observational Documentation: noted verbal and non-verbal reactions.</li>
                    </ul>
                </div>
                <div>
                    <img src={procedure} alt="Usability Testing Procedure" className="cs-image" />
                </div>
            </section>

            <section className="case-study-section cs-two-col">
                <div>
                    <h3>My Role</h3>
                    <p>This was a group project with another UX designer. My contributions included:</p>
                    <ul className="cs-list">
                        <li>Conducting usability testing</li>
                        <li>Performing heuristic evaluations</li>
                        <li>Organizing findings through affinity mapping</li>
                    </ul>
                </div>
                <div>
                    <h3>Goals</h3>
                    <ul className="cs-list">
                        <li>Improve navigation and content discovery</li>
                        <li>Enhance watchlist management</li>
                        <li>Simplify the playback experience</li>
                    </ul>
                </div>
            </section>

            <section className="case-study-section">
                <div>
                    <h3>Methodologies</h3>
                    <ul className="cs-list">
                        <li><strong>Heuristic Evaluation</strong>: Evaluated usability standards</li>
                        <li><strong>Usability Testing</strong>: Gathered real user insights</li>
                        <li><strong>Affinity Mapping</strong>: Organized findings into themes</li>
                    </ul>
                </div>
                <div>
                    <img src={metrics} alt="Usability Testing Metrics" className="cs-image" />
                </div>
            </section>

            <section className="case-study-section cs-two-col">
                <div>
                    <h3>Data Analysis</h3>
                    <ul className="cs-list">
                        <li>Collecting, labeling, grouping feedback</li>
                        <li>Affinity mapping & pattern recognition</li>
                        <li>Prioritizing issues & generating insights</li>
                    </ul>
                </div>
                <div>
                    <h3>Key Findings</h3>
                    <p>Issues related to search, navigation, watchlist, and personalization were discovered. Some were:</p>
                    <ul className="cs-list">
                        <li>No navigation for new releases</li>
                        <li>No alerts for preference-based updates</li>
                        <li>No saved search history</li>
                        <li>Unclear watchlist controls</li>
                    </ul>
                </div>
            </section>

            <section className="case-study-section">
                <h3>Heuristic Evaluation Tasks</h3>
                <div className="cs-three-col">
                    <div>
                        <h3>New Users</h3>
                        <ul className="cs-list">
                            <li>Sign up</li>
                            <li>Rent movie without subscription</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Existing Users</h3>
                        <ul className="cs-list">
                            <li>Discover content by mood</li>
                            <li>Add to watchlist</li>
                            <li>Watch with friends</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Advanced Actions</h3>
                        <ul className="cs-list">
                            <li>Cancel subscription</li>
                            <li>Adjust video quality</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="case-study-section cs-two-col">
                <div>
                    <h3>Identified Issues</h3>
                    <ul className="cs-list">
                        <li>Difficulty finding new releases (severity: 3)</li>
                        <li>No search history retention (severity: 3)</li>
                        <li>Watchlist lacks sorting and bulk removal (severity: 4)</li>
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

            {/* Image Sections */}
            <section className="case-study-section">
                <h2>Content Listing</h2>
                <div className="cs-flex-images">
                    <img src={img1} alt="Content Listing 1" />
                    <img src={img2} alt="Content Listing 2" />
                </div>
            </section>

            <section className="case-study-section">
                <h2>Content Details</h2>
                <div className="cs-flex-images">
                    <img src={img3} alt="Content Details 1" />
                    <img src={img4} alt="Content Details 2" />
                </div>
            </section>

            <section className="case-study-section">
                <h2>Watchlist Management</h2>
                <div className="cs-flex-images">
                    <img src={img5} alt="Watchlist Management 1" />
                    <img src={img6} alt="Watchlist Management 2" />
                </div>
            </section>

            <section className="case-study-section">
                <h2>Search History</h2>
                <div className="cs-flex-images">
                    <img src={img7} alt="Search History 1" />
                    <img src={img8} alt="Search History 2" />
                </div>
            </section>

            <section className="case-study-section">
                <h2>Personalized Recommendations</h2>
                <div className="cs-flex-images">
                    <img src={img9} alt="Recommendations 1" />
                    <img src={img10} alt="Recommendations 2" />
                </div>
            </section>

            <section className="case-study-section">
                <h2>Create New Watchlist</h2>
                <div className="cs-flex-images">
                    <img src={img11} alt="Create Watchlist 1" />
                    <img src={img12} alt="Create Watchlist 2" />
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