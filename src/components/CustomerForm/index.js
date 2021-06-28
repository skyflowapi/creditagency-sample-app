import React from "react";
import {
  makeStyles,
  Box,
  Typography,
  Link,
  InputAdornment,
  Checkbox,
  Button,
  CircularProgress
} from "@material-ui/core";
import FormInputField from "./../FormOutlinedInputField";
import CustomerInfoImg from "./../../assets/customerInfo.png";
import theme from "../../utils/theme";
import { default_state, useCustomerForm } from "./hook";
import Select from "../Select";
import acme from "../../assets/acme.png";
import { useHistory } from "react-router-dom";

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

const cityProps = {
  list: [
    {
      label: "Seixo de Manhoses",
      value: "Seixo de Manhoses",
    },
    {
      label: "Lembang",
      value: "Lembang",
    },
  ],
};

const stateProps = {
  list: [
    {
      label: "New York",
      value: "New York",
    },
  ],
};

const countryProps = {
  list: [
    {
      label: "United States",
      value: "UNITED_STATES",
    },
  ],
};

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
    disabled,
    form,
    formErrors,
    handleFormChange,
    handleFormBlur,
    handleSubmit,
    handleCheckBox,
    handleSelectChange,
    handleSelectBlur,
    loading,
    isFormValid,
  } = useCustomerForm(default_state);

  const history = useHistory();

  return (
    <Box bgcolor="#f9fafd" height={"100%"}>
      <Box
        display="flex"
        justifyContent="space-between"
        width="1134px"
        pt={"26px"}
        mx="auto"
      >
        <img src={acme}></img>
        <Box>
          <Button
            variant="contained"
            color="primary"
            className={classes.roleToggleButton}
          >
            Customer
          </Button>
          <Button
            className={classes.roleToggleButton}
            onClick={() => {
              history.push("/analytics");
            }}
          >
            Analyst
          </Button>
        </Box>
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
              <Box display="flex" justifyContent="space-between" pt={4}>
                <Box>
                  <Typography variant="caption" className={classes.inputField}>
                    FIRST NAME
                  </Typography>
                  <FormInputField
                    value={form.firstName}
                    onChange={handleFormChange}
                    onBlur={handleFormBlur}
                    id="firstName"
                    inputProps={{ className: classes.input }}
                    errorText={formErrors.firstName}
                  />
                </Box>
                <Box>
                  <Typography variant="caption" className={classes.inputField}>
                    LAST NAME
                  </Typography>
                  <FormInputField
                    value={form.lastName}
                    onChange={handleFormChange}
                    onBlur={handleFormBlur}
                    id="lastName"
                    inputProps={{ className: classes.input }}
                    errorText={formErrors.lastName}
                  />
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between" pt={7}>
                <Box>
                  <Typography variant="caption" className={classes.inputField}>
                    DOB
                  </Typography>
                  <FormInputField
                    placeholder="yyyy-mm-dd"
                    id="dob"
                    value={form.dob}
                    onChange={handleFormChange}
                    onBlur={handleFormBlur}
                    inputProps={{ className: classes.input }}
                    errorText={formErrors.dob}
                  />
                </Box>
                <Box>
                  <Typography variant="caption" className={classes.inputField}>
                    SSN
                  </Typography>
                  <FormInputField
                    placeholder="xxx-xx-xxxx"
                    id="ssn"
                    value={form.ssn}
                    onChange={handleFormChange}
                    onBlur={handleFormBlur}
                    inputProps={{ className: classes.input }}
                    errorText={formErrors.ssn}
                  />
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between" pt={7}>
                <Box>
                  <Typography variant="caption" className={classes.inputField}>
                    GENDER
                  </Typography>
                  <Select
                    {...genderProps}
                    value={form.gender}
                    inputProps={{ className: classes.select }}
                    onChange={(event) => handleSelectChange(event, "gender")}
                    onBlur={(event) => handleSelectBlur(event, "gender")}
                    errorText={formErrors.state}
                  ></Select>
                </Box>
              </Box>
            </Box>

            <Box mt={10}>
              <Typography variant="body1" className={classes.subtitle}>
                Contact Information
              </Typography>
              <Box display="flex" justifyContent="space-between" pt={4}>
                <Box>
                  <Typography variant="caption" className={classes.inputField}>
                    ADDRESS
                  </Typography>
                  <FormInputField
                    id="address"
                    value={form.address}
                    onChange={handleFormChange}
                    onBlur={handleFormBlur}
                    inputProps={{ className: classes.input }}
                    errorText={formErrors.address}
                  />
                </Box>
                <Box>
                  <Typography variant="caption" className={classes.inputField}>
                    CITY
                  </Typography>
                  <Select
                    {...cityProps}
                    value={form.city}
                    inputProps={{ className: classes.select }}
                    onChange={(event) => handleSelectChange(event, "city")}
                    onBlur={(event) => handleSelectBlur(event, "city")}
                    errorText={formErrors.city}
                  ></Select>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between" pt={7}>
                <Box>
                  <Typography variant="caption" className={classes.inputField}>
                    STATE
                  </Typography>
                  <Select
                    {...stateProps}
                    value={form.state}
                    inputProps={{ className: classes.select }}
                    onChange={(event) => handleSelectChange(event, "state")}
                    onBlur={(event) => handleSelectBlur(event, "state")}
                    errorText={formErrors.state}
                  ></Select>
                </Box>
                <Box>
                  <Typography variant="caption" className={classes.inputField}>
                    COUNTRY
                  </Typography>
                  <Select
                    {...countryProps}
                    value={form.country}
                    inputProps={{ className: classes.select }}
                    onChange={(event) => handleSelectChange(event, "country")}
                    onBlur={(event) => handleSelectBlur(event, "country")}
                    errorText={formErrors.country}
                  ></Select>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between" pt={7}>
                <Box>
                  <Typography variant="caption" className={classes.inputField}>
                    ZIP
                  </Typography>
                  <FormInputField
                    id="zip"
                    value={form.zip}
                    onChange={handleFormChange}
                    onBlur={handleFormBlur}
                    inputProps={{ className: classes.input }}
                    errorText={formErrors.zip}
                  />
                </Box>
                <Box>
                  <Typography variant="caption" className={classes.inputField}>
                    PHONE
                  </Typography>
                  <FormInputField
                    id="phone"
                    value={form.phone}
                    onChange={handleFormChange}
                    onBlur={handleFormBlur}
                    inputProps={{ className: classes.input }}
                    errorText={formErrors.phone}
                  />
                </Box>
              </Box>
            </Box>
            <Box mt={10}>
              <Typography variant="body1" className={classes.subtitle}>
                FINANCIAL Information
              </Typography>
              <Box display="flex" justifyContent="space-between" pt={4}>
                <Box>
                  <Typography variant="caption" className={classes.inputField}>
                    MONTHLY MORTAGE/RENTPAYMENT
                  </Typography>
                  <FormInputField
                    value={form.rentPayment}
                    onChange={handleFormChange}
                    onBlur={handleFormBlur}
                    id="rentPayment"
                    inputProps={{ className: classes.dollarInput }}
                    errorText={formErrors.rentPayment}
                    startAdornment={
                      <InputAdornment position="start">
                        <Box
                          bgcolor={theme.palette.grey[300]}
                          ml={-3.5}
                          position="absolute"
                          height="100%"
                          width="32px"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          $
                        </Box>
                      </InputAdornment>
                    }
                  />
                </Box>
                <Box>
                  <Typography variant="caption" className={classes.inputField}>
                    ANNUAL INCOME
                  </Typography>
                  <FormInputField
                    value={form.annualIncome}
                    id="annualIncome"
                    onChange={handleFormChange}
                    onBlur={handleFormBlur}
                    inputProps={{ className: classes.dollarInput }}
                    errorText={formErrors.annualIncome}
                    startAdornment={
                      <InputAdornment position="start">
                        <Box
                          bgcolor={theme.palette.grey[300]}
                          ml={-3.5}
                          position="absolute"
                          height="100%"
                          width="32px"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          $
                        </Box>
                      </InputAdornment>
                    }
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box pt={25} pl={25}>
            <img src={CustomerInfoImg} />
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mt={11}>
          <Checkbox
            id="checkBox"
            checked={form.checkBox}
            onBlur={handleFormBlur}
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
            disabled={disabled || loading}
            startIcon={
              loading ? (
                <CircularProgress color="inherit" size={20} />
              ) : undefined
            }
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
