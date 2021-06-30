import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import {
  makeStyles,
  Box,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "16px",
    height: "16px",
    cursor: "pointer",
  },
  box: {
    backgroundColor: "#d0f0fd",
    padding: "3px 8px",
    marginLeft: "6px",
    borderRadius: "18px",
  },
}));

const Chip = (props) => {
  const classes = useStyles();
  return (
    <Box
      height="22px"
      className={classes.box}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="caption"
        style={{ fontWeight: 400, marginRight: "7px" }}
      >
        {props.value}
      </Typography>
      <CloseIcon
        className={classes.icon}
        onClick={() => {
          props.handleGenderChange(false, props.value);
        }}
      />
    </Box>
  );
};

export default Chip;
