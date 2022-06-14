import React from "react";
import "./Projects.css";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <>
      <div className="projects-title">
        <h1>
          Mes <span style={{ color: "#4ec8d8" }}>projets</span>
        </h1>
        <img src="/img/icons8-dossier-ouvert-100.png" alt="projects"></img>
      </div>
      <div className="container-card-projects">
        <div className="breadcrumbtrail">
          <div className="year-project first">2022/2022</div>
          <div className="horizontal-line-first"></div>
          <Card className="card-projects">
            <Card.Header as="h5">Ennov</Card.Header>
            <Card.Body>
              <Card.Title>Création d'un robot avec Selenium</Card.Title>
              <Card.Text>
                <span className="criteria">
                  Langages : HTML5, CSS3, Python, JavaScript, Java <br/>
                  Framework : Django, AngularJS, Bootstrap et Selenium
                </span>
                <li>
                  Spécifier les scénarios du robot en collaboration avec les
                  chefs de projet
                </li>
                <li>
                  Exporter les données du logiciel Atrium en fonction des
                  scénarios définis pour les retranscrire via selenium sur un
                  site externe
                </li>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="horizontal-line-right"></div>
        </div>

        <div className="breadcrumbtrail">
          <div className="year-project left">2019/2020</div>
          <Card className="card-projects">
            <Card.Header as="h5">Perso</Card.Header>
            <Card.Body>
              <Card.Title>Connexion à l'API Stripe</Card.Title>
              <Card.Text>
                <span className="criteria">
                  Langages : HTML5, CSS3, Nodejs, JavaScript <br/>
                  Framework : Bootstrap <br/>
                </span>
              </Card.Text>              
            </Card.Body>
          </Card>
          <div className="horizontal-line-left"></div>
        </div>

        <div className="breadcrumbtrail">
          <div className="year-project right">2019/2020</div>
          <Card className="card-projects">
            <Card.Header as="h5">Perso</Card.Header>
            <Card.Body>
              <Card.Title>Générateur de PDF</Card.Title>
              <Card.Text>
                <span className="criteria">
                  Langages : HTML5, CSS3, Python, JavaScript <br/>
                  Framework : Django et Bootstrap <br/>
                  Base de donnée : MYSQL <br/>
                </span>
                Création d'un formulaire, récuperation des données du formulaire, création d'un template et export en PDF grace à la bibliothèque <strong>xhtml2pdf</strong>
              </Card.Text>              
            </Card.Body>
          </Card>
          <div className="horizontal-line-right"></div>
        </div>

        <div className="breadcrumbtrail">
          <div className="year-project left">2018/2019</div>
          <Card className="card-projects">
            <Card.Header as="h5">IFOCOP</Card.Header>
            <Card.Body>
              <Card.Title>Reseau social</Card.Title>
              <Card.Text>
                <span className="criteria">
                  Langages : HTML5, CSS3, JavaScript <br/>
                  Framework : Nodejs, Express.js et Bootstrap <br/>
                  Base de donnée : MongoDB <br/>
                </span>
                Projet de fin de formation, réalisation d'un réseau social
              </Card.Text>  
              <Button as={Link} to="/detailsProject/reseau_social" >Détails</Button>            
            </Card.Body>
          </Card>
          <div className="horizontal-line-left"></div>
        </div>

        <div className="breadcrumbtrail">
          <div className="year-project right">2016/2017</div>
          <Card className="card-projects">
            <Card.Header as="h5">E-TAG</Card.Header>
            <Card.Body>
              <Card.Title>Chatbot Dansquelcompte</Card.Title>
              <Card.Text>
                <span className="criteria">
                  Langages : HTML5, CSS3, PHP, SQL, JavaScript <br/>
                  Base de donnée : MYSQL <br/>
                </span>
                Création d'un chatbot 
              </Card.Text>              
            </Card.Body>
          </Card>
          <div className="horizontal-line-right"></div>
        </div>

        <div className="breadcrumbtrail">
          <div className="year-project left">2015/2017</div>
          <Card className="card-projects">
            <Card.Header as="h5">BTS SIO</Card.Header>
            <Card.Body>
              <Card.Title>
                Application de gestion de note de frais GSB
              </Card.Title>
              <Card.Text>
                <span className="criteria">
                  Langage : HTML5, CSS3, PHP, SQL, JavaScript <br/>
                  Framework : Cordova <br/>
                  Base de donnée : MYSQL <br/>
                </span>
              </Card.Text>              
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
