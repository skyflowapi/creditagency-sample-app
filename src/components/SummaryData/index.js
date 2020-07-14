import React from "react";
import { Typography, Box, IconButton, Button, CircularProgress } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import {
  YOUR_INFO,
  CONTACT_INFO,
  ACADEMIC_INFO,
  FINANCIAL_INFO,
} from "../../utils/constants";
import Information from "../analystInformation";
import assignment from "../../assets/assignment.png";
import { makeStyles } from "@material-ui/core/styles";
import { useAnalystSummary } from "./hook";
import { useSkyflow } from "../../services";

const useStyles = makeStyles((theme) => ({
  body: {
    minWidth: "1118px",
  },
}));

export default function SummaryData({
  handleClose,
  record,
  notebook,
  handleOnAcceptOrReject,
  loading,
}) {
  const classes = useStyles();
  // const { notebook, data, loading, error } = useAnalystSummary();

  return (
    <div className={classes.body}>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <img style={{ objectFit: "contain" }} src={assignment} />
          <Box pl={2}>
            <Typography variant="h5">Review Your Information</Typography>
            <Typography variant="h6" color="textSecondary">
              Please review the summary of your application below,then submit to continue.
            </Typography>
          </Box>
        </Box>
        <Box>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
      </Box>
      {/* {loading && (
        <Box display={"flex"} justifyContent="center" alignItems="center" height="500px">
          <CircularProgress />
        </Box>
      )} */}
      {record && (
        <>
          <Box display="flex" justifyContent="space-between" mt={10}>
            <Information
              title="YOUR INFORMATION"
              data={record}
              elements={YOUR_INFO}
              notebook={notebook}
            />
            <Information
              title="CONTACT INFORMATION"
              data={record}
              elements={CONTACT_INFO}
              notebook={notebook}
            />
            <Information
              title="ACADEMIC INFORMATION"
              data={record}
              elements={ACADEMIC_INFO}
              notebook={notebook}
            />
            <Information
              title="FINANCIAL INFORMATION"
              data={record}
              elements={FINANCIAL_INFO}
              notebook={notebook}
            />
          </Box>
          <Box display="flex" justifyContent="flex-end" mt={8}>
            <Button
              variant="outlined"
              disabled={loading}
              onClick={handleOnAcceptOrReject.bind(null, record, false)}
            >
              Decline
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "18px" }}
              disabled={loading}
              onClick={handleOnAcceptOrReject.bind(null, record, true)}
            >
              Accept
            </Button>
          </Box>{" "}
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
