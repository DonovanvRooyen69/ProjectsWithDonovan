import React, { useState } from 'react';
import '../styles/Projects.css';
import Pic1 from '../assests/Python.png';
import Pic2 from '../assests/Java.png';
import Pic3 from '../assests/React.png';

function Projects() {
  const [showMessage, setShowMessage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleClick = () => {
    setShowMessage(true);
  };

  const projects = [
    {
      id: 1,
      image: Pic1,
      category: 'PYTHON',
      title: 'Student & Lecturer Dashboard',
      description:
        'A lightweight admin system built with Python and SQLite for managing student and lecturer data. Features include adding, updating, and deleting records.',
      technologies: ['Python', 'sqlite3', 'Forms'],
      link: 'https://github.com/DonovanvRooyen69/SSXProject',
    },
    {
      id: 2,
      image: Pic2,
      category: 'JAVA',
      title: 'Employee Management System',
      description:
        'A Java web application for managing employee data using JSP, servlets, and form-based authentication. Features include login, registration, and dashboard views.',
      technologies: ['PostgreSQL', 'Forms', 'Java'],
      link: 'https://github.com/DonovanvRooyen69/PRG361Project',
    },
    {
      id: 3,
      image: Pic3,
      category: 'REACT',
      title: 'Portfolio',
      description:
        'Developed using React, this portfolio demonstrates my front-end development skills and ability to create a responsive and interactive web application to effectively display my projects and background.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/DonovanvRooyen69/ProjectsWithDonovan',
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        <p className="projects-subtitle">Projects presenting my work!.</p>

        <div className="project-filters">
          {['All', 'PYTHON', 'JAVA', 'REACT'].map((category) => (
            <button
              key={category}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-details">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <button className="view-more-button" onClick={handleClick}>
            More Projects
          </button>
          {showMessage && <p className="project-message">More projects incoming...</p>}
        </div>
      </div>
    </section>
  );
}

export default Projects;
