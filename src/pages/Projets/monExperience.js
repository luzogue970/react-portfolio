import "./monExperience.css";
import Nav from "../../components/nav/Nav";
import Tableau from "../../components/experienceCompoenent/tableau/tableau";
import exp1 from "../../image/experienceIcon1.png";
import exp2 from "../../image/experienceIcon2.png";

function Projets() {
  return (
    <div className="monExperience">
      <nav>
        <Nav />
      </nav>
      <div className="section-header">
        <img src={exp1} alt="" />
        <h1 className="page-title">Mon Experience</h1>
        <img src={exp2} alt="" />
      </div>
      <div className="colors">
        <div className="codeCouleur">
          <div className="couleur b1">
            <p>validé dans la cadre des cours</p>
            <div className="carreCouleur c1"></div>
          </div>
          <div className="couleur b2">
            <p>validé dans le cadre du premier stage</p>
            <div className="carreCouleur c2"></div>
          </div>
          <div className="couleur b3">
            <p>validé dans le cadre du deuxième stage</p>
            <div className="carreCouleur c3"></div>
          </div>
        </div>
        <Tableau />
      </div>
    </div>
  );
}

export default Projets;
