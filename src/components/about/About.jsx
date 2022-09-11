import React from 'react'
import ME from '../../assets/me-about.jpg'
import {TbAward, TbUsers, TbDeviceLaptop} from 'react-icons/tb'
import './about.css';



const About = ()=> {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me about"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className='about__icon'/>
              <h5>Exprience</h5>
              <small>+3 Years Working</small>
            </article>

            <article className="about__card">
              <TbUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <TbDeviceLaptop className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        
      </div>
    </section>
  )
}

export default About