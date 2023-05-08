import "./veille.css";
import Nav from "../../components/nav/Nav";
import VeilleDefil from "../../components/veille-defilement/veilleDefil";

function veille() {
  return (
    <div className="monExperience">
      <nav>
        <Nav />
      </nav>
      <div className="main">
        <VeilleDefil />
      </div>
    </div>
  );
}

export default veille;
