import React from "react";
import { Typography, Box, IconButton, Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import {
  YOUR_INFO,
  CONTACT_INFO,
  ACADEMIC_INFO,
  FINANCIAL_INFO,
} from "../../utils/constants";
import Information from "../information";
import assignment from "../../assets/assignment.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    minWidth: "1118px",
  },
}));

export default function SummaryData({handleClose}) {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <img style={{ objectFit: "contain" }} src={assignment} />
          <Box pl={2}>
            <Typography variant="h5">Review Your Information</Typography>
            <Typography variant="h6" color="textSecondary">
              Please review the summary of your application below,then submit to
              continue.
            </Typography>
          </Box>
        </Box>
        <Box>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={10}>
        <Information title="YOUR INFORMATION" data={YOUR_INFO} />
        <Information title="CONTACT INFORMATION" data={CONTACT_INFO} />
        <Information title="ACADEMIC INFORMATION" data={ACADEMIC_INFO} />
        <Information title="FINANCIAL INFORMATION" data={FINANCIAL_INFO} />
      </Box>
      <Box display="flex" justifyContent="flex-end" mt={8}>
          <Button variant="outlined">Decline</Button>
          <Button variant="contained" color="primary" style={{marginLeft:'18px'}}>Accept</Button>
      </Box>
    </div>
  );
}
