import React from 'react';
import { createMuiTheme, } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const lightPrimary = "#0d47a1";
const lightSecondary = "#f48fb1";
const darkPrimary = "#03a9f4";
const darkSecondary = "#880e4f"

export const themeKey = "theme";
export const getTheme:() => (string | null)  = 
function(){
  try{
    return window.localStorage.getItem(themeKey);
  } catch(error){
    console.log("themes.ts getTheme", error)
    return "error";
  }
}
export const setTheme = (value:string) => {
  try {
    window.localStorage.setItem(themeKey, value);
  } catch (error) {
    console.log('themes.ts setTheme', error);
  }
}

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

// export const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

export const darkTheme = createMuiTheme({
    typography: {
        fontSize: 12,
    },
    palette: {
        type: 'dark',
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
    },
  });

  export const lightTheme = createMuiTheme({
    typography: {
        fontSize: 12,
    },
    palette: {
        primary: {
          main: lightPrimary,
        },
        secondary: {
          main: lightSecondary,
          contrastText: '#ffcc00',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
  })

  