import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import theme from "../../utils/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    fontFamily: "Roboto",
    padding: theme.spacing(4),
    fontWeight: "bold",
    textAlign: "left",
    // width: "max-content",
  },
  field: {
    ...theme.typography.h6,

    height: "10px",
  },
  box: {
    width: "300px",
    height: "38px",
    border: "1px solid #eae8ee",
    borderRadius: "4px",
  },
}));

export default React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <div className={classes.text}>
      {props.name && (
        <div
          style={{
            marginBottom: theme.spacing(2),
            color: theme.palette.pending[0],
            fontSize: "12px",
          }}
        >
          {props.name}
        </div>
      )}
      <Box
        ref={ref}
        width={"300px"}
        height={"38px"}
        // padding="10px 16px"
        // border={"1px solid #eae8ee"}
        // borderRadius={"4px"}
        {...props}
      />
    </div>
  );
});
