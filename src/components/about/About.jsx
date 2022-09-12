import React from "react";
import ME from "../../assets/me-about.jpg";
import "./about.css";
import {aboutData} from "../../constants";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {aboutData.map(({icon, title, detail},index) => {
              return (
                <article key={index} className="about__card">
                  {icon}
                  <h5>{title}</h5>
                  <small>{detail}</small>
                </article>
              );
            })}
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
