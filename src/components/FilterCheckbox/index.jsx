import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import Checkbox from "../Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "red",
  },
}));

const FilterCheckbox = () => {
  const classes = useStyles();
  return (
    <Box width={"223px"} height={"100%"} mt={3} mb={4}>
      <Box ml={4} mt={3.5} height={"14px"} display="flex" alignItems="center">
        <Typography variant="caption" color="textSecondary">
          Gender
        </Typography>
      </Box>
      <Checkbox value={"Male"}></Checkbox>
      <Checkbox value={"Female"}></Checkbox>
      <Checkbox value={"Others"}></Checkbox>
    </Box>
  );
};

export default FilterCheckbox;
