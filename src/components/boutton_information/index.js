import './index.css'
import vector_1 from'../assets/Vector_1.png';
import vector_2 from'../assets/Vector_2.png';

function boutton_information() {

	return (
	    <div className="boutton_information">
            <a href='http://lesecuries-bar.com/wp-content/uploads/2015/06/Menu-Les-E%CC%81curies-Site.pdf'>
                <button className='btn_fond_n' label="Notre carte">
                    <p>Notre carte</p>
                    <img src={vector_1} className="vector_1" alt="logo_Notre carte" />
                </button>
            </a>


        <a href='https://www.facebook.com/lesecuriesbar/events'>
        <button className='btn_fond_n' label="Programmation">
            <p>Programmation</p>
            <img src={vector_2} className="vector_2" alt="logo_Programmation" />
        </button>
        </a>
      </div>

	)
}

export default boutton_information