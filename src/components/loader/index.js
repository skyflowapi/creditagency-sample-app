import React, { Component } from "react";
import { makeStyles, Divider, withStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import creditCard from "../../assets/creditCard.png";
import theme from "../../utils/theme";
import Header from "../layout/header";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: window.innerHeight,
    flexDirection: "column",
  },
  load: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    flexDirection: "column",
    marginTop: theme.spacing(20),
    
  },
}));

const progressStyles = makeStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width: 500,
  },
  
}));

export default function Loader() {
  const classes = useStyles();
  const styles=progressStyles();
  return (
    <div className={classes.root}>
      
      <div>
        <Header pos="relative" />
        <Divider />
        <div className={classes.load}>
          <h2>Processing your application...</h2>
          <img src={creditCard} />
          <h4 style={{ color: theme.palette.grey[1] }}>
            This should only take a few moments.
          </h4>
          <LinearProgress className={styles.root} />
          <i>Processing information</i>
        </div>
      </div>
    </div>
  );
}
