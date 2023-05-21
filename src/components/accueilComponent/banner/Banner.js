import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import Typewriter from "typewriter-effect";
import mathieu from "../../../image/mathieu.PNG";
import cv2023 from "../../../pdf/cv2023.pdf";
function Banner() {
  return (
    <div className="banner section" id="haut">
      <div className="presentation1">
        <h1 className="title-presentation1">
          <Typewriter
            onInit={(typewriter) => {
              const languages = [
                ` JS`,
                ` java`,
                ` angular`,
                ` react`,
                ` android studio`,
              ];
              const colors = [
                `#ba34eb`,
                ` #FFC107`,
                `#F44336`,
                `#8BC34A`,
                `#03A9F4`,
              ];
              typewriter.typeString(
                "Bonjour je m'appelle Mathieu <br> et je developpe sur "
              );
              for (let i = 0; i < 50; i++) {
                for (let j = 0; j < languages.length; j++) {
                  typewriter
                    .typeString(
                      `<strong style="color:` +
                        colors[j] +
                        `">` +
                        languages[j] +
                        `</strong>`
                    )
                    .pauseFor(100)
                    .deleteChars(languages[j].length);
                }
              }
              typewriter.start();
            }}
          />
        </h1>

        <div className="media-container">
          <div className="media-btn">
            <a
              href="https://www.linkedin.com/in/mathieu-le-provost-392291227/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="aaaa"
              />
            </a>
          </div>
          <div className="media-btn">
            <a
              href="https://github.com/luzogue970"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"
                alt="icones"
                className="icones"
              />
            </a>
          </div>
          <div className="media-btn">
            <a href="https://www.linkedin.com/in/mathieu-le-provost-392291227/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                alt="icones"
                className="icones"
              />
            </a>
          </div>

          <div className="media-btn">
            <a href="https://www.linkedin.com/in/mathieu-le-provost-392291227/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"
                alt="icones"
                className="icones"
              />
            </a>
          </div>
          <div className="media-btn">
            <a href="https://www.linkedin.com/in/mathieu-le-provost-392291227/">
              <img
                src="https://cdn.icon-icons.com/icons2/836/PNG/512/Twitter_icon-icons.com_66803.png"
                alt="icones"
                className="icones"
              />
            </a>
          </div>
        </div>
        <div className="le2">
          <a
            class="btn btn-submit"
            href={cv2023}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir mon cv
          </a>
          <Link to={"/mes-projets"} className="btn btn-info">
            Mes projets
          </Link>
          <Link to={"/ma-veille"} className="btn btn-warning">
            Ma veille
          </Link>
          <Link to={"/mon-experience"} className="btn btn-delete">
            Mon experience
          </Link>
        </div>
      </div>

      <div className="presentation2">
        <div className="container profile-container">
          <div
            className="profile-picture"
            style={{ backgroundImage: `url(${mathieu})` }}
          ></div>
          <h1>Mes objectifs</h1>
          <p>
            Actullement Etudiant au lycée chaptal de Quimper je souhaite
            approfondir mes connaissance en développement <strong>web</strong>{" "}
            en vu de ma futur alternance
          </p>
        </div>
      </div>
    </div>
  );
}
export default Banner;
