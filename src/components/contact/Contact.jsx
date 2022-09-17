import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { contactData } from "../../constants";
import "./contact.css";

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
          {contactData.map(
            ({ icon, titleSocial, addSocial, linkSocial }, id) => (
              <article className="contact__option">
                {icon}
                <h4>{titleSocial}</h4>
                <h5>{addSocial}</h5>
                <a href={linkSocial} target="_blank" rel="noreferrer">
                  send message
                </a>
              </article>
            )
          )}
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
