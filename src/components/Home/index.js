import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import creditCard from "../../assets/creditCard.png";
import logo from "../../assets/logo.png";
import student from "../../assets/student.png";
import secure from "../../assets/secure.png";
import professional from "../../assets/professional.png";
import { Link, Route } from "react-router-dom";
import theme from '../../utils/theme';


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

    backgroundColor: theme.palette.grey[0],
  },
  cardImg: {
    display: "block",
    marginTop: theme.spacing(40),
    marginLeft: theme.spacing(13),
    maxWidth: "100%",
    maxHeight: "100%",
  },

  iamA: {
    
    marginTop: theme.spacing(18),
    textAlign: "center",
    
    ...theme.typography.h3,
  },
  lets: {
    marginTop: theme.spacing(15),
    
    textAlign: "center",
    
    ...theme.typography.h1,
  },
  help: {
    marginTop: theme.spacing(4),
    ...theme.typography.h6,
    float: "right",
  },
  card: {
    marginTop: theme.spacing(18),
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(5),
  },
  logoText: {
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(10),
    ...theme.typography.h6,
  },
  info: {
    marginTop: theme.spacing(20),
    marginLeft: theme.spacing(65),
    textAlign: "center",
  },
  few: {
    ...theme.typography.h3,
    marginLeft: theme.spacing(12),
    marginTop: theme.spacing(20),
    width: "70%",
  },
  apply: {
    
    marginLeft: theme.spacing(12),
    marginTop: theme.spacing(12),
    ...theme.typography.h5
  },
  secure: {
    ...theme.typography.h6,
    marginLeft: theme.spacing(1),
    color: theme.palette.grey[1],
  },
  securee: {
    marginTop: theme.spacing(20),
    float: "center",
    marginLeft: theme.spacing(30),
  },
}));


function Home(props) {
  const classes = useStyles();
  const CardComp = React.lazy(() => import('../Card/index'));
  const Info = React.lazy(() => import('../Info/index'));
  function handlePage(){
  props.history.push("/personalInformation")
  }
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
              <span> A few clicks away from getting your credit card. </span>
            </div>
            <div className={classes.apply}>
              <span> Apply for a new credit card in minutes.</span>
            </div>
            <img className={classes.cardImg} src={creditCard} alt="card"></img>
            <div className={classes.securee}>
              <img src={secure} alt="card"></img>
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
                  <b>Let's see which card is right for you.</b>
                </h1>
              </div>
              <div>
                <div className={classes.iamA}>I am a </div>
              </div>
            </Grid>
            <Grid item className={classes.card}>
              <CardComp type={student} text="Student" handlePage={handlePage}/>
              <CardComp
                type={professional}
                text="Working Professional / Other"
                handlePage={handlePage}
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
