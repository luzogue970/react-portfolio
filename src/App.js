import "./App.css";
import Nav from "./components/general/nav/Nav";
import Banner from "./components/accueilComponent/banner/Banner";
import Projets from "./components/accueilComponent/projets/Projets";
import Stages from "./components/accueilComponent/Stages/Stages";
import Footer from "./components/general/Footer/Footer";

function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>

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
