import React, { Component } from "react"; 
import "./Stages.css";
import sb_stage from "../../../image/sb_stage.png";
import cn_stage from "../../../image/cn_stage.png";
import rapportDeStage1 from "../../../pdf/rapportDeStage1.pdf";
import rapportDeStage2 from "../../../pdf/rapportDeStage2.pdf";
export default class stages extends Component {
  render() {
    return (
      <div className="stages section" id="experiences">
        <h1 className="section-title">Mes Experience</h1>
        <div className="stages-boxes">
          <div className="stage-box">
            <div className="text">
              <h1 className="stage-title">stage première année</h1>
              <p>
                J'ai effectué en première année un stage au sein de la DMSI
                direction mutualiser des système informatique de Saint Brieuc.
                Durant ce stage j'ai beaucoup appris sur l'assistance
                utilisateur.
                <a
                  href={rapportDeStage1}
                  className="button1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ➔ rapport de stage
                </a>
              </p>
            </div>
            <div
              className="s-box-image"
              style={{ backgroundImage: `url(${sb_stage})` }}
            ></div>
          </div>

          <div className="stage-box stbox2">
            <div className="text">
              <h1 className="stage-title">stage deuxième année</h1>
              <p>
                Mon stage de deuxième année de BTS SIO a été réalisé au sein de
                la cantiner numérique de Quimper ou j'ai pu réalisé 2 site
                wordpress pour des association de Ergue-Gaberic
                <a
                  href={rapportDeStage2}
                  className="button1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ➔ rapport de stage
                </a>
              </p>
            </div>
            <div
              className="s-box-image"
              style={{ backgroundImage: `url(${cn_stage})` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
