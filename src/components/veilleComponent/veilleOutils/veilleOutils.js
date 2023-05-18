import React, { Component } from "react";
import "./veilleOutils.css";
import underscord from "../../../image/maVeille/underscore.PNG";
import feedly from "../../../image/maVeille/feedly.webp";
import certFr from "../../../image/maVeille/certFrance.jpg";
import lionel from "../../../image/maVeille/veilleLIONELGUILLET.PNG";
export default class veilleOutils extends Component {
  render() {
    return (
      <div className="veille-outils section">
        <h1 className="section-title">Les outils utlisé</h1>
        <div className="les-outils">
          <a
            href="https://www.youtube.com/@Underscore_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="outil-box">
              <div
                className="backgrond-image"
                style={{ backgroundImage: `url(${underscord})` }}
              >
                <div className="overlay">
                  <p>
                    Underscore_ est un talk-show animé par Micode pour les
                    passionnés de l'IT 🎙 Entreprenariat, Hacking, Dev, IA 🧑‍💻
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://feedly.com/i/collection/content/user/65689895-8c28-45af-9176-faba1e2c6873/category/b5520a5e-2cfd-4c5c-9b02-ac80cbee080d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="outil-box">
              <div
                className="backgrond-image"
                style={{ backgroundImage: `url(${feedly})` }}
              >
                <div className="overlay">
                  <p>
                    Feedly est une plateforme de lecture de flux RSS (Really
                    Simple Syndication) qui permet aux utilisateurs de regrouper
                    et d'organiser leurs sources d'informations en un seul
                    endroit
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://www.cert.ssi.gouv.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="outil-box">
              <div
                className="backgrond-image"
                style={{ backgroundImage: `url(${certFr})` }}
              >
                <div className="overlay">
                  <p>
                    Le Centre gouvernemental de veille, d’alerte et de réponse
                    aux attaques informatiques est un organisme français qui
                    participe à la mission d'autorité nationale de défense des
                    systèmes d’information de l'ANSSI.
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://veillecyberland.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="outil-box">
              <div
                className="backgrond-image"
                style={{ backgroundImage: `url(${lionel})` }}
              >
                <div className="overlay">
                  <p>
                    la veille de Lionel guillet est une veille alimenté par un
                    Management en Sécurité de l’Information que je suis depuis
                    plus d'un ans.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
