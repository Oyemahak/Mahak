import React from "react";
import Footer from "../components/Footer";
import "../styles/trash.css";
import "../styles/webProjects.css";
import lostAstronaut from "../assets/images/404.gif";

const NotFound = () => {
    return (
        <>
            <main className="case-study-page">
                <section className="case-study-intro not-found-wrapper">
                    <div className="intro-right">
                        <p className="cta">Even our QR codes couldn’t find this page…</p>
                        <img
                            src={lostAstronaut}
                            alt="Lost astronaut floating in space"
                            className="animated-404-gif"
                        />
                    </div>
                    <div className="intro-left">
                        <h1>404 - Page Not Found</h1>
                        <p className="project-description">
                            Uh-oh! You've wandered off the grid. This page doesn't exist - or maybe it packed its bags and left the internet 🌍✈️
                        </p>
                        <p className="project-description">
                            Let's take you back where things make sense.
                        </p>

                        <div className="button-group">
                            <a href="/" className="button-glass">🏠 Go Home</a>
                            <a href="/play" className="button-glass">🎯 Explore My Micro Game</a>
                        </div>
                    </div>
                </section>

                <div className="separator"></div>
                <Footer />
            </main>
        </>
    );
};

export default NotFound;