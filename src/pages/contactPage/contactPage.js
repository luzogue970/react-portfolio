import "./contactPage.css";
import Nav from "../../components/general/nav/Nav";
import Contact from "../../components/general/contact/contact";
function ContactPage() {
  return (
    <div className="monExperience">
      <nav>
        <Nav />
      </nav>
      <div className="section-header">
        {/* <img src={exp1} alt="" /> */}
        <h1 className="page-title">Contact</h1>
        {/* <img src={exp2} alt="" /> */}
      </div>
      <Contact />
    </div>
  );
}

export default ContactPage;
