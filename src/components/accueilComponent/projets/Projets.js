import React, { Component } from "react";
import "./Projets.css";
import devWeb from "../../../image/dev_web.jpg";
import devMobile from "../../../image/dev_mobile.jpg";

export default class Projets extends Component {
  render() {
    return (
      <div className="projets section">
        <div className="achor" id="projets"></div>
        <h1 className="section-title">Mes Projets</h1>
        <div className="projets-boxes">
          <a
            href="https://luzogue970.github.io/biblioSite/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-boxe">
              <div
                className="backgrond-image"
                style={{ backgroundImage: `url(${devWeb})` }}
              >
                <div className="overlay">
                  <h1 className="projet-title">Projets web</h1>
                </div>
              </div>
            </div>
          </a>
          <div className="p-boxe">
            <div
              className="backgrond-image"
              style={{ backgroundImage: `url(${devMobile})` }}
            >
              <div className="overlay">
                <h1 className="projet-title">Projets mobiles</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
