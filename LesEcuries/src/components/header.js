import "../styles/header.css";
import image_1 from "../assets/image_1.png";

function Header() {
  return (
    <header>
      <img src={image_1} className="app-logo" alt="logo" />
      <div className="presbloc">
        <p className="les_ecuries">Les Écuries</p>
        <p className="place">8 Rue Bachaumont, 75002 Paris</p>
      </div>
    </header>
  );
}

export default Header;
