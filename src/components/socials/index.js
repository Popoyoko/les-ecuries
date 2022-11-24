import "./index.css";
import vector_2 from'../../assets/Vector_2.png';
import vector_3 from'../../assets/Vector_3.png';
import Button from '../button';

function Socials() {
  return (
    <div className="socials">
      <div className="follow">
        <h2>Suivez-nous</h2>
      </div>
      <div className="socials-button">
        <Button secondary icon href="https://www.facebook.com/lesecuriesbar/">
          <img src={vector_2} className="vector" alt="logo_contactez-nous" />
        </Button>
        <Button
          secondary
          icon
          href="https://www.instagram.com/bar_les_ecuries_paris/"
        >
          <img src={vector_3} className="vector" alt="logo_contactez-nous" />
        </Button>
      </div>
    </div>
  );
}

export default Socials;
