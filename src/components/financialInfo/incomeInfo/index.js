import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldMolecule from "../../textField/textField";
import Info from "../../Info";
import Header from "../../layout/header";
import SideNavBar from "../../layout/sideNavBar";
import Footer from "../../layout/footer";
import theme from "../../../utils/theme";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useNextHook } from "../../../App";
import { useMultipleSkyflowElements } from "../../../services/skyflowHooks";
import {
  ELEMENT_STYLES,
  FINANCIAL_INFO,
  OTHER_INFO,
} from "../../../utils/constants";

const useStyles = makeStyles((theme) => ({
  income: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(5),
    ...theme.typography.h6,
  },
  text: {
    marginTop: theme.spacing(35),
    textAlign: "center",
    ...theme.typography.h5,
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
  link: {
    color: theme.palette.royalBlue[0],
    textDecoration: "none",
  },
}));

export default function IncomeInfo(props) {
  const classes = useStyles();
  const { next, setNext } = useNextHook();
  const { elements, isValid } = useMultipleSkyflowElements(
    [
      {
        elementType: FINANCIAL_INFO.EDUCATION_LIVING_EXPENSES.elementType,
        options: FINANCIAL_INFO.EDUCATION_LIVING_EXPENSES.options,
      },
      {
        elementType: FINANCIAL_INFO.SOURCE_FUNDS.elementType,
        options: FINANCIAL_INFO.SOURCE_FUNDS.options,
      },
      {
        elementType: FINANCIAL_INFO.AVAILABLE_ASSETS.elementType,
        options: FINANCIAL_INFO.AVAILABLE_ASSETS.options,
      },
      {
        elementType: OTHER_INFO.AUTHORIZATION.elementType,
        options: OTHER_INFO.AUTHORIZATION.options,
      },
      {
        elementType: OTHER_INFO.CONCENT.elementType,
        options: OTHER_INFO.CONCENT.options,
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
      You may include personal income,which is income you have earned,including
      full-time,part-time,or seasonal jobs,self-employment,interests or
      dividends,retirement and public assistance.
    </p>
  );
  const goBack = () => {
    props.history.push("/academicInformation");
  };
  const goToResidencePage = () => {
    props.history.push("/financialInformation/residence");
  };

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.components}>
        <SideNavBar list={list} />
        <div className={classes.page}>
          {/* <div>
            <h1 className={classes.text}>
              <b>My yearly income is</b>
            </h1>
          </div>
          <div className={classes.income}>
            <TextFieldMolecule
              type="number"
              name="ANNUAL INCOME"
              placeholder="Enter your income"
              ref={elements[0].elementRef}
            />
          </div>
          <div className={classes.info}>
            <Info information={msg} />
          </div> */}

          <div className={classes.text}>
            <h2>Estimated Cost of education and living expenses(annual) </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                // marginBottom: theme.spacing(3),
              }}
            >
              <TextFieldMolecule
                width="630px"
                name="Education and Living Expenses"
                ref={elements[0].elementRef}
              />

              {/* <TextField
                style={{ width: "600px", marginTop: theme.spacing(3) }}
                placeholder="Education and Living Expenses"
              /> */}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                // marginTop: theme.spacing(5),
              }}
            >
              <TextFieldMolecule
                width="300px"
                name="Source Of Funds"
                ref={elements[1].elementRef}
              />
              <TextFieldMolecule
                width="300px"
                name="Available Assets"
                ref={elements[2].elementRef}
              />
              {/* <TextField
                style={{
                  width: "300px",
                  marginLeft: theme.spacing(2),
                  marginTop: theme.spacing(4),
                }}
                placeholder="Available Assets" 
              /> */}
            </div>
          </div>
          <div
            style={{
              marginTop: theme.spacing(10),
              // marginLeft: theme.spacing(-37.5),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "630px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                width="20px"
                height="20px"
                display="inline-block"
                ref={elements[3].elementRef}
                mr={4}
              />
              <Typography>
                I authorize Deserve to review my credit history.
              </Typography>
            </div>

            <div
              style={{
                width: "630px",
                color: theme.palette.grey[1],
                marginTop: theme.spacing(2),
                // marginLeft: theme.spacing(70),
              }}
            >
              <span>
                We do not require a credit history, but if available,may use it
                as part of the decisioning process. This information is used to
                prevent fraud and to access the health of any other credit
                products you may already have which may affect our credit
                decision.
              </span>
            </div>

            <div
              style={{
                width: "630px",
                marginTop: theme.spacing(4),
                // marginLeft: theme.spacing(63),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                width="20px"
                height="20px"
                display="inline-block"
                ref={elements[4].elementRef}
                mr={4}
              />
              <Typography
                style={{
                  width: "590px",
                }}
              >
                I have read ,understand and agree to{" "}
                <Link className={classes.link}>
                  Deserve's Electronic consent Policy
                </Link>
                ,<Link className={classes.link}>Privacy Policy</Link> ,{" "}
                <Link className={classes.link}>USA Patriot Act Notice </Link>,
                and
                <Link className={classes.link}>Terms of use </Link>. I
                acknowledge receipt of Celtic's Bank and Deserve's
                <Link className={classes.link}>Privacy Notice</Link>,and agree
                to receive notices at Deserve's website
              </Typography>
            </div>
          </div>

          {/* <div className={classes.footer}>
            <Footer prev={goBack} next={goToResidencePage} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
