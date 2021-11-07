import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import "../assets/css/home.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 700,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    gridIam: {
      marginTop: 1,
    },
  })
);

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <body className="c20">
          <p className="c10">
            <span className="c11">Aaron Miller</span>
          </p>
          <p className="c10">
            <span className="c23">the_nerd_aaron@hotmail.com</span>
          </p>
          <p className="c10 c19">
            <span className="c15"></span>
          </p>
          <p className="c2">
            <span className="c5">SUMMARY OF QUALIFICATIONS</span>
          </p>
          <p className="c12">
            <span className="c0"></span>
          </p>
          <p className="c14">
            <span className="c0">
              Skilled Software Engineer that has experience in network
              operations, version control, programming, and unit testing.
              Experience in reactive, functional, and object oriented
              programming paradigms. Most recent work at State Compensation
              Insurance Fund includes managing Visual Basic code bases,
              monitoring the MPLS network, and communicating with executive
              management about active service issues. Passionate about web based
              technologies and working on frontend projects in ReactJS. My
              recent projects include managing asynchronous tasks, global state,
              and responsive user interfaces.
            </span>
          </p>
          <p className="c12">
            <span className="c0"></span>
          </p>
          <ul className="c3 lst-kix_8swxdjyae9c9-0 start">
            <li className="c4 li-bullet-0">
              <span className="c0">
                Excellent task management. Ability to handle multiple projects
                simultaneously.
              </span>
            </li>
            <li className="c4 li-bullet-0">
              <span className="c0">
                Experience and proficiency in translating information from
                technical to executive/management terminology.
              </span>
            </li>
            <li className="c4 li-bullet-0">
              <span className="c0">
                Experience in bleeding edge frameworks, and translating them to
                real-world products.
              </span>
            </li>
          </ul>
          <p className="c2 c19">
            <span className="c5"></span>
          </p>
          <p className="c2 c19">
            <span className="c5"></span>
          </p>
          <p className="c2">
            <span className="c5">EDUCATION</span>
          </p>
          <p className="c12">
            <span className="c5"></span>
          </p>
          <p className="c14">
            <span className="c5">California State University, Sacramento</span>
          </p>
          <p className="c14">
            <span className="c0">B.S. Computer Science, Cum Laude</span>
          </p>
          <p className="c12">
            <span className="c7 c6"></span>
          </p>
          <p className="c12">
            <span className="c6 c7"></span>
          </p>
          <p className="c2">
            <span className="c9">WORK EXPERIENCE</span>
          </p>
          <p className="c12 c18">
            <span className="c5"></span>
          </p>
          <p className="c14 c18">
            <span className="c5">
              Information Technology Associate, State Compensation Insurance
              Fund{" "}
            </span>
          </p>
          <p className="c14">
            <span className="c1">
              Network Operations Center &bull; Vacaville, CA
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="c17 c9">10/2018 - Present</span>
          </p>
          <ul className="c3 lst-kix_list_1-0 start">
            <li className="c8 li-bullet-0">
              <span className="c0">
                Created a Visual Basic application to scan through over 100,000
                email alerts and generate a report showing over 10,000 emails
                were false positive security alerts generated by devices on the
                organization&rsquo;s network.
              </span>
            </li>
            <li className="c8 li-bullet-0">
              <span className="c0">
                Complete testing and Visual Basic coding assignments in a timely
                manner for Excel files that automate, and double checks data NOC
                staff entered to send email notifications to all internal IT
                personnel.
              </span>
            </li>
            <li className="c8 li-bullet-0">
              <span className="c0">
                Conduct critical analysis of tier 2 and 3 explanations for
                service outages and accept or request more information to
                provide informative updates, root causes and resolutions.
              </span>
            </li>
            <li className="c8 li-bullet-0">
              <span className="c0">
                Monitor SolarWinds alerts for Cron and SSH daemon availability,
                server storage left, the health of the network interface and
                disk and the percentage of CPU and RAM actively being used.
              </span>
            </li>
            <li className="c8 li-bullet-0">
              <span className="c0">Timely analyzes and appropriately </span>
              <span className="c1">manages</span>
              <span className="c0">
                &nbsp;system generated alerts and human requests by making
                immediate decisions regarding ESP ticket tracking, escalation
                timeframes and ongoing request for change maintenance.
              </span>
            </li>
          </ul>
          <p className="c12">
            <span className="c0"></span>
          </p>
          <p className="c14 c18">
            <span className="c5">Software Engineer, tCheck</span>
          </p>
          <p className="c14">
            <span className="c1">
              Rocklin, CA
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="c24">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="c17 c9">11/2017 - 10/2018</span>
          </p>
          <ul className="c3 lst-kix_list_2-0 start">
            <li className="c8 li-bullet-0">
              <span className="c0">
                Programmed in React Native, Swift and Objective C for the
                application tCheck. Currently in the App and Play Store.
              </span>
            </li>
            <li className="c8 li-bullet-0">
              <span className="c0">
                Attended weekly engineering meetings and used Git&rsquo;s
                Version Control to productively merge and work in a team of up
                to 5 developers on one code base at once.
              </span>
            </li>
            <li className="c8 li-bullet-0">
              <span className="c0">
                Tested additions and modifications of No-SQL databases that sync
                server-side and client-side data before making data migrations
                to production.
              </span>
            </li>
            <li className="c8 li-bullet-0">
              <span className="c0">
                Locally encrypted JSON Web Tokens to provide both Email and
                Facebook authentication for users to retrieve and sync data
                local data created when using the app offline.
              </span>
            </li>
            <li className="c8 li-bullet-0">
              <span className="c0">
                Implemented the app&rsquo;s Bluetooth Low Energy communication
                to provide customers medical readings and firmware updates
                through their iOS or Android phone.
              </span>
            </li>
            <li className="c8 li-bullet-0">
              <span className="c1">User</span>
              <span className="c0">
                &nbsp;onboarding used localized geographic data to recommend
                multiple languages and sanitize the application based on the
                user&rsquo;s geolocation to comply with states and
                countries&rsquo; laws to protect company liability.
              </span>
            </li>
          </ul>
          <p className="c12">
            <span className="c0"></span>
          </p>
          <p className="c2">
            <span className="c9">PERSONAL PROJECTS</span>
          </p>
          <p className="c12">
            <span className="c0"></span>
          </p>
          <p className="c14">
            <span className="c5">
              QuasarEE, Educational Content for Electrical Engineering
            </span>
          </p>
          <p className="c14">
            <span className="c1">
              Sacramento,
              CA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="c9 c17">06/2021 - Present</span>
          </p>
          <ul className="c3 lst-kix_list_3-0 start">
            <li className="c8 li-bullet-0">
              <span className="c0">
                Implemented continuous deployment so all pushes{" "}
              </span>
              <span className="c1">to the main</span>
              <span className="c0">&nbsp;branch are published at </span>
              <span className="c1 c6">
                https://quasar-electronics.vercel.app/
              </span>
              <span className="c0">. </span>
            </li>
            <li className="c8 li-bullet-0">
              <span className="c0">
                Added functionality for users to securely send emails to
                internal email{" "}
              </span>
              <span className="c1">addresses</span>
              <span className="c0">
                &nbsp;with NextJS, reCAPTCHA, SendGrid and serverless functions.
              </span>
            </li>
            <li className="c8 li-bullet-0">
              <span className="c0">
                Used ReactJS to display a responsive application, animated
                navbar, and light/dark theme.
              </span>
            </li>
          </ul>
          <p className="c12">
            <span className="c0"></span>
          </p>
          <p className="c14">
            <span className="c5">
              Student Tracker, Mobile Application for keeping track of Students
            </span>
          </p>
          <p className="c14">
            <span className="c1">
              Sacramento, CA
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="c17 c9">06/2021 - Present</span>
          </p>
          <ul className="c3 lst-kix_list_3-0">
            <li className="c16 li-bullet-0">
              <span className="c0">
                Launched the SQL Server on AWS with SQL file and deployed .net
                API on Visual Studio to the EC2 instance using IIS that I
                configured for this type of .net project
              </span>
            </li>
            <li className="c16 li-bullet-0">
              <span className="c0">
                Cloned the original EC2 instance into multiple instances that
                are all registered targets sitting behind a HTTPS application
                load balancer.
              </span>
            </li>
            <li className="c16 li-bullet-0">
              <span className="c0">
                Added extra user traits to the API&#39;s model and database
                tables and making certain app interactions into explicit
                transactions{" "}
              </span>
            </li>
            <li className="c16 li-bullet-0">
              <span className="c1">
                Implemented policy constraints with security groups so that only
                HTTPS, SSH and MySQL/Aurora are the only permitted inbound
                network traffic rules.
              </span>
            </li>
          </ul>
          <p className="c12">
            <span className="c0"></span>
          </p>
          <p className="c12">
            <span className="c0"></span>
          </p>
          <p className="c2">
            <span className="c5">TECHNICAL SKILLS</span>
          </p>
          <p className="c14">
            <span className="c1">React</span>
            <span className="c0">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NextJS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NET
              Core&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </p>
          <p className="c14">
            <span className="c0">
              Continuous Deployment
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AWS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Java&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bash&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </span>
          </p>
          <p className="c14">
            <span className="c0">
              Python&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Windows&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Linux&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wireshark
            </span>
          </p>
          <p className="c14">
            <span className="c1">
              Postman&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visual
              Studio&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Swift&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React
              Native&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </p>
        </body>

        <Typography gutterBottom variant="subtitle1">
          Aaron Miller
        </Typography>

        <Typography variant="body2" color="textSecondary">
          Updated in 2021
        </Typography>
      </Paper>
    </div>
  );
}

export default Home;
