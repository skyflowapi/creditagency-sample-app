import React, { Component } from "react";
import arrow from "../../assets/arrow.png";
import { makeStyles } from "@material-ui/core/styles";
import NumberIcon from "../numberIcon";
import theme from '../../utils/theme';

const useStyles = makeStyles((theme) => ({
  item: {
    ...theme.h6,
    // color: theme.palette.grey[1],
    display:"flex",
    alignItems:"center",
    padding:theme.spacing(3)
  },
  text:{
    padding:theme.spacing(3)
  }
  
}));

export default function ListItem({ text, bool,number,status}) {
  const classes = useStyles();
  return (
    // <div style={{display:"flex"}}>
    <div className={classes.item}>
      <NumberIcon status={status} number={number}></NumberIcon>
      {status==="done" &&
      <span className={classes.text} style={{color:theme.palette.completed[0]}}>{text}</span>
      }
      {status==="current" &&
      <span className={classes.text} style={{color:theme.palette.current[0]}}>{text}</span>
      }
      {status==="pending" &&
      <span className={classes.text} style={{color:theme.palette.pending[0]}}>{text}</span>
      }
      {bool && <img style={{marginRight:0,objectFit:"contain"}} src={arrow} alt="arrow"></img>}
    </div>
    
    // {/* </div> */}
  );
}
