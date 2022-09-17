import React from "react";
import {portfolioData} from "../../constants";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioData.map(({ img, title, githubLink, dribbbleLink }, id) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={img} alt="portfolio img" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={githubLink}
                target="_blank"
                className="btn"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href={dribbbleLink}
                target="_blank"
                className="btn btn-primary"
                rel=" noreferrer noopener"
              >
                live demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
