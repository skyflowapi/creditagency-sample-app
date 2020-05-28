import React, { useState } from "react";
import { WithWizard } from "react-albus";
import Footer from "../layout/footer";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import theme from "../../utils/theme";

const useStyles = makeStyles((theme) => ({
  footer: {
   
    display: "flex",
    bottom: theme.spacing(10),
    width:"70%",
    position:"absolute",
    justifyContent: "space-between",
    marginLeft:theme.spacing(100),
    
  },
  next:{
      textAlign:"right",
      marginRight:0,
      width:"100%"
  },
  previous:{
      textAlign:"left",
      marginLeft:theme.spacing(15)
  },
  button:{
    textTransform:"capitalize",
    width:"180px",
    height:"38px",
    
    
    ...theme.typography.h6
  },
  nextButton:{
    textTransform:"capitalize",
    width:"180px",
    height:"38px",
    ...theme.typography.h6,
    background:theme.palette.blue[0]
  }

}));
function Navigation(props) {
  const classes = useStyles();
  const history=useHistory();
  console.log(history);
  return (
    <WithWizard
      render={({ next, previous, step, steps }) => (
        <div className={classes.footer}>
          
            <div className={classes.previous}>
            <Button
              
              onClick={steps.indexOf(step) > 0 ? previous:()=>history.push("/")}
              variant="outlined"
              className={classes.button}
            >
              Previous
            </Button>
            </div>
          
          
            <div className={classes.next}>
            <Button
              className={classes.nextButton}
              onClick={steps.indexOf(step) < steps.length - 1 ? next:()=>history.push("/summary")}
              variant="contained"
              color="primary"
              
              // disabled
            >
              Next
            </Button>
            </div>
          
        </div>
      )}
    />
  );
}

export default Navigation;
