import "./index.css";
import React, { useState, useRef, useEffect } from "react";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import sliderimage from "../../assets/slider/index.json";

import arrow_left from "../../assets/arrow-left.png";
import arrow_right from "../../assets/arrow-right.png";
import Button from "../button";

const Slider = () => {
  const swiperRef = useRef();

  const [images, setImages] = useState([]);

  useEffect(() => {
    const importAll = async (r) => {
      r.keys().forEach(async (key) => {
        const img = await r(key);
        setImages((images) => [...images, img]);
      });
    };
    importAll(
      require.context("../../assets/slider/", false, /\.(png|jpe?g|svg)$/)
    );
    console.log(item);
  }, []);

  const [item, setItem] = useState(0);

  const incrementItem = () => {
    swiperRef.current?.slideNext();
    item < sliderimage.length - 1 ? setItem(item + 1) : setItem(0);
  };

  const decrementItem = () => {
    swiperRef.current?.slidePrev();
    item > 0 ? setItem(item - 1) : setItem(sliderimage.length - 1);
    console.log(item);
  };

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
  
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={{
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
          }}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide className="slide" key={index}>
                <img src={image} alt={image}></img>
              </SwiperSlide>
            );
          })}
          <div className="slider-bot">
            <div className="description">
              <h6>{sliderimage[item].title}</h6>
              <p>{sliderimage[item].description}</p>
            </div>

            <div className="navigation">
              <Button
                className={"review-swiper-button-prev"}
                action={() => decrementItem()}
              >
                <img src={arrow_left} alt="arrow_left" />
              </Button>
              <Button
                className={"review-swiper-button-next"}
                action={() => incrementItem()}
              >
                <img src={arrow_right} alt="arrow_right" />
              </Button>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
