import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function ButtonItem(props) {
  const useStyles = makeStyles((theme) => ({
    primary: {
      backgroundColor: "blue",
      border: "none",
      color: "white",
      padding: "20px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      margin: "4px 2px",
      cursor: "pointer",
    },
    default: {
      backgroundColor: "white",
      border: "1px solid black",
      color: "black",
      padding: "20px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      margin: "4px 2px",
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
