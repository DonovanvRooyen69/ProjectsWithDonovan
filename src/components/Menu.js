import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Menu.css'

function Menu() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="initial-circle">D</div>
        <span>Donovan</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="nav-link"
            spy={true}
            exact="true"
            offset={-70} 
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="nav-link"
            spy={true}
            offset={-70}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="nav-link"
            spy={true}
            offset={-70}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className=" contact-button"
            spy={true}
            offset={-70}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;