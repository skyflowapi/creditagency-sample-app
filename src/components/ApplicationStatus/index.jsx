import React from "react";
import {
  makeStyles,
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link,
  CircularProgress,
} from "@material-ui/core";

const ApplicationStatus = (props) => {
  return (
    <Box display="flex" justifyContent="center">
    <Box width="80px" height="25px" textAlign="center">
      <Typography variant="h6" style={{color: props.color.fontColor, backgroundColor: props.color.backgroundColor}}>{props.applicationStatus}</Typography>
    </Box>
    </Box>
  );
};

export default ApplicationStatus;
