import "./ctas.css";
import vector from "../assets/Vector.png";

function Ctas() {
  return (
    <div className="Ctas">
      <a href="https://pro.guestonline.fr/instabook/bookings/1kATjqd" className="button-link">
        <button className="btn_fond_b" label="Réservation en ligne">
          Réservation en ligne
        </button>
      </a>
      <button className="btn_fond_n" label="Contactez-nous">
        Contactez-nous
        <img src={vector} className="vector" alt="logo_contactez-nous" />
      </button>
    </div>
  );
}

export default Ctas;
