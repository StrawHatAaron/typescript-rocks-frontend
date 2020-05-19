import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import JavascriptIcon from '../assets/mui/JavascriptIcon';
import ReactIcon from '../assets/mui/ReactIcon';
import SwiftIcon from '../assets/mui/SwiftIcon';

import {SvgConverter} from '../utils/SvgConverter';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../assets/tCheck.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            tCheck
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Built and launched in both Swift and React for iOS and Android. 
            These projects where my first industry projects and are still managed to
            this day. What I did as a software developer for this marijuana petroleum
            spectroscopy mold firm was quite unique.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
          <Chip
              label="Swift"
              size="small"
              clickable
              color="primary"
              avatar={<SwiftIcon/>}
            />
            <Chip
              label="React"
              size="small"
              clickable
              color="primary"
              avatar={<ReactIcon/>}
            />
            <Chip
              label="Javascript"
              size="small"
              clickable
              color="primary"
              avatar={<JavascriptIcon/>}
            />
          
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Application
        </Button>
        <Button size="small" color="primary">
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
}