import "./App.css";
import Nav from "./components/nav/Nav";
import Banner from "./components/banner/Banner";
import Projets from "./components/projets/Projets";
import Stages from "./components/Stages/Stages";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Nav />
      </div>
      <div className="main">
        <Banner />
        <Projets />
        <Stages />
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default App;
