import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import {getTheme} from './utils/themes';
import {ThemeContext} from './utils/Context';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {
  lightPrimary,
  lightSecondary,
  darkPrimary,
  darkSecondary,
  themes
} from './utils/themes';

class Index extends React.Component {
  
  constructor(props){
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        themeObject: {
          ...state.themeObject,
          palette:{
            ...state.themeObject.palette,
            type: state.themeObject.palette.type===themes.dark 
              ? themes.light : themes.dark
          }
        }
      }));
    };

    this.setFontSize = (value) => {
      console.log("hey yea we made it here")
      this.setState(state => ({
        themeObject:{
          ...state.themeObject,
          typography:{
            fontSize:value,
            ...state.themeObject.palette
          }
        }
      }))
    } 
  
    this.state = {
      toggleTheme: this.toggleTheme,
      setFontSize: this.setFontSize,
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
          <ThemeContext.Consumer>
            {({themeObject}) => (
              <ThemeProvider theme={createMuiTheme(themeObject)}>
              <Router>
                <App/>
              </Router>
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
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
