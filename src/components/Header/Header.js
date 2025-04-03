import React from 'react';
import profileItem from '../../assets/test.jpg';
import { Link } from 'react-router-dom';
import shelleyManorItem from '../../assets/shelleyManor.jpg';
import './header.css'
import MainBanner from "./MainBanner";

const cards = [
    {
        title: 'My portfolio',
        description: 'Know more about me and my projects',
        link: '/portfolio',
        size: 'medium',
    },
    {
        title: 'Blog',
        description: 'Sometimes I feel like writing',
        link: '/blog',
        size: 'small',
    },
    {
        title: 'My last game',
        description: 'Shelley Manor on Steam',
        link: 'https://store.steampowered.com/app/2999270/Shelley_Manor/',
        image: shelleyManorItem,
        size: 'large',
    },
    {
        title: 'Archery Scorer',
        description: 'Web for archery scoring',
        link: 'https://alejandro-diazro.github.io/archery-scorer/',
        size: 'small',
    },
    {
        title: 'Resume (CV)',
        link: 'https://alejandro-diazro.github.io/CV.pdf',
        size: 'small',
    },
    {
        title: 'X',
        link: 'https://x.com/DiazroDev',
        size: 'small',
    },
    {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/alejandro-diazro/',
        size: 'small',
    },
    {
        title: 'GitHub',
        link: 'https://github.com/alejandro-diazro',
        size: 'small',
    },
];

const Header = () => {
    const isAbsoluteUrl = (url) => {
        return /^https?:\/\//.test(url);
    };

    return (
        <>
            <MainBanner
                title="Hi!"
                description="I am Alejandro, I am a programmer and I am probably sleeping or programming right now."
                showButton={false}
            />
                <div className="header-grid">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`header-grid-card card ${card.size === 'large' ? 'large' : card.size === 'medium' ? 'medium' : 'small'}`}
                        >
                            {card.image && (
                                <img src={card.image} alt={card.title} className="card-image"/>
                            )}
                            <h3>{card.title}</h3>
                            {card.description && <p>{card.description}</p>}
                            {isAbsoluteUrl(card.link) ? (
                                <a href={card.link} target="_blank" rel="noopener noreferrer" className="card-link">
                                    See more
                                </a>
                            ) : (
                                <Link to={card.link} className="card-link">
                                    See more
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </>
            );
            };

            export default Header;