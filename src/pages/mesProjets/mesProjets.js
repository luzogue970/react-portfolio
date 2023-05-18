import "./mesProjets.css";
import Nav from "../../components/general/nav/Nav";
import Projets from "../../components/accueilComponent/projets/Projets";
import web from "../../image/mesProjetIcon1.png";
import mobile from "../../image/mesProjetIcon2.png";

function mesProjets() {
  return (
    <div className="mesProjets">
      <Nav />
      <div className="main-projects">
        <div className="section-header">
          <img src={web} alt="" />
          <h1 className="page-title">Mes Projets</h1>
          <img src={mobile} alt="" />
        </div>
        <Projets />
      </div>
    </div>
  );
}

export default mesProjets;
