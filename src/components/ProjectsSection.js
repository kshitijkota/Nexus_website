import React from 'react';
import './ProjectsSection.css';

const projects = [
    {
        name: 'NoteVault',
        description: 'A simple way to create notes',
        type: 'Web Dev',
    },
    {
        name: 'Nexus Website',
        description: 'Official website for Nexus Club',
        type: 'Web Dev',
    },
    {
        name: 'NexHunt Website',
        description: 'Platform for online competitions',
        type: 'Web Dev',
    },
    ];

    function ProjectsSection() {
    return (
    <section className="projects-section">
        <h2>Our Projects</h2>
        <div className="projects-grid">
        {projects.map((project, index) => (
            <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span className="project-type">{project.type}</span>
            </div>
        ))}
        </div>
    </section>
    );
}

export default ProjectsSection;
