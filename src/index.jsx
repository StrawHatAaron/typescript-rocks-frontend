import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import {darkTheme, lightTheme, getTheme} from './utils/themes';
import {ThemeContext} from './utils/Context';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider } from '@material-ui/styles';

const lightPrimary = "#0d47a1";
const lightSecondary = "#f48fb1";
const darkPrimary = "#03a9f4";
const darkSecondary = "#880e4f"


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

const themes = {
  light: 'light',
  dark: 'dark'
}

class Index extends React.Component {
  
  constructor(props){
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        darkMode: state.darkMode === themes.dark ? themes.light : themes.dark
      }));
    };
  
    this.state = {
      themeMode: themes.dark,
      toggleTheme: this.toggleTheme,

      themeObject:{
        // themeName: 
        typography: {
            fontSize: 12,
            fontFamily: 'Bitter',
        },
        palette: createMuiTheme({
            type: themes.dark,
            primary: {
              main: darkPrimary,
              dark: darkPrimary,
              light: lightPrimary,
            },
            secondary: {
              main: darkSecondary,
              light: lightSecondary,
              dark: darkSecondary,
              contrastText: '#ffcc00',
            },
            contrastThreshold: 3,
            tonalOffset: 0.2,
        }),
      }
    };  

  } 

  
  

  render(){
    return(
      <React.StrictMode>
        <ThemeContext.Provider value={this.state}>
          <ThemeProvider>
          <Router>
            <App/>
          </Router>
          </ThemeProvider>
        </ThemeContext.Provider>
      </React.StrictMode>
    )
  }
}


//Last Entry Point for The entire App
ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
