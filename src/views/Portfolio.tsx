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
import QuasarElectronicsImage from "../assets/img/quasar-ee.png";
import DuplicagentImage from "../assets/img/Duplicagent.png";
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
      "Built and launched in both Swift and React for iOS and Android. These projects where my first industry projects and are still managed to this day.",
    chip: [chipTypes[0], chipTypes[1], chipTypes[3]],
  },
  {
    title: "Build The Lanes",
    application: "https://strawhataaron.github.io/build-the-lanes/#/",
    github: "https://github.com/StrawHatAaron/build-the-lanes",
    img: BuildTheLanesImage,
    explain:
      "A Civil Engineering group that advocates for modern city designs. For example, using bikes and trains instead of sitting in traffic with cars and large trucks. ",
    chip: [chipTypes[1], chipTypes[3]],
  },
  {
    title: "Quasar Electronics",
    application: "https://www.quasaree.com/",
    github: "",
    img: QuasarElectronicsImage,
    explain:
      "A source to learn Electrical Engineering in a visual and interactive manner. Using the power of the mainm python library and real life demos.",
    chip: [chipTypes[1], chipTypes[3]],
  },
  {
    title: "Duplicagent",
    application: "https://strawhataaron.github.io/DuplicAgent-FrontEnd/#/",
    github: "https://github.com/StrawHatAaron/DuplicAgent-FrontEnd",
    img: DuplicagentImage,
    explain:
      "This was a free concept project for senior year during college. Most of the website has been taken down due to my Baretaps team agreeing to take the server down.",
    chip: [chipTypes[1], chipTypes[3]],
  },
  {
    title: "Reactive Nerd",
    application: "https://strawhataaron.github.io/reactive-nerd/",
    github: "https://github.com/StrawHatAaron/reactive-nerd",
    img: ReactiveNerdImage,
    explain: "This was my first ever ReactJS project. Super simple.",
    chip: [chipTypes[1], chipTypes[3]],
  },
  {
    title: "CSS and React Foundations",
    application:
      "https://strawhataaron.github.io/react-self-learned-foundations/",
    github: "https://github.com/StrawHatAaron/react-self-learned-foundations",
    img: FoundationImage,
    explain: "This was some good practice of React, HTML and CSS.",
    chip: [chipTypes[1], chipTypes[3]],
  },
  {
    title: "Mini Javascript Academy",
    application:
      "https://strawhataaron.github.io/mini-javascript-academy/main/tutorials.htm",
    github: "https://github.com/StrawHatAaron/mini-javascript-academy",
    img: MiniJavascriptAcademy,
    explain: "This was good practice of Vanilla Javascript, HTML and CSS.",
    chip: [chipTypes[1]],
  },
  {
    title: "Designer Webs",
    application: "https://strawhataaron.github.io/Designer-Webs/index",
    github: "https://github.com/StrawHatAaron/Designer-Webs",
    img: DesignerWebsImage,
    explain: "First Website I wrote.",
    chip: [chipTypes[1]],
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
