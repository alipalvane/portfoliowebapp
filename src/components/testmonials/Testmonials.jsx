import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import "./testmonials.css";

import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";

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
        <SwiperSlide className="testmonial">
          <div className="client__avatar">
            <img src={avatar1} alt="client avatar" />
          </div>
          <h5 className="client__name">sofia terner</h5>
          <small className="client__review">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without
          </small>
        </SwiperSlide>
        <SwiperSlide className="testmonial">
          <div className="client__avatar">
            <img src={avatar2} alt="client avatar" />
          </div>
          <h5 className="client__name">john farm</h5>
          <small className="client__review">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without
          </small>
        </SwiperSlide>
        <SwiperSlide className="testmonial">
          <div className="client__avatar">
            <img src={avatar3} alt="client avatar" />
          </div>
          <h5 className="client__name">stive mack</h5>
          <small className="client__review">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without
          </small>
        </SwiperSlide>
        <SwiperSlide className="testmonial">
          <div className="client__avatar">
            <img src={avatar4} alt="client avatar" />
          </div>
          <h5 className="client__name">mina hadid</h5>
          <small className="client__review">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testmonials;
