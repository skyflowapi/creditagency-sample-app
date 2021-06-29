import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  InputAdornment,
  Box,
  Popover,
  anchorEl,
  Radio,
  FormControlLabel,
  Divider,
  RadioGroup,
} from "@material-ui/core";
import { useState } from "react";
import theme from "../../utils/theme";
import Search from "@material-ui/icons/Search";
import Filter from "../../assets/filter.svg";
import FilterCheckbox from "../../components/FilterCheckbox";
import FormInputField from "../../components/FormInputField";

const useStyles = makeStyles((theme) => ({
  searchBox: {
    width: "440px",
    height: theme.spacing(9),
    borderRadius: theme.spacing(1),
    border: `solid 1px ${theme.palette.grey[300]}`,
    display: "flex",
    justifyContent: "center",
    "& .MuiInput-underline:after, & .MuiInput-underline:before": {
      border: "none !important",
    },
  },
  filterBox: {
    cursor: "pointer",
  },
  popoverContent: {
    backgroundColor: "white",
    userSelect: "none",
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: "4px",
    boxShadow: "none",
  },
}));

export default function SearchFilter({searchTerm, setSearchTerm, filteredGenderValues, handleGenderChange}) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);


  const handlePopoverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <FormInputField
      id="search"
      placeholder={"Search applicants"}
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
      value={searchTerm}
      autoComplete={"off"}
      inputProps={{ "data-testid": "search" }}
      className={classes.searchBox}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" disablePointerEvents>
            <Search />
          </InputAdornment>
        ),
        endAdornment: (
          <>
            <Box height={"24px"} width={"1px"} bgcolor={"#dfe3eb"}></Box>
            <Box
              display="flex"
              alignItems="center"
              width={"56px"}
              height={"21px"}
              mx={3}
              onClick={(e) => {
                handlePopoverClick(e);
              }}
              className={classes.filterBox}
            >
              <img src={Filter} style={{ marginRight: "2px" }}></img>
              <Typography variant="h6">Filter</Typography>
            </Box>
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              elevation={1}
              classes={{
                paper: `${classes.popoverContent}`,
              }}
            >
              <FilterCheckbox title = {"Gender"} values = {["Male", "Female", "Other"]} filteredValues={filteredGenderValues} handleChange={handleGenderChange}></FilterCheckbox>
            </Popover>
          </>
        ),
      }}
    />
  );
}
