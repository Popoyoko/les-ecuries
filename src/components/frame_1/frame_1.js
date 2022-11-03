import './frame_1.css'
import vector_2_socials from'../assets/Vector_2.png';
import image_3_socials from'../assets/Vector_3.png';

function Frame_1() {

	return (
	    <div className="Frame_1">
            <p>Suivez-nous</p>
            <div className='Socials'>
                <div className='Social'>
                    <a href='https://www.facebook.com/lesecuriesbar/'>
                    <img src={vector_2_socials} className="image_2_socials" alt="logo_facebook" />
                    </a>
                </div>
                <div className='Social'>
                    <a href='https://www.instagram.com/bar_les_ecuries_paris/'>
                    <img src={image_3_socials} className="image_3_socials" alt="logo_instagram" />
                    </a>
                </div>
            </div>
      </div>
	)
}

export default Frame_1
