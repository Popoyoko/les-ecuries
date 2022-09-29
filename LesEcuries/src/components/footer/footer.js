import './footer.css'
import image_1 from'../assets/image_1.png';

function Footer() {

	return (
        <footer>
        <img src={image_1} className="App-logo" alt="logo" />
        <div className='Presbloc_footer'>
          <h1>Les Écuries</h1>
          <p className='adresse'>8 Rue Bachaumont, 75002 Paris</p>
          <p className='site'>lesecuriesbar@gmail.com</p>
        </div>
      </footer>
		
	)
}

export default Footer