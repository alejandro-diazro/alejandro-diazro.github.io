import React from 'react';
import hicrew1 from '../../../assets/hicrew1.png';
import hicrew2 from '../../../assets/hicrew2.png';
import ProjectTitle from "../ProjectTitle";

const HiCrewDetail = ({ onBack }) => {
    return (
        <>
            <ProjectTitle
                title="HiCrew!"
                subtitle="React | JS | CSS | NestJS"
                team="1 (me)"
                duration="3 months | November 2024 - January 2025"
            />
            <div className="portfolio">
                <p>
                    HiCrew! is a web application crafted for virtual airlines operating within the IVAO network.
                    Designed to streamline pilot management and flight tracking, it integrates seamlessly with IVAO's
                    Single Sign-On (SSO) system and offers a lightweight, ACARS-free solution for logging flights.
                </p>
                <h2>My Role in this Project</h2>
                <p>
                    I independently designed and developed HiCrew! from the ground up, delivering a robust tool for
                    virtual aviation enthusiasts. The app features IVAO SSO authentication, real-time flight tracking,
                    and an intuitive interface, all built to enhance the experience of virtual airline members.
                </p>
                <div className="header-grid">
                    <div className={"header-grid-card card small"}>
                        <h3>UI/UX Design 💻</h3>
                        <p>
                            Created a clean, responsive user interface tailored for virtual pilots, ensuring easy
                            navigation and accessibility across devices.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>IVAO SSO Login 🔑</h3>
                        <p>
                            Integrated IVAO's Single Sign-On system, enabling secure and seamless authentication for
                            users directly through the IVAO network.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Flight Tracking ✈️</h3>
                        <p>
                            Developed a custom flight tracking system that logs flights without relying on ACARS,
                            simplifying the process for virtual pilots.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Backend with NestJS ⚙️</h3>
                        <p>
                            Built a lightweight backend using NestJS to handle data processing and API interactions,
                            ensuring efficient performance.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Data Management 📊</h3>
                        <p>
                            Implemented tools to manage pilot and flight data, providing virtual airlines with an
                            organized and reliable platform.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Cross-Device Support 📱</h3>
                        <p>
                            Optimized the app for desktops, tablets, and smartphones, delivering a consistent experience
                            for users on any device.
                        </p>
                    </div>
                </div>
                <div className="galery">
                    <div className="galery-card">
                        <img src={hicrew1}/>
                    </div>
                    <div className="galery-card">
                        <img src={hicrew2}/>
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

export default HiCrewDetail;