import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
              <h1 className="footer__title">FLIXSTER</h1>
            <div class="footer__links">
              <li class="footer__link">
                <a href="#" class="footer__link--anchor">
                  Home
                </a>
              </li>
              <li class="footer__link">
                <a href="#" class="footer__link--anchor">
                  Help Center
                </a>
              </li>
              <li class="footer__link">
                <a href="#" class="footer__link--anchor">
                  Legal
                </a>
              </li>
              <li class="footer__link">
                <a href="#" class="footer__link--anchor">
                  Terms of Use
                </a>
              </li>
              <li class="footer__link">
                <a href="#" class="footer__link--anchor">
                  Contact Us
                </a>
              </li>
            </div>
              <h4 class="copyright">&copy;<span class="red"> FLIXSTER</span> 2026</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
