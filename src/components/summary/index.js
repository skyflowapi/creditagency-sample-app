import React, { Component } from "react";
import { Divider, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../layout/header";
import lock from "../../assets/lock.png";
import theme from "../../utils/theme";
import assignment from "../../assets/assignment.png";
import Information from "../information";
import { useHistory } from "react-router-dom";
import { useSkyflow } from "../../services";
import {
  YOUR_INFO,
  CONTACT_INFO,
  ACADEMIC_INFO,
  FINANCIAL_INFO,
} from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "absolute",
    width: "100%",
    // bottom: 0,
    marginTop: theme.spacing(15),
  },
  content: {
    display: "inline-block",
    marginLeft: theme.spacing(70),
    height: "20px",
  },
  note: {
    background: theme.palette.royalBlue[0],
    color: theme.palette.white[0],
    textAlign: "center",
    padding: theme.spacing(1),
  },
  message: {
    display: "flex",
  },
  buttons: {
    float: "right",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  body: {
    padding: theme.spacing(15),
  },
  backButton: {
    textTransform: "capitalize",
    width: "130px",
    height: "38px",
  },
  submitButton: {
    background: "#1665d8",
    textTransform: "capitalize",
    width: "130px",
    height: "38px",
    marginLeft: theme.spacing(5),
  },
}));

export default function Summary(props) {
  const classes = useStyles();
  const history = useHistory();
  const { elements } = useSkyflow();

  const submitPage = () => {
    history.push("/submit");
    props.setEmail(
      elements
        .getElement(YOUR_INFO.EMAIL.elementType, YOUR_INFO.EMAIL.options.name)
        .getState().value
    );
  };

  const editDetailsPage = () => {
    history.goBack();
  };
  return (
    <div className={classes.root}>
      <Header pos="relative" />
      <Divider />
      <div className={classes.body}>
        <div style={{ display: "flex" }}>
          {" "}
          <img style={{ objectFit: "contain" }} src={assignment} />{" "}
          <Typography variant="h1" style={{ marginLeft: theme.spacing(1) }}>
            Review Your Information
          </Typography>
        </div>
        <Typography
          variant="h5"
          style={{
            color: theme.palette.pending[0],
            marginTop: theme.spacing(5),
          }}
        >
          Please review the summary of your application below,then submit to
          continue.
        </Typography>
        <div
          style={{
            marginTop: theme.spacing(10),
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Information title="YOUR INFORMATION" data={YOUR_INFO} />
          <Information title="CONTACT INFORMATION" data={CONTACT_INFO} />
          <Information title="ACADEMIC INFORMATION" data={ACADEMIC_INFO} />
          <Information title="FINANCIAL INFORMATION" data={FINANCIAL_INFO} />
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.note}>
          Please note : We do not share your personal information with
          unaffiliated third parties for their own marketing purposes.
        </div>

        <div className={classes.content}>
          <div className={classes.message}>
            <img style={{ objectFit: "contain" }} src={lock}></img>
            <Typography style={{ padding: theme.spacing(2) }} variant="h3">
              Secure Form
            </Typography>
            <span
              style={{
                padding: theme.spacing(2),
                color: theme.palette.pending[0],
                marginTop: theme.spacing(2),
              }}
            >
              Information Security:Skyflow uses encryption to secure the
              transmission of information to our site
            </span>
          </div>
        </div>
        <div className={classes.buttons}>
          <Button
            className={classes.backButton}
            variant="outlined"
            onClick={editDetailsPage}
          >
            Go Back & Edit
          </Button>
          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            onClick={submitPage}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
