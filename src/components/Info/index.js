import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import info from "../../assets/info.png";
import theme from '../../utils/theme';

const useStyles = makeStyles((theme) => ({
  rectangle: {
    width: 529,
    height: "100%",
    borderRadius: "4px",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.04)",
    border: theme.palette.lightBlue[0],
    backgroundColor: theme.palette.lightBlue[0],
    position: "relative",
    display: "flex",
  },
  text: {
    ...theme.typography.h6,
    lineHeight: 1.6,
    marginLeft: theme.spacing(8),
    marginTop: theme.spacing(-1),

    marginRight: theme.spacing(2),
    color: theme.palette.grey[1],
    textAlign: "left",
    ...theme.typography.h6,
  },
  infoIcon: {
    padding: theme.spacing(2),
    // left:"30px",
    top:theme.spacing(0.3),
    position: "absolute",
  },
}));
function Info({ information }) {
  const classes = useStyles();
  return (
    <div className={classes.rectangle}>
      <img className={classes.infoIcon} src={info} alt="info icon"></img>
      <span className={classes.text}>{information}</span>
    </div>
  );
}

export default Info;
