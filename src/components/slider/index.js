import "./index.css";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// import {useSwiper} from "swiper/react";
import "swiper/css";

import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import image_3_slider from "../../assets/image_3.png";
import image_4_slider from "../../assets/image_4.png";
import image_5_slider from "../../assets/image_5.png";

import arrow_left from "../../assets/arrow-left.png";
import arrow_right from "../../assets/arrow-right.png";

function Slider() {
  // const swiper = useSwiper();

  return (
    <>
    <div className="slider">
      <Swiper
        className="container-top-slider"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="slide">
          <img src={image_3_slider} alt="image_slider" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={image_4_slider} alt="image_slider" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={image_5_slider} alt="image_slider" />
        </SwiperSlide>
{/* 
        <button onClick={() => swiper.slidesPerView()}>
          <img src={arrow_left} alt="arrow_left" />
        </button>
        <button onClick={() => swiper.slideNext()}>
          <img src={arrow_right} alt="arrow_right" />
        </button>
         */}
      </Swiper>
      
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
    </>
  );
}

export default Slider;
