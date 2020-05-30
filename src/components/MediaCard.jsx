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


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    paddingTop: '56%'
  },
});



export default function MediaCard(props){

  const classes = useStyles();

  console.log(props.img);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia

          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.explain}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
        {props.chip.map((c,i) => (
          <Chip
            clickable 
            label={c.label}
            color={c.color} 
            size="small" 
            avatar={() => <c.avatar/>}/>
        ))}
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