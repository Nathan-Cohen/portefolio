import React from "react";
import "./Home.css";
import Skills from "../Skills/Skills";
import TypewriterHook from "../../Hooks/TypeWriter/TypeWriter";

export default function Home() {
  return (
    <>
      <div className="container-home">
        <div className="home-title">
          <h1>Développeur FullStack</h1>
          <h3>
            <TypewriterHook />
          </h3>
          <img src="/img/icons8-futurama-bender-100.png" alt="home"></img>
        </div>
        <div className="about">
          <p>
            Passionné d’informatique, j’ai commencé mes études avec un
            baccalauréat professionnel SEN (Systèmes éléctroniques numériques)
            où j’ai pu choisir comme spécialité le développement.
            <br />
            Suite à cela j'ai réalisé un BTS SIO (services informatiques aux
            organisations) en alternance chez Engie.
            <br /> J’ai poursuivi avec une licence afin de me spécialiser en
            tant que développeur FullStack JS.
            <br />
            Suite à cette formation j'ai intégré l'entreprise Ennov en tant que
            testeur logiciel, j'ai beaucoup appris sur le processus de
            dévéloppement en entreprsise et j'ai pu évoluer pour devenir
            développeur Fullstack depuis Août 2021.
          </p>
        </div>

        <Skills />
      </div>
    </>
  );
}
