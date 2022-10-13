import "./index.css";
import vector from'../assets/Vector.png';

function PopIn() {
  return (
    <div className="pop-in">
        <p className="text-pop-in">Nous ne pouvons prendre aucune réservation par téléphone.</p>
      <div className="button-reservation">
        <button className="btn_fond_b" label="Réservation en ligne">
          <p>Réservation en ligne</p>
        </button>
        <button className="btn_fond_n" label="Contactez-nous">
          <a href="tel:+33764540974">07 64 54 09 74</a>
          <img src={vector} className="vector" alt="logo_contactez-nous" />
        </button>
      </div>
      <div className="mail-container">
        <p className="text-pop-in">Nous répondons également à toutes vos questions par mail :</p>
        <a href="mailto:lesecuriesbar@gmail.com">lesecuriesbar@gmail.com</a>
      </div>
    </div>
  );
}

export default PopIn;
