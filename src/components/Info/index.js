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
    ...theme.typography.h6,
    lineHeight:2,
    color: theme.palette.grey[1],
    
    
  },
  infoIcon:{

    marginTop:theme.spacing(2)
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
