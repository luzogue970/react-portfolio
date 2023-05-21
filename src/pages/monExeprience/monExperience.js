import "./monExperience.css";
import Nav from "../../components/general/nav/Nav";
import Stages from "../../components/experienceCompoenent/Stages/Stages";
import Tableau from "../../components/experienceCompoenent/tableau/tableau";
import exp1 from "../../image/experienceIcon1.png";
import exp2 from "../../image/experienceIcon2.png";

function monExperience() {
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
      <Stages />
      <div className="legende">
        <table className="color-tableau">
          <tr className="color-tableau-tr1">
            <td>Réalisé dans le cadre des cours</td>
            <td className="carre-couleur c1"></td>
          </tr>
          <tr className="color-tableau-tr2">
            <td>Réalisé dans le cadre d'un apprentissage personnel</td>
            <td className="carre-couleur c4"></td>
          </tr>
          <tr className="color-tableau-tr3">
            <td>Réalisé dans le cadre de mon premier stage</td>
            <td className="carre-couleur c2"></td>
          </tr>
          <tr className="color-tableau-tr4">
            <td>Réalisé dans le cadre de mon second stage</td>
            <td className="carre-couleur c3"></td>
          </tr>
        </table>
      </div>
      <Tableau />
    </div>
  );
}

export default monExperience;
