import React from "react";
import "./veilleArticle.css";
function Eleve(props) {
  return (
    <div className={`article ${props.articleClass}`}>
      <div
        className="background-article"
        style={{ backgroundImage: `url(${props.articleImage})` }}
      >
        <a
          href={props.articleUrl}
          className="article1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="article-overlay">
            <div className="show-article">
              <h1>Voir l'article  </h1>
            </div>
            <div className="article-text">
              <h1 className="atricle-title">{props.articleTitle}</h1>
              <p className="article-date">{props.articleDate}</p>
              <p className="article-desc">{props.articleDesc}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
export default Eleve;
