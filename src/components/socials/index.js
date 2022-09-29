import './index.css'
import vector_2_socials from'../assets/Vector_2.png';
import image_3_socials from'../assets/Vector_3.png';

function Socials() {

	return (
	    <div className="socials">
            <p>Suivez-nous</p>
            <div className='container-reseaux'>
                <div className='Social'>
                    <img src={vector_2_socials} className="image_2_socials" alt="logo_facebook" />
                </div>
                <div className='Social'>
                    <img src={image_3_socials} className="image_3_socials" alt="logo_instagram" />
                </div>
            </div>
      </div>
	)
}

export default Socials
