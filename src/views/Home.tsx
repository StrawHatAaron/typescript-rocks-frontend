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
                  Hi, I am Aaron
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Welcome to my Website♡
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Last Update: Jun 1. 2020
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Here are some things I like: 💻☕️🥑
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">🌎🌍🌏</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
        One of my favorite hobbies is writing Web Apps. My favorite frontend framework is by far React. 
        I am working on launching some of my full stack apps I have built over the years. I have tried
        many backend frameworks and I must say the more I try the easier they all get. Right now I have 
        been learning .NET Core but I would like to get back into Java or pickup Go Lang. In about 6 
        months I will be graduating from CSU Sacramento!
      <Grid className={classes.gridIam} container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>50% Software Developer</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>50% Network Analyst</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>100% Human</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home
