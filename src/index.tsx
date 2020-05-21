import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, } from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const lightPrimary = "#0d47a1";
const lightSecondary = "#f48fb1";
const darkPrimary = "#03a9f4";
const darkSecondary = "#880e4f"


interface PaletteIntention {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
  }

type PaletteTonalOffset = number | {
    light: number;
    dark: number;
  };


export const appTheme = createMuiTheme({
  typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontSize: 12,
  },
  palette: {
      type: 'dark',
      primary: {
        main: darkPrimary,
        dark: darkPrimary,
        light: lightPrimary,
        
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: darkSecondary,
        light: lightSecondary,
        dark: darkSecondary,
        contrastText: '#ffcc00',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
  },
});

export const lightTheme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

export const darkTheme = {

}


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ThemeProvider theme={appTheme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
