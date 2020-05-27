import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import creditCard from '../../assets/creditCard.png';
import logo from '../../assets/logo.png';
import student from '../../assets/student.png';
import secure from '../../assets/secure.png';
import professional from '../../assets/professional.png';
import { Link, Route } from 'react-router-dom';
import theme from '../../utils/theme';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    width: "100%",
    height: window.innerHeight,
    position:"relative"
  },

  menu: {
    width: "25%",
    height: window.innerHeight,
    position:"relative",
    backgroundColor: theme.palette.grey[0],
  },
  cardImg: {
    display: "block",
    marginTop: theme.spacing(40),
    marginLeft: theme.spacing(13),
    maxWidth: "100%",
    maxHeight: "100%",
  },

  title: {
    
    marginTop: theme.spacing(18),
    textAlign: "center",
    
    ...theme.typography.h3,
  },
  heading: {
    marginTop: theme.spacing(15),
    
    textAlign: "center",
    
    ...theme.typography.h1,
  },
  helpLink: {
    marginTop: theme.spacing(4),
    ...theme.typography.h6,
    float: "right",
  },
  card: {
    marginTop: theme.spacing(18),
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
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
    justifyContent:"center"
  },
  subHeading: {
    ...theme.typography.h3,
    marginLeft: theme.spacing(12),
    marginTop: theme.spacing(20),
    width: "70%",
  },
  subHeading2: {
    
    marginLeft: theme.spacing(12),
    marginTop: theme.spacing(12),
    ...theme.typography.h5
  },
  secure: {
    ...theme.typography.h6,
    marginLeft: theme.spacing(1),
    color: theme.palette.grey[1],
  },
  secureForm: {
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
        <Grid item className={classes.menu}>
          <div>
            <img className={classes.logo} src={logo} alt="logo"></img>
            <div className={classes.logoText}>
              powered by <Link to="/">Skyflow</Link>
            </div>
            <div className={classes.subHeading}>
              <span> A few clicks away from getting your credit card. </span>
            </div>
            <div className={classes.subHeading2}>
              <span> Apply for a new credit card in minutes.</span>
            </div>
            <img className={classes.cardImg} src={creditCard} alt="card"></img>
            <div className={classes.secureForm}>
              <img src={secure} alt="card"></img>
              <span className={classes.secure}>Secure Form</span>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item>
              <div className={classes.helpLink}>
                Having troubles? <Link to="/">Get Help</Link>
              </div>
            </Grid>
            <Grid item>
              <div>
                <h1 className={classes.heading}>
                  <b>Let's see which card is right for you.</b>
                </h1>
              </div>
              <div>
                <div className={classes.title}>I am a </div>
              </div>
            </Grid>
            <div  className={classes.card}>
              <CardComp type={student} text="Student" handlePage={handlePage}/>
              <CardComp
                type={professional}
                text="Working Professional / Other"
                handlePage={handlePage}
              />
            </div>
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
