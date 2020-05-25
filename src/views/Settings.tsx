import React, {useContext, useEffect, useState}  from 'react'
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import {getTheme, setTheme,} from '../utils/themes';

function Settings() {
  const [state, setState] = useState({
    on:false
  })




  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTheme(event.target.checked ? 'dark' : 'light');
  //   setState({ ...state, [event.target.name]: event.target.checked });
  //   // console.log(getTheme());
  // };

  return (
    <Typography paragraph>
      Change theme
      <Switch
        checked={state.on}
        onChange={() => setState({on: !state.on})}
        color="primary"
        name="darkTheme"
        inputProps={{ 'aria-label': 'primary checkbox' }}/>
      {state.on? "dark" : "light"}
    </Typography>   
  )
}

export default Settings;





