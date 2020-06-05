import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../header';
import DobPage from '../../personalInfo/dobPage';
import SideNavBar from '../sideNavBar';



const useStyles = makeStyles((theme) => ({

    root:{
        flexGrow:1,
        
    },
    components:{
        
        display:"flex"
    },
    sideBar:{
        width:"25%"
    }
}));
export default function MainPage()
{  const classes=useStyles();
    return(
        <div className={classes.root}>
            <Header/>
            <div className={classes.components}>

            
            <div className={classes.sideBar}><SideNavBar/></div>
            <DobPage/>
            </div>
            
        </div>
    );
}