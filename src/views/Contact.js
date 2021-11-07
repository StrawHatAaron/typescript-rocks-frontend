import React, { useState, useRef } from "react";
import ReactLogo from "../logo.svg";
import "../assets/css/Sunglasses.css";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    e.preventDefault();

    emailjs
      .sendForm(
        "service_1c7xf2v",
        "template_3f1eh49",
        form.current,
        "user_T2BzmJ5JGH1ArbLs4gfSV"
      )
      .then(
        (result) => {
          alert(
            "Email sent successfully. Please check your email for confirmation."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    // e.target.reset();
  }

  return (
    <div>
      <h3>Send me an email</h3>

      <div className="glasses-container">
        <div className="glasses">
          <img
            src={ReactLogo}
            className="react-logo App-logo"
            alt="React logo"
          />
          <div className="g-top "></div>
          <div className="g-left glass"></div>
          <div className="g-right glass"></div>
        </div>
      </div>

      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" />
          <br />
          <input type="email" placeholder="Email Address" name="email" />
          <br />
          <input type="text" placeholder="Subject" name="subject" />
          <br />
          <textarea
            className="form-control"
            id=""
            cols="30"
            rows="8"
            placeholder="Your message"
            name="message"
          ></textarea>
          <br />
          <input
            type="submit"
            className="btn btn-info"
            value="Send Message"
          ></input>
        </form>
      </div>
    </div>
  );
};
