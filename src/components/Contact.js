import React from 'react';
import '../styles/Contact.css';
import FacebookIcon from '../assests/facebook.png';
import InstagramIcon from '../assests/instagram.png';
import LinkedInSmallIcon from '../assests/linkedin-small.png';
import TelephoneIcon from '../assests/telephone-phone-svgrepo-com.svg';
import LocationIcon from '../assests/location-pin-svgrepo-com.svg';
import EmailIcon from '../assests/email-svgrepo-com.svg';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info-header">
          <h2>Contact Information</h2>
          <p>
            For more info details about my services, please contact me
          </p>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-details">
          <h2>Let's discuss your Project</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <div className="address-info">
              <div className="icon">
                <img src={LocationIcon} alt="Location Icon" width="20" height="20" />
              </div>
              <p>South Africa, Pretoria</p>
            </div>
            <div className="email-info">
              <div className="icon">
                <img src={EmailIcon} alt="Email Icon" width="20" height="20" />
              </div>
              <p>donovanvrooyen47@gmail.com</p>
            </div>
            <div className="phone-info">
              <div className="icon">
                <img src={TelephoneIcon} alt="Phone Icon" width="20" height="20" />
              </div>
              <p>+27662423418</p>
            </div>
            <div className="social-icons-details">
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
          </div>
          <div className="contact-form">
            
            <form>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Name*</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input type="text" id="location" name="location" />
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget*</label>
                  <input type="text" id="budget" name="budget" required />
                </div>
                <div className="form-group subject-group">
                  <label htmlFor="subject">Subject*</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group message-group">
                  <label htmlFor="message">Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="submit-button">
                Submit <span className="arrow">&rarr;</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;