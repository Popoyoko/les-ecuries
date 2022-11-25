import "./index.css";
import { Slide } from "react-slideshow-image";

import image_3_slider from "../../assets/image_3.png";
import image_4_slider from "../../assets/image_4.png";
import image_5_slider from "../../assets/image_5.png";

import arrow_left from "../../assets/arrow-left.png";
import arrow_right from "../../assets/arrow-right.png";

function Slider() {
  const properties = {
    duration: 5000,
    transitionDuration: 500, 
    infinite: true,
    indicators: true,
    arrows: true,
  };

  return (
    <div className="slider">
      <div className="container-top-slider">
        <Slide {...properties}>
          <div className="each-slide">
            <div><img src={image_3_slider} alt="image_slider" /></div>
          </div>
          <div className="each-slide">
          <div><img src={image_4_slider} alt="image_slider" /></div>
          </div>

        </Slide>
      </div>

      <div className="container-bot-slider">
        <div className="description">
          <h6>Notre burger accompagné de ses frites</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempor interdum sit non arcu
            tristique. Sit quis ac diam phasellus posuere nunc eu lacus. Ornare
            vel id ac justo. Turpis fringilla nisl augue id tortor sollicitudin.
          </p>
        </div>

        <div className="navigation">
          <button>
            <img src={arrow_left} alt="arrow_left" />
          </button>
          <button>
            <img src={arrow_right} alt="arrow_right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
