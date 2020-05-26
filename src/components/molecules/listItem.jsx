import React, { Component } from "react";
import arrow from "../../assets/arrow.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  item: {
    fontFamily: "Roboto",
    fontSize: "15px",
    color: "#696969",
  },
}));

export default function ListItem({ img, text, bool }) {
  const classes = useStyles();
  return (
    <div className={classes.item}>
      <img src={img} alt="one"></img>&nbsp;<span>{text}</span>
      &nbsp;&nbsp;&nbsp;
      {bool && <img src={arrow} alt="arrow"></img>}
    </div>
  );
}
