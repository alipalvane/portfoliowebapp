import React from "react";
import "./exprience.css";
import { frontExprience, backEndExprience } from "../../constants";

const Exprience = () => {
  return (
    <section id="exprience">
      <h5>What Skills I Have</h5>
      <h2>My Exprience</h2>
      <div className="container container__exprience">
        <div className="exprience__frontend">
          <h3>Front End Development</h3>
          <div className="exprience__content">
            {frontExprience.map(({ title, level, icon }, index) => {
              return (
                <article className="exprience__details" key={index}>
                  {icon}
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="exprience__backend">
          <h3>Back End Development</h3>
          <div className="exprience__content">
            {backEndExprience.map(({ title, level, icon }, index) => {
              return (
                <article className="exprience__details" key={index}>
                  {icon}
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exprience;
