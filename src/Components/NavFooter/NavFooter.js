import React from "react";
import './NavFooter.css'

export default function NavFooter() {
  return (
    <div className="social-media-div">
      
      <span className="aboutFooter">Copyright ©</span>

      <div className="container-icon-button">
        <a
          href="https://github.com/Nathan-Cohen"
          className="icon-button"
          target="_blank"
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/cohen-nathan/"
          className="icon-button"
          target="_blank"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="/img/cv.pdf"
          className="icon-button"
        >
          <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
        </a>
      </div>
      <span className="aboutFooter">Designed and Developed by Nathan COHEN</span>
    </div>
  );
}
