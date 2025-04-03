import React from 'react';
import ProjectTitle from "../ProjectTitle";

const ChronosDetail = ({ onBack }) => {
    return (
        <>
            <ProjectTitle
                title="The son of Chronos"
                subtitle="Unity | VR | C#"
                team="3 (3 programmers)"
                duration="3 months | March 2023 - May 2023"
            />
            <div className="portfolio">
                <iframe src="https://www.youtube.com/embed/cgSt0yT20UE?si=B6YI6iRlrltXADN6"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p>
                    A VR game based on motion sensors, inspired by Super Hot, made with the Unity engine. This project
                    was developed by <a href={"https://www.linkedin.com/in/joel-vinaroz-gim%C3%A9nez-474b3a2b8/"}>Joel
                    Vinaroz</a>, <a
                    href={"https://www.linkedin.com/in/enrique-tarin-12436a222/"}>Enrique
                    Tarin</a> and myself.
                </p>
                <p>
                    We drew inspiration from the unique gameplay mechanics of Super Hot to craft an immersive VR
                    experience, where time only moves forward when the player moves. The use of motion sensors adds an
                    extra layer of interactivity, allowing players to physically dodge bullets and strategize their
                    movements with precision.
                </p>
                <p>
                    The main goal of our project is to deliver an exciting and immersive experience that fully leverages
                    the capabilities of virtual reality and motion sensors. We hope players will enjoy the combination
                    of strategic action and physical movement we offer in our game.
                </p>
                <h2>My Rol in this Project</h2>
                <p>
                    In this project, I focused on developing the foundational AI systems, designing and implementing the
                    UI/UX, optimizing performance for VR, creating particle effects, crafting level designs, and
                    programming the behavior of melee enemies.
                </p>
                <div className="header-grid">
                    <div className={"header-grid-card card small"}>
                        <h3>AI Basics 🤖</h3>
                        <p>Developed the core AI systems to drive enemy behavior and responsiveness in the VR
                            environment.</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>UI/UX 💻</h3>
                        <p>Designed and implemented the user interface and experience, ensuring intuitive navigation and
                            immersion in VR.</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Optimisation ⚡</h3>
                        <p>Optimized the game’s performance to ensure smooth gameplay and responsiveness on VR
                            hardware.</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Particles ✨</h3>
                        <p>Created particle effects to enhance visual feedback and elevate the game’s atmosphere.</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Level Design 🗺️</h3>
                        <p>Designed engaging levels that complement the motion-based gameplay and VR immersion.</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Melee Enemies ⚔️</h3>
                        <p>Programmed the behavior and mechanics of melee enemies, adding challenge and intensity to
                            combat.</p>
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

export default ChronosDetail;