import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import secure from "../../../assets/secure.png";
import one from "../../../assets/1.png";
import two from "../../../assets/2.png";
import three from "../../../assets/3.png";
import four from "../../../assets/4.png";
import creditCard from "../../../assets/creditCard.png";
import Header from "../header";
import DobPage from "../../personalInfo/dobPage/index";
import ListItem from "../../listItem/listItem";
import theme from '../../../utils/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[0],

    height: window.innerHeight,
  },

  infoList: {
    marginTop: theme.spacing(35),
    marginLeft: theme.spacing(10),
  },
  secure: {
    ...theme.typography.h6,
    marginLeft: theme.spacing(1),
    color: theme.palette.grey[1],
  },
  securee: {
    marginLeft: theme.spacing(30),
    position: "absolute",
    width: "100%",
    bottom: theme.spacing(10),
  },
}));
export default function SideNavBar({list}) {
  const classes = useStyles();
  // console.log(theme.palette.primary[0]);
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.infoList}>
          <ListItem number="1" text="PERSONAL INFORMATION" bool={list.pInfo.status==="current"} status={list.pInfo.status} />
          <ListItem number="2" text="CONTACT INFORMATION" bool={list.cInfo.status==="current"} status={list.cInfo.status}/>
          <ListItem number="3"  text="ACADEMIC INFORMATION" bool={list.aInfo.status==="current"} status={list.aInfo.status} />
          <ListItem number="4"  text="FINANCIAL INFORMATION" bool={list.fInfo.status==="current"} status={list.fInfo.status} />
        </div>
      </div>
      <div className={classes.securee}>
        <img src={secure} alt="card"></img>
        <span className={classes.secure}>Secure Form</span>
      </div>
    </div>
  );
}
