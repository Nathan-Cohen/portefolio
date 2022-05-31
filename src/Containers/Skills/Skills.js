import React from "react";
import './Skills.css'

export default function Skills() {
  return (
    <div className="container container-skills">
      <h2>Mes <span style={{color: "#4ec8d8"}}>compétences</span></h2>

      <div className="row">

        <div className="tech-icons col-md-2">
            <img width={'100px'} src="/img/html-logo.png"></img>
        </div>

        <div className="tech-icons col-md-2">
            <img width={'70px'} src="/img/css-logo.png"></img>
        </div>

        <div className="tech-icons col-md-2">
            <img width={'90px'} src="/img/javascript-logo.png"></img>
        </div>

        <div className="tech-icons col-md-2">
            <img width={'90px'} src="/img/python-logo.png"></img>
        </div>

        <div className="tech-icons col-md-2">
            <img width={'100px'} src="/img/sql-logo.png"></img>
        </div>
        
        <div className="tech-icons col-md-2">
            <img width={'100px'} src="/img/mongodb-logo.png"></img>
        </div>

        <div className="tech-icons col-md-2">
            <img width={'100px'} src="/img/nodejs-logo.png"></img>
        </div>

        <div className="tech-icons col-md-2">
            <img width={'100px'} src="/img/django-logo.png"></img>
        </div>

        <div className="tech-icons col-md-2">
            <img width={'100px'} src="/img/angularjs-logo.png"></img>
        </div>

        <div className="tech-icons col-md-2">
            <img width={'100px'} src="/img/react-logo.png"></img>
        </div>
      </div>
    </div>
  );
}
