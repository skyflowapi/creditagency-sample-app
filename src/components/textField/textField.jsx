import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import  Grid  from "@material-ui/core/Grid";
import  Paper  from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    fontFamily: "Roboto",
  },
  field: {
    width: "300px",
  },
}));

export default function TextFieldMolecule(props) {
  const classes = useStyles();

  return (
    // <div className={classes.text}>
    // <div>{props.name}</div>
    //       <TextField className={classes.field} variant="outlined"></TextField>
    //       </div>

    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing="10">
          <Grid item>
            <div className={classes.text}>
              <div>{props.name}</div>
              <TextField
                className={classes.field}
                variant="outlined"
              ></TextField>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
