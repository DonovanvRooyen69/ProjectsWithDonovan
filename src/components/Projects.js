import React from 'react';
import '../styles/Projects.css';
import Pic1 from '../assests/Python.png';
import Pic2 from '../assests/Java.png';
import Pic3 from '../assests/React.png';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        <p className="projects-subtitle">
          Projects presenting my work!.
        </p>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={Pic1} alt="Project 1" />
            </div>
            <div className="project-details">
              <span className="project-category">PYTHON/DATABASE</span>
              <h3 className="project-title">Student & Lecturer Dasboard</h3>
              <p className="project-description">
              A lightweight admin system built with Python and SQLite for managing student and lecturer data. Features include adding, updating, and deleting records.

              </p>
              <div className="project-technologies">
                <span className="technology-tag">Python</span>
                <span className="technology-tag">sqlite3</span>
                <span className="technology-tag">Forms</span>
              </div>
              <a href="https://github.com/DonovanvRooyen69/SSXProject" className="project-link" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={Pic2} alt="Project 2" />
            </div>
            <div className="project-details">
              <span className="project-category">JAVA/DATABASE</span>
              <h3 className="project-title">Employee Management System</h3>
              <p className="project-description">
              A Java web application for managing employee data using JSP, servlets, and form-based authentication. Features include login, registration, and dashboard views.

              </p>
              <div className="project-technologies">
                <span className="technology-tag">PostgreSQL</span>
                <span className="technology-tag">Forms</span>
                <span className="technology-tag">Java</span>
              </div>
              <div className="project-links">
                <a href='https://github.com/DonovanvRooyen69/PRG361Project' className='project-link' target='_blank' rel='noopener noreferrer'>
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={Pic3} alt="Project 3" />
            </div>
            <div className="project-details">
              <span className="project-category">REACT/JSX</span>
              <h3 className="project-title">Portfolio</h3>
              <p className="project-description">
              Developed using React, this portfolio demonstrates my front-end development skills and ability to create a responsive and interactive web application to effectively display my projects and background.
              </p>
              <div className="project-technologies">
                <span className="technology-tag">HTML</span>
                <span className="technology-tag">CSS</span>
                <span className="technology-tag">JavaScript</span>
              </div>
              <a href="https://github.com/DonovanvRooyen69/ProjectsWithDonovan" className="project-link" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="projects-cta">
          <button className="view-more-button">More Projects</button>
        </div>
      </div>
    </section>
  );
}

export default Projects;