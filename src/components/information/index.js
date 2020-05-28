import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import theme from "../../utils/theme";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.blue[0],
    // fontSize: "18px",
    
    // fontWeight:"bold"
  },
  key: {
    color: theme.palette.grey[1],
    padding: theme.spacing(1),
    marginTop:theme.spacing(3)
  },
}));
export default function Information(props) {
  const classes = useStyles();
  const details = [];
  for (const key in props.data) {
    details.push(
      <div>
        <Typography className={classes.key} variant="h6">
          {key}
        </Typography>
        <Typography style={{ padding: theme.spacing(1) }} variant="h6">
          {props.data[key]}
        </Typography>
      </div>
    );
  }
  return (
    <div>
      <Typography variant="h5" className={classes.heading}>{props.title}</Typography>
      <div style={{marginTop:theme.spacing(5)}}>{details}</div>

    
    </div>
  );
}
