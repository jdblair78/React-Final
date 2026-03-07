import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <h1 className="footer__title">FLIXSTER</h1>

            <div className="footer__links">
              <a href="#" >
              <li className="footer__link cursor">Home</li>
              </a>
              <li className="footer__link">Help Center</li>
              <li className="footer__link">Legal</li>
              <li className="footer__link">Terms of Use</li>
              <li className="footer__link">Contact Us</li>
            </div>
            <h4 className="copyright">
              &copy;<span className="red"> FLIXSTER</span> 2026
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
