import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
    { title: 'NoteVault', description: 'A simple way to create notes', tech: 'WEB DEV' },
    { title: 'Nexus Website', description: 'The official club website', tech: 'WEB DEV' },
    { title: 'NexHunt Website', description: 'Login system for members', tech: 'WEB DEV' },
];

const Projects = () => {
    return (
        <section className="projects-section">
        <h2>Our Projects</h2>
        <div className="projects-grid">
            {projects.map((project, index) => (
            <motion.div
                className="project-card"
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.tech}</span>
            </motion.div>
            ))}
        </div>
        </section>
    );
};

export default Projects;
