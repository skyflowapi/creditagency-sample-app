import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextFieldMolecule from '../../textField/textField';



const useStyles = makeStyles((theme) => ({

    dob:{
        
      display:"flex",
        justifyContent:"center",
        marginTop:theme.spacing(5),
        ...theme.typography.h6
    },
    text: {
        marginTop: theme.spacing(35),
        textAlign: "center",
        ...theme.typography.h1,
      },
      page:{
        width:"75%"
      }

}));
export default function DobPage(){

    const classes=useStyles();
    return(
        <div className={classes.page}>
        <div>
                <h1 className={classes.text}>
                  <b>I was born on</b>
                </h1>
              </div>
              <div className={classes.dob}>
              <TextFieldMolecule name="DATE OF BIRTH (MM/DD/YYYY)"></TextFieldMolecule>
              </div>
              </div>
    );
}