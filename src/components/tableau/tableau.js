import React, { Component } from "react";
import "./tableau.css";
import parcInfo from "../../image/./preuve/parcInfo.PNG";
import referencementTableur from "../../image/./preuve/referencementTableur.PNG";
import linkdin from "../../image/./preuve/linkdin.PNG";
import linkdinMessage from "../../image/./preuve/linkdinMessage.PNG";
import glpi from "../../image/./preuve/GLPI.PNG";
import glpiTicket from "../../image/./preuve/glpiTicket.png";
import trelloProjetEquipement from "../../image/preuve/trelloProjetEquipement.PNG";
import tuleapGestionDeProjet from "../../image/preuve/tuleapGestionDeProjet.PNG";
import AncienSiteUni from "../../image/preuve/AncienSiteUni.PNG";
import donneesErgue from "../../image/preuve/donneesErgue.PNG";
import mentionLegales from "../../image/preuve/mentionLegales.png";
import Hebergement from "../../image/preuve/Hebergement.PNG";

const clue1 = {
  0: parcInfo,
  1: "Ajout d'UC dans la base de donnée GLPI",
  2: referencementTableur,
  3: "Inventaire des vidéo projecteur de La DMSI",
};
const clue3 = {
  0: undefined,
  1: "outil permettant de donner des permissions aux utilisateurs",
};
const clue7 = {
  0: undefined,
  1: "projets react/angular/mobile => screen porfolio ou démonstration portfolio",
};
const clue8 = { 0: undefined, 1: "pearl trees + page veille" };
const clue9 = { 0: linkdin, 1: "linkdin + portfolio" };
const clue10 = {
  0: linkdinMessage,
  1: "Messages Linkdin de recherhce d'alternance",
};
const clue11 = {
  0: glpi,
  1: "Logiciel GLPI de La DMSI de Saint-brieuc",
  2: glpiTicket,
  3: "gestion d'un ticket dans GLPI",
};
const clue14 = {
  0: Hebergement,
  1: "hebergement a différents couts",
  2: mentionLegales,
  3: "Mention Légale Ergue-Solidarités",
};

const clue16 = {
  0: AncienSiteUni,
  1: "Ancien site d'Uni-Epilepsie",
  2: donneesErgue,
  3: "exemples de données envoyé par Ergue-Solidarités",
};
const clue17 = {
  0: trelloProjetEquipement,
  1: "trello projet equipement",
};
const clue19 = {
  0: tuleapGestionDeProjet,
  1: "Gestion de Projet tuleap",
};

const allclue = {
  1: clue1,
  2: undefined,
  3: clue3,
  4: undefined,
  5: undefined,
  6: undefined,
  7: clue7,
  8: clue8,
  9: clue9,
  10: clue10,
  11: clue11,
  12: undefined,
  13: undefined,
  14: clue14,
  15: undefined,
  16: clue16,
  17: clue17,
  18: undefined,
  19: clue19,
};

export default class Tableau extends Component {
  constructor(props) {
    super(props);
    // Créer une référence pour le tableau
    this.tableRef = React.createRef();
    this.lespreuves = React.createRef();
    this.preuve1 = React.createRef();
    this.preuve2 = React.createRef();
    this.preuveTitle1 = React.createRef();
    this.preuveTitle2 = React.createRef();
  }

  selectpreuve = (e) => {
    const className = e.target.className;
    let lastChar = 1;
    if (
      className.charAt(className.length - 2) +
        className.charAt(className.length - 1) <=
      0
    ) {
      lastChar = +className.charAt(className.length - 1);
    } else {
      lastChar = +(
        className.charAt(className.length - 2) +
        className.charAt(className.length - 1)
      );
    }
    console.log(lastChar);
    this.preuve1.current.style.backgroundImage = "";
    this.preuve2.current.style.backgroundImage = "";
    this.preuve1.current.classList.remove("preuveAffich");
    this.preuve2.current.classList.remove("preuveAffich");
    this.preuveTitle1.current.innerHTML = "Aucune preuve pour cette compétence";
    this.preuveTitle2.current.innerHTML = "";
    if (allclue[lastChar] !== undefined) {
      if (allclue[lastChar][2] !== undefined) {
        this.preuve1.current.style.backgroundImage = `url(${allclue[lastChar][0]})`;
        this.preuve2.current.style.backgroundImage = `url(${allclue[lastChar][2]})`;
        this.preuveTitle1.current.innerHTML = allclue[lastChar][1];
        this.preuveTitle2.current.innerHTML = allclue[lastChar][3];
        this.preuve1.current.classList.add("preuveAffich");
        this.preuve2.current.classList.add("preuveAffich");
      } else {
        this.preuve1.current.style.backgroundImage = `url(${allclue[lastChar][0]})`;
        this.preuveTitle1.current.innerHTML = allclue[lastChar][1];
        this.preuve1.current.classList.add("preuveAffich");
      }
    }
  };

  agrandirImage(event) {
    document
      .querySelector(`.${event.target.classList[1]}`)
      .classList.toggle("zoom-preuve");
  }
  render() {
    return (
      <div className="tableau">
        <h1 className="titleTab">Selectionnez une compétence</h1>
        <img src="./parcInfo.PNG" alt="" />
        <a name="tftable" href="#preuve">
          <table
            className="tftable"
            border="1"
            ref={this.tableRef}
            onClick={this.selectpreuve}
          >
            <tbody>
              <tr className="table-title">
                <th colSpan="7">Tableau des compétences</th>
              </tr>
              <tr>
                <td>Gérer le patrimoine informatique</td>
                <td className="td-1">
                  Recenser et identifier les ressources numériques
                </td>
                <td className="td-2">
                  Exploiter des référentiels, normes et standards adoptés par le
                  prestataire informatique
                </td>
                <td className="td-3">
                  Mettre en place et vérifier les niveaux d’habilitation
                  associés à un service
                </td>
                <td className="td-4">
                  Vérifier les conditions de la continuité d’un service
                  informatique
                </td>
                <td className="td-5">Gérer des sauvegardes</td>
                <td className="td-6">
                  Vérifier le respect des règles d’utilisation des ressources
                  numériques
                </td>
              </tr>
              <tr>
                <td>Organiser son développement professionnel</td>
                <td className="td-7" colSpan="2">
                  Mettre en place son environnement d’apprentissage personnel
                </td>
                <td className="td-8" colSpan="2">
                  Mettre en œuvre des outils et stratégies de veille
                  informationnelle
                </td>
                <td className="td-9">Gérer son identité professionnelle</td>
                <td className="td-10">Développer son projet professionnel</td>
              </tr>
              <tr className="l3">
                <td>
                  Répondre aux incidents et aux demandes d’assistance et
                  d’évolution
                </td>
                <td className="td-11" colSpan="2">
                  Collecter, suivre et orienter des demandes
                </td>
                <td className="td-12" colSpan="2">
                  Traiter des demandes concernant les services réseau et
                  système, applicatifs
                </td>
                <td className="td-13" colSpan="2">
                  Traiter des demandes concernant les applications
                </td>
              </tr>
              <tr className="l3">
                <td>Développer la présence en ligne de l’organisation</td>
                <td className="td-14" colSpan="2">
                  Participer à la valorisation de l’image de l’organisation sur
                  les médias numériques en tenant compte du cadre juridique et
                  des enjeux économiques
                </td>
                <td className="td-15" colSpan="2">
                  Référencer les services en ligne de l’organisation et mesurer
                  leur visibilité.
                </td>
                <td className="td-16" colSpan="2">
                  Participer à l’évolution d’un site Web exploitant les données
                  de l’organisation.
                </td>
              </tr>
              <tr className="l3" id="preuve">
                <td>Travailler en mode projet</td>
                <td className="td-17" colSpan="2">
                  Analyser les objectifs et les modalités d’organisation d’un
                  projet
                </td>
                <td className="td-18" colSpan="2">
                  Planifier les activités
                </td>
                <td className="td-19" colSpan="2">
                  Évaluer les indicateurs de suivi d’un projet et analyser les
                  écarts
                </td>
              </tr>
            </tbody>
          </table>
        </a>

        <div className="clues">
          <div className="preuves">
            <h1 className="title-clue" ref={this.preuveTitle1}>
              Aucune comptétence selectionné
            </h1>
            <div
              className="preuve p1"
              ref={this.preuve1}
              onClick={this.agrandirImage}
            ></div>
            <h1 className="title-clue" ref={this.preuveTitle2}>
              {" "}
            </h1>
            <div
              className="preuve p2"
              ref={this.preuve2}
              onClick={this.agrandirImage}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
