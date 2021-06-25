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

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center" mt={2}>
      <MuiCheckbox
        checked={checked}
        onChange={handleChange}
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
