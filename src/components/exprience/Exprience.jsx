import React from "react";
import "./exprience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Exprience = () => {
  return (
    <section id="exprience">
      <h5>What Skills I Have</h5>
      <h2>My Exprience</h2>
      <div className="container container__exprience">
        <div className="exprience__frontend">
          <h3>Front End Development</h3>
          <div className="exprience__content">
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
                <h4>Bootstarp</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="exprience__backend">
          <h3>Back End Development</h3>
          <div className="exprience__content">
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
                <h4>Graqh QL</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
                <h4>Next JS</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
                <h4>Mongoose</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exprience;
