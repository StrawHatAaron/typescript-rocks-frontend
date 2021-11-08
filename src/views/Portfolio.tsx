import React from "react";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../components/MediaCard";
//my icons
import JavascriptIcon from "../assets/mui/JavascriptIcon";
import ReactIcon from "../assets/mui/ReactIcon";
import SwiftIcon from "../assets/mui/SwiftIcon";
import AWSIcon from "../assets/mui/AWSIcon";
import NetCoreIcon from "../assets/mui/NetCoreIcon";
import CSharpIcon from "../assets/mui/CSharpIcon";
import PythonIcon from "../assets/mui/PythonIcon";
import DjangoIcon from "../assets/mui/DjangoIcon";
import NginxIcon from "../assets/mui/NginxIcon";
import SassIcon from "../assets/mui/SassIcon";
import CssIcon from "../assets/mui/CssIcon";
import DockerIcon from "../assets/mui/DockerIcon";
import PostgreSQLIcon from "../assets/mui/PostgreSQLIcon";
//images
import tCheckImage from "../assets/img/tCheck.png";
import BuildTheLanesImage from "../assets/img/BuildTheLanes.png";
import DuplicagentImage from "../assets/img/Duplicagent.png";
import SolarLeadGeneratorImage from "../assets/img/solar-leads.png";
import FoundationImage from "../assets/img/foundation.png";
import ReactiveNerdImage from "../assets/img/reactive-nerd.png";
import MiniJavascriptAcademy from "../assets/img/javascript-academy.png";
import DesignerWebsImage from "../assets/img/DesignerWebs.png";

const chipTypes = [
  {
    //0
    label: "Swift",
    color: "primary",
    avatar: SwiftIcon,
  },
  {
    //1
    label: "Javascript",
    color: "primary",
    avatar: JavascriptIcon,
  },
  {
    //2
    label: "C-Sharp",
    color: "primary",
    avatar: CSharpIcon,
  },
  {
    //3
    label: "React",
    color: "secondary",
    avatar: ReactIcon,
  },
  {
    //4
    label: ".NET Core",
    color: "secondary",
    avatar: NetCoreIcon,
  },
  {
    //5
    label: "AWS",
    color: "original",
    avatar: AWSIcon,
  },
  {
    //6
    label: "Python",
    color: "primary",
    avatar: PythonIcon,
  },
  {
    //7
    label: "Django",
    color: "secondary",
    avatar: DjangoIcon,
  },
  {
    //8
    label: "NGINX",
    color: "original",
    avatar: NginxIcon,
  },
  {
    //9
    label: "Sass",
    color: "original",
    avatar: SassIcon,
  },
  {
    //10
    label: "css",
    color: "primary",
    avatar: CssIcon,
  },
  {
    //11
    label: "Docker",
    color: "original",
    avatar: DockerIcon,
  },
  {
    //12
    label: "PostgreSQL",
    color: "original",
    avatar: PostgreSQLIcon,
  },
];

const portfolioRoutes = [
  {
    title: "tCheck",
    application: "https://tcheck.me/",
    github: "",
    img: tCheckImage,
    explain:
      "Built and launched in both Swift and React for iOS and Android. These projects where my first industry projects and are still managed to this day. What I did as a software developer for this marijuana petroleum spectroscopy mold firm was quite unique.",
    chip: [chipTypes[0], chipTypes[1], chipTypes[3]],
  },
  {
    title: "Build The Lanes",
    application: "https://strawhataaron.github.io/build-the-lanes/#/",
    github: "https://github.com/StrawHatAaron/build-the-lanes",
    img: BuildTheLanesImage,
    explain:
      "A Non-Profit group of Civil Engineer and I are just trying to advocate for using bikes for several good reasons that we go over in the Why Bikes section. \n&zwnj; .",
    chip: [chipTypes[1], chipTypes[3]],
  },
  {
    title: "Duplicagent",
    application: "https://strawhataaron.github.io/DuplicAgent-FrontEnd/#/",
    github: "https://github.com/StrawHatAaron/DuplicAgent-FrontEnd",
    img: DuplicagentImage,
    explain:
      "This was a free concept project for abatement insurance broker Jack Brooks that is always activly looking how he can provide the best insurance solutions while working at Empire West Insurance. There is no longer any affiliation.",
    chip: [chipTypes[1], chipTypes[3]],
  },
  {
    title: "Solar Lead Generator",
    application: "https://strawhataaron.github.io/LeadGenerator/#/ZipCode",
    github: "https://github.com/StrawHatAaron/LeadGenerator",
    img: SolarLeadGeneratorImage,
    explain:
      "Just a pretty UI for an example site that could collect leads for solar.",
    chip: [chipTypes[3]],
  },
  {
    title: "Reactive Nerd",
    application: "https://strawhataaron.github.io/reactive-nerd/",
    github: "https://github.com/StrawHatAaron/reactive-nerd",
    img: ReactiveNerdImage,
    explain: "This was my first ever ReactJS project. Super simple. UI Only.",
    chip: [chipTypes[3]],
  },
  {
    title: "CSS and React Foundations",
    application:
      "https://strawhataaron.github.io/react-self-learned-foundations/",
    github: "https://github.com/StrawHatAaron/react-self-learned-foundations",
    img: FoundationImage,
    explain: "This was some good practice of React, HTML and CSS. UI Only.",
    chip: [chipTypes[3]],
  },
  {
    title: "Mini Javascript Academy",
    application:
      "https://strawhataaron.github.io/mini-javascript-academy/main/tutorials.htm",
    github: "https://github.com/StrawHatAaron/mini-javascript-academy",
    img: MiniJavascriptAcademy,
    explain: "This was some good practice of React, HTML and CSS. UI Only.",
    chip: [],
  },
  {
    title: "Designer Webs",
    application: "https://strawhataaron.github.io/Designer-Webs/index",
    github: "https://github.com/StrawHatAaron/Designer-Webs",
    img: DesignerWebsImage,
    explain: "First Website I wrote",
    chip: [],
  },
];

export default function Portfolio() {
  return (
    <Grid container spacing={1}>
      {portfolioRoutes.map((c, i) => (
        <Grid item xs={12} sm={6} md={3}>
          <MediaCard
            key={"media-resume-card" + i}
            title={c.title}
            img={c.img}
            explain={c.explain}
            chip={c.chip}
            application={c.application}
            github={c.github}
          />
        </Grid>
      ))}
    </Grid>
  );
}
