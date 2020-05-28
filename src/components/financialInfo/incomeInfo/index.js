import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldMolecule from "../../textField/textField";
import Info from "../../Info";
import Header from "../../layout/header";
import SideNavBar from "../../layout/sideNavBar";
import Footer from "../../layout/footer";
import theme from "../../../utils/theme";

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
    ...theme.typography.h1,
  },
  page: {
    width: "75%",
    position:"relative"
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

export default function IncomeInfo(props) {
  const classes = useStyles();
  const list={
    pInfo:{status:"done"},
    cInfo:{status:"done"},
    aInfo:{status:"done"},
    fInfo:{status:"current"}
  };
  const msg =
    <p>You may include personal income,which is income you have earned,including full-time,part-time,or seasonal jobs,self-employment,interests or dividends,retirement and public assistance.</p>;
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
        <SideNavBar list={list}/>
        <div className={classes.page}>
          <div>
            <h1 className={classes.text}>
              <b>My yearly income is</b>
            </h1>
          </div>
          <div className={classes.income}>
            <TextFieldMolecule type="number" name="ANNUAL INCOME" placeholder="Enter your income"/>
          </div>
          <div className={classes.info}>
            <Info information={msg} />
          </div>
          {/* <div className={classes.footer}>
            <Footer prev={goBack} next={goToResidencePage} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
