import './index.css'
import vector from'../assets/Vector.png';

function Boutton() {

	return (
	    <div className="boutton">
            <a href='https://pro.guestonline.fr/instabook/bookings/1kATjqd'>
                <button className='btn_fond_b' label="Réservation en ligne">
                    <p>Réservation en ligne</p>
                </button>
            </a>
        <button className='btn_fond_n' label="Contactez-nous">
            <p>Contactez-nous</p>
            <img src={vector} className="vector" alt="logo_contactez-nous" />
        </button>
      </div>

	)
}

export default Boutton
