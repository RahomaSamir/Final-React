import React from 'react';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">

        <li className="list-inline-item">
                <a href="https://github.com/RahomaSamir" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="iconss"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
