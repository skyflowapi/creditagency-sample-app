import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldMolecule from "../../textField/textField";
import Header from "../../layout/header";
import SideNavBar from "../../layout/sideNavBar";
import Footer from "../../layout/footer";
import { Button } from '@material-ui/core';
import theme from '../../../utils/theme';


const useStyles = makeStyles((theme) => ({
  names: {
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
  footer: {
    position: "absolute",
    width: "100%",
    bottom: theme.spacing(10),
  },
}));
export default function NamePage(props) {
  const classes = useStyles();
  const list={
    pInfo:{status:"current"},
    cInfo:{status:"pending"},
    aInfo:{status:"pending"},
    fInfo:{status:"pending"}
  };
  const goBack = () => {
    props.history.push("/");
    
  };
  const goToDOBPage = () => {
    props.history.push("/personalInformation/dob");
  };
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.components}>
        <SideNavBar list={list}/>
        <div className={classes.page}>
          <div>
            <h1 className={classes.text}>
              <b>My name is</b>
            </h1>
          </div>
          <div className={classes.names}>
            <TextFieldMolecule type="text" name="FIRST NAME" placeholder="Enter your First name"></TextFieldMolecule>
            <TextFieldMolecule type="text" name="LAST NAME" placeholder="Enter your last name"></TextFieldMolecule>
          </div>
          {/* <div className={classes.footer}>
            <Footer prev={goBack} next={goToDOBPage} />
            </div> */}
        </div>
      </div>
    </div>
  );
}

