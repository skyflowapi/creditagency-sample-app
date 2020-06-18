import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Info from "../../Info";
import Header from "../../layout/header";
import TextFieldMolecule from "../../textField/textField";
import Footer from "../../layout/footer";
import SideNavBar from "../../layout/sideNavBar";
import theme from "../../../utils/theme";
import InputMask from "react-input-mask";
import { TextField } from "@material-ui/core";
import { useMultipleSkyflowElements } from "../../../services/skyflowHooks";
import { useNextHook } from "../../../App";
import { ELEMENT_STYLES, CONTACT_INFO } from "../../../utils/constants";

const useStyles = makeStyles((theme) => ({
  number: {
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
  },
}));
export default function PhoneNumberComponent(props) {
  const classes = useStyles();
  const { next, setNext } = useNextHook();
  const { elements, isValid } = useMultipleSkyflowElements(
    [
      {
        elementType: CONTACT_INFO.PHONE_NUMBER.elementType,
        options: CONTACT_INFO.PHONE_NUMBER.options,
      },
    ],
    setNext
  );

  const list = {
    pInfo: { status: "done" },
    cInfo: { status: "current" },
    aInfo: { status: "pending" },
    fInfo: { status: "pending" },
  };
  const msg = (
    <span>
      <p>
        Mobile phone numbers are best so you can receive important messages and
        alerts from Skyflow.
      </p>
      <p>
        By clicking next button,you authorize Skyflow to contact you at this
        phone number for any reason related to this account including via
        text/SMS messages and voice
      </p>
    </span>
  );

  const goBack = () => {
    props.history.push("/personalInformation/dob");
  };
  const goToAddressPage = () => {
    props.history.push("/contactInformation/address");
  };
  return (
    <div>
      <Header />
      <div className={classes.components}>
        <SideNavBar list={list} />
        <div className={classes.page}>
          <div>
            <h1 className={classes.text}>
              <b>The best number to reach me is</b>
            </h1>
          </div>
          <div className={classes.number}>
            <TextFieldMolecule
              type="number"
              name="PHONE NUMBER"
              placeholder="Enter your phone number"
              ref={elements[0].elementRef}
            ></TextFieldMolecule>
            {/* <TextField style={{width:"350px"}} placeholder="Enter your phone number" type="number" variant="outlined"><InputMask mask="(+1)999-999-99-99" maskChar=" " /></TextField> */}
          </div>
          <div className={classes.info}>
            <Info information={msg} />
          </div>
          {/* <div className={classes.footer}>
          <Footer prev={goBack} next={goToAddressPage} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
