import "./veille.css";
import Nav from "../../components/general/nav/Nav";
import VeilleDefil from "../../components/veilleComponent/veille-defilement/veilleDefil";
import VeilleOutils from "../../components/veilleComponent/veilleOutils/veilleOutils";
import cyber1 from "../../image/maVeille/cyber1.png";
import cyber2 from "../../image/maVeille/cyber2.png";

function veille() {
  return (
    <div className="monExperience">
      <nav>
        <Nav />
      </nav>
      <div className="veille-main">
        <div className="section-header">
          <img src={cyber1} alt="" />
          <h1 className="page-title">Veille Cyber</h1>
          <img src={cyber2} alt="" />
        </div>
        <VeilleOutils />
        <div className="defilement section">
          <h1 className="section-title">Derniers acticles</h1>
          <VeilleDefil />
        </div>
      </div>
    </div>
  );
}

export default veille;
