import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, FormControlLabel, Radio } from "@material-ui/core";
import Info from "../../Info";
import Header from "../../layout/header";
import SideNavBar from "../../layout/sideNavBar";
import TextFieldMolecule from "../../textField/textField";
import Footer from "../../layout/footer";
import theme from "../../../utils/theme";
import { useNextHook } from "../../../App";
import { useMultipleSkyflowElements } from "../../../services/skyflowHooks";
import { ELEMENT_STYLES, FINANCIAL_INFO } from "../../../utils/constants";

const useStyles = makeStyles((theme) => ({
  ssn: {
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
  info: {
    justifyContent: "center",
    display: "flex",
    marginTop: theme.spacing(20),
  },
  footer: {
    position: "absolute",
    width: "100%",
    bottom: theme.spacing(10),
    justifyContent: "flex-end",
  },
}));
export default function SSNInfo(props) {
  const classes = useStyles();
  const { next, setNext } = useNextHook();
  const { elements, isValid } = useMultipleSkyflowElements(
    [
      {
        elementType: FINANCIAL_INFO.SSN.elementType,
        options: FINANCIAL_INFO.SSN.options,
      },
    ],
    setNext
  );

  const list = {
    pInfo: { status: "done" },
    cInfo: { status: "done" },
    aInfo: { status: "done" },
    fInfo: { status: "current" },
  };
  const msg = (
    <p>
      By clicking next button,I am providing written instructions under the Fair
      Credit Reporting Act authorizing Skyflow to obtain information solely to
      conduct a prequalification for credit and acknowledge that my credit will
      not be impacted as a result.
    </p>
  );
  const handleSSN = (event) => {
    const val = event.target.value;

    // event.target.value = val.replace(/.(?=.{4,}$)/g, "*");

    if (val.length <= 6) {
      event.target.value = val.replace(/\d/g, "*");
    }
  };
  const goBack = () => {
    props.history.push("/financialInformation/residence");
  };
  const goToSummary = () => {
    props.history.push("/");
  };

  const goToSubmitPage = () => {
    props.history.push("/summary");
  };

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.components}>
        <SideNavBar list={list} />
        <div className={classes.page}>
          <div>
            <h1 className={classes.text}>
              <b>My Social Security Number is</b>
            </h1>
          </div>
          <div className={classes.ssn}>
            <TextFieldMolecule
              // type="number"
              name="SOCIAL SECURITY NUMBER"
              handleChange={handleSSN}
              placeholder="XXXX XX XXXX"
              maxLength="10"
              ref={elements[0].elementRef}
            />
          </div>
          {/* <div style={{marginTop:theme.spacing(15),display:"flex",justifyContent:"center"}}>
              <FormControlLabel
              style={{border:"2px solid #eaedf3",width:"300px",borderRadius:"4px",background:theme.palette.grey[0]}}
                value="I don't have SSN"
                control={<Radio color="primary"/>}
                label="I don't have SSN"
              />
              </div> */}
          <div className={classes.info}>
            <Info information={msg} />
          </div>
          {/* <div className={classes.footer}>
            <Footer prev={goBack} next={goToSummary}/>
          </div> */}
        </div>
      </div>
    </div>
  );
}
