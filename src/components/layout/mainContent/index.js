import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../header';
import SideBar from '../sidebar';
import DobPage from '../../personalInfo/dobPage';



const useStyles = makeStyles((theme) => ({

    root:{
        flexGrow:1,
        
    },
    components:{
        display:"flex"
    }
}));
export default function MainPage()
{  const classes=useStyles();
    return(
        <div className={classes.root}>
            <Header/>
            <div className={classes.components}>

            
            <SideBar/>
            <DobPage/>
            </div>
            
        </div>
    )
}