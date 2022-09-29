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
          <p>07 64 54 09 74</p>
          <img src={vector} className="vector" alt="logo_contactez-nous" />
        </button>
      </div>
      <div className="mail-container">
        <p className="text-pop-in">Nous répondons également à toutes vos questions par mail :</p>
        <p id="mail">lesecuriesbar@gmail.com</p>
      </div>
    </div>
  );
}

export default PopIn;