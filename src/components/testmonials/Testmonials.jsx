import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { testmonialsData } from "../../constants";

import "swiper/css/pagination";
import "swiper/css";
import "./testmonials.css";

const Testmonials = () => {
  return (
    <section id="testmonials">
      <h5>review from clients</h5>
      <h2>testmonials</h2>

      <Swiper
        className="container testmonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testmonialsData.map(({ img, name, comment }, index) => {
          return (
            <SwiperSlide key={index} className="testmonial">
              <div className="client__avatar">
                <img src={img} alt="client avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {comment}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testmonials;
