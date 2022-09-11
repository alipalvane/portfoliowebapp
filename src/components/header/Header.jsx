import React from 'react';
import CTA from './CTA.jsx';
import HeaderSocials from './HeaderSocials.jsx';
import './header.css';
import ME from '../../assets/me.png';

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sara Stone</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header