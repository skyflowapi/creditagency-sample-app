import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Box } from "@material-ui/core";
import theme from "../../utils/theme";

const useStyles = makeStyles((theme) => ({}));

export default React.forwardRef((props, ref) => {
  const classes = useStyles();

  return <Box ref={ref} {...props} />;
});
