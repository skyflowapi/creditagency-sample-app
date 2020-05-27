import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import secure from '../../../assets/secure.png'
import creditCard from '../../../assets/creditCard.png'
import Header from '../header';
import DobPage from '../../personalInfo/dobPage/index';

const useStyles = makeStyles((theme) => ({

    root:{
        flexGrow:1,
        position:"relative",
        padding:theme.spacing(2),
        backgroundColor:theme.palette.grey[0],
        width:"90%",
        height:window.innerHeight
        
    },
    subHeading: {
        ...theme.typography.h3,
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(30),
        width: "70%",
      },
      subHeading2: {
        
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(12),
        ...theme.typography.h5
      },
      secure: {
        ...theme.typography.h6,
        marginLeft: theme.spacing(1),
        color: theme.palette.grey[1],
      },
      securee: {
        marginTop: theme.spacing(20),
        float: "center",
        marginLeft: theme.spacing(30),
      },
      cardImg: {
        display: "block",
        marginTop: theme.spacing(40),
        marginLeft: theme.spacing(13),
        maxWidth: "100%",
        maxHeight: "100%",
      },
}));
export default function SideBar(){

    const classes=useStyles();
    return(
        <div>
            
        <div className={classes.root}>
            <div className={classes.subHeading}>
              <span> A few clicks away from getting your credit card. </span>
            </div>
            <div className={classes.subHeading2}>
              <span> Apply for a new credit card in minutes.</span>
            </div>
            <img className={classes.cardImg} src={creditCard} alt="card"></img>
            <div className={classes.securee}>
              <img src={secure} alt="card"></img>
              <span className={classes.secure}>Secure Form</span>
            </div>
          </div>
          
          </div>
        
    );
}