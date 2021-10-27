import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Layout from "components/Layout";
import Head from "next/head";
import "../assets/css/Sunglasses.css";
import ContextController from "../utils/ContextController";

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

function MyApp({ Component, pageProps }: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>Quasar EE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* <ContextController> */}
      <Layout>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Component {...pageProps} />
        </main>
      </Layout>
      {/* </ContextController> */}
    </div>
  );
}

export default MyApp;
