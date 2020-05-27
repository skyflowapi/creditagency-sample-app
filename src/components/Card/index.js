import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 250,
    width: 350,
    
  },
  
  text: {
    textAlign: "center",
    objectFit: "contain",
   ...theme.typography.h5,
   marginTop:theme.spacing(10),
    color: theme.palette.black,
  },
  image: {
    
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(30),
    alignItems: "center",
  },
}));

export default function CardComp({ type, text,handlePage }) {
  
  const classes = useStyles();

  return (
    
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing="10">
          <Grid item>
            <Paper style={{ cursor: "pointer" }} className={classes.paper} onClick={handlePage}>
              
                <img className={classes.image} src={type} alt="student"></img>
              
              <Typography className={classes.text}>{text}</Typography>
            </Paper>
          </Grid>
          
        </Grid>
      </Grid>
    </Grid>
  );
}
