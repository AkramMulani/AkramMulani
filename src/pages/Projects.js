import React from 'react';
import './Projects.css';
import { Util } from '../Util';

function Projects() {
  return (
    <div className="container py-5 projects-page">
      <div className="animate__animated animate__fadeIn">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {Util.projects.map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 bg-dark text-white">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-2">
                    <strong>Tech Stack:</strong>
                    <div className="mt-2 d-flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="badge bg-secondary">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto">
                    {project.github && (
                      <a href={project.github} className="btn btn-outline-light btn-sm me-2" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                        Live Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
