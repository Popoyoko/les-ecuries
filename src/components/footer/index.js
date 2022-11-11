import './index.css'
import image_1 from'../../assets/image_1.png';

function Footer() {

	return (
        <footer>
        <img src={image_1} className="app-logo" alt="logo" />
        <div className='presbloc_footer'>
          <h1>Les Écuries</h1>
          <p id='adresse'>8 Rue Bachaumont, 75002 Paris</p>
          <p id='site'>lesecuriesbar@gmail.com</p>
        </div>
      </footer>
		
	)
}

export default Footer