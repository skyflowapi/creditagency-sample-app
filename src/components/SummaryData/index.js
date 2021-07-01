import React from "react";
import {
  Typography,
  Box,
  IconButton,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import {
  YOUR_INFO,
  CONTACT_INFO,
  ACADEMIC_INFO,
  FINANCIAL_INFO,
  DOCUMENT_INFO,
} from "../../utils/constants";
import Information from "../analystInformation";
import assignment from "../../assets/assignment.png";
import { makeStyles } from "@material-ui/core/styles";
import { useAnalystSummary } from "./hook";
import { useSkyflow } from "../../services";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  body: {
    // minWidth: "1118px",
  },
  divider: {
    backgroundColor: theme.palette.grey[300],
  },
  button: {
    textTransform: "none",
    padding: "8px 30px",
    fontWeight: "400",
    borderRadius: "6px",
    boxShadow: "0 1px 3px 0 rgba(48, 49, 51, 0.1)",
  },
  declineButton: {
    "&.MuiButton-contained": {
      backgroundColor: "#e50000",
      color: "#fff",
    },
    "&.MuiButton-contained.Mui-disabled": {
      color: "rgba(0, 0, 0, 0.26)",
      backgroundColor: "rgba(0, 0, 0, 0.12)",
    },
  },
  goBack: {
    cursor: "pointer",
  },
}));

export default function SummaryData({
  handleClose,
  record,
  notebook,
  handleOnAcceptOrReject,
  loading,
  handleRevealClick,
  handleHideClick,
  checks,
  handleChecks,
  handleApproveOrDecline,
  approvedLoading,
  declinedLoading,
  revealLoading,
}) {
  const classes = useStyles();
  // const { notebook, data, loading, error } = useAnalystSummary();

  return (
    <div className={classes.body}>
      <Box
        display="flex"
        alignItems="center"
        mb={6}
        className={classes.goBack}
        onClick={handleClose}
      >
        <ArrowBackIcon />
        <Typography variant="h6" style={{ marginLeft: "8px" }}>
          Go back
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          {/* <img style={{ objectFit: "contain" }} src={assignment} /> */}
          <Box>
            <Typography variant="h5">REVIEW APPLICATION</Typography>
            <Typography variant="h5" color="textSecondary">
              Review the summary of the applicant, then choose to approve or
              decline request.
            </Typography>
          </Box>
        </Box>
        {/* <Box>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box> */}
      </Box>
      {/* {loading && (
        <Box display={"flex"} justifyContent="center" alignItems="center" height="500px">
          <CircularProgress />
        </Box>
      )} */}
      {record && (
        <>
          <Box display="flex" justifyContent="space-between" mt={7}>
            <Information
              title="PERSONAL INFORMATION"
              data={record}
              elements={YOUR_INFO}
              notebook={notebook}
              handleRevealClick={handleRevealClick}
              handleHideClick={handleHideClick}
              checks={checks}
              handleChecks={handleChecks}
            />
            <Information
              title="CONTACT INFORMATION"
              data={record}
              elements={CONTACT_INFO}
              notebook={notebook}
              handleRevealClick={handleRevealClick}
              handleHideClick={handleHideClick}
              checks={checks}
              handleChecks={handleChecks}
              revealLoading = {revealLoading}
            />
            <Information
              title="FINANCIAL INFORMATION"
              data={record}
              elements={FINANCIAL_INFO}
              notebook={notebook}
              handleRevealClick={handleRevealClick}
              handleHideClick={handleHideClick}
              checks={checks}
              handleChecks={handleChecks}
            />
            <Information
              title="DOCUMENTS VERIFIED"
              data={record}
              elements={DOCUMENT_INFO}
              notebook={notebook}
              handleRevealClick={handleRevealClick}
              handleHideClick={handleHideClick}
              checks={checks}
              handleChecks={handleChecks}
            />
          </Box>
          {record.fields.application_status === "Pending" && (
            <>
              <Box
                height={"2px"}
                width={"100%"}
                className={classes.divider}
              ></Box>
              <Box display="flex" justifyContent="flex-start" mt={8}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "20px" }}
                  disabled={
                    approvedLoading ||
                    declinedLoading ||
                    !checks["kyc"] ||
                    !checks["aml"] ||
                    !checks["credits"]
                  }
                  className={classes.button}
                  // onClick={handleOnAcceptOrReject.bind(null, record, true)}
                  onClick={() =>
                    handleApproveOrDecline(record.fields.skyflow_id, "Approved")
                  }
                  startIcon={
                    approvedLoading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : (
                      undefined
                    )
                  }
                >
                  Approve
                </Button>
                <Button
                  variant="contained"
                  // color="secondary"
                  disabled={
                    approvedLoading ||
                    declinedLoading ||
                    !checks["kyc"] ||
                    !checks["aml"] ||
                    !checks["credits"]
                  }
                  className={classes.button + " " + classes.declineButton}
                  // style={{ backgroundColor: "#e50000", color: "#fff" }}
                  // onClick={handleOnAcceptOrReject.bind(null, record, false)}
                  onClick={() =>
                    handleApproveOrDecline(record.fields.skyflow_id, "Declined")
                  }
                  startIcon={
                    declinedLoading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : (
                      undefined
                    )
                  }
                >
                  Decline
                </Button>
              </Box>
            </>
          )}
        </>
      )}
      {/* {error && (
        <Box display={"flex"} justifyContent="center" alignItems="center" height="500px">
          <Typography variant="h3" color="error">
            Some Error has occurred
          </Typography>
        </Box>
      )} */}
    </div>
  );
}
