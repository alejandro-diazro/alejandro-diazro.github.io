import React from 'react';
import ProjectTitle from "../ProjectTitle";
import teidokuCover from '../../../assets/teidoku.png';
import teidokuBanner from '../../../assets/teidoku-screenshot.png';

const TeidokuDetail = ({ onBack }) => {
    return (
        <>
            <ProjectTitle
                title="Teidoku"
                subtitle="Godot | HTML5 | Game Jam"
                team="1 (solo)"
                duration="Tranki Jam #1 | September 2026"
            />
            <div className="portfolio">
                <iframe src="https://itch.io/embed/5051356?dark=true"
                        title="Teidoku on itch.io" frameBorder="0"
                        className="itch-embed"></iframe>
                <p>
                    An arcade Sudoku roguelike inspired by the hypnotic feel and scoring mechanics
                    of <b>Balatro</b>. Rather than solving the puzzle, you dismantle it: cells are cleared one at a
                    time, and every removal has to be a unique logical deduction.
                </p>
                <p>
                    Between rounds there is a shop to strengthen your run, permanent curses that pile up as you reach
                    progression milestones and an emergency deadlock protocol for when the board leaves you with no
                    way out.
                </p>
                <p>
                    Teidoku was made for <b>Tranki Jam #1</b>, whose theme was <i>'Return'</i>, using a restricted
                    colour palette. It is free and playable in the browser
                    on <a href="https://diazro.itch.io/teidoku" target="_blank" rel="noopener noreferrer">itch.io</a>.
                </p>
                <h2>My Goals in this Project</h2>
                <div className="header-grid">
                    <div className={"header-grid-card card small"}>
                        <h3>Learn Godot 🎮</h3>
                        <p>My first project with the Godot engine, built from scratch during the jam.</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Ship it 🚀</h3>
                        <p>Deliver a finished, fully playable build instead of a prototype.</p>
                    </div>
                    <div className={"header-grid-card card small"}>
                        <h3>Have fun ✨</h3>
                        <p>Enjoy the creative process and experiment with a new take on Sudoku.</p>
                    </div>
                </div>
                <div className="galery">
                    <div className="galery-card">
                        <img src={teidokuCover} alt="Teidoku cover"/>
                    </div>
                    <div className="galery-card">
                        <img src={teidokuBanner} alt="Teidoku banner"/>
                    </div>
                </div>

                <br/>
                <br/>
                <div>
                    <a href="https://diazro.itch.io/teidoku" target="_blank" rel="noopener noreferrer"
                       className="btn accept">
                        Play on itch.io
                    </a>
                    {' '}
                    <button onClick={onBack} className="btn info">
                        Back to Portfolio
                    </button>
                </div>
            </div>
        </>
    );
};

export default TeidokuDetail;
