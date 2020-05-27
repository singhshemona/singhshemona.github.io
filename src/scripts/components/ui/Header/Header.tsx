import React from 'react';
import './Header.scss';
import { ExternalLink } from '../ExternalLink/ExternalLink';
import LinkedinLogo from 'images/linkedin.png';

const Header = () => {
  return (
    <header className="navigation">
      {/* IS THERE A BETTER WAY TO USE IMAGES THEN THIS?? */}
      <a className="social-media" href="https://www.linkedin.com/in/shemonasingh/" target="_blank" rel="noopener noreferrer">
        <img src={LinkedinLogo} alt="Linkedin Logo" />
      </a>

      {/* MAKE LINKS LOOK LIKE ACTUAL LINKS, NOT BUTTONS. LEAVE BUTTON STYLING TO ACTUAL BUTTONS */}
      <ExternalLink link="mailto:singhshemona@gmail.com" content="Let's Collaborate" />

      <a className="button secondary-button" href="https://www.notion.so/shemona/Get-Started-cb739b6a13ce490ba1d422f204397071" target="_blank" rel="noopener noreferrer">My Second Brain</a>
      {/* Put Dev.to logo */}
    </header>
  );
}

export default Header;
