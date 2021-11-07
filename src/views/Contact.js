import React, { useRef } from "react";
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
import { makeStyles } from "@material-ui/core/styles";
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
    if (
      form.current[0].value === "" ||
      form.current[2].value === "" ||
      form.current[4].value === "" ||
      form.current[6].value === ""
    ) {
      alert("Make sure that ALL fields are filled out to send.");
    } else if (!validateEmail(form.current[2].value)) {
      alert("Data entered for email is NOT a valid email.");
    } else {
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
            form.current[0].value = "";
            form.current[2].value = "";
            form.current[4].value = "";
            form.current[6].value = "";
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return (
    <div>
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
                label="*Name"
                name="name"
                variant="outlined"
                fullWidth
              />

              <TextField
                className={classes.textField}
                id="outlined-required"
                label="*Email"
                name="email"
                variant="outlined"
                fullWidth
              />

              <TextField
                className={classes.textField}
                id="outlined-required"
                label="*Subject"
                name="subject"
                variant="outlined"
                fullWidth
              />
              <TextField
                className={classes.textField}
                id="outlined-required"
                label="*Message"
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
