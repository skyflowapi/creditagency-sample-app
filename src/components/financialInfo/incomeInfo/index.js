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
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useNextHook } from "../../../App";
import { useMultipleSkyflowElements } from "../../../services/skyflowHooks";
import { ELEMENT_STYLES, ELEMENTS_NAME } from "../../../utils/constants";

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
  link:{
    color:theme.palette.royalBlue[0],
    textDecoration:"none"
  }
}));

export default function IncomeInfo(props) {
  const classes = useStyles();
  const { next, setNext } = useNextHook();
  const { elements, isValid } = useMultipleSkyflowElements(
    [
      {
        elementType: "income",
        options: { ...ELEMENT_STYLES, name: ELEMENTS_NAME.ANNUAL_INCOME },
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
  const condition = (
    <p style={{width:"500px"}}>
      I have read ,understand and agree to{" "}
      <Link className={classes.link}>Deserve's Electronic consent Policy</Link>,
      <Link className={classes.link}>Privacy Policy</Link> , <Link className={classes.link}>USA Patriot Act Notice </Link>, and
      <Link className={classes.link}>Terms of use </Link>. I acknowledge receipt of Celtic's Bank and Deserve's
      <Link className={classes.link}>Privacy Notice</Link>,and agree to receive notices at Deserve's website
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
            <div>
              <TextField
                style={{ width: "600px",marginTop:theme.spacing(3) }}
                placeholder="Education and Living Expenses"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: theme.spacing(5),
              }}
            >
              <FormControl style={{ width: "300px" }}>
                <InputLabel id="Source Of Funds">Source Of Funds</InputLabel>
                <Select
                  labelId="Source Of Funds"
                  id="levelSelect"
                  // value={country}
                  // onChange={handleCountry}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Personal Funds<">Personal Funds</MenuItem>
                  <MenuItem value="Loan">Loan</MenuItem>
                  <MenuItem value="Scholarships">Scholarships</MenuItem>
                </Select>
              </FormControl>

              <TextField
                style={{
                  width: "300px",
                  marginLeft: theme.spacing(2),
                  marginTop: theme.spacing(4),
                }}
                placeholder="Available Assets"
              />
            </div>
            <div
              style={{
                marginTop: theme.spacing(20),
                marginLeft: theme.spacing(-50),
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    // onChange={handleChange}
                    
                  />
                }
                label="I authorize Deserve to review my credit history."
              />
            </div>
          </div>
          <div
            style={{
              width: "500px",
              color: theme.palette.grey[1],
              marginLeft: theme.spacing(70),
            }}
          >
            <span>
              We do not require a credit history, but if available,may use it as
              part of the decisioning process. This information is used to
              prevent fraud and to access the health of any other credit
              products you may already have which may affect our credit
              decision.
            </span>
          </div>
          <div
            style={{
              width: "600px",
              marginTop:theme.spacing(3),
              marginLeft: theme.spacing(70),
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  // onChange={handleChange}
                  
                />
              }
              label={condition}
            />
          </div>
          {/* <div className={classes.footer}>
            <Footer prev={goBack} next={goToResidencePage} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
