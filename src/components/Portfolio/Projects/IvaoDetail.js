import React from 'react';
import ProjectTitle from "../ProjectTitle";

const IvaoDetail = ({ onBack }) => {
    const projectLinks = {
        "Event System": "https://new.es.ivao.aero/eventos/",
        "Virtual Airline System": "https://new.es.ivao.aero/aerolineas/",
        "Cavok System": "https://cavok.es.ivao.aero/",
        "Wiki": "https://wiki.es.ivao.aero/",
    };

    const handleCardClick = (projectTitle) => {
        const url = projectLinks[projectTitle];
        if (url) {
            window.open(url, "_blank");
        }
    };

    return (
        <>
            <ProjectTitle
                title="Web 2.0 IVAO Spain"
                subtitle="Unreal Engine 5.2"
                team="4 (4 programmers)"
                duration="WIP | June 2023 - Current"
            />
            <div className="portfolio">
                <p>
                    International Virtual Aviation Organisation VZW (IVAO) is a non-profit association which operates a
                    free-of-charge online flight-simulation network.
                </p>
                <p>
                    My tasks in webmaster is project manager within the team apart from working on multiple projects
                    that the division has (React, NestJS, PHP, SQL, Python).
                </p>
                <h2>My projects in this organisation</h2>
                <div className="header-grid">
                    <div
                        className={"header-grid-card card small"}
                        onClick={() => handleCardClick("Event System")}
                        style={{cursor: "pointer"}}
                    >
                        <h3>Event System</h3>
                        <p>
                            This system allows users to reserve spaces autonomously, without the intervention of the web
                            department staff. The development of the system has been done mainly by me, with the
                            collaboration of a member of the department.
                        </p>
                    </div>
                    <div
                        className={"header-grid-card card small"}
                        onClick={() => handleCardClick("Virtual Airline System")}
                        style={{cursor: "pointer"}}
                    >
                        <h3>Virtual Airline System</h3>
                        <p>
                            This system allows virtual airlines to have their own space to show themselves properly, as
                            well as including a Python tracking system that collects information from virtual airline
                            websites about the pilots they have.
                        </p>
                    </div>
                    <div
                        className={"header-grid-card card small"}
                        onClick={() => handleCardClick("Cavok System")}
                        style={{cursor: "pointer"}}
                    >
                        <h3>Cavok System</h3>
                        <p>
                            This system is an academy designed so that users can learn within the network. It also has
                            an internal appointment management system.
                        </p>
                    </div>
                    <div
                        className={"header-grid-card card small"}
                        onClick={() => handleCardClick("Wiki")}
                        style={{cursor: "pointer"}}
                    >
                        <h3>Wiki</h3>
                        <p>
                            This system acts as an encyclopedia for IVAO Spain, providing users with detailed
                            information and educational resources within the network. It also includes an internal
                            appointment management system to facilitate organization and coordination.
                        </p>
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

export default IvaoDetail;