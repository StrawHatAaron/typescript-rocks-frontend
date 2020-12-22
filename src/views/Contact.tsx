import React, {useState} from 'react';
import {Card, Button, TextField, Typography, CardContent, CardActions} from '@material-ui/core'
import {Theme, makeStyles} from '@material-ui/core/styles';
import TypescriptIcon from '../assets/mui/TypescriptIcon';
import ReactLogo from '../logo.svg';
import '../assets/css/Sunglasses.css';

const useStyles = makeStyles({
  root:{
    maxWidth:650,
    margin:'auto'
  },
  card:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    // flexDirection:'row-reverse'
  },
  cardContent:{
    flex:1
  },
  textField:{
    margin:'1em'
  },
  button:{
    display:'block',
    margin:'auto',
  }
});

type EmailMessage = {
  name:string,
  email:string,
  message:string
}

export const Contact: React.FC<{}> = () => {

  const classes = useStyles();

  const [state, setState] = useState<EmailMessage>({
    name:"",
    email:"",
    message:""
  });

  const handleChange = (event:any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSend = () => {
     
  }

  return(
  <div className={classes.root}>
    <Typography variant="h3">Contact Me!</Typography>
    <Card className={classes.card}>
    <CardContent className={classes.cardContent}>
      <div className="glasses-container">
      <div className="glasses">
        <img src={ReactLogo} className="react-logo App-logo" alt="React logo" />
        <div className="g-top "></div>
        <div className="g-left glass"></div>
        <div className="g-right glass"></div>
      </div>
      </div>
      <TextField
        className={classes.textField}
        id="outlined-required"
        label="Name"
        value={state.name}
        name="name"
        variant="outlined"
        onChange={handleChange}
        fullWidth
      />
      <br/>
      <TextField
        className={classes.textField}
        id="outlined-required"
        label="Email"
        value={state.email}
        name="email"
        variant="outlined"
        onChange={handleChange}
        fullWidth
      />
      <br/>
      <TextField
        className={classes.textField}   
        size={"medium"}
        id="outlined-required"
        label="Message"
        value={state.message}
        name="message" 
        variant="outlined"
        onChange={handleChange}
        fullWidth
        multiline
      />
      <Button
        className={classes.button}
        onClick={handleSend}
        variant="contained"
        color="primary">
        Send
      </Button>
    </CardContent>
    <br/>

    <CardActions>

      </CardActions>
    </Card>
    <br/>
  <Typography><TypescriptIcon/>, <br/> Don't be afraid 🏔🏳️‍🌈 </Typography>
  </div>
  )
};

