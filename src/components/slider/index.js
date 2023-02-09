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
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(0);

  useEffect(() => {
    const importAll = async () => {
      const context = require.context(
        "../../assets/slider/",
        false,
        /\.(png|jpe?g|svg)$/
      );
      const images = await Promise.all(
        context.keys().map(async (key) => {
          return await context(key);
        })
      );
      setImages(images);
      setLoading(false);
    };
    importAll();
  }, []);

  const incrementItem = () => {
    swiperRef.current?.slideNext();
  };

  const decrementItem = () => {
    swiperRef.current?.slidePrev();
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!images.length) {
    return <div>Aucune image disponible</div>;
  }

  return (
    <>
      <div className="slider">
        <Swiper
          className="swiper"
          loop={true}
          // install Swiper modules

          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            setItem(swiper.activeIndex);
          }}
          // navigation
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide className="slide" key={index}>
                <img src={image} alt={image}></img>
              </SwiperSlide>
            );
          })}
          <div className="footer">
            <div className="infos">

              <h3 className="title">{sliderimage[item] ? sliderimage[item].title : ""}</h3>
              <p>{sliderimage[item] ? sliderimage[item].description : ""}</p>
            </div>

            <div className="navigation">
              <Button className={"swiper-prev"} action={() => decrementItem()}>
                <img src={arrow_left} alt="arrow_left" />
              </Button>
              <Button className={"swiper-next"} action={() => incrementItem()}>
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
