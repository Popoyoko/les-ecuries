import './index.css'
import logo from '../../assets/logo_les_ecuries.png';

function Header() {

    return (
        <header>
            <img src={logo} className="app-logo" alt="logo" />
            <div className="information-header">
                <h1 id='les-ecuries'>Les Écuries</h1>
                <p className='place'>8 Rue Bachaumont, 75002 Paris</p>
            </div>
        </header>

    )
}

export default Header;
