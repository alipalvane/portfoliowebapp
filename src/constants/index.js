import { BsPatchCheckFill } from "react-icons/bs";
import { TbAward, TbUsers, TbDeviceLaptop } from "react-icons/tb";
import { TbCheck } from "react-icons/tb";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";

import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";

import img1 from "../assets/portfolio1.jpg";
import img2 from "../assets/portfolio2.jpg";
import img3 from "../assets/portfolio3.jpg";
import img4 from "../assets/portfolio4.jpg";
import img5 from "../assets/portfolio5.png";
import img6 from "../assets/portfolio6.jpg";

export const frontExprience = [
  {
    title: "HTML",
    level: "Exprienced",
    icon: <BsPatchCheckFill className="exprience__details-icon" />,
  },
  {
    title: "CSS",
    level: "Intermediate",
    icon: <BsPatchCheckFill className="exprience__details-icon" />,
  },
  {
    title: "Javascript",
    level: "Exprienced",
    icon: <BsPatchCheckFill className="exprience__details-icon" />,
  },
  {
    title: "Bootstarp",
    level: "Exprienced",
    icon: <BsPatchCheckFill className="exprience__details-icon" />,
  },
  {
    title: "Tailwind",
    level: "Exprienced",
    icon: <BsPatchCheckFill className="exprience__details-icon" />,
  },
  {
    title: "React",
    level: "Exprienced",
    icon: <BsPatchCheckFill className="exprience__details-icon" />,
  },
];

export const backEndExprience = [
  {
    title: "Node JS",
    level: "Exprienced",
    icon: <BsPatchCheckFill className="exprience__details-icon" />,
  },
  {
    title: "Mongo DB",
    level: "Intermediate",
    icon: <BsPatchCheckFill className="exprience__details-icon" />,
  },
  {
    title: "Graqh QL",
    level: "Exprienced",
    icon: <BsPatchCheckFill className="exprience__details-icon" />,
  },
  {
    title: "Next JS",
    level: "Exprienced",
    icon: <BsPatchCheckFill className="exprience__details-icon" />,
  },
  {
    title: "Mongoose",
    level: "Exprienced",
    icon: <BsPatchCheckFill className="exprience__details-icon" />,
  },
];

export const aboutData = [
  {
    icon: <TbAward className="about__icon" />,
    title: "Exprience",
    detail: "+3 Years Working",
  },
  {
    icon: <TbUsers className="about__icon" />,
    title: "Clients",
    detail: "200+ Worldwide",
  },
  {
    icon: <TbDeviceLaptop className="about__icon" />,
    title: "Projects",
    detail: "80+ Completed",
  },
];

export const serviceData = [
  {
    title: "UI/UX Design",
    serviceList: [
      {
        icon: <TbCheck className="service__list-icon" />,
        text: "Lorem Ipsum is simply dummy text of the printing",
      },
      {
        icon: <TbCheck className="service__list-icon" />,
        text: "Lorem Ipsum is simply dummy text of the printing",
      },
      {
        icon: <TbCheck className="service__list-icon" />,
        text: "Lorem Ipsum is simply dummy text of the printing",
      },
      {
        icon: <TbCheck className="service__list-icon" />,
        text: "Lorem Ipsum is simply dummy text of the printing",
      },
    ],
  },

  {
    title: "front end developer",
    serviceList: [
      {
        icon: <TbCheck className="service__list-icon" />,
        text: "Lorem Ipsum is simply dummy text of the printing",
      },
      {
        icon: <TbCheck className="service__list-icon" />,
        text: "Lorem Ipsum is simply dummy text of the printing",
      },
      {
        icon: <TbCheck className="service__list-icon" />,
        text: "Lorem Ipsum is simply dummy text of the printing",
      },
      {
        icon: <TbCheck className="service__list-icon" />,
        text: "Lorem Ipsum is simply dummy text of the printing",
      },
    ],
  },

  {
    title: "back end developer",
    serviceList: [
      {
        icon: <TbCheck className="service__list-icon" />,
        text: "Lorem Ipsum is simply dummy text of the printing",
      },
      {
        icon: <TbCheck className="service__list-icon" />,
        text: "Lorem Ipsum is simply dummy text of the printing",
      },
      {
        icon: <TbCheck className="service__list-icon" />,
        text: "Lorem Ipsum is simply dummy text of the printing",
      },
      {
        icon: <TbCheck className="service__list-icon" />,
        text: "Lorem Ipsum is simply dummy text of the printing",
      },
    ],
  },
];

export const testmonialsData = [
  {
    img: avatar1,
    name: "sofia terner",
    comment:
      "In publishing and graphic design, Lorem ipsum is a placeholder text In publishing and graphic design",
  },
  {
    img: avatar2,
    name: "john farm",
    comment:
      "In publishing and graphic design, Lorem ipsum is a placeholder text In publishing and graphic design",
  },
  {
    img: avatar3,
    name: "stive mack",
    comment:
      "In publishing and graphic design, Lorem ipsum is a placeholder text In publishing and graphic design",
  },
  {
    img: avatar4,
    name: "mina hadid",
    comment:
      "In publishing and graphic design, Lorem ipsum is a placeholder text In publishing and graphic design",
  },
];

export const portfolioData = [
  {
    img: img1,
    title: "portfolio item title",
    githubLink: "https://github.com",
    dribbbleLink: "https://dribbble.com",
  },
  {
    img: img2,
    title: "portfolio item title",
    githubLink: "https://github.com",
    dribbbleLink: "https://dribbble.com",
  },
  {
    img: img3,
    title: "portfolio item title",
    githubLink: "https://github.com",
    dribbbleLink: "https://dribbble.com",
  },
  {
    img: img4,
    title: "portfolio item title",
    githubLink: "https://github.com",
    dribbbleLink: "https://dribbble.com",
  },
  {
    img: img5,
    title: "portfolio item title",
    githubLink: "https://github.com",
    dribbbleLink: "https://dribbble.com",
  },
  {
    img: img6,
    title: "portfolio item title",
    githubLink: "https://github.com",
    dribbbleLink: "https://dribbble.com",
  },
];

export const contactData = [
  {
    icon: <MdOutlineAlternateEmail className="contact__option-icon" />,
    titleSocial: "email",
    addSocial: "hi@sarastone.com",
    linkSocial: "mailto:hi@sarastone.com",
  },
  {
    icon: <RiFacebookCircleLine className="contact__option-icon" />,
    titleSocial: "facebook",
    addSocial: "sarastone",
    linkSocial: "https://facebook.com",
  },
  {
    icon: <AiOutlineWhatsApp className="contact__option-icon" />,
    titleSocial: "whatsapp",
    addSocial: "+989123456789",
    linkSocial: "https://wa.me",
  },
];
