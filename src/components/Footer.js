import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo-container">
            <div className="logo-circle">D</div>
            <span className="logo-text">Donovan</span>
          </div>
        </div>
        <div className="footer-right">
          <p className="copyright-text">Copyright © 2025</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;