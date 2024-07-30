// src/components/Projects.js
import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-list">
                <div className="project-item">
                    <h3>Project Title</h3>
                    <p>Project description goes here. Describe your project briefly.</p>
                    <a href="https://link-to-your-project.com" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                {/* Add more projects as needed */}
            </div>
        </section>
    );
};

export default Projects;