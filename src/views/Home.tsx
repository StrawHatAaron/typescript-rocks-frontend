import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    gridIam: {
      marginTop:1
    }
  }),
);

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={require("../assets/img/profile-pic.jpeg")} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Aaron Miller
                </Typography>
                <Typography variant="body2" gutterBottom>
                  NOC Associate and Software Developer
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Bachelors in Computer Science
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
     
      <Paper className={classes.paper}> 
        <Typography>Software Engineering</Typography>
        <ul>
          <li>Typescript/Javascript frontend development</li>
          <li>C#/Python backend development</li>
        </ul>
        <Typography>NOC Associate</Typography>
        <ul>
          <li>InterMapper for monitoring network health</li>
          <li>SCOM/Solarwinds/Mainframe/IronPort system health</li>
          <li>Investigate for potential outage impacts</li>
        </ul>  
        <Typography>DevOps</Typography>
        <ul>
          <li>TravisCI for continuous integration with Git</li>
          <li>Docker containerization</li>
        </ul>  
      </Paper>
    </div>
  );
}

export default Home
