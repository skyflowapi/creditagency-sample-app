import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
      grey:{
          0:"#fbfbfd",
          1:"#696969"
      },
      black:{
          0:"#1d1d1d"
      },
      blue:
      {
          0:"#1665d8"
      },
      white:{
        0:"#ffffff"
      }
    // primary: {
    // },
    // secondary: {
    // },
    // error: {
    // },
    // background: {
    // },
    // text : {
        //add primary secondary etc here
    // },
    // action : {
        //add hover,disabled etc here
    // },
    // status: {
        //your own business colors
    //   },
  },
  spacing : 4,
  typography : {
      fontFamily : 'Roboto',
      //add variants here
      h1:{
        fontSize: "38px",
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: '1.39',
        letterSpacing: 'normal',
      },
      h3:{
        fontSize: "23px",
        fontStyle: 'normal',
        lineHeight: '1.39',
        letterSpacing: 'normal'
      },
      h5:{
        fontSize: "18px",
        fontStyle: 'normal',
        lineHeight: '1.39',
        letterSpacing: 'normal'
      },
      h6:{
        fontSize: "15px",
        fontStyle: 'normal',
        lineHeight: '1.39',
        letterSpacing: 'normal'
      }

  },
  overrides : {
      //Add global css here
  },


});

export default theme;

