import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_rgm0lla",
      "template_vdvkbea",
      form.current,
      "D83lVkP8PI-K8k3ne"
    );
    e.target.resend();
  };
  return (
    <section id="contact">
      <h5>get in touch</h5>
      <h2>contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineAlternateEmail className="contact__option-icon" />
            <h4>email</h4>
            <h5>hi@sarastone.com</h5>
            <a href="mailto:hi@sarastone.com" target="_blank" rel="noreferrer">
              send message
            </a>
          </article>

          <article className="contact__option">
            <RiFacebookCircleLine className="contact__option-icon" />
            <h4>facebook</h4>
            <h5>sarastone</h5>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              send message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>whatsapp</h4>
            <h5>+989123456789</h5>
            <a href="https://wa.me" target="_blank" rel="noreferrer">
              send message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="your full name"
            required
          />
          <input type="email" name="email" placeholder="your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
