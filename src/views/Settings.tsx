import React from 'react'
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

function Settings() {
  const [state, setState] = React.useState({
    darkTheme: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
      <>
      <Typography paragraph>
        Change theme
        <Switch
          checked={state.darkTheme}
          onChange={handleChange}
          color="primary"
          name="darkTheme"
          inputProps={{ 'aria-label': 'primary checkbox' }}/>
        {state.darkTheme? "dark" : "light"}
      </Typography>   
      
      </>
  )
}

export default Settings;





