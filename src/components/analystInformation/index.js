import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import theme from "../../utils/theme";
import Element from "../Element";
import RevealComponent from "../revealComponent";

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

export default function Information({ title, notebook, data: { fields, ID }, elements }) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" className={classes.heading}>
        {title}
      </Typography>
      <div style={{ marginTop: theme.spacing(5) }}>
        {Object.values(elements).map((obj, index) => {
          return (
            <div key={obj.title}>
              <Typography className={classes.key} variant="h6">
                {obj.title}
              </Typography>
              <RevealComponent
                element={obj}
                notebook={notebook}
                token={fields[obj.options.name].ID}
                width="140px"
                height="20px"
                value={fields[obj.options.name].dlp}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
