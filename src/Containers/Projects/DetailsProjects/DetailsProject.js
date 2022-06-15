import React from "react";
import {useParams} from 'react-router-dom'

export default function DetailsProject() {
    const { slug } = useParams();
    console.log(slug)
    let content
    if (slug == "Réseau social"){
      content = <iframe title="Inline Frame Example"
                    style={{width:"80%", height:"700px"}}
                    src="/img/DIW JS - Atelier final.pdf">
                </iframe>
    }else if(slug == "Chatbot"){
      content = <a style={{fontSize : "18px"}} href="https://dansquelcompte.fr/" target="blank">Lien vers le Chatbot</a>
    }

  return (
    <>
      <div className="projects-title">
        <h1>
          {slug}
        </h1>
        {content}
      </div>
    </>
  );
}
