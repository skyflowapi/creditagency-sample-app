import React from "react";
import { Typography, Box, Grid, makeStyles, Button } from "@material-ui/core";
import confirmation_image from "../../assets/confirmation_image.jpg";
import acme from "../../assets/acme.png";
import { useHistory, useLocation } from "react-router-dom";
import FormInputField from "../../components/FormOutlinedInputField";

const useStyles = makeStyles((theme) => ({
  roleToggleButton: {
    fontSize: "14px",
    textTransform: "none",
    padding: "1px 16px",
    borderRadius: "2px",
    boxShadow: "none",
  },
  inputField: {
    display: "inline-block",
    marginBottom: "4px",
    color: theme.palette.text.secondary,
    fontWeight: "normal",
  },
  input: {
    width: "300px",
    background: "#f9fafd",
    color: "#344563",
    border: "solid 1px #dfe3eb",
    borderRadius: "4px",
  },
}));

const PendingPage = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { location } = useLocation();
  // console.log("location", location);
  console.log("props", props);

  React.useEffect(() => {
    console.log("location", location);
  }, [location]);

  return (
    <Box
      bgcolor="#f9fafd"
      // height={window.innerHeight}
      display="flex"
      flexDirection="column"
      alignItems="center"
      height={"100%"}
      minHeight={"100vh"}
    >
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
            onClick={() => {
              history.push("/customer", { xyz: "xyz" });
            }}
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
        // width="100vw"
        width="1134px"
        display="flex"
        mt={"24px"}
        pt={"80px"}
        // pb={"194px"}
        pb={"194px"}
        justifyContent="center"
        borderRadius={"12px"}
        boxShadow="0 2px 25px 5px rgba(0, 0, 0, 0.04)"
        bgcolor="#fff"
      >
        <Grid container style={{ width: "973px" }} spacing={4}>
          <Grid item container flexDirection="column" spacing={7} xs={9}>
            <Grid item>
              <Typography
                variant="h2"
                style={{ width: "644px", lineHeight: "normal" }}
              >
                {location &&
                location.state &&
                location.state.status === "Auto Approved"
                  ? "Congratulations, you’ve been approved!"
                  : "Thanks for applying"}
              </Typography>
            </Grid>
            <Grid item>
              {location &&
              location.state &&
              location.state.status === "Auto Approved" ? (
                <Typography
                  variant="h5"
                  style={{ width: "644px", lineHeight: "normal" }}
                >
                  We’re delighted to let you know you’ve been approved for{" "}
                  <b>ACME Credit Card</b>, with a credit limit of <b>$7,300</b>.
                  Your account is considered open as of today.
                </Typography>
              ) : (
                <Typography
                  variant="h5"
                  style={{ width: "644px", lineHeight: "normal" }}
                >
                  We need to review your application a little longer.
                </Typography>
              )}
            </Grid>
            <Grid item>
              <Typography
                variant="h5"
                style={{ width: "644px", lineHeight: "normal" }}
              >
                {location &&
                location.state &&
                location.state.status === "Auto Approved"
                  ? "You can always find a full list of benefits here. Once you have your new card in hand, you’ll be able to log in and experience the full site."
                  : "We'll let you know our decision in writing as soon as we can. If we approve your application, you will receive your card in the mail in 7-10 business days. Please don't resubmit your application."}
              </Typography>
            </Grid>
            {location &&
              location.state &&
              location.state.status === "Auto Approved" && (
                <Grid item>
                  <Typography
                    variant="h5"
                    style={{ width: "644px", lineHeight: "normal" }}
                  >
                    You’ll receive your card in the mail in 7-10 business days.
                    To start enjoying the many benifits of your card, activate
                    it as soon as it arrives.
                  </Typography>
                </Grid>
              )}
            {location &&
              location.state &&
              location.state.status === "Auto Approved" && (
                <Grid item>
                  <Box>
                    <Typography
                      variant="caption"
                      className={classes.inputField}
                    >
                      CREDIT CARD NUMBER
                    </Typography>
                    <FormInputField
                      value={"xxxxxxxx6789"}
                      onChange={() => {}}
                      onBlur={() => {}}
                      id="creditCardNumber"
                      inputProps={{ className: classes.input }}
                      disabled={true}
                      // errorText={formErrors.lastName}
                    />
                  </Box>
                </Grid>
              )}
            <Grid item>
              <Typography
                variant="h5"
                style={{ width: "644px", lineHeight: "normal" }}
              >
                Thanks for choosing ACME Credit Card.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={3} style={{ margin: "auto" }}>
            <img src={confirmation_image}></img>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PendingPage;
