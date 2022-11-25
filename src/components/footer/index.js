import './index.css'
import logo from'../../assets/logo_les_ecuries.png';

function Footer() {

	return (
        <footer>
        <img src={logo} className="app-logo" alt="logo" />
        <div className='presbloc_footer'>
          <h1>Les Écuries</h1>
          <p id='adresse'>8 Rue Bachaumont, 75002 Paris</p>
          <p id='site'>lesecuriesbar@gmail.com</p>
        </div>
      </footer>
		
	)
}

export default Footer