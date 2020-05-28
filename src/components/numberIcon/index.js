import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import theme from "../../utils/theme";

const useStyles = makeStyles((theme) => ({
  number: {
    borderRadius: "50%",
    width: "9%",
    
    padding: "3.5% 0",
    position: "relative",

    border: "3px solid #696969",

    textAlign: "center",
    lineHeight: "0",
    
    objectFit: "cover",
  },
  
}));

export default function NumberIcon(props) {
  const classes = useStyles();
  if (props.status === "done") {
    return (
      <div>
        
        <CheckCircleIcon style={{ fill: theme.palette.green[0] }} />
      </div>
    );
  }
  return (
    <span
      style={
        props.status === "current"
          ? { color: theme.palette.royalBlue[0], border: "3px solid #4169E1" }
          : { color: theme.palette.pending[0] }
      }
      className={classes.number}
    >
      <b>{props.number}</b>
    </span>
  );
}
