import React, { useState, useRef } from "react";
import ReactLogo from "../logo.svg";
import "../assets/css/Sunglasses.css";
import emailjs from "emailjs-com";

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
      {/* 
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" />
          <br />
          <input type="email" placeholder="Email Address" name="email" />
          <br />
          <input type="text" placeholder="Subject" name="subject" />
          <br />
          <textarea
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
      </div> */}

      {/* my goal is below */}
      <div className={classes.root}>
        <Typography variant="h3">Send me an email</Typography>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
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
            <form ref={form} onSubmit={sendEmail}>
              <TextField
                className={classes.textField}
                id="outlined-required"
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
              />
              <br />
              <TextField
                className={classes.textField}
                id="outlined-required"
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
              />
              <br />
              <TextField
                className={classes.textField}
                label="Subject"
                name="subject"
                variant="outlined"
                fullWidth
              />
              <TextField
                className={classes.textField}
                label="Message"
                name="message"
                variant="outlined"
                fullWidth
                multiline
              />
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
                value="Send"
              >
                Send
              </Button>
            </form>
          </CardContent>

          <br />

          <CardActions></CardActions>
        </Card>
        <br />
        <Typography>
          <TypescriptIcon />{" "}
        </Typography>
      </div>
    </div>
  );
};
