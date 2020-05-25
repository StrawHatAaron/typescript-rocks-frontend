import React from 'react';
import { createMuiTheme, } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const lightPrimary = "#0d47a1";
export const lightSecondary = "#f48fb1";
export const darkPrimary = "#03a9f4";
export const darkSecondary = "#880e4f"

export const themes = {
  light: 'light',
  dark: 'dark'
}

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



  