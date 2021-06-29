import {
  FormControl,
  MenuItem,
  Typography,
  Box,
  InputLabel,
  ListItemIcon,
} from "@material-ui/core";
import MuiSelect from "@material-ui/core/Select";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import FormOutlinedInputField from "./../FormOutlinedInputField";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    borderRadius: 4,
    boxShadow: theme.shadows[1],
  },
  dropdownStyle: {
    marginTop: "48px",
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: 4,
  },
  menuItem: {
    "&:hover": {
      backgroundColor: theme.palette.grey[400],
    },
  },
  disabled: {
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[1],
  },
  placeholder: {
    transform: "translate(16px, 8px) scale(1)",
  },
  listIcon: {
    minWidth: "26px",
  },
}));

const Select = ({ id, label, value, list = [], placeholder, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column" width="100%" height="100%">
      <FormControl variant="outlined">
        {placeholder && !value && (
          <InputLabel id={id + "input"} className={classes.placeholder}>
            <Typography variant="body2" color="inherit">
              {placeholder}
            </Typography>
          </InputLabel>
        )}
        <MuiSelect
          value={value}
          id={id}
          classes={{
            root: classes.root,
            disabled: classes.disabled,
          }}
          IconComponent={(props) => (
            <ArrowDropDownRoundedIcon
              style={{ fill: theme.palette.grey[500] }}
              {...props}
            />
          )}
          input={
            <FormOutlinedInputField
              id={id + "input"}
              labelWidth={0}
              value={value}
              errorText={rest.errorText}
            />
          }
          defaultValue={value}
          MenuProps={{
            classes: { paper: classes.dropdownStyle },
            variant: "menu",
          }}
          onChange={() => {}}
          data-test="select-items"
          {...rest}
        >
          {list.map((item, index) => {
            return (
              <MenuItem
                id={item.value}
                value={item.value}
                className={classes.menuItem}
                key={index}
                data-testid={"select-item-" + index}
                style={{
                  boxShadow: item.divider
                    ? `0 -1px 0 ${theme.palette.grey[300]}`
                    : "unset",
                }}
                disabled={item.disabled}
              >
                <Box display="flex">
                  {item.icon && (
                    <ListItemIcon classes={{ root: classes.listIcon }}>
                      <img src={item.icon} />
                    </ListItemIcon>
                  )}
                  <Typography variant="body2" color="textPrimary">
                    {item.label}
                  </Typography>
                </Box>
              </MenuItem>
            );
          })}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};

export default Select;
