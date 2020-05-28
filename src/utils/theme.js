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
      royalBlue:{
        0:"#4169E1",
        
      },
      white:{
        0:"#ffffff"
      },
      lightBlue:{
        0:"#eaedf3"
      },
      skyBlue:{
        0:"#549af0"
      },
      green:{
        0:"#39b54a"
      },
    current: {
      0:"#4169E1"
    },
    completed: {
      0:"#1d1d1d"
    },
    pending:{
      0:"#696969"
    },
    // error: {
    // },
    background: {
      default:"#fff"
    },
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
        fontSize: "36px",
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
        fontSize: "14px",
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

