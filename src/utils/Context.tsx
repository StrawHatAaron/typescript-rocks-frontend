import { createContext, useContext } from 'react';
import {
    lightPrimary,
    lightSecondary,
    darkPrimary,
    darkSecondary,
} from './themes';

export type ITheme = {
  toggleTheme:() => void;
  setFontSize:(value: number) => void;
  themeObject:{
    // themeName: 
    typography: {
        fontSize: number,
        fontFamily: 'Bitter',
    },
    palette: {
        type: 'dark' | 'light',
        primary: {
          dark: string,
          light: string,
        },
        secondary: {
          light: string,
          dark: string,
          contrastText: string,
        },
        contrastThreshold: number,
        tonalOffset: number,
    },
  };
}
// The standard way to create context. It takes an initial value object
export const ThemeContext = createContext<ITheme>({
  toggleTheme: () => {},
  setFontSize: () => {},
  themeObject:{
    // themeName: 
    typography: {
        fontSize: 12,
        fontFamily: 'Bitter',
    },
    palette: {
        type: 'dark',
        primary: {
          dark: "#03a9f4",
          light: "#f48fb1",
        },
        secondary: {
          light: "#f48fb1",
          dark: "#880e4f",
          contrastText: '#ffcc00',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
  },
})
