import "./App.css";
import Nav from "./components/general/nav/Nav";
import Banner from "./components/accueilComponent/banner/Banner";
import Footer from "./components/general/Footer/Footer";

function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>

      <div className="main">
        <Banner />
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default App;
