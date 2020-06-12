import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import theme from "../../utils/theme";
import { useMultipleSkyflowElements } from "../../services/skyflowHooks";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.blue[0],
    // fontSize: "18px",

    // fontWeight:"bold"
  },
  key: {
    color: theme.palette.grey[1],
    padding: theme.spacing(1),
    marginTop: theme.spacing(3),
  },
}));
export default function Information(props) {
  const classes = useStyles();
  const { elements } = useMultipleSkyflowElements(Object.values(props.data));

  return (
    <div>
      <Typography variant="h5" className={classes.heading}>
        {props.title}
      </Typography>
      <div style={{ marginTop: theme.spacing(5) }}>
        {Object.values(props.data).map((obj, index) => {
          return (
            <div>
              <Typography className={classes.key} variant="h6">
                {obj.title}
              </Typography>
              <Box
                p={1}
                width="204px"
                height="28px"
                ref={elements[index].elementRef}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
