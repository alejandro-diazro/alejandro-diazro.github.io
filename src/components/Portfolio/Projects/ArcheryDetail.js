import React from 'react';
import Archery1 from '../../../assets/Archery1.png';
import Archery2 from '../../../assets/Archery2.png';
import Archery3 from '../../../assets/Archery3.png';
import ProjectTitle from "../ProjectTitle";

const ArcheryDetail = ({ onBack }) => {
    return (
        <>
            <ProjectTitle
                title="Archery Scorer"
                subtitle="React | JS | CSS"
                team="1 (me)"
                duration="1 week | March 2025 - March 2025"
            />
            <div className="portfolio">
                <p>
                    Archery Scorer is a mobile-first web application designed to simplify archery scoring. Built with a
                    focus on usability, it leverages the browser's local cache for data storage, eliminating the need
                    for a backend while ensuring a seamless experience for archers on the go.
                </p>
                <h2>My Role in this Project</h2>
                <p>
                    I single-handedly designed and developed the entire application, creating a versatile tool for
                    archery enthusiasts. It features a robust scoring system, local data persistence, PDF export
                    capabilities, and sharing functionality, all tailored for mobile use.
                </p>
                <div className="header-grid">
                    <div className={"header-grid-card card small"}>
                        <h3>UI/UX Design 💻</h3>
                        <p>
                            Crafted an intuitive and responsive user interface optimized for mobile devices, ensuring
                            archers can easily navigate and input scores during practice or competition.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Local Storage 📦</h3>
                        <p>
                            Implemented a local caching system using browser storage to save scores and settings,
                            providing offline functionality without a backend.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>PDF Export 📄</h3>
                        <p>
                            Developed a feature to generate and export scorecards as PDF files, allowing users to save
                            or print their results effortlessly.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Sharing System 📲</h3>
                        <p>
                            Integrated a sharing mechanism to enable users to send their scores via mobile apps or
                            email, enhancing collaboration and record-keeping.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Scoring Modes 🎯</h3>
                        <p>
                            Built a flexible scoring system supporting eliminations, team matches, various target types,
                            and bow styles, catering to diverse archery formats.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Mobile Optimization 📱</h3>
                        <p>
                            Optimized the app for mobile use, ensuring fast performance and a user-friendly experience
                            on smartphones and tablets.
                        </p>
                    </div>
                </div>
                <div className="galery">
                    <div className="galery-card">
                        <img src={Archery3}/>
                    </div>
                    <div className="galery-card">
                        <img src={Archery1}/>
                    </div>
                    <div className="galery-card">
                        <img src={Archery2}/>
                    </div>
                </div>
                <br/>
                <br/>
                <div>
                    <button onClick={onBack} className="btn info">
                        Back to Portfolio
                    </button>
                </div>
            </div>
        </>
    );
};

export default ArcheryDetail;