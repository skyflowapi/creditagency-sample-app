import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Info from '../../Info';
import Header from '../../layout/header';
import SideBar from '../../layout/sidebar';
import TextFieldMolecule from '../../textField/textField';



const useStyles = makeStyles((theme) => ({

    number:{
        
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
      },
      components:{
          display:"flex"
      },
      info:{
          justifyContent:"center",
          display:"flex",
          marginTop:theme.spacing(20)
      }

}));
export default function PhoneNumberComponent()
{
    const classes=useStyles();
    const msg="Mobile phone numbers are best so you can receive important messages and alerts from Skyflow.\n\nBy clicking next button,you authorize Skyflow to contact you at this phone number for any reason related to this account including via text/SMS messages and voice"
    return(
        <div>

        <Header/>
        <div className={classes.components}>

        <SideBar/>
        <div className={classes.page}>
        <div>
                <h1 className={classes.text}>
                  <b>The best number to reach me is</b>
                </h1>
              </div>
              <div className={classes.number}>
              <TextFieldMolecule name="PHONE NUMBER"></TextFieldMolecule>
              
              </div>
              <div className={classes.info}>
              <Info information={msg}/>
              </div>
              </div>
              </div>
              </div>
    );
}