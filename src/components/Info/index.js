import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import info from '../../assets/info.png';

const useStyles = makeStyles((theme) => ({
  rectangle: {
    width: 529,
    height: "100%",
    borderRadius: "8px",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.04)",
    border: "#eaedf3",
    backgroundColor: "#eaedf3",
    position:"relative",
    display:"flex"
    
  },
  text: {
   ...theme.typography.h6,
    lineHeight:1.6,
    marginLeft:theme.spacing(12),
    marginTop:theme.spacing(1),
    marginBottom:theme.spacing(1),
    color: theme.palette.grey[1],
    textAlign:"left",
    ...theme.typography.h6
    
  },
  infoIcon:{

    top:theme.spacing(0),
    left:"30px",
    position:"absolute"
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
