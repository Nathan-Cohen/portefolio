import React from "react";

export default function DetailsProject(props) {

    console.log('testnc', props)

  return (
    <>
      <div className="projects-title">
        <h1>
          Mes <span style={{ color: "#4ec8d8" }}>Détails du projet</span>
        </h1>
        <img src="/img/icons8-dossier-ouvert-100.png" alt="projects"></img>
      </div>
      <div className="container-card-projects">
        
      </div>
    </>
  );
}
