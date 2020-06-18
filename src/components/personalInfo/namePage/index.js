import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldMolecule from "../../textField/textField";
import Header from "../../layout/header";
import SideNavBar from "../../layout/sideNavBar";
import Footer from "../../layout/footer";
import { Button, setRef } from "@material-ui/core";
import theme from "../../../utils/theme";
import { useSkyflow } from "../../../services";
import { ELEMENT_STYLES, YOUR_INFO } from "../../../utils/constants";
import { useNextHook } from "../../../App";
import { useMultipleSkyflowElements } from "../../../services/skyflowHooks";

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
    position: "relative",
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

  const { next, setNext } = useNextHook();

  const { elements, isValid } = useMultipleSkyflowElements(
    [
      {
        elementType: YOUR_INFO.FIRST_NAME.elementType,
        options: YOUR_INFO.FIRST_NAME.options,
      },
      {
        elementType: YOUR_INFO.LAST_NAME.elementType,
        options: YOUR_INFO.LAST_NAME.options,
      },
    ],
    setNext
  );

  const list = {
    pInfo: { status: "current" },
    cInfo: { status: "pending" },
    aInfo: { status: "pending" },
    fInfo: { status: "pending" },
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
        <SideNavBar list={list} />
        <div className={classes.page}>
          <div>
            <h1 className={classes.text}>
              <b>My name is</b>
            </h1>
          </div>
          <div className={classes.names}>
            <TextFieldMolecule
              id="firstName"
              name="FIRST NAME"
              ref={elements[0].elementRef}
            />
            <TextFieldMolecule
              id="lastName"
              name="LAST NAME"
              ref={elements[1].elementRef}
            />
          </div>
          {/* <div className={classes.footer}>
            <Footer prev={goBack} next={goToDOBPage} />
            </div> */}
        </div>
      </div>
    </div>
  );
}
