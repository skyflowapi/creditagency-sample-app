import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 250,
    width: 350,
  },
  control: {
    padding: theme.spacing(2),
  },
  text: {
    textAlign: "center",
    objectFit: "contain",
    fontFamily: "Roboto",
    lineHeight: 4,
    fontSize: "18px",
    color: "#1d1d1d",
  },
  student: {
    lineHeight: 5,
    marginTop: "20px",
    marginLeft: "120px",
    alignItems: "center",
  },
}));

export default function CardComp({ type, text }) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing="10">
          {/* {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))} */}
          <Grid item>
            <Paper style={{ cursor: "pointer" }} className={classes.paper}>
              <Link to="/personalInformation">
                <img className={classes.student} src={type} alt="student"></img>
              </Link>
              <Typography className={classes.text}>{text}</Typography>
            </Paper>
          </Grid>
          {/* <Grid item>
            <Paper
              style={{ cursor: "pointer" }}
              className={classes.paper}
              
            >
              <img
                className={classes.student}
                src={professional}
                alt="professional"
              ></img>
              <Typography className={classes.text}>
                Working Professional/Other
              </Typography>
            </Paper>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
