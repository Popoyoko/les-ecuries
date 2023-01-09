import "./index.css";
import React, { useState, useRef } from "react";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import sliderimage from "../../assets/slider/index.json";
// import image_coktail from "../../assets/image_coktail.png";
// import image_dj from "../../assets/image_dj.png";
// import image_food from "../../assets/image_food.png";

import arrow_left from "../../assets/arrow-left.png";
import arrow_right from "../../assets/arrow-right.png";

function Slider() {
  const swiperRef = useRef();
  // console.log(sliderimage);
  const basepath = "../../assets/slider/";

  const [item, setItem] =  useState(0);
  const incrementItem =() => {
    swiperRef.current?.slidePrev()
    item < sliderimage.length &&
      setItem(item + 1);
  };

  const decrementItem =() => {
    swiperRef.current?.slideNext()
    item > sliderimage.length &&
      setItem(item - 1);
  };

  console.log(sliderimage);
  return (
    <>
      <div className="slider">
        <Swiper
          className="swiper"
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


          
          {sliderimage.map((object) => (
            <SwiperSlide className="slide">
              <img src={basepath + object.name} alt="image_slider"></img>
            </SwiperSlide>
          ))}
          <div className="slider-bot">
            
              <div className="description">
                <h6>{sliderimage[item].title}</h6>
                <p>{sliderimage[item].description}</p>
              </div>
            

            <div className="navigation">
              <button
                className="button cubic review-swiper-button-next"
                onClick={() => incrementItem()}
              >
                <img src={arrow_left} alt="arrow_left" />
              </button>
              <button
                className="button cubic review-swiper-button-prev"
                onClick={() => decrementItem()}
              >
                <img src={arrow_right} alt="arrow_right" />
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
