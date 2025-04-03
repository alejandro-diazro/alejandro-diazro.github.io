import profileItem from "../../assets/test.jpg";
import React from "react";
import {Link} from "react-router-dom";

const MainBanner = ({ title, description, showButton, buttonText = "Go to Home", onButtonClick  }) => {
    return (
        <div className="header-card card">
            <img src={profileItem} alt="Tu foto" className="profile-pic" />
            <div className="header-content">
                <h1>{title}</h1>
                <p>{description}</p>
                {showButton && (
                    onButtonClick ? (
                        <button className="btn info" onClick={onButtonClick}>
                            {buttonText}
                        </button>
                    ) : (
                        <Link to="/" className="btn info linkforce">
                            {buttonText}
                        </Link>
                    )
                )}
            </div>
        </div>
    );
};

export default MainBanner;