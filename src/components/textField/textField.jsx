import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import theme from '../../utils/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    fontFamily: "Roboto",
    padding: theme.spacing(4),
    fontWeight:"bold"
  },
  field: {
    ...theme.typography.h6,
    
    height:"10px",
    
  },
}));

export default function TextFieldMolecule(props) {
  const classes = useStyles();

  return (
    <div className={classes.text}>
      <div style={{marginBottom:theme.spacing(2),color:theme.palette.pending[0],fontSize:"12px"}}>{props.name}</div>
      <TextField
        style={{ width: props.width || "350px" }}
        placeholder={props.placeholder}
        InputProps={{classes:{input:classes.field}  }}
        inputProps={{ maxLength: props.maxLength}}
        type={props.type}
        onChange={props.handleChange}
        className={classes.field}
        variant="outlined"
      ></TextField>
    </div>
  );
}
