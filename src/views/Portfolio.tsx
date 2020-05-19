import React from 'react';
import Grid from '@material-ui/core/Grid'
import {MediaCard} from '../components/MediaCard'
import JavascriptIcon from '../assets/mui/JavascriptIcon';
import ReactIcon from '../assets/mui/ReactIcon';
import SwiftIcon from '../assets/mui/SwiftIcon';
import tCheckImage from '../assets/img/tCheck.png'

const portfolioRoutes = [{
  title:"tCheck",
  img:tCheckImage,
  explain:"Built and launched in both Swift and React for iOS and Android. These projects where my first industry projects and are still managed to this day. What I did as a software developer for this marijuana petroleum spectroscopy mold firm was quite unique.",
  chip:[{
    label:"Swift",
    color:"primary",
    avatar:() => JavascriptIcon
  },{
    label:"React",
    color:"primary",
    avatar:() => ReactIcon
  },{
    label:"Javascript",
    color:"primary",
    avatar:() => SwiftIcon
  }],
}]

export default function Portfolio() {
  return (
    <Grid container spacing={3}>
      {portfolioRoutes.map((c, i) =>(
        <Grid item xs={12} sm={6}>
          <MediaCard 
            key={"media-resume-card"+i}
            title={c.title}
            img={c.img}
            explain={c.explain}

            />
        </Grid>
      ))}
    </Grid>
  );
}