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

import HomeIcon from '../assets/svg/HomeIcon'

import {SvgConverter} from '../utils/SvgConverter';
import DockerSVG from '../assets/svg/docker.svg'
import {SvgIcon} from '@material-ui/core';


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
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
          <Chip
              label="Swift"
              size="small"
              clickable
              color="primary"
              avatar={<HomeIcon/>}
            />
            <Chip
              label="Swift"
              size="small"
              clickable
              color="primary"
              avatar={<SvgConverter svg={DockerSVG}/>}
            />
            <Chip
              label="Swift"
              size="small"
              clickable
              color="primary"
              avatar={<HomeIcon/>}
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