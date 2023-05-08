import "./monExperience.css";
import Nav from "../../components/nav/Nav";
import Tableau from "../../components/tableau/tableau";

function monExperience() {
  return (
    <div className="monExperience">
      <nav>
        <Nav />
      </nav>
      <div className="main">
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

export default monExperience;
