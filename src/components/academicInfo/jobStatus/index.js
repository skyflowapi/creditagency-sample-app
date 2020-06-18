import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Info from "../../Info";
import Header from "../../layout/header";
import TextFieldMolecule from "../../textField/textField";
import Footer from "../../layout/footer";
import SideNavBar from "../../layout/sideNavBar";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Typography,
} from "@material-ui/core";
import theme from "../../../utils/theme";
import { useMultipleSkyflowElements } from "../../../services/skyflowHooks";
import { useNextHook } from "../../../App";
import { ELEMENT_STYLES, ACADEMIC_INFO } from "../../../utils/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    // height:window.innerHeight
  },
  radio: {
    display: "flex",
    justifyContent: "center",
    // marginTop: theme.spacing(5),
    // ...theme.typography.h6,
    // flexDirection: "row",
  },
  text: {
    marginTop: theme.spacing(35),
    textAlign: "center",
    ...theme.typography.h4,
  },
  page: {
    width: "75%",
    position: "relative",
    height: 200,
  },
  components: {
    display: "flex",
  },
  info: {
    justifyContent: "center",
    display: "flex",
    marginTop: theme.spacing(20),
  },
  footer: {
    position: "absolute",
    width: "100%",
    bottom: theme.spacing(10),
  },
  card: {
    border: "1px solid #eaedf3",
    width: "280px",
    height: "80px",
  },
  status: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
}));
export default function EmpComponent(props) {
  const classes = useStyles();
  const { next, setNext } = useNextHook();
  const { elements, isValid } = useMultipleSkyflowElements(
    [
      {
        elementType: ACADEMIC_INFO.LEVEL_OF_STUDY.elementType,
        options: ACADEMIC_INFO.LEVEL_OF_STUDY.options,
      },
      {
        elementType: ACADEMIC_INFO.SCHOOL_STATE.elementType,
        options: ACADEMIC_INFO.SCHOOL_STATE.options,
      },
      {
        elementType: ACADEMIC_INFO.SCHOOL_NAME.elementType,
        options: ACADEMIC_INFO.SCHOOL_NAME.options,
      },
      {
        elementType: ACADEMIC_INFO.MAJOR.elementType,
        options: ACADEMIC_INFO.MAJOR.options,
      },
    ],
    setNext
  );
  const list = {
    pInfo: { status: "done" },
    cInfo: { status: "done" },
    aInfo: { status: "current" },
    fInfo: { status: "pending" },
  };
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.components}>
        <SideNavBar list={list} />
        <div className={classes.page}>
          <div>
            <h3 className={classes.text}>
              <b>Please enter your academic details</b>
            </h3>
          </div>
          <div className={classes.radio}>
            <TextFieldMolecule
              width="500px"
              name="Level Of Study"
              ref={elements[0].elementRef}
            />
          </div>
          <Typography
            style={{ fontWeight: "bold", marginTop: theme.spacing(5) }}
            className={classes.radio}
            variant="h5"
          >
            where are you currently studying or planning to study in U.S?
          </Typography>

          <div className={classes.radio}>
            <TextFieldMolecule
              width="500px"
              name="School State/Territory"
              ref={elements[1].elementRef}
            />
          </div>
          <div className={classes.radio}>
            <TextFieldMolecule
              width="500px"
              name="School Name"
              ref={elements[2].elementRef}
            />
          </div>
          <div className={classes.radio}>
            <TextFieldMolecule
              width="500px"
              name="Major"
              ref={elements[3].elementRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
