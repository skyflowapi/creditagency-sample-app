import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Typography } from "@material-ui/core";
import Header from "../layout/header";
import finalImg from "../../assets/finalImage.png";
import theme from '../../utils/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading:{
      textAlign:"center",
      marginTop:theme.spacing(15)
  },
  content:{
      display:"flex",
      marginTop:theme.spacing(15),
      justifyContent:"center"
  },
  list:{
      ...theme.typography.h5,
      color:theme.palette.pending[0],
    
  }
}));
export default function FinalPage() {
  const classes = useStyles();
  const points=["Amazon prime student on us!","Cell phone protection upto $600","1% cashback on most purchases","No Annual Fee","No Foreign Transaction Fees","20% Variable APR"];
  return (
    <div>
      <Header pos="relative" />
      <Divider />
      <div className={classes.heading}>
        <Typography variant="h1">Almost Done!</Typography>
        <Typography  style={{padding:theme.spacing(3),fontSize:"26px"}}>
          Horaay, you are prequalified for OpenSky Edu.
        </Typography>
    </div>
        <div className={classes.content}>
          <img src={finalImg} style={{objectFit:"contain",padding:theme.spacing(5)}}></img>
          <div style={{marginLeft:theme.spacing(5)}}>
          <Typography style={{fontSize:"50px"}}>OpenSky Edu</Typography>
          <Divider style={{width:"160px"}}/>
          <div className={classes.list}>
          <ul>
             {points.map((e)=><li style={{marginTop:theme.spacing(5)}}>{e}</li>)} 
          </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}
