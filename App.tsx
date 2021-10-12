import React from "react";
import { Route } from "react-router-dom";
//material ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
//aaron
import { internalLandingRoutes } from "./utils/Routes";
import AppBarDrawer from "./components/Layout";
//i think it would be natural for this file to handle a lot of the routing and linking

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBarDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {internalLandingRoutes.map((c) => (
          <Route
            key={c.route + "landing-pages-routes"}
            exact
            path={c.route}
            component={c.view}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
