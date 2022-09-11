import React, { useState } from "react";
import "./nav.css";
import {
  TbSmartHome,
  TbUser,
  TbTrophy,
  TbStack,
  TbMessageCircle2,
} from "react-icons/tb";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#header"
        onClick={() => setActiveNav("#header")}
        className={activeNav === "#header" ? "active" : ""}
      >
        <TbSmartHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <TbUser />
      </a>
      <a
        href="#exprience"
        onClick={() => setActiveNav("#exprience")}
        className={activeNav === "#exprience" ? "active" : ""}
      >
        <TbTrophy />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <TbStack />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <TbMessageCircle2 />
      </a>
    </nav>
  );
};

export default Nav;
