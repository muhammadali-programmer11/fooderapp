import React from "react";
import "./Footer.css";  

function Footer() {
  return (
    <footer className="sl-footer">
      <div className="sl-footer-links">
        <div className="sl-footer-links__container">
          <div className="sl-footer-links__linksblock">
            <span className="sl-footer-links__item">
              <span>Home</span>
            </span>
            <span className="sl-footer-links__item">
              <span>Foods</span>
            </span>
            <span className="sl-footer-links__item">
              <span>TURKISH</span>
            </span>
            <span className="sl-footer-links__item">
              <span>ARABIC</span>
            </span>
            <span className="sl-footer-links__item">
              <span>HEALTHY</span>
            </span>
            <span className="sl-footer-links__item">
              <span>BARBEQUE</span>
            </span>
            <span className="sl-footer-links__item">
              <span>BURGERS</span>
            </span>
            <span className="sl-footer-links__item">
              <span>Contact</span>
            </span>
            <span className="sl-footer-links__item">
              <span>Terms of Use</span>
            </span>
            <span className="sl-footer-links__item">
              <span>Privacy Policy</span>
            </span>
          </div>
          <div className="sl-footer-linkscopyright">
            Created by &nbsp;
            <span className="sl-footer-links__marked-text">Sololearn</span>
            &nbsp;| ©2022
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
