import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function ButtonItem(props) {
  const useStyles = makeStyles((theme) => ({
    primary: {
      backgroundColor: theme.palette.blue,
      border: "none",
      color: theme.palette.white,
      padding: theme.spacing(2),
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      cursor: "pointer",
    },
    default: {
      backgroundColor: theme.palette.blue,
      border: "1px solid black",
      color: theme.palette.black,
      padding: theme.spacing(2),
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      cursor: "pointer",
    },
  }));
  const classes=useStyles();
  return (
    <div>
      <button className={classes[props.type]}>{props.name}</button>
    </div>
  );
}
