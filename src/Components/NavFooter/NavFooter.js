import React from "react";
import './NavFooter.css'

export default function NavFooter() {
  return (
    <div className="social-media-div">
      
      <span className="aboutFooter">Copyright ©</span>

      <div className="container-icon-button">
        <a
          href="https://github.com/Tasin5541"
          className="icon-button"
          target="_blank"
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/miftaul-mannan-tasin-566543107/"
          className="icon-button"
          target="_blank"
        >
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
      <span className="aboutFooter">Designed and Developed by Nathan COHEN</span>
    </div>
  );
}
