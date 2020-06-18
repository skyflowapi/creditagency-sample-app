import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import theme from "../../../utils/theme";
import githubLogo from "../../../assets/github.svg";
import properties from "../../../utils/properties";

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
  logoText: {
    ...theme.typography.h6,
    marginLeft: theme.spacing(8),
  },
  logo: {
    marginTop: theme.spacing(4),
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
  return (
    <div className={classes.root} style={{ position: props.pos || "absolute" }}>
      <div className={classes.logoWithText}>
        <img className={classes.logo} src={logo} alt="logo"></img>
        <div className={classes.logoText}>
          <span style={{ fontSize: "12px" }}>powered by </span>
          <Link
            style={{
              color: theme.palette.skyBlue[0],
              textDecoration: "none",
              fontFamily: "Montserrat",
            }}
            to="/skyflow"
          >
            Skyflow
          </Link>
        </div>
      </div>
      <div style={{ fontSize: "12px" }} className={classes.helpContent}>
        <a
          style={{
            color: theme.palette.royalBlue[0],
            textDecoration: "none",
            paddingLeft: "20px",
            background: `url(${githubLogo}) left center no-repeat`,
            backgroundSize: "contain",
          }}
          href={properties.GITHUB_REPO_URL}
        >
          View On GitHub
        </a>
      </div>
    </div>
  );
}
