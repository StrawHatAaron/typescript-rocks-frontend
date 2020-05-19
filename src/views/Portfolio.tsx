import React from 'react';
import Grid from '@material-ui/core/Grid'
import MediaCard from '../components/MediaCard'
//my icons
import JavascriptIcon from '../assets/mui/JavascriptIcon';
import ReactIcon from '../assets/mui/ReactIcon';
import SwiftIcon from '../assets/mui/SwiftIcon';
import AWSIcon from '../assets/mui/AWSIcon';
import NetCoreIcons from '../assets/mui/NetCoreIcon';
import CSharpIcons from '../assets/mui/CSharpIcon';
//images
import tCheckImage from '../assets/img/tCheck.png';
import BuildTheLanesImage from '../assets/img/BuildTheLanes.png';
import CSharpIcon from '../assets/mui/CSharpIcon';


const portfolioRoutes = [{
  title:"tCheck",
  img:tCheckImage,
  explain:"Built and launched in both Swift and React for iOS and Android. These projects where my first industry projects and are still managed to this day. What I did as a software developer for this marijuana petroleum spectroscopy mold firm was quite unique.",
  chip:[{
    label:"Swift",
    color:"primary",
    avatar:SwiftIcon 
  },{
    label:"React",
    color:"secondary",
    avatar:ReactIcon
  },{
    label:"Javascript",
    color:"primary",
    avatar:JavascriptIcon
  }],
},{
  title:"Build The Lanes",
  img: BuildTheLanesImage,
  explain: "A Non-Profit group of Civil Engineer and I are just trying to advocate for using bikes for several good reasons that we go over in the Why Bikes section.",
  chip:[{
    label:"Javascript",
    color:"primary",
    avatar:JavascriptIcon
  },{
    label:"C-Sharp",
    color:"primary",
    avatar:CSharpIcon
  },{
    label:"React",
    color:"secondary",
    avatar:ReactIcon,
  },{
    label:".NET Core",
    color:"secondary",
    avatar:NetCoreIcons
  },{
    label:"AWS",
    color:"original",
    avatar:AWSIcon,
  }]
}]

export default function Portfolio() {
  return (
    <Grid container spacing={1}>
      {portfolioRoutes.map((c, i) =>(
        <Grid item xs={12} sm={6} md={3}>
          <MediaCard 
            key={"media-resume-card"+i}
            title={c.title}
            img={c.img}
            explain={c.explain}
            chip={c.chip}
            />
        </Grid>
      ))}
    </Grid>
  );
}