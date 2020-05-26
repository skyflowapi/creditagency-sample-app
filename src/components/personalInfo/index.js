import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.png";
import secure from "../../assets/secure.png";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { TextField, Button } from "@material-ui/core";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import four from "../../assets/4.png";
import arrow from "../../assets/arrow.png";
import TextFieldMolecule from "../molecules/textField";
import ListItem from "../molecules/listItem";
import ButtonItem from "../atoms/buttonAtom";


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

  lets: {
    marginTop: "45px",
    fontFamily: "Roboto",
    textAlign: "center",
    fontSize: "40px",
  },

  help: {
    marginTop: "35px",
    fontFamily: "Roboto",
    float: "right",
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
  buttons: {
    marginTop: "28%",
  },
  b1: {
    float: "left",
    marginLeft: "30px",
  },
  b2: {
    float: "right",
    marginRight: "30px",
  },
  infoList: {
    
    padding: "10px",
    marginTop: "18%",
    marginLeft:"20px"
  },
  pInfo: {
    
    padding: "10px",
  },
  cInfo: {
    padding: "10px",
  },
  aInfo: {
    padding: "10px",
  },
  fInfo: {
    padding: "10px",
  },
  fname:{
      marginTop:"6%",
    float: "left",
    marginLeft: "20%",
  },
  lname:{
    marginTop:"6%",
    float: "right",
    marginRight: "20%",
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
    marginTop: "60%",
    float: "center",
  },
  names:{
      display:"flex",
      flexDirection:"row",
      
  }
}));

function Page1() {
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

            <div className={classes.infoList}>
            <ListItem className={classes.pInfo} img={one} text="PERSONAL INFORMATION" bool={true}/>
            <ListItem className={classes.cInfo} img={two} text="CONTACT INFORMATION" bool={false}/>
            <ListItem className={classes.aInfo} img={three} text="ACADEMIC INFORMATION" bool={false}/>
            <ListItem className={classes.finfo} img={four} text="FINANCIAL INFORMATION" bool={false}/>
            </div>
            
          </div>
          <div className={classes.securee}>
              <img className={classes.secureForm} src={secure} alt="card"></img>
              <span className={classes.secure}>Secure Form</span>
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
                  <b>My name is</b>
                </h1>
              </div>
            </Grid>
            <Grid item className={classes.names}>
                
              <TextFieldMolecule  name="FIRST NAME"/>
              <TextFieldMolecule name="LAST NAME"/>
              
            </Grid>
            <Grid className={classes.buttons} item>
              <Button className={classes.b1} variant="outlined">
                Previous
              </Button>
              <Button
                className={classes.b2}
                variant="contained"
                color="primary"
              >
                Next
              </Button>
              {/* <ButtonItem name="prev" type="primary"></ButtonItem> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Page1;
