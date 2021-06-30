import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Checkbox, CircularProgress} from "@material-ui/core";
import theme from "../../utils/theme";
import Element from "../Element";
import RevealComponent from "../revealComponent";
import flatten from "flat";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

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
  revealIcon: {
    color: "#99acc2",
    cursor: "pointer",
  },
  revealIconDisabled: {
    color: "#99acc2",
  },
}));

export default function Information({
  title,
  notebook,
  data: { fields, ID },
  elements,
  handleRevealClick,
  handleHideClick,
  checks,
  handleChecks,
  revealLoading,
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
                  checked={checks[obj.options.name]}
                  onChange={(event) => {
                    handleChecks(event.target.checked, obj.options.name);
                  }}
                  color="primary"
                  className={classes.checkbox}
                  disabled={flatFields["application_status"] !== "Pending"}
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
          } else if (obj.elementType === "reveal") {
            return (
              <div key={obj.title}>
                <Typography
                  className={classes.key}
                  variant="h6"
                  color="textSecondary"
                >
                  {obj.title}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.value}
                  height="24px"
                >
                  <Typography variant="h6" style={{ marginRight: "8px" }}>
                    {flatFields[obj.options.name] || "xxxxxxxxxx"}
                  </Typography>
                  {!flatFields[obj.options.name] ? (
                    !revealLoading ? 
                    <VisibilityIcon
                      className={classes.revealIcon}
                      onClick={() => {
                        handleRevealClick(
                          obj.options.parentPath,
                          flatFields.skyflow_id
                        );
                      }}
                    /> : 
                   <CircularProgress size={16}/>
                  ) : (
                    <VisibilityOffIcon
                      className={classes.revealIcon}
                      onClick={() => {
                        handleHideClick(obj.options.parentPath);
                      }}
                    />
                  )}
                </Box>
              </div>
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
                  {flatFields[obj.options.name] || "xxxxxxxxxx"}
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
