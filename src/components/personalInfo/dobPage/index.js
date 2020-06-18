import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldMolecule from "../../textField/textField";
import Header from "../../layout/header";
import SideNavBar from "../../layout/sideNavBar";
import Footer from "../../layout/footer";
import theme from "../../../utils/theme";
import { useNextHook } from "../../../App";
import { useMultipleSkyflowElements } from "../../../services/skyflowHooks";
import { ELEMENT_STYLES, YOUR_INFO } from "../../../utils/constants";

const useStyles = makeStyles((theme) => ({
  dob: {
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
export default function DobPage(props) {
  const classes = useStyles();
  const { next, setNext } = useNextHook();

  const { elements, isValid } = useMultipleSkyflowElements(
    [
      {
        elementType: YOUR_INFO.DOB.elementType,
        options: YOUR_INFO.DOB.options,
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
    props.history.push("/personalInformation");
  };
  const goToContactPage = () => {
    props.history.push("/contactInformation");
  };
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.components}>
        <SideNavBar list={list} />
        <div className={classes.page}>
          <div>
            <h1 className={classes.text}>
              <b>I was born on</b>
            </h1>
          </div>
          <div className={classes.dob}>
            <TextFieldMolecule
              id="dob"
              name="DATE OF BIRTH (MM/DD/YYYY)"
              ref={elements[0].elementRef}
            />
          </div>
          {/* <div className={classes.footer}>
            <Footer prev={goBack} next={goToContactPage} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
