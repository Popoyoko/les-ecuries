import "./index.css";
import logo from "../../assets/logo_les_ecuries.png";

function Footer() {
  return (
    <footer itemProp="footer">
      <img src={logo} className="app-logo" alt="logo" />
      <div className="presbloc_footer" itemProp="description">
        <h1 itemProp="brand">Les Écuries</h1>
        <p id="adresse" itemProp="location">8 Rue Bachaumont, 75002 Paris</p>
        <a href="mailto:lesecuriesbar@gmail.com" itemProp="mail">lesecuriesbar@gmail.com</a>
      </div>
    </footer>
  );
}

export default Footer;
