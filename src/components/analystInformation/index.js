import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Checkbox } from "@material-ui/core";
import theme from "../../utils/theme";
import Element from "../Element";
import RevealComponent from "../revealComponent";
import flatten from "flat";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.blue[0],
    marginBottom: theme.spacing(5),
    // fontSize: "18px",

    // fontWeight:"bold"
  },
  key: {
    // marginTop: theme.spacing(3),
  },
  value: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6),
  },
  checkboxKey: {},
  checkboxContainer: {
    marginBottom: theme.spacing(6),
  },
  checkbox: {
    padding: 0,
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
}));

export default function Information({
  title,
  notebook,
  data: { fields, ID },
  elements,
}) {
  const classes = useStyles();

  const flatFields = flatten(fields);

  return (
    <div>
      <Typography variant="h6" className={classes.heading}>
        {title}
      </Typography>
      <div style={{ marginTop: theme.spacing(5) }}>
        {Object.values(elements).map((obj, index) => {
          if (obj.elementType === "checkbox") {
            return (
              <Box
                key={obj.title}
                className={classes.checkboxContainer}
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Checkbox
                  checked={true}
                  onChange={() => {}}
                  color="primary"
                  className={classes.checkbox}
                ></Checkbox>
                <Typography
                  className={classes.checkboxKey}
                  variant="h6"
                  color="textSecondary"
                >
                  {obj.title}
                </Typography>
              </Box>
            );
          } else {
            return (
              <div key={obj.title}>
                <Typography
                  className={classes.key}
                  variant="h6"
                  color="textSecondary"
                >
                  {obj.title}
                </Typography>
                <Typography className={classes.value} variant="h6">
                  {flatFields[obj.options.name]}
                </Typography>
                {/* <RevealComponent
                element={obj}
                notebook={notebook}
                token={fields[obj.options.name].ID}
                width="140px"
                height="20px"
                value={fields[obj.options.name].dlp}
              /> */}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
