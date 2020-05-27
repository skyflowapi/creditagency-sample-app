import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import one from '../../../assets/1.png';
import two from '../../../assets/2.png';
import three from '../../../assets/3.png';
import four from '../../../assets/4.png';
import logo from '../../../assets/logo.png';
import secure from '../../../assets/secure.png';


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

  text: {
    marginTop: theme.spacing(15),
    textAlign: "center",
    ...theme.typography.h1,
  },

  help: {
    marginTop: theme.spacing(4),
    ...theme.typography.h6,
    float: "right",
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
  buttons: {
    marginTop: theme.spacing(100),
  },
  b1: {
    float: "left",
    marginLeft: theme.spacing(20),
  },
  b2: {
    float: "right",
    marginRight: theme.spacing(20),
  },
  infoList: {
    
    
    marginTop: theme.spacing(10),
    marginLeft:theme.spacing(10)
  },
  fname:{
      marginTop:theme.spacing(5),
    float: "left",
    marginLeft: theme.spacing(6),
  },
  lname:{
    marginTop:theme.spacing(5),
    float: "right",
    marginRight:theme.spacing(6),
  },
  secure: {
    ...theme.typography.h6,
    marginLeft: theme.spacing(1),
    color: theme.palette.grey[1],
  },
  securee: {
    marginTop: theme.spacing(100),
    float: "center",
    marginLeft: theme.spacing(25),
  },
  names:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      
  }
}));

function namePage(props) {
  const classes = useStyles();
  const TextFieldMolecule = React.lazy(() => import('../../textField/textField'));
  const ListItem=React.lazy(()=>import('../../listItem/listItem'));

  function goToDOBPage(){
    console.log("clicked");
    props.history.push("/personalInformation/dob");
    }

  return (
    <div className={classes.root}>
      <Grid container className={classes.paper}>
        <Grid item className={classes.namePage}>
          <div>
            <img className={classes.logo} src={logo} alt="logo"></img>
            <div className={classes.logoText}>
              powered by <Link to="/">Skyflow</Link>
            </div>

            <div className={classes.infoList}>
            <ListItem img={one} text="PERSONAL INFORMATION" bool={true}/>
            <ListItem img={two} text="CONTACT INFORMATION" bool={false}/>
            <ListItem img={three} text="ACADEMIC INFORMATION" bool={false}/>
            <ListItem img={four} text="FINANCIAL INFORMATION" bool={false}/>
            </div>
            
          </div>
          <div className={classes.securee}>
              <img src={secure} alt="card"></img>
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
                <h1 className={classes.text}>
                  <b>My name is</b>
                </h1>
              </div>
            </Grid>
            <div  className={classes.names}>
                
              <TextFieldMolecule  name="FIRST NAME"/>
              <TextFieldMolecule name="LAST NAME"/>
              
            </div>
            <Grid className={classes.buttons} item>
              <Button className={classes.b1} variant="outlined">
                Previous
              </Button>
              <Button
                className={classes.b2}
                variant="contained"
                color="primary"
                onClick={goToDOBPage}
              >
                Next
              </Button>
              
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default namePage;
