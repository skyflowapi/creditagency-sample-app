import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    footer:{
        display:"flex",
        bottom:0,
        justifyContent:"space-between",
        
        
    },
    previous:{
        marginLeft:theme.spacing(20)
    },
    next:{
        marginRight:theme.spacing(30)
    }

}));
export default function Footer(props){
     
    const classes=useStyles();
    return(
        <div className={classes.footer}>
            <Button className={classes.previous} onClick={props.prev} variant="outlined">
                Previous
              </Button>
              <Button
                className={classes.next}
                onClick={props.next}
                variant="contained"
                color="primary"
                
              >
                Next
              </Button>
        </div>
    );
}