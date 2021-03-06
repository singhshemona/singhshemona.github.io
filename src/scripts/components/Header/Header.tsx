import React from 'react';
import './Header.scss';
import { ExternalLink } from '../ExternalLink/ExternalLink';
import LinkedinLogo from 'images/logos/linkedin.svg';
import GithubLogo from 'images/logos/github.svg';
import BehanceLogo from 'images/logos/behance.svg';
import DevToLogo from 'images/logos/devto.svg';
import AnchorLogo from 'images/logos/anchor.svg';
import { Button } from '../Button/Button';

export const Header = () => {
  return (
    <header className="navigation">
      <ExternalLink
        link="https://github.com/singhshemona"
        content={<img src={GithubLogo} alt="Github Logo" />}
      />
      <ExternalLink
        link="https://dev.to/singhshemona"
        content={<img src={DevToLogo} alt="DevTo Logo" />}
      />
      <ExternalLink
        link="https://www.behance.net/singhshemona/projects"
        content={<img src={BehanceLogo} alt="Behance Logo" />}
      />
      <ExternalLink
        link="https://www.linkedin.com/in/shemonasingh/"
        content={<img src={LinkedinLogo} alt="Linkedin Logo" />}
      />
      <ExternalLink
        link="https://anchor.fm/third-eye-thoughts"
        content={<img src={AnchorLogo} alt="Anchor Logo" />}
      />
      <Button
        content="Let's Collaborate"
        onClick={() =>
          window.location.href='https://www.linkedin.com/in/shemonasingh/'
        }
      />
    </header>
  );
}
