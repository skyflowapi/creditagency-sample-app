import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldMolecule from "../textField/textField";
import Header from "../layout/header";
import SideBar from "../layout/sidebar";
import CardComp from "../Card/index";
import Info from "../Info/index";
import student from "../../assets/student.png";
import professional from "../../assets/professional.png";
import { Grid } from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  names: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(5),
    ...theme.typography.h6,
  },
  title: {
    marginTop: theme.spacing(18),
    textAlign: "center",

    ...theme.typography.h3,
  },
  heading: {
    marginTop: theme.spacing(35),
    textAlign: "center",
    ...theme.typography.h1,
  },
  page: {
    position: "relative",
    // textAlign:"center"
  },
  info: {
    marginTop: theme.spacing(20),
    marginLeft: theme.spacing(65),
    textAlign: "center",
    justifyContent: "center",
  },
  components: {
    display: "flex",
  },
  footer: {
    position: "absolute",
    width: "100%",
    bottom: theme.spacing(10),
  },
  card: {
    marginTop: theme.spacing(18),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default function Home(props) {
  const classes = useStyles();
  const msg=<p>International students do not need a SSN to apply</p>;
  const handlePage = () => {
    props.history.push("/personalInformation");
  };
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.components}>
        <SideBar />
        <div className={classes.page}>
          <div>
            <h1 className={classes.heading}>
              <b>Let's see which card is right for you.</b>
            </h1>
          </div>
          <div>
            <div className={classes.title}>I am a </div>
          </div>
          <div className={classes.card}>
            <CardComp type={student} text="Student" handlePage={handlePage} />
            <CardComp
              type={professional}
              text="Working Professional / Other"
              handlePage={handlePage}
            />
          </div>
          <div className={classes.info}>
            <Info information= {msg}/>
          </div>
          
        </div>
      </div>
    </div>
  );
}
