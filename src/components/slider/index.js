import "./index.css";
import Button from '../button';
import React, { useRef } from "react";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import image_3_slider from "../../assets/image_3.png";
import image_4_slider from "../../assets/image_4.png";
import image_5_slider from "../../assets/image_5.png";

import arrow_left from "../../assets/arrow-left.png";
import arrow_right from "../../assets/arrow-right.png";

function Slider() {

  const swiperRef = useRef();

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
     nextEl: '.review-swiper-button-next',
     prevEl: '.review-swiper-button-prev',
   }}
      >
        <SwiperSlide className="slide">

      <img src={image_3_slider} alt="image_slider"></img>

        </SwiperSlide>
        <SwiperSlide className="slide">

      <img src={image_4_slider} alt="image_slider" ></img>

        </SwiperSlide>
        <SwiperSlide className="slide">
        
      <img src={image_5_slider} alt="image_slider" ></img>

        </SwiperSlide>
      </Swiper>
      
      <button className="review-swiper-button-next" onClick={() => swiperRef.current?.slidePrev()}><img src={arrow_left} alt="arrow_left" /></button>
      <button className="review-swiper-button-prev" onClick={() => swiperRef.current?.slideNext()}><img src={arrow_right} alt="arrow_right" /></button>

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
          <Button className="review-swiper-button-next" cubic onClick={() => swiperRef.current?.slidePrev()}>
            <img src={arrow_left} alt="arrow_left" />
          </Button>
          <Button className="review-swiper-button-prev" cubic onClick={() => swiperRef.current?.slideNext()}>
            <img src={arrow_right} alt="arrow_right" />
          </Button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Slider;
