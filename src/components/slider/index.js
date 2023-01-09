import "./index.css";
import React, { useRef} from "react";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import sliderimage from "../../assets/slider/index.json"
// import image_coktail from "../../assets/image_coktail.png";
// import image_dj from "../../assets/image_dj.png";
// import image_food from "../../assets/image_food.png";

import arrow_left from "../../assets/arrow-left.png";
import arrow_right from "../../assets/arrow-right.png";

function Slider() {
  const swiperRef = useRef();
// console.log(sliderimage);

console.log(sliderimage);
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
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={{
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
          }}
        >
          {sliderimage.map(object => (
            <SwiperSlide className="slide">
            <img src={object.path} alt="image_slider"></img>
          </SwiperSlide>
          ))}
          
          {/* <SwiperSlide className="slide">
            <img src={image_coktail} alt="image_slider"></img>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src={image_dj} alt="image_slider"></img>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src={image_food} alt="image_slider"></img>
          </SwiperSlide> */}
        </Swiper>

        <div className="container-bot-slider">
          {sliderimage.map((object) => {
          <div className="description">
            <h6>{object.title}</h6>
            <p>
              {object.description}
            </p>
          </div>
          })}
          {/* <div className="description">
            <h6>Notre burger accompagné de ses frites</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempor interdum sit non
              arcu tristique. Sit quis ac diam phasellus posuere nunc eu lacus.
              Ornare vel id ac justo. Turpis fringilla nisl augue id tortor
              sollicitudin.
            </p>
          </div> */}

          <div className="navigation">
            <button
              className="button cubic review-swiper-button-next"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src={arrow_left} alt="arrow_left" />
            </button>
            <button
              className="button cubic review-swiper-button-prev"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src={arrow_right} alt="arrow_right" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
