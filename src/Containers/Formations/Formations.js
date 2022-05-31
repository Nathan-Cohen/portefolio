import React from "react";
import "./Formations.css";
import { Card, Button } from "react-bootstrap";

export default function Formations() {
  return (
    <div className="container-card-formations">
      <div className="formations-title">
        <h1>
          Formations et <span style={{ color: "#4ec8d8" }}>diplômes</span>
        </h1>
        <img src="/img/icons8-chapeau-de-diplôme-100.png"></img>
      </div>
      <div className="row row-formations">
        <Card className="card-formations col-sm">
          <Card.Header as="h5">IFOCOP</Card.Header>
          <Card.Body>
            <Card.Title>2018 Développeur FullStack JS</Card.Title>
            <Card.Text>
              Formation Développeur Fullstack JavaScript (licence niveau 6) <br/>
              Langages : JavaScript, jQuery, jQuery UI, Bootstrap, AngularJS,
              MongoDB, NodeJS, ExpressJS, AJAX, MeteorJS, WebSocket et Socket.io <br/>
              Projets réalisés : Jeux pour découvrir notre CV, Jeux multiljoueur en temps réel, Réseau social
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-formations col-sm">
          <Card.Header as="h5">ESIC</Card.Header>
          <Card.Body>
            <Card.Title>2014-2017 BTS SIO SLAM en alternance</Card.Title>
            <Card.Text>
              BTS S.I.O (Services Informatiques aux Organisations) option SLAM <br/>
              (Solutions Logicielles et Applications Métiers) <br/>
              Langages : HTML, CSS, Apache Cordova, Python
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-formations col-md">
          <Card.Header as="h5">Christophe Colomb </Card.Header>
          <Card.Body>
            <Card.Title>2013-2014 Bac Professionnel S.E.N</Card.Title>
            <Card.Text>
              Baccalauréat professionnel S.E.N (Systèmes électroniques
              numériques) Option : Télécom et Réseau au lycée Gustave Ferrié
              Installation et mise en service de postes de travail et
              d’équipements réseaux (Switch, imprimantes, caméra IP, routeur)
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
