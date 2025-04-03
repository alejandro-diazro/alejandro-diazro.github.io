import React from 'react';
import SMmap from '../../../assets/shelley-map.gif';
import SMnote from '../../../assets/shelley-note.gif';
import SMcontroller from '../../../assets/shelley-controller.gif';
import ProjectTitle from "../ProjectTitle";
import {Link} from "react-router-dom";

const ShelleyManorDetail = ({ onBack }) => {
    return (
        <>
            <ProjectTitle
                title="Shelley Manor"
                subtitle="Unreal Engine 5.2"
                team="18 (8 programmers, 7 artists and 3 game designers)"
                duration="10 months | September 2023 - June 2024"
            />
            <div className="portfolio">
                <iframe src="https://www.youtube.com/embed/uukJZx18KDY"
                        title="Tráiler Shelley Manor.  Videojuego desarrollado por alumnos de ESAT Valencia 2023 2024."
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p>
                    Third person puzzle game, with fixed cameras in the style of the old resident evil games, made in UE
                    5.2 by a multidisciplinary team.
                </p>
                <p>
                    Find your way through a puzzle-filled manor while barely dodging human eating monsters. You wake up
                    in a dark room with one main objective: escape those sharpened teeth. However you shall not worry,
                    you will meet friends along the way.
                </p>
                <p>
                    In this project we have used AGILE methodologies and the Trello platform for project management.
                    Shelley Manor is currently <a href={"https://store.steampowered.com/app/2999270/Shelley_Manor/"}>available on steam</a>. Also the game has been nominated, Quirino Awards for
                    Best Animation For Video Game, Best Hobby Game TOP 5 of the GDWC and Finalist in Best Student Game
                    at gamescom latan .
                </p>
                <h2>My Rol in this Project</h2>
                <p>My primary task in this project was related to the interface, including the implementation of systems
                    connected to it, such as the inventory system and the map system, as well as the development of all
                    the menus. I also handled the implementation of sound and provided support to the other programmers
                    with their remaining tasks.
                </p>
                <div className="header-grid">
                    <div className={"header-grid-card card small"}>
                        <h3>UI 💻</h3>
                        <p>Designed and implemented the user interface, including all menus, ensuring intuitive
                            navigation and a polished player experience.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Sound 🔉</h3>
                        <p>Integrated sound effects and audio cues to enhance immersion and align with gameplay events.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Map System 🗺️</h3>
                        <p>Implemented the map system, providing players with a clear and functional navigation tool.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Inventory System 📦</h3>
                        <p>Developed the inventory system, enabling efficient item management and interaction.
                        </p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Cinematic implementation 🎞️️</h3>
                        <p>The implementation of 2d cinematics</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Note System 🗒️️️</h3>
                        <p>Implemented the system for make the lore of the game.</p>
                    </div>
                </div>
                <div className="galery">
                    <div className="galery-card">
                        <img src={SMmap}/>
                    </div>
                    <div className="galery-card">
                        <img src={SMnote}/>
                    </div>
                    <div className="galery-card">
                        <img src={SMcontroller}/>
                    </div>
                </div>
                <h2>Making of</h2>
                <iframe src="https://www.youtube.com/embed/MLaAiL0HdHE?si=cENz5ikFNsp02R-9"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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

            export default ShelleyManorDetail;