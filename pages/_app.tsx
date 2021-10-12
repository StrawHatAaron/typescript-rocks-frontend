import React from "react";
import { Route } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Layout from "components/Layout";

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

const MyApp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Layout />
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
};

export default MyApp;
