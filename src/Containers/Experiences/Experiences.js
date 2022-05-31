import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Experiences.css'

export default function Experiences() {
  return (
    <>
        <div className="experience-title">
          <h1>Mes <span style={{color: "#4ec8d8"}}>expériences</span></h1>
          <img src="/img/icons8-compétences-de-développement-100.png"></img>
        </div>
        
        <Card className='container-card-experiences'>
          <Card.Header as="h5">Ennov</Card.Header>
          <Card.Body>
            <Card.Title>Depuis Août 2021 - Developpeur FullStack - CDI</Card.Title>
            <Card.Text>
              <li>Développeur sur le projet Atrium, un EPR collaboratif développé pour gérer les relations entre laboratoires pharmaceutiques et professionnels de santé</li>
              <li>Analyser les solutions techniques adaptées</li>
              <li>Développement back-end à l'aide du framework de développement web Django Python</li>
              <li>Développement front-end avec le framework AngularJs</li>
              <li>Maintien en condition opérationnelle</li>
              <li>Développement de nouvelles fonctionnalités</li>
              <li>Gestion des mises en production (via Jenkins)</li>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='container-card-experiences'>
          <Card.Header as="h5">Ennov</Card.Header>
          <Card.Body>
            <Card.Title>Novembre 2018 à Août 2021 - Testeur logiciels - CDI</Card.Title>
            <Card.Text>
              <li>Testeur logiciel sur le projet Atrium, un EPR collaboratif développé pour gérer les relations entre laboratoires pharmaceutiques et professionnels de santé</li>
              <li>Ecriture des tests automatiques (selenium webdriver) dans Eclipse</li>
              <li>Collaboration avec les developpeurs pour repérer les régressions.</li>
              <li>Coordination avec la gestion du projet pour la compréhension des spécifications du client</li>
              <li>Reproduction des anomalies et recherche d'informations</li>
              <li>Mise à jour des documentations de tests</li>
              <li>Réalisation de tests manuels fonctionnels et de non régressions</li>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='container-card-experiences'>
          <Card.Header as="h5">Ennov</Card.Header>
          <Card.Body>
            <Card.Title>2018 - Développeur Web - Stage 5 mois</Card.Title>
            <Card.Text>
              <li>Conception et rédaction d'un cahier des charges</li>
              <li>Intégration de maquette graphique (HTML, CSS)</li>
              <li>Créations de bases de données et connexion à une API (Django/SQL)</li>
              <li>Créations d'animations (JavaScript/CSS)</li>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='container-card-experiences'>
          <Card.Header as="h5">ENGIE</Card.Header>
          <Card.Body>
            <Card.Title>2015/2017 - Expert Hotline - Alternance 3 ans</Card.Title>
            <Card.Text>
              <li>Gestion des incidents sur logiciel intranet</li>
              <li>Gestion et maintenance quotidienne du CRM SAP</li>
              <li>Prise en charge d'incidents et de demandes d'assistance</li>
              <li>Travail et assistance avec les conseillers</li>
            </Card.Text>
          </Card.Body>
        </Card>

    </>
  )
}
