import React from "react";
import './Skills.css'

export default function Skills() {
  return (
    <div className="container container-skills">
      <h2>Mes <span style={{color: "#4ec8d8"}}>compétences</span></h2>

      <div className="row">

        <div className="tech-icons col-md-2">
            <img width={'100px'} src="/img/html-logo.png" alt="html"></img>
        </div>

        <div className="tech-icons col-md-2">
            <img width={'70px'} src="/img/css-logo.png" alt="css"></img>
        </div>

        <div className="tech-icons col-md-2">
            <img width={'90px'} src="/img/javascript-logo.png" alt="javascript"></img>
        </div>

        <div className="tech-icons col-md-2">
            <img width={'90px'} src="/img/python-logo.png" alt="python"></img>
        </div>

        <div className="tech-icons col-md-2">
            <img width={'100px'} src="/img/sql-logo.png" alt="sql"></img>
        </div>
        
        <div className="tech-icons col-md-2">
            <img width={'100px'} src="/img/mongodb-logo.png" alt="mongodb"></img>
        </div>

        <div className="tech-icons col-md-2">
            <img width={'100px'} src="/img/nodejs-logo.png" alt="nodejs"></img>
        </div>

        <div className="tech-icons col-md-2">
            <img width={'100px'} src="/img/django-logo.png" alt="django"></img>
        </div>

        <div className="tech-icons col-md-2">
            <img width={'100px'} src="/img/angularjs-logo.png" alt="angularjs"></img>
        </div>

        <div className="tech-icons col-md-2">
            <img width={'100px'} src="/img/react-logo.png" alt="reactjs"></img>
        </div>
      </div>
    </div>
  );
}
