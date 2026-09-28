// Dates use the 'YYYY-MM' format. Leave `end` as null for current roles.
// Durations are calculated automatically, so there is no need to update them by hand.
const experience = [
    {
        organisation: 'FECTA',
        link: 'https://fecta.org/',
        subtitle: 'Archery federation',
        roles: [
            {
                title: 'Secretary',
                start: '2026-10',
                end: null,
                type: 'Voluntary',
            },
        ],
    },
    {
        organisation: 'IVAO',
        subtitle: 'International Virtual Aviation Organisation',
        link: 'https://ivao.aero/',
        roles: [
            {
                title: 'Software Developer Assistant Manager',
                start: '2026-05',
                end: null,
                type: 'Voluntary · Remote',
                summary: 'Voluntary technical role focused on high-performance aviation simulation.',
                highlights: [
                    ['C++ & Qt Development', "Developer for 'Altitude', IVAO's pilot client."],
                    ['Rust Integration', 'Developing modern, memory-safe software solutions and tools using Rust to enhance system reliability.'],
                    ['Cross-platform Development', 'Ensuring seamless software performance across different operating systems.'],
                    ['Code Optimisation', 'Identifying bottlenecks and implementing efficient algorithms for real-time data processing.'],
                ],
                skills: ['C++', 'Qt', 'Rust'],
            },
            {
                title: 'Public Relations (Spain)',
                start: '2025-12',
                end: null,
                type: 'Voluntary · Remote',
                summary: 'Volunteer-based role focused on community growth and social media management for IVAO Spain.',
                highlights: [
                    ['Social Media Management', 'Digital presence across Instagram, X (Twitter) and YouTube Shorts.'],
                    ['Content Creation', 'Designing and publishing engaging content.'],
                    ['Community Engagement', 'Interacting with users and flight simulation enthusiasts to foster a positive and active environment.'],
                    ['Brand Growth', 'Implementing strategies to increase the visibility of the Spanish division within the global simulation community.'],
                ],
                skills: ['Social media marketing'],
            },
            {
                title: 'Webmaster (Spain)',
                start: '2021-12',
                end: null,
                type: 'Voluntary · Remote',
                summary: "Voluntary technical leadership role managing the Spanish division's digital ecosystem.",
                highlights: [
                    ['Project Management', 'Leading the web development team, coordinating tasks and overseeing the delivery of multiple internal projects.'],
                    ['Full-Stack Development', 'Working on diverse divisional projects using React, NestJS, PHP, SQL and Python.'],
                    ['Technical Strategy', 'Defining the roadmap for new web features and tools to improve the user experience of the Spanish division.'],
                ],
                skills: ['React', 'NestJS', 'PHP', 'SQL', 'Python', 'Git'],
            },
            {
                title: 'Software Developer',
                start: '2024-02',
                end: '2026-05',
                type: 'Voluntary · Remote',
                summary: 'Voluntary technical role focused on high-performance aviation simulation.',
                highlights: [
                    ['C++ & Qt Development', "Developer for 'Altitude', IVAO's pilot client."],
                    ['Rust Integration', 'Developing modern, memory-safe software solutions and tools using Rust to enhance system reliability.'],
                    ['Cross-platform Development', 'Ensuring seamless software performance across different operating systems.'],
                    ['Code Optimisation', 'Identifying bottlenecks and implementing efficient algorithms for real-time data processing.'],
                ],
                skills: ['C++', 'Rust'],
            },
        ],
    },
    {
        organisation: 'Club Deportivo Arqueros del Centenero',
        subtitle: 'Archery club',
        link: 'https://arquerosdelcentenero.com/',
        roles: [
            {
                title: 'Secretary',
                start: '2025-12',
                end: null,
                type: 'Voluntary',
                summary: 'Voluntary executive role responsible for the legal and administrative management of the sports club for a 4-year term.',
                highlights: [
                    ['Institutional Governance', 'Managing official club documentation, bylaws and membership databases.'],
                    ['Administrative Oversight', 'Handling official correspondence and coordinating communication between the board of directors and club members.'],
                    ['Event Logistics', 'Organising assemblies and supporting the coordination of archery competitions and social events.'],
                    ['Regulatory Compliance', 'Ensuring all activities align with regional sports federation standards and legal requirements.'],
                ],
            },
        ],
    },
    {
        organisation: 'Tiny Terrors Studio',
        subtitle: 'Game studio',
        roles: [
            {
                title: 'Programmer',
                start: '2023-09',
                end: '2024-06',
                type: 'On-site · Valencia, Spain',
            },
        ],
    },
];

export default experience;
