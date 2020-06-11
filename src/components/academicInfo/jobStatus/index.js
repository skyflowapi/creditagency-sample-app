import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Info from "../../Info";
import Header from "../../layout/header";
import TextFieldMolecule from "../../textField/textField";
import Footer from "../../layout/footer";
import SideNavBar from "../../layout/sideNavBar";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Typography,
} from "@material-ui/core";
import theme from "../../../utils/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    // height:window.innerHeight
  },
  radio: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(5),
    // ...theme.typography.h6,
    // flexDirection: "row",
  },
  text: {
    marginTop: theme.spacing(35),
    textAlign: "center",
    ...theme.typography.h4,
  },
  page: {
    width: "75%",
    position: "relative",
    height:200
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
  card: {
    border: "1px solid #eaedf3",
    width: "280px",
    height: "80px",
  },
  status: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
}));
export default function EmpComponent(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [studyLevel, setStudyLevel] = useState("");
  const [state, setState] = useState("");
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [country, setCountry] = useState("");
  const [ugSchool, setUgSchool] = useState("");
  const [ugMajor, setUgMajor] = useState("");
  const list = {
    pInfo: { status: "done" },
    cInfo: { status: "done" },
    aInfo: { status: "current" },
    fInfo: { status: "pending" },
  };
  // const goBack = () => {
  //   props.history.push("/contactInformation/address");
  // };
  // const goToFinance = () => {
  //   props.history.push("/financialInformation");
  // };
  // const handleRadioChange = (event) => {
  //   console.log(event.target.value);
  //   setValue(event.target.value);
  // };
  const handleChange = (event) => {
    setStudyLevel(event.target.value);
  };

  const handleState = (event) => {
    setState(event.target.value);
  };
  const handleSchool = (event) => {
    setSchool(event.target.value);
  };
  const handleMajor = (event) => {
    setMajor(event.target.value);
  };
  const handleCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleUgSchool = (event) => {
    setUgSchool(event.target.value);
  };
  const handleUgMajor = (event) => {
    setUgMajor(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.components}>
        <SideNavBar list={list} />
        <div className={classes.page}>
          <div>
            <h3 className={classes.text}><b>Please enter your academic details</b></h3>
          </div>
          <div className={classes.radio}>
            {/* <RadioGroup
              value={value}
              onChange={handleRadioChange}
              className={classes.radio}
            >
              <FormControlLabel
                value="Yes"
                control={<Radio color="primary" />}
                label="Yes"
                className={classes.card}
              />
              <FormControlLabel
                value="No"
                control={<Radio color="primary"/>}
                label="No"
                className={classes.card}
              />
            </RadioGroup> */}
            {/* <Radio color="primary" className={classes.card} label="No" value="No"/> */}
            {/* {value === "Yes" && (
            <div>
              <h1 className={classes.text}>
                <b>My employment status is</b>
              </h1>
              <div className={classes.status}>
                <RadioGroup className={classes.status}>
                  <FormControlLabel
                    value="Employed Full-Time"
                    control={<Radio color="primary" />}
                    label="Employed Full-Time"
                    className={classes.card}
                  />
                  <FormControlLabel
                    value="Employed Part-Time"
                    control={<Radio color="primary" />}
                    label="Employed Part-Time"
                    className={classes.card}
                  />
                  <FormControlLabel
                    value="Self-Employed"
                    control={<Radio color="primary" />}
                    label="Self-Employed"
                    className={classes.card}
                  />
                </RadioGroup>
              </div>
            </div>
          )} */}

            <FormControl style={{ width: "500px" }}>
              <InputLabel id="levelOfStudy">Level Of Study</InputLabel>
              <Select
                labelId="levelOfStudy"
                id="levelSelect"
                value={studyLevel}
                onChange={handleChange}
                // input={<BootstrapInput />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Masters">Masters</MenuItem>
                <MenuItem value="Bachelors">Bachelor's Degree</MenuItem>
                <MenuItem value="PHD">PHD</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Typography
            style={{ fontWeight: "bold", marginTop: theme.spacing(12) }}
            className={classes.radio}
            variant="h5"
          >
            where are you currently studying or planning to study in U.S?
          </Typography>

          <div className={classes.radio}>
            <FormControl style={{ width: "500px" }}>
              <InputLabel id="State">School State/Territory</InputLabel>
              <Select
                labelId="State"
                id="levelSelect"
                value={state}
                onChange={handleState}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Washington">Washington</MenuItem>
                <MenuItem value="Arizona">Arizona</MenuItem>
                <MenuItem value="Virginia">Virginia</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.radio}>
            <FormControl style={{ width: "500px" }}>
              <InputLabel id="SchoolName">School Name</InputLabel>
              <Select
                labelId="SchoolName"
                id="levelSelect"
                value={school}
                onChange={handleSchool}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Washington State university">
                  Washington State university
                </MenuItem>
                <MenuItem value="Arizona State university">
                  Arizona State university
                </MenuItem>
                <MenuItem value="Virginia State university">
                  Virginia State university
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.radio}>
            <FormControl style={{ width: "500px" }}>
              <InputLabel id="Major">Major</InputLabel>
              <Select
                labelId="Major"
                id="levelSelect"
                value={major}
                onChange={handleMajor}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Computer Science">Computer Science</MenuItem>
                <MenuItem value="Artifical Intelligence">
                  Artifical Intelligence
                </MenuItem>
                <MenuItem value="Machine Learning">Machine Learning</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* <Typography
            style={{ fontWeight: "bold", marginTop: theme.spacing(12) }}
            className={classes.radio}
            variant="h5"
          >
            where did you complete your undergraduate studies?
          </Typography>

          <div className={classes.radio}>
            <FormControl style={{ width: "500px" }}>
              <InputLabel id="Country">Country</InputLabel>
              <Select
                labelId="Country"
                value={country}
                onChange={handleCountry}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Washington">India</MenuItem>
                <MenuItem value="Arizona">Australia</MenuItem>
                <MenuItem value="Virginia">Russia</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.radio}>
            <FormControl style={{ width: "500px" }}>
              <InputLabel id="SchoolName">School Name</InputLabel>
              <Select
                labelId="SchoolName"
                value={ugSchool}
                onChange={handleUgSchool}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Washington State university">
                  Washington State university
                </MenuItem>
                <MenuItem value="Arizona State university">
                  Arizona State university
                </MenuItem>
                <MenuItem value="Virginia State university">
                  Virginia State university
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.radio}>
            <FormControl style={{ width: "500px" }}>
              <InputLabel id="Major">Major</InputLabel>
              <Select labelId="Major" value={ugMajor} onChange={handleUgMajor}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Computer Science">Computer Science</MenuItem>
                <MenuItem value="Artifical Intelligence">
                  Artifical Intelligence
                </MenuItem>
                <MenuItem value="Machine Learning">Machine Learning</MenuItem>
              </Select>
            </FormControl>
          </div> */}


          

          {/* <div className={classes.footer}>
            <Footer prev={goBack} next={goToFinance}/>
          </div> */}
        </div>
      </div>
    </div>
  );
}
