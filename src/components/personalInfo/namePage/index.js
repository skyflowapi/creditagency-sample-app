import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldMolecule from "../../textField/textField";
import Header from "../../layout/header";
import SideNavBar from "../../layout/sideNavBar";
import {
  YOUR_INFO,
  INTERNAL_FORM_LABEL_STYLES,
} from "../../../utils/constants";
import { useMultipleSkyflowElements } from "../../../services/skyflowHooks";
import { useNext } from "../../../services/next";
import Element from "../../Element";

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

  const { elementRef, state } = useMultipleSkyflowElements({
    name: "name-group",
    rows: [
      {
        spacing: "16px",
        elements: [
          {
            elementType: YOUR_INFO.FIRST_NAME.elementType,
            ...YOUR_INFO.FIRST_NAME.options,
            label: "FIRST NAME",
            labelStyles: { ...INTERNAL_FORM_LABEL_STYLES },
          },
          {
            elementType: YOUR_INFO.LAST_NAME.elementType,
            ...YOUR_INFO.LAST_NAME.options,
            label: "LAST NAME",
            labelStyles: { ...INTERNAL_FORM_LABEL_STYLES },
          },
        ],
      },
    ],
  });

  useNext(state.isValid);

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
            <Element
              ref={elementRef}
              width="632px"
              height="62px"
              marginTop="16px"
            />
            {/* <TextFieldMolecule
              id="firstName"
              name="FIRST NAME"
              ref={elements[0].elementRef}
            />
            <TextFieldMolecule
              id="lastName"
              name="LAST NAME"
              ref={elements[1].elementRef}
            /> */}
          </div>
          {/* <div className={classes.footer}>
            <Footer prev={goBack} next={goToDOBPage} />
            </div> */}
        </div>
      </div>
    </div>
  );
}
