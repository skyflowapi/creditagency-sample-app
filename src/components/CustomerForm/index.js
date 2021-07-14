import React from "react";
import {
  makeStyles,
  Box,
  Typography,
  Link,
  Checkbox,
  Button,
  CircularProgress,
} from "@material-ui/core";
import CustomerInfoImg from "./../../assets/customerInfo.png";
import theme from "../../utils/theme";
import { useForm } from "./hook";
import acme from "../../assets/acme.png";
import Element from "../Element";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.black[1],
    fontWeight: 700,
  },
  caption: {
    color: theme.palette.grey[2],
    fontWeight: "normal",
    paddingLeft: "8px",
  },
  subtitle: {
    color: theme.palette.black[1],
  },
  inputField: {
    display: "inline-block",
    marginBottom: "4px",
    color: theme.palette.text.secondary,
    fontWeight: "normal",
  },
  select: {
    width: "284px",
  },
  input: {
    width: "300px",
  },
  dollarInput: {
    width: "278px",
  },
  dollar: {
    position: "relative",
  },
  button: {
    width: "120px",
    textTransform: "none",
  },
  tnc: {
    color: theme.palette.grey[2],
  },
  roleToggleButton: {
    fontSize: "14px",
    textTransform: "none",
    padding: "1px 16px",
    borderRadius: "2px",
    boxShadow: "none",
  },
}));

const genderProps = {
  list: [
    {
      label: "Male",
      value: "MALE",
    },
    {
      label: "Female",
      value: "FEMALE",
    },
    {
      label: "Other",
      value: "OTHER",
    },
  ],
};

export default function CustomerForm() {
  const classes = useStyles();

  const {
    personalInfoRef,
    personalInfoState,
    contactInfoRef,
    contactInfoState,
    incomeRef,
    incomeState,
    checked,
    loading,
    handleCheckBox,
    handleSubmit,
  } = useForm();

  return (
    <Box bgcolor="#f9fafd" height={"100%"} minHeight={"100vh"} pb={"1px"}>
      <Box
        display="flex"
        justifyContent="space-between"
        width="1134px"
        pt={"26px"}
        mx="auto"
      >
        <img src={acme}></img>
        {/* <Box>
          <Button
            variant="contained"
            color="primary"
            className={classes.roleToggleButton}
            onClick={() => {
              history.push("/customer");
            }}
          >
            Customer
          </Button>
          <Button
            className={classes.roleToggleButton}
            onClick={() => {
              history.push("/analyst");
            }}
          >
            Analyst
          </Button>
        </Box> */}
      </Box>
      <Box
        width="1134px"
        my={6}
        mx="auto"
        pt={15}
        pr={1}
        pb={7.5}
        pl={20}
        borderRadius="12px"
        boxShadow={theme.shadows[1]}
        bgcolor={theme.palette.white[0]}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h5" className={classes.title}>
            TELL US ABOUT YOURSELF
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            (All fields are required)
          </Typography>
        </Box>
        <Box display="flex">
          <Box width="66%">
            <Box mt={10}>
              <Typography variant="body1" className={classes.subtitle}>
                Personal Information
              </Typography>
              <Element ref={personalInfoRef} height="220px" marginTop="16px" />
            </Box>

            <Box mt={10}>
              <Typography variant="body1" className={classes.subtitle}>
                Contact Information
              </Typography>
              <Element ref={contactInfoRef} height="220px" marginTop="16px" />
            </Box>
            <Box mt={10}>
              <Typography variant="body1" className={classes.subtitle}>
                Financial Information
              </Typography>
              <Element ref={incomeRef} marginTop="16px" height="100px" />
            </Box>
          </Box>
          <Box pt={25} pl={25}>
            <img src={CustomerInfoImg} />
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mt={11}>
          <Checkbox
            id="checkBox"
            checked={checked}
            onChange={handleCheckBox}
            color="primary"
          />
          <Typography variant="h6" className={classes.tnc}>
            I’ve read and agree to the{" "}
            <Link
              href="https://www.skyflow.com/terms-of-service"
              target="_blank"
            >
              Terms and Conditions
            </Link>
          </Typography>
        </Box>
        <Box mt={8}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSubmit}
            disabled={
              !checked ||
              !personalInfoState.isValid ||
              !contactInfoState.isValid ||
              !incomeState.isValid ||
              loading
            }
            startIcon={
              loading ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                undefined
              )
            }
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
