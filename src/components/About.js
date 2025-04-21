import React from 'react';
import '../styles/About.css';
import profile from '../assests/donovan-profile-photo.jpg';
import calender from '../assests/Calender.png';
import launch from '../assests/Launch.png';
import pen from '../assests/Pen.png';
import stocks from '../assests/Stocks.png';

function About() {

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Donovan_van_Rooyen_CV.pdf';
    link.download = "Donovan_van_Rooyen_CV.pdf";
    link.click();
  }

  return (
    <section id="about" className="about-section">
      <div className='about-container'>
        <div className='about-image'>
          <img src={profile} alt="Donovan van Rooyen" />
        </div>
        <div className='about-content'>
          <h1>I am an User Experience Designer</h1>
          <p>
            I design and develop stylish, modern websites, web services, driven
            by a passion for crafting engaging user experiences. I collaborate
            closely with team members, bringing fresh ideas to life through
            thoughtful and clean code. I am always eager to explore new digital
            possibilities.
          </p>
          <button className='download-cv-button'onClick={downloadCV}>Download CV</button>
        </div>
      </div>
      <div className="work-process-container">
        <div className="work-process-header">
          <h2>Work Process</h2>
          <p>
            My streamlined work process ensures a seamless journey from concept
            to launch. I prioritize clarity and efficiency at every stage,
            delivering exceptional results.
          </p>
        </div>
        <div className="work-process-steps">
          <div className="step-card">
            <div className="icon-container">
              <img src={calender} alt="Research" />
            </div>
            <h3>1. Research</h3>
            <p>
              Market trends and user needs are thoroughly investigated.
              Competitor analysis and data gathering are key.
            </p>
          </div>
          <div className="step-card">
            <div className="icon-container">
              <img src={stocks} alt="Analyze" />
            </div>
            <h3>2. Analyze</h3>
            <p>
              Collected data is scrutinized for actionable insights. Patterns
              and user behaviors are identified.
            </p>
          </div>
          <div className="step-card">
            <div className="icon-container">
              <img src={pen} alt="Design" />
            </div>
            <h3>3. Design</h3>
            <p>
              User-centric interfaces and intuitive layouts are crafted.
              Prototypes are created for testing and feedback.
            </p>
          </div>
          <div className="step-card">
            <div className="icon-container">
              <img src={launch} alt="Launch" />
            </div>
            <h3>4. Launch</h3>
            <p>
              The final product is deployed and made available to users.
              Performance is monitored and optimized. User feedback is gathered
              for future iterations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;