import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SkyflowLogo from "../../../assets/skyflow-blue.svg";
import theme from "../../../utils/theme";
import githubLogo from "../../../assets/github.svg";
import properties from "../../../utils/properties";
import { Typography, Popover, Box, Tooltip } from "@material-ui/core";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import Check from "@material-ui/icons/Check";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    // position:"absolute",
    padding: theme.spacing(2),
    backgroundColor: "transparent",
    justifyContent: "space-between",
    width: "100%",
    zIndex: "1",
  },
  logo: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(4),
  },
  logoWithText: {
    float: "left",
  },
  helpContent: {
    float: "right",
    padding: theme.spacing(8),
  },
}));
export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const isCustomer = window.location.href.includes("analytics") ? false : true;

  return (
    <div className={classes.root} style={{ position: props.pos || "absolute" }}>
      <div className={classes.logoWithText}>
        {/* <img className={classes.logo} src={SkyflowLogo} alt="logo"></img> */}
      </div>
      <Box display="flex" alignItems="center" mr={6}>
        <Tooltip title="View on GitHub">
          <a
            style={{
              textDecoration: "none",
              marginRight: "18px",
              textDecoration: "none",
            }}
            href={properties.GITHUB_REPO_URL}
            target="_blank"
          >
            <img src={githubLogo} height="30px" width="30px" />
          </a>
        </Tooltip>
        <Typography variant="caption">Are you an analyst?</Typography>
        <Box
          display="flex"
          alignItems="center"
          pl={2}
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
          width="85px"
        >
          <Typography variant="caption" color="primary">
            {isCustomer ? "Customer" : "Analyst"}
          </Typography>
          <ArrowDropDown color="primary" />
        </Box>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Box py={2}>
            <Box
              display="flex"
              color={
                isCustomer
                  ? theme.palette.text.primary
                  : theme.palette.text.secondary
              }
              px={2}
              alignItems="center"
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              <Typography variant="caption">Customer</Typography>
              {isCustomer && (
                <Check style={{ marginLeft: "12px", fontSize: "14px" }} />
              )}
            </Box>
            <Box
              display="flex"
              color={
                !isCustomer
                  ? theme.palette.text.primary
                  : theme.palette.text.secondary
              }
              py={2}
              px={2}
              alignItems="center"
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/analyst")}
            >
              <Typography variant="caption">Analyst</Typography>
              {!isCustomer && (
                <Check style={{ marginLeft: "12px", fontSize: "14px" }} />
              )}
            </Box>
            <Box pt={2} px={2} borderTop="1px solid #eaedf3">
              <Typography variant="caption">Get help</Typography>
            </Box>
          </Box>
        </Popover>
      </Box>
    </div>
  );
}
