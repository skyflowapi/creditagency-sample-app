import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardComp from "../Card/index";
import Info from "../Info/index";
import creditCard from "../../assets/creditCard.png";
import logo from "../../assets/logo.png";
import student from "../../assets/student.png";
import secure from "../../assets/secure.png";
import professional from "../../assets/professional.png";
import { Link, Route } from 'react-router-dom';
import Page1 from '../personalInfo/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    width: "100%",
    height: window.innerHeight,
  },

  page1: {
    width: "25%",
    height: window.innerHeight,

    backgroundColor: "#fbfbfd",
  },
  cardImg: {
    display: "block",
    marginTop: "45%",
    marginLeft: "50px",
    maxWidth: "100%",
    maxHeight: "100%",
  },

  iamA: {
    fontFamily: "Roboto",
    marginTop: "50px",
    textAlign: "center",
    fontSize:"23px"
  },
  lets: {
    marginTop: "45px",
    fontFamily: "Roboto",
    textAlign: "center",
    fontSize:"40px"
  },
  help: {
    marginTop: "35px",
    fontFamily: "Roboto",
    float: "right",
  },
  card: {
    marginTop: "6%",
    display:"flex",
    flexDirection:"row"
  },
  logo: {
    marginTop: "30px",
    marginLeft: "30px",
  },
  logoText: {
    fontFamily: "Roboto",
    marginTop: "3px",
    marginLeft: "55px",
    fontSize: "15px",
  },
  info: {
    fontFamily: "Roboto",
    marginTop: "8%",
    marginLeft: "25%",
    textAlign: "center",
  },
  few: {
    fontFamily: "Roboto",
    marginLeft: "12%",
    marginTop: "18%",
    width: "70%",
    fontSize:"24px"
  },
  apply: {
    fontFamily: "Roboto",
    marginLeft: "12%",
    marginTop: "15%",
    fontSize:"18px"
  },
  secureForm: {
    marginTop: "%",
    marginLeft: "105px",
  },
  secure: {
    fontSize: "14px",
    marginLeft: "4px",
    color: "#696969",
  },
  securee: {
    marginTop: "16%",
    float: "center",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
      <Grid container className={classes.paper}>
        <Grid item className={classes.page1}>
          <div>
            <img className={classes.logo} src={logo} alt="logo"></img>
            <div className={classes.logoText}>
              powered by <Link to="/">Skyflow</Link>
            </div>
            <div className={classes.few}>
              <span> A few clicks away from getting your credit card </span>
            </div>
            <div className={classes.apply}>
              <span> Apply for credit card in minutes</span>
            </div>
            <img className={classes.cardImg} src={creditCard} alt="card"></img>
            <div className={classes.securee}>
              <img className={classes.secureForm} src={secure} alt="card"></img>
              <span className={classes.secure}>Secure Form</span>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item>
              <div className={classes.help}>
                Having troubles? <Link to="/">Get Help</Link>
              </div>
            </Grid>
            <Grid item>
              <div>
                <h1 className={classes.lets}>
                  <b>Let's see which card is right for you</b>
                </h1>
              </div>
              <div>
                <div className={classes.iamA}>Iam a </div>
              </div>
            </Grid>
            <Grid item className={classes.card}>
              <CardComp
                type={student}
                text="Student"
                
              />
              <CardComp
                
                type={professional}
                text="Working Professional / Other"
              />
            </Grid>
            <Grid item className={classes.info}>
              <Info information="International students do not need a SSN to apply" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
