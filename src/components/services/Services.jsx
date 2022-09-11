import React from "react";
import "./services.css";
import { TbCheck } from "react-icons/tb";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <TbCheck className="service__list-icon" />
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </li>
            <li>
              <TbCheck className="service__list-icon" />
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </li>
            <li>
              <TbCheck className="service__list-icon" />
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </li>
            <li>
              <TbCheck className="service__list-icon" />
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Front End</h3>
          </div>
          <ul className="service__list">
            <li>
              <TbCheck className="service__list-icon" />
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </li>
            <li>
              <TbCheck className="service__list-icon" />
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </li>
            <li>
              <TbCheck className="service__list-icon" />
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </li>
            <li>
              <TbCheck className="service__list-icon" />
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Back End</h3>
          </div>
          <ul className="service__list">
            <li>
              <TbCheck className="service__list-icon" />
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </li>
            <li>
              <TbCheck className="service__list-icon" />
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </li>
            <li>
              <TbCheck className="service__list-icon" />
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </li>
            <li>
              <TbCheck className="service__list-icon" />
              <p>Lorem Ipsum is simply dummy text of the printing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
