import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {darkTheme, lightTheme, getTheme} from './utils/themes';
import App from './App';
import * as serviceWorker from './serviceWorker';

const lightPrimary = "#0d47a1";
const lightSecondary = "#f48fb1";
const darkPrimary = "#03a9f4";
const darkSecondary = "#880e4f"

// const themeObject = {
//   // themeName: 
//   typography: {
//       fontSize: 12,
//       fontFamily: 'Bitter',
//   },
//   palette: {
//       type: 'dark',
//       primary: {
//         main: darkPrimary,
//         dark: darkPrimary,
//         light: lightPrimary,
//       },
//       secondary: {
//         main: darkSecondary,
//         light: lightSecondary,
//         dark: darkSecondary,
//         contrastText: '#ffcc00',
//       },
//       contrastThreshold: 3,
//       tonalOffset: 0.2,
//   },
// }

// const localStorage = { 
//   async get() { return 'hello' }
// };

// const init = { loading: true };

// export const useUserProfile = () => {
//   const [theTheme, setTheTheme] = useState('dark');
//   useEffect(() => {
//     localStorage.get()
//       .then(profile => setTheme({''}))
//       .catch(error => setTheme({ '' }));
//   }, []);

//   return theTheme;
// };

// const useDarkMode = () => {
//   const [theme, setTheme] = useState(themeObject);
//   const { palette : {type }} = theme;
//   const toggleDarkMode = () => {
//     const updatedTheme = {
//       ...theme,
//       palette: {
//         ...theme.palette,
//         type: getTheme()==='light' ? 'dark' : 'light'
//       }
//     }
//     setTheme(updatedTheme);
//   }
//   return [theme, toggleDarkMode]
// }

function Index() {

  // const [theme, toggleDarkMode] = useDarkMode();

  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // const setTheme = (getTheme===null) ? false : true
  // const theme = React.useMemo(
  //   () => {if(setTheme){
  //           console.log('oooooooooooo');
  //           return (getTheme()==='dark') ? darkTheme : lightTheme
  //         }else{
  //           return prefersDarkMode ? darkTheme : lightTheme
  //         }},
  //   [prefersDarkMode, getTheme],
  // );
  return(
    <Router>
      <React.StrictMode>
        {/* <MuiThemeProvider theme={theme}> */}
          <App />
        {/* </MuiThemeProvider> */}
      </React.StrictMode>
    </Router>
  )
}


ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
