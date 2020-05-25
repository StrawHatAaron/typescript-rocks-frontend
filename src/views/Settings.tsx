import React, {useContext, useEffect, useState}  from 'react'
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import {getTheme, setTheme,} from '../utils/themes';
import {ThemeContext} from '../utils/Context';

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
    <ThemeContext.Consumer>
      {({themeObject, toggleTheme}) => (
        <Typography paragraph>
          Change theme
          <Switch
            checked={themeObject.palette.type==='dark'}
            onChange={() => toggleTheme()}
            color="primary"
            name="darkTheme"
            inputProps={{ 'aria-label': 'primary checkbox' }}/>
          {themeObject.palette.type}
        </Typography> 
      )}
    </ThemeContext.Consumer>  
  )
}

export default Settings;





