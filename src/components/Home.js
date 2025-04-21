import React from 'react';
import '../styles/Home.css';
import profile from '../assests/donovan-profile-photo.jpg';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-grid">
        <div className="home-content">
          <h1>Hello, I'm</h1>
          <h2 className="home-name fade-in">Donovan van Rooyen</h2>
          <p className="home-description">
            I'm a 3rd year student at Belgium Campus studying software development.
            I strive to build immersive and beautiful web applications through
            carefully crafted code and user-centric design.
          </p>
          <div className="home-stats">
            <div className="stat-item">
              <span className="stat-number">3 Y. </span>
              <span className="stat-label">Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+ </span>
              <span className="stat-label">Project Completed</span>
            </div>
          </div>
        </div>
        <div className="home-image">
          <img src={profile} alt="Donovan van Rooyen" />
        </div>
      </div>
    </section>
  );
}

export default Home;