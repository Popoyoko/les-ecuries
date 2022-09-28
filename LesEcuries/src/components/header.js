import '../styles/header.css'
import image_1 from'../assets/image_1.png';

function Header() {

	return (
	    <header>
            <img src={image_1} className="App-logo" alt="logo" />
            <div className="Presbloc">
            <p className='LesEcuries'>Les Écuries</p>
            <p className='Place'>8 Rue Bachaumont, 75002 Paris</p>
            </div>
        </header>
		
	)
}

export default Header
