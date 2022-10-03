import './index.css'
import vector_1 from'../assets/Vector_1.png';
import vector_2 from'../assets/Vector_2.png';

function boutton_information() {

	return (
	    <div className="boutton_information">
        <button className='btn_fond_n' label="Notre carte">
           <p>Notre carte</p>
           <img src={vector_1} className="vector_1" alt="logo_Notre carte" />
        </button>
        <button className='btn_fond_n' label="Programmation">
            <p>Programmation</p>
            <img src={vector_2} className="vector_2" alt="logo_Programmation" />
        </button>
      </div>

	)
}

export default boutton_information