import React, {useContext, useEffect, useState}  from 'react'
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import {getTheme, setTheme,} from '../utils/themes';
import {ThemeContext} from '../utils/Context';
import Slider from '@material-ui/core/Slider';


export default function Settings() {

  const [state, setState] = useState<any>({
    fontSize:12
  })

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    // console.log('event',event);
    // console.log('newValue',newValue)
    setState({...setState, fontSize: newValue });
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTheme(event.target.checked ? 'dark' : 'light');
  //   setState({ ...state, [event.target.name]: event.target.checked });
  //   // console.log(getTheme());
  // };


  return (
    <ThemeContext.Consumer>
      {({themeObject, toggleTheme, setFontSize}) => (
        <>
          <Typography variant="body1" gutterBottom>
            Change theme
            <Switch
              checked={themeObject.palette.type==='dark'}
              onChange={() => toggleTheme()}
              color="primary"
              name="darkTheme"
              inputProps={{ 'aria-label': 'primary checkbox' }}/>
            {themeObject.palette.type}
            </Typography> 
            <Typography variant="body1" gutterBottom>
              Change Font Size {themeObject.typography.fontSize}
              <Slider
                defaultValue={themeObject.typography.fontSize}
                onChange={handleSliderChange}
                onChangeCommitted={() => setFontSize(state.fontSize)}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={10}
                max={18}
              />
            </Typography>
        </>     
      )}
    </ThemeContext.Consumer>  
  )
}





