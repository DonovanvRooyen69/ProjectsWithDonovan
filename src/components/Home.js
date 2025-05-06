import React from 'react';
import '../styles/Home.css';
import AnimatedReusable from './AnimatedReusable';
import FacebookIcon from '../assests/facebook.png';
import InstagramIcon from '../assests/instagram.png';
import LinkedInSmallIcon from '../assests/linkedin-small.png';
import profile1 from '../assests/profile.png';

function Home() {

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Donovan_van_Rooyen_CV.pdf';
    link.download = "Donovan_van_Rooyen_CV.pdf";
    link.click();
  }

  return (
    <section id="home" className="home-section">
      <div className="home-grid">
        <div className="home-content">
          <h1>Hello, I'm</h1>
          <h2 className="home-name fade-in">Donovan van Rooyen</h2>
          <p className="home-description">
            UI/UX Designer & <br/>
            Frontend/Backend Developer
          </p>
          <button className='download-cv-button'onClick={downloadCV}>Download CV</button>

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
        
        <AnimatedReusable delay={0}>
          <div className='image-and-icons'>
            <div className="social-icons-detail">
              <a href="https://www.facebook.com/phillip.phillip.5059" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="Facebook" width="24" height="24" />
              </a>
              <a href="https://www.instagram.com/donovan_v_rooyen/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" width="24" height="24" />
              </a>
              <a href="https://www.linkedin.com/in/donovan-van-rooyen-5b5375333/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInSmallIcon} alt="LinkedIn" width="24" height="24" />
              </a>
            </div>
          
        <div className="home-image">
          <img src={profile1} alt="Donovan van Rooyen" />
        </div>
        </div>
        </AnimatedReusable>
      </div>
    </section>
  );
}

export default Home;