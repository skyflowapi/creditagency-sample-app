import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
        display:"flex",
        position:"absolute",
        padding:theme.spacing(2),
        backgroundColor:"transparent",
        justifyContent:"space-between",
        width:"100%",
        zIndex:"1"
    },
    logoText:{
        ...theme.typography.h6,
        marginLeft:theme.spacing(8),

    },
    logo: {
       marginTop:theme.spacing(4),
       marginLeft:theme.spacing(4),

      },
    logoWithText:{
        float:"left"
    },
    helpContent:{
        float:"right",
        padding:theme.spacing(3)
    }

}));
export default function Header(){

    const classes=useStyles();
    return(
        <div className={classes.root}>

        
        <div className={classes.logoWithText}>
            <img className={classes.logo} src={logo} alt="logo"></img>
            <div className={classes.logoText}>
              powered by <Link to="/">Skyflow</Link>
            </div>
            </div>
            <div className={classes.helpContent}>
            Having troubles? <Link to="/">Get Help</Link>
          </div>
          </div>
    );
}