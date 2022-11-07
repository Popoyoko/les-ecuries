import "./index.css";
import image_5_slider from "../assets/image_5.png";
import arrow_left from "../assets/arrow-left.png"
import arrow_right from "../assets/arrow-right.png"

function PopIn() {
  return (
    <div className="pop-in">
      <div className="container-top-pop-in">
        <img src={image_5_slider} alt="image_slider" />
      </div>

      <div className="container-bot-pop-in">
        <div className="description">
          <h6>Notre burger accompagné de ses frites</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempor interdum sit non arcu
            tristique. Sit quis ac diam phasellus posuere nunc eu lacus. Ornare
            vel id ac justo. Turpis fringilla nisl augue id tortor sollicitudin.
          </p>
        </div>

        <div className="navigation">
          <button><img src={arrow_left} alt="arrow_left" /></button>
          <button><img src={arrow_right} alt="arrow_right" /></button>
        </div>
      </div>
    </div>
  );
}

export default PopIn;