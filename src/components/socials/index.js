import "./index.css";
import icon_facebook from'../../assets/icon_facebook.png';
import icon_instagram from'../../assets/icon_instagram.png';
import Button from '../button';

function Socials() {
  return (
    <div className="socials" itemProp="social">
      <div className="follow" itemProp="follow">
        <h2>Suivez-nous</h2>
      </div>
      <div className="socials-button">
        <Button secondary icon href="https://www.facebook.com/lesecuriesbar/">
          <img src={icon_facebook} className="vector" alt="logo_contactez-nous" />
        </Button>
        <Button
          secondary
          icon
          href="https://www.instagram.com/bar_les_ecuries_paris/"
        >
          <img src={icon_instagram} className="vector" alt="logo_contactez-nous" />
        </Button>
      </div>
    </div>
  );
}

export default Socials;
