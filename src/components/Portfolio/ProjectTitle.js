import {FaCalendar, FaPerson} from "react-icons/fa6";

const ProjectTitle = ({ title, subtitle, team, duration }) => {
    return (
        <div className="portfolio portfolio-title">
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <p>
                <FaPerson className="title-icon" />: {team}
            </p>
            <p>
                <FaCalendar className="title-icon" />: {duration}
            </p>
        </div>
    );
};

export default ProjectTitle;