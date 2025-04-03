import React from 'react';
import ProjectTitle from "../ProjectTitle";

const ElisiumEngineDetail = ({ onBack }) => {
    return (
        <>
            <ProjectTitle
                title="Elysium Engine"
                subtitle="C++ | OpenGL | DirectX11"
                team="2 (2 programmers)"
                duration="8 months | October 2023 - May 2024"
            />
            <div className="portfolio">
                <iframe src="https://www.youtube.com/embed/WPwDoXu5cbg?si=QA6GWbQ2X0C9j6Q0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p>
                    A proprietary engine written in C++ that uses OpenGL and DirectX, and integrates physics, sound and physics-based rendering. The engine was developed by <a href={"https://www.linkedin.com/in/joel-vinaroz-gim%C3%A9nez-474b3a2b8/"}>Joel Vinaroz</a> and myself during our last year of an HND in Computer Science, for the subject of Engine Programming
                </p>
                <h2>My Rol in this Project</h2>
                <p>In this project, I ported OpenGL to DirectX11, developed the logging system, managed the user input, implemented the user interface system, implemented an event system, the scene graph, the camera system, application window management, physics and sound. Apart from some components such as transform, names, etc.
                </p>
                <div className="header-grid">
                    <div className={"header-grid-card card small"}>
                        <h3>DirectX11 💻</h3>
                        <p>Ported the engine's rendering pipeline from OpenGL to DirectX11, enhancing graphical capabilities and performance.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Logging system 📝</h3>
                        <p>Developed a robust logging system to track engine events, errors, and debugging information efficiently.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Input System 🎮️</h3>
                        <p>Managed user input handling, ensuring seamless interaction with the engine via keyboard, mouse, and other devices.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>UI System 🖥️</h3>
                        <p>Designed and implemented the user interface system, providing an intuitive framework for in-engine tools and displays.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Event system 📡️️</h3>
                        <p>Created an event system to facilitate communication between engine components, improving modularity and responsiveness.</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Camera system 📷️️️</h3>
                        <p>Built the camera system, enabling flexible and dynamic control of perspectives within the engine.</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Physics system ⚙️️️</h3>
                        <p>Integrated a physics system to support realistic object interactions and simulations within the engine. (NVIDIA PhysX)</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Sound system 🔊️️️</h3>
                        <p>Implemented the sound system, adding audio support for immersive environmental and event-based effects.</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Scene graph 🌳️️️</h3>
                        <p>Designed the scene graph structure to organize and manage spatial relationships between objects efficiently.</p>
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

export default ElisiumEngineDetail;