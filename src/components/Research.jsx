import React from 'react';
import './Research.css';

const projects = [
    {
        title: "P1",
        category: "Robotik",
        description: "",
        status: "Tamamlandı"
    },
    {
        title: "P2",
        category: "Robotik & Sensör",
        description: ".",
        status: "Devam Ediyor"
    },
    {
        title: "",
        category: "Sensör",
        description: ".",
        status: "Prototip"
    }
];

const Research = () => {
    return (
        <section id="research" className="section research-section">
            <div className="container">
                <h2 className="section-title">Projelerimiz & Ar-Ge</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <span className="project-category">{project.category}</span>
                                <span className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                                    {project.status}
                                </span>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <button className="project-link">Detaylar →</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
