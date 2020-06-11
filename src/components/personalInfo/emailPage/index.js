import React, { Component } from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../../layout/header";
import SideNavBar from "../../layout/sideNavBar";
import TextFieldMolecule from "../../textField/textField";



const useStyles = makeStyles((theme) => ({
    mailBox: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(5),
      ...theme.typography.h6,
    },
    text: {
      marginTop: theme.spacing(35),
      textAlign: "center",
      ...theme.typography.h1,
    },
    page: {
      width: "75%",
      position:"relative"
    },
    components: {
      display: "flex",
    },
    
  }));
export default function MailPage() {
  const classes=useStyles();
  const list={
    pInfo:{status:"current"},
    cInfo:{status:"pending"},
    aInfo:{status:"pending"},
    fInfo:{status:"pending"}
  };
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.components}>
        <SideNavBar list={list} />
        <div className={classes.page}>
          <div>
            <h1 className={classes.text}>
              <b>My email is</b>
            </h1>
          </div>
          <div className={classes.mailBox}>
            <TextFieldMolecule
              type="email"
              name="EMAIL"
              placeholder="Enter your email address"
            ></TextFieldMolecule>
            
          </div>
         
        </div>
      </div>
    </div>
  );
}
