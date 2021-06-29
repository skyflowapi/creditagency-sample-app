import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import Checkbox from "../Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "red",
  },
}));

const FilterCheckbox = (props) => {
  const classes = useStyles();


  return (
    <Box width={"223px"} height={"100%"} mt={3} mb={4}>
      <Box ml={4} mt={3.5} height={"14px"} display="flex" alignItems="center">
        <Typography variant="caption" color="textSecondary">
          {props.title}
        </Typography>
      </Box>
      {props.values.map((value) => {
        return <Checkbox value={value} checked = {props.filteredValues.includes(value)} handleChange = {props.handleChange}/>;
      }
      )
      }
    </Box>
  );
};

export default FilterCheckbox;
