import React from "react";
import {
  Box,
  Checkbox as MuiCheckbox,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    padding: 0,
    marginLeft: theme.spacing(4),
    color: theme.palette.primary,
  },
  typography: {
    marginLeft: theme.spacing(2),
  },
}));

const Checkbox = (props) => {
  const classes = useStyles();

  const [checkedState, setCheckedState] = React.useState(props.checked);

  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center" mt={2}>
      <MuiCheckbox
        checked={checkedState}
        onChange={(event) => {
          setCheckedState(event.target.checked);
          props.handleChange(event.target.checked, props.value);
        }}
        color="primary"
        className={classes.checkbox}
      ></MuiCheckbox>
      <Typography variant="h6" className={classes.typography}>
        {props.value}
      </Typography>
    </Box>
  );
};

export default Checkbox;
