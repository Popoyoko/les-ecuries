import "../styles/ctas.css";
import vector from "../assets/Vector.png";

function Ctas() {
  return (
    <div className="ctas">
      <button className="btn_fond_b" label="Réservation en ligne">
        <p>Réservation en ligne</p>
      </button>
      <button className="btn_fond_n" label="Contactez-nous">
        <p>Contactez-nous</p>
        <img src={vector} className="vector" alt="logo_contactez-nous" />
      </button>
    </div>
  );
}

export default Ctas;
