import React, { useState, useRef } from "react";
import {
  Card,
  Button,
  TextField,
  Typography,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import TypescriptIcon from "../assets/mui/TypescriptIcon";
import ReactLogo from "../logo.svg";
import "../assets/css/Sunglasses.css";
import emailjs from "emailjs-com";

const useStyles = makeStyles({
  root: {
    maxWidth: 650,
    margin: "auto",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // flexDirection:'row-reverse'
  },
  cardContent: {
    flex: 1,
  },
  textField: {
    margin: "1em",
  },
  button: {
    display: "block",
    margin: "auto",
  },
});

export const Contact = () => {
  const classes = useStyles();

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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // e.target.reset();
  }

  return (
    <div>
      <Typography variant="h3">Send me an email</Typography>

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
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
