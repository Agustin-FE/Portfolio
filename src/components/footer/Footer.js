import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <div className="footer-sns">
      <div className="design-by">Design By Fernandez Agustin Eligio</div>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/a-f-e/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>

          <a
            href="https://github.com/Agustin-FE"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github github"></i>
          </a>

          <a
            href="https://agustinfernandez.itch.io/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-itch-io itch"></i>
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
