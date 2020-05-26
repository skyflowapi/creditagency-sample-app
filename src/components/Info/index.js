import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import InfoIcon from '@material-ui/icons/Info';
import info from "../../assets/info.png";

const useStyles = makeStyles((theme) => ({
  rectangle: {
    width: 529,
    height: 44,
    borderRadius: "8px",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.04)",
    border: "#eaedf3",
    backgroundColor: "#eaedf3",
  },
  text: {
   
    textAlign: "center",
    fontFamily: "Roboto",
    color: "#696969",
    lineHeight:2.5,
    fontSize:"17px"
    
  },
  infoIcon:{

    marginTop:"10px"
  }
}));
function Info({ information }) {
  const classes = useStyles();
  return (
    <div className={classes.rectangle}>
     <img className={classes.infoIcon} src={info} alt="info icon"></img>&nbsp;&nbsp;<span className={classes.text}>{information}</span>
    </div>
  );
}

export default Info;
