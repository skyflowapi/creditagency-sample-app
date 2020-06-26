import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    grey: {
      0: "#fbfbfd",
      1: "#696969",
    },
    black: {
      0: "#1d1d1d",
    },
    blue: {
      0: "#1665d8",
    },
    royalBlue: {
      0: "#4169E1",
    },
    white: {
      0: "#ffffff",
    },
    lightBlue: {
      0: "#eaedf3",
    },
    skyBlue: {
      0: "#549af0",
    },
    green: {
      0: "#39b54a",
    },
    current: {
      0: "#4169E1",
    },
    completed: {
      0: "#1d1d1d",
    },
    pending: {
      0: "#696969",
    },
    // error: {
    // },
    background: {
      default: "#fff",
    },
    primary:{
      main:'#1665d8'
    },
    text: {
      primary: "#1d1d1d",
      secondary: "#696969",
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
  spacing: 4,
  typography: {
    fontFamily: "Roboto",
    //add variants here
    h1: {
      fontSize: "36px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "1.39",
      letterSpacing: "normal",
    },
    h3: {
      fontSize: "23px",
      fontStyle: "normal",
      lineHeight: "1.39",
      letterSpacing: "normal",
    },
    h5: {
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "1.56",
      letterSpacing: "normal",
    },
    h6: {
      fontSize: "14px",
      fontStyle: "normal",
      lineHeight: "1.43",
      letterSpacing: "normal",
    },
    caption: {
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "1.5",
      letterSpacing: "normal",
    },
  },
  overrides: {
    //Add global css here
  },
});

export default theme;
