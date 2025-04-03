import React from 'react';
import ProjectTitle from "../ProjectTitle";

const KeyboardDetail = ({ onBack }) => {
    return (
        <>
            <ProjectTitle
                title="Keyboard Party"
                subtitle="Unity | C# | Blender"
                team="2 (2 programmers)"
                duration="1 month | April 2023 - May 2023"
            />
            <div className="portfolio">
                <iframe src="https://www.youtube.com/embed/cC5MaIs3f0k?si=vJdIBBfQ7ZLslET1"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p>
                    A multiplayer game made with the Unity engine, made as part of the HND design course in Computer
                    Science. The goal was to make a game with a unique input method: using the whole keyboard, using
                    more than 30 keys. This project was developed by my partner <a href={"https://www.linkedin.com/in/enrique-tarin-12436a222/"}>Enrique Tarin</a> and me.
                </p>
                <p>
                    This project helped me to deepen my knowledge on how to develop an online game in Unity using Unity Gaming Services, focusing specifically on its replay system. In addition to the online system, the game features a single-player mode with several minigames.
                </p>
                <h2>My Rol in this Project</h2>
                <p>In this project, I handled all the UI/UX design and implementation, developed the game options system, implemented the online multiplayer system using Unity Gaming Services, created the dialogue system, and built the lazer game minigame. Additionally, I modeled all the 3D assets visible in the game.
                </p>
                <div className="header-grid">
                    <div className={"header-grid-card card small"}>
                        <h3>UI/UX 💻</h3>
                        <p>Designed and implemented the entire UI/UX, ensuring an intuitive and visually appealing
                            player experience.</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Game Options ⚙️</h3>
                        <p>Developed the game options system, allowing players to customize settings and controls
                            seamlessly.</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Online System 🌐</h3>
                        <p>Implemented the online multiplayer system using Unity Gaming Services, enabling smooth
                            real-time gameplay.</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Dialogue System 💬</h3>
                        <p>Created the dialogue system to deliver narrative content and enhance player engagement.</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Lazer Game 🎮</h3>
                        <p>Built the lazer game minigame, integrating unique keyboard-based mechanics for a fun
                            challenge.</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>3D Modeling 🖼️</h3>
                        <p>Modeled all 3D assets in the game, contributing to its visual design and environment.</p>
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

export default KeyboardDetail;