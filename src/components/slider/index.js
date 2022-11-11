import './index.css'

import picture_burger from'../../assets/picture-burger.png';
import picture_dj from'../../assets/picture-dj.png';
import picture_coktail from'../../assets/picture-coktail.png';

function Slider() {

	return (
	    <div className="slider">
        <img src={picture_burger} alt="image_slider" />
        <img src={picture_dj} alt="image_slider" />
        <img src={picture_coktail} alt="image_slider" />
      </div>
	)
}

export default Slider
