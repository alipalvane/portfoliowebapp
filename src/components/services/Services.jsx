import React from "react";
import "./services.css";
import { serviceData } from "../../constants";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {serviceData.map(({ title, serviceList }, index) => {
          return (
            <article key={index} className="service">
              <div className="service__head">
                <h3>{title}</h3>
              </div>
              <ul className="service__list">
                {serviceList.map(({ icon, text, index }) => {
                  return (
                    <li key={index}>
                      {icon}
                      <p>{text}</p>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
