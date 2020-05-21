import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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

export const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

export const appTheme = createMuiTheme({
typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
},
palette: {
    primary: {
    main: '#ff4400',
    // light: will be calculated from palette.primary.main,
    light: lightPrimary,
    // dark: will be calculated from palette.primary.main,
    dark:darkPrimary
    // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
    main: '#0044ff',
    light: lightSecondary,
    // dark: will be calculated from palette.secondary.main,
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