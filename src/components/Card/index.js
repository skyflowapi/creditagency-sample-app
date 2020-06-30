import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
  Typography,
  Radio,
  FormControlLabel,
  Divider,
  RadioGroup,
} from "@material-ui/core";
import { useState } from "react";
import theme from "../../utils/theme";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 255,
    width: 350,
  },

  text: {
    textAlign: "center",
    objectFit: "contain",
    ...theme.typography.h5,
    marginTop: theme.spacing(10),
    color: theme.palette.black,
  },
  image: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(30),
    alignItems: "center",
  },
  radio: {
    padding: theme.spacing(6),
    justifyContent: "center",
  },
}));

export default function CardComp({ type, text, handlePage }) {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  // const [value,setValue]=useState("");
  const history = useHistory();
  const handle = () => {
    setShow(true);
  };
  const handleRadioChange = (e) => {
    // setValue(e.target.value);
    // if (e.target.value === "from abroad") {
      // console.log(value);
      history.push("/personalInformation");
    // }
  };
  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing="10">
          {show === false && (
            <Grid item>
              <Paper
                style={{ cursor: "pointer" }}
                className={classes.paper}
                onClick={handle}
              >
                <img className={classes.image} src={type} alt="student"></img>

                <Typography className={classes.text}>{text}</Typography>
              </Paper>
            </Grid>
          )}
          {show === true && (
            <Grid item>
              <Paper style={{ cursor: "pointer" }} className={classes.paper}>
                {/* <img className={classes.image} src={type} alt="student"></img> */}

                <Typography
                  style={{
                    background: theme.palette.lightBlue[0],
                    padding: theme.spacing(6),
                  }}
                  className={classes.text}
                >
                  {text}
                </Typography>

                <div>
                  <RadioGroup
                    // style={{ marginTop: theme.spacing(4) }}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      value="from the U.S"
                      control={<Radio color="primary" />}
                      label="from the U.S"
                      className={classes.radio}
                    />
                    <Divider />
                    <FormControlLabel
                      value="from abroad"
                      control={<Radio color="primary" />}
                      label="from abroad"
                      className={classes.radio}
                    />
                  </RadioGroup>
                </div>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
