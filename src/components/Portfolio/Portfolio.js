import React, { useState } from 'react';
import MainBanner from '../Header/MainBanner';
import shelleyManorItem from '../../assets/shelleyManor.jpg';
import elysiumItem from '../../assets/elysium.png';
import ivaoItem from '../../assets/ivao.png';
import chronosItem from '../../assets/chronos.png';
import keyboardItem from '../../assets/keyboard.png';
import archeryItem from '../../assets/archeryscorer.png';
import hicrewItem from '../../assets/hicrew.png';
import { Link } from 'react-router-dom';
import './portfolio.css';
import ShelleyManorDetail from "./Projects/ShelleyManorDetail";
import ElisiumEngineDetail from "./Projects/ElisiumEngineDetail";
import KeyboardDetail from "./Projects/KeyboardDetail";
import ChronosDetail from "./Projects/ChronosDetail";
import IvaoDetail from "./Projects/IvaoDetail";

const projects = [
    {
        title: 'Shelley Manor',
        link: 'https://store.steampowered.com/app/2999270/Shelley_Manor/',
        image: shelleyManorItem,
        size: 'medium',
        detailComponent: ShelleyManorDetail,
    },
    {
        title: 'Elysium Engine',
        link: 'https://store.steampowered.com/app/2999270/Shelley_Manor/',
        image: elysiumItem,
        size: 'small',
        detailComponent: ElisiumEngineDetail,
    },
    {
        title: 'Keyboard Party',
        link: 'https://store.steampowered.com/app/2999270/Shelley_Manor/',
        image: keyboardItem,
        size: 'small',
        detailComponent: KeyboardDetail,
    },
    {
        title: 'The Son of Chronos',
        link: 'https://store.steampowered.com/app/2999270/Shelley_Manor/',
        image: chronosItem,
        size: 'medium',
        detailComponent: ChronosDetail,
    },
    {
        title: 'Archery Scorer',
        link: 'https://store.steampowered.com/app/2999270/Shelley_Manor/',
        image: archeryItem,
        size: 'small',
        detailComponent: ShelleyManorDetail,
    },
    {
        title: 'Web 2.0 IVAO Spain',
        link: 'https://store.steampowered.com/app/2999270/Shelley_Manor/',
        image: ivaoItem,
        size: 'small',
        detailComponent: IvaoDetail,
    },
    {
        title: 'HiCrew!',
        link: 'https://store.steampowered.com/app/2999270/Shelley_Manor/',
        image: hicrewItem,
        size: 'small',
        detailComponent: ShelleyManorDetail,
    },
];

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    const handleBackClick = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <MainBanner
                title="Portfolio"
                description=""
                showButton={true}
                buttonText={selectedProject ? "Back to Portfolio" : "Go to Home"}
                onButtonClick={selectedProject ? handleBackClick : null}
            />

            {selectedProject ? (
                <selectedProject.detailComponent onBack={handleBackClick}/>
            ) : (
                <>
                <div className="portfolio about-me">
                    <h2>About Me</h2>
                    <p>My name is <b>Alejandro Díaz Rodríguez</b>, I'm <b>22 years old</b> and I'm from Tenerife, in the beautiful <b>Canary Islands</b> . I am a videogame programmer, a field in which I find immense satisfaction. Since I was a child, I have felt a deep passion for videogames, and this passion has been divided into two main areas: <b>gameplay and graphics</b>.</p>
                    <p>I am constantly looking for <b>new ways to improve my skills and expand my knowledge in the field of game development</b>, and I am always willing to face new challenges that allow me to grow professionally and contribute to the evolution of this exciting industry.</p>
                </div>
                <div className="header-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`header-grid-card card ${project.size === 'large' ? 'large' : project.size === 'medium' ? 'medium' : 'small'}`}
                            onClick={() => handleCardClick(project)}
                        >
                            {project.image && (
                                <img src={project.image} alt={project.title} className="card-image"/>
                            )}
                            <h3>{project.title}</h3>
                            {project.description && <p>{project.description}</p>}
                            <Link to="#" className="card-link" onClick={(e) => e.preventDefault()}>
                                See more about project
                            </Link>
                        </div>
                    ))}
                </div>
                </>
            )}
        </>
    );
};


export default Portfolio;