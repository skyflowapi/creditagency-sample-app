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
      <Box width="116px" height="25px" textAlign="center">
        <Typography
          variant="h6"
          style={{
            color: props.color ? props.color.fontColor : "",
            backgroundColor: props.color ? props.color.backgroundColor : "",
            padding: "4px",
          }}
        >
          {props.applicationStatus}
        </Typography>
      </Box>
    </Box>
  );
};

export default ApplicationStatus;
