import React from "react";
import {
  Modal as MuiModal,
  Fade,
  Backdrop,
  Box,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& div:focus": {
      outline: "none",
    },
  },
  backdrop: {
    backgroundColor: "#13182099",
  },
}));

export default function Modal({ children, open, ...rest }) {
  const classes = useStyles();

  return (
    <MuiModal
      height="100%"
      width="100%"
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        className: classes.backdrop,
      }}
      className={classes.modal}
      {...rest}
    >
      <Fade in={open}>
        <Box
          pt={15}
          px={20}
          pb={7}
          boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.04)"
          border="1px solid #eaedf3"
          minWidth={"1134px"}
          component={Paper}
        >
          {children}
        </Box>
      </Fade>
    </MuiModal>
  );
}
