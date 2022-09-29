import "../styles/slider.css";
import image_3_slider from "../assets/image_3.png";
import image_4_slider from "../assets/image_4.png";
import image_5_slider from "../assets/image_5.png";

function Slider() {
  return (
    <div className="slider">
      <img src={image_3_slider} className="image_3_slider" alt="image_slider" />
      <img src={image_4_slider} className="image_4_slider" alt="image_slider" />
      <img src={image_5_slider} className="image_5_slider" alt="image_slider" />
    </div>
  );
}

export default Slider;
