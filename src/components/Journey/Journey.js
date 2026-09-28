import React from 'react';
import MainBanner from '../Header/MainBanner';
import experience from './experience';
import './journey.css';

const toMonthIndex = (value) => {
    if (!value) {
        const today = new Date();
        return today.getFullYear() * 12 + today.getMonth();
    }
    const [year, month] = value.split('-').map(Number);
    return year * 12 + (month - 1);
};

const formatMonth = (value) => {
    const [year, month] = value.split('-').map(Number);
    return new Date(year, month - 1).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
};

const plural = (amount, word) => `${amount} ${word}${amount === 1 ? '' : 's'}`;

// Counts both the first and last month, the same way LinkedIn does
const formatDuration = (start, end) => {
    const months = toMonthIndex(end) - toMonthIndex(start) + 1;
    if (months <= 0) return 'Upcoming';

    const years = Math.floor(months / 12);
    const remainder = months % 12;
    return [years && plural(years, 'year'), remainder && plural(remainder, 'month')]
        .filter(Boolean)
        .join(' ');
};

const getOrganisationSpan = (roles) => {
    const start = roles.map((role) => role.start).sort()[0];
    const end = roles.some((role) => !role.end) ? null : roles.map((role) => role.end).sort().pop();
    return { start, end };
};

const Role = ({ role }) => {
    const isUpcoming = toMonthIndex(role.start) > toMonthIndex(null);

    return (
        <li className="journey-role">
            <h3>{role.title}</h3>
            <p className="journey-meta">
                {formatMonth(role.start)} - {role.end ? formatMonth(role.end) : 'Present'}
                {!isUpcoming && <> · {formatDuration(role.start, role.end)}</>}
                {isUpcoming && <span className="journey-badge">Upcoming</span>}
            </p>
            {role.type && <p className="journey-meta">{role.type}</p>}
            {role.summary && <p>{role.summary}</p>}
            {role.highlights && (
                <ul className="journey-highlights">
                    {role.highlights.map(([name, text]) => (
                        <li key={name}><b>{name}:</b> {text}</li>
                    ))}
                </ul>
            )}
            {role.skills && (
                <div className="journey-skills">
                    {role.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
            )}
        </li>
    );
};

const Journey = () => {
    return (
        <>
            <MainBanner
                title="My journey"
                description="The places I have worked and volunteered, and what I did there."
                showButton={true}
            />

            {experience.map((organisation) => {
                const span = getOrganisationSpan(organisation.roles);
                return (
                    <section className="portfolio journey-organisation" key={organisation.organisation}>
                        <h2>
                            {organisation.link ? (
                                <a href={organisation.link} target="_blank" rel="noopener noreferrer">
                                    {organisation.organisation}
                                </a>
                            ) : organisation.organisation}
                        </h2>
                        <p className="journey-meta">
                            {organisation.subtitle}
                            {organisation.roles.length > 1 && <> · {formatDuration(span.start, span.end)}</>}
                        </p>
                        <ul className="journey-roles">
                            {organisation.roles.map((role) => (
                                <Role role={role} key={`${role.title}-${role.start}`} />
                            ))}
                        </ul>
                    </section>
                );
            })}
        </>
    );
};

export default Journey;
