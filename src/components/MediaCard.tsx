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




const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    paddingTop: '56%'
  },
});

type colorTypes = 
  'primary' |
  'secondary';



interface ChipProps{
  label:string,
  color:colorTypes,
  avatar:any
};

interface MediaCardProps{
  title:string,
  img:string,
  explain:string,
  chip?:[{ 
    label: string; 
    color: string; 
    avatar: (props: any) => Element; 
  }];
};

export const MediaCard: React.FC<MediaCardProps> = ({
title, img, explain, chip}) => {
  const classes = useStyles();

  console.log(img);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia

          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {explain}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
        
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