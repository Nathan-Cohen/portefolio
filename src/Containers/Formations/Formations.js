import React from "react";
import "./Formations.css";
import { Card } from "react-bootstrap";

export default function Formations() {
  return (
    <div className="container-card-formations">
      <div className="formations-title">
        <h1>
          Formations et <span style={{ color: "#4ec8d8" }}>diplômes</span>
        </h1>
        <img src="/img/icons8-chapeau-de-diplôme-100.png" alt="formations"></img>
      </div>
      <div className="row row-formations">
        <Card className="card-formations col-sm">
          <Card.Header as="h5">IFOCOP</Card.Header>
          <Card.Body>
            <Card.Title>2018 Développeur FullStack JS</Card.Title>
            <Card.Text>
              <li>Formation Développeur Fullstack JavaScript (licence niveau 6) </li>
              Langages : JavaScript, jQuery, jQuery UI, Bootstrap, AngularJS,
              <li>MongoDB, NodeJS, ExpressJS, AJAX, MeteorJS, WebSocket et Socket.io </li>
              <li>Projets réalisés : Jeux pour découvrir notre CV, Jeux multiljoueur en temps réel, Réseau social </li>
              <li>Lieu : IFOCOP Paris 11</li>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-formations col-sm">
          <Card.Header as="h5">ESIC</Card.Header>
          <Card.Body>
            <Card.Title>2014-2017 BTS SIO SLAM en alternance</Card.Title>
            <Card.Text>
              <li>BTS S.I.O (Services Informatiques aux Organisations) option SLAM 
              (Solutions Logicielles et Applications Métiers) </li>
              <li>Langages : HTML, CSS, Apache Cordova, Python </li>
              Lieu : ESIC Paris 14
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-formations col-md">
          <Card.Header as="h5">Christophe Colomb </Card.Header>
          <Card.Body>
            <Card.Title>2013-2014 Bac Professionnel S.E.N</Card.Title>
            <Card.Text>
              <li>Baccalauréat professionnel S.E.N (Systèmes électroniques
              numériques) Option : Télécom et Réseau. </li>
              <li>Réalisations : Installation et mise en service de postes de travail et
              d’équipements réseaux (Switch, imprimantes, caméra IP, routeur)</li>
              <li>Lieu : Lycée Gustave Ferrié 94370</li>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
