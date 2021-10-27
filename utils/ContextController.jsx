import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeContext } from "./Context";

import {
  lightPrimary,
  lightSecondary,
  darkPrimary,
  darkSecondary,
  themes,
} from "./themes";

export default class ContextController extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState((state) => ({
        themeObject: {
          ...state.themeObject,
          palette: {
            ...state.themeObject.palette,
            type:
              state.themeObject.palette.type === themes.dark
                ? themes.light
                : themes.dark,
          },
        },
      }));
    };

    this.setFontSize = (value) => {
      console.log("hey yea we made it here");
      this.setState((state) => ({
        themeObject: {
          ...state.themeObject,
          typography: {
            fontSize: value,
            ...state.themeObject.palette,
          },
        },
      }));
    };

    this.state = {
      toggleTheme: this.toggleTheme,
      setFontSize: this.setFontSize,
      themeObject: {
        // themeName:
        typography: {
          fontSize: 12,
          fontFamily: "Bitter",
        },
        palette: createTheme({
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
            contrastText: "#ffcc00",
          },
          contrastThreshold: 3,
          tonalOffset: 0.2,
        }),
      },
    };
  }

  render(children) {
    return (
      <React.StrictMode>
        <ThemeContext.Provider value={this.state}>
          <ThemeContext.Consumer>
            {({ themeObject }) => (
              <ThemeProvider theme={createTheme(themeObject)}>
                {children}
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
      </React.StrictMode>
    );
  }
}
